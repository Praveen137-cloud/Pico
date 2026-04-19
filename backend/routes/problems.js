const express = require('express');
const router = express.Router();
const Problem = require('../models/Problem');
const authMiddleware = require('../middleware/auth');

// @route   GET /api/problems
// @desc    Get all problems
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const filter = {};
    if (req.query.tag && req.query.tag !== 'All') filter.tag = req.query.tag;
    if (req.query.difficulty && req.query.difficulty !== 'All') filter.difficulty = req.query.difficulty;
    const problems = await Problem.find(filter).sort({ difficulty: 1 });
    res.json(problems);
  } catch (err) {
    console.error('Error fetching problems:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});


// @route   GET /api/problems/:id
// @desc    Get problem by ID
// @access  Private
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const problem = await Problem.findById(req.params.id);
    if (!problem) return res.status(404).json({ error: 'Problem not found' });
    res.json(problem);
  } catch (err) {
    console.error('Error fetching problem:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
