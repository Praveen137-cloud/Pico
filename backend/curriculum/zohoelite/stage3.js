const stage3 = [
  {
    "order": 1,
    "title": "Largest Number",
    "desc": "Arranging birds to form the biggest signal.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "Welcome to the Elite Stage 3! Zoho's advanced rounds require deep logical thinking. To form the largest number from a list of strings, don't just sort them. Compare the combined results! 🦜"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For '3' and '30', compare '330' vs '303'. Since '330' is bigger, '3' comes first! 🦜\"",
        "codeSnippet": "sort(nums.begin(), nums.end(), [](string a, string b) {\n    return a + b > b + a;\n});"
      },
      { "type": "multiple_choice", "questionText": "If result is '000', what should you return?", "options": ["'0'", "'000'", "Empty string"], "correctAnswer": "'0'" }
    ]
  },
  {
    "order": 2,
    "title": "The Rat in a Maze",
    "desc": "Finding a way out of the forest grid.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Backtracking! Try every path (Up, Down, Left, Right). If you hit a wall, fly back and try another way! 🦜\"" },
      { "type": "multiple_choice", "questionText": "How to prevent infinite loops in the maze?", "options": ["Mark visited cells", "Only move right", "Fly over walls"], "correctAnswer": "Mark visited cells" }
    ]
  },
  {
    "order": 3,
    "title": "N-Queens",
    "desc": "Peacefully placing queen birds in a grid.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Place a queen, then check if she's safe from others in the same row, column, and diagonals! 🦜\"" },
      { "type": "programming_board", "questionText": "Number of solutions for 4x4 N-Queens.", "codeSnippet": "Solutions = ___ ;", "correctAnswer": "2" }
    ]
  },
  {
    "order": 4,
    "title": "Sudoku Solver",
    "desc": "Filling the grid with numbers 1-9.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"This is the ultimate backtracking test! Check row, column, AND the 3x3 subgrid. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is Sudoku solving NP-complete for N*N grids?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 5,
    "title": "Flattening Linked Lists",
    "desc": "Turning a multilevel forest into a single path.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Every node has a 'right' and a 'down' pointer. Merge them into one sorted list! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Best strategy?", "options": ["Recursively merge two lists at a time", "Flatten then sort", "Ignore down pointers"], "correctAnswer": "Recursively merge two lists at a time" }
    ]
  },
  {
    "order": 6,
    "title": "LRU Cache Revisited",
    "desc": "The Zoho Advanced Round classic.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"You must implement `get` and `put` in O(1). 🦜\"" },
      { "type": "multiple_choice", "questionText": "Combining which two structures?", "options": ["Doubly Linked List + HashMap", "Queue + Stack", "Array + Set"], "correctAnswer": "Doubly Linked List + HashMap" }
    ]
  },
  {
    "order": 7,
    "title": "Longest Substring (K Unique)",
    "desc": "Sliding window with character limits.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Maintain a window. If the count of unique birds exceeds K, shrink it from the left! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity?", "options": ["O(N)", "O(N^2)", "O(log N)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 8,
    "title": "Wildcard Matching",
    "desc": "Matching songs with '?' and '*'.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"'?' matches any single note. '*' matches any sequence of notes! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Best approach for efficiency?", "options": ["Dynamic Programming", "Greedy", "Sorting"], "correctAnswer": "Dynamic Programming" }
    ]
  },
  {
    "order": 9,
    "title": "Median in a Stream",
    "desc": "Finding the middle bird as new ones arrive.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use TWO HEAPS! A max-heap for the smaller birds and a min-heap for the larger birds. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Where is the median stored?", "options": ["At the top of the heaps", "At the bottom", "In an array"], "correctAnswer": "At the top of the heaps" }
    ]
  },
  {
    "order": 10,
    "title": "Zoho Final Graduation",
    "desc": "You are now a Zoho Elite Candidate.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"CONGRATULATIONS! You have completed the Zoho Elite track. You are ready for any interview challenge! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Final Zoho Tip?", "options": ["Clarify requirements first!", "Code as fast as possible", "Never use comments"], "correctAnswer": "Clarify requirements first!" }
    ]
  },
  { "order": 11, "title": "Lexicographical Permutations", "desc": "Generating songs in dictionary order.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"A specific way to shuffle the birds! 🦜\"" } ] },
  { "order": 12, "title": "Word Search II", "desc": "Matrix search with a Trie.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Searching for many words at once! 🦜\"" } ] },
  { "order": 13, "title": "Clone a Linked List", "desc": "List with random pointers.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Interweaving nodes is the key trick! 🦜\"" } ] },
  { "order": 14, "title": "Trapping Rain Water", "desc": "Calculating storage for bird baths.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Min(leftMax, rightMax) - height! 🦜\"" } ] },
  { "order": 15, "title": "Regular Expression Matching", "desc": "Advanced '.' and '*' logic.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Handling the empty case for '*'! 🦜\"" } ] },
  { "order": 16, "title": "Alien Dictionary", "desc": "Topological sort for bird language.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Build a graph of character precedence. 🦜\"" } ] },
  { "order": 17, "title": "Edit Distance", "desc": "Min changes to match songs.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Insert, Delete, or Replace. 🦜\"" } ] },
  { "order": 18, "title": "Sliding Window Maximum", "desc": "Monotonic Queue beauty.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Finding the loudest bird in every window. 🦜\"" } ] },
  { "order": 19, "title": "Top K Frequent Elements", "desc": "Using a Min-Heap of size K.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Filter out the quietest birds! 🦜\"" } ] },
  { "order": 20, "title": "Grand Elite Graduation", "desc": "The Master of Zoho Elite.", lessons: [
      { "type": "teaching", "questionText": "🦜 Pico: \"YOU HAVE REACHED THE END! MISSION 940 ACCOMPLISHED! 🦜\"" },
      { "type": "multiple_choice", "questionText": "What did you learn?", "options": ["Problem solving and logic", "How to fly", "Bird seeds"], "correctAnswer": "Problem solving and logic" }
    ]
  }
];

module.exports = stage3;
