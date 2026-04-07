const mongoose = require('mongoose');
require('dotenv').config();
const Subject = require('./models/Subject');

// Import modular curriculum
const arrays = require('./curriculum/arrays');
// (Other subjects will be imported here similarly)

const subjects = [
  arrays,
  // Add other subjects here as we modularize them
];

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa')
  .then(async () => {
    console.log('Pushing Updated Modular Curriculum (Zoho Difficulty + Pico Humor)...');
    await Subject.deleteMany({});
    await Subject.insertMany(subjects);
    console.log('✅ Success! Curriculum expanded and modularized.');
    process.exit(0);
  })
  .catch(err => { console.error(err.message); process.exit(1); });
}

module.exports = subjects;
