require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');

// Recursion Stages 1-10
const stage1 = require('../curriculum/recursion/stage1');
const stage2 = require('../curriculum/recursion/stage2');
const stage3 = require('../curriculum/recursion/stage3');
const stage4 = require('../curriculum/recursion/stage4');
const stage5 = require('../curriculum/recursion/stage5');
const stage6 = require('../curriculum/recursion/stage6');
const stage7 = require('../curriculum/recursion/stage7');
const stage8 = require('../curriculum/recursion/stage8');
const stage9 = require('../curriculum/recursion/stage9');
const stage10 = require('../curriculum/recursion/stage10');

const allStages = [
  ...stage1, ...stage2, ...stage3, ...stage4, ...stage5,
  ...stage6, ...stage7, ...stage8, ...stage9, ...stage10
];

const seedRecursion = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Purge existing Recursion lessons
    const deleteRes = await Lesson.deleteMany({ subject: 'Recursion' });
    console.log(`Purged ${deleteRes.deletedCount} existing Recursion lessons`);

    const lessonsToInsert = [];
    allStages.forEach((unit) => {
      unit.lessons.forEach((lesson, index) => {
        lessonsToInsert.push({
          ...lesson,
          subject: 'Recursion',
          unitTitle: unit.title,
          unitOrder: unit.order,
          lessonOrder: index + 1,
          isTitan: true
        });
      });
    });

    console.log(`Seeding ${lessonsToInsert.length} Titan-Grade Recursion lessons...`);
    const inserted = await Lesson.insertMany(lessonsToInsert);
    console.log(`Successfully seeded ${inserted.length} lessons!`);

    mongoose.connection.close();
    console.log('Database connection closed.');
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedRecursion();
