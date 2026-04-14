const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const User = require('./models/User');

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const count = await User.countDocuments();
    const sample = await User.find({}, 'name email streak').limit(5);
    console.log(`Total Users: ${count}`);
    console.log('Sample Users:', JSON.stringify(sample, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
run();
