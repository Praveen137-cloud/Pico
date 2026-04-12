const mongoose = require('mongoose');
const Subject = require('./models/Subject');
const Stage = require('./models/Stage');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

async function repairDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    
    console.log('REPAIRING BROKEN SUBJECT -> STAGE LINKS');
    
    // 1. Get all original stages
    const stages = await Stage.find({});
    
    // 2. We need to map them back to the active Subjects in the DB.
    // Let's get all active subjects
    const subjects = await Subject.find({});
    let repairedCount = 0;

    for (let stage of stages) {
      // Example stage title: "Stage 2: Sorting & Searching Advance"
      // Or we can look at the subject names they belong to.
      // Wait, how do we reliably match them?
      let matchingSubject = null;

      // Simple keyword matching against subject names:
      for(let sub of subjects) {
        if(stage.title && sub.name && stage.title.includes(sub.name)) {
           matchingSubject = sub;
           break;
        }
      }

      // If we couldn't match dynamically, we can use a hard-coded mapping or check string includes "Sorting & Searching"
      if (!matchingSubject && stage.title) {
        if(stage.title.includes('Basics')) matchingSubject = subjects.find(s => s.name === 'Basics');
        else if(stage.title.includes('Array')) matchingSubject = subjects.find(s => s.name === 'Arrays');
        else if(stage.title.includes('String')) matchingSubject = subjects.find(s => s.name === 'Strings');
        else if(stage.title.includes('Linked List')) matchingSubject = subjects.find(s => s.name === 'Linked Lists');
        else if(stage.title.includes('Stacks')) matchingSubject = subjects.find(s => s.name === 'Stacks'); // From "Stacks & Queues"
        else if(stage.title.includes('Tree')) matchingSubject = subjects.find(s => s.name === 'Trees');
        else if(stage.title.includes('Graph')) matchingSubject = subjects.find(s => s.name === 'Graphs');
        else if(stage.title.includes('Dynamic Programming')) matchingSubject = subjects.find(s => s.name === 'DP');
        else if(stage.title.includes('Math')) matchingSubject = subjects.find(s => s.name === 'Math');
        else if(stage.title.includes('Sorting')) matchingSubject = subjects.find(s => s.name === 'Sorting');
        else if(stage.title.includes('Recursion')) matchingSubject = subjects.find(s => s.name === 'Recursion');
        else if(stage.title.includes('Hashing')) matchingSubject = subjects.find(s => s.name === 'Hash Maps');
        else if(stage.title.includes('Zoho')) matchingSubject = subjects.find(s => s.name === 'Zoho Elite');
      }

      if (matchingSubject) {
        stage.subjectId = matchingSubject._id;
        await stage.save();
        repairedCount++;
        console.log(`[LINKED] Stage "${stage.title}" -> Subject "${matchingSubject.name}"`);
      } else {
        console.log(`[ORPHANED] Could not find subject for Stage "${stage.title}"`);
      }
    }

    console.log(`\\nSUCCESSFULLY REPAIRED ${repairedCount} STAGES!`);
    console.log('The user original hours of lessons are now visible in the app again!');

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

repairDB();
