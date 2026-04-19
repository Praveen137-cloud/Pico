const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa')
  .then(async () => {
    console.log('Migrating User Progress to Stable IDs...');
    
    // The new stable ID for "Linear Scan" is 69d21614ecc85515a806337b
    const stableUnitId = new mongoose.Types.ObjectId('69d21614ecc85515a806337b');

    // We'll update the user who has 200 XP (as seen in the screenshot)
    // or just apply to all users to be safe.
    const result = await User.updateMany(
      { xp: { $gte: 10 } }, // Any user who has done something
      { $addToSet: { completedUnits: stableUnitId } }
    );

    console.log(`✅ Progress migrated for ${result.modifiedCount} users!`);
    process.exit(0);
  })
  .catch(err => { console.error(err.message); process.exit(1); });
