const mongoose = require('mongoose');
require('dotenv').config();
const Subject = require('./models/Subject');
const Stage = require('./models/Stage');
const Unit = require('./models/Unit');

async function debugAPI() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to DB');

  const subjects = await Subject.find().lean();
  console.log(`Total Subjects in DB: ${subjects.length}`);

  for (const s of subjects) {
    console.log(`\nSubject: ${s.name} (${s._id})`);
    const stages = await Stage.find({ subjectId: s._id }).sort('order').lean();
    console.log(`  Stages found: ${stages.length}`);
    
    for (const stage of stages) {
      const unitCount = await Unit.countDocuments({ stageId: stage._id });
      console.log(`    Stage ${stage.order}: ${stage.title} -> ${unitCount} Units`);
    }
  }

  process.exit(0);
}

debugAPI().catch(err => { console.error(err); process.exit(1); });
