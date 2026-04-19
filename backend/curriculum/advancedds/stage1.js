const stage1 = [
  {
    "order": 1,
    "title": "The Prefix Tower (Tries)",
    "desc": "Storing strings for lightning-fast word lookups.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tries! Instead of storing words separately, we store them as paths on a tree. If words share a prefix, they share the same branch! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Each node has a map or array of 26 children (for A-Z) and a boolean `isEnd` to mark completed words. 🦜\"",
        "codeSnippet": "struct Node {\n  Node* children[26];\n  bool isEnd = false;\n};"
      },
      { "type": "multiple_choice", "questionText": "Time complexity to search word of length L in a Trie?", "options": ["O(L)", "O(log N)", "O(26^L)"], "correctAnswer": "O(L)" }
    ]
  },
  {
    "order": 2,
    "title": "Union-Find (DSU)",
    "desc": "Grouping birds and checking connections.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"DSU helps you manage disjoint groups. The `union` operation merges groups, and `find` tells you who the leader is! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Optimizations for DSU?", "options": ["Path Compression & Union by Rank", "Binary Search", "Sorting"], "correctAnswer": "Path Compression & Union by Rank" }
    ]
  },
  {
    "order": 3,
    "title": "Path Compression",
    "desc": "Flattening the DSU tree.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"In `find(i)`, make every bird point directly to the chief! This makes future lookups almost O(1). 🦜\"", "codeSnippet": "int find(int i) {\n  if (parent[i] == i) return i;\n  return parent[i] = find(parent[i]);\n}" },
      { "type": "multiple_choice", "questionText": "What does path compression optimize?", "options": ["Find operation", "Memory space", "Initial setup"], "correctAnswer": "Find operation" }
    ]
  },
  {
    "order": 4,
    "title": "Fenwick Tree (BIT)",
    "desc": "Solving prefix sums with updates.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Fenwick Trees let you update numbers AND query sums in O(log N). Much better than O(N) arrays! 🦜\""},
      { "type": "programming_board", "questionText": "Bitwise trick to find parent in BIT.", "codeSnippet": "i = i - (i & ___ );", "correctAnswer": "-i" }
    ]
  },
  {
    "order": 5,
    "title": "Segment Tree Basics",
    "desc": "Range queries on steroids.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Segment trees store info about ranges in a binary tree. Perfect for Range Minimum Queries! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity to build a segment tree?", "options": ["O(N)", "O(N log N)", "O(log N)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 6,
    "title": "AVL Trees (Self-Balancing)",
    "desc": "Keeping the tree height under control.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If a tree gets too lean on one side, AVL rotates it back to balance. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Maximum allowed balance factor?", "options": ["1", "0", "2"], "correctAnswer": "1" }
    ]
  },
  {
    "order": 7,
    "title": "Sparse Table",
    "desc": "Precomputing range results in O(1) query time.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If the data doesn't change, Sparse Table is the fastest way to find min/max in a range! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity of Sparse Table query?", "options": ["O(1)", "O(log N)", "O(N)"], "correctAnswer": "O(1)" }
    ]
  },
  {
    "order": 8,
    "title": "Heaps (Priority Queue)",
    "desc": "The most important bird first.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Heaps always keep the max (or min) at the top! 🦜\"" },
      { "type": "programming_board", "questionText": "Index of left child of i (1-based).", "codeSnippet": "left = ___ ;", "correctAnswer": "2*i" }
    ]
  },
  {
    "order": 9,
    "title": "Trie Auto-complete",
    "desc": "Suggesting words based on prefix.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Fly down the Trie to the prefix node, then DFS to find all children! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is Trie faster than Hashing for prefix search?", "options": ["Yes", "No", "Only for birds"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 10,
    "title": "Graph Cycle Detection (DSU)",
    "desc": "Detecting loops in undirected graphs.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If two birds in the same group try to connect, it's a CYCLE! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Does this work for Directed Graphs?", "options": ["No (Use DFS)", "Yes", "Only for cycles of 3"], "correctAnswer": "No (Use DFS)" }
    ]
  },
  { "order": 11, "title": "Fenwick Range Update", "desc": "Advanced BIT operations.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Difference arrays meet BIT! 🦜\"" } ] },
  { "order": 12, "title": "Range Sum Query (Segment Tree)", "desc": "Querying sums in O(log N).", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Check if range is fully inside, partially inside, or outside! 🦜\"" } ] },
  { "order": 13, "title": "Tree Height Balancing", "desc": "Right-Right and Left-Left rotations.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Spinning the branches! 🦜\"" } ] },
  { "order": 14, "title": "Priority Queue with Heaps", "desc": "Push and Pop logic.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Heapify up and Heapify down. 🦜\"" } ] },
  { "order": 15, "title": "Longest Word with Prefix", "desc": "Trie search variations.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Find words made only of other prefixes. 🦜\"" } ] },
  { "order": 16, "title": "DSU Union by Size", "desc": "Merging the smaller flock into the larger.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Keep the tree shallow! 🦜\"" } ] },
  { "order": 17, "title": "Segment Tree Point Update", "desc": "Modifying single elements.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Update the leaf and propagate up! 🦜\"" } ] },
  { "order": 18, "title": "Binary Lifting Intro", "desc": "Jumping through tree heights.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Precomputing ancestors for fast jumps. 🦜\"" } ] },
  { "order": 19, "title": "String Sort (Trie)", "desc": "Sorting strings implicitly.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"A Trie traversal gives sorted order! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Advanced DS 1)", "desc": "Structure Mastery.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"ADVANCED DS STAGE 1 COMPLETE! Your nest is more complex than ever. 🦜\"" } ] }
];

module.exports = stage1;
