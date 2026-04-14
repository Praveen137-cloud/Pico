const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Subject = require('../models/Subject');

dotenv.config();

const titanSubjects = [
  { name: 'Arrays', icon: '📦', order: 1 },
  { name: 'Recursion', icon: '🔄', order: 2 },
  { name: 'Hashing', icon: '🔑', order: 5 },
  { name: 'Heaps', icon: '🏔️', order: 6 },
  { name: 'Linked Lists', icon: '🔗', order: 7 },
  { name: 'Stacks & Queues', icon: '🥞', order: 8 },
  { name: 'Searching & Sorting', icon: '🔍', order: 9 },
  { name: 'Strings', icon: '🧵', order: 10 },
  { name: 'Trees', icon: '🌳', order: 11 },
  { name: 'Graphs', icon: '🕸️', order: 12 },
  { name: 'Dynamic Programming', icon: '🏗️', order: 13 },
  { name: 'Mathbits', icon: '🦜', order: 14 }
];

async function syncSubjects() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB Atlas...');

    for (const sub of titanSubjects) {
      console.log(`Syncing subject: ${sub.name}...`);
      
      const updated = await Subject.findOneAndUpdate(
        { name: sub.name },
        { 
          $set: { 
            icon: sub.icon, 
            order: sub.order, 
            isTitan: true 
          } 
        },
        { upsert: true, new: true }
      );
      
      console.log(`  Set ${sub.name} to Titan Grade (ID: ${updated._id})`);
    }

    console.log('-----------------------------------------');
    console.log('TITAN SUBJECT SYNC COMPLETE!');
    console.log('-----------------------------------------');
    process.exit(0);
  } catch (err) {
    console.error('Sync Failed:', err);
    process.exit(1);
  }
}

syncSubjects();
