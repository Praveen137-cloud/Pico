module.exports = {
  "Math": {
    icon: "🧮",
    sections: [
      {
        title: "Stage 1: Numeric Logic",
        units: [
          {
            title: "Unit 1: The Modulo Operator",
            desc: "Understanding remainders and digit extraction.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Math isn't just for calculators! In programming, we manipulate digits constantly.'" },
              { type: 'teaching', questionText: "🦜 Pico: 'The Modulo `%`!'\n\nThe `%` operator gives you the remainder of division. `10 % 3 = 1`. Why? Because 3 fits into 10 three times, leaving 1 leftover.'", codeSnippet: "int rem = 10 % 3; // rem is 1" },
              { type: 'teaching', questionText: "🦜 Pico: 'Extracting Digits!'\n\nYou can pull the exact last digit off *any* number using `% 10`! Let me show you.'", codeSnippet: "int num = 145;\nint lastDigit = num % 10; // lastDigit is 5" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'What is the result of 24 % 5?'", options: ["2", "4", "5", "0"], correctAnswer: "4", explanation: "Correct! 5 goes into 24 four times (20), leaving a remainder of 4." },
              { type: 'programming_board', questionText: "🦜 Pico: 'Complete this logic to continuously extract digits from a number.'", codeSnippet: "while(num > 0) {\n  int digit = num ___ 10;\n  num = num / 10;\n}" }
            ]
          }
        ]
      }
    ]
  },
  "Sorting": {
    icon: "📶",
    sections: [
      {
        title: "Stage 1: Order from Chaos",
        units: [
          {
            title: "Unit 1: Bubble Sort",
            desc: "The simplest, but most expensive way to sort.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Sorting puts things in order. Smaller elements bubble up to the top!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Bubble Sort Concept!'\n\nWe look at two adjacent nests. If the left nest has more seeds than the right nest, we SWAP them! We repeat this until everything is sorted.'", codeSnippet: "if(arr[j] > arr[j+1]) {\n  swap(arr[j], arr[j+1]);\n}" },
              { type: 'teaching', questionText: "🦜 Pico: 'The O(N^2) Trap!'\n\nBubble sort requires a loop inside a loop. This makes its worst-case time complexity O(N^2). It is terrible for large datasets!'", codeSnippet: "for(int i=0; i<N; i++) {\n  for(int j=0; j<N-i-1; j++) {\n     // swap logic\n  }\n}" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'When is it appropriate to use Bubble Sort in a professional application?'", options: ["Always", "When data is huge", "Basically Never", "If it's reverse sorted"], correctAnswer: "Basically Never", explanation: "Correct! O(N^2) is too slow. You should use built-in QuickSort or MergeSort O(N log N)." },
              { type: 'programming_board', questionText: "🦜 Pico: 'Write the condition that triggers a swap in Ascending Bubble Sort.'", codeSnippet: "if (arr[j] ___ arr[j+1]) {\n  swap(arr[j], arr[j+1]);\n}" }
            ]
          }
        ]
      }
    ]
  },
  "Recursion": {
    icon: "🔄",
    sections: [
      {
        title: "Stage 1: The Mirror Trap",
        units: [
          {
            title: "Unit 1: The Base Case",
            desc: "Functions that call themselves.",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'To understand recursion, you must first understand recursion!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Calling Yourself!'\n\nRecursion happens when a function literally executes itself from within.'", codeSnippet: "void fly() {\n  fly(); // I'm flying forever!\n}" },
              { type: 'teaching', questionText: "🦜 Pico: 'The Base Case!'\n\nIf you don't tell the function when to STOP, it will crash the system with a Stack Overflow. The stop condition is called the Base Case.'", codeSnippet: "int getSum(int n) {\n  if(n == 0) return 0; // BASE CASE\n  return n + getSum(n - 1);\n}" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'What happens if you run recursive code without a valid Base Case?'", options: ["It runs faster", "Stack Overflow Crash", "It returns 0", "Compile Error"], correctAnswer: "Stack Overflow Crash", explanation: "Correct! The system will run out of memory trying to call the function infinitely." }
            ]
          }
        ]
      }
    ]
  },
  "Stacks": {
    icon: "🥞",
    sections: [
      {
        title: "Stage 1: LIFO Logic",
        units: [
          {
            title: "Unit 1: Pancakes",
            desc: "Last In, First Out (LIFO).",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Think of a stack of pancakes. You can only eat the top one, and you can only add a new one to the top!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Push and Pop!'\n\nAdding an item is called pushing. Removing an item is called popping.'", codeSnippet: "stack.push(5); // Adds to top\nint top = stack.pop(); // Removes top" },
              { type: 'teaching', questionText: "🦜 Pico: 'LIFO Rule!'\n\nLIFO means Last In, First Out. The most recent item added is the first one removed.'", codeSnippet: "// push 1, push 2, push 3\n// pop() gives 3!" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'If I Push [A, B, C] onto a Stack, what will be the first item popped off?'", options: ["A", "B", "C", "Nothing"], correctAnswer: "C", explanation: "Correct! C was the Last item in, so it is the First item out." },
              { type: 'programming_board', questionText: "🦜 Pico: 'Fill in the stack methods.'", codeSnippet: "stack.___ (10); // Add to top\nint val = stack.___ (); // Remove top" }
            ]
          }
        ]
      }
    ]
  },
  "Queues": {
    icon: "👥",
    sections: [
      {
        title: "Stage 1: FIFO Logic",
        units: [
          {
            title: "Unit 1: The Ticket Line",
            desc: "First In, First Out (FIFO).",
            lessons: [
              { type: 'teaching', questionText: "🦜 Pico: 'Unlike a Stack, a Queue is perfectly fair. It is like waiting in line for birdseed!'" },
              { type: 'teaching', questionText: "🦜 Pico: 'Enqueue and Dequeue!'\n\nYou join the back of the line (Enqueue) and leave from the front of the line (Dequeue).'", codeSnippet: "queue.enqueue(5); // Joins the back\nint next = queue.dequeue(); // Leaves the front" },
              { type: 'teaching', questionText: "🦜 Pico: 'FIFO Rule!'\n\nFIFO means First In, First Out. The oldest item in the queue is served first.'", codeSnippet: "// queue 1, queue 2, queue 3\n// dequeue() gives 1!" },
              { type: 'multiple_choice', questionText: "🦜 Pico: 'If I Enqueue [A, B, C] into a Queue, what will be the first item dequeued?'", options: ["A", "B", "C", "None"], correctAnswer: "A", explanation: "Correct! A was First In, so it is First Out." },
              { type: 'programming_board', questionText: "🦜 Pico: 'What is the acronym for Queue logic?'", codeSnippet: "String queueLogic = \"___\"; // First In, First Out" }
            ]
          }
        ]
      }
    ]
  }
};
