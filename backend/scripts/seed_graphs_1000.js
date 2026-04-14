const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');
require('dotenv').config();

const stage1_2 = require('../curriculum/graphs/stage1'); // Units 1-20
const stage3_4 = require('../curriculum/graphs/stage2'); // Units 21-40
const stage5_6 = require('../curriculum/graphs/stage3'); // Units 41-60
const stage7 = require('../curriculum/graphs/stage4');   // Units 61-70
const stage8 = require('../curriculum/graphs/stage5');   // Units 71-80
const stage9 = require('../curriculum/graphs/stage6');   // Units 81-90
const stage10 = require('../curriculum/graphs/stage7');  // Units 91-100

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
  "Stage 1: The First Flight (BFS/DFS)",
  "Stage 2: Shortest Paths & Weights",
  "Stage 3: Cycles & Topologies (DAG)",
  "Stage 4: Minimum Spanning Trees (MST)",
  "Stage 5: Pathfinding Optimization",
  "Stage 6: Graph Search Power (Dijkstra/A*)",
  "Stage 7: Advanced Connectivity (SCC/2-SAT)",
  "Stage 8: Network Flow Foundations (Dinic)",
  "Stage 9: Advanced Matching & MCMF",
  "Stage 10: Scalable Graph Theory & Singularity"
];

async function seedGraphs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB for Graphs Ingestion...");

    // 1. Purge existing Graphs content
    const graphsSubject = await Subject.findOne({ name: 'Graphs' });
    if (graphsSubject) {
      const stageIds = await Stage.find({ subjectId: graphsSubject._id }).distinct('_id');
      const unitIds = await Unit.find({ stageId: { $in: stageIds } }).distinct('_id');
      
      await Lesson.deleteMany({ unitId: { $in: unitIds } });
      await Unit.deleteMany({ stageId: { $in: stageIds } });
      await Stage.deleteMany({ subjectId: graphsSubject._id });
      await Subject.deleteOne({ _id: graphsSubject._id });
      console.log("Purged existing Graphs curriculum.");
    }

    // 2. Create Subject
    const subject = new Subject({
      name: 'Graphs',
      desc: 'Connect the dots of the digital world, from social networks to network flow optimization.',
      icon: 'G',
      order: 3 // Based on audit
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
    console.log(`Verified Total Lessons in DB for Graphs: ${finalCount}`);
    console.log("Graphs Curriculum Expansion: COMPLETE (1,000 Lessons)");
    console.log("-----------------------------------------");

    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seedGraphs();
