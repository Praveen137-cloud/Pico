const mongoose = require('mongoose');
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');
const Lesson = require('../models/Lesson');
require('dotenv').config();
const path = require('path');
const fs = require('fs');

async function ingestSubject(dirName, subjectName) {
  const subjectDir = path.join(__dirname, '..', 'curriculum', dirName);
  if (!fs.existsSync(subjectDir)) {
    console.error(`Directory not found: ${subjectDir}`);
    return;
  }

  // 1. Get or Create Subject
  let subject = await Subject.findOne({ name: subjectName });
  if (!subject) {
    subject = new Subject({ name: subjectName, icon: '📚' });
    await subject.save();
    console.log(`Created Subject: ${subjectName}`);
  }

  // 2. Scan for Stage files
  const files = fs.readdirSync(subjectDir).filter(f => f.startsWith('stage') && f.endsWith('.js') && !f.includes('part'));
  
  for (const file of files) {
    const stageNum = file.match(/\d+/)[0];
    const stageData = require(path.join(subjectDir, file));
    
    console.log(`Processing ${subjectName} Stage ${stageNum}...`);

    // 3. Get or Create Stage
    let stage = await Stage.findOne({ subjectId: subject._id, order: parseInt(stageNum) });
    if (!stage) {
      stage = new Stage({
        title: `Stage ${stageNum}: ${subjectName} Advance`, // Custom title logic if needed
        subjectId: subject._id,
        order: parseInt(stageNum)
      });
      await stage.save();
      subject.stages.push(stage._id);
      await subject.save();
    }

    // 4. Upsert Units & Lessons
    for (const u of stageData) {
      let unit = await Unit.findOne({ stageId: stage._id, order: u.order });
      if (!unit) {
        unit = new Unit({
          title: u.title,
          desc: u.desc,
          stageId: stage._id,
          order: u.order,
          xp: 100,
          isUnlocked: true
        });
        await unit.save();
      }

      // Re-ingest lessons (Clear and replace for high quality updates)
      await Lesson.deleteMany({ unitId: unit._id });
      const lessons = u.lessons.map((l, lIdx) => ({
        ...l,
        unitId: unit._id,
        order: lIdx + 1
      }));
      await Lesson.insertMany(lessons);
    }
    console.log(`✅ Stage ${stageNum} Ingested (${stageData.length} units).`);
  }
}

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa');
    console.log('CONNECTED TO PICO DB');

    const subjectMap = {
      'basics': 'Basics',
      'arrays': 'Arrays',
      'strings': 'Strings',
      'linkedlists': 'Linked Lists',
      'stacksqueues': 'Stacks & Queues',
      'trees': 'Trees',
      'graphs': 'Graphs',
      'dynamicprogramming': 'Dynamic Programming',
      'algorithmdesign': 'Algorithm Design',
      'mathbits': 'Math & Bit Manipulation',
      'searchingsorting': 'Sorting & Searching',
      'recursion': 'Recursion & Backtracking',
      'hashing': 'Hashing & Sets',
      'advancedds': 'Advanced Data Structures',
      'zohoelite': 'Zoho Elite'
    };

    const curriculumDir = path.join(__dirname, '..', 'curriculum');
    const directories = fs.readdirSync(curriculumDir).filter(f => fs.statSync(path.join(curriculumDir, f)).isDirectory());

    for (const dirName of directories) {
      const subjectName = subjectMap[dirName.toLowerCase()];
      if (subjectName) {
        await ingestSubject(dirName, subjectName);
      } else {
        console.warn(`⚠️ No mapping found for directory: ${dirName}. Skipping...`);
      }
    }


    console.log('--- MODULAR INGESTION COMPLETE ---');
    process.exit(0);
  } catch (err) {
    console.error('Ingestion Fault:', err);
    process.exit(1);
  }
}

run();
