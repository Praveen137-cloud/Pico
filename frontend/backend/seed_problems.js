const mongoose = require('mongoose');

const zohoProblems = [
  {
    title: 'Spiral Matrix Traversal',
    difficulty: 'Medium',
    desc: 'Given an M x N matrix, return all elements of the matrix in spiral order.',
    tag: 'Arrays',
    hints: ['Handle columns, rows, then remaining layers.', 'Use 4 boundary pointers.'],
    testCases: [{ args: ['[[1,2,3],[4,5,6],[7,8,9]]'], expectedOutput: '[1,2,3,6,9,8,7,4,5]' }],
    templates: {
      python: { starterCode: 'def solve(matrix):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'String Decompression',
    difficulty: 'Easy',
    desc: 'Convert "a3b2c1" to "aaabbc". Handle multi-digit numbers like "a10".',
    tag: 'Strings',
    hints: ['Iterate through chars.', 'If digit, repeat previous char.'],
    testCases: [{ args: ['"a3b2"'], expectedOutput: '"aaabb"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Sort by Frequency',
    difficulty: 'Medium',
    desc: 'Sort an array based on element frequency. If frequencies match, sort by value.',
    tag: 'Sorting',
    hints: ['Use a hash map for counts.', 'Custom comparator for sorting.'],
    testCases: [{ args: ['[2,3,2,4,5,12,2,3]'], expectedOutput: '[2,2,2,3,3,4,5,12]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Look and Say Sequence',
    difficulty: 'Medium',
    desc: 'Find the Nth term in: 1, 11, 21, 1211, 111221...',
    tag: 'Strings',
    hints: ['Start with "1".', 'Count consecutive chars to build next term.'],
    testCases: [{ args: ['4'], expectedOutput: '"1211"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Remove Unbalanced Parentheses',
    difficulty: 'Hard',
    desc: 'Remove minimum parentheses to make the string valid.',
    tag: 'Strings',
    hints: ['Use a stack for indices.', 'Remove unmatched opens/clones at end.'],
    testCases: [{ args: ['"(()()"'], expectedOutput: '"()()"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Snake Matrix Pattern',
    difficulty: 'Easy',
    desc: 'Print matrix in snake pattern (left-to-right, then right-to-left).',
    tag: 'Arrays',
    hints: ['Loop rows.', 'If row % 2 == 1, reverse column order.'],
    testCases: [{ args: ['[[1,2],[3,4]]'], expectedOutput: '[1,2,4,3]' }],
    templates: {
      python: { starterCode: 'def solve(matrix):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Anagram Check',
    difficulty: 'Easy',
    desc: 'Check if two strings are anagrams of each other.',
    tag: 'Strings',
    hints: ['Sort both strings.', 'Compare frequencies using map.'],
    testCases: [{ args: ['"listen", "silent"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s1, s2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Matrix Rotation (90°)',
    difficulty: 'Medium',
    desc: 'Rotate a square matrix 90 degrees clockwise in-place.',
    tag: 'Arrays',
    hints: ['Transpose then reverse rows.', 'Or rotate layer by layer.'],
    testCases: [{ args: ['[[1,2],[3,4]]'], expectedOutput: '[[3,1],[4,2]]' }],
    templates: {
      python: { starterCode: 'def solve(matrix):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Prime Factorization',
    difficulty: 'Easy',
    desc: 'Find all prime factors of a given number.',
    tag: 'Math',
    hints: ['Divide by 2 while possible.', 'Loop odd numbers from 3 to sqrt(N).'],
    testCases: [{ args: ['12'], expectedOutput: '[2,2,3]' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Equilibrium Point',
    difficulty: 'Easy',
    desc: 'Find the index where sum of elements to the left equals sum to the right.',
    tag: 'Arrays',
    hints: ['Calc total sum.', 'Track prefix sum as you iterate.'],
    testCases: [{ args: ['[1,3,5,2,2]'], expectedOutput: '2' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Number to Indian Words',
    difficulty: 'Medium',
    desc: 'Convert a number to its Indian currency word representation (Lakhs, Crores).',
    tag: 'Math',
    hints: ['Break segments into 2, 2, 3 digits.', 'Handle 0 and units correctly.'],
    testCases: [{ args: ['150000'], expectedOutput: '"One Lakh Fifty Thousand"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Kadane\'s Algorithm',
    difficulty: 'Medium',
    desc: 'Find the contiguous subarray with the largest sum.',
    tag: 'Arrays',
    hints: ['Track max_so_far.', 'Reset current_sum to 0 if negative.'],
    testCases: [{ args: ['[-2,1,-3,4,-1,2,1,-5,4]'], expectedOutput: '6' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Sudoku Solver Basic',
    difficulty: 'Hard',
    desc: 'Fill a 9x9 grid so that every row, column, and 3x3 box has 1-9.',
    tag: 'Recursion',
    hints: ['Classic backtracking.', 'Check row/col/grid constraints.'],
    testCases: [{ args: ['grid'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(grid):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Longest Common Prefix',
    difficulty: 'Easy',
    desc: 'Find the longest common prefix among an array of strings.',
    tag: 'Strings',
    hints: ['Compare 1st word with others index by index.', 'Update prefix as you go.'],
    testCases: [{ args: ['["apple", "app", "april"]'], expectedOutput: '"ap"' }],
    templates: {
      python: { starterCode: 'def solve(strs):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Binary to Decimal',
    difficulty: 'Easy',
    desc: 'Convert a binary string to its decimal integer value.',
    tag: 'Math',
    hints: ['Iterate bits right-to-left.', 'Sum powers of 2.'],
    testCases: [{ args: ['"1101"'], expectedOutput: '13' }],
    templates: {
      python: { starterCode: 'def solve(binary_str):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Missing Number',
    difficulty: 'Easy',
    desc: 'In an array of 1 to N, one number is missing. Find it.',
    tag: 'Arrays',
    hints: ['Expected sum N*(N+1)/2.', 'Diff between expected and actual.'],
    testCases: [{ args: ['[1,2,4,5]'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Reverse Words in Sentence',
    difficulty: 'Medium',
    desc: 'Reverse the order of words in a sentence without using built-in split.',
    tag: 'Strings',
    hints: ['Reverse whole string.', 'Then reverse individual words.'],
    testCases: [{ args: ['"Pico is fun"'], expectedOutput: '"fun is Pico"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'First Non-Repeating Char',
    difficulty: 'Easy',
    desc: 'Find the first character in a string that does not repeat.',
    tag: 'Strings',
    hints: ['Use char frequency map.', 'One pass for count, another for search.'],
    testCases: [{ args: ['"swiss"'], expectedOutput: '"w"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Check for Power of 2',
    difficulty: 'Easy',
    desc: 'Determine if a number is a power of 2 using bitwise operators.',
    tag: 'Math',
    hints: ['n & (n-1) == 0.', 'Handle zero case.'],
    testCases: [{ args: ['16'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Tower of Hanoi',
    difficulty: 'Hard',
    desc: 'Move N disks from source till destination using an auxiliary rod.',
    tag: 'Recursion',
    hints: ['Solve for N-1 first.', 'Base case N=1.'],
    testCases: [{ args: ['3'], expectedOutput: '7' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    desc: 'Find the maximum of each window of size K as it slides across the array.',
    tag: 'Two Pointers',
    hints: ['Deque for monotonic queue.', 'Prune indices outside window.'],
    testCases: [{ args: ['[1,3,-1,-3,5], 3'], expectedOutput: '[3,3,5]' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'GCD and LCM',
    difficulty: 'Easy',
    desc: 'Calculate the Greatest Common Divisor and Least Common Multiple of two numbers.',
    tag: 'Math',
    hints: ['Euclidean Algorithm.', 'LCM = (a*b)/GCD.'],
    testCases: [{ args: ['12, 18'], expectedOutput: '6, 36' }],
    templates: {
      python: { starterCode: 'def solve(a, b):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Merge Sorted Arrays',
    difficulty: 'Easy',
    desc: 'Merge two sorted arrays into a single sorted array without extra space.',
    tag: 'Two Pointers',
    hints: ['Iterate from ends.', 'Compare and fill back-to-front.'],
    testCases: [{ args: ['[1,3,5], [2,4]'], expectedOutput: '[1,2,3,4,5]' }],
    templates: {
      python: { starterCode: 'def solve(arr1, arr2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Check Palindrome Number',
    difficulty: 'Easy',
    desc: 'Determine if an integer is a palindrome without converting to string.',
    tag: 'Math',
    hints: ['Reverse the integer logic.', 'Compare original with reverse.'],
    testCases: [{ args: ['121'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Search in Sorted Matrix',
    difficulty: 'Medium',
    desc: 'Efficiently search for a value in a row-wise and column-wise sorted matrix.',
    tag: 'Arrays',
    hints: ['Binary search or top-right pointer approach.', 'O(M+N).'],
    testCases: [{ args: ['[[1,4,7],[2,5,8]], 5'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(matrix, target):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'N-Queens Problem',
    difficulty: 'Hard',
    desc: 'Place N queens on an NxN chessboard such that no two queens attack each other.',
    tag: 'Recursion',
    hints: ['Backtracking.', 'Conflict check logic.'],
    testCases: [{ args: ['4'], expectedOutput: '2' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    desc: 'Given a string of brackets, check if they are balanced correctly.',
    tag: 'Zoho Elite',
    hints: ['Use match map.', 'Stack for opening brackets.'],
    testCases: [{ args: ['"[{()}]"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Unique Paths in Grid',
    difficulty: 'Medium',
    desc: 'Find the number of ways to reach bottom-right from top-left in an MxN grid.',
    tag: 'Recursion',
    hints: ['DP approach.', 'Combinations NthRow.'],
    testCases: [{ args: ['3, 3'], expectedOutput: '6' }],
    templates: {
      python: { starterCode: 'def solve(m, n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Pascal\'s Triangle',
    difficulty: 'Easy',
    desc: 'Generate the first N rows of Pascal\'s triangle.',
    tag: 'Math',
    hints: ['Combine rows using prev row.', 'Base case N=1.'],
    testCases: [{ args: ['5'], expectedOutput: '[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'ZigZag String Conversion',
    difficulty: 'Medium',
    desc: 'Convert a string to a ZigZag pattern on K rows.',
    tag: 'Strings',
    hints: ['Array of rows.', 'Direction toggle flag.'],
    testCases: [{ args: ['"PAYPALISHIRING", 3'], expectedOutput: '"PAHNAPLSIIGYIR"' }],
    templates: {
      python: { starterCode: 'def solve(s, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Armstrong Number Check',
    difficulty: 'Easy',
    desc: 'Check if a number is equal to sum of cubes of its digits (e.g., 153).',
    tag: 'Math',
    hints: ['Extract digits.', 'Raise to power of num_digits.'],
    testCases: [{ args: ['153'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Duplicates in Array',
    difficulty: 'Easy',
    desc: 'Find all duplicate elements in an array of N integers where each element is in [0, N-1].',
    tag: 'Arrays',
    hints: ['Flag visited by negating value at index.', 'Indices match values range.'],
    testCases: [{ args: ['[4,3,2,7,8,2,3,1]'], expectedOutput: '[2,3]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Roman to Integer',
    difficulty: 'Easy',
    desc: 'Convert a Roman numeral string (e.g., "XIV") to an integer.',
    tag: 'Math',
    hints: ['Subtraction logic if current < next.', 'Map chars to values.'],
    testCases: [{ args: ['"MCMXCIV"'], expectedOutput: '1994' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Next Greater Element',
    difficulty: 'Medium',
    desc: 'For each element in array, find the next larger element to its right.',
    tag: 'Zoho Elite',
    hints: ['Monotonic stack.', 'Traverse right-to-left.'],
    testCases: [{ args: ['[4,5,2,25]'], expectedOutput: '[5,25,25,-1]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Subarray with Given Sum',
    difficulty: 'Medium',
    desc: 'Find a continuous subarray that sums to a specific value S.',
    tag: 'Two Pointers',
    hints: ['Sliding window.', 'Prefix sums if negative numbers.'],
    testCases: [{ args: ['[1,4,20,3,10,5], 33'], expectedOutput: '[20,3,10]' }],
    templates: {
      python: { starterCode: 'def solve(arr, target):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Stock Buy Sell (Single)',
    difficulty: 'Easy',
    desc: 'Find the maximum profit you can achieve by buying and selling a stock once.',
    tag: 'Arrays',
    hints: ['Track min_price observed.', 'Calc profit at each step.'],
    testCases: [{ args: ['[7,1,5,3,6,4]'], expectedOutput: '5' }],
    templates: {
      python: { starterCode: 'def solve(prices):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Letter Combinations',
    difficulty: 'Medium',
    desc: 'Generate all possible letter combinations from a phone keypad numeric string.',
    tag: 'Recursion',
    hints: ['DFS / BFS.', 'Map digits to chars.'],
    testCases: [{ args: ['"23"'], expectedOutput: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' }],
    templates: {
      python: { starterCode: 'def solve(digits):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Trapping Rain Water',
    difficulty: 'Hard',
    desc: 'Calculate how much water can be trapped between blocks after raining.',
    tag: 'Two Pointers',
    hints: ['Left/Right max arrays.', 'Two pointer space solution.'],
    testCases: [{ args: ['[0,1,0,2,1,0,1,3,2,1,2,1]'], expectedOutput: '6' }],
    templates: {
      python: { starterCode: 'def solve(heights):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Majority Element',
    difficulty: 'Easy',
    desc: 'Find the element that appears more than N/2 times in an array.',
    tag: 'Arrays',
    hints: ['Boyer-Moore Voting.', 'Hash map count.'],
    testCases: [{ args: ['[3,2,3]'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'LRU Cache Logic',
    difficulty: 'Hard',
    desc: 'Design a data structure that follows the Least Recently Used (LRU) eviction policy.',
    tag: 'Zoho Elite',
    hints: ['Doubly linked list.', 'Hash map for O(1).'],
    testCases: [{ args: ['get(1), put(1,1)'], expectedOutput: '1' }],
    templates: {
      python: { starterCode: 'class LRUCache:\n    def __init__(self, capacity):\n        pass\n    def get(self, key):\n        pass\n    def put(self, key, value):\n        pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class LRUCache {\n    public LRUCache(int capacity) {}\n    public int get(int key) { return -1; }\n    public void put(int key, int value) {}\n}', driverCode: '' }
    }
  }
];

module.exports = zohoProblems;
