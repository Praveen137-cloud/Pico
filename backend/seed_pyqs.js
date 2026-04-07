const mongoose = require('mongoose');
const Problem = require('./models/Problem');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

const pyqProblems = [
  {
    title: 'Base 7 Conversion',
    difficulty: 'Easy',
    desc: 'Given a decimal integer, return its representation in Base 7 as a string.',
    tag: 'Zoho PYQ',
    hints: ['Repeatedly divide by 7.', 'Collect remainders in reverse order.'],
    testCases: [{ args: ['100'], expectedOutput: '"202"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Sort by Set Bits Count',
    difficulty: 'Medium',
    desc: 'Sort an array of integers based on the number of set bits (1s) in their binary representation. In case of a tie, maintain the original order.',
    tag: 'Zoho PYQ',
    hints: ['Count bits using bitwise (n & (n-1)).', 'Use stable sort with a custom comparator.'],
    testCases: [{ args: ['[3, 5, 7, 8]'], expectedOutput: '[8, 3, 5, 7]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Check String Rotation',
    difficulty: 'Easy',
    desc: 'Check if string S2 is a rotation of string S1 (e.g., "ABCD" and "CDAB" are rotations).',
    tag: 'Zoho PYQ',
    hints: ['Check if lengths are equal.', 'Search S2 inside (S1 + S1).'],
    testCases: [{ args: ['"ABCD", "CDAB"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s1, s2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Wave Array Arrangement',
    difficulty: 'Medium',
    desc: 'Rearrange an array such that a[0] >= a[1] <= a[2] >= a[3]...',
    tag: 'Zoho PYQ',
    hints: ['Iterate and swap adjacent elements if condition fails.', 'O(N) approach is possible.'],
    testCases: [{ args: ['[1, 2, 3, 4]'], expectedOutput: '[2, 1, 4, 3]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Maximum Product Subarray',
    difficulty: 'Medium',
    desc: 'Find the contiguous subarray within an array (containing at least one number) which has the largest product.',
    tag: 'Zoho PYQ',
    hints: ['Track both max and min product so far (for negative numbers).', 'Reset based on current element.'],
    testCases: [{ args: ['[2, 3, -2, 4]'], expectedOutput: '6' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Balanced Bracket String',
    difficulty: 'Easy',
    desc: 'Find the count of maximum number of balanced strings you can split from S (e.g., "RLRRLLRL" -> 4: "RL", "RRLL", "RL", "RL").',
    tag: 'Zoho PYQ',
    hints: ['Use a counter for L and R.', 'When count becomes 0, one balanced string found.'],
    testCases: [{ args: ['"RLRRLLRL"'], expectedOutput: '4' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Product of Array Except Self',
    difficulty: 'Medium',
    desc: 'Return an array where output[i] is the product of all elements of arr except arr[i]. O(n) without using division.',
    tag: 'Zoho PYQ',
    hints: ['Use left product and right product arrays.', 'Store result in one pass to optimize space.'],
    testCases: [{ args: ['[1,2,3,4]'], expectedOutput: '[24,12,8,6]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Rotate Array K Steps',
    difficulty: 'Easy',
    desc: 'Rotate an array to the right by K steps. (e.g., [1,2,3,4,5], K=2 -> [4,5,1,2,3])',
    tag: 'Zoho PYQ',
    hints: ['Reverse entire array.', 'Reverse 0 to K-1, then reverse K to end.'],
    testCases: [{ args: ['[1,2,3,4,5], 2'], expectedOutput: '[4,5,1,2,3]' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Majority Element (Boyer-Moore)',
    difficulty: 'Easy',
    desc: 'Find the element that appears more than N/2 times. Implement Boyer-Moore Voting algorithm.',
    tag: 'Zoho PYQ',
    hints: ['Initialize candidate and count.', 'Traverse and vote.'],
    testCases: [{ args: ['[2, 2, 1, 1, 1, 2, 2]'], expectedOutput: '2' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Intersection of Two Arrays',
    difficulty: 'Easy',
    desc: 'Find the intersection of two arrays. Return unique elements.',
    tag: 'Zoho PYQ',
    hints: ['Use a hash set for one array.', 'Iterate the second array and check membership.'],
    testCases: [{ args: ['[1, 2, 2, 1], [2, 2]'], expectedOutput: '[2]' }],
    templates: {
      python: { starterCode: 'def solve(arr1, arr2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Update existing high-frequency problems with the new tag
    const eliteTitles = [
      'Spiral Matrix Traversal', 
      'String Decompression', 
      'Look and Say Sequence', 
      'Remove Unbalanced Parentheses',
      'Number to Indian Words',
      'Kadane\'s Algorithm',
      'Matrix Rotation (90°)',
      'Valid Parentheses',
      'Next Greater Element',
      'LRU Cache Logic'
    ];

    await Problem.updateMany(
      { title: { $in: eliteTitles } },
      { $set: { tag: 'Zoho PYQ' } }
    );
    console.log('Updated existing elite problems with "Zoho PYQ" tag');

    // Insert new PYQs
    for (const p of pyqProblems) {
      await Problem.findOneAndUpdate({ title: p.title }, p, { upsert: true });
    }
    console.log('Seeded new 2024-2025 PYQ problems');

    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
