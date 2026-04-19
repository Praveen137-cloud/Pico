const axios = require('axios');
const code = 'void solve() { printf("Hello world"); }';
axios.post('https://ce.judge0.com/submissions?base64_encoded=true&wait=true', {
  language_id: 50, 
  source_code: Buffer.from(code).toString('base64')
}).then(res => {
  console.log('SUCCESS:', res.data);
  const out = res.data.compile_output ? Buffer.from(res.data.compile_output, 'base64').toString('utf8') : null;
  console.log('Compile output:', out);
}).catch(err => console.error('ERROR:', err.response ? err.response.data : err.message));
