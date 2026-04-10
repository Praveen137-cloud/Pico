const express = require('express');
const router = express.Router();
const { generateHint } = require('../utils/gemini');
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

// @route   POST /api/admin/ingest-curriculum
// @desc    Internal route to ingest Claude-generated curriculum
// @access  Admin (Mocked with auth for now)
router.post('/ingest-curriculum', auth, async (req, res) => {
  // This will be implemented when the user provides the Claude output.
  // It will likely map master units to 200 units per stage.
  res.json({ message: 'Ready for ingestion payload' });
});

module.exports = router;
