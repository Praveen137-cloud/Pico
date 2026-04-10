const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');
const auth = require('../middleware/auth');

// @route   GET /api/curriculum/subjects
// @desc    Get all subjects (lightweight)
router.get('/subjects', auth, async (req, res) => {
  try {
    const subjects = await Subject.find({}).select('name icon');
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load subjects' });
  }
});

// @route   GET /api/curriculum/subjects/:id/stages
// @desc    Get stages for a subject
router.get('/subjects/:id/stages', auth, async (req, res) => {
  try {
    const stages = await Stage.find({ subjectId: req.params.id }).sort('order').lean();
    const user = await require('../models/User').findById(req.user.id);
    const completedUnitIds = user.completedUnits.map(id => id.toString());

    // Join unit counts and progress for each stage
    const stagesWithCounts = await Promise.all(stages.map(async (stage) => {
      const units = await Unit.find({ stageId: stage._id }).select('_id').lean();
      const unitIds = units.map(u => u._id.toString());
      
      const unitCount = unitIds.length;
      const completedCount = unitIds.filter(id => completedUnitIds.includes(id)).length;
      
      return { ...stage, unitCount, completedCount };
    }));

    res.json(stagesWithCounts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load stages' });
  }
});

// @route   GET /api/curriculum/stages/:id/units
// @desc    Get units for a stage (Lazy Load)
router.get('/stages/:id/units', auth, async (req, res) => {
  try {
    const units = await Unit.find({ stageId: req.params.id }).sort('order');
    res.json(units);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load units' });
  }
});

// @route   GET /api/curriculum/units/:id/lessons
// @desc    Get lessons for a unit (10 slides)
router.get('/units/:id/lessons', auth, async (req, res) => {
  try {
    const lessons = await Lesson.find({ unitId: req.params.id }).sort('order');
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load lessons' });
  }
});

module.exports = router;
