const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/auth');
const adminMiddleware = require('../middleware/admin');

// @route   GET /api/admin/users
// @desc    Get all users (admin only)
// @access  Private/Admin
router.get('/users', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: 'admin' } })
      .select('-password')
      .sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching users' });
  }
});

// @route   DELETE /api/admin/users/:id
// @desc    Delete a user (admin only)
// @access  Private/Admin
router.delete('/users/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.role === 'admin') return res.status(403).json({ error: 'Cannot delete an admin' });

    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error deleting user' });
  }
});

// @route   DELETE /api/admin/purge-guests
// @desc    Remove all guest users (admin only)
// @access  Private/Admin
router.delete('/purge-guests', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const result = await User.deleteMany({ isGuest: true });
    res.json({ success: true, count: result.deletedCount, message: `Removed ${result.deletedCount} guest users.` });
  } catch (err) {
    res.status(500).json({ error: 'Server error purging guests' });
  }
});

// @route   PUT /api/admin/users/:id/status
// @desc    Update user status (Premium, Ads) (admin only)
// @access  Private/Admin
router.put('/users/:id/status', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const { isPremium, adsHidden } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.role === 'admin') return res.status(403).json({ error: 'Cannot modify an admin' });

    if (isPremium !== undefined) user.isPremium = isPremium;
    if (adsHidden !== undefined) user.adsHidden = adsHidden;

    await user.save();
    res.json({ success: true, message: 'User status updated', user: {
      _id: user._id,
      isPremium: user.isPremium,
      adsHidden: user.adsHidden
    }});
  } catch (err) {
    res.status(500).json({ error: 'Server error updating status' });
  }
});

module.exports = router;
