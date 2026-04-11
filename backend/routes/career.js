const express = require('express');
const router = express.Router();
const CareerPath = require('../models/CareerPath');
const auth = require('../middleware/auth');

// @route   GET /api/career/options
// @desc    Get available branches and interests for the choice matrix
// @access  Private
router.get('/options', auth, async (req, res) => {
  try {
    const paths = await CareerPath.find({}, 'branch interest');
    const branches = [...new Set(paths.map(p => p.branch))];
    const interestsByBranch = {};
    
    paths.forEach(p => {
      if (!interestsByBranch[p.branch]) interestsByBranch[p.branch] = [];
      if (!interestsByBranch[p.branch].includes(p.interest)) {
        interestsByBranch[p.branch].push(p.interest);
      }
    });

    res.json({ branches, interestsByBranch });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch options' });
  }
});

// @route   POST /api/career/guidance
// @desc    Get specific roadmap from DB
// @access  Private
router.post('/guidance', auth, async (req, res) => {
  try {
    const { branch, interest } = req.body;
    
    const path = await CareerPath.findOne({ branch, interest });
    
    if (!path) {
      // Fallback to a general branch-wide guidance if specific interest is missing
      const genericPath = await CareerPath.findOne({ branch });
      if (genericPath) {
        return res.json({ 
          advice: genericPath.roadmap, 
          title: genericPath.title,
          isGeneric: true 
        });
      }
      return res.status(404).json({ error: 'No roadmap found for this selection yet.' });
    }

    res.json({ 
      advice: path.roadmap, 
      title: path.title,
      skills: path.skills,
      estimatedTime: path.estimatedTime 
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch roadmap' });
  }
});

module.exports = router;
