const stage2 = [
  {
    "order": 1,
    "title": "Lazy Propagation (Segment Trees)",
    "desc": "Updating whole ranges without visiting every leaf.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stage 2! Sometimes you need to update a whole branch of the forest. Don't do it all at once—be LAZY! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Lazy propagation stores the pending update until a query actually needs it. This keeps range updates at O(log N)! 🦜\"",
        "codeSnippet": "void updateRange(int node, int start, int end, int l, int r, int val) {\n  if (lazy[node] != 0) {\n    tree[node] += (end - start + 1) * lazy[node];\n    if (start != end) {\n      lazy[2*node] += lazy[node];\n      lazy[2*node+1] += lazy[node];\n    }\n    lazy[node] = 0;\n  }\n}"
      },
      { "type": "multiple_choice", "questionText": "Complexity of Range Update with Lazy Propagation?", "options": ["O(log N)", "O(N)", "O(log^2 N)"], "correctAnswer": "O(log N)" }
    ]
  },
  {
    "order": 2,
    "title": "Lowest Common Ancestor (Binary Lifting)",
    "desc": "Finding the shared branch of two birds in O(log N).",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Binary Lifting lets you jump up the tree in powers of 2 (1, 2, 4, 8...). 🦜\"" },
      { "type": "multiple_choice", "questionText": "Precomputation time for Binary Lifting?", "options": ["O(N log N)", "O(N)", "O(log N)"], "correctAnswer": "O(N log N)" }
    ]
  },
  {
    "order": 3,
    "title": "Binary Lifting Jumps",
    "desc": "Technique to find LCA efficiently.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"First, bring birds to the same level. Then jump up together as high as possible without passing the LCA! 🦜\"", "codeSnippet": "for (int i=MAXLOG-1; i>=0; i--) {\n  if (up[u][i] != up[v][i]) {\n    u = up[u][i]; v = up[v][i];\n  }\n}" },
      { "type": "multiple_choice", "questionText": "Query complexity for LCA after precalc?", "options": ["O(log N)", "O(1)", "O(N)"], "correctAnswer": "O(log N)" }
    ]
  },
  {
    "order": 4,
    "title": "XOR Max (The Bit Trie)",
    "desc": "Finding the number that gives max XOR with X.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Bit Tries! Store numbers bit by bit (0 or 1). To maximize XOR, always try to fly down the OPPOSITE bit! 🦜\"" },
      { "type": "programming_board", "questionText": "If current bit is 1, preferred next bit for max XOR?", "codeSnippet": "Preferred bit = ___ ;", "correctAnswer": "0" }
    ]
  },
  {
    "order": 5,
    "title": "Suffix Arrays (Intro)",
    "desc": "Sorting all suffixes of a bird song.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Suffix arrays are sorted lists of every suffix in a string. Great for pattern searching! 🦜\"" },
      { "type": "multiple_choice", "questionText": "O(N log N) build possible?", "options": ["Yes", "Only for small strings", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 6,
    "title": "Persistent Segment Trees",
    "desc": "Data structures that remember the past.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Want to query the forest state at version #5? Persistent trees create new nodes only for the changed branches! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Space complexity per update?", "options": ["O(log N)", "O(N)", "O(1)"], "correctAnswer": "O(log N)" }
    ]
  },
  {
    "order": 7,
    "title": "Treaps (Tree + Heaps)",
    "desc": "Randomized self-balancing search trees.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Each node has a Key (BST property) and a Priority (Heap property). Priority is random! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Operation to keep Treap balanced?", "options": ["Split and Merge", "Rotations", "Sorting"], "correctAnswer": "Split and Merge" }
    ]
  },
  {
    "order": 8,
    "title": "Count Range Sum",
    "desc": "Using DS for range counting.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"How many subarrays have sum between [Lower, Upper]? Use a Segment Tree or Fenwick Tree on prefix sums! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is O(N log N) possible?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 9,
    "title": "K-th Smallest in Range",
    "desc": "Advanced query with Persistent Segment Trees.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"By comparing versions of the tree, we can find the K-th smallest element in any range [L, R]! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Query complexity?", "options": ["O(log N)", "O(N)", "O(sqrt N)"], "correctAnswer": "O(log N)" }
    ]
  },
  {
    "order": 10,
    "title": "Euler Tour of Tree",
    "desc": "Flattening trees into arrays.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Visit nodes and record their entry and exit times. Now a subtree is just a contiguous segment in an array! 🦜\"" },
      { "type": "programming_board", "questionText": "Condition for subtree check.", "codeSnippet": "if (entry[target] >= entry[u] && exit[target] ___ exit[u])", "correctAnswer": "<=" }
    ]
  },
  { "order": 11, "title": "Fenwick Tree 2D", "desc": "Sub-matrix sum in O(log N * log M).", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Trees within trees! 🦜\"" } ] },
  { "order": 12, "title": "Dynamic Segment Tree", "desc": "Building nodes as needed.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Only create nodes where data exists. 🦜\"" } ] },
  { "order": 13, "title": "Splay Trees (Conceptual)", "desc": "Self-balancing by access frequency.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Recently used nodes move to the top! 🦜\"" } ] },
  { "order": 14, "title": "LCP Array", "desc": "Longest Common Prefix in Suffix Array.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Comparing neighbor suffixes. 🦜\"" } ] },
  { "order": 15, "title": "Pattern Search (Suffix Array)", "desc": "Finding substrings in O(m log n).", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Binary search in the suffix array! 🦜\"" } ] },
  { "order": 16, "title": "Implicit Treaps", "desc": "Maintaining sequences with splits.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Treaps without BST keys—use indices! 🦜\"" } ] },
  { "order": 17, "title": "Mo's Algorithm (Intro)", "desc": "O((N+Q)sqrt N) offline queries.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"The Square Root Decomposition magic! 🦜\"" } ] },
  { "order": 18, "title": "Heavy-Light Decomposition", "desc": "Splitting tree into heavy paths.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Tree queries become Segment Tree queries! 🦜\"" } ] },
  { "order": 19, "title": "Segment Tree vs Fenwick Tree", "desc": "Choosing your tool.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Fenwick is sleeker, Segment is more versatile. 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Advanced DS 2)", "desc": "Dynamic Structure Mastery.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"ADVANCED DS STAGE 2 COMPLETE! You are now a master of dynamic ranges. 🦜\"" } ] }
];

module.exports = stage2;
