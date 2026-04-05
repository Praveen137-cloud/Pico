const mongoose = require('mongoose');
const Subject = require('./models/Subject');
const User = require('./models/User');

async function audit() {
  await mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa');
  
  const subjects = await Subject.find({});
  console.log('--- SUBJECTS AUDIT ---');
  subjects.forEach(s => {
    console.log(`Subject: ${s.name} (${s._id})`);
    s.sections.forEach(sec => {
      console.log(`  Section: ${sec.title} (${sec._id})`);
      sec.units.forEach(u => {
        console.log(`    Unit: ${u.title} (${u._id}) isUnlocked: ${u.isUnlocked}`);
      });
    });
  });

  const users = await User.find({ xp: { $gt: 0 } });
  console.log('\n--- USERS AUDIT ---');
  users.forEach(u => {
    console.log(`User: ${u.email} XP: ${u.xp} Completed Units: ${u.completedUnits}`);
  });

  process.exit(0);
}

audit();
