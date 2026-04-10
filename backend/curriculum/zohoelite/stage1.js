const stage1 = [
  {
    "order": 1,
    "title": "Welcome to Zoho Elite",
    "desc": "Foundations for the Zoho Interview process.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Welcome to Zoho Elite! This subject is specifically designed to help you crush the Zoho Coding Rounds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Zoho loves questions about string patterns, array rotations, and logical puzzles. Let's start with a classic: Array Rotation! 🦜\"",
        "codeSnippet": "Input: [1, 2, 3, 4, 5], k=2\nOutput: [3, 4, 5, 1, 2]"
      },
      { "type": "multiple_choice", "questionText": "Best way to rotate an array by K without extra space?", "options": ["Reverse three times", "Use a temp array", "Shift one by one"], "correctAnswer": "Reverse three times" }
    ]
  },
  {
    "order": 2,
    "title": "Pattern Printing (X-Shape)",
    "desc": "A favorite Zoho logic test.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Print 'PROGRAM' in an X shape! 🦜\"" },
      { "type": "programming_board", "questionText": "Condition for printing character at (i, j).", "codeSnippet": "if (i == j || i+j == ___ )", "correctAnswer": "n-1" }
    ]
  },
  {
    "order": 3,
    "title": "Sorting by Frequency",
    "desc": "Arranging birds by their song count.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sort an array based on how many times each element appears! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Which structure helps count frequencies?", "options": ["HashMap", "Stack", "Linked List"], "correctAnswer": "HashMap" }
    ]
  },
  {
    "order": 4,
    "title": "Matrix Rotation (90 Deg)",
    "desc": "Turning the forest map sideways.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"To rotate 90 degrees: 1. Transpose the matrix, 2. Reverse each row! 🦜\"" },
      { "type": "programming_board", "questionText": "Action for transpose.", "codeSnippet": "swap(matrix[i][j], matrix[j][i]) where j ___ i;", "correctAnswer": ">" }
    ]
  },
  {
    "order": 5,
    "title": "Balanced Parentheses",
    "desc": "Ensuring every nest has a door.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use a Stack! If you see '(', push it. If you see ')', pop it and check! 🦜\"" },
      { "type": "multiple_choice", "questionText": "What if the stack is NOT empty at the end?", "options": ["String is Unbalanced", "String is Balanced", "Stack is full"], "correctAnswer": "String is Unbalanced" }
    ]
  },
  {
    "order": 6,
    "title": "Reverse Words in String",
    "desc": "Changing the sequence of words.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"'I Love Zoho' -> 'Zoho Love I'. 🦜\"" },
      { "type": "multiple_choice", "questionText": "How to handle multiple spaces?", "options": ["Split by whitespace and trim", "Ignore them", "Delete the string"], "correctAnswer": "Split by whitespace and trim" }
    ]
  },
  {
    "order": 7,
    "title": "Number to Word Conversion",
    "desc": "Converting 123 to 'One Hundred Twenty Three'.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Break the number into hundreds, tens, and units! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Difficulty of this Zoho question?", "options": ["Intermediate (Implementation heavy)", "Easy", "Impossible"], "correctAnswer": "Intermediate (Implementation heavy)" }
    ]
  },
  {
    "order": 8,
    "title": "Merge Overlapping Intervals",
    "desc": "Joining meeting times.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sort by start time. If the current meeting starts before the last one ends, merge them! 🦜\"" },
      { "type": "programming_board", "questionText": "Merge condition.", "codeSnippet": "if (current.start <= last.___ )", "correctAnswer": "end" }
    ]
  },
  {
    "order": 9,
    "title": "Look and Say Sequence",
    "desc": "1, 11, 21, 1211, 111221...",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Read the digits of the previous number aloud! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Next number after 21?", "options": ["1211", "22", "1112"], "correctAnswer": "1211" }
    ]
  },
  {
    "order": 10,
    "title": "Remove Duplicates from Sorted",
    "desc": "In-place array pruning.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use two pointers. One moves through the array, the other marks the next unique spot! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity?", "options": ["O(N)", "O(N log N)", "O(1)"], "correctAnswer": "O(N)" }
    ]
  },
  { "order": 11, "title": "Check if Power of 4", "desc": "Math and Bit trick.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Check power of 2 AND check bit position. 🦜\"" } ] },
  { "order": 12, "title": "Pascal's Triangle", "desc": "Generating the binomial flock.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Sum of two birds above gives the birth of the bird below! 🦜\"" } ] },
  { "order": 13, "title": "Move Block Zeroes", "desc": "Pushing zeroes to the end of array.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"In-place movement only! 🦜\"" } ] },
  { "order": 14, "title": "Intersection of Lists", "desc": "Finding the shared branch of two lists.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Length difference skip technique. 🦜\"" } ] },
  { "order": 15, "title": "Wave Array", "desc": "a1 >= a2 <= a3 >= a4...", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Sort and swap neighbors! 🦜\"" } ] },
  { "order": 16, "title": "Count Possible Triangles", "desc": "Math check on sides.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"a + b > c must hold! 🦜\"" } ] },
  { "order": 17, "title": "First Non-Repeating Char", "desc": "String indexing.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Use a frequency array of size 256. 🦜\"" } ] },
  { "order": 18, "title": "Roman to Integer", "desc": "Parsing ancient bird numbers.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Subtract if smaller is before larger! 🦜\"" } ] },
  { "order": 19, "title": "Maximum Product Subarray", "desc": "Handling negative birds.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Keep track of min product too! 🦜\"" } ] },
  { "order": 20, "title": "Zoho Milestone 1", "desc": "Foundational Interviews Mastery.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"ZOHO ELITE STAGE 1 COMPLETE! You are ready for the basic round. 🦜\"" } ] }
];

module.exports = stage1;
