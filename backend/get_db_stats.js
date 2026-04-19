const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Lesson = require('./models/Lesson');

dotenv.config();

const findUniqueSubjects = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const subjects = await Lesson.distinct('subject');
    console.log('Unique Subjects in DB:', subjects);
    
    for (const sub of subjects) {
        const count = await Lesson.countDocuments({ subject: sub });
        console.log(`${sub}: ${count}`);
    }
    
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

findUniqueSubjects();
