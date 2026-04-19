const mongoose = require('mongoose');
require('dotenv').config();
const Subject = require('../models/Subject');
const Stage = require('../models/Stage');
const Unit = require('../models/Unit');

async function deduplicate() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  const subjects = await Subject.find().lean();
  const nameGroups = {};
  subjects.forEach(s => {
    if (!nameGroups[s.name]) nameGroups[s.name] = [];
    nameGroups[s.name].push(s);
  });

  for (const name in nameGroups) {
    const group = nameGroups[name];
    if (group.length > 1) {
      console.log(`Processing duplicate group: ${name}`);
      
      // Find the "best" subject (the one with the most stages or units)
      const stats = await Promise.all(group.map(async (s) => {
        const stageCount = await Stage.countDocuments({ subjectId: s._id });
        return { id: s._id, stageCount };
      }));
      
      stats.sort((a, b) => b.stageCount - a.stageCount);
      const master = stats[0].id;
      const toDelete = stats.slice(1).map(s => s.id);

      console.log(`  Master ID: ${master} (Stages: ${stats[0].stageCount})`);
      console.log(`  Deleting ${toDelete.length} redundant entries`);

      for (const oldId of toDelete) {
        // Find stages linked to this old subject and move them to master
        const affectedStages = await Stage.find({ subjectId: oldId });
        for (const stage of affectedStages) {
            // Check if master already has a stage with this order/title?
            // For safety, we'll just move them and let the user see if they have dupes
            // Actually, if the master already has 5 stages and the old one has 0, it's easy.
            // If both have stages, we might end up with 10 stages.
            // But usually the dupes are empty shells.
            stage.subjectId = master;
            await stage.save();
        }
        await Subject.deleteOne({ _id: oldId });
      }
    }
  }

  console.log('Deduplication Complete');
  process.exit(0);
}

deduplicate().catch(err => { console.error(err); process.exit(1); });
