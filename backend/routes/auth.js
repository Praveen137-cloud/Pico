const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key_123';
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const { name, email, sub: googleId, picture } = ticket.getPayload();
    
    let user = await User.findOne({ email });
    
    if (!user) {
      // Create new user if they don't exist
      user = new User({
        name,
        email,
        googleId,
        avatar: 'Parrot' // Default
      });
      await user.save();
    } else if (!user.googleId) {
      // Link Google ID if user exists by email but not linked
      user.googleId = googleId;
      await user.save();
    }

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user });
  } catch (err) {
    console.error('Google Auth Error:', err);
    res.status(401).json({ error: 'Google authentication failed' });
  }
});

module.exports = router;
