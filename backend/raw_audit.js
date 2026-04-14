const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const rawAudit = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log('Collections:', collections.map(c => c.name));

    const lessons = db.collection('lessons');
    const firstLesson = await lessons.findOne();
    console.log('Sample Lesson Document:', JSON.stringify(firstLesson, null, 2));

    const subjects = await lessons.distinct('subject');
    console.log('Found Subjects:', subjects);

    for (const sub of subjects) {
      const titanCount = await lessons.countDocuments({ subject: sub, isTitan: true });
      const totalCount = await lessons.countDocuments({ subject: sub });
      console.log(`${sub}: ${titanCount} Titan / ${totalCount} Total`);
    }

    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

rawAudit();
