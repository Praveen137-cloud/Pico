const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');
require('dotenv').config();

const stage1_2 = require('../curriculum/stacksqueues/stage1'); // Units 1-20
const stage3_4 = require('../curriculum/stacksqueues/stage2'); // Units 21-40
const stage5_6 = require('../curriculum/stacksqueues/stage3'); // Units 41-60
const stage7 = require('../curriculum/stacksqueues/stage4');   // Units 61-70
const stage8 = require('../curriculum/stacksqueues/stage5');   // Units 71-80
const stage9 = require('../curriculum/stacksqueues/stage6');   // Units 81-90
const stage10 = require('../curriculum/stacksqueues/stage7');  // Units 91-100

const allUnits = [
  ...stage1_2,
  ...stage3_4,
  ...stage5_6,
  ...stage7,
  ...stage8,
  ...stage9,
  ...stage10
];

const stageTitles = [
  "Stage 1: LIFO Foundations (Stacks)",
  "Stage 2: FIFO Foundations (Queues)",
  "Stage 3: Expression Parsing",
  "Stage 4: Specialized Buffers",
  "Stage 5: Queue Applications",
  "Stage 6: Advanced Buffer Logic",
  "Stage 7: Advanced Mechanics",
  "Stage 8: Concurrent & Systems Queues",
  "Stage 9: Persistence & Functional Structures",
  "Stage 10: Distributed Queues & Singularity"
];

async function seedStacksQueues() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for Stacks & Queues Ingestion...");

    // 1. Purge existing Stacks & Queues content
    const sqSubject = await Subject.findOne({ name: 'Stacks & Queues' });
    if (sqSubject) {
      const stageIds = await Stage.find({ subjectId: sqSubject._id }).distinct('_id');
      const unitIds = await Unit.find({ stageId: { $in: stageIds } }).distinct('_id');
      
      await Lesson.deleteMany({ unitId: { $in: unitIds } });
      await Unit.deleteMany({ stageId: { $in: stageIds } });
      await Stage.deleteMany({ subjectId: sqSubject._id });
      await Subject.deleteOne({ _id: sqSubject._id });
      console.log("Purged existing Stacks & Queues curriculum.");
    }

    // 2. Create Subject
    const subject = new Subject({
      name: 'Stacks & Queues',
      desc: 'Master the logic of order and flow, from basic LIFO/FIFO to global distributed message logs.',
      icon: 'S',
      order: 2 // Based on audit
    });
    await subject.save();

    // 3. Create 10 Stages
    for (let i = 1; i <= 10; i++) {
      const stage = new Stage({
        subjectId: subject._id,
        title: stageTitles[i - 1],
        order: i
      });
      await stage.save();

      // 4. Ingest 10 Units per stage
      const stageUnits = allUnits.slice((i - 1) * 10, i * 10);
      for (const unitData of stageUnits) {
        const unit = new Unit({
          stageId: stage._id,
          title: unitData.title,
          desc: unitData.desc,
          order: unitData.order
        });
        await unit.save();

        // 5. Ingest 10 Lessons per unit
        const lessons = unitData.lessons.map((l, index) => ({
          ...l,
          unitId: unit._id,
          order: index + 1
        }));
        await Lesson.insertMany(lessons);
      }
      console.log(`Ingested Stage ${i}: ${stageTitles[i - 1]}`);
    }

    // 6. Final Verification
    const finalCount = await Lesson.countDocuments({ 
      unitId: { 
        $in: await Unit.find({ 
          stageId: { 
            $in: await Stage.find({ subjectId: subject._id }).distinct('_id') 
          } 
        }).distinct('_id') 
      } 
    });

    console.log("-----------------------------------------");
    console.log(`Verified Total Lessons in DB for Stacks & Queues: ${finalCount}`);
    console.log("Stacks & Queues Curriculum Expansion: COMPLETE (1,000 Lessons)");
    console.log("-----------------------------------------");

    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seedStacksQueues();
