const axios = require('axios');
axios.post('https://ce.judge0.com/submissions?base64_encoded=false&wait=true', {
  language_id: 71, 
  source_code: 'print("hello")'
}).then(res => console.log('SUCCESS:', res.data)).catch(err => console.error('ERROR:', err.response ? err.response.data : err.message));
