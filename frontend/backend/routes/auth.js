const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { 
  sendWelcomeEmail, 
  sendVerificationEmail, 
  sendPasswordResetEmail,
  verifyConnection
} = require('../utils/email');
const authMiddleware = require('../middleware/auth');

// \uD83D\uDEAB STRICT SECURITY: No fallback for JWT_SECRET in production
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error('[CRITICAL] JWT_SECRET is not defined in .env! Auth system will fail.');
}

const { OAuth2Client } = require('google-auth-library');
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

/**
 * Helper to generate 6-digit OTP
 */
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// @route   POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'This email is already registered.' });
    }

    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

    user = new User({ 
      name, 
      email, 
      password, 
      verificationCode: otp, 
      verificationCodeExpires: otpExpires 
    });
    
    await user.save();

    console.log(`[Auth] New Registration: ${email}. Sending OTP...`);
    try {
      await sendVerificationEmail(email, name, otp);
    } catch (emailErr) {
      console.error(`[Email Error] Registration:`, emailErr.message);
      // We still saved the user, but we tell the UI it failed to send
      return res.status(500).json({ 
        error: `Could not send verification email. Please check your SMTP settings. Error: ${emailErr.message}` 
      });
    }

    res.json({ 
      success: true, 
      message: 'Verification code sent to your email.',
      email: email 
    });
  } catch (err) {
    console.error(`[Auth Error] Register:`, err);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// @route   POST /api/auth/verify-email
router.post('/verify-email', async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ 
      email, 
      verificationCode: code,
      verificationCodeExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ error: 'Invalid or expired verification code.' });
    }

    user.isVerified = true;
    user.verificationCode = null;
    user.verificationCodeExpires = null;
    await user.save();

    console.log(`[Auth] Email verified: ${email}`);
    sendWelcomeEmail(email, user.name);

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: 'Verification failed.' });
  }
});

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid Credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid Credentials' });

    if (!user.isVerified) {
      // Resend OTP if not verified
      const otp = generateOTP();
      user.verificationCode = otp;
      user.verificationCodeExpires = new Date(Date.now() + 15 * 60 * 1000);
      await user.save();
      await sendVerificationEmail(email, user.name, otp);
      return res.status(403).json({ 
        error: 'Account not verified. A new code has been sent to your email.',
        pendingVerification: true 
      });
    }

    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: 'Login failed.' });
  }
});

// @route   POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found.' });

    const otp = generateOTP();
    user.verificationCode = otp;
    user.verificationCodeExpires = new Date(Date.now() + 15 * 60 * 1000);
    await user.save();

    await sendPasswordResetEmail(email, user.name, otp);
    res.json({ success: true, message: 'Recovery code sent to email.' });
  } catch (err) {
    res.status(500).json({ error: 'Recovery request failed.' });
  }
});

// @route   POST /api/auth/reset-password
router.post('/reset-password', async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;
    const user = await User.findOne({ 
      email, 
      verificationCode: code,
      verificationCodeExpires: { $gt: Date.now() }
    });

    if (!user) return res.status(400).json({ error: 'Invalid or expired code.' });

    user.password = newPassword;
    user.verificationCode = null;
    user.verificationCodeExpires = null;
    await user.save();

    res.json({ success: true, message: 'Password reset successful. Please login.' });
  } catch (err) {
    res.status(500).json({ error: 'Reset failed.' });
  }
});

// @route   POST /api/auth/google
router.post('/google', async (req, res) => {
  const { credential } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    const { name, email, sub: googleId } = payload;
    
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email, googleId, isVerified: true });
      await user.save();
      sendWelcomeEmail(email, name);
    } else if (!user.googleId) {
      user.googleId = googleId;
      user.isVerified = true;
      await user.save();
    }

    const jwtPayload = { user: { id: user.id } };
    const token = jwt.sign(jwtPayload, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ error: 'Google auth failed.' });
  }
});

// @route   POST /api/auth/guest
router.post('/guest', async (req, res) => {
  try {
    const guestId = Math.floor(Math.random() * 900) + 100;
    const email = `guest_${Date.now()}_${guestId}@pico.internal`;
    const user = new User({ 
      name: `Guest Parrot #${guestId}`, 
      email, 
      isGuest: true, 
      isVerified: true 
    });
    await user.save();
    
    const token = jwt.sign({ user: { id: user.id } }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: 'Guest initialization failed.' });
  }
});

// @route   GET /api/auth/leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const users = await User.find({}, 'name xp avatar streak').sort({ xp: -1 }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Leaderboard load failed.' });
  }
});

// @route   PUT /api/auth/last-subject
// \uD83D\uDEAB SECURED with authMiddleware
router.put('/last-subject', authMiddleware, async (req, res) => {
  try {
    const { subjectName } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    user.lastVisitedSubject = subjectName;
    user.onboardingCompleted = true;
    await user.save();
    
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: 'Update failed.' });
  }
});

// @route   GET /api/auth/service-status
// CHECK IF SMTP AND OTHER SERVICES ARE READY
router.get('/service-status', async (req, res) => {
  const emailStatus = await verifyConnection();
  res.json({
    emailService: emailStatus.success ? 'READY' : 'FAILED',
    emailError: emailStatus.error || null,
    envStatus: {
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,
      JWT_SECRET: !!process.env.JWT_SECRET,
      MONGODB: mongoose.connection.readyState === 1 ? 'CONNECTED' : 'NOT_CONNECTED'
    }
  });
});

module.exports = router;
