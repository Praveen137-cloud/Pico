const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// @route   POST /api/social/follow/:id
// @desc    Follow a user
// @access  Private
router.post('/follow/:id', auth, async (req, res) => {
  try {
    const targetUserId = req.params.id;
    const currentUserId = req.user.id;

    if (targetUserId === currentUserId) {
      return res.status(400).json({ error: 'You cannot follow yourself' });
    }

    const targetUser = await User.findById(targetUserId);
    const currentUser = await User.findById(currentUserId);

    if (!targetUser) return res.status(404).json({ error: 'Target user not found' });

    // Check if already following
    if (currentUser.following.includes(targetUserId)) {
      return res.status(400).json({ error: 'Already following this user' });
    }

    currentUser.following.push(targetUserId);
    targetUser.followers.push(currentUserId);

    await currentUser.save();
    await targetUser.save();

    res.json({ success: true, message: `Now following ${targetUser.name}` });
  } catch (err) {
    res.status(500).json({ error: 'Failed to follow user' });
  }
});

// @route   POST /api/social/unfollow/:id
// @desc    Unfollow a user
// @access  Private
router.post('/unfollow/:id', auth, async (req, res) => {
  try {
    const targetUserId = req.params.id;
    const currentUserId = req.user.id;

    const targetUser = await User.findById(targetUserId);
    const currentUser = await User.findById(currentUserId);

    if (!targetUser || !currentUser) return res.status(404).json({ error: 'User not found' });

    currentUser.following = currentUser.following.filter(id => id.toString() !== targetUserId);
    targetUser.followers = targetUser.followers.filter(id => id.toString() !== currentUserId);

    await currentUser.save();
    await targetUser.save();

    res.json({ success: true, message: `Unfollowed ${targetUser.name}` });
  } catch (err) {
    res.status(500).json({ error: 'Failed to unfollow user' });
  }
});

// @route   GET /api/social/search
// @desc    Search users by name
// @access  Private
router.get('/search', auth, async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.json([]);

    const users = await User.find({
      name: { $regex: query, $options: 'i' },
      _id: { $ne: req.user.id }
    }).select('name avatar xp streak followers').limit(20);

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }
});

// @route   GET /api/social/stats/:id
// @desc    Get social stats for a user
// @access  Private
router.get('/stats/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('followers', 'name avatar xp')
      .populate('following', 'name avatar xp');

    if (!user) return res.status(404).json({ error: 'User not found' });

    const isFollowing = user.followers.some(f => f._id.toString() === req.user.id);
    const isMutual = isFollowing && user.following.some(f => f._id.toString() === req.user.id);

    res.json({
      followerCount: user.followers.length,
      followingCount: user.following.length,
      followers: user.followers,
      following: user.following,
      isFollowing,
      isMutual
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch social stats' });
  }
});

module.exports = router;
