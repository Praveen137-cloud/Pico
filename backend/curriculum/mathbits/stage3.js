const stage3 = [
  {
    "order": 1,
    "title": "SPF (Smallest Prime Factor)",
    "desc": "Precomputing to factorize in O(log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "Welcome to Stage 3! If you need to factorize 1000 birds quickly, use SPF. It stores the smallest prime factor for every number! 🦜"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"While factorizing, just divide by `SPF[n]` repeatedly until you reach 1. 🦜\"",
        "codeSnippet": "while (n > 1) {\n  factors.push(spf[n]);\n  n /= spf[n];\n}"
      },
      { "type": "multiple_choice", "questionText": "Complexity to factorize N using SPF?", "options": ["O(log N)", "O(sqrt N)", "O(N)"], "correctAnswer": "O(log N)" }
    ]
  },
  {
    "order": 2,
    "title": "The Extended Euclid",
    "desc": "Finding coefficients x and y.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"ax + by = gcd(a, b). We can find x and y while doing GCD! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Main use of Extended Euclid?", "options": ["Modular Multiplicative Inverse", "Sorting", "Finding prime factors"], "correctAnswer": "Modular Multiplicative Inverse" }
    ]
  },
  {
    "order": 3,
    "title": "Modular Inverse",
    "desc": "Dividing in modular arithmetic.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"You can't divide in mod M! You must multiply by the modular inverse. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Inverse of A mod P using Fermat's (if P is prime)?", "options": ["A^(P-2) % P", "A^(P-1) % P", "1/A"], "correctAnswer": "A^(P-2) % P" }
    ]
  },
  {
    "order": 4,
    "title": "Segmented Sieve",
    "desc": "Finding primes in a range [L, R].",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"When L and R are huge but (R-L) is small, use the primes up to sqrt(R) to sift the range! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Max value of sqrt(R) if R is 10^9?", "options": ["~31,622", "1,000,000", "316"], "correctAnswer": "~31,622" }
    ]
  },
  {
    "order": 5,
    "title": "Euler's Totient (Phi)",
    "desc": "Counting relative primes.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Phi(N) is the count of numbers up to N that have no common factor with N (gcd=1)! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Phi(7) for prime 7?", "options": ["6", "7", "1"], "correctAnswer": "6" }
    ]
  },
  {
    "order": 6,
    "title": "Combinatorics (Ncr)",
    "desc": "Picking K birds from N.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Ncr = N! / (r! * (n-r)!). Use modular inverse for the denominators! 🦜\"" },
      { "type": "programming_board", "questionText": "Value of 4c2.", "codeSnippet": "4*3 / 2*1 = ___ ;", "correctAnswer": "6" }
    ]
  },
  {
    "order": 7,
    "title": "Inclusion-Exclusion",
    "desc": "The art of not overcounting.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Want birds that like seeds OR water? (Seed-likers + Water-likers) - (Both-likers)! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Count multiples of 2 or 3 in 0-10?", "options": ["7 (2, 4, 6, 8, 10, 3, 9)", "8", "5"], "correctAnswer": "7 (2, 4, 6, 8, 10, 3, 9)" }
    ]
  },
  {
    "order": 8,
    "title": "Bitwise DP Intro",
    "desc": "Solving subset problems with DP.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use bitmasks as states in your DP table! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity if state is a mask of size N?", "options": ["O(2^N * polynomial)", "O(N^2)", "O(N!)"], "correctAnswer": "O(2^N * polynomial)" }
    ]
  },
  {
    "order": 9,
    "title": "Lucas Theorem",
    "desc": "Big Ncr with small prime modulus.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"For huge N and R, break them down into base-P digits! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Condition for Lucas Theorem?", "options": ["Modulus P must be prime", "N must be small", "N/A"], "correctAnswer": "Modulus P must be prime" }
    ]
  },
  {
    "order": 10,
    "title": "Pollard's Rho (Conceptual)",
    "desc": "Integer factorization for giant birds.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"A randomized algorithm for super fast factorization. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Complexity?", "options": ["O(N^1/4)", "O(sqrt N)", "O(log N)"], "correctAnswer": "O(N^1/4)" }
    ]
  },
  { "order": 11, "title": "Chinese Remainder Theorem", "desc": "Solving multiple mod congruences.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Find X such that X % a = r1 and X % b = r2. 🦜\"" } ] },
  { "order": 12, "title": "Game Theory (Nim Sum)", "desc": "Math for winning games.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"In a heap of seeds, XOR identifies the winning state! 🦜\"" } ] },
  { "order": 13, "title": "Primitive Roots", "desc": "Generators of the flock.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Numbers whose powers generate the whole mod field. 🦜\"" } ] },
  { "order": 14, "title": "Power Set Lexicographical", "desc": "Subsets in dictionary order.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Use bits or recursion to sort your flock. 🦜\"" } ] },
  { "order": 15, "title": "Burnside's Lemma (Conceptual)", "desc": "Counting unique objects with symmetry.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"How many unique necklaces can birds build? 🦜\"" } ] },
  { "order": 16, "title": "Bitmask for TSP", "desc": "O(2^N * N^2) dynamic programming.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"The classic NP-Hard problem solved with mask-DP! 🦜\"" } ] },
  { "order": 17, "title": "Catalan Numbers", "desc": "1, 1, 2, 5, 14, 42...", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Valid parentheses, BST structures, and path counting! 🦜\"" } ] },
  { "order": 18, "title": "Matrix Exponentiation II", "desc": "Solving complex recurrences.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Building the transformation matrix. 🦜\"" } ] },
  { "order": 19, "title": "Number of Set Bits (O(1))", "desc": "Using precomputed bytes.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Hardware-level bit counting! 🦜\"" } ] },
  { "order": 20, "title": "Grand Graduation (Math & Bits)", "desc": "Numerical Elite Graduation.", lessons: [
      { "type": "teaching", "questionText": "🦜 Pico: \"CONGRATULATIONS! You have mastered the Numbers and Bits of the Forest! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Final math thought?", "options": ["Everything is binary!", "Math is hard"], "correctAnswer": "Everything is binary!" }
    ]
  }
];

module.exports = stage3;
