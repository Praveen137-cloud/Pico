const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');
const auth = require('../middleware/auth');

// @route   GET /api/curriculum/subjects
router.get('/subjects', auth, async (req, res) => {
  try {
    const subjects = await Subject.find({}).sort('order').lean();
    
    // 🔥 CACHE BUSTING
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load subjects' });
  }
});

// @route   GET /api/curriculum/subjects/:id/stages
router.get('/subjects/:id/stages', auth, async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).json({ error: 'Subject not found' });

    if (subject.isTitan) {
      const User = require('../models/User');
      const user = await User.findById(req.user.id);
      const completedIds = user?.completedUnits?.map(id => id.toString()) || [];

      // Return 10 Virtual Stages for Titan Subjects
      const virtualStages = [];
      for (let i = 1; i <= 10; i++) {
        const startUnit = (i - 1) * 10 + 1;
        const endUnit = i * 10;
        let count = 0;
        for (let order = startUnit; order <= endUnit; order++) {
          const targetId = `unit_${subject._id.toString().trim().toLowerCase()}_${order}`;
          if (completedIds.some(id => id.trim().toLowerCase() === targetId)) count++;
        }

        virtualStages.push({
          _id: `titan_${subject._id}_${i}`,
          subjectId: subject._id,
          title: `Stage ${i}`,
          order: i,
          isTitan: true,
          unitCount: 10,
          completedCount: count
        });
      }

      // 🔥 CACHE BUSTING
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');

      return res.json(virtualStages);
    }

    // Legacy Relational Lookup
    const stages = await Stage.find({ subjectId: req.params.id }).sort('order').lean();
    const user = await require('../models/User').findById(req.user.id);
    const completedUnitIds = user.completedUnits.map(id => id.toString());

    const stagesWithCounts = await Promise.all(stages.map(async (stage) => {
      const units = await Unit.find({ stageId: stage._id }).select('_id').lean();
      const unitIds = units.map(u => u._id.toString());
      const unitCount = unitIds.length;
      const completedCount = unitIds.filter(id => completedUnitIds.includes(id)).length;
      return { ...stage, unitCount, completedCount };
    }));

    // 🔥 CACHE BUSTING
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.json(stagesWithCounts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load stages' });
  }
});

// @route   GET /api/curriculum/stages/:id/units
router.get('/stages/:id/units', auth, async (req, res) => {
  try {
    if (req.params.id.startsWith('titan_')) {
      const [_, subId, stageOrder] = req.params.id.split('_');
      const subject = await Subject.findById(subId);
      
      const virtualUnits = [];
      const startUnit = (parseInt(stageOrder) - 1) * 10 + 1;
      
      for (let i = 0; i < 10; i++) {
        const order = startUnit + i;
        virtualUnits.push({
          _id: `unit_${subId}_${order}`,
          title: `Unit ${order}`,
          desc: `Mastering Level ${order} of ${subject.name}`,
          order: order,
          isTitan: true
        });
      }
      // 🔥 CACHE BUSTING
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');

      return res.json(virtualUnits);
    }

    const units = await Unit.find({ stageId: req.params.id }).sort('order');
    
    // 🔥 CACHE BUSTING
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.json(units);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load units' });
  }
});

// @route   GET /api/curriculum/units/:id/lessons
router.get('/units/:id/lessons', auth, async (req, res) => {
  try {
    if (req.params.id.startsWith('unit_')) {
      const [_, subId, unitOrder] = req.params.id.split('_');
      const subject = await Subject.findById(subId);
      
      // Fetch lessons using metadata
      const lessons = await Lesson.find({ 
        subject: subject.name, 
        unitOrder: parseInt(unitOrder) 
      }).sort('lessonOrder');
      
      // 🔥 CACHE BUSTING
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');

      return res.json(lessons);
    }

    const lessons = await Lesson.find({ unitId: req.params.id }).sort('order');
    
    // 🔥 CACHE BUSTING
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.json(lessons);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load lessons' });
  }
});

module.exports = router;
