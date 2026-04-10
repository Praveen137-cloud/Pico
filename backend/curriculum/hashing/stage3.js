const stage3 = [
  {
    "order": 1,
    "title": "The Memory Shelf (LRU Cache)",
    "desc": "Designing a cache that forgets the least used bird.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The LRU Cache! A map helps us find items, but we need a Double Linked List to track which bird was fed most recently! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Design: `unordered_map<int, list<int>::iterator>`. O(1) for both `get` and `put`. 🦜\"",
        "codeSnippet": "void put(int key, int value) {\n  if (m.find(key) != m.end()) {\n    li.erase(m[key]);\n  }\n  li.push_front(key);\n  m[key] = li.begin();\n}"
      },
      { "type": "multiple_choice", "questionText": "Why use a Double Linked List in LRU?", "options": ["To remove and move nodes in O(1)", "To sort the keys", "To save memory"], "correctAnswer": "To remove and move nodes in O(1)" }
    ]
  },
  {
    "order": 2,
    "title": "LFU Logic (Least Frequently Used)",
    "desc": "Forgetting the birds who rarely visit.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"LFU is harder! We track counts AND usage order. 🦜\"" },
      { "type": "multiple_choice", "questionText": "How many maps usually help in LFU?", "options": ["2 (KeyToVal, FreqToKeys)", "1", "3"], "correctAnswer": "2 (KeyToVal, FreqToKeys)" }
    ]
  },
  {
    "order": 3,
    "title": "The Rabin-Karp Riddle",
    "desc": "String matching using rolling hashes.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Rabin-Karp! Turn the string into a number. If the numbers match, the strings MIGHT match! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity compared to Naive?", "options": ["O(N+M) Average", "O(N*M)", "O(1)"], "correctAnswer": "O(N+M) Average" }
    ]
  },
  {
    "order": 4,
    "title": "Rolling Hash Rhythm",
    "desc": "Efficiently updating hashes as we slide.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"To move the window, subtract the old leading char and add the new trailing one. Constant time magic! 🦜\"", "codeSnippet": "hash = (hash - old_val * base) * base + new_val;" },
      { "type": "programming_board", "questionText": "Hash function base (prime) for lowercase strings.", "codeSnippet": "const int BASE = ___ ;", "correctAnswer": "31" }
    ]
  },
  {
    "order": 5,
    "title": "Divisible Subarrays",
    "desc": "Counting subarrays with sum % K == 0.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If PrefixSum % K repeats, the sum in between is divisible by K! 🦜\"" },
      { "type": "multiple_choice", "questionText": "How to handle negative remainders?", "options": ["(rem + K) % K", "abs(rem)", "Ignore them"], "correctAnswer": "(rem + K) % K" }
    ]
  },
  {
    "order": 6,
    "title": "Subarrays with K Different",
    "desc": "Hard sliding window + hashing.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Count subarrays with exactly K unique birds. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Solved by doing `AtMost(K) - AtMost(K-1)`?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 7,
    "title": "Longest Duplicate Substring",
    "desc": "Binary Search + Rabin-Karp.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Find the longest repeated sequence! Check length L with hashing. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Worst case complexity?", "options": ["O(N log N)", "O(N^2)", "O(log N)"], "correctAnswer": "O(N log N)" }
    ]
  },
  {
    "order": 8,
    "title": "Distributed Hashing Intro",
    "desc": "How load balancers pick nests.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Consistent Hashing! Adding a new node only affects few keys. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Used in which system?", "options": ["Databases / CDNs", "Single compilers", "Bird feeders"], "correctAnswer": "Databases / CDNs" }
    ]
  },
  {
    "order": 9,
    "title": "Security: Hash Denial",
    "desc": "Protecting the forest from malicious keys.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If an attacker knows your hash, they can cause N-collisions and crash your O(1) speed! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Prevention method?", "options": ["Randomized Hashing (SipHash)", "Buying more RAM", "Hiding the code"], "correctAnswer": "Randomized Hashing (SipHash)" }
    ]
  },
  {
    "order": 10,
    "title": "Designing a HashMap",
    "desc": "Building the bucket system.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Buckets, Nodes, and Resize logic. 🦜\"" },
      { "type": "programming_board", "questionText": "Array of what type usually starts a HashMap?", "codeSnippet": "Node* buckets = ___ Node*[size];", "correctAnswer": "new" }
    ]
  },
  { "order": 11, "title": "4 Sum Problem", "desc": "Hashing to find 4 numbers.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Map pairs to their sums! 🦜\"" } ] },
  { "order": 12, "title": "Grid Illumination", "desc": "Hashing rows, cols, and diagonals.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Lights in the grid forest! 🦜\"" } ] },
  { "order": 13, "title": "Subdomain Visit Count", "desc": "Domain mapping.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"google.mail.com is three domains! 🦜\"" } ] },
  { "order": 14, "title": "Points on a Line", "desc": "Hashing slopes.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Find the most birds on a single branch! 🦜\"" } ] },
  { "order": 15, "title": "Word Ladder II", "desc": "Tracing the path.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"BFS with Hashing to store parent paths. 🦜\"" } ] },
  { "order": 16, "title": "Brick Wall Gap", "desc": "Finding the best place to slice.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Map the edges between bricks. 🦜\"" } ] },
  { "order": 17, "title": "Random Pick with Weight", "desc": "Cumulative sums + Binary Search.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Picking birds based on popularity. 🦜\"" } ] },
  { "order": 18, "title": "Smallest Window Substring", "desc": "Hard Sliding Window.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"The ultimate string-set challenge! 🦜\"" } ] },
  { "order": 19, "title": "HashMap Concurrency", "desc": "Thread-safety in the forest.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Locks vs Lock-free segments. 🦜\"" } ] },
  { "order": 20, "title": "Master of Keys (Hashing Graduation)", "desc": "Total Hash & Set Graduation.", "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"CONGRATULATIONS! You have mastered the Keys of the Forest! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Best lookup speed?", "options": ["O(1)", "O(Infinity)"], "correctAnswer": "O(1)" }
    ]
  }
];

module.exports = stage3;
