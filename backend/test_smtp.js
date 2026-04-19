const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const { verifyConnection } = require('./utils/email');

async function test() {
  console.log('--- SMTP Connection Test ---');
  console.log(`User: ${process.env.EMAIL_USER}`);
  console.log('Verifying connection...');
  
  const result = await verifyConnection();
  
  if (result.success) {
    console.log('✅ SMTP Connection SUCCESSFUL!');
  } else {
    console.log('❌ SMTP Connection FAILED!');
    console.log(`Error: ${result.error}`);
  }
}

test();
