const mongoose = require('mongoose');
const Problem = require('./models/Problem');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

const problems = [
  // --- ARRAYS (30) ---
  {
    title: 'Find Second Smallest',
    difficulty: 'Easy',
    desc: 'Given an array of integers, find the second smallest element. If no second smallest exists, return -1.',
    tag: 'Zoho PYQ',
    hints: ['Similar to second largest, track two variables.', 'Initialize with INT_MAX.'],
    testCases: [{ args: ['[12, 13, 1, 10, 34, 1]'], expectedOutput: '10' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Segregate Even and Odd',
    difficulty: 'Easy',
    desc: 'Move all even numbers to the front and all odd numbers to the back of the array.',
    tag: 'Zoho PYQ',
    hints: ['Use two pointers (left and right).', 'Swap when left is odd and right is even.'],
    testCases: [{ args: ['[1, 2, 3, 4, 5, 6]'], expectedOutput: '[2, 4, 6, 1, 3, 5]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Maximum Sum Subarray with K elements',
    difficulty: 'Easy',
    desc: 'Find the maximum sum of a contiguous subarray of size K.',
    tag: 'Zoho PYQ',
    hints: ['Use sliding window technique.', 'Initial sum of K elements, then slide.'],
    testCases: [{ args: ['[1, 4, 2, 10, 2, 3, 1, 0, 20], 4'], expectedOutput: '24' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Duplicate Elements in Array',
    difficulty: 'Easy',
    desc: 'Find all duplicate elements in an array. Return them in sorted order.',
    tag: 'Zoho PYQ',
    hints: ['Use a hash set or frequency array.', 'Sort the results at the end.'],
    testCases: [{ args: ['[4, 3, 2, 7, 8, 2, 3, 1]'], expectedOutput: '[2, 3]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Product of Triplets',
    difficulty: 'Medium',
    desc: 'Find the maximum product of any three integers in the array.',
    tag: 'Zoho PYQ',
    hints: ['Sort the array.', 'Max product could be (last 3) or (last 1 * first 2).'],
    testCases: [{ args: ['[-10, -10, 5, 2]'], expectedOutput: '500' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Peak Element',
    difficulty: 'Medium',
    desc: 'Find a peak element (an element greater than its neighbors). There could be multiple peaks; return any one.',
    tag: 'Zoho PYQ',
    hints: ['Linear scan works, but binary search is O(log N).', 'Check if middle element is part of an increasing or decreasing slope.'],
    testCases: [{ args: ['[1, 2, 3, 1]'], expectedOutput: '2' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Majority Element (>N/3)',
    difficulty: 'Medium',
    desc: 'Find all elements that appear more than floor(N/3) times. There can be at most two such elements.',
    tag: 'Zoho PYQ',
    hints: ['Extended Boyer-Moore Voting Algorithm.', 'Track two candidates and two counts.'],
    testCases: [{ args: ['[1, 1, 1, 3, 3, 2, 2, 2]'], expectedOutput: '[1, 2]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Subarray with Sum 0',
    difficulty: 'Medium',
    desc: 'Check if there is a subarray with sum equal to zero.',
    tag: 'Zoho PYQ',
    hints: ['Use prefix sum and hashing.', 'If prefix sum repeats, there is a zero-sum subarray.'],
    testCases: [{ args: ['[4, 2, -3, 1, 6]'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Triplet Sum Close to Target',
    difficulty: 'Medium',
    desc: 'Find three integers in an array such that their sum is closest to a given target. Return the sum.',
    tag: 'Zoho PYQ',
    hints: ['Sort the array.', 'Fix one element and use two pointers for the rest.'],
    testCases: [{ args: ['[-1, 2, 1, -4], 1'], expectedOutput: '2' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'First Missing Positive',
    difficulty: 'Hard',
    desc: 'Find the smallest positive integer that is not present in an unsorted array. Must run in O(n) time and O(1) space.',
    tag: 'Zoho PYQ',
    hints: ['Place each element at its correct index (i.e., arr[i] should be i+1).', 'Scan for the first index where arr[i] != i+1.'],
    testCases: [{ args: ['[3, 4, -1, 1]'], expectedOutput: '2' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    desc: 'Given an array and a window size K, return the maximum element in each window as it slides.',
    tag: 'Zoho PYQ',
    hints: ['Use a Deque (Double-ended queue) to store indices.', 'Maintain elements in decreasing order in deque.'],
    testCases: [{ args: ['[1, 3, -1, -3, 5, 3, 6, 7], 3'], expectedOutput: '[3, 3, 5, 5, 6, 7]' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Rainwater Trapping',
    difficulty: 'Hard',
    desc: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    tag: 'Zoho PYQ',
    hints: ['Use two pointers or precompute left and right max heights.', 'Water at index i = min(max_left[i], max_right[i]) - height[i].'],
    testCases: [{ args: ['[0,1,0,2,1,0,1,3,2,1,2,1]'], expectedOutput: '6' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'K Largest Elements',
    difficulty: 'Easy',
    desc: 'Find the K largest elements in an array. Return them in descending order.',
    tag: 'Zoho PYQ',
    hints: ['Sort the array in descending order or use a Min-Heap.', 'Keep heap size K.'],
    testCases: [{ args: ['[1, 23, 12, 9, 30, 2, 50], 3'], expectedOutput: '[50, 30, 23]' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Pairs with Given Difference',
    difficulty: 'Easy',
    desc: 'Find all pairs in an array such that their absolute difference is equal to K.',
    tag: 'Zoho PYQ',
    hints: ['Use a hash set to store elements.', 'For each x, check if x+K or x-K exists.'],
    testCases: [{ args: ['[1, 5, 3, 4, 2], 3'], expectedOutput: '[(1, 4), (2, 5)]' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Two Sum Problem',
    difficulty: 'Easy',
    desc: 'Find two numbers in an array that add up to a target sum. Return their indices.',
    tag: 'Zoho PYQ',
    hints: ['Use a hash map to store seen values.', 'Target - current = complement.'],
    testCases: [{ args: ['[2, 7, 11, 15], 9'], expectedOutput: '[0, 1]' }],
    templates: {
      python: { starterCode: 'def solve(nums, target):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int[] twoSum(int[] nums, int target) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  // --- STRINGS (30) ---
  {
    title: 'Reverse String Words',
    difficulty: 'Easy',
    desc: 'Given a string S, reverse the words in it without changing their internal character order. (e.g. "I love coding" -> "coding love I").',
    tag: 'Zoho PYQ',
    hints: ['Split the string by spaces.', 'Reverse the array of words and join back.'],
    testCases: [{ args: ['"i love programming"'], expectedOutput: '"programming love i"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Check Anagrams',
    difficulty: 'Easy',
    desc: 'Check if two strings are anagrams of each other. Anagrams have the same characters in different orders.',
    tag: 'Zoho PYQ',
    hints: ['Use frequency array of size 256 or 26.', 'Sort both strings and compare.'],
    testCases: [{ args: ['"listen", "silent"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s1, s2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'First Non-Repeating Character',
    difficulty: 'Easy',
    desc: 'Find the first character in a string that does not repeat.',
    tag: 'Zoho PYQ',
    hints: ['Count frequency of each character.', 'Iterate the string again and return the first char with count 1.'],
    testCases: [{ args: ['"zxvczbt"'], expectedOutput: '"x"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'String Compression (Run Length)',
    difficulty: 'Easy',
    desc: 'Compress a string using Run Length Encoding (e.g., "aaabb" -> "a3b2"). If compressed string is not shorter, return original.',
    tag: 'Zoho PYQ',
    hints: ['Iterate and count consecutive occurrences.', 'Append char and count to result builder.'],
    testCases: [{ args: ['"aaabbccc"'], expectedOutput: '"a2b2c3"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Remove Duplicates from String',
    difficulty: 'Easy',
    desc: 'Remove all duplicate characters from a string, keeping only the first occurrence.',
    tag: 'Zoho PYQ',
    hints: ['Use a hash set to track seen characters.', 'Iterate and append to result if not in set.'],
    testCases: [{ args: ['"geeksforgeeks"'], expectedOutput: '"geksfor"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Longest Palindrome in String',
    difficulty: 'Medium',
    desc: 'Find the longest palindromic substring within a given string.',
    tag: 'Zoho PYQ',
    hints: ['Expand around center for each index.', 'DP approach is also O(N^2) but uses O(N^2) space.'],
    testCases: [{ args: ['"babad"'], expectedOutput: '"bab" or "aba"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'String to Integer (atoi)',
    difficulty: 'Medium',
    desc: 'Implement a function that converts a string to a 32-bit signed integer. Handle white spaces, signs, and overflow.',
    tag: 'Zoho PYQ',
    hints: ['Skip leading spaces.', 'Check for + or - sign.', 'Iterate through digits and check for overflow.'],
    testCases: [{ args: ['"   -42"'], expectedOutput: '-42' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Longest Substring Without Repeating Char',
    difficulty: 'Medium',
    desc: 'Find the length of the longest substring without repeating characters.',
    tag: 'Zoho PYQ',
    hints: ['Use sliding window with two pointers.', 'Store character indices in a map to jump left pointer.'],
    testCases: [{ args: ['"abcabcbb"'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Roman to Integer',
    difficulty: 'Easy',
    desc: 'Convert a Roman numeral string (e.g. "XIV") to an integer.',
    tag: 'Zoho PYQ',
    hints: ['Map Roman chars to values.', 'If value[i] < value[i+1], subtract; otherwise, add.'],
    testCases: [{ args: ['"LVIII"'], expectedOutput: '58' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Z-Algorithm String Matching',
    difficulty: 'Hard',
    desc: 'Find all occurrences of a pattern P in text T using Z-algorithm.',
    tag: 'Zoho PYQ',
    hints: ['Create string S = P + "$" + T.', 'Compute Z-array where Z[i] is length of longest prefix match starting at i.'],
    testCases: [{ args: ['"ABC", "ABCXABC"'], expectedOutput: '[0, 4]' }],
    templates: {
      python: { starterCode: 'def solve(pattern, text):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Shortest Palindrome after insertions at front',
    difficulty: 'Hard',
    desc: 'Given a string, find the minimum characters to add at the front to make it a palindrome.',
    tag: 'Zoho PYQ',
    hints: ['Reverse original string S as Rev.', 'Use KMP prefix function on S + "#" + Rev.'],
    testCases: [{ args: ['"aacecaaa"'], expectedOutput: '"a"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Count and Say String',
    difficulty: 'Medium',
    desc: 'The count-and-say sequence is "1", "11", "21", "1211", ... Given n, return the n-th term.',
    tag: 'Zoho PYQ',
    hints: ['Generate each term from the previous one.', 'Read consecutive digits and their counts.'],
    testCases: [{ args: ['4'], expectedOutput: '"1211"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  // --- MATH & NUMBER THEORY (30) ---
  {
    title: 'Check Prime Number',
    difficulty: 'Easy',
    desc: 'Check if a given number N is prime.',
    tag: 'Zoho PYQ',
    hints: ['Check divisibility from 2 to sqrt(N).', 'Handle cases for 1 and negative numbers.'],
    testCases: [{ args: ['17'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Fibonacci Series Iterative',
    difficulty: 'Easy',
    desc: 'Return the N-th Fibonacci number. Implement it iteratively.',
    tag: 'Zoho PYQ',
    hints: ['Use two variables (a, b) and update in a loop.', 'Handle N=0 and N=1 cases.'],
    testCases: [{ args: ['10'], expectedOutput: '55' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Greatest Common Divisor (GCD)',
    difficulty: 'Easy',
    desc: 'Find the GCD of two numbers using Euclidean algorithm.',
    tag: 'Zoho PYQ',
    hints: ['Recursively compute gcd(b, a % b) until b is zero.', 'Iterative approach uses a while loop.'],
    testCases: [{ args: ['48, 18'], expectedOutput: '6' }],
    templates: {
      python: { starterCode: 'def solve(a, b):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Least Common Multiple (LCM)',
    difficulty: 'Easy',
    desc: 'Find the LCM of two numbers.',
    tag: 'Zoho PYQ',
    hints: ['LCM(a, b) = (a * b) / GCD(a, b).', 'Ensure multiplication does not overflow.'],
    testCases: [{ args: ['12, 18'], expectedOutput: '36' }],
    templates: {
      python: { starterCode: 'def solve(a, b):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Sieve of Eratosthenes',
    difficulty: 'Medium',
    desc: 'Find all prime numbers up to N.',
    tag: 'Zoho PYQ',
    hints: ['Use a boolean array of size N+1.', 'Mark multiples of each prime starting from 2.'],
    testCases: [{ args: ['30'], expectedOutput: '[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Palindrome Number',
    difficulty: 'Easy',
    desc: 'Check if an integer is a palindrome without converting to string.',
    tag: 'Zoho PYQ',
    hints: ['Reverse the number digit-by-digit.', 'Compare reversed number with original.'],
    testCases: [{ args: ['121'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Armstrong Number Check',
    difficulty: 'Easy',
    desc: 'Check if a number is an Armstrong number (sum of digits raised to the power of number of digits is equal to the original number).',
    tag: 'Zoho PYQ',
    hints: ['Find number of digits first.', 'Extract digits and calculate sum of powers.'],
    testCases: [{ args: ['153'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Factorial of Large Numbers',
    difficulty: 'Medium',
    desc: 'Find the factorial of a large number N where N can be up to 1000.',
    tag: 'Zoho PYQ',
    hints: ['Use an array to store digits of the result.', 'Multiply array by current number and handle carry.'],
    testCases: [{ args: ['10'], expectedOutput: '"3628800"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Power Function (pow(x, n))',
    difficulty: 'Medium',
    desc: 'Implement x raised to the power n iteratively or recursively in O(log n).',
    tag: 'Zoho PYQ',
    hints: ['Use Binary Exponentiation.', 'Divide and conquer (even n: pow(x, n/2)^2, odd n: x * pow(x, n/2)^2).'],
    testCases: [{ args: ['2.0, 10'], expectedOutput: '1024.0' }],
    templates: {
      python: { starterCode: 'def solve(x, n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Trailing Zeroes in Factorial',
    difficulty: 'Easy',
    desc: 'Find the number of trailing zeroes in the factorial of a given number N.',
    tag: 'Zoho PYQ',
    hints: ['Count pairs of 2s and 5s in prime factorization.', 'Count factors of 5 by dividing N by powers of 5.'],
    testCases: [{ args: ['25'], expectedOutput: '6' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Convert Decimal to Binary',
    difficulty: 'Easy',
    desc: 'Given a decimal integer, return its binary representation as a string.',
    tag: 'Zoho PYQ',
    hints: ['Continuously divide by 2 and collect remainders.', 'Return remainders in reverse order.'],
    testCases: [{ args: ['10'], expectedOutput: '"1010"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Binary to Hexadecimal',
    difficulty: 'Medium',
    desc: 'Convert a binary string to its hexadecimal equivalent.',
    tag: 'Zoho PYQ',
    hints: ['Group binary bits in sets of 4 from right to left.', 'Convert each group to hexadecimal digit.'],
    testCases: [{ args: ['"111010"'], expectedOutput: '"3A"' }],
    templates: {
      python: { starterCode: 'def solve(binary_str):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Excel Column Title',
    difficulty: 'Medium',
    desc: 'Given a column number, return its corresponding title as appearing in Excel (1 -> A, 2 -> B, 26 -> Z, 27 -> AA, ...).',
    tag: 'Zoho PYQ',
    hints: ['This is base 26 conversion.', 'Subtract 1, find remainder modulo 26, convert to character.'],
    testCases: [{ args: ['701'], expectedOutput: '"ZY"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Excel Column Number',
    difficulty: 'Easy',
    desc: 'Given a column title as appearing in Excel, return its corresponding column number (A -> 1, AA -> 27, ...).',
    tag: 'Zoho PYQ',
    hints: ['Base 26 conversion in reverse.', 'Iterate string and update result = result * 26 + (char - "A" + 1).'],
    testCases: [{ args: ['"ZY"'], expectedOutput: '701' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Reverse Bits',
    difficulty: 'Medium',
    desc: 'Reverse bits of a given 32 bits unsigned integer.',
    tag: 'Zoho PYQ',
    hints: ['Iterate through 32 bits.', 'Shift input bit by bit and build the result.'],
    testCases: [{ args: ['43261596'], expectedOutput: '964176192' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Number of 1 Bits (Hamming Weight)',
    difficulty: 'Easy',
    desc: 'Find the number of set bits (1s) in an integer representation.',
    tag: 'Zoho PYQ',
    hints: ['Use bitwise AND (n & (n-1)) to clear the lowest set bit.', 'Repeat until n becomes zero.'],
    testCases: [{ args: ['11'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  // --- MATRIX OPERATIONS (20) ---
  {
    title: 'Spiral Matrix II',
    difficulty: 'Medium',
    desc: 'Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.',
    tag: 'Zoho PYQ',
    hints: ['Maintain boundary pointers (top, bottom, left, right).', 'Fill sides in order and shrink bounds.'],
    testCases: [{ args: ['3'], expectedOutput: '[[1,2,3],[8,9,4],[7,6,5]]' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Rotate Matrix by 90 Degrees',
    difficulty: 'Medium',
    desc: 'Rotate an NxN matrix by 90 degrees clockwise in-place.',
    tag: 'Zoho PYQ',
    hints: ['First transpose the matrix (swap mat[i][j] with mat[j][i]).', 'Then reverse each row.'],
    testCases: [{ args: ['[[1,2],[3,4]]'], expectedOutput: '[[3,1],[4,2]]' }],
    templates: {
      python: { starterCode: 'def solve(mat):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Path in Grid with Obstacles',
    difficulty: 'Medium',
    desc: 'Find if there is a path from (0,0) to (n-1, n-1) in a grid where 0 is path and 1 is obstacle.',
    tag: 'Zoho PYQ',
    hints: ['Use Recursion with Memoization or DP.', 'Path can only go right or down.'],
    testCases: [{ args: ['[[0,0,0],[0,1,0],[0,0,0]]'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(grid):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Sum of Submatrices',
    difficulty: 'Medium',
    desc: 'Given a 2D matrix, answer queries regarding sum of elements in a submatrix defined by (r1, c1) and (r2, c2).',
    tag: 'Zoho PYQ',
    hints: ['Precompute 2D prefix sums.', 'Query sum = prefix[r2][c2] - prefix[r1-1][c2] - prefix[r2][c1-1] + prefix[r1-1][c1-1].'],
    testCases: [{ args: ['[[1,1,1],[1,1,1],[1,1,1]], 0, 0, 1, 1'], expectedOutput: '4' }],
    templates: {
      python: { starterCode: 'def solve(mat, r1, c1, r2, c2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Search in Row-Column Sorted Matrix',
    difficulty: 'Easy',
    desc: 'Search for a value in a matrix where rows are sorted left-to-right and columns are sorted top-to-bottom.',
    tag: 'Zoho PYQ',
    hints: ['Start at top-right or bottom-left corner.', 'If value is smaller, move left; if larger, move down.'],
    testCases: [{ args: ['[[1,4,7],[2,5,8],[3,6,9]], 5'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(mat, target):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  // --- SORTING & SEARCHING (20) ---
  {
    title: 'Bubble Sort Implementation',
    difficulty: 'Easy',
    desc: 'Implement Bubble Sort to sort an array in ascending order.',
    tag: 'Zoho PYQ',
    hints: ['Repeatedly swap adjacent elements if they are in wrong order.', 'Optimization: use a flag to check if any swap happened.'],
    testCases: [{ args: ['[64, 34, 25, 12, 22, 11, 90]'], expectedOutput: '[11, 12, 22, 25, 34, 64, 90]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Selection Sort Implementation',
    difficulty: 'Easy',
    desc: 'Implement Selection Sort to sort an array in ascending order.',
    tag: 'Zoho PYQ',
    hints: ['Find the minimum element in unsorted part and swap with first unsorted element.', 'Repeat for all elements.'],
    testCases: [{ args: ['[64, 25, 12, 22, 11]'], expectedOutput: '[11, 12, 22, 25, 64]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Insertion Sort Implementation',
    difficulty: 'Easy',
    desc: 'Implement Insertion Sort to sort an array in ascending order.',
    tag: 'Zoho PYQ',
    hints: ['Pick an element and insert it into its correct position in the sorted part.', 'Usually faster for small or nearly sorted arrays.'],
    testCases: [{ args: ['[12, 11, 13, 5, 6]'], expectedOutput: '[5, 6, 11, 12, 13]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Merge Sort Implementation',
    difficulty: 'Medium',
    desc: 'Implement Merge Sort (Divide and Conquer).',
    tag: 'Zoho PYQ',
    hints: ['Divide array into two halves.', 'Recursively sort halves and merge them.'],
    testCases: [{ args: ['[38, 27, 43, 3, 9, 82, 10]'], expectedOutput: '[3, 9, 10, 27, 38, 43, 82]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Quick Sort Implementation',
    difficulty: 'Medium',
    desc: 'Implement Quick Sort using Lomuto partition scheme.',
    tag: 'Zoho PYQ',
    hints: ['Pick a pivot element.', 'Partition array such that elements < pivot are on left and > pivot are on right.'],
    testCases: [{ args: ['[10, 7, 8, 9, 1, 5]'], expectedOutput: '[1, 5, 7, 8, 9, 10]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Binary Search Iterative',
    difficulty: 'Easy',
    desc: 'Implement Binary Search on a sorted array iteratively.',
    tag: 'Zoho PYQ',
    hints: ['Initialize low=0, high=n-1.', 'Loop while low <= high and check middle element.'],
    testCases: [{ args: ['[1, 2, 3, 4, 10, 40], 10'], expectedOutput: '4 (index)' }],
    templates: {
      python: { starterCode: 'def solve(arr, target):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Binary Search Recursive',
    difficulty: 'Easy',
    desc: 'Implement Binary Search on a sorted array recursively.',
    tag: 'Zoho PYQ',
    hints: ['Check base case: low > high.', 'Recursively call with updated bounds.'],
    testCases: [{ args: ['[1, 2, 3, 4, 10, 40], 10'], expectedOutput: '4 (index)' }],
    templates: {
      python: { starterCode: 'def solve(arr, low, high, target):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Medium',
    desc: 'Find the index of a target in a sorted array that has been rotated. O(log n) time.',
    tag: 'Zoho PYQ',
    hints: ['Modify binary search.', 'At least one half is always sorted.'],
    testCases: [{ args: ['[4, 5, 6, 7, 0, 1, 2], 0'], expectedOutput: '4' }],
    templates: {
      python: { starterCode: 'def solve(arr, target):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Minimum in Rotated Sorted Array',
    difficulty: 'Medium',
    desc: 'Find the minimum element in a sorted array that has been rotated.',
    tag: 'Zoho PYQ',
    hints: ['Compare middle with right boundary.', 'If mid > right, min is in right half; else in left half.'],
    testCases: [{ args: ['[3, 4, 5, 1, 2]'], expectedOutput: '1' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Search in a Infinite Sorted Array',
    difficulty: 'Medium',
    desc: 'Search for a target in an infinite sorted array.',
    tag: 'Zoho PYQ',
    hints: ['First find boundaries by doubling range (low, high).', 'Then perform binary search.'],
    testCases: [{ args: ['[1, 3, 5, 7, 9, ...], 7'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(arr, target):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  // --- STACKS & QUEUES (20) ---
  {
    title: 'Next Greater Element',
    difficulty: 'Medium',
    desc: 'For each element in an array, find the next greater element to its right.',
    tag: 'Zoho PYQ',
    hints: ['Use a monotonic stack.', 'Iterate from right to left or left to right.'],
    testCases: [{ args: ['[4, 5, 2, 25]'], expectedOutput: '[5, 25, 25, -1]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Balance Parentheses Check',
    difficulty: 'Easy',
    desc: 'Check if a string of parentheses is balanced (e.g., "(())" is balanced, "(()" is not).',
    tag: 'Zoho PYQ',
    hints: ['Use a stack. Push opening, pop on closing if matches.', 'String length must be even.'],
    testCases: [{ args: ['"{[()]}"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Implement Queue using Stacks',
    difficulty: 'Medium',
    desc: 'Implement a Queue using two Stacks.',
    tag: 'Zoho PYQ',
    hints: ['EnQueue: Push to stack1.', 'DeQueue: If stack2 is empty, pop all from stack1 and push to stack2. Then pop from stack2.'],
    testCases: [{ args: ['[enqueue(1), enqueue(2), dequeue()]'], expectedOutput: '1' }],
    templates: {
      python: { starterCode: 'class MyQueue:\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void enqueue(int x) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'class MyQueue {\n    public void push(int x) {}\n    public int pop() { return 0; }\n}', driverCode: '' }
    }
  },
  {
    title: 'Infix to Postfix Conversion',
    difficulty: 'Medium',
    desc: 'Convert an infix expression to a postfix expression using a stack.',
    tag: 'Zoho PYQ',
    hints: ['Check operator precedence.', 'Operands go to result; operators go to stack.'],
    testCases: [{ args: ['"a+b*(c^d-e)^(f+g*h)-i"'], expectedOutput: '"abcd^e-fgh*+^*+i-"' }],
    templates: {
      python: { starterCode: 'def solve(exp):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Evaluate Postfix Expression',
    difficulty: 'Easy',
    desc: 'Evaluate the value of a postfix expression.',
    tag: 'Zoho PYQ',
    hints: ['Use a stack for operands.', 'When operator encountered, pop two, perform operation, push result.'],
    testCases: [{ args: ['"231*+9-"'], expectedOutput: '-4' }],
    templates: {
      python: { starterCode: 'def solve(exp):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public class Solution {\n    public static void solve() {\n        // Write logic\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Min Stack Implementation',
    difficulty: 'Medium',
    desc: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.',
    tag: 'Zoho PYQ',
    hints: ['Use an auxiliary stack or store pairs (value, currentMin).', 'Constant time required for getMin().'],
    testCases: [{ args: ['[push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()]'], expectedOutput: '[-3, 0, -2]' }],
    templates: {
      python: { starterCode: 'class MinStack:\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void push(int x) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'class MinStack {\n    public void push(int x) {}\n    public int getMin() { return 0; }\n}', driverCode: '' }
    }
  },
  {
    title: 'Circular Queue Implementation',
    difficulty: 'Medium',
    desc: 'Implement a circular queue using an array.',
    tag: 'Zoho PYQ',
    hints: ['Use front and rear pointers.', 'Use modulo operator for index rotation: (rear + 1) % size.'],
    testCases: [{ args: ['[enqueue(1), enqueue(2), dequeue(), enqueue(3)]'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'class MyCircularQueue:\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void enqueue(int x) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'class MyCircularQueue {\n    public void enqueue(int x) {}\n    public int dequeue() { return 0; }\n}', driverCode: '' }
    }
  },
  // --- LINKED LISTS (20) ---
  {
    title: 'Reverse a Linked List',
    difficulty: 'Easy',
    desc: 'Reverse a singly linked list.',
    tag: 'Zoho PYQ',
    hints: ['Use three pointers: prev, curr, and next.', 'Update curr.next = prev in each step.'],
    testCases: [{ args: ['[1, 2, 3, 4, 5]'], expectedOutput: '[5, 4, 3, 2, 1]' }],
    templates: {
      python: { starterCode: 'class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef solve(head):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'struct Node* solve(struct Node* head) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'class Solution {\n    public ListNode reverseList(ListNode head) {\n        // Write logic\n        return null;\n    }\n}', driverCode: '' }
    }
  },
  {
    title: 'Detect Cycle in Linked List',
    difficulty: 'Easy',
    desc: 'Determine if a linked list has a cycle in it.',
    tag: 'Zoho PYQ',
    hints: ["Use Floyd's Cycle-Finding Algorithm (Two Pointers: Slow and Fast).", 'If slow and fast meet, there is a cycle.'],
    testCases: [{ args: ['[3, 2, 0, -4], pos=1'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(head):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(struct Node* head) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean hasCycle(ListNode head) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Middle of the Linked List',
    difficulty: 'Easy',
    desc: 'Given the head of a singly linked list, return the middle node of the linked list.',
    tag: 'Zoho PYQ',
    hints: ['Use slow and fast pointers.', 'When fast reaches the end, slow will be at the middle.'],
    testCases: [{ args: ['[1, 2, 3, 4, 5]'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(head):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'struct Node* solve(struct Node* head) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public ListNode middleNode(ListNode head) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Merge Two Sorted Lists',
    difficulty: 'Easy',
    desc: 'Merge two sorted linked lists and return it as a sorted list.',
    tag: 'Zoho PYQ',
    hints: ['Use a dummy node to simplify edge cases.', 'Compare heads of both lists and pick the smaller one.'],
    testCases: [{ args: ['[1, 2, 4], [1, 3, 4]'], expectedOutput: '[1, 1, 2, 3, 4, 4]' }],
    templates: {
      python: { starterCode: 'def solve(l1, l2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'struct Node* solve(struct Node* l1, struct Node* l2) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Remove N-th Node From End',
    difficulty: 'Medium',
    desc: 'Remove the n-th node from the end of a linked list and return its head.',
    tag: 'Zoho PYQ',
    hints: ['Use two pointers with a gap of N.', 'When first pointer reaches end, second is just before the target node.'],
    testCases: [{ args: ['[1, 2, 3, 4, 5], 2'], expectedOutput: '[1, 2, 3, 5]' }],
    templates: {
      python: { starterCode: 'def solve(head, n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'struct Node* solve(struct Node* head, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public ListNode removeNthFromEnd(ListNode head, int n) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Add Two Numbers as Linked Lists',
    difficulty: 'Medium',
    desc: 'Two non-empty linked lists represent two non-negative integers. Digits are stored in reverse order. Add them.',
    tag: 'Zoho PYQ',
    hints: ['Iterate through both lists and maintain a carry.', 'Handle cases where lists have different lengths.'],
    testCases: [{ args: ['[2, 4, 3], [5, 6, 4]'], expectedOutput: '[7, 0, 8]' }],
    templates: {
      python: { starterCode: 'def solve(l1, l2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'struct Node* solve(struct Node* l1, struct Node* l2) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Intersection of Two Linked Lists',
    difficulty: 'Easy',
    desc: 'Find the node at which the intersection of two singly linked lists begins.',
    tag: 'Zoho PYQ',
    hints: ['Use two pointers. When one reach the end, redirect to other list head.', 'They will meet at intersection or null.'],
    testCases: [{ args: ['ListA, ListB'], expectedOutput: 'Intersection Node' }],
    templates: {
      python: { starterCode: 'def solve(headA, headB):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'struct Node* solve(struct Node* headA, struct Node* headB) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Check Linked List Palindrome',
    difficulty: 'Medium',
    desc: 'Determine if a linked list is a palindrome.',
    tag: 'Zoho PYQ',
    hints: ['Find the middle of list.', 'Reverse the second half and compare with first half.'],
    testCases: [{ args: ['[1, 2, 2, 1]'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(head):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(struct Node* head) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isPalindrome(ListNode head) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  // --- RECURSION (20) ---
  {
    title: 'Generate All Subsets (Power Set)',
    difficulty: 'Medium',
    desc: 'Given a set of distinct integers, return all possible subsets.',
    tag: 'Zoho PYQ',
    hints: ['Use backtracking.', "For each element, either include it in subset or don't."],
    testCases: [{ args: ['[1, 2, 3]'], expectedOutput: '[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]' }],
    templates: {
      python: { starterCode: 'def solve(nums):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public List<List<Integer>> subsets(int[] nums) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Permutations of a String',
    difficulty: 'Medium',
    desc: 'Generate all distinct permutations of a given string.',
    tag: 'Zoho PYQ',
    hints: ['Swap each character with current position and recurse.', 'Backtrack after recursive call.'],
    testCases: [{ args: ['"ABC"'], expectedOutput: '["ABC","ACB","BAC","BCA","CBA","CAB"]' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public List<String> findPermutation(String S) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'N-Queens Problem',
    difficulty: 'Hard',
    desc: 'Place N queens on an NxN chessboard such that no two queens attack each other.',
    tag: 'Zoho PYQ',
    hints: ['Check column, left diagonal and right diagonal for safety.', 'Use backtracking to explore rows.'],
    testCases: [{ args: ['4'], expectedOutput: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public List<List<String>> solveNQueens(int n) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Solve Sudoku',
    difficulty: 'Hard',
    desc: 'Write a program to solve a Sudoku puzzle by filling the empty cells.',
    tag: 'Zoho PYQ',
    hints: ['Try filling numbers 1-9 for each empty cell.', 'Verify if the number is valid in the row, column, and 3x3 grid.'],
    testCases: [{ args: ['Sudoku Board'], expectedOutput: 'Solved Board' }],
    templates: {
      python: { starterCode: 'def solve(board):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solveSudoku() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public void solveSudoku(char[][] board) {\n    // Write logic\n}', driverCode: '' }
    }
  },
  {
    title: 'Word Search in Grid (Backtracking)',
    difficulty: 'Medium',
    desc: 'Given an m x n board and a word, find if the word exists in the grid.',
    tag: 'Zoho PYQ',
    hints: ['Traverse the board and start DFS from each character matching first word char.', "Mark visited cells to avoid reusing them."],
    testCases: [{ args: ['[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(board, word):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean exist(char[][] board, String word) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Rat in a Maze',
    difficulty: 'Medium',
    desc: 'Find all possible paths that a rat can take to reach from source to destination in a maze.',
    tag: 'Zoho PYQ',
    hints: ['Use recursion with backtracking.', 'Consider directions (U, D, L, R). Mark as visited and backtrack.'],
    testCases: [{ args: ['[[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]'], expectedOutput: '"DDRDRR, DRDDRR"' }],
    templates: {
      python: { starterCode: 'def solve(m, n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public ArrayList<String> findPath(int[][] m, int n) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  // --- DYNAMIC PROGRAMMING (20) ---
  {
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    desc: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    tag: 'Zoho PYQ',
    hints: ['This is a variation of Fibonacci sequence.', 'DP[i] = DP[i-1] + DP[i-2].'],
    testCases: [{ args: ['3'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int climbStairs(int n) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Coin Change Problem (Min Coins)',
    difficulty: 'Medium',
    desc: 'Given a set of coins and a total amount, find the minimum number of coins needed to make that amount.',
    tag: 'Zoho PYQ',
    hints: ['Use DP array of size amount + 1.', 'Initialize with amount + 1. Transition: dp[i] = min(dp[i], 1 + dp[i - coin]).'],
    testCases: [{ args: ['[1, 2, 5], 11'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(coins, amount):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int* coins, int n, int amount) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int coinChange(int[] coins, int amount) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Longest Increasing Subsequence',
    difficulty: 'Medium',
    desc: 'Find the length of the longest strictly increasing subsequence in an array.',
    tag: 'Zoho PYQ',
    hints: ['DP[i] stores the LIS ending at index i.', 'O(N^2) DP or O(N log N) with binary search.'],
    testCases: [{ args: ['[10, 9, 2, 5, 3, 7, 101, 18]'], expectedOutput: '4' }],
    templates: {
      python: { starterCode: 'def solve(nums):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int* nums, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int lengthOfLIS(int[] nums) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Longest Common Subsequence',
    difficulty: 'Medium',
    desc: 'Given two strings, find the length of their longest common subsequence.',
    tag: 'Zoho PYQ',
    hints: ['Use a 2D DP table.', 'If chars match: 1 + DP[i-1][j-1]. If not: max(DP[i-1][j], DP[i][j-1]).'],
    testCases: [{ args: ['"abcde", "ace"'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(s1, s2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(char* s1, char* s2) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int longestCommonSubsequence(String s1, String s2) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: '0/1 Knapsack Problem',
    difficulty: 'Medium',
    desc: 'Given weights and values of items, put these items in a knapsack of capacity W to get the maximum total value.',
    tag: 'Zoho PYQ',
    hints: ['DP[i][w] = max(val[i-1] + DP[i-1][w-wt[i-1]], DP[i-1][w]).', 'Can be optimized to O(W) space.'],
    testCases: [{ args: ['[1, 2, 3], [60, 100, 120], 5'], expectedOutput: '220' }],
    templates: {
      python: { starterCode: 'def solve(wt, val, W):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int W, int* wt, int* val, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int knapSack(int W, int[] wt, int[] val, int n) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Edit Distance',
    difficulty: 'Hard',
    desc: 'Given two strings, find the minimum number of operations (insert, delete, replace) to convert one string into another.',
    tag: 'Zoho PYQ',
    hints: ['Use 2D DP.', 'If chars match, DP[i][j] = DP[i-1][j-1]. Else, 1 + min(insert, delete, replace).'],
    testCases: [{ args: ['"horse", "ros"'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(s1, s2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(char* s1, char* s2) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int minDistance(String s1, String s2) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'House Robber',
    difficulty: 'Medium',
    desc: 'Find the maximum amount of money you can rob tonight without robbing two adjacent houses.',
    tag: 'Zoho PYQ',
    hints: ['DP[i] = max(nums[i] + DP[i-2], DP[i-1]).', 'O(1) space is possible using two variables.'],
    testCases: [{ args: ['[1, 2, 3, 1]'], expectedOutput: '4' }],
    templates: {
      python: { starterCode: 'def solve(nums):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int* nums, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int rob(int[] nums) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Word Break Problem',
    difficulty: 'Hard',
    desc: 'Given a string and a dictionary, determine if the string can be segmented into words from the dictionary.',
    tag: 'Zoho PYQ',
    hints: ['Use DP array where dp[i] is true if s[0...i-1] can be segmented.', 'Iterate through all possible split points.'],
    testCases: [{ args: ['"leetcode", ["leet", "code"]'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s, wordDict):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(char* s, char** wordDict, int dictSize) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean wordBreak(String s, List<String> wordDict) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  // --- ADDITIONAL ARRAYS (15) ---
  {
    title: 'Rotate Array by K (Left)',
    difficulty: 'Easy',
    desc: 'Rotate an array to the left by K steps.',
    tag: 'Zoho PYQ',
    hints: ['Reverse first K elements.', 'Reverse K to end. Reverse the whole array.'],
    testCases: [{ args: ['[1, 2, 3, 4, 5], 2'], expectedOutput: '[3, 4, 5, 1, 2]' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public void rotate(int[] nums, int k) {\n    // Write logic\n}', driverCode: '' }
    }
  },
  {
    title: 'Find the Intersection of Two Sorted Arrays',
    difficulty: 'Easy',
    desc: 'Return the intersection of two sorted arrays.',
    tag: 'Zoho PYQ',
    hints: ['Use two pointers.', 'Increment the pointer pointing to the smaller element.'],
    testCases: [{ args: ['[1, 2, 2, 3], [2, 2, 4]'], expectedOutput: '[2, 2]' }],
    templates: {
      python: { starterCode: 'def solve(arr1, arr2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int[] intersect(int[] nums1, int[] nums2) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Sort an Array of 0s, 1s, and 2s (Dutch Flag)',
    difficulty: 'Medium',
    desc: 'Sort an array consisting of only 0s, 1s, and 2s in-place without using library sort.',
    tag: 'Zoho PYQ',
    hints: ['Use three pointers: low, mid, high.', 'Check mid element and swap accordingly.'],
    testCases: [{ args: ['[2, 0, 2, 1, 1, 0]'], expectedOutput: '[0, 0, 1, 1, 2, 2]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public void sortColors(int[] nums) {\n    // Write logic\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Majority Element (Moore Voting)',
    difficulty: 'Easy',
    desc: 'Find the element that appears more than N/2 times in an array.',
    tag: 'Zoho PYQ',
    hints: ["Use Boyer-Moore Voting Algorithm.", 'Initial candidate and count=0.'],
    testCases: [{ args: ['[3, 2, 3]'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int* arr, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int majorityElement(int[] nums) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  // --- ADDITIONAL STRINGS (20) ---
  {
    title: 'Valid Palindrome (After Removing 1 Char)',
    difficulty: 'Easy',
    desc: 'Given a string, check if it can be a palindrome after deleting at most one character from it.',
    tag: 'Zoho PYQ',
    hints: ['Use two pointers.', 'If mismatch, check if skipping one char from left or right makes it a palindrome.'],
    testCases: [{ args: ['"abca"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(char* s) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean validPalindrome(String s) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Group Anagrams',
    difficulty: 'Medium',
    desc: 'Given an array of strings, group the anagrams together.',
    tag: 'Zoho PYQ',
    hints: ['Sort each string and use it as a key in a hash map.', 'Store original strings as values in a list associated with the key.'],
    testCases: [{ args: ['["eat", "tea", "tan", "ate", "nat", "bat"]'], expectedOutput: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }],
    templates: {
      python: { starterCode: 'def solve(strs):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public List<List<String>> groupAnagrams(String[] strs) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Longest Common Prefix',
    difficulty: 'Easy',
    desc: 'Find the longest common prefix string amongst an array of strings.',
    tag: 'Zoho PYQ',
    hints: ['Take the first string as prefix.', 'Iteratively compare and trim prefix with each subsequent string.'],
    testCases: [{ args: ['["flower","flow","flight"]'], expectedOutput: '"fl"' }],
    templates: {
      python: { starterCode: 'def solve(strs):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'char* solve(char** strs, int strsSize) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public String longestCommonPrefix(String[] strs) {\n    // Write logic\n    return "";\n}', driverCode: '' }
    }
  },
  {
    title: 'String Multiplication',
    difficulty: 'Medium',
    desc: 'Given two non-negative integers represented as strings, return the product also as a string.',
    tag: 'Zoho PYQ',
    hints: ['Use an array of size length1 + length2.', 'Perform manual multiplication digit by digit and handle carries.'],
    testCases: [{ args: ['"123", "456"'], expectedOutput: '"56088"' }],
    templates: {
      python: { starterCode: 'def solve(num1, num2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'char* solve(char* num1, char* num2) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public String multiply(String num1, String num2) {\n    // Write logic\n    return "";\n}', driverCode: '' }
    }
  },
  {
    title: 'Isomorphic Strings',
    difficulty: 'Easy',
    desc: 'Determine if two strings are isomorphic (e.g., "egg" and "add" are isomorphic).',
    tag: 'Zoho PYQ',
    hints: ['Use two hash maps to store character mappings in both directions.', 'Check if current mapping is consistent.'],
    testCases: [{ args: ['"egg", "add"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s, t):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(char* s, char* t) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isIsomorphic(String s, String t) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Word Ladder Length',
    difficulty: 'Hard',
    desc: 'Find the length of the shortest transformation sequence from beginWord to endWord.',
    tag: 'Zoho PYQ',
    hints: ['Use BFS for shortest path.', 'Change one character at a time and check if it exists in wordList.'],
    testCases: [{ args: ['"hit", "cog", ["hot","dot","dog","lot","log","cog"]'], expectedOutput: '5' }],
    templates: {
      python: { starterCode: 'def solve(beginWord, endWord, wordList):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int ladderLength(String beginWord, String endWord, List<String> wordList) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  // --- FINAL MISCELLANEOUS & ADVANCED MATH (40) ---
  {
    title: 'Count Primes in Range [L, R]',
    difficulty: 'Medium',
    desc: 'Find the number of prime numbers between L and R (inclusive).',
    tag: 'Zoho PYQ',
    hints: ['Use Sieve of Eratosthenes up to R.', 'Precompute counts using prefix sums.'],
    testCases: [{ args: ['10, 20'], expectedOutput: '4' }],
    templates: {
      python: { starterCode: 'def solve(l, r):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int l, int r) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int countPrimes(int L, int R) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Happy Number Check',
    difficulty: 'Easy',
    desc: 'Determine if a number is happy (sum of squares of its digits lead to 1).',
    tag: 'Zoho PYQ',
    hints: ["Use Floyd's Cycle-Finding Algorithm or a hash set.", 'Stop if you see 1 or a repeating number.'],
    testCases: [{ args: ['19'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isHappy(int n) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Excel Column Name from Number',
    difficulty: 'Medium',
    desc: 'Given a column number (e.g., 28), return its Excel title (e.g., "AB").',
    tag: 'Zoho PYQ',
    hints: ['Base 26 conversion.', 'Adjust for 1-based indexing.'],
    testCases: [{ args: ['28'], expectedOutput: '"AB"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public String convertToTitle(int n) {\n    // Write logic\n    return "";\n}', driverCode: '' }
    }
  },
  {
    title: 'Divide Two Integers Without / or *',
    difficulty: 'Medium',
    desc: 'Divide two integers without using multiplication, division, and mod operator.',
    tag: 'Zoho PYQ',
    hints: ['Use bit shifting (exponential backoff).', 'Subtract (divisor << k) from dividend and update quotient.'],
    testCases: [{ args: ['10, 3'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(dividend, divisor):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int dividend, int divisor) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int divide(int dividend, int divisor) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Super Pow (a^b % 1337)',
    difficulty: 'Hard',
    desc: 'Calculate a^b mod 1337 where b is a very large positive integer given as an array.',
    tag: 'Zoho PYQ',
    hints: ['a^b % k = (a^(b%phi(k)) * a^(phi(k))) % k is not quite right here.', 'Use (a*b)%m = ((a%m)*(b%m))%m and recursion.'],
    testCases: [{ args: ['2, [1,0]'], expectedOutput: '1024' }],
    templates: {
      python: { starterCode: 'def solve(a, b):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int superPow(int a, int[] b) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Valid Square in 2D Plane',
    difficulty: 'Medium',
    desc: 'Given the coordinates of four points, determine if they form a square.',
    tag: 'Zoho PYQ',
    hints: ['Calculate squared distances between all pairs of points (6 pairs).', 'A square has 4 equal sides and 2 equal diagonals.'],
    testCases: [{ args: ['[0,0], [1,1], [1,0], [0,1]'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(p1, p2, p3, p4):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean validSquare(int[] p1, int[] p2, int[] p3, int[] p4) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Count Set Bits in Range [1, N]',
    difficulty: 'Hard',
    desc: 'Given a number N, find the total number of set bits in all numbers from 1 to N.',
    tag: 'Zoho PYQ',
    hints: ['Observe patterns in binary representations.', 'Use recursion and powers of 2.'],
    testCases: [{ args: ['4'], expectedOutput: '5' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int countSetBits(int n) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  // --- TREES (20) ---
  {
    title: 'Inorder Traversal of Binary Tree',
    difficulty: 'Easy',
    desc: 'Perform inorder traversal (Left, Root, Right) of a binary tree.',
    tag: 'Zoho PYQ',
    hints: ['Use recursion or a stack.', 'Visit left child, root, then right child.'],
    testCases: [{ args: ['[1,null,2,3]'], expectedOutput: '[1,3,2]' }],
    templates: {
      python: { starterCode: 'def solve(root):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(struct Node* root) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public List<Integer> inorderTraversal(TreeNode root) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Level Order Traversal',
    difficulty: 'Easy',
    desc: 'Perform level order traversal of a binary tree (BFS).',
    tag: 'Zoho PYQ',
    hints: ['Use a queue.', 'Process nodes level by level.'],
    testCases: [{ args: ['[3,9,20,null,null,15,7]'], expectedOutput: '[[3],[9,20],[15,7]]' }],
    templates: {
      python: { starterCode: 'def solve(root):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(struct Node* root) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public List<List<Integer>> levelOrder(TreeNode root) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Maximum Depth of Binary Tree',
    difficulty: 'Easy',
    desc: 'Find the maximum depth (height) of a binary tree.',
    tag: 'Zoho PYQ',
    hints: ['Use recursion.', 'MaxDepth = 1 + max(leftDepth, rightDepth).'],
    testCases: [{ args: ['[3,9,20,null,null,15,7]'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(root):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(struct Node* root) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int maxDepth(TreeNode root) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Check if Two Trees are Identical',
    difficulty: 'Easy',
    desc: 'Given the roots of two binary trees, check if they are the same.',
    tag: 'Zoho PYQ',
    hints: ['Compare roots, then recursively check left and right subtrees.', 'Both must be null or have same value.'],
    testCases: [{ args: ['[1,2,3], [1,2,3]'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(p, q):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(struct Node* p, struct Node* q) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isSameTree(TreeNode p, TreeNode q) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Lowest Common Ancestor in BST',
    difficulty: 'Easy',
    desc: 'Find the lowest common ancestor (LCA) of two given nodes in a Binary Search Tree.',
    tag: 'Zoho PYQ',
    hints: ['Use BST properties.', 'If both nodes are smaller than root, go left; if both larger, go right.'],
    testCases: [{ args: ['[6,2,8,0,4,7,9,null,null,3,5], 2, 8'], expectedOutput: '6' }],
    templates: {
      python: { starterCode: 'def solve(root, p, q):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'struct Node* solve(struct Node* root, struct Node* p, struct Node* q) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  // --- GRAPHS (20) ---
  {
    title: 'BFS of Graph',
    difficulty: 'Easy',
    desc: 'Perform Breadth First Search starting from vertex 0.',
    tag: 'Zoho PYQ',
    hints: ['Use a queue and a visited array.', 'Visit all neighbors before moving to next level.'],
    testCases: [{ args: ['5, [[0,1],[0,2],[0,3],[2,4]]'], expectedOutput: '[0,1,2,3,4]' }],
    templates: {
      python: { starterCode: 'def solve(v, adj):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(int v, int** adj) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public ArrayList<Integer> bfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'DFS of Graph',
    difficulty: 'Easy',
    desc: 'Perform Depth First Search starting from vertex 0.',
    tag: 'Zoho PYQ',
    hints: ['Use recursion and a visited array.', 'Visit a neighbor and recurse immediately.'],
    testCases: [{ args: ['5, [[0,1],[0,2],[0,4],[1,2],[1,3]]'], expectedOutput: '[0,1,2,3,4]' }],
    templates: {
      python: { starterCode: 'def solve(v, adj):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(int v, int** adj) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public ArrayList<Integer> dfsOfGraph(int V, ArrayList<ArrayList<Integer>> adj) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Cycle Detection in Undirected Graph',
    difficulty: 'Medium',
    desc: 'Determine if an undirected graph contains a cycle.',
    tag: 'Zoho PYQ',
    hints: ['Use DFS or BFS.', 'Keep track of parent node to avoid false cycle detection with immediate parent.'],
    testCases: [{ args: ['5, [[0,1],[1,2],[2,3],[3,4],[4,1]]'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(v, adj):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(int v, int** adj) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isCycle(int V, ArrayList<ArrayList<Integer>> adj) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Topological Sort (Kahn Algorithm)',
    difficulty: 'Medium',
    desc: 'Perform topological sort on a DAG.',
    tag: 'Zoho PYQ',
    hints: ['Use indegrees of all vertices.', 'Add vertices with 0 indegree to queue and process.'],
    testCases: [{ args: ['6, [[5,2],[5,0],[4,0],[4,1],[2,3],[3,1]]'], expectedOutput: '[4,5,2,0,3,1]' }],
    templates: {
      python: { starterCode: 'def solve(v, adj):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(int v, int** adj) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int[] topoSort(int V, ArrayList<ArrayList<Integer>> adj) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  // --- ADDITIONAL ZOHO SPECIALS (30) ---
  {
    title: 'Find Odd Occurring Element',
    difficulty: 'Easy',
    desc: 'Given an array where all elements appear even times except one, find it.',
    tag: 'Zoho PYQ',
    hints: ['Use XOR operation.', 'x ^ x = 0, x ^ 0 = x.'],
    testCases: [{ args: ['[1, 2, 3, 2, 3, 1, 3]'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int findOdd(int[] arr) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Pattern Printing - Hollow Square',
    difficulty: 'Easy',
    desc: 'Print a hollow square of size N using asterisks.',
    tag: 'Zoho PYQ',
    hints: ['Use nested loops.', 'Step 1: Loop i from 0 to N-1. Step 2: Loop j from 0 to N-1. Step 3: Print * if edge, else space.'],
    testCases: [{ args: ['3'], expectedOutput: '"***\\n* *\\n***"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public static void solve(int n) {\n    // Write logic\n}', driverCode: '' }
    }
  },
  {
    title: 'Look and Say Sequence Generation',
    difficulty: 'Medium',
    desc: 'Generate the N-th term of the Look-and-Say sequence.',
    tag: 'Zoho PYQ',
    hints: ['Start with "1".', 'For each term, count consecutive digits and append "count" + "digit" to build next term.'],
    testCases: [{ args: ['5'], expectedOutput: '"111221"' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public String lookAndSay(int n) {\n    // Write logic\n    return "";\n}', driverCode: '' }
    }
  },
  {
    title: 'Sort an Array According to Bit Count',
    difficulty: 'Medium',
    desc: 'Sort an array based on number of set bits in binary representation (Descending). If tie, keep original order.',
    tag: 'Zoho PYQ',
    hints: ['Count bits for each number.', 'Use a stable sort with a custom comparator.'],
    testCases: [{ args: ['[5, 2, 3, 9, 4, 6, 7, 15, 32]'], expectedOutput: '[15, 7, 5, 3, 9, 6, 2, 4, 32]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public void sortByBits(int[] arr) {\n    // Write logic\n}', driverCode: '' }
    }
  },
  {
    title: 'Find Intersection of Two Sorted Arrays',
    difficulty: 'Easy',
    desc: 'Find elements common to two sorted arrays.',
    tag: 'Zoho PYQ',
    hints: ['Use two pointers.', 'Skip duplicates if unique intersection required.'],
    testCases: [{ args: ['[1, 2, 3, 3, 4, 5, 6], [3, 3, 5]'], expectedOutput: '[3, 3, 5]' }],
    templates: {
      python: { starterCode: 'def solve(a, b):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int[] intersect(int[] a, int[] b) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  // --- BIT MANIPULATION (10) ---
  {
    title: 'Find the Non-Repeating Elements',
    difficulty: 'Medium',
    desc: 'In an array where every element repeats twice except two, find those two elements.',
    tag: 'Zoho PYQ',
    hints: ['XOR all elements. The result is XOR of two unique elements.', 'Find rightmost set bit in result.', 'Divide elements into two groups based on this bit.'],
    testCases: [{ args: ['[1, 2, 3, 2, 1, 4]'], expectedOutput: '[3, 4]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int[] findUnique(int[] arr) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Swap Two Numbers without Third Variable',
    difficulty: 'Easy',
    desc: 'Swap two integers a and b without using a temporary variable.',
    tag: 'Zoho PYQ',
    hints: ['Use XOR (a=a^b, b=a^b, a=a^b) or addition/subtraction.', 'Ensure no overflow if using addition.'],
    testCases: [{ args: ['5, 10'], expectedOutput: '10, 5' }],
    templates: {
      python: { starterCode: 'def solve(a, b):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(int* a, int* b) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public static void solve(int a, int b) {\n    // Write logic\n}', driverCode: '' }
    }
  },
  {
    title: 'Check if a Number is Power of Two',
    difficulty: 'Easy',
    desc: 'Determine if a given integer N is a power of 2.',
    tag: 'Zoho PYQ',
    hints: ['Use (n & (n-1)) == 0.', 'Handle n <= 0 case.'],
    testCases: [{ args: ['16'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isPowerOfTwo(int n) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  // --- ARRAY & MISC (21) ---
  {
    title: 'Find Transition Point in Sorted Binary Array',
    difficulty: 'Easy',
    desc: 'Given a sorted array of 0s and 1s, find the index of the first 1.',
    tag: 'Zoho PYQ',
    hints: ['Use binary search.', 'If mid is 1, check if mid-1 is 0.'],
    testCases: [{ args: ['[0,0,0,1,1]'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int* arr, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int transitionPoint(int[] arr, int n) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Leaders in an Array',
    difficulty: 'Easy',
    desc: 'Find all "leaders" in an array (an element is a leader if it is greater than all elements to its right).',
    tag: 'Zoho PYQ',
    hints: ['Iterate from right to left.', 'Keep track of the maximum seen so far.'],
    testCases: [{ args: ['[16, 17, 4, 3, 5, 2]'], expectedOutput: '[17, 5, 2]' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public ArrayList<Integer> leaders(int[] arr, int n) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Equilibrium Point',
    difficulty: 'Easy',
    desc: 'Find the first index where the sum of elements to the left is equal to the sum of elements to the right.',
    tag: 'Zoho PYQ',
    hints: ['Calculate total sum first.', 'Iterate and maintain left_sum. right_sum = total_sum - left_sum - current_element.'],
    testCases: [{ args: ['[1, 3, 5, 2, 2]'], expectedOutput: '2 (index)' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int* arr, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int equilibriumPoint(long[] arr, int n) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Check for Subset Sum',
    difficulty: 'Medium',
    desc: 'Determine if there is a subset of an array with a sum equal to K.',
    tag: 'Zoho PYQ',
    hints: ['Use recursion or DP.', 'DP[i][j] is true if a sum j can be formed using first i elements.'],
    testCases: [{ args: ['[3, 34, 4, 12, 5, 2], 9'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(int* arr, int n, int k) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isSubsetSum(int[] arr, int sum) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Smallest Positive Missing Number',
    difficulty: 'Medium',
    desc: 'Find the smallest positive integer that is missing from an unsorted array.',
    tag: 'Zoho PYQ',
    hints: ['Place each element x at index x-1 if possible.', 'The first index where arr[i] != i+1 is the answer.'],
    testCases: [{ args: ['[1, 2, 0]'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int* arr, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int missingNumber(int[] arr, int size) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Longest Common Substring',
    difficulty: 'Medium',
    desc: 'Find the length of the longest common substring between two strings.',
    tag: 'Zoho PYQ',
    hints: ['Use 2D DP.', 'If chars match, DP[i][j] = 1 + DP[i-1][j-1]. Keep track of max.'],
    testCases: [{ args: ['"abcdgh", "acdghr"'], expectedOutput: '4' }],
    templates: {
      python: { starterCode: 'def solve(s1, s2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(char* s1, char* s2) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int longestCommonSubstring(String S1, String S2) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Interleaved Strings Check',
    difficulty: 'Medium',
    desc: 'Determine if string C is formed by interleaving strings A and B.',
    tag: 'Zoho PYQ',
    hints: ['Use recursion with memoization.', "Check if C[k] matches A[i] or B[j] and recurse."],
    testCases: [{ args: ['"aabcc", "dbbca", "aadbbcbcac"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(a, b, c):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(char* a, char* b, char* c) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isInterleave(String s1, String s2, String s3) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Calculate N-th Catalan Number',
    difficulty: 'Medium',
    desc: 'Find the N-th Catalan number.',
    tag: 'Zoho PYQ',
    hints: ['Catalan(n) = (1/(n+1)) * (2n choose n).', 'Use DP recursion formula: C(n) = sum(C(i) * C(n-i-1)) for i from 0 to n-1.'],
    testCases: [{ args: ['5'], expectedOutput: '42' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'long solve(int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public long findCatalan(int n) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Pascal Triangle II',
    difficulty: 'Easy',
    desc: 'Given an index n, return the n-th row of Pascal triangle.',
    tag: 'Zoho PYQ',
    hints: ['Row k has k+1 elements.', 'Element at index i is (k choose i). Use formula: C(n, k) = C(n, k-1) * (n-k+1)/k.'],
    testCases: [{ args: ['3'], expectedOutput: '[1,3,3,1]' }],
    templates: {
      python: { starterCode: 'def solve(rowIndex):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public List<Integer> getRow(int rowIndex) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Minimum Path Sum in Grid',
    difficulty: 'Medium',
    desc: 'Find a path from top left to bottom right in a grid which minimizes the sum of all numbers along its path.',
    tag: 'Zoho PYQ',
    hints: ['Use DP.', 'DP[i][j] = grid[i][j] + min(DP[i-1][j], DP[i][j-1]).'],
    testCases: [{ args: ['[[1,3,1],[1,5,1],[4,2,1]]'], expectedOutput: '7' }],
    templates: {
      python: { starterCode: 'def solve(grid):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int** grid, int n, int m) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int minPathSum(int[][] grid) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Jump Game (Can Reach End)',
    difficulty: 'Medium',
    desc: 'Given an array of non-negative integers, you are initially at the first index. Each element represents your maximum jump distance. Determine if you can reach the last index.',
    tag: 'Zoho PYQ',
    hints: ['Maintain max reachable index.', 'If current index i > maxReach, return false.'],
    testCases: [{ args: ['[2,3,1,1,4]'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(nums):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(int* nums, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean canJump(int[] nums) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Valid IP Address Check',
    difficulty: 'Medium',
    desc: 'Write a program to validate an IPv4 address.',
    tag: 'Zoho PYQ',
    hints: ['Split by dots.', 'Each part must be between 0 and 255. No leading zeroes unless part is "0".'],
    testCases: [{ args: ['"128.0.0.1"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(ip):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(char* ip) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isValid(String s) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Longest Palindromic Sequence Length',
    difficulty: 'Medium',
    desc: 'Find the length of the longest palindromic subsequence in a string.',
    tag: 'Zoho PYQ',
    hints: ['LPS(s) = LCS(s, reverse(s)).', 'Or use DP: dp[i][j] = dp[i+1][j-1] + 2 if match else max.'],
    testCases: [{ args: ['"bbbab"'], expectedOutput: '4' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(char* s) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int longestPalindromeSubseq(String s) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Is Subsequence Check',
    difficulty: 'Easy',
    desc: 'Check if s is a subsequence of t.',
    tag: 'Zoho PYQ',
    hints: ['Use two pointers.', 'Iterate through t and match chars of s sequentially.'],
    testCases: [{ args: ['"abc", "ahbgdc"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s, t):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(char* s, char* t) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isSubsequence(String s, String t) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Missing Number in Array',
    difficulty: 'Easy',
    desc: 'Find the missing number in an array of size N-1 containing numbers from 1 to N.',
    tag: 'Zoho PYQ',
    hints: ['Use sum formula: N*(N+1)/2.', 'Subtract array sum from total sum.'],
    testCases: [{ args: ['[1, 2, 4, 5], 5'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(arr, n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int missingNumber(int[] array, int n) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Power of Three Check',
    difficulty: 'Easy',
    desc: 'Determine if an integer is a power of three.',
    tag: 'Zoho PYQ',
    hints: ['Iteratively divide by 3.', 'Or use log base 3.'],
    testCases: [{ args: ['27'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(n):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isPowerOfThree(int n) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Valid Anagram Check',
    difficulty: 'Easy',
    desc: 'Given two strings s and t, return true if t is an anagram of s.',
    tag: 'Zoho PYQ',
    hints: ['Use a frequency counter array of size 26.', 'Increment for s, decrement for t.'],
    testCases: [{ args: ['"anagram", "nagaram"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s, t):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(char* s, char* t) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isAnagram(String s, String t) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Reverse Individual Words',
    difficulty: 'Easy',
    desc: 'Given a string, reverse each individual word in it. (e.g. "Hello World" -> "olleH dlroW")',
    tag: 'Zoho PYQ',
    hints: ['Split by spaces.', 'Reverse each substring and join.'],
    testCases: [{ args: ['"I love coding"'], expectedOutput: '"I evol gnidoc"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(char* s) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public String reverseWords(String s) {\n    // Write logic\n    return "";\n}', driverCode: '' }
    }
  },
  {
    title: 'Rotate Matrix by 90 Degrees Anti-Clockwise',
    difficulty: 'Medium',
    desc: 'Rotate an NxN matrix 90 degrees anti-clockwise in-place.',
    tag: 'Zoho PYQ',
    hints: ['Transpose the matrix.', 'Reverse each column.'],
    testCases: [{ args: ['[[1,2],[3,4]]'], expectedOutput: '[[2,4],[1,3]]' }],
    templates: {
      python: { starterCode: 'def solve(mat):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve(int** mat, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public void rotate(int[][] matrix) {\n    // Write logic\n}', driverCode: '' }
    }
  },
  {
    title: 'Count Possible Decodings',
    difficulty: 'Medium',
    desc: 'Given a digit sequence, find total number of ways to decode it (1=A, 2=B, ... 26=Z).',
    tag: 'Zoho PYQ',
    hints: ['Use DP.', 'DP[i] = DP[i-1] + (DP[i-2] if s[i-2...i-1] <= 26).'],
    testCases: [{ args: ['"12"'], expectedOutput: '2' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(char* s) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int numDecodings(String s) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Wildcard Matching (Simplified)',
    difficulty: 'Hard',
    desc: 'Implement wildcard pattern matching with support for "?" and "*".',
    tag: 'Zoho PYQ',
    hints: ['Use DP table of size (m+1)x(n+1).', 'Handling "*" requires checking multiple previous states.'],
    testCases: [{ args: ['"aa", "*"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s, p):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(char* s, char* p) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean isMatch(String s, String p) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Stock Span Problem',
    difficulty: 'Medium',
    desc: 'Find the span of stock price for all n days.',
    tag: 'Zoho PYQ',
    hints: ['Use a monotonic stack to store indices.', 'Pop until stack is empty or prices[stack_top] > current_price.'],
    testCases: [{ args: ['[100, 80, 60, 70, 60, 75, 85]'], expectedOutput: '[1, 1, 1, 2, 1, 4, 6]' }],
    templates: {
      python: { starterCode: 'def solve(prices):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int[] calculateSpan(int[] price, int n) {\n    // Write logic\n    return null;\n}', driverCode: '' }
    }
  },
  {
    title: 'Valid Parenthesis String with Stars',
    difficulty: 'Medium',
    desc: 'Check if a string with "(", ")" and "*" is valid. "*" can be "(", ")" or empty.',
    tag: 'Zoho PYQ',
    hints: ['Use two stacks: one for "(" indices, one for "*" indices.', 'Or use a greedy approach tracking min/max open counts.'],
    testCases: [{ args: ['"(*)"'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(char* s) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean checkValidString(String s) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'First Non-Repeating Char in Stream',
    difficulty: 'Medium',
    desc: 'Given a stream of characters, find the first non-repeating character at each step.',
    tag: 'Zoho PYQ',
    hints: ['Use a queue and a frequency array.', 'Pop from queue if frequency > 1.'],
    testCases: [{ args: ['"aabc"'], expectedOutput: '"a#bb"' }],
    templates: {
      python: { starterCode: 'def solve(s):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'void solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public String firstNonRepeating(String A) {\n    // Write logic\n    return "";\n}', driverCode: '' }
    }
  },
  {
    title: 'Length of Largest Subarray with 0 Sum',
    difficulty: 'Medium',
    desc: 'Find the length of the longest subarray with sum 0.',
    tag: 'Zoho PYQ',
    hints: ['Use a hash map to store prefix sums.', 'If sum repeats, a zero-sum subarray exists between the indices.'],
    testCases: [{ args: ['[15, -2, 2, -8, 1, 7, 10, 23]'], expectedOutput: '5' }],
    templates: {
      python: { starterCode: 'def solve(arr):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int* arr, int n) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int maxLen(int[] arr, int n) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Find if Array Can be Divided into Pair Sums k',
    difficulty: 'Medium',
    desc: 'Check if array can be divided into pairs such that sum of each pair is divisible by k.',
    tag: 'Zoho PYQ',
    hints: ['Count remainders modulo k.', 'Count[rem] must equal Count[k-rem]. Handling rem=0 and k/2 separately.'],
    testCases: [{ args: ['[9, 7, 5, 3], 6'], expectedOutput: 'true' }],
    templates: {
      python: { starterCode: 'def solve(arr, k):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'bool solve(int* arr, int n, int k) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public boolean canPair(int[] nums, int k) {\n    // Write logic\n    return false;\n}', driverCode: '' }
    }
  },
  {
    title: 'Sum of Two Large Numbers',
    difficulty: 'Medium',
    desc: 'Add two large numbers given as strings.',
    tag: 'Zoho PYQ',
    hints: ['Iterate from right to left.', 'Handle carry and string reconstruction.'],
    testCases: [{ args: ['"123", "77"'], expectedOutput: '"200"' }],
    templates: {
      python: { starterCode: 'def solve(s1, s2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'char* solve(char* s1, char* s2) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public String findSum(String s1, String s2) {\n    // Write logic\n    return "";\n}', driverCode: '' }
    }
  },
  {
    title: 'Smallest Subarray with Sum > X',
    difficulty: 'Medium',
    desc: 'Find the minimum length of a subarray whose sum is strictly greater than X.',
    tag: 'Zoho PYQ',
    hints: ['Use sliding window.', 'Expand right until sum > X, then shrink left while sum remains > X.'],
    testCases: [{ args: ['[1, 4, 45, 6, 0, 19], 51'], expectedOutput: '3' }],
    templates: {
      python: { starterCode: 'def solve(arr, x):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve(int* arr, int n, int x) {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int smallestSubWithSum(int[] a, int n, int x) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    desc: 'Find the median of two sorted arrays of different sizes. O(log(min(n,m))) complexity.',
    tag: 'Zoho PYQ',
    hints: ['Use binary search on the smaller array.', 'Partition into two equal parts.'],
    testCases: [{ args: ['[1, 3], [2]'], expectedOutput: '2.0' }],
    templates: {
      python: { starterCode: 'def solve(nums1, nums2):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'double solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    // Write logic\n    return 0.0;\n}', driverCode: '' }
    }
  },
  {
    title: 'Longest Common Prefix',
    difficulty: 'Easy',
    desc: 'Find the longest common prefix string amongst an array of strings.',
    tag: 'Zoho PYQ',
    hints: ['Compare characters at each index across all strings.', 'Stop at first mismatch.'],
    testCases: [{ args: ['["flower","flow","flight"]'], expectedOutput: '"fl"' }],
    templates: {
      python: { starterCode: 'def solve(strs):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'char* solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public String longestCommonPrefix(String[] strs) {\n    // Write logic\n    return "";\n}', driverCode: '' }
    }
  },
  {
    title: 'Reverse Integer',
    difficulty: 'Easy',
    desc: 'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes value to go outside [ -2^31, 2^31 - 1], return 0.',
    tag: 'Zoho PYQ',
    hints: ['Use % 10 to extract digits.', 'Handle overflow checks carefully.'],
    testCases: [{ args: ['123'], expectedOutput: '321' }],
    templates: {
      python: { starterCode: 'def solve(x):\n    # Write logic\n    pass', driverCode: '' },
      c: { starterCode: 'int solve() {\n    // Write logic\n}', driverCode: '' },
      java: { starterCode: 'public int reverse(int x) {\n    // Write logic\n    return 0;\n}', driverCode: '' }
    }
  }
];

// Seed logic
async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    let count = 0;
    for (const p of problems) {
      await Problem.findOneAndUpdate({ title: p.title }, p, { upsert: true });
      count++;
      if (count % 10 === 0) {
        console.log(`Seeded ${count}/${problems.length} problems...`);
      }
    }
    
    const finalCount = await Problem.countDocuments({ tag: 'Zoho PYQ' });
    console.log(`Seeding complete. Total Zoho PYQ problems in database: ${finalCount}`);
    
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
