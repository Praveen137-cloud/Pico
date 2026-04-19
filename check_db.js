const mongoose = require('mongoose');
require('dotenv').config();
const Problem = require('./models/Problem');

async function checkCount() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const count = await Problem.countDocuments();
        console.log('Total problems in DB:', count);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
checkCount();
