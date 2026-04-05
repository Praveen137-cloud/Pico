const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa')
  .then(async () => {
    try {
      const existing = await User.findOne({ email: 'praveenkumar63811@gmail.com' });
      if (existing) {
        console.log('Account already exists for this email!');
      } else {
        const user = new User({
          name: 'praveen',
          email: 'praveenkumar63811@gmail.com',
          password: '12345678'
        });
        await user.save();
        console.log('Successfully created account for praveenkumar63811@gmail.com');
      }
    } catch (err) {
      console.error('Error creating user:', err.message);
    } finally {
      mongoose.connection.close();
    }
  });
