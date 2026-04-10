const stage3 = [
  {
    "order": 1,
    "title": "Suffix Automaton (SAM)",
    "desc": "The ultimate string structure.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "Welcome to the Grand finale of Data Structures! Suffix Automaton is the ultimate bird song analyzer. It's a DFA that recognizes all suffixes of a string in O(N)! 🦜"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It has O(N) states and O(N) transitions. Much smaller than a Suffix Tree but just as powerful! 🦜\"",
        "codeSnippet": "struct State {\n  int len, link;\n  map<char, int> next;\n};"
      },
      { "type": "multiple_choice", "questionText": "Time to build Suffix Automaton?", "options": ["O(N)", "O(N log N)", "O(N^2)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 2,
    "title": "Heavy-Light Decomposition",
    "desc": "Querying and updating tree paths.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"HLD splits the tree into 'Heavy' paths. A path from root to leaf only crosses O(log N) paths! 🦜\"" },
      { "type": "multiple_choice", "questionText": "HLD combines with which structure commonly?", "options": ["Segment Tree", "Queue", "HashMap"], "correctAnswer": "Segment Tree" }
    ]
  },
  {
    "order": 3,
    "title": "Centroid Decomposition",
    "desc": "Tree Divide & Conquer.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Find the bird that, if removed, splits the forest into pieces no larger than 50% of the original! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity of Centroid Tree height?", "options": ["O(log N)", "O(N)", "O(sqrt N)"], "correctAnswer": "O(log N)" }
    ]
  },
  {
    "order": 4,
    "title": "Link-Cut Tree (LCT)",
    "desc": "Managing a dynamic forest.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"LCT lets you add and remove edges in a forest in O(log N). Used for dynamic connectivity! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Underlying structure for LCT?", "options": ["Splay Trees", "Heaps", "Segment Trees"], "correctAnswer": "Splay Trees" }
    ]
  },
  {
    "order": 5,
    "title": "K-D Trees",
    "desc": "Organizing birds in multidimensional space.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Split the space by X, then Y, then X... Find the nearest bird in any dimension! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Used for which problem?", "options": ["Nearest Neighbor Search", "Sorting", "Encryption"], "correctAnswer": "Nearest Neighbor Search" }
    ]
  },
  {
    "order": 6,
    "title": "Quad Trees",
    "desc": "Spatial partitioning for 2D grids.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If a quadrant has too many birds, split it into 4 smaller squares! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Used in which industry?", "options": ["Gaming / Collision Detection", "Medicine", "Banking"], "correctAnswer": "Gaming / Collision Detection" }
    ]
  },
  {
    "order": 7,
    "title": "CDQ Divide and Conquer",
    "desc": "Solving 3D queries offline.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sort by X, D&C by Y, and use a Fenwick Tree for Z. The ultimate dimensional reduction! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity?", "options": ["O(N log^2 N)", "O(N^3)", "O(N)"], "correctAnswer": "O(N log^2 N)" }
    ]
  },
  {
    "order": 8,
    "title": "Persistent Treaps",
    "desc": "Undo/Redo on tree structures.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Combining Treap randomization with persistence. You can return to any version of your flock! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Are they functional?", "options": ["Yes (Immutability)", "No"], "correctAnswer": "Yes (Immutability)" }
    ]
  },
  {
    "order": 9,
    "title": "Suffix Automaton Pattern",
    "desc": "Finding occurrences in O(N).",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Run your pattern through the SAM. If you hit a dead end, the pattern isn't in the song! 🦜\"" },
      { "type": "programming_board", "questionText": "State to track number of occurrences.", "codeSnippet": "state.cnt ___ ;", "correctAnswer": "++" }
    ]
  },
  {
    "order": 10,
    "title": "Design a File System",
    "desc": "Putting it all together.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"How would you store millions of bird files? B-Trees, Tries, or Hashing? 🦜\"" },
      { "type": "multiple_choice", "questionText": "Standard Data Structure for DB indexing?", "options": ["B+ Tree", "Array", "Stack"], "correctAnswer": "B+ Tree" }
    ]
  },
  { "order": 11, "title": "Ukkonen's Algorithm", "desc": "On-line Suffix Tree construction.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Building the string tree character by character. 🦜\"" } ] },
  { "order": 12, "title": "LCT Link/Cut logic", "desc": "Connecting and severing paths.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Path access, link, and cut! 🦜\"" } ] },
  { "order": 13, "title": "HLD Path Query", "desc": "Summing values on a path.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Jump through heavy chains until you reach LCA. 🦜\"" } ] },
  { "order": 14, "title": "Mo's on Trees", "desc": "Tree queries using Euler Tour.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Flattening the tree to use Mo's algorithm. 🦜\"" } ] },
  { "order": 15, "title": "Dancing Links (DLX)", "desc": "Solving exact cover problems.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Sudoku and Pentominoes solved efficiently! 🦜\"" } ] },
  { "order": 16, "title": "Fenwick Tree (Non-Invertible)", "desc": "Using BIT for Max/Min.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Trickier than sum, but possible! 🦜\"" } ] },
  { "order": 17, "title": "Wavelet Tree (Intro)", "desc": "Range queries on various values.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Querying how many items in [L, R] are less than X. 🦜\"" } ] },
  { "order": 18, "title": "Bloom Filters", "desc": "Probabilistic membership.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Maybe it's in the flock, or definitely NOT! 🦜\"" } ] },
  { "order": 19, "title": "Cache Oblivious Algorithms", "desc": "Designing for hardware.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Structures that work at any cache level. 🦜\"" } ] },
  { "order": 20, "title": "Final DS Graduation", "desc": "Great Master of Structures.", lessons: [
      { "type": "teaching", "questionText": "🦜 Pico: \"CONGRATULATIONS! You have mastered every branch of the Data Structure Forest! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Most important DS?", "options": ["The one that solves the task best", "Binary Tree", "Array"], "correctAnswer": "The one that solves the task best" }
    ]
  }
];

module.exports = stage3;
