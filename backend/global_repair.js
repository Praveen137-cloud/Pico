const mongoose = require('mongoose');
const User = require('./models/User');

async function repairAll() {
  await mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa');
  
  // Stable ID for Linear Scan
  const stableUnitId = new mongoose.Types.ObjectId('69d21614ecc85515a806337b');

  console.log('--- REPAIRING ALL USERS (Global Synchronization) ---');
  
  const result = await User.updateMany(
    {}, // ALL users
    { 
      $set: { xp: 230 }, 
      $addToSet: { completedUnits: stableUnitId } 
    }
  );

  console.log(`✅ Progress repaired for ${result.modifiedCount} users!`);
  
  const usersAfter = await User.find({}, 'email xp completedUnits');
  console.log('\n--- CONFIRMATION ---');
  usersAfter.forEach(u => {
    console.log(`User: ${u.email} XP: ${u.xp} Unit in Completed: ${u.completedUnits.includes(stableUnitId)}`);
  });

  process.exit(0);
}

repairAll();
