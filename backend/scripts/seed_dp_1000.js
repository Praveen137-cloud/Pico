const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');
require('dotenv').config();

// Import all Titan-Grade curriculum stages
const stage1 = require('../curriculum/dynamicprogramming/stage1'); // Units 1-10
const stage2 = require('../curriculum/dynamicprogramming/stage2'); // Units 11-20
const stage3 = require('../curriculum/dynamicprogramming/stage3'); // Units 21-30
const stage4 = require('../curriculum/dynamicprogramming/stage4'); // Units 31-40
const stage5 = require('../curriculum/dynamicprogramming/stage5'); // Units 41-50
const stage6 = require('../curriculum/dynamicprogramming/stage6'); // Units 51-60
const stage7 = require('../curriculum/dynamicprogramming/stage7'); // Units 61-70
const stage8 = require('../curriculum/dynamicprogramming/stage8'); // Units 71-80
const stage9 = require('../curriculum/dynamicprogramming/stage9'); // Units 81-90
const stage10 = require('../curriculum/dynamicprogramming/stage10'); // Units 91-100

const allUnits = [
  ...stage1,
  ...stage2,
  ...stage3,
  ...stage4,
  ...stage5,
  ...stage6,
  ...stage7,
  ...stage8,
  ...stage9,
  ...stage10
];

async function seedDP() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa');
    console.log('--- STARTING TITAN-GRADE 1000-LESSON DP INGESTION ---');

    // 1. Find and clear existing DP subject to avoid duplicates
    const subjectName = 'Dynamic Programming';
    const existingSubject = await Subject.findOne({ name: subjectName });
    
    if (existingSubject) {
      console.log(`Found existing ${subjectName}. Purging associated stages, units, and lessons...`);
      const stages = await Stage.find({ subjectId: existingSubject._id });
      for (const stage of stages) {
        const units = await Unit.find({ stageId: stage._id });
        for (const unit of units) {
          await Lesson.deleteMany({ unitId: unit._id });
        }
        await Unit.deleteMany({ stageId: stage._id });
      }
      await Stage.deleteMany({ subjectId: existingSubject._id });
      await Subject.deleteOne({ _id: existingSubject._id });
      console.log('Old DP content purged.');
    }

    // 2. Create Subject: Dynamic Programming
    const subject = new Subject({ 
      name: subjectName, 
      icon: '🏗️',
      desc: 'The ultimate art of solving the infinite through structured memory.'
    });
    await subject.save();
    console.log(`Subject Created: ${subjectName}`);

    // 3. Define Stages (10x10x10 Framework)
    const stageTitles = [
      "Foundations of Memory",
      "Intermediate Optimizations",
      "Bitmasks & Game Theory",
      "Probability & Expectation",
      "Advanced Tree & Graph",
      "Structural Integration",
      "Optimization Geometry",
      "High-Dimensional & Spectral",
      "Complexity & Compression",
      "The Grand Synthesis (Singularity)"
    ];

    for (let sIdx = 0; sIdx < 10; sIdx++) {
      const stage = new Stage({
        title: `Stage ${sIdx + 1}: ${stageTitles[sIdx]}`,
        subjectId: subject._id,
        order: sIdx + 1
      });
      await stage.save();
      subject.stages.push(stage._id);
      await subject.save();
      console.log(`  Stage ${sIdx + 1} Created: ${stageTitles[sIdx]}`);

      // 4. Ingest 10 Units per Stage
      const startIdx = sIdx * 10;
      const endIdx = startIdx + 10;
      const stageUnits = allUnits.slice(startIdx, endIdx);

      for (let uIdx = 0; uIdx < stageUnits.length; uIdx++) {
        const u = stageUnits[uIdx];
        const unit = new Unit({
          title: u.title,
          desc: u.desc,
          stageId: stage._id,
          order: u.order || (startIdx + uIdx + 1),
          xp: 100,
          isUnlocked: sIdx === 0 && uIdx === 0
        });
        await unit.save();

        // Ingest 10 Lessons per unit
        const lessons = (u.lessons || []).map((l, lIdx) => ({
          ...l,
          unitId: unit._id,
          order: lIdx + 1
        }));
        
        if (lessons.length > 0) {
          await Lesson.insertMany(lessons);
        }
        console.log(`    Unit ${unit.order}: ${unit.title} - ${lessons.length} Lessons Ingested.`);
      }
    }

    console.log('--- INGESTION COMPLETE: DYNAMIC PROGRAMMING (1,000 LESSONS) ---');
    
    // Final verification count
    const finalCount = await Lesson.countDocuments({
      unitId: { $in: await Unit.find({ stageId: { $in: subject.stages } }).distinct('_id') }
    });
    console.log(`Verified Total Lessons in DB for DP: ${finalCount}`);

    process.exit(0);
  } catch (err) {
    console.error('Ingestion Failed:', err);
    process.exit(1);
  }
}

seedDP();
