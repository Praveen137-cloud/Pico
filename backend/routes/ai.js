const express = require('express');
const router = express.Router();
const { generateHint, generateCareerAdvice } = require('../utils/gemini');
const auth = require('../middleware/auth');

// @route   POST /api/ai/hint
// @desc    Get a personalized hint from Pico
// @access  Private
router.post('/hint', auth, async (req, res) => {
  try {
    const { problemTitle, problemDesc, userCode, lastError, currentLesson } = req.body;
    
    if (!problemTitle && !currentLesson) {
      return res.status(400).json({ error: 'Context is required' });
    }

    const hint = await generateHint({
      problemTitle,
      problemDesc,
      userCode,
      lastError,
      currentLesson
    });

    res.json({ hint });
  } catch (err) {
    console.error("AI Route Error:", err);
    res.status(500).json({ error: 'Failed to generate hint' });
  }
});

// @route   POST /api/ai/career-guidance
// @desc    Get engineering career guidance
// @access  Private
router.post('/career-guidance', auth, async (req, res) => {
  try {
    const { branch, interests, goal } = req.body;
    if (!branch || !interests || !goal) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const advice = await generateCareerAdvice({ branch, interests, goal });
    res.json({ advice });
  } catch (err) {
    console.error("Career Guidance Error:", err);
    res.status(500).json({ error: 'Failed to generate career guidance' });
  }
});

// @route   POST /api/admin/ingest-curriculum
// @desc    Internal route to ingest Claude-generated curriculum
// @access  Admin (Mocked with auth for now)
router.post('/ingest-curriculum', auth, async (req, res) => {
  // This will be implemented when the user provides the Claude output.
  // It will likely map master units to 200 units per stage.
  res.json({ message: 'Ready for ingestion payload' });
});

module.exports = router;
