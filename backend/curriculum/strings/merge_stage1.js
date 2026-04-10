const p1 = require('./stage1_part1');
const p2 = require('./stage1_part2');
const fs = require('fs');
const path = require('path');

const fullStage = [...p1, ...p2];

const output = `const stage1 = ${JSON.stringify(fullStage, null, 2)};\n\nmodule.exports = stage1;`;

fs.writeFileSync(path.join(__dirname, 'stage1.js'), output);
console.log('✅ Strings Stage 1 Merged into stage1.js');
