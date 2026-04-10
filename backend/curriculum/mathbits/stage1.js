const stage1 = [
  {
    "order": 1,
    "title": "The Binary Branch (Intro)",
    "desc": "Understanding bits and bytes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math and Bits! Everything in the nest is actually just 0s and 1s. Think like a computer! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decimal 5 is Binary 101. Decimal 10 is Binary 1010. Each bit is a power of 2! 🦜\"",
        "codeSnippet": "5 = (1 * 2^2) + (0 * 2^1) + (1 * 2^0) = 4 + 0 + 1"
      },
      { "type": "multiple_choice", "questionText": "What is binary 111 in decimal?", "options": ["7", "6", "8"], "correctAnswer": "7" }
    ]
  },
  {
    "order": 2,
    "title": "Bitwise Operators",
    "desc": "AND, OR, XOR, and NOT.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"& (AND) is 1 only if BOTH are 1. | (OR) is 1 if EITHER is 1. ^ (XOR) is 1 if ONLY ONE is 1! 🦜\"" },
      { "type": "programming_board", "questionText": "What is 5 & 1? (Checking if odd)", "codeSnippet": "101 & 001 = ___ ;", "correctAnswer": "1" }
    ]
  },
  {
    "order": 3,
    "title": "The XOR Secret",
    "desc": "The most powerful bit trap.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"XOR is magical! X ^ X = 0. X ^ 0 = X. Use it to find the unique bird in a flock of pairs! 🦜\"" },
      { "type": "multiple_choice", "questionText": "What is 7 ^ 7?", "options": ["0", "7", "14"], "correctAnswer": "0" }
    ]
  },
  {
    "order": 4,
    "title": "Shifting Wings",
    "desc": "Left and Right shifts.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"`<<` (Left Shift) multiplies by 2. `>>` (Right Shift) divides by 2! Fast math! 🦜\"" },
      { "type": "programming_board", "questionText": "Value of 5 << 1.", "codeSnippet": "101 shift left = 1010 which is ___ ;", "correctAnswer": "10" }
    ]
  },
  {
    "order": 5,
    "title": "Power of Two?",
    "desc": "The n & (n-1) trick.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If N is a power of 2, it only has ONE bit set. `N & (N-1)` will be 0! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Does N=8 pass the power of 2 check?", "options": ["Yes (8 & 7 is 0)", "No"], "correctAnswer": "Yes (8 & 7 is 0)" }
    ]
  },
  {
    "order": 6,
    "title": "Count Set Bits",
    "desc": "Hamming Weight problem.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"How many '1's are in the binary nest? 🦜\"" },
      { "type": "programming_board", "questionText": "Remove last set bit.", "codeSnippet": "n = n ___ (n - 1);", "correctAnswer": "&" }
    ]
  },
  {
    "order": 7,
    "title": "Modulo Mathematics",
    "desc": "Properties of remainders.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"(A + B) % M = (A % M + B % M) % M. Use this for BIG bird numbers! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is (A * B) % M = (A % M * B % M) % M ?", "options": ["Yes", "No"], "correctAnswer": "Yes" }
    ]
  },
  {
    "order": 8,
    "title": "Check if K-th bit is set",
    "desc": "Inspecting specific binary nests.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Shift 1 left by K and AND it with N. 🦜\"" },
      { "type": "programming_board", "questionText": "Formula to check 3rd bit.", "codeSnippet": "if (n & (1 ___ 3))", "correctAnswer": "<<" }
    ]
  },
  {
    "order": 9,
    "title": "Set the K-th bit",
    "desc": "Changing a 0 to a 1.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use | (OR) to set a bit! 🦜\"" },
      { "type": "programming_board", "questionText": "Set 2nd bit of N.", "codeSnippet": "n = n ___ (1 << 2);", "correctAnswer": "|" }
    ]
  },
  {
    "order": 10,
    "title": "Clear the K-th bit",
    "desc": "Changing a 1 to a 0.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use ~ (NOT) and & (AND)! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Mask to clear K-th bit?", "options": ["~(1 << K)", "(1 << K)", "0"], "correctAnswer": "~(1 << K)" }
    ]
  },
  { "order": 11, "title": "Toggle Bit", "desc": "Switching 0 to 1 or 1 to 0.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"XOR with (1 << K)! 🦜\"" } ] },
  { "order": 12, "title": "Number of Flips", "desc": "Bits to flip to get from A to B.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"A ^ B gives the differing bits! 🦜\"" } ] },
  { "order": 13, "title": "Single Number I", "desc": "Finding the loner bird.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"XOR them all! 🦜\"" } ] },
  { "order": 14, "title": "Divisibility Rules", "desc": "Math shortcuts for birds.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Sum of digits % 3 == 0 means divisible by 3! 🦜\"" } ] },
  { "order": 15, "title": "Trailing Zeroes", "desc": "Zeroes in N factorial.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Count the factors of 5! 🦜\"" } ] },
  { "order": 16, "title": "GCD & LCM Relationship", "desc": "Math twins.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"A * B = GCD(A, B) * LCM(A, B). 🦜\"" } ] },
  { "order": 17, "title": "Excel Column Number", "desc": "Base 26 math.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"A=1, B=2, AA=27... multiply by 26! 🦜\"" } ] },
  { "order": 18, "title": "Reverse Bits", "desc": "Flipping the entire 32-bit nest.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"Shift out, shift in! 🦜\"" } ] },
  { "order": 19, "title": "The One's Complement", "desc": "Flipping all bits.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"The ~ operator but watch the sign bit! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Bits 1)", "desc": "Binary Logic Mastery.", lessons: [ { "type": "teaching", "questionText": "🦜 Pico: \"BIT MANIPULATION STAGE 1 COMPLETE! You now see in binary. 🦜\"" } ] }
];

module.exports = stage1;
