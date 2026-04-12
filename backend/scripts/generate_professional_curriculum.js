const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const curriculumData = require('../curriculum/library');
require('dotenv').config({ path: '../.env' });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

async function runGenerator() {
  try {
    console.log(`Connecting to DB: ${MONGODB_URI.substring(0, 30)}...`);
    await mongoose.connect(MONGODB_URI);
    console.log('CONNECTED TO ELITE DB');

    console.log('Clearing old populated subjects...');
    // Clear out 'Basics' and 'Arrays' since they are redefined exactly.
    await Subject.deleteMany({ name: { $in: ['Basics', 'Arrays'] } });

    for (const [subjectName, data] of Object.entries(curriculumData)) {
      console.log(`GENERATING STRICT 1:1 CONTENT: ${subjectName}...`);
      
      const sections = data.sections.map(section => {
        return {
          title: section.title,
          units: section.units.map((unit, uIdx) => {
            return {
              title: unit.title,
              desc: unit.desc,
              isUnlocked: true, // User requested ALL UNLOCKED
              xp: 50,
              lessons: unit.lessons
            };
          })
        };
      });

      await Subject.findOneAndUpdate(
        { name: subjectName },
        {
          name: subjectName,
          icon: data.icon,
          sections: sections
        },
        { upsert: true, new: true }
      );
      console.log(`✅ ${subjectName} DEPLOYED WITH ZERO DUPLICATION!`);
    }

    console.log('ELITE HIGH-QUALITY CURRICULUM OVERHAUL COMPLETE!');
    process.exit(0);
  } catch (err) {
    console.error('GENERATION FAILED', err);
    process.exit(1);
  }
}

runGenerator();
