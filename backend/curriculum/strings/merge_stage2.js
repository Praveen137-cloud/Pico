const p1 = require('./stage2_part1');
const p2 = require('./stage2_part2');
const fs = require('fs');
const path = require('path');

const fullStage = [...p1, ...p2];

const output = `const stage2 = ${JSON.stringify(fullStage, null, 2)};\n\nmodule.exports = stage2;`;

fs.writeFileSync(path.join(__dirname, 'stage2.js'), output);
console.log('✅ Strings Stage 2 Merged into stage2.js');
