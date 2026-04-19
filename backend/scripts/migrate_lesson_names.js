const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('../models/Lesson');

dotenv.config();

const mapping = {
  'Mathbits': 'Math & Bit Manipulation',
  'Recursion': 'Recursion & Backtracking',
  'Hashing': 'Hashing & Sets',
  'Searching & Sorting': 'Sorting & Searching'
};

async function migrateLessons() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to Atlas...');

    for (const [oldName, newName] of Object.entries(mapping)) {
      console.log(`Migrating lessons from ${oldName} to ${newName}...`);
      const res = await Lesson.updateMany(
        { subject: oldName },
        { $set: { subject: newName } }
      );
      console.log(`  Updated ${res.modifiedCount} lessons.`);
    }

    console.log('MIGRATION COMPLETE!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

migrateLessons();
