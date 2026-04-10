const stage2 = [
  {
    "order": 1,
    "title": "QuickSelect (The Scout)",
    "desc": "Finding the Kth smallest seed without fully sorting.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stage 2! Sometimes you don't need to sort the whole list. You just need to find the K-th bird! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"QuickSelect is like QuickSort but we only recurse into ONE half. 🦜\"",
        "codeSnippet": "int quickSelect(int left, int right, int k) {\n  int pivot = partition(left, right);\n  if (pivot == k) return nums[pivot];\n  if (pivot > k) return quickSelect(left, pivot - 1, k);\n  return quickSelect(pivot + 1, right, k);\n}"
      },
      { "type": "multiple_choice", "questionText": "Average time complexity of QuickSelect?", "options": ["O(N)", "O(N log N)", "O(log N)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 2,
    "title": "Median of Medians",
    "desc": "Ensuring a good pivot every time.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"To guarantee O(N) even in the worst case, we use the Median of Medians as our pivot. 🦜\"" },
      { "type": "multiple_choice", "questionText": "What group size is standard for Medians of Medians?", "options": ["5", "3", "10"], "correctAnswer": "5" }
    ]
  },
  {
    "order": 3,
    "title": "Closest Pair (D&C)",
    "desc": "Finding the two nearest birds in a 2D plane.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Split the forest in half, find min distance in both. Then check the 'strip' in the middle! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity of D&C Closest Pair?", "options": ["O(N log N)", "O(N^2)", "O(N)"], "correctAnswer": "O(N log N)" }
    ]
  },
  {
    "order": 4,
    "title": "Dijkstra's Greedy Path",
    "desc": "Finding the shortest weight path in a graph.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"At every step, pick the UNVISITED node that was closest to the start. Very greedy! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Can Dijkstra handle negative edge weights?", "options": ["No", "Yes", "Only if tree"], "correctAnswer": "No" }
    ]
  },
  {
    "order": 5,
    "title": "Prim's MST",
    "desc": "Growing a tree from a seed.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Start with one bird. Always add the cheapest edge connecting to a bird NOT yet in the flock. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Prim's is similar to which algorithm?", "options": ["Dijkstra's", "BFS", "Kruskal's"], "correctAnswer": "Dijkstra's" }
    ]
  },
  {
    "order": 6,
    "title": "Kruskal's MST",
    "desc": "Merging components greedily.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sort ALL edges by weight. Pick the cheapest one, as long as it doesn't create a loop! 🦜\"" },
      { "type": "programming_board", "questionText": "Data structure used to check for cycles in Kruskal's.", "codeSnippet": "___ (Disjoint Set Union);", "correctAnswer": "DSU" }
    ]
  },
  {
    "order": 7,
    "title": "Greedy Choice Property",
    "desc": "Understanding why Greedy works.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"A problem has this property if a local optimum is part of the global optimum! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Property needed for Greedy to be correct?", "options": ["Greedy Choice Property", "Sorting property", "N/A"], "correctAnswer": "Greedy Choice Property" }
    ]
  },
  {
    "order": 8,
    "title": "Min Number of Platforms",
    "desc": "Determining train/bird capacity.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sort arrival and departure times. Track how many birds are in the station at once. 🦜\"" },
      { "type": "programming_board", "questionText": "Logic when arrival <= departure.", "codeSnippet": "needed_platforms ___ ;", "correctAnswer": "++" }
    ]
  },
  {
    "order": 9,
    "title": "Huffman Strategy",
    "desc": "Building the greedy code tree.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Combine the two nodes with the LOWEST frequency. They'll end up deepest in the tree! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is Huffman Coding optimal for prefix-free codes?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 10,
    "title": "Meeting Room Optimization",
    "desc": "Finding the min rooms for N meetings.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sort by start time. Use a min-heap to track when rooms become free! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity if using a min-heap?", "options": ["O(N log N)", "O(N)", "O(N^2)"], "correctAnswer": "O(N log N)" }
    ]
  },
  { "order": 11, "title": "Large Number Multiplication", "desc": "Karatsuba Algorithm (D&C).", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Multiplying numbers faster than the school method! 🦜\"" } ] },
  { "order": 12, "title": "The Skyline Problem", "desc": "Merging city horizons using D&C.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Merge two skylines like merging two arrays! 🦜\"" } ] },
  { "order": 13, "title": "Buy/Sell Stocks (Greedy Max)", "desc": "Unlimited transactions greedy logic.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Add every increase to profit! 🦜\"" } ] },
  { "order": 14, "title": "Gas Station Problem", "desc": "Circular tour greedy check.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Can you fly around the island? 🦜\"" } ] },
  { "order": 15, "title": "Greedy Candy Distribution", "desc": "Giving candy based on ratings.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Compare with neighbors recursively or with two greedy passes. 🦜\"" } ] },
  { "order": 16, "title": "Wildcard Matching (Greedy)", "desc": "Fast matching when possible.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Match the star if you can! 🦜\"" } ] },
  { "order": 17, "title": "Police-Thief Optimization", "desc": "Greedy matching for max catch.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Map police and thieves to sorted queues. 🦜\"" } ] },
  { "order": 18, "title": "Inversion Count", "desc": "Using Merge Sort to count 'misplaced' birds.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"During merge, if left > right, then several inversions exist! 🦜\"" } ] },
  { "order": 19, "title": "Strassen's Multiplication", "desc": "Advanced D&C for Matrices.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Fewer multiplications, more additions! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Strategy 2)", "desc": "Intermediate Design Mastery.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"INTERMEDIATE STRATEGY COMPLETE! You are now an optimization expert. 🦜\"" } ] }
];

module.exports = stage2;
