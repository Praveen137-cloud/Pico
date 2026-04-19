const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const ProblemSchema = require('./models/Problem').schema;

async function getStats() {
  const atlasUri = process.env.MONGODB_URI;
  if (!atlasUri) {
    console.error('MONGODB_URI is not defined in .env');
    process.exit(1);
  }
  
  try {
    const conn = await mongoose.createConnection(atlasUri).asPromise();
    const stats = await conn.db.command({ dbStats: 1 });
    console.log('STATS_START');
    console.log(JSON.stringify(stats, null, 2));
    console.log('STATS_END');
    await conn.close();
  } catch (e) {
    console.error('Atlas Stats Error:', e.message);
  }
}

async function getCounts() {
  const localUri = 'mongodb://127.0.0.1:27017/pico_dsa';
  const atlasUri = process.env.MONGODB_URI;

  const fetch = async (uri, label) => {
    try {
      const conn = await mongoose.createConnection(uri).asPromise();
      const Problem = conn.model('Problem', ProblemSchema);
      const counts = await Problem.aggregate([
        { $group: { _id: '$tag', count: { $sum: 1 } } }
      ]);
      console.log(`${label}_START`);
      console.log(JSON.stringify(counts, null, 2));
      console.log(`${label}_END`);
      await conn.close();
    } catch (e) {
      console.log(`${label}_ERROR: ${e.message}`);
    }
  };

  await getStats();
  await fetch(localUri, 'LOCAL');
  await fetch(atlasUri, 'ATLAS');
  process.exit(0);
}

getCounts();
