const stage2 = [
  {
    "order": 1,
    "title": "The Infinite Chain (LCS Deep Dive)",
    "desc": "Mastering the Longest Common Subsequence logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Welcome to Stage 2! We're diving deeper into the strings with LCS. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"LCS is used in DNA sequencing and version control (like Git diff). 🦜\"",
        "codeSnippet": "if (s1[i-1] == s2[j-1]) dp[i][j] = 1 + dp[i-1][j-1];"
      },
      { "type": "multiple_choice", "questionText": "Complexity of LCS?", "options": ["O(M*N)", "O(M+N)"], "correctAnswer": "O(M*N)" },
      { "type": "programming_board", "questionText": "Base value for empty strings.", "codeSnippet": "dp[0][j] = dp[i][0] = ___ ;", "correctAnswer": "0" }
    ]
  },
  {
    "order": 2,
    "title": "Symmetry Songs (LPS)",
    "desc": "Longest Palindromic Subsequence.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Find the longest palindromic song! 🦜\"" },
      { "type": "multiple_choice", "questionText": "LPS of 'CHARACTER'?", "options": ["5 (CARAC)", "7", "3"], "correctAnswer": "5 (CARAC)" }
    ]
  },
  {
    "order": 3,
    "title": "Distinct Paths (Unique Subsequences)",
    "desc": "Counting how many ways S can form T.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Count the unique patterns! 🦜\"" },
      { "type": "programming_board", "questionText": "DP relation for match.", "codeSnippet": "dp[i][j] = dp[i-1][j-1] ___ dp[i-1][j];", "correctAnswer": "+" }
    ]
  },
  {
    "order": 4,
    "title": "Typo Correction (Edit Distance)",
    "desc": "Insert, Delete, Replace.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The ultimate spellchecker! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Min ops 'kitten' to 'sitting'?", "options": ["3", "5", "2"], "correctAnswer": "3" }
    ]
  },
  {
    "order": 5,
    "title": "Wildcard Wonders",
    "desc": "Pattern matching with * and ?.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Wildcards are the stars of string matching! 🦜\"" },
      { "type": "multiple_choice", "questionText": "What does '*' match?", "options": ["Zero or more chars", "Exactly one char", "Numbers only"], "correctAnswer": "Zero or more chars" }
    ]
  },
  {
    "order": 6,
    "title": "Stock Market I (Buy/Sell Once)",
    "desc": "Maximizing profit with one transaction.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Buy low, sell high! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Max profit of [7,1,5,3,6,4]?", "options": ["5 (6-1)", "6", "4"], "correctAnswer": "5 (6-1)" }
    ]
  },
  {
    "order": 7,
    "title": "Stock Market II (Unlimited Trades)",
    "desc": "Buying and selling as many times as you want.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Every peak is a profit! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity of Greedy approach?", "options": ["O(N)", "O(log N)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 8,
    "title": "Stock Market III (Two Trades)",
    "desc": "Limited to exactly two transactions.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Two flights to wealth! 🦜\"" },
      { "type": "programming_board", "questionText": "State variable in stock DP.", "codeSnippet": "dp[i][___][buy_state];", "correctAnswer": "transactions" }
    ]
  },
  {
    "order": 9,
    "title": "Stock Market IV (K Trades)",
    "desc": "The general case for K transactions.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"K is the limit! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity with K trades?", "options": ["O(N*K)", "O(N^K)", "O(N)"], "correctAnswer": "O(N*K)" }
    ]
  },
  {
    "order": 10,
    "title": "Cooling Down (Stocks with Cooldown)",
    "desc": "Buying after a mandatory one-day rest.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Take a breath after selling! 🦜\"" },
      { "type": "programming_board", "questionText": "Cooldown skip index.", "codeSnippet": "if (sell) return solve(i + ___);", "correctAnswer": "2" }
    ]
  },
  {
    "order": 11,
    "title": "Transaction Fees (Stocks with Fee)",
    "desc": "Profit minus the taxman's cut.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Taxing the flight! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Where to subtract fee?", "options": ["On every sell", "On every buy", "Either"], "correctAnswer": "Either" }
    ]
  },
  {
    "order": 12,
    "title": "Subset Sum Sensation",
    "desc": "Finding if a subset reaches exactly K.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Exact change only! 🦜\"" },
      { "type": "programming_board", "questionText": "Boolean DP table size.", "codeSnippet": "bool dp[n+1][___+1];", "correctAnswer": "target" }
    ]
  },
  {
    "order": 13,
    "title": "Partition Equal Subset",
    "desc": "Splitting the loot into two equal piles.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Perfectly balanced! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Prerequisite condition?", "options": ["Sum must be even", "Array must be sorted", "N > 10"], "correctAnswer": "Sum must be even" }
    ]
  },
  {
    "order": 14,
    "title": "Target Sum Signage",
    "desc": "Adding + and - to reach target.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Positive or Negative? 🦜\"" },
      { "type": "multiple_choice", "questionText": "Equivalent to partitioning into two subsets with fixed difference?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 15,
    "title": "Counting Subsets (with Sum K)",
    "desc": "Not just 'if', but 'how many'.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The count grows! 🦜\"" },
      { "type": "programming_board", "questionText": "Operator for counting.", "codeSnippet": "dp[i][j] = dp[i-1][j] ___ dp[i-1][j-num];", "correctAnswer": "+" }
    ]
  },
  {
    "order": 16,
    "title": "0/1 Knapsack Master",
    "desc": "Solving the full 0/1 problem.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Max value, zero overhead! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Can we solve in O(W) space?", "options": ["Yes (Reverse loop)", "No", "Only if W < N"], "correctAnswer": "Yes (Reverse loop)" }
    ]
  },
  {
    "order": 17,
    "title": "The Unbounded Vault",
    "desc": "Items can be taken infinitely.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Infinite seeds! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Difference from 0/1?", "options": ["Inner loop goes forward", "No difference", "O(N) space"], "correctAnswer": "Inner loop goes forward" }
    ]
  },
  {
    "order": 18,
    "title": "Rod Cutting Rewards",
    "desc": "Maximizing profit by cutting rods.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Woodcutting optimization! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Type of DP?", "options": ["Unbounded Knapsack", "0/1 Knapsack", "Kadane's"], "correctAnswer": "Unbounded Knapsack" }
    ]
  },
  {
    "order": 19,
    "title": "Combination Sum IV",
    "desc": "Permutations that sum to target.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Order matters here! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is {1, 2} different from {2, 1}?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 20,
    "title": "Elite Review (Stage 2)",
    "desc": "Closing the intermediate DP chapter.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"INTERMEDIATE MASTERY REACHED! 🦜\"" },
      { "type": "multiple_choice", "questionText": "What's tougher than strings?", "options": ["Trees & Graphs with DP", "Simple Arrays", "Nothing"], "correctAnswer": "Trees & Graphs with DP" }
    ]
  }
];

module.exports = stage2;
