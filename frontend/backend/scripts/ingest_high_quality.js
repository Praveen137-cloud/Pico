const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');
require('dotenv').config();

const arraysStage1 = require('../curriculum/arrays/stage1');

async function ingest() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa');
    console.log('--- STARTING HIGH-QUALITY INGESTION ---');

    // 1. Wipe everything to ensure no "failed" data remains
    await Subject.deleteMany({});
    await Stage.deleteMany({});
    await Unit.deleteMany({});
    await Lesson.deleteMany({});
    console.log('Database Purged.');

    // 2. Create Subject: Arrays
    const subject = new Subject({ 
      name: 'Arrays', 
      icon: '🗄️' 
    });
    await subject.save();
    console.log('Subject Created: Arrays');

    // 3. Create Stage 1
    const stage = new Stage({
      title: 'Stage 1: Foundation Flight',
      subjectId: subject._id,
      order: 1
    });
    await stage.save();
    subject.stages.push(stage._id);
    await subject.save();
    console.log('  Stage 1 Created.');

    // 4. Ingest 20 Units
    for (const u of arraysStage1) {
      const unit = new Unit({
        title: u.title,
        desc: u.desc,
        stageId: stage._id,
        order: u.order,
        xp: 100,
        isUnlocked: true
      });
      await unit.save();

      // Ingest Lessons for each unit
      const lessons = u.lessons.map((l, lIdx) => ({
        ...l,
        unitId: unit._id,
        order: lIdx + 1
      }));
      await Lesson.insertMany(lessons);
      console.log(`    Unit ${u.order}: ${u.title} - Ingested.`);
    }

    console.log('--- INGESTION COMPLETE: ARRAYS STAGE 1 (200 LESSONS) ---');
    process.exit(0);
  } catch (err) {
    console.error('Ingestion Failed:', err);
    process.exit(1);
  }
}

ingest();
