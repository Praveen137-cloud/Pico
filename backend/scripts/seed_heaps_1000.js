const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('../models/Lesson');

// Load env vars
dotenv.config();

// Import all stages
const stage1 = require('../curriculum/heaps/stage1');
const stage2 = require('../curriculum/heaps/stage2');
const stage3 = require('../curriculum/heaps/stage3');
const stage4 = require('../curriculum/heaps/stage4');
const stage5 = require('../curriculum/heaps/stage5');
const stage6 = require('../curriculum/heaps/stage6');
const stage7 = require('../curriculum/heaps/stage7');
const stage8 = require('../curriculum/heaps/stage8');
const stage9 = require('../curriculum/heaps/stage9');
const stage10 = require('../curriculum/heaps/stage10');

const allUnits = [
  ...stage1, ...stage2, ...stage3, ...stage4, ...stage5,
  ...stage6, ...stage7, ...stage8, ...stage9, ...stage10
];

const seedHeaps = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Purge existing Heaps lessons
    const deleteResult = await Lesson.deleteMany({ subject: 'Heaps' });
    console.log(`Purged ${deleteResult.deletedCount} existing Heaps lessons`);

    let totalLessons = 0;
    const lessonsToInsert = [];

    allUnits.forEach((unit) => {
      unit.lessons.forEach((lesson, index) => {
        lessonsToInsert.push({
          ...lesson,
          subject: 'Heaps',
          unitTitle: unit.title,
          unitOrder: unit.order,
          lessonOrder: index + 1,
          isTitan: true
        });
        totalLessons++;
      });
    });

    console.log(`Seeding ${totalLessons} Titan-Grade Heaps lessons...`);
    
    // Bulk insert
    await Lesson.insertMany(lessonsToInsert);

    console.log(`Successfully seeded ${totalLessons} lessons!`);
    mongoose.connection.close();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error seeding Heaps lessons:', error);
    process.exit(1);
  }
};

seedHeaps();
