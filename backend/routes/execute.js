const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');
const Problem = require('../models/Problem');
const User = require('../models/User');

// 🚀 REMOTE EXECUTION ENGINE (PISTON API)
// This enables 'zero-install' code execution across all devices online.
async function runCode(lang, solutionCode, driverCode, args) {
  const axios = require('axios');
  
  const languageMap = {
    'python': { name: 'python', version: '3.10.0', solFile: 'solution.py', drvFile: 'main.py' },
    'c': { name: 'c', version: '10.2.0', solFile: 'solution.c', drvFile: 'main.c' },
    'java': { name: 'java', version: '15.0.2', solFile: 'Solution.java', drvFile: 'Main.java' }
  };

  const config = languageMap[lang];
  if (!config) return { stderr: `Language '${lang}' not supported by remote engine`, stdout: '', code: 1 };

  try {
    const payload = {
      language: config.name,
      version: config.version,
      files: [
        { name: config.solFile, content: solutionCode },
        { name: config.drvFile, content: driverCode }
      ],
      args: args.map(String)
    };

    const response = await axios.post('https://emkc.org/api/v2/piston/execute', payload, { timeout: 15000 });
    const { run } = response.data;

    return {
      stdout: run.stdout || '',
      stderr: run.stderr || '',
      code: run.code
    };
  } catch (err) {
    console.error('[Remote Execution Error]:', err.message);
    return {
      stderr: `🦜 Pico: 'Network failure in the code-wing! Remote compiler is unreachable.' (${err.message})`,
      stdout: '',
      code: 1
    };
  }
}

function cleanup(dir) {
  try { fs.rmSync(dir, { recursive: true, force: true }); } catch {}
}

const getPicoSnark = (errorType, stderr = '') => {
  const compileSnarks = [
    "🦜 Pico: 'Forgot a semicolon? My beak handles syntax better than your fingers!'",
    "🦜 Pico: 'This code is as messy as my nest after a fruit party. Fix the syntax!'",
    "🦜 Pico: 'Compilation failed. Even a fledgling knows you can't run broken logic!'",
    "🦜 Pico: 'Error in the engine! Are you trying to fly with one wing?'"
  ];
  const wrongSnarks = [
    "🦜 Pico: 'Wrong answer! Your logic is migrating in the wrong direction.'",
    "🦜 Pico: 'Close, but no sunflower seed. Try again, human!'",
    "🦜 Pico: 'The output is wrong. Did you calculate that with a bird brain?'",
    "🦜 Pico: 'Logic error! You're chirping up the wrong tree.'"
  ];

  if (errorType === 'COMPILE_ERROR') {
    if (stderr.includes('expected \';\'')) return "🦜 Pico: 'The legendary missing semicolon... a classic human blunder!'";
    if (stderr.includes('undeclared')) return "🦜 Pico: 'Using variables you haven't introduced? How rude!'";
    return compileSnarks[Math.floor(Math.random() * compileSnarks.length)];
  }
  return wrongSnarks[Math.floor(Math.random() * wrongSnarks.length)];
};

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
          picoMsg: getPicoSnark('COMPILE_ERROR', stderr),
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
          const currentUser = await User.findById(decoded.user.id).select('name avatar xpBoostUntil');
          if (currentUser) {
            const avatarMap = { Lion: '🦁', Tiger: '🐯', Elephant: '🐘', Giraffe: '🦒', Goat: '🐐', Parrot: '🦜', 'Electric Parrot': '⚡🦜' };
            const avatarEmoji = avatarMap[currentUser.avatar] || '🦜';

            // Check for XP Boost
            let xpReward = 10;
            if (currentUser.xpBoostUntil && currentUser.xpBoostUntil > new Date()) {
              xpReward = 20;
            }

            // Emit real event to live feed
            if (req.io) {
              req.io.emit('loreFeed', {
                id: Date.now(),
                text: `${avatarEmoji} ${currentUser.name} solved "${problem.title}" in ${language.toUpperCase()}! 🔥`,
                timestamp: new Date().toISOString(),
                isReal: true,
                avatar: currentUser.avatar
              });
            }
            // Record submission + award XP
            await User.findByIdAndUpdate(currentUser._id, {
              $push: { submissions: { problemId: problem._id, problemTitle: problem.title, language, status: 'SUCCESS' } },
              $inc: { xp: xpReward }
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
      picoMsg: allPassed ? `🦜 Pico: "Impressive! You actually solved it. Don't let it go to your head, human!"` : getPicoSnark('WRONG_ANSWER'),
      output: allPassed
        ? `✅ All ${problem.testCases.length} tests passed! +${(allPassed && req.user_boost_active) ? 20 : 10} XP`
        : `❌ Failed: Expected "${results[results.length - 1].expected}", got "${results[results.length - 1].received}"`
    });

  } catch (err) {
    console.error('Execution error:', err.message);
    return res.status(500).json({ error: err.message || 'Server error during execution' });
  }
});

module.exports = router;
