const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('../models/Lesson');

dotenv.config();

const subjectsToSeed = [
  {
    name: 'Dynamic Programming',
    path: 'dynamicprogramming',
    stages: ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7', 'stage8', 'stage9', 'stage10']
  },
  {
    name: 'Graphs',
    path: 'graphs',
    stages: ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7'] // stage1 has 20 units etc
  },
  {
    name: 'Linked Lists',
    path: 'linkedlists',
    stages: ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7']
  },
  {
    name: 'Stacks & Queues',
    path: 'stacksqueues',
    stages: ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7']
  },
  {
    name: 'Searching & Sorting',
    path: 'searchingsorting',
    stages: ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7']
  },
  {
    name: 'Strings',
    path: 'strings',
    stages: ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7']
  },
  {
    name: 'Trees',
    path: 'trees',
    stages: ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7']
  }
];

async function seedBatch() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas...');

    for (const sub of subjectsToSeed) {
      console.log(`Processing ${sub.name}...`);
      
      // Purge existing
      await Lesson.deleteMany({ subject: sub.name });
      
      let allUnits = [];
      for (const stageFile of sub.stages) {
          const data = require(`../curriculum/${sub.path}/${stageFile}`);
          allUnits = allUnits.concat(data);
      }

      const lessonsToInsert = [];
      allUnits.forEach((unit, uIdx) => {
          (unit.lessons || []).forEach((lesson, lIdx) => {
              lessonsToInsert.push({
                  ...lesson,
                  subject: sub.name,
                  isTitan: true,
                  unitTitle: unit.title,
                  unitOrder: uIdx + 1,
                  lessonOrder: lIdx + 1
              });
          });
      });

      console.log(`  Seeding ${lessonsToInsert.length} lessons for ${sub.name}...`);
      await Lesson.insertMany(lessonsToInsert);
      console.log(`  Done with ${sub.name}.`);
    }

    console.log('-----------------------------------------');
    console.log('ALL MISSING SUBJECTS TITANIZED ONLINE!');
    console.log('-----------------------------------------');
    process.exit(0);
  } catch (err) {
    console.error('Batch Seeding Failed:', err);
    process.exit(1);
  }
}

seedBatch();
