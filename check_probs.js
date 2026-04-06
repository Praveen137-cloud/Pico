const mongoose = require('mongoose');
const Problem = require('./models/Problem');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

async function check() {
  await mongoose.connect(MONGODB_URI);
  const probs = await Problem.find({}).limit(5);
  console.log(JSON.stringify(probs, null, 2));
  process.exit(0);
}

check();
