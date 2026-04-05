const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const Problem = require('../models/Problem');
const User = require('../models/User');

// Write a temp file, compile/run it, return output
function runCode(lang, solutionCode, driverCode, args) {
  return new Promise((resolve) => {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pico-'));
    
    try {
      if (lang === 'c') {
        const solFile = path.join(tmpDir, 'solution.c');
        const drvFile = path.join(tmpDir, 'main.c');
        const outFile = path.join(tmpDir, 'program.exe');
        fs.writeFileSync(solFile, solutionCode);
        fs.writeFileSync(drvFile, driverCode);
        const argsStr = args.map(a => `"${a}"`).join(' ');
        // Try gcc first (Linux/Mac/WSL), then cc
        const compileCmd = `gcc "${solFile}" "${drvFile}" -o "${outFile}" 2>&1`;
        exec(compileCmd, { timeout: 10000 }, (compileErr, compileOut) => {
          const errMsg = compileOut || compileErr?.message || '';
          if (compileErr && (errMsg.includes('not recognized') || errMsg.includes('No such file') || errMsg.includes('not found'))) {
            cleanup(tmpDir);
            return resolve({ stderr: '⚠️ GCC not found on this machine.\nInstall MinGW-w64: https://www.mingw-w64.org/downloads/\nThen add gcc to your PATH and restart the backend server.', stdout: '', code: 1 });
          }
          if (compileErr) {
            cleanup(tmpDir);
            return resolve({ stderr: compileOut || compileErr.message, stdout: '', code: 1 });
          }
          const runCmd = `"${outFile}" ${argsStr}`;
          exec(runCmd, { timeout: 5000 }, (runErr, stdout, stderr) => {
            cleanup(tmpDir);
            resolve({ stdout: stdout || '', stderr: stderr || runErr?.message || '', code: runErr ? 1 : 0 });
          });
        });

      } else if (lang === 'python') {
        const solFile = path.join(tmpDir, 'solution.py');
        const drvFile = path.join(tmpDir, 'main.py');
        fs.writeFileSync(solFile, solutionCode);
        fs.writeFileSync(drvFile, driverCode);
        const argsStr = args.join(' ');
        // Try python3 first, fallback to python
        // Run python from the tmpDir so `from solution import ...` works
        const runCmd = `python main.py ${argsStr}`;
        exec(runCmd, { cwd: tmpDir, timeout: 10000 }, (err, stdout, stderr) => {
          if (err && (stderr?.includes('not recognized') || err.message?.includes('not recognized'))) {
            // Try python3
            exec(`python3 main.py ${argsStr}`, { cwd: tmpDir, timeout: 10000 }, (err2, out2, err2s) => {
              cleanup(tmpDir);
              resolve({ stdout: out2 || '', stderr: err2s || err2?.message || '', code: err2 ? 1 : 0 });
            });
          } else {
            cleanup(tmpDir);
            resolve({ stdout: stdout || '', stderr: stderr || err?.message || '', code: err ? 1 : 0 });
          }
        });

      } else if (lang === 'java') {
        // Java: Solution.java + Main.java, compile both, run Main with args
        const solFile = path.join(tmpDir, 'Solution.java');
        const drvFile = path.join(tmpDir, 'Main.java');
        fs.writeFileSync(solFile, solutionCode);
        fs.writeFileSync(drvFile, driverCode);
        const argsStr = args.join(' ');
        exec(`javac "${solFile}" "${drvFile}"`, { cwd: tmpDir, timeout: 15000 }, (err, out, errOut) => {
          if (err) {
            cleanup(tmpDir);
            return resolve({ stderr: errOut || err.message, stdout: '', code: 1 });
          }
          exec(`java -cp "${tmpDir}" Main ${argsStr}`, { timeout: 10000 }, (runErr, stdout, stderr) => {
            cleanup(tmpDir);
            resolve({ stdout: stdout || '', stderr: stderr || runErr?.message || '', code: runErr ? 1 : 0 });
          });
        });

      } else {
        cleanup(tmpDir);
        resolve({ stderr: `Language '${lang}' not supported`, stdout: '', code: 1 });
      }
    } catch (e) {
      cleanup(tmpDir);
      resolve({ stderr: e.message, stdout: '', code: 1 });
    }
  });
}

function cleanup(dir) {
  try { fs.rmSync(dir, { recursive: true, force: true }); } catch {}
}

// @route   POST /api/execute
// @desc    Submit code against a problem's hidden test cases
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { problemId, code, language } = req.body;

    if (!problemId || !code || !language) {
      return res.status(400).json({ error: 'problemId, code, and language are required' });
    }

    const problem = await Problem.findById(problemId);
    if (!problem) {
      return res.status(404).json({ error: 'Problem not found' });
    }

    const template = problem.templates[language];
    if (!template) {
      return res.status(400).json({ error: `Language '${language}' not supported for this problem` });
    }

    const results = [];
    let allPassed = true;

    for (const testCase of problem.testCases) {
      const { stdout, stderr, code: exitCode } = await runCode(
        language,
        code,
        template.driverCode,
        testCase.args
      );

      // Compile/runtime error
      if (exitCode !== 0 && !stdout) {
        return res.json({
          status: 'COMPILE_ERROR',
          error: stderr || 'Compilation or runtime error',
          output: stderr,
          testsPassed: 0,
          totalTests: problem.testCases.length
        });
      }

      const receivedOutput = stdout.trim();
      const expectedOutput = testCase.expectedOutput.trim();
      const passed = receivedOutput === expectedOutput;
      if (!passed) allPassed = false;

      results.push({
        args: testCase.args,
        expected: expectedOutput,
        received: receivedOutput,
        passed,
        stderr: stderr || ''
      });

      if (!passed) break;
    }

    const passedCount = results.filter(r => r.passed).length;

    // On SUCCESS: record submission + emit real live feed event
    if (allPassed) {
      try {
        const jwt = require('jsonwebtoken');
        const authHeader = req.header('Authorization');
        if (authHeader && authHeader.startsWith('Bearer ')) {
          const decoded = jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET || 'fallback_secret_key_123');
          const currentUser = await User.findById(decoded.user.id).select('name avatar');
          if (currentUser) {
            const avatarMap = { Lion: '🦁', Tiger: '🐯', Elephant: '🐘', Giraffe: '🦒', Goat: '🐐', Parrot: '🦜' };
            const avatarEmoji = avatarMap[currentUser.avatar] || '🦜';
            // Emit real event to live feed
            if (req.io) {
              req.io.emit('loreFeed', {
                id: Date.now(),
                text: `${avatarEmoji} ${currentUser.name} solved "${problem.title}" in ${language.toUpperCase()}! 🔥`,
                timestamp: new Date().toISOString(),
                isReal: true
              });
            }
            // Record submission + award XP
            await User.findByIdAndUpdate(currentUser._id, {
              $push: { submissions: { problemId: problem._id, problemTitle: problem.title, language, status: 'SUCCESS' } },
              $inc: { xp: 10 }
            });
          }
        }
      } catch (_) { /* Non-critical: don't fail the request */ }
    }

    return res.json({
      status: allPassed ? 'SUCCESS' : 'WRONG_ANSWER',
      testsPassed: passedCount,
      totalTests: problem.testCases.length,
      results,
      output: allPassed
        ? `✅ All ${problem.testCases.length} tests passed! +10 XP`
        : `❌ Failed: Expected "${results[results.length - 1].expected}", got "${results[results.length - 1].received}"`
    });

  } catch (err) {
    console.error('Execution error:', err.message);
    return res.status(500).json({ error: err.message || 'Server error during execution' });
  }
});

module.exports = router;
