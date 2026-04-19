require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('../models/Lesson');

// Arrays Stages 1-5
const stage1 = require('../curriculum/arrays/stage1');
const stage2 = require('../curriculum/arrays/stage2');
const stage3 = require('../curriculum/arrays/stage3');
const stage4 = require('../curriculum/arrays/stage4');
const stage5 = require('../curriculum/arrays/stage5');

const allStages = [
  ...stage1, ...stage2, ...stage3, ...stage4, ...stage5
];

const seedArrays = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Purge existing Arrays lessons
    const deleteRes = await Lesson.deleteMany({ subject: 'Arrays' });
    console.log(`Purged ${deleteRes.deletedCount} existing Arrays lessons`);

    const lessonsToInsert = [];
    allStages.forEach((unit) => {
      unit.lessons.forEach((lesson, index) => {
        lessonsToInsert.push({
          ...lesson,
          subject: 'Arrays',
          unitTitle: unit.title,
          unitOrder: unit.order,
          lessonOrder: index + 1,
          isTitan: true
        });
      });
    });

    console.log(`Seeding ${lessonsToInsert.length} Titan-Grade Arrays lessons...`);
    const inserted = await Lesson.insertMany(lessonsToInsert);
    console.log(`Successfully seeded ${inserted.length} lessons!`);

    mongoose.connection.close();
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedArrays();
