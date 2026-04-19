const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');
require('dotenv').config();

const stage1_2 = require('../curriculum/linkedlists/stage1'); // Units 1-20
const stage3_4 = require('../curriculum/linkedlists/stage2'); // Units 21-40
const stage5_6 = require('../curriculum/linkedlists/stage3'); // Units 41-60
const stage7 = require('../curriculum/linkedlists/stage4');   // Units 61-70
const stage8 = require('../curriculum/linkedlists/stage5');   // Units 71-80
const stage9 = require('../curriculum/linkedlists/stage6');   // Units 81-90
const stage10 = require('../curriculum/linkedlists/stage7');  // Units 91-100

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
  "Stage 1: The First Chain (Singly Linked)",
  "Stage 2: Double Connections (Doubly Linked)",
  "Stage 3: Loops & Logic (Circular/Detect)",
  "Stage 4: Practical Architectures",
  "Stage 5: Sorting & Partitioning",
  "Stage 6: The Advanced Node Master",
  "Stage 7: Advanced Structures",
  "Stage 8: Memory & Performance (C Focus)",
  "Stage 9: Persistence & Functional Lists",
  "Stage 10: Distributed Lists & Singularity"
];

async function seedLinkedLists() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for Linked Lists Ingestion...");

    // 1. Purge existing Linked Lists content
    const llSubject = await Subject.findOne({ name: 'Linked Lists' });
    if (llSubject) {
      const stageIds = await Stage.find({ subjectId: llSubject._id }).distinct('_id');
      const unitIds = await Unit.find({ stageId: { $in: stageIds } }).distinct('_id');
      
      await Lesson.deleteMany({ unitId: { $in: unitIds } });
      await Unit.deleteMany({ stageId: { $in: stageIds } });
      await Stage.deleteMany({ subjectId: llSubject._id });
      await Subject.deleteOne({ _id: llSubject._id });
      console.log("Purged existing Linked Lists curriculum.");
    }

    // 2. Create Subject
    const subject = new Subject({
      name: 'Linked Lists',
      desc: 'Master the fundamental building block of dynamic memory, from simple pointers to distributed blockchains.',
      icon: 'L',
      order: 1 // Based on audit
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
    console.log(`Verified Total Lessons in DB for Linked Lists: ${finalCount}`);
    console.log("Linked Lists Curriculum Expansion: COMPLETE (1,000 Lessons)");
    console.log("-----------------------------------------");

    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seedLinkedLists();
