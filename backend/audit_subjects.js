const mongoose = require('mongoose');
const Subject = require('./models/Subject');
const Stage = require('./models/Stage');
const Unit = require('./models/Unit');
const Lesson = require('./models/Lesson');
require('dotenv').config();

async function audit() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to Database\n');

    const subjects = await Subject.find();
    console.log(`${'Subject Name'.padEnd(25)} | ${'Lessons'.padEnd(10)} | ${'Status'}`);
    console.log('-'.repeat(50));

    for (const s of subjects) {
      // Find all stages for this subject
      const stages = await Stage.find({ subjectId: s._id });
      const stageIds = stages.map(st => st._id);

      // Find all units for these stages
      const units = await Unit.find({ stageId: { $in: stageIds } });
      const unitIds = units.map(u => u._id);

      // Count total lessons
      const lessonCount = await Lesson.countDocuments({ unitId: { $in: unitIds } });

      let status = 'Pending';
      if (lessonCount >= 1000) status = 'COMPLETED (Titan-Grade)';
      else if (lessonCount > 0) status = 'In Progress (Partial)';

      console.log(`${s.name.padEnd(25)} | ${lessonCount.toString().padEnd(10)} | ${status}`);
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

audit();
