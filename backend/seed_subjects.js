const mongoose = require('mongoose');
require('dotenv').config();
const Subject = require('./models/Subject');
const Stage = require('./models/Stage');
const Unit = require('./models/Unit');
const Lesson = require('./models/Lesson');

// Import modular curriculum
const arrays = require('./curriculum/arrays');

const subjects = [
  arrays,
];

async function syncCurriculum() {
  try {
    console.log('--- CURRICULUM SYNC INITIALIZED ---');
    
    for (const subData of subjects) {
      console.log(`Syncing Subject: ${subData.name}...`);
      
      // 1. Upsert Subject
      let subject = await Subject.findOneAndUpdate(
        { name: subData.name },
        { 
          icon: subData.icon, 
          order: subData.order || 0,
          isTitan: subData.isTitan || false
        },
        { upsert: true, new: true }
      );

      // 2. Clear old stages/units/lessons for this subject to ensure fresh sync
      // (Optional: You can also use upsert if you want to preserve IDs, but clearing is safer for major structural changes)
      const existingStages = await Stage.find({ subjectId: subject._id });
      for (const st of existingStages) {
        const units = await Unit.find({ stageId: st._id });
        for (const u of units) {
          await Lesson.deleteMany({ unitId: u._id });
        }
        await Unit.deleteMany({ stageId: st._id });
      }
      await Stage.deleteMany({ subjectId: subject._id });

      // 3. Re-Sync Stages
      const stageIds = [];
      if (subData.sections) {
        for (let i = 0; i < subData.sections.length; i++) {
          const sec = subData.sections[i];
          const stage = new Stage({
            title: sec.title,
            subjectId: subject._id,
            order: i + 1,
            videoUrl: sec.videoUrl || '',
            videoTitle: sec.videoTitle || ''
          });
          await stage.save();
          stageIds.push(stage._id);

          // 4. Sync Units
          if (sec.units) {
            for (let j = 0; j < sec.units.length; j++) {
              const uData = sec.units[j];
              const unit = new Unit({
                title: uData.title,
                desc: uData.desc || '',
                stageId: stage._id,
                order: j + 1,
                xp: uData.xp || 30,
                isUnlocked: uData.isUnlocked ?? (j === 0 && i === 0)
              });
              await unit.save();

              // 5. Sync Lessons
              if (uData.lessons) {
                const lessons = uData.lessons.map((l, lIdx) => ({
                  ...l,
                  unitId: unit._id,
                  order: lIdx + 1
                }));
                await Lesson.insertMany(lessons);
              }
            }
          }
        }
      }

      // 6. Link stages back to subject
      subject.stages = stageIds;
      await subject.save();
      console.log(`✅ ${subData.name} synced completely (${stageIds.length} stages).`);
    }

    console.log('--- SYNC SUCCESSFUL ---');
    process.exit(0);
  } catch (err) {
    console.error('--- SYNC FAILED ---');
    console.error(err);
    process.exit(1);
  }
}

if (require.main === module) {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa')
  .then(() => syncCurriculum())
  .catch(err => { console.error(err.message); process.exit(1); });
}

module.exports = subjects;
