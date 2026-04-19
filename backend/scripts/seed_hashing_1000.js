const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('../models/Lesson');

// Load env vars
dotenv.config();

// Import all stages
const stage1 = require('../curriculum/hashing/stage1');
const stage2 = require('../curriculum/hashing/stage2');
const stage3 = require('../curriculum/hashing/stage3');
const stage4 = require('../curriculum/hashing/stage4');
const stage5 = require('../curriculum/hashing/stage5');
const stage6 = require('../curriculum/hashing/stage6');
const stage7 = require('../curriculum/hashing/stage7');
const stage8 = require('../curriculum/hashing/stage8');
const stage9 = require('../curriculum/hashing/stage9');
const stage10 = require('../curriculum/hashing/stage10');

const allUnits = [
  ...stage1, ...stage2, ...stage3, ...stage4, ...stage5,
  ...stage6, ...stage7, ...stage8, ...stage9, ...stage10
];

const seedHashing = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Purge existing Hashing lessons
    const deleteResult = await Lesson.deleteMany({ subject: 'Hashing' });
    console.log(`Purged ${deleteResult.deletedCount} existing Hashing lessons`);

    let totalLessons = 0;
    const lessonsToInsert = [];

    allUnits.forEach((unit) => {
      unit.lessons.forEach((lesson, index) => {
        lessonsToInsert.push({
          ...lesson,
          subject: 'Hashing',
          unitTitle: unit.title,
          unitOrder: unit.order,
          lessonOrder: index + 1,
          isTitan: true
        });
        totalLessons++;
      });
    });

    console.log(`Seeding ${totalLessons} Titan-Grade Hashing lessons...`);
    
    // Bulk insert
    await Lesson.insertMany(lessonsToInsert);

    console.log(`Successfully seeded ${totalLessons} lessons!`);
    mongoose.connection.close();
    console.log('Database connection closed.');
  } catch (error) {
    console.error('Error seeding Hashing lessons:', error);
    process.exit(1);
  }
};

seedHashing();
