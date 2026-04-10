const stage1 = [
  {
    "order": 1,
    "title": "Divide and Conquer (D&C)",
    "desc": "Splitting the flight into manageable hops.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Divide and Conquer! If a problem is too big, split it, solve the small pieces, and COMBINE them! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The three steps: 1. Divide (split), 2. Conquer (recurse), 3. Combine (merge). 🦜\"",
        "codeSnippet": "void solve(int n) {\n  if(n < threshold) bruteForce(n);\n  else {\n    divide(n);\n    solve(left); solve(right);\n    combine(left, right);\n  }\n}"
      },
      { "type": "multiple_choice", "questionText": "Which sorting algorithm is a classic D&C example?", "options": ["Merge Sort", "Bubble Sort", "Insertion Sort"], "correctAnswer": "Merge Sort" }
    ]
  },
  {
    "order": 2,
    "title": "Merge Sort (The Combiner)",
    "desc": "Sorting by merging sorted halves.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Merge Sort splits the array until every piece has size 1, then merges them back in order! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Time complexity of Merge Sort?", "options": ["O(N log N)", "O(N^2)", "O(N)"], "correctAnswer": "O(N log N)" }
    ]
  },
  {
    "order": 3,
    "title": "Quick Sort (The Pivot)",
    "desc": "Sorting by partitioning around a pivot.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Quick Sort picks a 'Pivot' bird. All smaller birds to the left, larger to the right! 🦜\"" },
      { "type": "programming_board", "questionText": "Standard partitioning logic name.", "codeSnippet": "___ Partition Scheme;", "correctAnswer": "Lomuto" }
    ]
  },
  {
    "order": 4,
    "title": "Binary Search (D&C Lookup)",
    "desc": "Searching in O(log N).",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Binary search is D&C where we discard half the forest every step! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Prerequisite for Binary Search?", "options": ["Data must be sorted", "Data must be positive", "No duplicates"], "correctAnswer": "Data must be sorted" }
    ]
  },
  {
    "order": 5,
    "title": "Greedy Strategy (Fast Choice)",
    "desc": "Picking the best thing NOW.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Greedy birds take the biggest seed available immediately! No looking back! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Does Greedy always find the global optimum?", "options": ["No", "Yes", "Only for 10 seeds"], "correctAnswer": "No" }
    ]
  },
  {
    "order": 6,
    "title": "Fractional Knapsack (Greedy)",
    "desc": "Picking items by Value/Weight ratio.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"In fractional knapsack, we can take portions of seeds. Sorting by Value/Weight density is the key! 🦜\"" },
      { "type": "programming_board", "questionText": "Sorting criterion for Greedy Knapsack.", "codeSnippet": "Sort by ___ ratio.", "correctAnswer": "value/weight" }
    ]
  },
  {
    "order": 7,
    "title": "Job Sequencing",
    "desc": "Scheduling tasks with deadlines.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Max profit while meeting deadlines! Sort by profit and fill the latest possible slot. 🦜\"" },
      { "type": "multiple_choice", "questionText": "If a job has deadline 3, which slots can it use?", "options": ["1, 2, or 3", "Only 3", "Any slot"], "correctAnswer": "1, 2, or 3" }
    ]
  },
  {
    "order": 8,
    "title": "Egyptian Fractions",
    "desc": "Greedy decomposition of fractions.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Representing fractions as a sum of unit fractions (1/n). 🦜\"" },
      { "type": "multiple_choice", "questionText": "Greedy choice for 6/7?", "options": ["1/2", "1/6", "1/10"], "correctAnswer": "1/2" }
    ]
  },
  {
    "order": 9,
    "title": "Huffman Coding (Entropy)",
    "desc": "Greedy compression logic.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Compress the bird songs! Rare notes get long codes, common notes get short ones. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Data structure used for Huffman?", "options": ["Min-Heap / Priority Queue", "Stack", "HashMap"], "correctAnswer": "Min-Heap / Priority Queue" }
    ]
  },
  {
    "order": 10,
    "title": "Activity Selection",
    "desc": "Doing the most jobs in one day.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Always pick the job that FINISHES first! 🦜\"" },
      { "type": "programming_board", "questionText": "Sorting criterion.", "codeSnippet": "Sort by ___ time.", "correctAnswer": "finish" }
    ]
  },
  { "order": 11, "title": "Merge Sort Merge Step", "desc": "The engine of Merge Sort.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Two pointers walking through sorted halves. 🦜\"" } ] },
  { "order": 12, "title": "Quick Sort Partition", "desc": "The engine of Quick Sort.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"The 'i' pointer marks the end of the smaller section. 🦜\"" } ] },
  { "order": 13, "title": "Master Theorem (Complexity)", "desc": "Reading the recursive speed.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"T(n) = aT(n/b) + f(n). 🦜\"" } ] },
  { "order": 14, "title": "Min/Max in Array (D&C)", "desc": "Solving without a linear scan.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Divide the array, find min/max of halves! 🦜\"" } ] },
  { "order": 15, "title": "Coin Change (Greedy Case)", "desc": "When Greedy works for change.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"For standard US denominations, Greedy is optimal! 🦜\"" } ] },
  { "order": 16, "title": "Police & Thieves", "desc": "Max thieves caught with Range K.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Police bird catching thief birds within a distance. 🦜\"" } ] },
  { "order": 17, "title": "Connect Ropes (Min Cost)", "desc": "Huffman-style greedy ropes.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Always combine the two SHORTEST ropes! 🦜\"" } ] },
  { "order": 18, "title": "Greedy Flowers", "desc": "Minimizing cost of buying flowers.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Most expensive flowers first while budget lasts. 🦜\"" } ] },
  { "order": 19, "title": "Survive on Island", "desc": "Greedy food management.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Managing resources! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Strategy 1)", "desc": "Foundational Design Mastery.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"ALGORITHM DESIGN STAGE 1 COMPLETE! You now have the D&C and Greedy wings. 🦜\"" } ] }
];

module.exports = stage1;
