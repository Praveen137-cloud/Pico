const stage2 = [
  {
    "order": 1,
    "title": "Function Flight Paths",
    "desc": "Grouping code into reusable blocks.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Functions are reusable flight paths! Instead of flapping manually every time, just call `flap()`! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A function has a return type, a name, and parameters. 🦜\"",
        "codeSnippet": "int addSeeds(int a, int b) {\n  return a + b;\n}"
      },
      { "type": "multiple_choice", "questionText": "Return type if a function returns nothing?", "options": ["void", "null", "empty"], "correctAnswer": "void" }
    ]
  },
  {
    "order": 2,
    "title": "Parameter Passing",
    "desc": "Giving data to your functions.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Pass by Value creates a copy. Pass by Reference (using `&`) lets the function change the original nest! 🦜\"" },
      { "type": "programming_board", "questionText": "In C++, syntax for pass by reference.", "codeSnippet": "void modify(int ___ x);", "correctAnswer": "&" }
    ]
  },
  {
    "order": 3,
    "title": "Scope Security",
    "desc": "Local vs Global variables.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Local variables only live inside their {braces}. Global variables are visible to the whole forest! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Can a function see a variable defined in another function?", "options": ["No", "Yes", "Only if public"], "correctAnswer": "No" }
    ]
  },
  {
    "order": 4,
    "title": "Recursion Intro",
    "desc": "A bird dreaming of being a bird.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Recursion is a function calling itself. You MUST have a base case so you don't fly in circles forever! 🦜\"" },
      { "type": "multiple_choice", "questionText": "What happens without a base case?", "options": ["Stack Overflow", "Fast execution", "The bird gets a cookie"], "correctAnswer": "Stack Overflow" }
    ]
  },
  {
    "order": 5,
    "title": "Array Foundations",
    "desc": "Storing many birds in one row.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Arrays store many variables of the SAME type. They are indexed from 0! 🦜\"" },
      { "type": "programming_board", "questionText": "Access the 3rd element of array 'nest'.", "codeSnippet": "int egg = nest[___];", "correctAnswer": "2" }
    ]
  },
  {
    "order": 6,
    "title": "Array Traversal",
    "desc": "Visiting every bird in the row.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use a `for` loop to check every nest. 🦜\"" },
      { "type": "programming_board", "questionText": "Loop condition for array of size N.", "codeSnippet": "for(int i=0; i < ___; i++)", "correctAnswer": "N" }
    ]
  },
  {
    "order": 7,
    "title": "Multidimensional Nests",
    "desc": "Grid of birds (2D arrays).",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"A 2D array is a grid—rows and columns of seeds! 🦜\"" },
      { "type": "programming_board", "questionText": "Declare a 3x3 grid.", "codeSnippet": "int grid[3][___];", "correctAnswer": "3" }
    ]
  },
  {
    "order": 8,
    "title": "Array vs Pointers (C++)",
    "desc": "The memory link.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The array name is actually a pointer to the first nest! 🦜\"" },
      { "type": "multiple_choice", "questionText": "What is *(arr + 1) equal to?", "options": ["arr[1]", "arr[0]", "Address of arr"], "correctAnswer": "arr[1]" }
    ]
  },
  {
    "order": 9,
    "title": "Strings (C-Style)",
    "desc": "Arrays of characters.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"In C, strings are just char arrays ending in `\\0` (the null terminator)! 🦜\"" },
      { "type": "programming_board", "questionText": "Null terminator character.", "codeSnippet": "char end = ___ ;", "correctAnswer": "'\\0'" }
    ]
  },
  {
    "order": 10,
    "title": "String Class (Modern)",
    "desc": "Easier string handling.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"In C++ or Java, `string` classes do the hard work for you! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Function to get length in C++ string?", "options": ["s.length()", "s.size()", "Both"], "correctAnswer": "Both" }
    ]
  },
  { "order": 11, "title": "Pass by Reference Deep Dive", "desc": "Changing variables outside functions.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"References are aliases! 🦜\"" } ] },
  { "order": 12, "title": "Overloading Birds", "desc": "Same name, different parameters.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Two `flap()` functions—one for speed, one for distance! 🦜\"" } ] },
  { "order": 13, "title": "Default Arguments", "desc": "Optional parameters.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"If you don't specify height, use the default branch! 🦜\"" } ] },
  { "order": 14, "title": "Inline Functions", "desc": "Speeding up small tasks.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Skip the call-stack for tiny functions! 🦜\"" } ] },
  { "order": 15, "title": "Recursive Factorial", "desc": "First recursive practice.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"N! = N * (N-1)! 🦜\"" } ] },
  { "order": 16, "title": "Static Variables", "desc": "Persistent memory in functions.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Static variables remember their value between calls! 🦜\"" } ] },
  { "order": 17, "title": "Array Initialization", "desc": "Brace yourselves!", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"`int a[] = {1, 2, 3};` 🦜\"" } ] },
  { "order": 18, "title": "Searching Arrays (Linear)", "desc": "Finding the seed.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Check every nest one by one. 🦜\"" } ] },
  { "order": 19, "title": "Buffer Overflows", "desc": "Danger in the nests!", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Don't access `arr[10]` if size is 10! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Basics Stage 2)", "desc": "Logic & Structure Mastery.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"MID-LEVEL BASICS MASTERED! You can now organize the whole forest. 🦜\"" } ] }
];

module.exports = stage2;
