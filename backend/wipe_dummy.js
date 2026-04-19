const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa')
  .then(async () => {
    console.log('MongoDB connected for wiping...');
    const result = await User.deleteMany({});
    console.log(`Wiped ${result.deletedCount} old dummy users from database.`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });
