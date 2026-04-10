const stage3 = [
  {
    "order": 1,
    "title": "Queens of the Forest (N-Queens)",
    "desc": "Placing queens such that no two attack each other.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The N-Queens Legend! Can you place N queens on an NxN board so no bird is in the line of fire? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We place one queen per row and check if it's safe (row, col, and diagonals). If not, we backtrack! 🦜\"",
        "codeSnippet": "bool solve(int col) {\n  if(col == n) return true;\n  for(int row=0; row<n; row++) {\n    if(isSafe(row, col)) {\n      board[row][col] = 1;\n      if(solve(col + 1)) return true;\n      board[row][col] = 0; // Backtrack! 🦜\n    }\n  }\n  return false;\n}"
      },
      { "type": "multiple_choice", "questionText": "Complexity of N-Queens?", "options": ["O(N!)", "O(2^N)", "O(N^2)"], "correctAnswer": "O(N!)" },
      { "type": "match_following", "questionText": "Match N-Queens Safety!", "pairs": [ { "key": "Horizontal", "value": "Same row" }, { "key": "Vertical", "value": "Same column" }, { "key": "Diagonal", "value": "math.abs(r1-r2) == math.abs(c1-c2)" } ] }
    ]
  },
  {
    "order": 2,
    "title": "Sudoku Spirit",
    "desc": "Solving the world's favorite grid puzzle.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sudoku is just a 9x9 backtracking search! Try every number 1-9 for every empty nest. 🦜\"" },
      { "type": "multiple_choice", "questionText": "How many checks for Sudoku safety?", "options": ["3 (Row, Col, 3x3 Box)", "2 (Row, Col)", "1 (The bird)"], "correctAnswer": "3 (Row, Col, 3x3 Box)" }
    ]
  },
  {
    "order": 3,
    "title": "Rat in a Maze",
    "desc": "Finding paths with obstacles.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The rat wants the cheese! Use DFS to explore up, down, left, right. 🦜\"" },
      { "type": "programming_board", "questionText": "Constraint to avoid cycles in a maze.", "codeSnippet": "Keep a ___ array.", "correctAnswer": "visited" }
    ]
  },
  {
    "order": 4,
    "title": "Word Search II (Trie + DFS)",
    "desc": "Advanced grid searching for multiple words.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Searching for a whole flock of words? Use a Trie to speed up the backtracking! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Why use a Trie here?", "options": ["To fail fast if no prefix exists", "To save memory", "To sort the grid"], "correctAnswer": "To fail fast if no prefix exists" }
    ]
  },
  {
    "order": 5,
    "title": "Palindrome Partitioning",
    "desc": "Partitioning strings into palindromes.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If the prefix is a palindrome, recurse on the rest. Backtrack if it fails! 🦜\"" },
      { "type": "programming_board", "questionText": "Check for palindrome.", "codeSnippet": "while(start < end) { if(s[start++] ___ s[end--]) return false; }", "correctAnswer": "!=" }
    ]
  },
  {
    "order": 6,
    "title": "Knight's Tour",
    "desc": "Visiting every cell on a chessboard exactly once.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The Knight's crazy hop! 8 possible moves from any nest. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is Knight's Tour always solvable?", "options": ["For N >= 5", "Only for N=8", "No"], "correctAnswer": "For N >= 5" }
    ]
  },
  {
    "order": 7,
    "title": "M-Coloring Problem",
    "desc": "Coloring graph nodes so neighbors differ.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Color the forest! No two adjacent trees can be the same color. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Can every planar graph be colored with 4 colors?", "options": ["Yes (4-Color Theorem)", "No", "Only if small"], "correctAnswer": "Yes (4-Color Theorem)" }
    ]
  },
  {
    "order": 8,
    "title": "Expression Add Operators",
    "desc": "Adding +, -, * to reach target.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Math puzzle! Backtrack through possible signs. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Toughest part for '*'? ", "options": ["Precedence (PEMDAS)", "Multiplying is hard", "N/A"], "correctAnswer": "Precedence (PEMDAS)" }
    ]
  },
  {
    "order": 9,
    "title": "The Hamiltonian Path",
    "desc": "Visiting every node once in a graph.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Visit every nest! It's HP-Hard! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Difference from Eulerian Path?", "options": ["HP visits nodes, EP visits edges", "EP is harder", "None"], "correctAnswer": "HP visits nodes, EP visits edges" }
    ]
  },
  {
    "order": 10,
    "title": "Tug of War",
    "desc": "Dividing seeds into two equal sets with min difference.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The ultimate balance! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity vs Partition Sum?", "options": ["Partition uses DP, Tug of War uses Backtracking usually", "Same", "0"], "correctAnswer": "Partition uses DP, Tug of War uses Backtracking usually" }
    ]
  },
  { "order": 11, "title": "Gray Code Generation", "desc": "Binary sequences with 1-bit difference.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Shifting bits recursively. 🦜\"" } ] },
  { "order": 12, "title": "Solving Cryptarithmetic", "desc": "SEND + MORE = MONEY.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Letters are numbers in disguise! 🦜\"" } ] },
  { "order": 13, "title": "Brute Force vs Pruning", "desc": "The art of efficient search.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Cut the dead branches early! 🦜\"" } ] },
  { "order": 14, "title": "Subsets with Loop vs Recursion", "desc": "Different styles, same result.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"A for-loop can also generate subsets. 🦜\"" } ] },
  { "order": 15, "title": "K-Partitions problem", "desc": "Splitting array into K equal sum subsets.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"A generalization of Partition Sum! 🦜\"" } ] },
  { "order": 16, "title": "Matchstick Squares", "desc": "Forming squares from sticks.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Can you close the square? 🦜\"" } ] },
  { "order": 17, "title": "Unique Paths III", "desc": "Visiting every non-obstacle cell.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"The completionist rat! 🦜\"" } ] },
  { "order": 18, "title": "Backtracking Complexity", "desc": "Why N! is scary.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"N! grows faster than any bird can fly! 🦜\"" } ] },
  { "order": 19, "title": "The Golden Rule of Backtrack", "desc": "Always undo your changes.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Leave the nest exactly as you found it! 🦜\"" } ] },
  { "order": 20, "title": "Master of Dreams (Recursion Graduation)", "desc": "Total Backtracking Mastery.", "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"RECURSION & BACKTRACKING GRADUATION! You can solve any maze in the world. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Final lesson?", "options": ["Recursion is the key to elegance!", "Loops are better"], "correctAnswer": "Recursion is the key to elegance!" }
    ]
  }
];

module.exports = stage3;
