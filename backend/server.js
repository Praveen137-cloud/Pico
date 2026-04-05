const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { createServer } = require('http');
const { Server } = require('socket.io');

const executionRoutes = require('./routes/execute');
const authRoutes = require('./routes/auth');
const problemsRoutes = require('./routes/problems');
const authMiddleware = require('./middleware/auth');

const Subject = require('./models/Subject');
const User = require('./models/User');
const Problem = require('./models/Problem');

app.use(cors({
  origin: function (origin, callback) {
    const allowed = ['https://pico-sooty.vercel.app', 'http://localhost:5173'];
    if (!origin || allowed.indexOf(origin) !== -1 || origin.includes('vercel.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Admin Seeding Routes (Production Fix)
app.get('/api/admin/seed', async (req, res) => {
  try {
    const subjects = require('./seed_subjects');
    await Subject.deleteMany({});
    await Subject.insertMany(subjects);
    res.json({ success: true, message: 'Subjects seeded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/seed-problems', async (req, res) => {
  try {
    const problems = require('./seed_problems');
    for (const p of problems) {
      await Problem.findOneAndUpdate({ title: p.title }, p, { upsert: true });
    }
    res.json({ success: true, message: 'Problems seeded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Routes
app.use('/api/execute', (req, res, next) => { req.io = io; next(); }, executionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemsRoutes);

// Free-play code runner for the Code Playground (no test cases, just raw execution)
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

app.post('/api/run', async (req, res) => {
  const { code, language } = req.body;
  if (!code || !language) return res.status(400).json({ error: 'code and language are required' });

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pico-run-'));
  const cleanup = () => { try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {} };

  try {
    if (language === 'python') {
      const f = path.join(tmpDir, 'main.py');
      fs.writeFileSync(f, code);
      exec(`python main.py`, { cwd: tmpDir, timeout: 10000 }, (err, stdout, stderr) => {
        cleanup();
        res.json({ output: stdout || stderr || '', stderr: stderr || '', code: err ? 1 : 0 });
      });
    } else if (language === 'javascript') {
      const f = path.join(tmpDir, 'main.js');
      fs.writeFileSync(f, code);
      exec(`node main.js`, { cwd: tmpDir, timeout: 10000 }, (err, stdout, stderr) => {
        cleanup();
        res.json({ output: stdout || stderr || '', stderr: stderr || '', code: err ? 1 : 0 });
      });
    } else if (language === 'c') {
      const sf = path.join(tmpDir, 'main.c');
      const out = path.join(tmpDir, 'program.exe');
      fs.writeFileSync(sf, code);
      exec(`gcc "${sf}" -o "${out}" 2>&1`, { timeout: 10000 }, (cErr, cOut) => {
        if (cErr) { cleanup(); return res.json({ output: cOut || cErr.message, stderr: cOut, code: 1 }); }
        exec(`"${out}"`, { timeout: 5000 }, (rErr, stdout, stderr) => {
          cleanup();
          res.json({ output: stdout || stderr || '', stderr: stderr || '', code: rErr ? 1 : 0 });
        });
      });
    } else if (language === 'java') {
      const sf = path.join(tmpDir, 'Main.java');
      fs.writeFileSync(sf, code);
      exec(`javac Main.java`, { cwd: tmpDir, timeout: 15000 }, (cErr, cOut, cErr2) => {
        if (cErr) { cleanup(); return res.json({ output: cErr2 || cErr.message, stderr: cErr2, code: 1 }); }
        exec(`java -cp . Main`, { cwd: tmpDir, timeout: 10000 }, (rErr, stdout, stderr) => {
          cleanup();
          res.json({ output: stdout || stderr || '', stderr: stderr || '', code: rErr ? 1 : 0 });
        });
      });
    } else {
      cleanup();
      res.status(400).json({ error: `Unsupported language: ${language}` });
    }
  } catch (err) {
    cleanup();
    res.status(500).json({ error: err.message });
  }
});

const Subject = require('./models/Subject');
const User = require('./models/User');

app.get('/api/subjects', authMiddleware, async (req, res) => {
  try {
    const subjects = await Subject.find({}).lean();
    const user = await User.findById(req.user.id);
    if (!user) return res.json(subjects);

    // 🔥 CACHE BUSTING: Prevent 304 Not Modified for progress data
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('X-Pico-Status', '2.1.0-EXPANDED'); // Version check for browser

    const completedIds = user.completedUnits.map(id => id.toString());

    // Merge progress
    const processed = subjects.map(subject => {
      subject.sections.forEach((section, sIdx) => {
        section.units.forEach((unit, uIdx) => {
          const isDone = completedIds.includes(unit._id.toString());
          unit.isCompleted = isDone;
          
          // 🔥 USER REQUEST: Unlock ALL lessons for free exploration
          unit.isUnlocked = true;
        });
      });
      return subject;
    });

    res.json(processed);
  } catch(err) {
    res.status(500).json({error: err.message});
  }
});

// Real leaderboard from DB — all users ranked by XP
app.get('/api/leaderboard', authMiddleware, async (req, res) => {
  try {
    const users = await User.find({}, 'name xp avatar streak lessonsCompleted').sort({ xp: -1 }).limit(50);
    res.json(users.map((u, idx) => ({
      rank: idx + 1,
      _id: u._id,
      name: u.name,
      xp: u.xp,
      avatar: u.avatar,
      streak: u.streak,
      lessonsCompleted: u.lessonsCompleted
    })));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({error: 'User not found'});
    
    // 🔥 Streak Logic: Check if they practiced today or yesterday
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (!user.lastStreakUpdate) {
      user.streak = 1;
      user.lastStreakUpdate = now;
    } else {
      const last = new Date(user.lastStreakUpdate.getFullYear(), user.lastStreakUpdate.getMonth(), user.lastStreakUpdate.getDate());
      const diffTime = today - last;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        user.streak += 1;
        user.lastStreakUpdate = now;
      } else if (diffDays > 1) {
        user.streak = 1;
        user.lastStreakUpdate = now;
      }
      // If diffDays is 0, they already updated today, so do nothing.
    }
    
    await user.save();
    res.json(user);
  } catch(err) {
    res.status(500).json({error: err.message});
  }
});

app.put('/api/user', authMiddleware, async (req, res) => {
  try {
    const { name, avatar, preferredLanguage } = req.body;
    const updates = {};
    if (name !== undefined) updates.name = name;
    if (avatar !== undefined) updates.avatar = avatar;
    if (preferredLanguage !== undefined) updates.preferredLanguage = preferredLanguage;
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
    res.json(user);
  } catch(err) {
    res.status(500).json({error: err.message});
  }
});

app.post('/api/unlock', (req, _res, next) => { req.io = io; next(); }, authMiddleware, async (req, res) => {
  try {
    const { subjectId, sectionId, unitId } = req.body;
    
    // 1. Find the User
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({error: 'User not found'});

    // 2. Add to completedUnits if not already there
    const alreadyCompleted = user.completedUnits.some(id => id.toString() === unitId);
    if (!alreadyCompleted) {
      user.completedUnits.push(unitId);
    }

    // 3. Grant XP and stats
    user.xp += 10;
    user.lessonsCompleted += 1;
    await user.save();

    // 4. Find the unit name for the lore feed
    const subject = await Subject.findById(subjectId);
    let unitTitle = 'a mystery unit';
    if (subject) {
      const section = subject.sections.find(s => s._id.toString() === sectionId);
      if (section) {
        const unit = section.units.find(u => u._id.toString() === unitId);
        if (unit) unitTitle = unit.title;
      }
    }

    // 🔥 Emit lore event
    const loreMessages = [
      `just completed "${unitTitle}"! 🔥`,
      `crushed "${unitTitle}" 💪`,
      `leveled up on "${unitTitle}"! ⚡`,
    ];
    const text = loreMessages[Math.floor(Math.random() * loreMessages.length)];
    req.io.emit('loreFeed', {
      id: Date.now(),
      text: `${user.name} ${text}`,
      avatar: user.avatar,
      isReal: true,
      timestamp: new Date().toISOString()
    });

    res.json({ success: true, user });
  } catch(err) {
    res.status(500).json({error: err.message});
  }
});


app.post('/api/quest/claim', authMiddleware, async (req, res) => {
  try {
    const { questId, xpReward } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    
    if (user.questsClaimed.includes(questId)) {
      return res.status(400).json({ error: 'Quest already claimed' });
    }
    user.questsClaimed.push(questId);
    user.xp += xpReward;
    await user.save();
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'API is running' });
});

// ==== MOCK GAMER SOW FOR LORE FEED ====
const randomGamers = ['ShadowCoder', 'AlgoKing', 'ByteNinja', 'ReactGod', 'PtrDestroyer', 'NullMaster', 'Turing20', 'HashSlayer'];
const randomLore = [
  'just hit Diamond Tier! 💎',
  'compiled C code with 0 errors! 🔥',
  'unlocked the Recursion stage! 🌀',
  'is on a 15-day streak! ⭐',
  'completed daily quests! 🎉',
  'dropped into The Arena! ⚔️',
  'finished the Two Pointers unit! 👉',
  'maxed out their daily XP! ⚡'
];

setInterval(() => {
  const player = randomGamers[Math.floor(Math.random() * randomGamers.length)];
  const action = randomLore[Math.floor(Math.random() * randomLore.length)];
  io.emit('loreFeed', {
    id: Date.now(),
    text: `${player} ${action}`,
    timestamp: new Date().toISOString()
  });
}, 8000); // Emits every 8 seconds

httpServer.listen(PORT, () => {
  console.log(`Pico Server is LIVE on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n⚠️  PORT ${PORT} IS BUSY!`);
    console.error(`A background Pico process (or another app) is already running on this port.`);
    console.error(`You do NOT need to run 'node server.js' manually. Just refresh your browser! 🦜🚀\n`);
    process.exit(0); // Exit cleanly
  } else {
    console.error('Server error:', err);
  }
});
