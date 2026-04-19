const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const User = require('../models/User');
const { sendWelcomeEmail } = require('../utils/email');

async function run() {
  try {
    console.log('[Historic Email] Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('[Historic Email] DB Connected.');

    // 1. Identify recipients (The 4 real students identified + Admin)
    const targets = [
      { email: 'kokilamahalingam2@gmail.com', name: 'Hari' },
      { email: '953624104147@ritrjpm.ac.in', name: 'SHANTHIYAA A T' },
      { email: 'parvathidevikalyanasundar@gmail.com', name: 'Parvathidevi Kalyanasundar' },
      { email: 'parudev100.ai@gmail.com', name: 'Paru Dev' },
      { email: 'praveenkumar63811@gmail.com', name: 'Admin (Test)' }
    ];

    console.log(`[Historic Email] Preparing to send ${targets.length} emails...`);

    for (const target of targets) {
      console.log(`[Historic Email] Dispatching to: ${target.email}...`);
      try {
        await sendWelcomeEmail(target.email, target.name);
        console.log(`[Historic Email] SUCCESS: ${target.email}`);
      } catch (err) {
        console.error(`[Historic Email] FAILED: ${target.email}`, err.message);
      }
      // Small delay to prevent SMTP throttling
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    console.log('[Historic Email] All tasks completed.');
  } catch (err) {
    console.error('[Historic Email] Fatal script error:', err);
  } finally {
    await mongoose.connection.close();
    process.exit(0);
  }
}

run();
