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
  if (!fs.existsSync(subjectDir)) return;

  const subject = await Subject.findOne({ name: subjectName });
  if (!subject) return;

  // Scan for ALL stage files (including parts)
  const files = fs.readdirSync(subjectDir).filter(f => f.startsWith('stage') && f.endsWith('.js'));
  
  // Group by stage number
  const stagesMap = {};
  files.forEach(f => {
    const match = f.match(/stage(\d+)/);
    if (match) {
        const num = match[1];
        if (!stagesMap[num]) stagesMap[num] = [];
        stagesMap[num].push(f);
    }
  });

  for (const stageNum in stagesMap) {
    console.log(`Deep Sync: ${subjectName} Stage ${stageNum}...`);
    
    let stage = await Stage.findOne({ subjectId: subject._id, order: parseInt(stageNum) });
    if (!stage) {
      stage = new Stage({
        title: `Stage ${stageNum}: ${subjectName} Advance`,
        subjectId: subject._id,
        order: parseInt(stageNum)
      });
      await stage.save();
    }

    // Combine all parts for this stage
    let allUnits = [];
    for (const fileName of stagesMap[stageNum]) {
        try {
            const data = require(path.join(subjectDir, fileName));
            if (Array.isArray(data)) {
                allUnits = [...allUnits, ...data];
            }
        } catch (e) {
            console.error(`Error loading ${fileName}:`, e.message);
        }
    }

    // Sort units and deduplicate by order
    const uniqueUnits = {};
    allUnits.forEach(u => { uniqueUnits[u.order] = u; });
    const finalUnits = Object.values(uniqueUnits).sort((a, b) => a.order - b.order);

    for (const u of finalUnits) {
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

      await Lesson.deleteMany({ unitId: unit._id });
      const lessons = u.lessons.map((l, lIdx) => ({
        ...l,
        unitId: unit._id,
        order: lIdx + 1
      }));
      await Lesson.insertMany(lessons);
    }
    console.log(`  - Stage ${stageNum}: ${finalUnits.length} units sync'd.`);
  }
}

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('CONNECTED - INTEGRITY CHECK STARTING');

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
    if (subjectName) await ingestSubject(dirName, subjectName);
  }

  console.log('INTEGRITY CHECK COMPLETE');
  process.exit(0);
}

run().catch(e => { console.error(e); process.exit(1); });
