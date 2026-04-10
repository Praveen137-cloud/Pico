const stage2 = [
  {
    "order": 1,
    "title": "The Perfect Pair (Two Sum)",
    "desc": "Finding two seeds that sum to target in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stage 2 is about SOLVING with Hashing! Two Sum is the legend. Find a pair that sums to the target. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For every bird, check if `target - bird_val` is already in the Map. If yes, you found the pair! 🦜\"",
        "codeSnippet": "if (m.find(target - nums[i]) != m.end()) return {m[target - nums[i]], i};"
      },
      { "type": "multiple_choice", "questionText": "Time complexity with a Map?", "options": ["O(N)", "O(N^2)", "O(log N)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 2,
    "title": "Anagram Alarms",
    "desc": "Checking if two strings are rearranged versions.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"'Listen' and 'Silent' are anagrams! Use a frequency map to compare them. 🦜\"" },
      { "type": "multiple_choice", "questionText": "If bird A has 2 'a's and bird B has 3 'a's, are they anagrams?", "options": ["No", "Yes", "Maybe"], "correctAnswer": "No" }
    ]
  },
  {
    "order": 3,
    "title": "The Prefix Sum Trick",
    "desc": "Solving subarray problems with hashing.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If Sum(A to B) = K, then PrefixSum(B) - PrefixSum(A-1) = K! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Formula to look for in the Map?", "options": ["currSum - K", "currSum + K", "K"], "correctAnswer": "currSum - K" }
    ]
  },
  {
    "order": 4,
    "title": "Group Anagrams",
    "desc": "Categorizing strings into groups.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Map the 'sorted' version of the string to a list of original strings! 🦜\"" },
      { "type": "programming_board", "questionText": "Key for 'eat', 'tea', 'ate'.", "codeSnippet": "Key = sort(\"eat\"); // Key is ___;", "correctAnswer": "\"aet\"" }
    ]
  },
  {
    "order": 5,
    "title": "Longest Consecutive Sequence",
    "desc": "Finding the longest run of numbers.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Put everything in a HashSet! If `bird - 1` isn't there, it's the start of a sequence! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Time complexity if we use a Set?", "options": ["O(N)", "O(N log N)", "O(N^2)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 6,
    "title": "Subarray Sum Equals K",
    "desc": "Counting subarrays that sum to target.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Store the count of each prefix sum seen so far in a Map. 🦜\"" },
      { "type": "programming_board", "questionText": "Increment count in map.", "codeSnippet": "m[currSum] ___ ;", "correctAnswer": "++" }
    ]
  },
  {
    "order": 7,
    "title": "Count Subarrays with XOR K",
    "desc": "Harder hashing with bitwise ops.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Just like Sum, but with XOR! PrefixXOR(B) ^ PrefixXOR(A-1) = K. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Search key?", "options": ["currXor ^ K", "currXor & K", "K"], "correctAnswer": "currXor ^ K" }
    ]
  },
  {
    "order": 8,
    "title": "Vertical Order of Trees",
    "desc": "Using Maps and BFS for tree visualization.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Map the 'vertical line' coordinate to a list of node values. 🦜\"" },
      { "type": "programming_board", "questionText": "Coordinate shift for left child.", "codeSnippet": "solve(node->left, col ___ );", "correctAnswer": "-1" }
    ]
  },
  {
    "order": 9,
    "title": "Valid Sudoku (Hash Grid)",
    "desc": "Checking constraints in O(1) space (relative).",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use sets to check if a number repeats in a row, column, or 3x3 box! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Number of sets needed?", "options": ["27 (9 row, 9 col, 9 box)", "3", "81"], "correctAnswer": "27 (9 row, 9 col, 9 box)" }
    ]
  },
  {
    "order": 10,
    "title": "Top K Frequent Elements",
    "desc": "Finding the most common seeds.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Count frequencies into a Map, then use a Min-Heap or Bucket Sort! 🦜\"" },
      { "type": "multiple_choice", "questionText": "O(N) approach possible?", "options": ["Yes (Bucket Sort)", "No", "Only if sorted"], "correctAnswer": "Yes (Bucket Sort)" }
    ]
  },
  { "order": 11, "title": "Check Duplicate in Window", "desc": "Hashing with a sliding window.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Keep the set size <= K! 🦜\"" } ] },
  { "order": 12, "title": "Longest String with K Unique", "desc": "Sliding window + Hashing.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Map characters to their counts in the window. 🦜\"" } ] },
  { "order": 13, "title": "Longest Substring Without Repeat", "desc": "The most famous sliding window.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"If char repeats, shrink the window from the left! 🦜\"" } ] },
  { "order": 14, "title": "Hashing Custom Objects", "desc": "Defining hash for birds.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"You must define a custom hash function for your own structs! 🦜\"" } ] },
  { "order": 15, "title": "Linked List Cycle II", "desc": "Finding where the cycle starts.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Hashing addresses makes finding the entry point trivial! 🦜\"" } ] },
  { "order": 16, "title": "Intersection of Two Arrays", "desc": "Finding common seeds.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Put one array in a Set, check the other! 🦜\"" } ] },
  { "order": 17, "title": "Isomorphic Strings", "desc": "Mapping one structure to another.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"A maps to B, B must only map to A! 🦜\"" } ] },
  { "order": 18, "title": "Hand of Straights", "desc": "Organizing cards with Maps.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Sorted Maps keep the smallest card ready! 🦜\"" } ] },
  { "order": 19, "title": "Hashing for Palindromes", "desc": "Frequency counts for symmetry.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"At most one char can have an odd count! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Hashing 2)", "desc": "Algorithmic Efficiency Mastery.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"HASHING STAGE 2 COMPLETE! You are now an optimization specialist. 🦜\"" } ] }
];

module.exports = stage2;
