const stage3 = [
  {
    "order": 1,
    "title": "Mapping the Forest (Pointers)",
    "desc": "Understanding memory addresses and pointers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pointers! They don't store seeds; they store the ADDRESS of where the seeds are hidden! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The `&` operator gives you the address. The `*` operator (dereference) lets you look inside! 🦜\"",
        "codeSnippet": "int seeds = 10;\nint* ptr = &seeds;\ncout << *ptr; // Prints 10!"
      },
      { "type": "multiple_choice", "questionText": "What does a pointer store?", "options": ["Memory Address", "Integer value", "Bird name"], "correctAnswer": "Memory Address" }
    ]
  },
  {
    "order": 2,
    "title": "Dereferencing Dangers",
    "desc": "Accessing values through pointers.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Use `*ptr` to grab the nut at the address! 🦜\"" },
      { "type": "programming_board", "questionText": "Update 'seeds' to 20 using pointer 'ptr'.", "codeSnippet": "___ ptr = 20;", "correctAnswer": "*" }
    ]
  },
  {
    "order": 3,
    "title": "The Null Pointer",
    "desc": "Pointing to nowhere.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"A null pointer points to address 0. Don't dereference it or the bird will crash! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Preferred way to initialize a null pointer in modern C++?", "options": ["nullptr", "NULL", "0"], "correctAnswer": "nullptr" }
    ]
  },
  {
    "order": 4,
    "title": "Pointer Arithmetic",
    "desc": "Hopping through memory.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"`ptr++` doesn't add 1 to the address; it moves to the NEXT nest based on the data type's size! 🦜\"" },
      { "type": "multiple_choice", "questionText": "If ptr (int*) is 1000, what is ptr+1?", "options": ["1004 (if int is 4 bytes)", "1001", "1008"], "correctAnswer": "1004 (if int is 4 bytes)" }
    ]
  },
  {
    "order": 5,
    "title": "The Heap (Dynamic Allocation)",
    "desc": "Requesting memory at runtime.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"The Stack is small and automatic. The Heap is a GIANT FIELD where you can claim any size you want with `new`! 🦜\"" },
      { "type": "programming_board", "questionText": "Claim an int on the heap in C++.", "codeSnippet": "int* p = ___ int;", "correctAnswer": "new" }
    ]
  },
  {
    "order": 6,
    "title": "Memory Cleanup",
    "desc": "Deleting heap memory to avoid leaks.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If you `new` it, you must `delete` it! Otherwise, your nest fills with ghost-seeds (memory leaks). 🦜\"" },
      { "type": "programming_board", "questionText": "Free pointer p.", "codeSnippet": "___ p;", "correctAnswer": "delete" }
    ]
  },
  {
    "order": 7,
    "title": "Structure of a Nest (Structs)",
    "desc": "Grouping different data types.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"A `struct` lets you bundle a name (string), age (int), and wingspan (float) into one Bird object! 🦜\"" },
      { "type": "programming_board", "questionText": "Access member 'wings' in struct 'pico'.", "codeSnippet": "float w = pico.___ ;", "correctAnswer": "wings" }
    ]
  },
  {
    "order": 8,
    "title": "Classes & Objects",
    "desc": "Introduction to Object-Oriented Programming.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Classes are like blueprints for nests. Objects are the actual nests you build! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Default access in C++ class?", "options": ["private", "public", "protected"], "correctAnswer": "private" }
    ]
  },
  {
    "order": 9,
    "title": "Constructing the Bird",
    "desc": "Special functions to initialize objects.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Constructors run as soon as a bird is born! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Does a constructor have a return type?", "options": ["No", "Yes", "void"], "correctAnswer": "No" }
    ]
  },
  {
    "order": 10,
    "title": "The Compilation Pipeline",
    "desc": "How code becomes a flight.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Preprocess -> Compile -> Assemble -> Link! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Which stage combines files?", "options": ["Linking", "Compiling", "Preprocessing"], "correctAnswer": "Linking" }
    ]
  },
  { "order": 11, "title": "Pointers to Pointers", "desc": "Double dereference logic.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"A pointer to a box of pointers! 🦜\"" } ] },
  { "order": 12, "title": "Array Pointers", "desc": "Arrays as pointers deep dive.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"decaying arrays! 🦜\"" } ] },
  { "order": 13, "title": "Dynamic Arrays", "desc": "Runtime array sizing.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"`int* arr = new int[n];` 🦜\"" } ] },
  { "order": 14, "title": "Reference Variables", "desc": "Safer than pointers.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"An alias that cannot be null! 🦜\"" } ] },
  { "order": 15, "title": "Header Files", "desc": "Managing code across files.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"`.h` or `.hpp` files hold the blueprints. 🦜\"" } ] },
  { "order": 16, "title": "Preprocessor Macros", "desc": "#define and #include.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Directives for the preprocessor. 🦜\"" } ] },
  { "order": 17, "title": "String Streams", "desc": "Processing strings like flows.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Use `stringstream` to convert data! 🦜\"" } ] },
  { "order": 18, "title": "Exception Handling", "desc": "Catching fall-outs.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Try, Catch, Throw! 🦜\"" } ] },
  { "order": 19, "title": "Dangling Pointers", "desc": "Ghosts of memory past.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Pointing to memory that was already freed! 🦜\"" } ] },
  { "order": 20, "title": "Graduation: Basics", "desc": "The end of the beginning.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"CONGRATULATIONS! You have mastered the Basics. Now, the real algorithms begin! 🦜\"" } ] }
];

module.exports = stage3;
