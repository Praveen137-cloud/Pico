const mongoose = require('mongoose');
const User = require('./models/User');
const Subject = require('./models/Subject');

async function fix() {
  await mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa');
  console.log('Finding user with XP 230...');
  
  const user = await User.findOne({ xp: 230 });
  if (!user) {
    console.log('User not found with exactly 230 XP. Trying any active user...');
    const activeUser = await User.findOne({ xp: { $gt: 0 } });
    if (activeUser) {
      console.log(`Found user: ${activeUser.name} (${activeUser.email})`);
      // Force completion of the first unit
      const stableUnitId = new mongoose.Types.ObjectId('69d21614ecc85515a806337b');
      activeUser.completedUnits = [stableUnitId];
      await activeUser.save();
      console.log('✅ Force-marked 1 unit completed for user.');
    }
  } else {
    console.log(`Found user: ${user.name} (${user.email})`);
    const stableUnitId = new mongoose.Types.ObjectId('69d21614ecc85515a806337b');
    user.completedUnits = [stableUnitId];
    await user.save();
    console.log('✅ Force-marked 1 unit completed for user.');
  }

  process.exit(0);
}

fix();
