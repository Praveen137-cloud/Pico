const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const { createServer } = require('http');
const { Server } = require('socket.io');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const executionRoutes = require('./routes/execute');
const authRoutes = require('./routes/auth');
const problemsRoutes = require('./routes/problems');
const curriculumRoutes = require('./routes/curriculum');
const aiRoutes = require('./routes/ai');
const adminRoutes = require('./routes/admin');
const socialRoutes = require('./routes/social');
const authMiddleware = require('./middleware/auth');

const Subject = require('./models/Subject');
const User = require('./models/User');
const Problem = require('./models/Problem');

const app = express();
const PORT = process.env.PORT || 5000;
const httpServer = createServer(app);

// 💳 Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder', // User will provide actual ID
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'secret_placeholder'
});

// Seasonal Helper
const getCurrentSeason = () => {
  const month = new Date().getMonth(); // 0-11
  if (month >= 2 && month <= 4) return 'Spring';
  if (month >= 5 && month <= 7) return 'Summer';
  if (month >= 8 && month <= 10) return 'Autumn';
  return 'Winter';
};

const io = new Server(httpServer, {
  cors: { origin: '*' }
});

app.use(cors({
  origin: function (origin, callback) {
    // List of explicitly allowed origins
    const allowedOrigins = [
      'https://pico-sooty.vercel.app', 
      'http://localhost:5173',
      'http://localhost:3000'
    ];
    
    // Check if origin is allowed or matches vercel.app subdomain
    const isAllowed = !origin || 
                      allowedOrigins.indexOf(origin) !== -1 || 
                      origin.endsWith('.vercel.app') ||
                      origin.includes('pico');

    if (isAllowed) {
      callback(null, true);
    } else {
      console.warn(`[CORS Blocked] Origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Basic Heartbeat for Render Load Balancer
app.get('/', (req, res) => res.status(200).send('Pico Engine Online'));

// Admin Seeding Routes
app.get('/api/admin/seed', async (req, res) => {
  try {
    const subjects = require('./seed_subjects');
    await Subject.deleteMany({});
    await Subject.insertMany(subjects);
    res.json({ success: true, message: 'Subjects seeded' });
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
    res.json({ success: true, message: 'Problems seeded' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/execute', (req, res, next) => { req.io = io; next(); }, executionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemsRoutes);
app.use('/api/curriculum', curriculumRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/social', socialRoutes);
const careerRoutes = require('./routes/career');
app.use('/api/career', careerRoutes);

// Free-play code runner for the Code Playground (no test cases, just raw execution)
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

app.post('/api/run', async (req, res) => {
  const axios = require('axios');
  const { code, language } = req.body;
  if (!code || !language) return res.status(400).json({ error: 'code and language are required' });

  const langMap = {
    'python': { name: 'python', version: '3.10.0', file: 'main.py' },
    'javascript': { name: 'javascript', version: '18.15.0', file: 'main.js' },
    'c': { name: 'c', version: '10.2.0', file: 'main.c' },
    'java': { name: 'java', version: '15.0.2', file: 'Main.java' },
  };

  const cfg = langMap[language];
  if (!cfg) return res.status(400).json({ error: `Unsupported language: ${language}` });

  const judge0Map = {
    'python': 71,
    'javascript': 93, // Node.js 18.15.0
    'c': 50,
    'java': 62
  };

  const langId = judge0Map[language];

  if (langId) {
    try {
      let runCode = code;
      // Strip public from class Main / Solution so judge0 doesn't complain about filename mismatches
      if (language === 'java') {
         runCode = code.replace(/public\s+class/g, 'class');
      }

      const response = await axios.post('https://ce.judge0.com/submissions?base64_encoded=true&wait=true', {
        language_id: langId,
        source_code: Buffer.from(runCode).toString('base64')
      }, { timeout: 15000 });

      if (response.status === 201 || response.status === 200) {
        const run = response.data;
        const b64Decode = (str) => str ? Buffer.from(str, 'base64').toString('utf8') : '';
        let stdoutDecoded = b64Decode(run.stdout);
        let stderrDecoded = b64Decode(run.stderr) || b64Decode(run.compile_output);
        
        let out = stdoutDecoded || stderrDecoded;
        if (!out && run.status && run.status.id !== 3) {
           out = run.status.description;
        } else if (!out) {
           out = '(no output)';
        }

        return res.json({
          output: out,
          stderr: stderrDecoded || '',
          code: (run.status && run.status.id === 3) ? 0 : 1
        });
      }
    } catch (err) {
      console.warn(`[/api/run] Judge0 failed: ${err.message}`);
    }
  }

  // Fallback to legacy Piston in case it wakes up
  const PISTON_ENDPOINTS = [
    'https://emkc.org/api/v2/piston/execute',
    'https://api.piston.io/execute',
  ];

  const payload = {
    language: cfg.name,
    version: '*', // allow any installed version
    files: [{ name: cfg.file, content: code }]
  };

  for (const endpoint of PISTON_ENDPOINTS) {
    try {
      const response = await axios.post(endpoint, payload, {
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.status === 200 && response.data?.run) {
        const { run } = response.data;
        return res.json({
          output: run.stdout || run.stderr || '(no output)',
          stderr: run.stderr || '',
          code: run.code
        });
      }
    } catch (err) {
       console.warn(`[/api/run] ${endpoint} failed: ${err.message}`);
    }
  }

  return res.status(503).json({ error: 'Compiler clusters are overloaded right now. Please try again in 30 seconds!' });
});

// Redundant imports removed

app.get('/api/subjects', authMiddleware, async (req, res) => {
  try {
    const subjects = await Subject.find({}).lean();
    if (!subjects) return res.json([]);

    // 🔥 CACHE BUSTING: Prevent 304 Not Modified for progress data
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.json(subjects);
  } catch(err) {
    res.status(500).json({error: err.message});
  }
});

// Real leaderboard from DB — all users ranked by XP
app.get('/api/leaderboard', authMiddleware, async (req, res) => {
  try {
    const users = await User.find({}, 'name xp avatar streak lessonsCompleted').sort({ xp: -1 }).limit(10);
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

    // 🏆 DAILY MISSION RESET LOGIC
    const lastReset = user.lastDailyQuestReset ? new Date(user.lastDailyQuestReset) : new Date(0);
    const lastResetDay = new Date(lastReset.getFullYear(), lastReset.getMonth(), lastReset.getDate());
    
    if (today > lastResetDay) {
      console.log(`[Quest Reset] New day detected for user ${user.name}. Resetting daily missions.`);
      user.questsClaimed = []; // Clear for the new day
      user.dailyStats = { lessonsDone: 0 };
      user.lastDailyQuestReset = now;
    }
    
    // 💎 ADMIN IS ALWAYS PREMIUM
    if (user.role === 'admin') {
      user.isPremium = true;
      user.adsHidden = true;
    }
    
    await user.save();
    
    console.log(`[AUTH] Fresh Data for ${user.name}: ${user.completedUnits.length} units done.`);
    
    // 🔥 CACHE BUSTING: Prevent 304 Not Modified for critical user state
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

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
    // 🛠 Normalization Fix: Ensure unitId matches EXACTLY
    const normalizedUnitId = unitId.toString().trim().toLowerCase();
    const alreadyCompleted = user.completedUnits.some(id => id.toString().trim().toLowerCase() === normalizedUnitId);
    console.log(`[UNLOCK SCAN] User: ${user.name}, Target: ${normalizedUnitId}, Match Found: ${alreadyCompleted}`);
    
    if (!alreadyCompleted) {
      user.completedUnits.push(normalizedUnitId);
    }
    
    user.markModified('completedUnits');
    await user.save();

    // 3. Grant XP and stats
    let xpEarned = 10;
    const season = getCurrentSeason();
    if (season) xpEarned += 5; // Event Bonus!

    user.xp += xpEarned;
    user.lessonsCompleted += 1;
    
    // 🔥 Save last progress point for auto-redirect on login
    if (subjectId) user.lastSubjectId = subjectId;
    if (sectionId) user.lastSectionId = sectionId;
    
    // 📈 Track Daily Progress for Missions
    if (!user.dailyStats) user.dailyStats = { lessonsDone: 0 };
    user.dailyStats.lessonsDone += 1;
    
    await user.save();
    console.log(`[UNLOCK SUCCESS] User: ${user.name}, Total Units Saved: ${user.completedUnits.length}`);
    
    // 🛡️ CACHE BUSTING: Definitive no-cache for unit unlocks
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.json({ success: true, user });
  } catch(err) {
    res.status(500).json({error: err.message});
  }
});


app.post('/api/subjects/:id/complete', authMiddleware, async (req, res) => {
  try {
    const subjectId = req.params.id;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Check if already rewarded
    if (user.completedSubjects && user.completedSubjects.includes(subjectId)) {
      return res.status(400).json({ error: 'Subject reward already claimed' });
    }

    const subject = await Subject.findById(subjectId);
    if (!subject) return res.status(404).json({ error: 'Subject not found' });

    // Verify all units are completed
    let allCompleted = true;
    const completedIds = user.completedUnits.map(id => id.toString());
    
    for (const section of subject.sections) {
      for (const unit of section.units) {
        if (!completedIds.includes(unit._id.toString())) {
          allCompleted = false;
          break;
        }
      }
      if (!allCompleted) break;
    }

    if (!allCompleted) {
      return res.status(400).json({ error: 'Subject not fully completed yet' });
    }

    // Award XP and mark as completed
    const XP_REWARD = 500;
    user.xp += XP_REWARD;
    if (!user.completedSubjects) user.completedSubjects = [];
    user.completedSubjects.push(subjectId);
    await user.save();

    // Broadcast achievement
    io.emit('loreFeed', {
      id: Date.now(),
      text: `🏆 ${user.name} has MASTERED the entire ${subject.name} curriculum! (+500 XP)`,
      avatar: user.avatar,
      isReal: true,
      timestamp: new Date().toISOString()
    });

    res.json({ success: true, reward: XP_REWARD, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
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

    // 🛡️ QUEST VERIFICATION LOGIC
    let isEligible = false;
    const now = new Date();
    const todayStr = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    if (questId === 'quest_login') {
      isEligible = true; // Login quest is simple
    } else if (questId === 'quest_problem') {
      isEligible = user.dailyStats?.lessonsDone > 0;
    } else if (questId === 'quest_streak') {
      if (user.lastStreakUpdate) {
        const last = new Date(user.lastStreakUpdate);
        const lastDayStr = new Date(last.getFullYear(), last.getMonth(), last.getDate()).getTime();
        isEligible = lastDayStr === todayStr;
      }
    } else {
      // For other quests like quest_profile, quest_leaderboard, quest_read
      // We'll allow them for now once per day as they are interaction-based
      isEligible = true;
    }

    if (!isEligible) {
      return res.status(400).json({ error: 'Objective not met yet. Perform the task first!' });
    }

    await user.save();
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// @route   POST /api/payment/order
// @desc    Create a Razorpay order
app.post('/api/payment/order', authMiddleware, async (req, res) => {
  try {
    const options = {
      amount: 100 * 100, // 100 INR in paise
      currency: 'INR',
      receipt: `receipt_${req.user.id}_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);
    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create payment order' });
  }
});

const { sendAdminPaymentNotification } = require('./utils/email');

// @route   POST /api/payment/verify
// @desc    Verify Razorpay payment signature
app.post('/api/payment/verify', authMiddleware, async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, amount } = req.body;
    
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      console.error('[CRITICAL] RAZORPAY_KEY_SECRET missing!');
      return res.status(500).json({ error: 'System configuration error.' });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(body.toString())
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      // Payment Verified!
      const user = await User.findById(req.user.id);
      if (!user) return res.status(404).json({ error: 'User synchronization lost.' });

      user.isPremium = true;
      user.adsHidden = true;
      await user.save();
      
      console.log(`[Payment] Success for ${user.email}. Amount: ₹${amount || 100}`);

      // \uD83D\uDCC8 Notify Admin
      await sendAdminPaymentNotification(user.name, user.email, amount || 100, razorpay_payment_id);
      
      res.json({ success: true, message: 'Premium activated!', user });
    } else {
      console.warn(`[Payment Warning] Invalid signature from ${req.user.id}`);
      res.status(400).json({ error: 'Invalid payment signature' });
    }
  } catch (err) {
    console.error('[Payment Error]:', err);
    res.status(500).json({ error: 'Verification sequence failed.' });
  }
});

app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'SYSTEM ONLINE', 
    version: '2.2.0-STABLE',
    engine: 'Pico Matrix Core'
  });
});

// 🔥 ANTI-SLEEP HEARTBEAT: Self-ping every 14 mins to keep the free-tier warm
setInterval(() => {
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const host = process.env.RENDER_EXTERNAL_URL || `localhost:${PORT}`;
  const url = host.startsWith('http') ? host : `${protocol}://${host}`;
  
  require('http').get(url, (res) => {
    console.log(`[Heartbeat] Self-ping status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error(`[Heartbeat Error] ${err.message}`);
  });
}, 14 * 60 * 1000); // 14 mins

httpServer.listen(PORT, '0.0.0.0', () => {
  console.log(`Pico Server is LIVE on port ${PORT} (0.0.0.0)`);
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

// 🚀 VERCEL EXPORT: Allow Vercel to wrap this as a serverless function
module.exports = app;
