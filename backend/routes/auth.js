const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const { OAuth2Client } = require('google-auth-library');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_123';
const GOOGLE_CLIENT_ID_FALLBACK = process.env.GOOGLE_CLIENT_ID || '885867681504-lasrb7t0pm5rlvin175e5rnj70jh3hmf.apps.googleusercontent.com';
const client = new OAuth2Client(GOOGLE_CLIENT_ID_FALLBACK);

// @route   POST /api/auth/register
// @desc    Register a user
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      console.log(`[Auth] Registration failed: Email ${email} already exists.`);
      return res.status(400).json({ error: 'This email is already registered. Please login instead!' });
    }

    user = new User({ name, email, password });
    await user.save();

    console.log(`[Auth] Registration successful for: ${email}`);

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user });
  } catch (err) {
    console.error(`[Auth Error] Registration failure for ${req.body.email || 'unknown'}:`, err);
    res.status(500).json({ error: 'Server error during registration', details: err.message });
  }
});

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid Credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid Credentials' });
    }

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user });
  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// @route   POST /api/auth/google
// @desc    Google OAuth login
// @access  Public
router.post('/google', async (req, res) => {
  const { credential } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID_FALLBACK,
    });
    
    const payload = ticket.getPayload();
    if (!payload) {
      throw new Error('No payload returned from Google');
    }

    const { name, email, sub: googleId, picture } = payload;
    
    let user = await User.findOne({ email });
    
    if (!user) {
      // Create new user if they don't exist
      user = new User({
        name,
        email,
        googleId,
        avatar: 'Parrot' 
      });
      await user.save();
      console.log(`[Google Auth] New user created: ${email}`);
    } else if (!user.googleId) {
      // Link Google ID if user exists by email but not linked
      user.googleId = googleId;
      await user.save();
      console.log(`[Google Auth] Google ID linked for existing user: ${email}`);
    }

    const jwtPayload = { user: { id: user.id } };
    const token = jwt.sign(jwtPayload, JWT_SECRET, { expiresIn: '7d' });

    console.log(`[Google Auth] Successful login: ${email}`);
    res.json({ token, user });
  } catch (err) {
    console.error('[Google Auth Failure]:', err.message);
    res.status(401).json({ 
      error: 'Google authentication sequence rejected.',
      details: err.message
    });
  }
});

// @route   POST /api/auth/guest
// @desc    Create a temporary guest session
// @access  Public
router.post('/guest', async (req, res) => {
  try {
    const guestId = Math.floor(Math.random() * 900) + 100; // 100-999
    const uniqueTime = Date.now().toString().slice(-6);
    const email = `guest_${uniqueTime}_${guestId}@pico.internal`;
    const name = `Guest Parrot #${guestId}`;
    
    const user = new User({
      name,
      email,
      isGuest: true,
      avatar: 'Parrot',
      xp: 0
    });
    
    await user.save();
    
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
    
    console.log(`[Auth] Guest session initialized: ${name}`);
    res.json({ token, user });
  } catch (err) {
    console.error('Guest Auth Error:', err);
    res.status(500).json({ error: 'Failed to initialize system guest access.' });
  }
});

// @route   GET /api/auth/leaderboard
// @desc    Get top users for the global leaderboard
// @access  Public
router.get('/leaderboard', async (req, res) => {
  try {
    const users = await User.find({})
      .select('name xp avatar streak')
      .sort({ xp: -1 })
      .limit(10);
      
    res.json(users);
  } catch (err) {
    console.error('Leaderboard Fetch Error:', err);
    res.status(500).json({ error: 'Failed to load leaderboard data' });
  }
});

// @route   PUT /api/auth/last-subject
// @desc    Update user's last visited subject for sorting
// @access  Private (middleware logic simplified/inline for this repo)
router.put('/last-subject', async (req, res) => {
  try {
    const { userId, subjectName } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.lastVisitedSubject = subjectName;
    user.onboardingCompleted = true;
    await user.save();
    
    res.json({ success: true, lastVisitedSubject: subjectName, onboardingCompleted: true });
  } catch (err) {
    console.error('Update Last Subject Error:', err);
    res.status(500).json({ error: 'Failed to update subject preference' });
  }
});

module.exports = router;
