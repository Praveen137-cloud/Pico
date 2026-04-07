const mongoose = require('mongoose');
const Problem = require('./models/Problem');
require('dotenv').config();

async function check() {
  await mongoose.connect(process.env.MONGODB_URI);
  const count = await Problem.countDocuments();
  console.log('COUNT:' + count);
  process.exit(0);
}
check();
