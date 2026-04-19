const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa')
  .then(async () => {
    console.log('Force-Repairing User Progress for XP >= 10...');
    
    // Stable IDs from our seed_subjects.js
    const stableUnitId = new mongoose.Types.ObjectId('69d21614ecc85515a806337b'); // Linear Scan

    // 1. Add stable "Linear Scan" to anyone with XP
    const result = await User.updateMany(
      { xp: { $gte: 10 } },
      { $addToSet: { completedUnits: stableUnitId } }
    );

    console.log(`✅ Forced 1/1 DONE for ${result.modifiedCount} users!`);
    process.exit(0);
  })
  .catch(err => { console.error(err.message); process.exit(1); });
