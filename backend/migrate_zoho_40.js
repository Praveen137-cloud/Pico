const mongoose = require('mongoose');
const Problem = require('./models/Problem');
const zohoProblems = require('./seed_problems');
require('dotenv').config();

async function migrate() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        
        console.log('Clearing old problems...');
        await Problem.deleteMany({});
        
        console.log(`Seeding ${zohoProblems.length} Zoho-focused problems...`);
        await Problem.insertMany(zohoProblems);
        
        const count = await Problem.countDocuments();
        console.log(`SUCCESS! DB now contains ${count} problems.`);
        process.exit(0);
    } catch (err) {
        console.error('MIGRATION FAILED:', err);
        process.exit(1);
    }
}

migrate();
