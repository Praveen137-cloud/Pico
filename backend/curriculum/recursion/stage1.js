const stage1 = [
  {
    "order": 1,
    "title": "The Infinite Mirror (Intro)",
    "desc": "Thinking recursively and the base case.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursion! It's like a bird dreaming of a bird dreaming of a bird... it only stops when the dream ends! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A recursive function calls itself with a SMALLER version of the problem. You MUST have a 'Base Case' to stop the recursion. 🦜\"",
        "codeSnippet": "void dream(int depth) {\n  if (depth == 0) return; // Base Case!\n  dream(depth - 1); // Recursive Call\n}"
      },
      { "type": "multiple_choice", "questionText": "What happens without a base case?", "options": ["Stack Overflow", "The bird flies away", "Fastest code ever"], "correctAnswer": "Stack Overflow" }
    ]
  },
  {
    "order": 2,
    "title": "The Call Stack",
    "desc": "Tracking nested calls in memory.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Each time a function is called, it's pushed onto the Stack. When it returns, it's popped off! 🦜\"" },
      { "type": "multiple_choice", "questionText": "If f(3) calls f(2), which is on top of the stack?", "options": ["f(2)", "f(3)", "The OS"], "correctAnswer": "f(2)" }
    ]
  },
  {
    "order": 3,
    "title": "Factorial Flights",
    "desc": "Computing N! recursively.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"To find N!, we find (N-1)! and multiply by N. 🦜\"", "codeSnippet": "int fact(int n) {\n  if(n <= 1) return 1;\n  return n * fact(n-1);\n}" },
      { "type": "programming_board", "questionText": "Base case for 0! and 1!.", "codeSnippet": "if (n <= 1) return ___ ;", "correctAnswer": "1" }
    ]
  },
  {
    "order": 4,
    "title": "Visualizing Trees",
    "desc": "Drawing the recursion tree.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Draw the calls like branches on a tree. One call at the top, many at the bottom! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Number of calls for Fib(4)?", "options": ["9", "4", "2"], "correctAnswer": "9" }
    ]
  },
  {
    "order": 5,
    "title": "Sum of Digits",
    "desc": "Adding up digits in a number.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sum(123) = 3 + Sum(12). Modulo 10 gives the last digit! 🦜\"" },
      { "type": "programming_board", "questionText": "Recursive step for sum of digits.", "codeSnippet": "return (n % 10) ___ sum(n / 10);", "correctAnswer": "+" }
    ]
  },
  {
    "order": 6,
    "title": "Natural Sums",
    "desc": "Summing 1 to N.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Sum(N) = N + Sum(N-1). 🦜\"" },
      { "type": "multiple_choice", "questionText": "Value of Sum(5)?", "options": ["15", "10", "5"], "correctAnswer": "15" }
    ]
  },
  {
    "order": 7,
    "title": "GCD (Euclid's)",
    "desc": "Finding the greatest common divisor.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"GCD(a, b) = GCD(b, a % b). Ancient logic in one line! 🦜\"" },
      { "type": "programming_board", "questionText": "Base case for GCD.", "codeSnippet": "if (b == 0) return ___ ;", "correctAnswer": "a" }
    ]
  },
  {
    "order": 8,
    "title": "Power Play",
    "desc": "Computing a to the power of b.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"pow(a, b) = a * pow(a, b-1). 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity of simple power recursion?", "options": ["O(B)", "O(log B)", "O(A)"], "correctAnswer": "O(B)" }
    ]
  },
  {
    "order": 9,
    "title": "Binary Search (Recursive)",
    "desc": "Finding seeds in sorted lists.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Check middle. If smaller, fly left; if larger, fly right! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity?", "options": ["O(log N)", "O(N)", "O(1)"], "correctAnswer": "O(log N)" }
    ]
  },
  {
    "order": 10,
    "title": "String Reverse",
    "desc": "Flipping strings backwards.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Reverse(S) = S[last] + Reverse(S[0...last-1]). 🦜\"" },
      { "type": "programming_board", "questionText": "String slicing logic.", "codeSnippet": "return reverse(s.substr(1)) ___ s[0];", "correctAnswer": "+" }
    ]
  },
  { "order": 11, "title": "Palindrome Symmetry", "desc": "Checking palindromes recursively.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"First char == Last char? Check the middle! 🦜\"" } ] },
  { "order": 12, "title": "Recursive Leap of Faith", "desc": "Trusting the smaller solution.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Don't trace every call. Assume the small one works! 🦜\"" } ] },
  { "order": 13, "title": "Tail Recursion", "desc": "Optimization at the end.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"If the call is the LAST thing you do, the compiler can save space! 🦜\"" } ] },
  { "order": 14, "title": "Stack Overflow Simulation", "desc": "Knowing your limits.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Infinite recursion hits the stack ceiling! 🦜\"" } ] },
  { "order": 15, "title": "Array Printing", "desc": "Printing arrays recursively.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Print(0) -> Print(1...N). 🦜\"" } ] },
  { "order": 16, "title": "Decimal to Binary", "desc": "Number system magic.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"N % 2, then solve N / 2. 🦜\"" } ] },
  { "order": 17, "title": "Fibonacci (Naive)", "desc": "A warned path.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Avoid Fib(N-1) + Fib(N-2) WITHOUT memo! 🦜\"" } ] },
  { "order": 18, "title": "Multiple Recursion", "desc": "Branching paths.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"One call, two outcomes! 🦜\"" } ] },
  { "order": 19, "title": "Direct vs Indirect", "desc": "A calls B, B calls A.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"The circular dependency! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Recursion 1)", "desc": "Foundational Leap.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"RECURSION STAGE 1 COMPLETE! You can now dream within dreams. 🦜\"" } ] }
];

module.exports = stage1;
