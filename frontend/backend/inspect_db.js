const mongoose = require('mongoose');
const Subject = require('./models/Subject');
const Stage = require('./models/Stage');
const Unit = require('./models/Unit');
const Lesson = require('./models/Lesson');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

async function inspectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    
    const subjectCount = await Subject.countDocuments();
    const stageCount = await Stage.countDocuments();
    const unitCount = await Unit.countDocuments();
    const lessonCount = await Lesson.countDocuments();
    
    console.log(`SUBJECTS: ${subjectCount}`);
    console.log(`STAGES: ${stageCount}`);
    console.log(`UNITS: ${unitCount}`);
    console.log(`LESSONS: ${lessonCount}`);

    // If there are orphaned stages, let's list their Titles and IDs so we can rescue them!
    const stages = await Stage.find({}).lean();
    console.log('\\n--- STAGE DUMP ---');
    stages.forEach(s => console.log(`Stage: [${s._id}] "${s.title}" -> Belongs to Subject: ${s.subjectId}`));

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

inspectDB();
