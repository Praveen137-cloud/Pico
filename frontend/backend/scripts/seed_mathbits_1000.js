const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('../models/Lesson');
const Unit = require('../models/Unit');

// Load stages
const stage1 = require('../curriculum/mathbits/stage1');
const stage2 = require('../curriculum/mathbits/stage2');
const stage3 = require('../curriculum/mathbits/stage3');
const stage4 = require('../curriculum/mathbits/stage4');
const stage5 = require('../curriculum/mathbits/stage5');
const stage6 = require('../curriculum/mathbits/stage6');
const stage7 = require('../curriculum/mathbits/stage7');
const stage8 = require('../curriculum/mathbits/stage8');
const stage9 = require('../curriculum/mathbits/stage9');
const stage10 = require('../curriculum/mathbits/stage10');

dotenv.config();

const subject = 'Mathbits';

async function seedMathbits() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB for ${subject} Ingestion...`);

    // Purge existing for this subject
    await Lesson.deleteMany({ subject: subject });
    console.log(`Purged existing ${subject} curriculum.`);

    const stages = [
      { data: stage1, title: "Stage 1: Binary Foundations" },
      { data: stage2, title: "Stage 2: Advanced Bitwise" },
      { data: stage3, title: "Stage 3: Number Theory Intro" },
      { data: stage4, title: "Stage 4: Advanced Primes" },
      { data: stage5, title: "Stage 5: Modulo Mastery" },
      { data: stage6, title: "Stage 6: Combinatorics" },
      { data: stage7, title: "Stage 7: Probability" },
      { data: stage8, title: "Stage 8: Numerical Methods" },
      { data: stage9, title: "Stage 9: Game Theory" },
      { data: stage10, title: "Stage 10: Math Singularity" }
    ];

    for (let s = 0; s < stages.length; s++) {
      const stageObj = stages[s];
      const stageNumber = s + 1;
      
      for (const unit of stageObj.data) {
        // Create lessons with metadata
        const lessonDocs = unit.lessons.map((lesson, index) => ({
          ...lesson,
          subject: subject,
          isTitan: true,
          unitOrder: unit.order,
          lessonOrder: index + 1,
          unitTitle: unit.title,
          stageTitle: stageObj.title,
          stageOrder: stageNumber
        }));

        await Lesson.insertMany(lessonDocs);
      }
      console.log(`Ingested ${stageObj.title}`);
    }

    const count = await Lesson.countDocuments({ subject: subject });
    console.log('-----------------------------------------');
    console.log(`Verified Total Lessons in DB for ${subject}: ${count}`);
    console.log(`${subject} Curriculum Expansion: COMPLETE (1,000 Lessons)`);
    console.log('-----------------------------------------');

    process.exit(0);
  } catch (err) {
    console.error('Error seeding Mathbits:', err);
    process.exit(1);
  }
}

seedMathbits();
