const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const parentFiles = fs.readdirSync(path.resolve(__dirname, '../'));
    const backendExists = fs.existsSync(path.resolve(__dirname, '../backend/server.js'));
    res.json({
      status: 'HYBRID SYNC ACTIVE',
      parentContents: parentFiles,
      backendFoundInsideFrontend: backendExists,
      serverPath: path.resolve(__dirname, '../backend/server.js'),
      env: Object.keys(process.env).filter(k => k.includes('EMAIL') || k.includes('RAZOR'))
    });
  } catch (err) {
    res.json({ error: err.message });
  }
};
