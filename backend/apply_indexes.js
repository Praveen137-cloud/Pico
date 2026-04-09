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

    // Curriculum Hierarchy Indexes
    console.log('Indexing Stage collection...');
    await mongoose.connection.db.collection('stages').createIndex({ subjectId: 1, order: 1 });
    
    console.log('Indexing Unit collection...');
    await mongoose.connection.db.collection('units').createIndex({ stageId: 1, order: 1 });
    
    console.log('Indexing Lesson collection...');
    await mongoose.connection.db.collection('lessons').createIndex({ unitId: 1, order: 1 });

    console.log('Database indexing complete!');
    process.exit(0);
  } catch (err) {
    console.error('Indexing error:', err);
    process.exit(1);
  }
}

applyIndexes();
