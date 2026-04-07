const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const Problem = require('./models/Problem');

async function getStats() {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI is not defined in .env');
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGODB_URI);
    const db = mongoose.connection.db;
    const stats = await db.command({ dbStats: 1 });
    console.log('STATS_START');
    console.log(JSON.stringify(stats, null, 2));
    console.log('STATS_END');

    const counts = await Problem.aggregate([
      { $group: { _id: '$tag', count: { $sum: 1 } } }
    ]);
    console.log('COUNTS_START');
    console.log(JSON.stringify(counts, null, 2));
    console.log('COUNTS_END');
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
getStats();
