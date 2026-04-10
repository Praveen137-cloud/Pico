const stage3 = [
  {
    "order": 1,
    "title": "The Glass Factory (MCM)",
    "desc": "Matrix Chain Multiplication foundations.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Welcome to the Elite Hall! Matrix Chain Multiplication is about picking the best order for multiple operations. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cost of (A*B)*C vs A*(B*C). The structure is `min(solve(i, k) + solve(k+1, j) + (i_row * mid_col * j_col))`. 🦜\"",
        "codeSnippet": "for(int k=i; k<j; k++) {\n  int temp = solve(i, k) + solve(k+1, j) + p[i-1]*p[k]*p[j];\n  ans = min(ans, temp);\n}"
      },
      { "type": "multiple_choice", "questionText": "Complexity of standard MCM?", "options": ["O(N^3)", "O(N^2)", "O(N!)"], "correctAnswer": "O(N^3)" },
      { "type": "match_following", "questionText": "Match MCM logic!", "pairs": [ { "key": "k-loop", "value": "Split point" }, { "key": "i, j", "value": "Range bounds" }, { "key": "Base", "value": "i == j (cost 0)" } ] }
    ]
  },
  {
    "order": 2,
    "title": "Shattering Records (Burst Balloons)",
    "desc": "A complex MCM variant.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Burst balloons to max the points! It's MCM backwards. 🦜\"" },
      { "type": "multiple_choice", "questionText": "If balloon 'k' is burst last, what is its value?", "options": ["nums[i-1] * nums[k] * nums[j+1]", "nums[k]", "0"], "correctAnswer": "nums[i-1] * nums[k] * nums[j+1]" }
    ]
  },
  {
    "order": 3,
    "title": "Palindromic Partitioning",
    "desc": "Min cuts to make all pieces palindromes.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Slice the song into palindromes! 🦜\"" },
      { "type": "programming_board", "questionText": "Optimization: Pre-calculate palindromes.", "codeSnippet": "isPalindrome[i][j] = (s[i]==s[j] && isPalindrome[___][___]);", "correctAnswer": "i+1,j-1" }
    ]
  },
  {
    "order": 4,
    "title": "DP on Trees I (The Canopy)",
    "desc": "Solving subproblems on a hierarchical structure.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"DP in the Tree! We return values from leaves to root. 🦜\"" },
      { "type": "multiple_choice", "questionText": "How many states per node usually?", "options": ["Fixed (e.g., 2)", "O(N)", "O(H)"], "correctAnswer": "Fixed (e.g., 2)" }
    ]
  },
  {
    "order": 5,
    "title": "The Grand Theft Bird (House Robber III)",
    "desc": "Robbing houses in a tree (no adjacent nodes).",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Don't rob adjacent nests! 🦜\"" },
      { "type": "programming_board", "questionText": "Two states: [Robbed, Not Robbed].", "codeSnippet": "return {node->val + left[1] + right[1], ___ };", "correctAnswer": "max(left[0],left[1]) + max(right[0],right[1])" }
    ]
  },
  {
    "order": 6,
    "title": "Max Path Sum (Tree)",
    "desc": "Longest path of seed-values in a tree.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The leaf-to-leaf trail! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Can a path sum be negative?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 7,
    "title": "Digit DP Intro (Counting Numbers)",
    "desc": "Counting numbers with certain properties.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"How many birds have odd nest-numbers? 🦜\"" },
      { "type": "programming_board", "questionText": "State variables: [index, tight_constraint, ___].", "codeSnippet": "solve(idx, tight, ___);", "correctAnswer": "sum" }
    ]
  },
  {
    "order": 8,
    "title": "Bitmasking Pro (Assignment Problem)",
    "desc": "Assigning N birds to N tasks optimally.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The ultimate schedule! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Max N for DP + Bitmask?", "options": ["~20", "~100", "~1000"], "correctAnswer": "~20" }
    ]
  },
  {
    "order": 9,
    "title": "TSP (Traveling Sales-Bird)",
    "desc": "The classic DP + Bitmask challenge.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Visit every nest once and return! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity of TSP with DP?", "options": ["O(N^2 * 2^N)", "O(N!)", "O(N^3)"], "correctAnswer": "O(N^2 * 2^N)" }
    ]
  },
  {
    "order": 10,
    "title": "Frog Jump (Unpredictable Distances)",
    "desc": "Checking if a destination is reachable.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Jump lengths depend on the last jump! 🦜\"" },
      { "type": "multiple_choice", "questionText": "State needed?", "options": ["(position, last_k)", "position", "last_k"], "correctAnswer": "(position, last_k)" }
    ]
  },
  {
    "order": 11,
    "title": "Interleaving Advanced",
    "desc": "Complex weaving with DP optimization.",
    "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Interleaving strings like feathers! 🦜\"" } ]
  },
  {
    "order": 12,
    "title": "Longest Increasing Path (Matrix)",
    "desc": "DP + DFS in a 2D matrix.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Always going UP! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Do we need a 'visited' array for LIP?", "options": ["No (Increasing property prevents cycles)", "Yes"], "correctAnswer": "No (Increasing property prevents cycles)" }
    ]
  },
  {
    "order": 13,
    "title": "Cherry Pickup (Two-Bird Path)",
    "desc": "Two birds traveling simultaneously.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Double the flight, double the fruits! 🦜\"" },
      { "type": "programming_board", "questionText": "State: (r1, c1, r2, c2). Optimization: r1+c1 == r2+c2.", "codeSnippet": "solve(r1, c1, ___);", "correctAnswer": "r2" }
    ]
  },
  {
    "order": 14,
    "title": "Regular Expression Matching",
    "desc": "Implementing '.' and '*' matching.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Matching precisely! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is it O(M*N)?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 15,
    "title": "Smallest Sufficient Team",
    "desc": "Hard Bitmask DP challenge.",
    "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Picking the elite squad! 🦜\"" } ]
  },
  {
    "order": 16,
    "title": "Optimization: Monotonic Queue",
    "desc": "Using sliding window max/min for DP.",
    "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Fast window lookups! 🦜\"" } ]
  },
  {
    "order": 17,
    "title": "Space Optimization (Pro Level)",
    "desc": "Converting 2D DP to 1D Row-Reuse.",
    "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Winning with less memory! 🦜\"" } ]
  },
  {
    "order": 18,
    "title": "State Compression (Advanced)",
    "desc": "Representing complex states in few bits.",
    "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Compressing the flight path! 🦜\"" } ]
  },
  {
    "order": 19,
    "title": "The Final Riddle (DP)",
    "desc": "The hardest challenge in the DP hall.",
    "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"The ultimate cache-miss solver! 🦜\"" } ]
  },
  {
     "order": 20,
     "title": "Master of Memory (DP Graduation)",
     "desc": "Total Dynamic Programming Graduation.",
     "lessons": [
       { "type": "teaching", "questionText": "🦜 Pico: \"CONGRATULATIONS! You are now a Dragon-Master of DP! 🦜\"" },
       { "type": "multiple_choice", "questionText": "Final verdict on DP?", "options": ["It's just smart recursion!", "It's magic.", "0"], "correctAnswer": "It's just smart recursion!" }
     ]
  }
];

module.exports = stage3;
