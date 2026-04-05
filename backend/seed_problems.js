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
    testCases: [{ input: '[[1,2,3],[4,5,6],[7,8,9]]', output: '[1,2,3,6,9,8,7,4,5]' }]
  },
  {
    title: 'String Decompression',
    difficulty: 'Easy',
    description: 'Convert "a3b2c1" to "aaabbc". Handle multi-digit numbers like "a10".',
    category: 'Strings',
    xp: 100,
    locked: false,
    testCases: [{ input: '"a3b2"', output: '"aaabb"' }]
  },
  {
    title: 'Sort by Frequency',
    difficulty: 'Medium',
    description: 'Sort an array based on element frequency. If frequencies match, sort by value.',
    category: 'Sorting',
    xp: 200,
    locked: false,
    testCases: [{ input: '[2,3,2,4,5,12,2,3]', output: '[2,2,2,3,3,4,5,12]' }]
  },
  {
    title: 'Look and Say Sequence',
    difficulty: 'Medium',
    description: 'Find the Nth term in: 1, 11, 21, 1211, 111221...',
    category: 'Strings',
    xp: 180,
    locked: false,
    testCases: [{ input: '4', output: '"1211"' }]
  },
  {
    title: 'Remove Unbalanced Parentheses',
    difficulty: 'Hard',
    description: 'Remove minimum parentheses to make the string valid.',
    category: 'Strings',
    xp: 300,
    locked: false,
    testCases: [{ input: '"(()()"', output: '"()()"' }]
  },
  {
    title: 'Snake Matrix Pattern',
    difficulty: 'Easy',
    description: 'Print matrix in snake pattern (left-to-right, then right-to-left).',
    category: 'Arrays',
    xp: 120,
    locked: false,
    testCases: [{ input: '[[1,2],[3,4]]', output: '[1,2,4,3]' }]
  },
  {
    title: 'Anagram Check',
    difficulty: 'Easy',
    description: 'Check if two strings are anagrams of each other.',
    category: 'Strings',
    xp: 80,
    locked: false,
    testCases: [{ input: '"listen", "silent"', output: 'true' }]
  },
  {
    title: 'Matrix Rotation (90°)',
    difficulty: 'Medium',
    description: 'Rotate a square matrix 90 degrees clockwise in-place.',
    category: 'Arrays',
    xp: 200,
    locked: false,
    testCases: [{ input: '[[1,2],[3,4]]', output: '[[3,1],[4,2]]' }]
  },
  {
    title: 'Prime Factorization',
    difficulty: 'Easy',
    description: 'Find all prime factors of a given number.',
    category: 'Math',
    xp: 100,
    locked: false,
    testCases: [{ input: '12', output: '[2,2,3]' }]
  },
  {
    title: 'Find Equilibrium Point',
    difficulty: 'Easy',
    description: 'Find the index where sum of elements to the left equals sum to the right.',
    category: 'Arrays',
    xp: 110,
    locked: false,
    testCases: [{ input: '[1,3,5,2,2]', output: '2' }]
  },
  {
    title: 'Number to Indian Words',
    difficulty: 'Medium',
    description: 'Convert a number to its Indian currency word representation (Lakhs, Crores).',
    category: 'Math',
    xp: 250,
    locked: false,
    testCases: [{ input: '150000', output: '"One Lakh Fifty Thousand"' }]
  },
  {
    title: 'Kadane\'s Algorithm',
    difficulty: 'Medium',
    description: 'Find the contiguous subarray with the largest sum.',
    category: 'Arrays',
    xp: 180,
    locked: false,
    testCases: [{ input: '[-2,1,-3,4,-1,2,1,-5,4]', output: '6' }]
  },
  {
    title: 'Sudoku Solver Basic',
    difficulty: 'Hard',
    description: 'Fill a 9x9 grid so that every row, column, and 3x3 box has 1-9.',
    category: 'Recursion',
    xp: 400,
    locked: false,
    testCases: [{ input: 'grid', output: 'true' }]
  },
  {
    title: 'Longest Common Prefix',
    difficulty: 'Easy',
    description: 'Find the longest common prefix among an array of strings.',
    category: 'Strings',
    xp: 90,
    locked: false,
    testCases: [{ input: '["apple", "app", "april"]', output: '"ap"' }]
  },
  {
    title: 'Binary to Decimal',
    difficulty: 'Easy',
    description: 'Convert a binary string to its decimal integer value.',
    category: 'Math',
    xp: 70,
    locked: false,
    testCases: [{ input: '"1101"', output: '13' }]
  },
  {
    title: 'Find Missing Number',
    difficulty: 'Easy',
    description: 'In an array of 1 to N, one number is missing. Find it.',
    category: 'Arrays',
    xp: 80,
    locked: false,
    testCases: [{ input: '[1,2,4,5]', output: '3' }]
  },
  {
    title: 'Reverse Words in Sentence',
    difficulty: 'Medium',
    description: 'Reverse the order of words in a sentence without using built-in split.',
    category: 'Strings',
    xp: 150,
    locked: false,
    testCases: [{ input: '"Pico is fun"', output: '"fun is Pico"' }]
  },
  {
    title: 'First Non-Repeating Char',
    difficulty: 'Easy',
    description: 'Find the first character in a string that does not repeat.',
    category: 'Strings',
    xp: 100,
    locked: false,
    testCases: [{ input: '"swiss"', output: '"w"' }]
  },
  {
    title: 'Check for Power of 2',
    difficulty: 'Easy',
    description: 'Determine if a number is a power of 2 using bitwise operators.',
    category: 'Math',
    xp: 60,
    locked: false,
    testCases: [{ input: '16', output: 'true' }]
  },
  {
    title: 'Tower of Hanoi',
    difficulty: 'Hard',
    description: 'Move N disks from source till destination using an auxiliary rod.',
    category: 'Recursion',
    xp: 350,
    locked: false,
    testCases: [{ input: '3', output: '7' }]
  },
  {
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    description: 'Find the maximum of each window of size K as it slides across the array.',
    category: 'Two Pointers',
    xp: 300,
    locked: false,
    testCases: [{ input: '[1,3,-1,-3,5], 3', output: '[3,3,5]' }]
  },
  {
    title: 'GCD and LCM',
    difficulty: 'Easy',
    description: 'Calculate the Greatest Common Divisor and Least Common Multiple of two numbers.',
    category: 'Math',
    xp: 80,
    locked: false,
    testCases: [{ input: '12, 18', output: '6, 36' }]
  },
  {
    title: 'Merge Sorted Arrays',
    difficulty: 'Easy',
    description: 'Merge two sorted arrays into a single sorted array without extra space.',
    category: 'Two Pointers',
    xp: 110,
    locked: false,
    testCases: [{ input: '[1,3,5], [2,4]', output: '[1,2,3,4,5]' }]
  },
  {
    title: 'Check Palindrome Number',
    difficulty: 'Easy',
    description: 'Determine if an integer is a palindrome without converting to string.',
    category: 'Math',
    xp: 90,
    locked: false,
    testCases: [{ input: '121', output: 'true' }]
  },
  {
    title: 'Search in Sorted Matrix',
    difficulty: 'Medium',
    description: 'Efficiently search for a value in a row-wise and column-wise sorted matrix.',
    category: 'Arrays',
    xp: 170,
    locked: false,
    testCases: [{ input: '[[1,4,7],[2,5,8]], 5', output: 'true' }]
  },
  {
    title: 'N-Queens Problem',
    difficulty: 'Hard',
    description: 'Place N queens on an NxN chessboard such that no two queens attack each other.',
    category: 'Recursion',
    xp: 500,
    locked: false,
    testCases: [{ input: '4', output: '2' }]
  },
  {
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    description: 'Given a string of brackets, check if they are balanced correctly.',
    category: 'Zoho Elite',
    xp: 100,
    locked: false,
    testCases: [{ input: '"[{()}]"', output: 'true' }]
  },
  {
    title: 'Unique Paths in Grid',
    difficulty: 'Medium',
    description: 'Find the number of ways to reach bottom-right from top-left in an MxN grid.',
    category: 'Recursion',
    xp: 220,
    locked: false,
    testCases: [{ input: '3, 3', output: '6' }]
  },
  {
    title: 'Pascal\'s Triangle',
    difficulty: 'Easy',
    description: 'Generate the first N rows of Pascal\'s triangle.',
    category: 'Math',
    xp: 120,
    locked: false,
    testCases: [{ input: '5', output: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]' }]
  },
  {
    title: 'ZigZag String Conversion',
    difficulty: 'Medium',
    description: 'Convert a string to a ZigZag pattern on K rows.',
    category: 'Strings',
    xp: 190,
    locked: false,
    testCases: [{ input: '"PAYPALISHIRING", 3', output: '"PAHNAPLSIIGYIR"' }]
  },
  {
    title: 'Armstrong Number Check',
    difficulty: 'Easy',
    description: 'Check if a number is equal to sum of cubes of its digits (e.g., 153).',
    category: 'Math',
    xp: 60,
    locked: false,
    testCases: [{ input: '153', output: 'true' }]
  },
  {
    title: 'Find Duplicates in Array',
    difficulty: 'Easy',
    description: 'Find all duplicate elements in an array of N integers where each element is in [0, N-1].',
    category: 'Arrays',
    xp: 100,
    locked: false,
    testCases: [{ input: '[4,3,2,7,8,2,3,1]', output: '[2,3]' }]
  },
  {
    title: 'Roman to Integer',
    difficulty: 'Easy',
    description: 'Convert a Roman numeral string (e.g., "XIV") to an integer.',
    category: 'Math',
    xp: 110,
    locked: false,
    testCases: [{ input: '"MCMXCIV"', output: '1994' }]
  },
  {
    title: 'Next Greater Element',
    difficulty: 'Medium',
    description: 'For each element in array, find the next larger element to its right.',
    category: 'Zoho Elite',
    xp: 230,
    locked: false,
    testCases: [{ input: '[4,5,2,25]', output: '[5,25,25,-1]' }]
  },
  {
    title: 'Subarray with Given Sum',
    difficulty: 'Medium',
    description: 'Find a continuous subarray that sums to a specific value S.',
    category: 'Two Pointers',
    xp: 160,
    locked: false,
    testCases: [{ input: '[1,4,20,3,10,5], 33', output: '[20,3,10]' }]
  },
  {
    title: 'Stock Buy Sell (Single)',
    difficulty: 'Easy',
    description: 'Find the maximum profit you can achieve by buying and selling a stock once.',
    category: 'Arrays',
    xp: 130,
    locked: false,
    testCases: [{ input: '[7,1,5,3,6,4]', output: '5' }]
  },
  {
    title: 'Letter Combinations',
    difficulty: 'Medium',
    description: 'Generate all possible letter combinations from a phone keypad numeric string.',
    category: 'Recursion',
    xp: 250,
    locked: false,
    testCases: [{ input: '"23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' }]
  },
  {
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    description: 'Calculate how much water can be trapped between blocks after raining.',
    category: 'Two Pointers',
    xp: 450,
    locked: false,
    testCases: [{ input: '[0,1,0,2,1,0,1,3,2,1,2,1]', output: '6' }]
  },
  {
    title: 'Find Majority Element',
    difficulty: 'Easy',
    description: 'Find the element that appears more than N/2 times in an array.',
    category: 'Arrays',
    xp: 110,
    locked: false,
    testCases: [{ input: '[3,2,3]', output: '3' }]
  },
  {
    title: 'LRU Cache Logic',
    difficulty: 'Hard',
    description: 'Design a data structure that follows the Least Recently Used (LRU) eviction policy.',
    category: 'Zoho Elite',
    xp: 500,
    locked: false,
    testCases: [{ input: 'get(1), put(1,1)', output: '1' }]
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
