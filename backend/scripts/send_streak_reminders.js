const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const User = require('../models/User');
const { sendStreakReminderEmail } = require('../utils/email');

const IS_TEST = process.argv.includes('--test');

async function run() {
  try {
    console.log(`[Campaign] Connecting to Matrix Database...`);
    await mongoose.connect(process.env.MONGODB_URI);
    
    let users = [];
    if (IS_TEST) {
      console.log(`[TEST MODE] Targeting admin email: ${process.env.EMAIL_USER}`);
      users = [{ 
        name: 'Admin Developer', 
        email: process.env.EMAIL_USER, 
        streak: 99 
      }];
    } else {
      users = await User.find({}, 'name email streak');
      console.log(`[LIVE MODE] Targeting all ${users.length} users.`);
    }

    for (const user of users) {
      console.log(`[Sending] Reminder to ${user.name} (${user.email})...`);
      await sendStreakReminderEmail(user.email, user.name, user.streak);
      
      // Delay to avoid spam filters / rate limits
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(`[Campaign] Successfully finished. Exiting.`);
    process.exit(0);
  } catch (err) {
    console.error(`[CRITICAL ERROR]`, err);
    process.exit(1);
  }
}

run();
