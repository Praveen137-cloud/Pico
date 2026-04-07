const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

async function applyIndexes() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const Problem = require('./models/Problem');
    const Subject = require('./models/Subject');
    const User = require('./models/User');

    console.log('Applying indexes...');

    // Problems: tag (for filtering) and title (unique lookup)
    await Problem.collection.createIndex({ tag: 1 });
    await Problem.collection.createIndex({ title: 1 }, { unique: true });

    // Subjects: name (unique)
    await Subject.collection.createIndex({ name: 1 }, { unique: true });

    // Users: xp (for leaderboard), email (already unique)
    await User.collection.createIndex({ xp: -1 });

    console.log('Database indexing complete!');
    process.exit(0);
  } catch (err) {
    console.error('Indexing error:', err);
    process.exit(1);
  }
}

applyIndexes();
