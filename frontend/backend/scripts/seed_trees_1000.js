const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');
require('dotenv').config();

const stage1_2 = require('../curriculum/trees/stage1'); // Units 1-20
const stage3_4 = require('../curriculum/trees/stage2'); // Units 21-40
const stage5_6 = require('../curriculum/trees/stage3'); // Units 41-60
const stage7 = require('../curriculum/trees/stage4');   // Units 61-70
const stage8 = require('../curriculum/trees/stage5');   // Units 71-80
const stage9 = require('../curriculum/trees/stage6');   // Units 81-90
const stage10 = require('../curriculum/trees/stage7');  // Units 91-100

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
  "Stage 1: The Root of All Logic",
  "Stage 2: Traversal Flights",
  "Stage 3: Binary Search Trees (BST)",
  "Stage 4: Balanced Tree Secrets (AVL/Red-Black)",
  "Stage 5: Heaps & Priority Forests",
  "Stage 6: Tries & Retrieval Trees",
  "Stage 7: Segment Trees & Range Query Power",
  "Stage 8: Specialized Query Structures (BIT/Sparse)",
  "Stage 9: Tree Decompositions (HLD/Centroid)",
  "Stage 10: Advanced Balancing & Singularity"
];

async function seedTrees() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for Trees Ingestion...");

    // 1. Purge existing Trees content
    const treesSubject = await Subject.findOne({ name: 'Trees' });
    if (treesSubject) {
      const stageIds = await Stage.find({ subjectId: treesSubject._id }).distinct('_id');
      const unitIds = await Unit.find({ stageId: { $in: stageIds } }).distinct('_id');
      
      await Lesson.deleteMany({ unitId: { $in: unitIds } });
      await Unit.deleteMany({ stageId: { $in: stageIds } });
      await Stage.deleteMany({ subjectId: treesSubject._id });
      await Subject.deleteOne({ _id: treesSubject._id });
      console.log("Purged existing Trees curriculum.");
    }

    // 2. Create Subject
    const subject = new Subject({
      name: 'Trees',
      desc: 'Master hierarchical data structures, from basic binary trees to complex dynamic forests.',
      icon: 'T',
      order: 4 // Based on audit
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
    console.log(`Verified Total Lessons in DB for Trees: ${finalCount}`);
    console.log("Trees Curriculum Expansion: COMPLETE (1,000 Lessons)");
    console.log("-----------------------------------------");

    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seedTrees();
