const p1 = require('./stage5_part1');
const p2 = require('./stage5_part2');
const fs = require('fs');
const path = require('path');

const fullStage = [...p1, ...p2];

const output = `const stage5 = ${JSON.stringify(fullStage, null, 2)};\n\nmodule.exports = stage5;`;

fs.writeFileSync(path.join(__dirname, 'stage5.js'), output);
console.log('✅ Arrays Stage 5 Merged into stage5.js');
