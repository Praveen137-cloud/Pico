const stage2 = [
  {
    "order": 1,
    "title": "Prime Hunting (Sieve)",
    "desc": "Finding all primes up to N efficiently.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stage 2! To find primes quickly, don't check every bird. Use the Sieve of Eratosthenes to cross out the non-primes in one giant flight! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Start at 2. Mark all its multiples as 'not prime'. Move to the next unmarked bird and repeat! 🦜\"",
        "codeSnippet": "for (int p=2; p*p <= n; p++) {\n  if (isPrime[p]) {\n    for (int i=p*p; i <= n; i += p)\n      isPrime[i] = false;\n  }\n}"
      },
      { "type": "multiple_choice", "questionText": "Time complexity of Sieve?", "options": ["O(N log log N)", "O(N^2)", "O(sqrt N)"], "correctAnswer": "O(N log log N)" }
    ]
  },
  {
    "order": 2,
    "title": "Euclid's GCD",
    "desc": "The most efficient way to find common factors.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"GCD(A, B) = GCD(B, A % B). Keep going until B is 0! 🦜\"" },
      { "type": "programming_board", "questionText": "Recursive call for GCD.", "codeSnippet": "return gcd(b, ___ );", "correctAnswer": "a % b" }
    ]
  },
  {
    "order": 3,
    "title": "Binary Exponentiation",
    "desc": "Computing A^B in O(log B).",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"To find 2^10, find (2^5)^2. You don't need to multiply 2 ten times! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Recursive step if B is even?", "options": ["half * half", "A * half * half", "A * B"], "correctAnswer": "half * half" }
    ]
  },
  {
    "order": 4,
    "title": "Bitmasks (The Set Bit)",
    "desc": "Using a single integer to represent a set.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"A bitmask is like a list of checkboxes. 00101 means you have the 1st and 3rd bird in your flock! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Max number of items in a 32-bit mask?", "options": ["32", "64", "Infinite"], "correctAnswer": "32" }
    ]
  },
  {
    "order": 5,
    "title": "Subsets with Bitmasks",
    "desc": "Generating Power Set using numbers 0 to 2^N - 1.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Every number from 0 to (2^N - 1) represents a unique subset! 🦜\"" },
      { "type": "programming_board", "questionText": "Check if j-th item is in subset 'i'.", "codeSnippet": "if ( (i ___ (1 << j)) != 0 )", "correctAnswer": "&" }
    ]
  },
  {
    "order": 6,
    "title": "Prime Factorization",
    "desc": "Breaking down birds into their prime essence.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Trial division up to sqrt(N) is enough! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Why only up to sqrt(N)?", "options": ["If N has a factor > sqrt(N), it must have one < sqrt(N)", "Primes only live there", "Efficiency"], "correctAnswer": "If N has a factor > sqrt(N), it must have one < sqrt(N)" }
    ]
  },
  {
    "order": 7,
    "title": "Modulo Multiplication",
    "desc": "Handling overflow during power calls.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Always apply `% M` after every multiplication! 🦜\"" },
      { "type": "programming_board", "questionText": "Multiply A, B under Mod M.", "codeSnippet": "ans = (1LL * A * B) ___ M;", "correctAnswer": "%" }
    ]
  },
  {
    "order": 8,
    "title": "Count Divisors",
    "desc": "How many factors does a bird have?",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If N = p1^a * p2^b, total divisors = (a+1)*(b+1). 🦜\"" },
      { "type": "multiple_choice", "questionText": "Divisors for 12? (2^2 * 3^1)", "options": ["6", "4", "12"], "correctAnswer": "6" }
    ]
  },
  {
    "order": 9,
    "title": "Perfect Numbers",
    "desc": "Sum of divisors equals the number.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"6 is perfect! 1 + 2 + 3 = 6. Rare birds in the forest! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Next perfect number after 6?", "options": ["28", "12", "18"], "correctAnswer": "28" }
    ]
  },
  {
    "order": 10,
    "title": "Gray Code (Bits)",
    "desc": "Sequence where only 1 bit changes.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Useful for error correction. `g = n ^ (n >> 1)`. 🦜\"" },
      { "type": "programming_board", "questionText": "Binary to Gray code formula.", "codeSnippet": "g = n ___ (n >> 1);", "correctAnswer": "^" }
    ]
  },
  { "order": 11, "title": "Check Prime (Standard)", "desc": "Is this a prime bird?", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Check from 2 to sqrt(N). 🦜\"" } ] },
  { "order": 12, "title": "All Factors in O(sqrt N)", "desc": "Listing all divisors.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Find one, get the pair (N/i)! 🦜\"" } ] },
  { "order": 13, "title": "All Prime Factors", "desc": "Trial division refinement.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Divide out factors as you find them. 🦜\"" } ] },
  { "order": 14, "title": "Fast Modular Power", "desc": "Iterative approach.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Bits of the exponent tell you when to multiply! 🦜\"" } ] },
  { "order": 15, "title": "Single Number II", "desc": "Every bird seen 3 times except one.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Use a bit-counting array (mod 3). 🦜\"" } ] },
  { "order": 16, "title": "Minimum Bit Flips", "desc": "To make numbers match.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"XOR and count set bits! 🦜\"" } ] },
  { "order": 17, "title": "Total Set Bits 1-N", "desc": "Math patterns in binary.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Look for the repeating 0s and 1s in columns. 🦜\"" } ] },
  { "order": 18, "title": "Reverse Bits (Full 32)", "desc": "The bitwise swap.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Swap halves, then quarters, then eighths! 🦜\"" } ] },
  { "order": 19, "title": "Bitmask for N-Queens", "desc": "Speeding up backtracking.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Use bits for row/diag constraints. FAST! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Math 2)", "desc": "Numerical Mastery.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"MATH & BITS STAGE 2 COMPLETE! You are now a numerical elite. 🦜\"" } ] }
];

module.exports = stage2;
