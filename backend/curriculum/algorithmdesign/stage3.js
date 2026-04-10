const stage3 = [
  {
    "order": 1,
    "title": "Matrix Exponentiation (Fast Power)",
    "desc": "Using recursion/D&C to compute N-th Fibonacci in O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The speed of light! Standard DP takes O(N), but with Matrix Exponentiation and D&C, we can find the N-th Fibonacci number in O(log N)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Exponents can be halved! [[1,1],[1,0]]^n can be found using the same logic as pow(a, n). 🦜\"",
        "codeSnippet": "Matrix power(Matrix A, int p) {\n  if (p == 1) return A;\n  if (p % 2 == 0) {\n    Matrix half = power(A, p/2);\n    return multiply(half, half);\n  }\n  return multiply(A, power(A, p-1));\n}"
      },
      { "type": "multiple_choice", "questionText": "Complexity of Matrix Exponentiation for Fib(N)?", "options": ["O(log N)", "O(N)", "O(N^2)"], "correctAnswer": "O(log N)" }
    ]
  },
  {
    "order": 2,
    "title": "Counting Inversions (Merge Sort)",
    "desc": "Measuring how close an array is to being sorted.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Count how many pairs (i, j) have i < j but arr[i] > arr[j]. Use Merge Sort to count while merging! 🦜\"" },
      { "type": "programming_board", "questionText": "Inversion count logic in merge.", "codeSnippet": "if (left[i] > right[j]) count += (mid - i + ___);", "correctAnswer": "1" }
    ]
  },
  {
    "order": 3,
    "title": "Interval Partitioning",
    "desc": "Scheduling meetings in minimum rooms.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"A greedy bird always puts the next meeting into a room that becomes empty first! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Sorting criterion?", "options": ["Start time", "Finish time", "Duration"], "correctAnswer": "Start time" }
    ]
  },
  {
    "order": 4,
    "title": "Exchange Argument (Theory)",
    "desc": "Proving Greedy algorithms are correct.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If swapping any two items in your greedy solution makes it worse, then your solution must be the best! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Used for which strategy proof?", "options": ["Greedy", "D&C", "DP"], "correctAnswer": "Greedy" }
    ]
  },
  {
    "order": 5,
    "title": "Randomized QuickSort",
    "desc": "Avoiding the O(N^2) trap.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Avoid the malicious birds! Picking a random pivot ensures O(N log N) on average for any input. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Expected time complexity?", "options": ["O(N log N)", "O(N^2)", "O(log N)"], "correctAnswer": "O(N log N)" }
    ]
  },
  {
    "order": 6,
    "title": "Median of Two Sorted Arrays",
    "desc": "Hard D&C on arrays.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Binary search across two sorted lists! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Optimal complexity?", "options": ["O(log(min(N, M)))", "O(N+M)", "O(log N + log M)"], "correctAnswer": "O(log(min(N, M)))" }
    ]
  },
  {
    "order": 7,
    "title": "Approximation Algorithms",
    "desc": "Getting 'close enough' for hard problems.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Some problems take a thousand years to solve. Greedy can give us a '2-approximate' answer in seconds! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Example problem?", "options": ["Bin Packing", "Sorted Search", "Sum of array"], "correctAnswer": "Bin Packing" }
    ]
  },
  {
    "order": 8,
    "title": "The Master Theorem Deep-Dive",
    "desc": "Solving recurrence relations.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Case 1, Case 2, Case 3. Match your formula to the bird speed! 🦜\"" },
      { "type": "programming_board", "questionText": "Identify the 'divide' factor in T(n) = 2T(n/2) + n.", "codeSnippet": "b = ___ ;", "correctAnswer": "2" }
    ]
  },
  {
    "order": 9,
    "title": "Greedy for Load Balancing",
    "desc": "Distributing tasks to birds.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Always assign the next job to the bird with the LEAST work right now. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is this 100% optimal?", "options": ["Greedy is 2-approximate for Load Balancing", "Yes, always optimal"], "correctAnswer": "Greedy is 2-approximate for Load Balancing" }
    ]
  },
  {
    "order": 10,
    "title": "Algorithm Tradeoffs",
    "desc": "Designing for reality.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"One algorithm uses more memory but is faster. One is simple but slow. YOU must choose for the forest! 🦜\"" },
      { "type": "multiple_choice", "questionText": "What matters most for 1 billion items?", "options": ["Time complexity", "Code readability", "Font size"], "correctAnswer": "Time complexity" }
    ]
  },
  { "order": 11, "title": "The Majority Element (Boyer-Moore)", "desc": "Greedy-like counting in O(N).", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Let birds fight! The last one standing is the candidate. 🦜\"" } ] },
  { "order": 12, "title": "Min Deletions for Frequency", "desc": "Greedy frequency pruning.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"No two birds can have the same frequency! 🦜\"" } ] },
  { "order": 13, "title": "Merge K Sorted Lists", "desc": "D&C vs Heap approach.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Merge two by two, or use a priority queue! 🦜\"" } ] },
  { "order": 14, "title": "K-th Element in 2D Array", "desc": "Hard D&C on Matrix.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Sorted in rows and columns. 🦜\"" } ] },
  { "order": 15, "title": "Weighted Interval Scheduling", "desc": "Where Greedy fails and DP begins.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"When jobs have values, you can't just be greedy! 🦜\"" } ] },
  { "order": 16, "title": "Greedy for TSP (Wait!)", "desc": "A warning on the Traveling Salesman.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Nearest neighbor isn't always best. 🦜\"" } ] },
  { "order": 17, "title": "Building the Best Flight", "desc": "Case study in design.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Designing a system for live updates. 🦜\"" } ] },
  { "order": 18, "title": "Complexity Classes (P vs NP)", "desc": "The boundary of design.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Can we solve it efficiently? 🦜\"" } ] },
  { "order": 19, "title": "The Future of Algorithms", "desc": "Machine Learning and Beyond.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Learned heuristics for the forest! 🦜\"" } ] },
  { "order": 20, "title": "Grand Graduation (Algorithm Design)", "desc": "Design Master Graduation.", lessons: [
      { "type": "teaching", "questionText": "🦜 Pico: \"CONGRATULATIONS! You can now design any flight in the world. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Best Design strategy?", "options": ["The one that fits the problem constraints", "Always DP", "Always Greedy"], "correctAnswer": "The one that fits the problem constraints" }
    ]
  }
];

module.exports = stage3;
