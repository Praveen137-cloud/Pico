const stage2 = [
  {
    "order": 1,
    "title": "The Power Set (Subsets)",
    "desc": "Generating every possible combination.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Power Set! For a list of N seeds, there are 2^N possible subsets you can pick! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The 'Pick or Not Pick' trick is your best wingman. For each item, decide: do I take it or leave it? 🦜\"",
        "codeSnippet": "void generate(int i, vector<int>& current) {\n  if(i == n) { print(current); return; }\n  // Pick\n  current.push(nums[i]);\n  generate(i + 1, current);\n  // Not Pick (Backtrack)\n  current.pop_back();\n  generate(i + 1, current);\n}"
      },
      { "type": "multiple_choice", "questionText": "Total subsets for array of size 3?", "options": ["8", "6", "3"], "correctAnswer": "8" }
    ]
  },
  {
    "order": 2,
    "title": "Subsequences with Sum K",
    "desc": "Finding specific subsets.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sometimes we only want subsets that sum to exactly K! 🦜\"" },
      { "type": "programming_board", "questionText": "Base case condition for sum check.", "codeSnippet": "if (idx == n) return (currentSum == ___);", "correctAnswer": "k" }
    ]
  },
  {
    "order": 3,
    "title": "Permutation Parade",
    "desc": "Arranging items in all possible orders.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Permutations! Order matters. Move the seeds around to find every sequence. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Number of permutations for N distinct items?", "options": ["N!", "2^N", "N^2"], "correctAnswer": "N!" }
    ]
  },
  {
    "order": 4,
    "title": "Swapping Secrets",
    "desc": "The in-place permutation method.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Swap the current item with every item after it, recurse, then SWAP BACK! 🦜\"", "codeSnippet": "for(int j=i; j<n; j++) {\n  swap(s[i], s[j]);\n  permute(s, i+1);\n  swap(s[i], s[j]); // The Backtrack\n}" },
      { "type": "multiple_choice", "questionText": "Why do we swap back?", "options": ["To restore the state for the next branch", "To save memory", "Because parrots like swapping"], "correctAnswer": "To restore the state for the next branch" }
    ]
  },
  {
    "order": 5,
    "title": "Tree Traversals (Recursive)",
    "desc": "Visiting nodes in specific orders.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Recursion and Trees are best friends. Pre-order is: Root, Left, Right! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Which order visits leaves before roots?", "options": ["Post-order", "Pre-order", "Level-order"], "correctAnswer": "Post-order" }
    ]
  },
  {
    "order": 6,
    "title": "Height of the Canopy",
    "desc": "Recursive tree height calculation.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Height = 1 + max(LeftHeight, RightHeight). Simple and elegant! 🦜\"" },
      { "type": "programming_board", "questionText": "Base case for height of null node.", "codeSnippet": "if (node == NULL) return ___ ;", "correctAnswer": "0" }
    ]
  },
  {
    "order": 7,
    "title": "The Diameter Problem",
    "desc": "Longest path between any two nodes.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The diameter might not pass through the root! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity of optimized O(N) diameter?", "options": ["O(N)", "O(N^2)", "O(log N)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 8,
    "title": "Combination Sum",
    "desc": "Subsets with repetition allowed.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"You can pick the same seed multiple times! Don't move to index `i+1` immediately. 🦜\"" },
      { "type": "programming_board", "questionText": "Stay at same index if picking.", "codeSnippet": "solve(i, target - nums[i]); // Notice no ___", "correctAnswer": "i+1" }
    ]
  },
  {
    "order": 9,
    "title": "Phone Number Codes",
    "desc": "Mapping digits to letters.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Classic LeetCode! 2 maps to 'abc', 3 to 'def'. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Total combinations for '23'?", "options": ["9 (3*3)", "6", "2"], "correctAnswer": "9 (3*3)" }
    ]
  },
  {
    "order": 10,
    "title": "Tower of Hanoi",
    "desc": "The ultimate recursive puzzle.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Move N rings from A to C using B. 🦜\""},
      { "type": "multiple_choice", "questionText": "Min moves for 3 rings?", "options": ["7 (2^N - 1)", "3", "5"], "correctAnswer": "7 (2^N - 1)" }
    ]
  },
  { "order": 11, "title": "Inverting a Tree", "desc": "Mirror mirror on the wall.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Swap left and right children! 🦜\"" } ] },
  { "order": 12, "title": "Check BST", "desc": "Validating binary search trees.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Left < Root < Right. 🦜\"" } ] },
  { "order": 13, "title": "Generate Parentheses", "desc": "Valid () combinations.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"`open < n` and `close < open`! 🦜\"" } ] },
  { "order": 14, "title": "Subset II (Duplicates)", "desc": "Avoiding duplicate subsets.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Sort first, then skip duplicates! 🦜\"" } ] },
  { "order": 15, "title": "Permutations II", "desc": "Handling duplicate items.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Use a map or sort to stay unique! 🦜\"" } ] },
  { "order": 16, "title": "Lowest Common Ancestor", "desc": "Finding the shared branch.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Where did the paths diverge? 🦜\"" } ] },
  { "order": 17, "title": "Word Search I", "desc": "Finding words in a grid.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"DFS in 4 directions! 🦜\"" } ] },
  { "order": 18, "title": "Combination Sum II", "desc": "Each number used once.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"The 'skip' logic for sorted duplicates. 🦜\"" } ] },
  { "order": 19, "title": "Restore IP Addresses", "desc": "Splitting strings into valid IPs.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"4 parts, each <= 255. 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Recursion 2)", "desc": "Advanced Patterns Mastery.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"INTERMEDIATE RECURSION COMPLETE! You are ready for the Backtracking Hall. 🦜\"" } ] }
];

module.exports = stage2;
