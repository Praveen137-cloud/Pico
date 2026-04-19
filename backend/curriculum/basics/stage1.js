const stage1 = [
  {
    "order": 1,
    "title": "Hatching the Environment",
    "desc": "Setting up the GCC and JDK tools for birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Welcome to the Basics! Before we can fly, we must build the nest. That means setting up your compiler! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For C++, we use GCC/G++. For Java, we need the JDK. Type `g++ --version` or `java -version` into your terminal to check! 🦜\"",
        "codeSnippet": "g++ main.cpp -o main\n./main"
      },
      { "type": "multiple_choice", "questionText": "What does a compiler do?", "options": ["Turns code into machine language", "Fixes your logical errors", "Downloads bird seeds"], "correctAnswer": "Turns code into machine language" }
    ]
  },
  {
    "order": 2,
    "title": "Variable Nests",
    "desc": "Storing data in labeled boxes.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Variables are like labeled boxes in the nest! 🦜\"" },
      { "type": "programming_board", "questionText": "Declaration for an integer named 'seeds'.", "codeSnippet": "___ seeds = 10;", "correctAnswer": "int" }
    ]
  },
  {
    "order": 3,
    "title": "Integer vs Floating Point",
    "desc": "Whole numbers vs decimal seeds.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use `int` for 10 seeds, but `float` or `double` for 10.5 seeds! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Which type takes more precision?", "options": ["double", "float", "int"], "correctAnswer": "double" }
    ]
  },
  {
    "order": 4,
    "title": "Character Codes",
    "desc": "Storing single letters.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Single letters go in `char` nests. Use single quotes! 🦜\"" },
      { "type": "programming_board", "questionText": "Define char P.", "codeSnippet": "char grade = ___ ;", "correctAnswer": "'P'" }
    ]
  },
  {
    "order": 5,
    "title": "The I/O Stream",
    "desc": "Getting and showing data.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"C++ uses `cin >>` for input and `cout <<` for output. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Redirecting output in C++?", "options": ["cout << \"Hello\";", "cin >> \"Hello\";", "print(\"Hello\");"], "correctAnswer": "cout << \"Hello\";" }
    ]
  },
  {
    "order": 6,
    "title": "Arithmetic Algos",
    "desc": "Basic math for birds.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Add, Subtract, Multiply, and the powerful MODULO `%`! 🦜\"" },
      { "type": "programming_board", "questionText": "What is 10 % 3?", "codeSnippet": "int result = 10 % 3; // result is ___;", "correctAnswer": "1" }
    ]
  },
  {
    "order": 7,
    "title": "Logical Wings",
    "desc": "AND, OR, NOT operations.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"`&&` is AND, `||` is OR. Both wings must flap for AND to be true! 🦜\"" },
      { "type": "multiple_choice", "questionText": "True || False is?", "options": ["True", "False"], "correctAnswer": "True" }
    ]
  },
  {
    "order": 8,
    "title": "The Fork (If/Else)",
    "desc": "Making decisions in flight.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If (seeds > 0) eat(); else cry(); 🦜\"" },
      { "type": "programming_board", "questionText": "Syntax for 'Greater than or equal'.", "codeSnippet": "if (x ___ y)", "correctAnswer": ">=" }
    ]
  },
  {
    "order": 9,
    "title": "Switch Case Control",
    "desc": "Multi-way branching.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Like a flight deck with many buttons! Choose one path. 🦜\"" },
      { "type": "multiple_choice", "questionText": "Keyword to exit a case?", "options": ["break", "exit", "stop"], "correctAnswer": "break" }
    ]
  },
  {
    "order": 10,
    "title": "Boolean Truths",
    "desc": "True or False logic.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Only two options. Binary branches! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Initial value of bool usually?", "options": ["false (0)", "true (1)"], "correctAnswer": "false (0)" }
    ]
  },
  { "order": 11, "title": "Size Matters", "desc": "Memory usage of types.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"How many bytes? `sizeof(int)` tells you! 🦜\"" } ] },
  { "order": 12, "title": "Constants", "desc": "Fixed values that never change.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"The speed of gravity is constant! 🦜\"" } ] },
  { "order": 13, "title": "Type Casting", "desc": "Converting one bird to another.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Change int to float with (float)x! 🦜\"" } ] },
  { "order": 14, "title": "Escape Sequences", "desc": "Special chars like \n and \t.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"New line with \\n! 🦜\"" } ] },
  { "order": 15, "title": "Namespace Security", "desc": "Using std in C++.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"`using namespace std;` makes life easier but crowded. 🦜\"" } ] },
  { "order": 16, "title": "Basic Loops (For)", "desc": "Repeat actions.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Flap 10 times! 🦜\"" } ] },
  { "order": 17, "title": "While Loops", "desc": "Loop until condition fails.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"While (isThirsty) drink(); 🦜\"" } ] },
  { "order": 18, "title": "Do-While Loops", "desc": "Run at least once.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Eat once, THEN check if full! 🦜\"" } ] },
  { "order": 19, "title": "Break & Continue", "desc": "Controlling loop flow.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Skip the bad seeds with continue! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Basics Stage 1)", "desc": "Foundational Mastery.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"HATCHING COMPLETE! You have the logic to build the nest. 🦜\"" } ] }
];

module.exports = stage1;
