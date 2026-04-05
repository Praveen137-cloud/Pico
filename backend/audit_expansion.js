const mongoose = require('mongoose');
const Subject = require('./models/Subject');

mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa')
  .then(async () => {
    const subjects = await Subject.find({});
    subjects.forEach(s => {
      console.log(`Subject: ${s.name}`);
      s.sections.forEach(sec => {
        let total = 0;
        let matchCount = 0;
        let boardCount = 0;
        sec.units.forEach(u => {
          total += u.lessons.length;
          matchCount += u.lessons.filter(l => l.type === 'match_following').length;
          boardCount += u.lessons.filter(l => l.type === 'programming_board').length;
        });
        console.log(`  Section: ${sec.title} - total lessons: ${total} (Match: ${matchCount}, Board: ${boardCount})`);
      });
    });
    process.exit(0);
  });
