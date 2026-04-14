const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('./models/Lesson');

dotenv.config();

const auditSubjects = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const subjects = [
      'Arrays', 'Recursion', 'Hashing', 'Heaps', 'LinkedLists', 
      'StacksQueues', 'SearchingSorting', 'Strings', 'Trees', 
      'Graphs', 'DynamicProgramming', 'Mathbits'
    ];

    console.log('\n--- Titan-Grade Curriculum Audit ---\n');
    console.log('| Subject | Titan Lessons | % of Target (1000) |');
    console.log('|---------|---------------|-------------------|');

    for (const sub of subjects) {
      const count = await Lesson.countDocuments({ subject: sub, isTitan: true });
      const percent = (count / 10).toFixed(1); // 1000 lessons total
      console.log(`| ${sub.padEnd(16)} | ${count.toString().padEnd(13)} | ${percent}% |`);
    }

    console.log('\n-----------------------------------\n');
    mongoose.connection.close();
  } catch (error) {
    console.error('Audit failed:', error);
    process.exit(1);
  }
};

auditSubjects();
