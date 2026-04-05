const mongoose = require('mongoose');
const Problem = require('./models/Problem');

const zohoProblems = [
  {
    title: 'Spiral Matrix Traversal',
    difficulty: 'Medium',
    description: 'Given an M x N matrix, return all elements of the matrix in spiral order.',
    category: 'Arrays',
    xp: 150,
    locked: false,
    testCases: [
      { input: '[[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' }
    ]
  },
  {
    title: 'String Decompression',
    difficulty: 'Easy',
    description: 'Convert a string like "a3b2c1" into "aaabbc". Handle multi-digit numbers like "a10".',
    category: 'Strings',
    xp: 100,
    locked: false,
    testCases: [
      { input: '"a3b2"', output: '"aaabb"' },
      { input: '"z10"', output: '"zzzzzzzzzz"' }
    ]
  },
  {
    title: 'Sort by Frequency',
    difficulty: 'Medium',
    description: 'Sort an array based on the frequency of elements. If frequencies are the same, sort by value.',
    category: 'Hash Maps',
    xp: 200,
    locked: false,
    testCases: [
      { input: '[2,3,2,4,5,12,2,3,3,3,12]', output: '[3,3,3,3,2,2,2,12,12,4,5]' }
    ]
  },
  {
    title: 'Look and Say Sequence',
    difficulty: 'Medium',
    description: 'Find the Nth term in the Look-and-Say sequence: 1, 11, 21, 1211, 111221...',
    category: 'Logic',
    xp: 180,
    locked: false,
    testCases: [
      { input: '4', output: '"1211"' },
      { input: '5', output: '"111221"' }
    ]
  },
  {
    title: 'Remove Unbalanced Parentheses',
    difficulty: 'Hard',
    description: 'Remove the minimum number of parentheses to make the input string valid.',
    category: 'Strings',
    xp: 300,
    locked: false,
    testCases: [
      { input: '"(()()"', output: '"()()"' },
      { input: '")()("', output: '"()"' }
    ]
  }
];
module.exports = zohoProblems;

if (require.main === module) {

mongoose.connect('mongodb://127.0.0.1:27017/pico_dsa')
  .then(async () => {
    console.log('Seeding Zoho 5 Coding Challenges into The Forge...');
    // We keep existing problems but add these or update
    for (const p of zohoProblems) {
      await Problem.findOneAndUpdate({ title: p.title }, p, { upsert: true });
    }
    console.log('✅ Success! The Forge is now Zoho-Ready.');
    process.exit(0);
  })
  .catch(err => { console.error(err.message); process.exit(1); });
}
