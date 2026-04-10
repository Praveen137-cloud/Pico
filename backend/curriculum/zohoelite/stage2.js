const stage2 = [
  {
    "order": 1,
    "title": "Sorted & Rotated Search",
    "desc": "Finding a bird in a shifted flock.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stage 2! Zoho loves binary search variations. Even if the array is rotated, you can find the target in O(log N)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trick: One half (left or right) will ALWAYS be sorted. Check which one, then decide where to fly! 🦜\"",
        "codeSnippet": "if (nums[mid] >= nums[low]) {\n  if (target >= nums[low] && target < nums[mid]) high = mid - 1;\n  else low = mid + 1;\n}"
      },
      { "type": "multiple_choice", "questionText": "Complexity of searching in a rotated sorted array?", "options": ["O(log N)", "O(N)", "O(N log N)"], "correctAnswer": "O(log N)" }
    ]
  },
  {
    "order": 2,
    "title": "String Permutations",
    "desc": "Arranging characters in every way possible.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"ABC, ACB, BAC... How many ways? For length N, it's N! factorial! 🦜\"" },
      { "type": "programming_board", "questionText": "Number of permutations for 'ZOHO'.", "codeSnippet": "4! = ___ ;", "correctAnswer": "24" }
    ]
  },
  {
    "order": 3,
    "title": "Dutch National Flag",
    "desc": "Sorting 0s, 1s, and 2s in one pass.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use three pointers: low, mid, and high. mid walks through the array and swaps birds to their rightful zones! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Best time complexity?", "options": ["O(N)", "O(N log N)", "O(N^2)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 4,
    "title": "Spiral Matrix",
    "desc": "Visiting the map in a spiral path.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Top, Right, Bottom, Left. Keep boundaries and shrink them as you go! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Boundaries needed?", "options": ["top, bottom, left, right", "x, y", "row, col"], "correctAnswer": "top, bottom, left, right" }
    ]
  },
  {
    "order": 5,
    "title": "Detecting Linked List Loops",
    "desc": "Is the bird flying in circles?",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Floyd's Cycle-Finding Algorithm! A slow bird and a fast bird. If they meet, there's a loop! 🦜\"" },
      { "type": "programming_board", "questionText": "Fast pointer move step.", "codeSnippet": "fast = fast->next->___ ;", "correctAnswer": "next" }
    ]
  },
  {
    "order": 6,
    "title": "Longest Palindromic Substring",
    "desc": "Finding the longest mirror song.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Expand from the center! Every character (and the gap between characters) can be a center. 🦜\"" },
      { "type": "multiple_choice", "questionText": "How many centers are there in a string of length N?", "options": ["2N - 1", "N", "N^2"], "correctAnswer": "2N - 1" }
    ]
  },
  {
    "order": 7,
    "title": "Next Greater Element",
    "desc": "Finding the first taller bird to the right.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use a Stack! If the current bird is taller than the bird on the stack, it's their 'Next Greater'! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity with Stack?", "options": ["O(N)", "O(N^2)", "O(N log N)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 8,
    "title": "Anagram Check",
    "desc": "Are the two songs just shuffled versions?",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Two strings are anagrams if they have the same character counts. 🦜\"" },
      { "type": "programming_board", "questionText": "Structure to track counts efficiently.", "codeSnippet": "int count[___];", "correctAnswer": "256" }
    ]
  },
  {
    "order": 9,
    "title": "Maximum Sum Subarray",
    "desc": "Finding the heart of the flock (Kadane).",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Kadane's Algorithm! Keep adding to your sum, but if the sum resets to negative, start fresh at 0. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity?", "options": ["O(N)", "O(N^2)", "O(log N)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 10,
    "title": "Product Array Except Self",
    "desc": "Multiplying birds without division.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Compute prefix products and suffix products. The answer is prefix[i-1] * suffix[i+1]! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Can you do it in O(N) time?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  { "order": 11, "title": "Sort Stack", "desc": "Sorting a stack using recursion.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"No loops allowed! Just recursion. 🦜\"" } ] },
  { "order": 12, "title": "Merge 2 Sorted Lists", "desc": "Zipping Linked Lists.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Compare nodes and point the next pointer. 🦜\"" } ] },
  { "order": 13, "title": "Stock Buy Sell II", "desc": "Maximize profit from prices.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Add every positive price difference. 🦜\"" } ] },
  { "order": 14, "title": "Sum of Two Numbers in LL", "desc": "Linked list math with carry.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Don't forget the carry from the last addition! 🦜\"" } ] },
  { "order": 15, "title": "Minimum Platforms", "desc": "Zoho repeat: Train scheduling.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Sort and use two pointers. 🦜\"" } ] },
  { "order": 16, "title": "String to Integer (Atoi)", "desc": "Converting manual birds.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Handle signs and overflows. 🦜\"" } ] },
  { "order": 17, "title": "Count Palindromic Substrings", "desc": "Expanding centers counts.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Every time you find a palindrome, increment the count! 🦜\"" } ] },
  { "order": 18, "title": "Container with Most Water", "desc": "Two pointer boundary closing.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Move the shorter boundary inward. 🦜\"" } ] },
  { "order": 19, "title": "Reverse K Group (LL)", "desc": "Hard Linked List rotation.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Reverse segments of length K. 🦜\"" } ] },
  { "order": 20, "title": "Zoho Milestone 2", "desc": "Intermediate Interviews Mastery.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"ZOHO ELITE STAGE 2 COMPLETE! You are now a coding round specialist. 🦜\"" } ] }
];

module.exports = stage2;
