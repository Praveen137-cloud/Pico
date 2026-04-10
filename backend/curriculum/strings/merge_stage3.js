const p1 = require('./stage3_part1');
const p2 = require('./stage3_part2');
const fs = require('fs');
const path = require('path');

const fullStage = [...p1, ...p2];

const output = `const stage3 = ${JSON.stringify(fullStage, null, 2)};\n\nmodule.exports = stage3;`;

fs.writeFileSync(path.join(__dirname, 'stage3.js'), output);
console.log('✅ Strings Stage 3 Merged into stage3.js');
