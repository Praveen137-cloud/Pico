const p1 = require('./stage4_part1');
const p2 = require('./stage4_part2');
const fs = require('fs');
const path = require('path');

const fullStage = [...p1, ...p2];

const output = `const stage4 = ${JSON.stringify(fullStage, null, 2)};\n\nmodule.exports = stage4;`;

fs.writeFileSync(path.join(__dirname, 'stage4.js'), output);
console.log('✅ Arrays Stage 4 Merged into stage4.js');
