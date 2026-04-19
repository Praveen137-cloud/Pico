const stage1 = [
  {
    "order": 1,
    "title": "The Memory Map",
    "desc": "Uncover how arrays sit in your computer's memory.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Welcome, fledgling! Before we fly, we must understand the ground. An array is just a contiguous block of memory. Think of it as a row of connected bird nests!\"",
        "explanation": "Contiguous memory means all elements are stored right next to each other."
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Because they are connected, if you know where the first nest is, you can jump to any nest instantly! This is called O(1) access time. Fast as a falcon!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the \"O\" complexity for accessing an element in an array by its index?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"But wait! To keep them connected, they must all be the SAME size. You can't put an eagle in a sparrow's nest! 🦜\"",
        "explanation": "All elements in an array must be of the same data type."
      },
      {
        "type": "match_following",
        "questionText": "Match the Array Terms!",
        "pairs": [
          {
            "key": "Index",
            "value": "Position"
          },
          {
            "key": "Element",
            "value": "Value"
          },
          {
            "key": "Base address",
            "value": "Start"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "If the base address is 1000 and each integer is 4 bytes, what is the address of `arr[2]`?",
        "codeSnippet": "Address = 1000 + (2 * ___)",
        "correctAnswer": "4"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Careful! If you try to peak into a nest that doesn't exist, you might fall! This is an out-of-bounds error.\"",
        "explanation": "Accessing an index >= array.length is a common bug."
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if you access `arr[10]` on an array of size 10?",
        "options": [
          "It returns 0",
          "It crashes/IndexOutOfBounds",
          "It returns the last element"
        ],
        "correctAnswer": "It crashes/IndexOutOfBounds"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complete the declaration of an integer array of size 5 in C++.",
        "codeSnippet": "int arr[___];",
        "correctAnswer": "5"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Master the memory, and you master the machine. Now, let's look at indexing!\""
      }
    ]
  },
  {
    "order": 2,
    "title": "Indexing Insights",
    "desc": "Why do we start at zero? Let Pico explain.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Listen close! In the bird world, we start counting at 1. But in the code world, we start at 0. Why? Because the index is the OFFSET from the start!\"",
        "explanation": "Index 0 means 0 steps away from the memory start."
      },
      {
        "type": "multiple_choice",
        "questionText": "In an array of size N, what is the last index?",
        "options": [
          "N",
          "N-1",
          "N+1"
        ],
        "correctAnswer": "N-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Think of it as jumping branches. If you are on the first branch, you have made 0 jumps!\""
      },
      {
        "type": "match_following",
        "questionText": "Match the element to its index!",
        "pairs": [
          {
            "key": "1st Element",
            "value": "index 0"
          },
          {
            "key": "3rd Element",
            "value": "index 2"
          },
          {
            "key": "5th Element",
            "value": "index 4"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Access the 4th element of `myArray`.",
        "codeSnippet": "val = myArray[___];",
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you forget this, you will have an 'Off-by-One' error. It's like missing your perch and landing in the mud! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which index represents the middle element in an array of size 7?",
        "options": [
          "3",
          "4",
          "2"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Python: Access the last element using negative indexing.",
        "codeSnippet": "last = arr[___]",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Negative indexing is like flying backward! Python lets you do it, but C++ will squawk at you!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you pay attention? What is my favorite index?\"",
        "options": [
          "0",
          "1",
          "Infinity"
        ],
        "correctAnswer": "0"
      }
    ]
  },
  {
    "order": 3,
    "title": "The First Peck",
    "desc": "Finding the biggest bird in the nest (Max Element).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mission: Find the largest number in the array! It's like finding the bird with the longest wingspan!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Start by assuming the first bird is the biggest. Then compare it to every other bird in the flock!\"",
        "codeSnippet": "int max = arr[0];\nfor(int i=1; i<n; i++) {\n  if(arr[i] > max) max = arr[i];\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What should you initialize your `max` variable with for an array of integers?",
        "options": [
          "0",
          "The first element (arr[0])",
          "A very large number"
        ],
        "correctAnswer": "The first element (arr[0])"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time Complexity: O(N). You must look at every bird once. No shortcuts unless they are sorted!\""
      },
      {
        "type": "programming_board",
        "questionText": "Complete the comparison to update the max.",
        "codeSnippet": "if (currentBird ___ maxWingspan) {\n  maxWingspan = currentBird;\n}",
        "correctAnswer": ">"
      },
      {
        "type": "match_following",
        "questionText": "Match the logic!",
        "pairs": [
          {
            "key": "Compare",
            "value": "if (x > max)"
          },
          {
            "key": "Update",
            "value": "max = x"
          },
          {
            "key": "Loop",
            "value": "for (int x : arr)"
          }
        ]
      },
      {
        "type": "code_fill_in",
        "questionText": "Complete the Python code to find max.",
        "codeSnippet": "max_val = ___(my_list)",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Python has a `max()` function, but under the hood, it's still doing the hard work of looking at everyone!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In an array [3, 7, 2, 9, 5], how many times is the `max` variable UPDATED?",
        "options": [
          "3",
          "4",
          "2"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Great peck! Now let's find the smallest!\""
      }
    ]
  },
  {
    "order": 4,
    "title": "The Tiny Snatched Seed",
    "desc": "Finding the smallest element in the flock (Min Element).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Exact same mission, but this time we want the MINIMUM. Look for the tiniest seed in the pile!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Initialize `min` with `arr[0]` or a very large number like `INT_MAX`. Then flip the comparison sign!\"",
        "codeSnippet": "int min = arr[0];\nfor(int i=1; i<n; i++) {\n  if(arr[i] < min) min = arr[i];\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you use 0 to initialize `min` for an array of positive numbers, what happens?",
        "options": [
          "It works fine",
          "The result will always be 0",
          "It crashes"
        ],
        "correctAnswer": "The result will always be 0"
      },
      {
        "type": "match_following",
        "questionText": "Match the Initialization for an array of unknown numbers:",
        "pairs": [
          {
            "key": "Max Logic",
            "value": "-Infinity"
          },
          {
            "key": "Min Logic",
            "value": "+Infinity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complete the Min check.",
        "codeSnippet": "if (arr[i] ___ min_val) {\n  min_val = arr[i];\n}",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Can you find both Max and Min in ONE pass? Yes! Just use two variables!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for finding both Min and Max in a single loop?",
        "options": [
          "O(N)",
          "O(2N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "C: What header is needed for `INT_MAX`?",
        "codeSnippet": "#include <___.h>",
        "correctAnswer": "limits"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Efficiency is key. Why look at the flock twice when once is enough?\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the smallest bird?\"",
        "options": [
          "No, #1!",
          "Maybe.",
          "Squawk!"
        ],
        "correctAnswer": "No, #1!"
      }
    ]
  },
  {
    "order": 5,
    "title": "Summing the Flock",
    "desc": "Calculating the total of all elements.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Let's count all the seeds! We need to sum up every element in the array. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Start with a `sum` variable at 0. Then, as you fly over each nest, add its contents to your bag!\"",
        "codeSnippet": "int sum = 0;\nfor(int x : arr) sum += x;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the sum of [1, 2, 3, 4]?",
        "options": [
          "10",
          "9",
          "11"
        ],
        "correctAnswer": "10"
      },
      {
        "type": "match_following",
        "questionText": "Match the Accumulators!",
        "pairs": [
          {
            "key": "Addition",
            "value": "sum += x"
          },
          {
            "key": "Multiplication",
            "value": "prod *= x"
          },
          {
            "key": "Counting",
            "value": "count++"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate the average of an array of size `n`.",
        "codeSnippet": "avg = total_sum / ___ ;",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watch out! If the sum is too big, it might cause an OVERFLOW. Use a `long long` for huge flocks!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which data type is safer for summing very large arrays?",
        "options": [
          "int",
          "long long",
          "double"
        ],
        "correctAnswer": "long long"
      },
      {
        "type": "code_fill_in",
        "questionText": "Python: Sum an entire list in one line.",
        "codeSnippet": "total = ___(my_list)",
        "correctAnswer": "sum"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One pass, O(N) time. Simple, effective, elegant!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"How many seeds do I want?\"",
        "options": [
          "Sum(all)",
          "Infinity",
          "0"
        ],
        "correctAnswer": "Infinity"
      }
    ]
  },
  {
    "order": 6,
    "title": "Odd vs Even Birds",
    "desc": "Filtering the flock based on parity.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Some birds are even, some are odd. Even birds are divisible by 2 with no remainder. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use the MODULO operator (%) to check. If `n % 2 == 0`, it is even. If not, it is odd!\"",
        "codeSnippet": "if (n % 2 == 0) // Even\nelse // Odd"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 15 % 2?",
        "options": [
          "1 (Odd)",
          "0 (Even)",
          "7.5"
        ],
        "correctAnswer": "1 (Odd)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Parity!",
        "pairs": [
          {
            "key": "14 % 2",
            "value": "0"
          },
          {
            "key": "19 % 2",
            "value": "1"
          },
          {
            "key": "Modulo",
            "value": "%"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Count how many even numbers are in `arr`.",
        "codeSnippet": "if (arr[i] % 2 ___ 0) count++;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Efficiency Tip! You can also use bitwise AND: `(n & 1) == 0` is even. It's faster! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In bitwise, if `(n & 1)` is 1, the number is:",
        "options": [
          "Odd",
          "Even",
          "Zero"
        ],
        "correctAnswer": "Odd"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complete the bitwise parity check.",
        "codeSnippet": "if ( (num & 1) ___ 0 ) // Even",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Counting parity is common in Zoho interviews. They love bitwise tricks!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is 0 even or odd?\"",
        "options": [
          "Even",
          "Odd",
          "Neither"
        ],
        "correctAnswer": "Even"
      }
    ]
  },
  {
    "order": 7,
    "title": "Searching the Nest",
    "desc": "Finding a specific bird in the array (Linear Search).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mission: Can you find a specific bird? We call this searching. The simplest way is to check every nest!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Linear Search: Walk through the array from index 0 to N-1. If you find it, return the index. If not, return -1!\"",
        "codeSnippet": "for(int i=0; i<n; i++) {\n  if(arr[i] == target) return i;\n}\nreturn -1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the worst-case time complexity of Linear Search?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Terms!",
        "pairs": [
          {
            "key": "Target",
            "value": "What we seek"
          },
          {
            "key": "-1",
            "value": "Not found"
          },
          {
            "key": "Early Return",
            "value": "Found it!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complete the search loop.",
        "codeSnippet": "for(int i=0; i < ___; i++)",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Best case? The target is in the very first nest! O(1). Worst case? It's at the end or not there at all. O(N).\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If the target is at index 5 in an array of size 100, how many comparisons were made?",
        "options": [
          "6",
          "5",
          "100"
        ],
        "correctAnswer": "6",
        "explanation": "Indices 0,1,2,3,4,5 = 6 checks."
      },
      {
        "type": "code_fill_in",
        "questionText": "Python: Check if `x` is in `my_list`.",
        "codeSnippet": "if x ___ my_list:",
        "correctAnswer": "in"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Python makes it look easy, but the computer is still doing a linear walk behind the scenes!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Will you find me or -1?\"",
        "options": [
          "Pico!",
          "-1",
          "0"
        ],
        "correctAnswer": "Pico!"
      }
    ]
  },
  {
    "order": 8,
    "title": "Flipping the Horizon",
    "desc": "Reversing the entire flock (Array Reversal).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time to flip the flock! The first bird becomes the last, and the last becomes the first. Like a mid-air somersault!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two-Pointer Strategy! Start one pointer at the beginning and one at the end. Swap them and move inward!\"",
        "codeSnippet": "while(start < end) {\n  swap(arr[start], arr[end]);\n  start++; end--;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many swaps are needed to reverse an array of size N?",
        "options": [
          "N/2",
          "N",
          "N-1"
        ],
        "correctAnswer": "N/2",
        "explanation": "Since each swap handles two elements, we stop in the middle."
      },
      {
        "type": "match_following",
        "questionText": "Match the Pointers!",
        "pairs": [
          {
            "key": "Start",
            "value": "index 0"
          },
          {
            "key": "End",
            "value": "index n-1"
          },
          {
            "key": "Condition",
            "value": "start < end"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complete the reverse loop condition.",
        "codeSnippet": "while (start ___ end)",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is IN-PLACE reversal. No extra array needed. Memory efficient, just like a bird's brain!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of in-place reversal?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "C++: Function to swap two values `a` and `b`.",
        "codeSnippet": "___(a, b);",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flipping is the basis for many advanced rotations. Master it!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Reversing [1, 2, 3] gives:",
        "options": [
          "[3, 2, 1]",
          "[2, 1, 3]",
          "[1, 2, 3]"
        ],
        "correctAnswer": "[3, 2, 1]"
      }
    ]
  },
  {
    "order": 9,
    "title": "Duplicate Detectives",
    "desc": "Finding birds that appear twice in a sorted flock.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stop copying me! If the flock is SORTED, spotting duplicates is easy. Just look at your neighbor!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Loop through and check: if `arr[i] == arr[i+1]`, you found a copycat!\"",
        "codeSnippet": "for(int i=0; i<n-1; i++) {\n  if(arr[i] == arr[i+1]) return true;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does this neighbor-check work if the array is UNSORTED?",
        "options": [
          "No",
          "Yes",
          "Maybe"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "match_following",
        "questionText": "Match the Condition!",
        "pairs": [
          {
            "key": "Duplicate",
            "value": "arr[i] == arr[i+1]"
          },
          {
            "key": "Unique",
            "value": "arr[i] != arr[i+1]"
          },
          {
            "key": "Sorted",
            "value": "Required!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Fix the loop to avoid overflow.",
        "codeSnippet": "for(int i=0; i < ___ ; i++)",
        "correctAnswer": "n-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If it's not sorted, you need a Hash Set or an O(N^2) double-loop. Too slow for a parrot!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding duplicates in a sorted array?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "JS: Set a value in a Set to check uniqueness.",
        "codeSnippet": "mySet.___(value)",
        "correctAnswer": "add"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One of a kind! That's me. Don't you forget it!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Are [1, 2, 2, 3] duplicates?",
        "options": [
          "Yes, 2",
          "No",
          "Yes, all"
        ],
        "correctAnswer": "Yes, 2"
      }
    ]
  },
  {
    "order": 10,
    "title": "The Leader of the Pack",
    "desc": "Finding elements that are greater than all to their right.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Who is the leader? In an array, a leader is greater than ALL elements to its right!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Special Rule! The rightmost element is ALWAYS a leader. There's nobody to its right to challenge it!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [16, 17, 4, 3, 5, 2], what is the rightmost leader?",
        "options": [
          "2",
          "16",
          "17"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match Leaders in [16, 17, 4, 3, 5, 2]!",
        "pairs": [
          {
            "key": "Master Leader",
            "value": "17"
          },
          {
            "key": "Last element",
            "value": "2"
          },
          {
            "key": "Another leader",
            "value": "5"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Scan from right to left to find leaders efficiently.",
        "codeSnippet": "for(int i = n-1; i ___ 0; i--) { ... }",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By scanning from right to left, you just track the `current_max`. If a bird is bigger than `current_max`, it's a LEADER!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for the Right-to-Left leader scan?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize max_right with the last element.",
        "codeSnippet": "int max_r = arr[___];",
        "correctAnswer": "n-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Zoho loves this question. It tests if you can think backwards (Right-to-Left)!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many leaders in [1, 2, 3, 4, 5]?",
        "options": [
          "1 (Only 5)",
          "5 (All)",
          "0"
        ],
        "correctAnswer": "1 (Only 5)"
      }
    ]
  },
  {
    "order": 11,
    "title": "The Balance Beam",
    "desc": "Intro to Equilibrium Index where left sum equals right sum.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Equilibrium Index is the tightrope of the array! At this spot, the sum of all birds on the left matches the sum on the right!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't use nested loops (O(N^2)). That's for slow-brains! Calculate the Total Sum first, then walk across and subtract!\"",
        "codeSnippet": "total_sum -= arr[i];\nif (left_sum == total_sum) return i;\nleft_sum += arr[i];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Equilibrium index of [-7, 1, 5, 2, -4, 3, 0]?",
        "options": [
          "3",
          "4",
          "0"
        ],
        "correctAnswer": "3",
        "explanation": "At index 3, Left sum = -7+1+5= -1. Right sum = -4+3+0= -1."
      },
      {
        "type": "match_following",
        "questionText": "Match the Sums!",
        "pairs": [
          {
            "key": "Left Sum",
            "value": "History"
          },
          {
            "key": "Right Sum",
            "value": "Future"
          },
          {
            "key": "Equilibrium",
            "value": "Balance"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update total_sum during the balance walk.",
        "codeSnippet": "total_sum ___ arr[i];",
        "correctAnswer": "-="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you reach the end without a match, return -1. There is no balance in the world today!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for the optimized Equilibrium search?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initial `left_sum` value?",
        "codeSnippet": "int left_s = ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Finding balance is hard for me because I'm lopsided from eating too much fruit! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the first element an equilibrium if the rest sum to 0?\"",
        "options": [
          "Yes",
          "No",
          "Only for birds"
        ],
        "correctAnswer": "Yes"
      }
    ]
  },
  {
    "order": 12,
    "title": "Missing Number Mystery",
    "desc": "Finding the bird that flew away from a sequence.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A sequence of 1 to N, but one bird is missing! Where did it go? Math bird to the rescue! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use the Gauss Formula: Sum of 1 to N = `N * (N + 1) / 2`. Subtract the actual sum to find the missing one!\"",
        "codeSnippet": "expected = n * (n + 1) / 2;\nreturn expected - actual_sum;"
      },
      {
        "type": "multiple_choice",
        "questionText": "In [1, 2, 4, 5], N=5, what is the missing number?",
        "options": [
          "3",
          "15",
          "0"
        ],
        "correctAnswer": "3",
        "explanation": "Expected = 5*6/2 = 15. Actual = 12. 15 - 12 = 3."
      },
      {
        "type": "match_following",
        "questionText": "Match the Formula!",
        "pairs": [
          {
            "key": "Sum 1 to N",
            "value": "n(n+1)/2"
          },
          {
            "key": "XOR Trick",
            "value": "n ^ arr[i]"
          },
          {
            "key": "Space",
            "value": "O(1)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate expected sum for range N.",
        "codeSnippet": "sum = (N * (___)) / 2;",
        "correctAnswer": "N+1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Be careful of Overflows! For huge N, the sum can be too large. Use the XOR trick to be a slick bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is (X ^ X) in bitwise logic?",
        "options": [
          "0",
          "X",
          "1"
        ],
        "correctAnswer": "0",
        "explanation": "Anything XORed with itself is zero."
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize XOR result.",
        "codeSnippet": "int x = ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"XORing all numbers 1 to N and then XORing all elements in the array leaves only the missing bird!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Which trick is more elegant?\"",
        "options": [
          "XOR",
          "Sum",
          "Subtraction"
        ],
        "correctAnswer": "XOR"
      }
    ]
  },
  {
    "order": 13,
    "title": "The Cumulative Climb",
    "desc": "Introduction to Prefix Sums.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Prefix Sum is like building a ladder! Each step is the sum of all elements before it. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"`prefix[i] = prefix[i-1] + arr[i]`. It lets you answer range sum queries instantly! 🦜\"",
        "codeSnippet": "for(int i=1; i<n; i++) arr[i] += arr[i-1];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Prefix sum of [1, 2, 3, 4]?",
        "options": [
          "[1, 3, 6, 10]",
          "[1, 2, 3, 4]",
          "[10, 6, 3, 1]"
        ],
        "correctAnswer": "[1, 3, 6, 10]"
      },
      {
        "type": "match_following",
        "questionText": "Match Operations!",
        "pairs": [
          {
            "key": "Range Sum(i,j)",
            "value": "P[j] - P[i-1]"
          },
          {
            "key": "Prefix[0]",
            "value": "arr[0]"
          },
          {
            "key": "Time",
            "value": "O(1) after O(N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Compute query sum for range [L, R] using prefix array `P`.",
        "codeSnippet": "result = P[R] - P[___];",
        "correctAnswer": "L-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a core skill for Zoho Elite! They love range query puzzles!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of using a separate Prefix Array?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update current element with previous sum.",
        "codeSnippet": "arr[i] ___ arr[i-1];",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you do it in-place, the space complexity is O(1). Be a smart bird!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the top of the ladder?\"",
        "options": [
          "YES!",
          "Keep climbing!",
          "Squawk!"
        ],
        "correctAnswer": "YES!"
      }
    ]
  },
  {
    "order": 14,
    "title": "Odd Birds Out",
    "desc": "Partitioning an array into odd and even numbers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Separate the flock! Even birds to the left, odd birds to the right! Two-pointers are your wings!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"While `left < right`, if `arr[left]` is even, move on. If `arr[right]` is odd, move on. If both are misplaced, SWAP!\"",
        "codeSnippet": "while(l < r) {\n  if(a[l]%2 == 0) l++;\n  else if(a[r]%2 != 0) r--;\n  else swap(a[l], a[r]);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the goal of this MISSION?",
        "options": [
          "Partitioning",
          "Sorting",
          "Deleting"
        ],
        "correctAnswer": "Partitioning"
      },
      {
        "type": "match_following",
        "questionText": "Match the Misplaced!",
        "pairs": [
          {
            "key": "Even on Right",
            "value": "Swap"
          },
          {
            "key": "Odd on Left",
            "value": "Swap"
          },
          {
            "key": "Even on Left",
            "value": "Keep"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check for odd before swapping.",
        "codeSnippet": "if (arr[right] % 2 ___ 0)",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time Complexity: O(N). Each bird is visited once. Space: O(1) if in-place!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does this preserve the original relative order?",
        "options": [
          "No",
          "Yes",
          "Depends on bird"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Condition to continue the two-pointer loop.",
        "codeSnippet": "while (left ___ right)",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If order matters, you need extra space. But Pico likes it in-place! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Which side do I like better?\"",
        "options": [
          "The middle!",
          "Even",
          "Odd"
        ],
        "correctAnswer": "The middle!"
      }
    ]
  },
  {
    "order": 15,
    "title": "The Array Rotate",
    "desc": "Shifting the entire flock by one position.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cyclic rotation! Move every bird one step to the right, and the last bird flies to the front!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Save the last bird first, then shift everyone else backward!\"",
        "codeSnippet": "int last = arr[n-1];\nfor(int i=n-1; i>0; i--) arr[i] = arr[i-1];\narr[0] = last;"
      },
      {
        "type": "multiple_choice",
        "questionText": "After a right rotation on [1, 2, 3], what is the result?",
        "options": [
          "[3, 1, 2]",
          "[2, 3, 1]",
          "[1, 2, 3]"
        ],
        "correctAnswer": "[3, 1, 2]"
      },
      {
        "type": "match_following",
        "questionText": "Match Shifting Directions!",
        "pairs": [
          {
            "key": "Right",
            "value": "arr[i] = arr[i-1]"
          },
          {
            "key": "Left",
            "value": "arr[i] = arr[i+1]"
          },
          {
            "key": "Temporal",
            "value": "Last bird saved"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Set the new first element.",
        "codeSnippet": "arr[0] = ___;",
        "correctAnswer": "last"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One step is O(N). To rotate K steps, repeat it or use a smarter reversal trick! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of rotating by K steps using the simple repeat method?",
        "options": [
          "O(N*K)",
          "O(N)",
          "O(K)"
        ],
        "correctAnswer": "O(N*K)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Shift from right to left index loop.",
        "codeSnippet": "for(int i = n-1; i ___ 0; i--)",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Imagine K is huge. Use `K % N` to avoid pointless flying in circles! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=5 and K=10, how many effective rotations occur?",
        "options": [
          "0",
          "5",
          "1"
        ],
        "correctAnswer": "0"
      }
    ]
  },
  {
    "order": 16,
    "title": "Frequency Counter",
    "desc": "Counting occurrences of small numbers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"How many of each bird? If the birds are small numbers, use a frequency array! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Create a `freq` array of size MAX_VAL + 1. Each time you see a number, increment its habitat!\"",
        "codeSnippet": "freq[arr[i]]++;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the frequency of 2 in [1, 2, 2, 3, 2]?",
        "options": [
          "3",
          "2",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Match Counter Logic!",
        "pairs": [
          {
            "key": "Index",
            "value": "Value itself"
          },
          {
            "key": "freq[x]",
            "value": "Count of x"
          },
          {
            "key": "Space",
            "value": "Max Number"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Increment the frequency index.",
        "codeSnippet": "freq[___]++;",
        "correctAnswer": "arr[i]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is O(N) time but needs space depending on the largest number. Don't use this for billions! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of Frequency Array?",
        "options": [
          "O(Max_Value)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(Max_Value)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize results array with zeros.",
        "codeSnippet": "int freq[100] = {___};",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If bird values are huge, use a HASH MAP instead. We'll learn that later! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"How many Picos are in this array?\"",
        "options": [
          "1 (Only me!)",
          "Many!",
          "0"
        ],
        "correctAnswer": "1 (Only me!)"
      }
    ]
  },
  {
    "order": 17,
    "title": "Memory Overflows",
    "desc": "Understanding array limits and safety.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Computer memory is not infinite! If you ask for too many nests, the computer will squawk NO!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stack vs Heap! Local arrays inside functions go to the Stack. They are small and fast. Huge arrays go to the Heap!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Where are massive arrays (e.g., 10^7 size) usually stored?",
        "options": [
          "Heap",
          "Stack",
          "Disk"
        ],
        "correctAnswer": "Heap"
      },
      {
        "type": "match_following",
        "questionText": "Match the Limits!",
        "pairs": [
          {
            "key": "Stack",
            "value": "~1MB to 8MB"
          },
          {
            "key": "Heap",
            "value": "GBs (available RAM)"
          },
          {
            "key": "Array Size",
            "value": "Fixed"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Allocate a massive array on the heap in C++.",
        "codeSnippet": "int* arr = new ___ [1000000];",
        "correctAnswer": "int"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In local variables, avoid `int arr[1000000]`. It will CRASH with Stack Overflow! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which error occurs if a local array is too large?",
        "options": [
          "Stack Overflow",
          "Segmentation Fault",
          "Memory Leak"
        ],
        "correctAnswer": "Stack Overflow"
      },
      {
        "type": "code_fill_in",
        "questionText": "C: Free the heap memory when done.",
        "codeSnippet": "___(arr);",
        "correctAnswer": "free"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't leave trash in your nest! Always free what you allocate!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my memory better than yours?\"",
        "options": [
          "Probably!",
          "No.",
          "What was the question?"
        ],
        "correctAnswer": "Probably!"
      }
    ]
  },
  {
    "order": 18,
    "title": "The Binary Twist (Intro)",
    "desc": "Searching in a SORTED flock.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the flock is sorted, don't walk! Fly! Binary search cuts the search space in half every jump!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Look at the middle bird. If target > middle, ignore the left half. If target < middle, ignore the right half!\"",
        "codeSnippet": "mid = (low + high) / 2;\nif (a[mid] < target) low = mid + 1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the requirement for Binary Search?",
        "options": [
          "Sorted Array",
          "Unsorted Array",
          "Large Array"
        ],
        "correctAnswer": "Sorted Array"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Steps!",
        "pairs": [
          {
            "key": "Compare Mid",
            "value": "O(1)"
          },
          {
            "key": "Half Space",
            "value": "O(N/2)"
          },
          {
            "key": "Complexity",
            "value": "O(log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate the middle index safely to avoid overflow.",
        "codeSnippet": "mid = low + ( (___ - low) / 2 );",
        "correctAnswer": "high"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(log N) is incredible! You can find a bird among a BILLION in just 30 steps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=1000, roughly how many steps for Binary Search?",
        "options": [
          "10",
          "100",
          "1000"
        ],
        "correctAnswer": "10",
        "explanation": "2^10 = 1024"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update `high` if target is smaller.",
        "codeSnippet": "if (a[mid] > target) high = ___;",
        "correctAnswer": "mid-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We will dive deeper into this later. For now, remember: SORTED = FAST!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I find you in O(log N)?\"",
        "options": [
          "YES!",
          "In O(1)!",
          "Never."
        ],
        "correctAnswer": "YES!"
      }
    ]
  },
  {
    "order": 19,
    "title": "Sparse Cages",
    "desc": "Handling arrays with mostly zero values.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A sparse array is like a giant cage with only a few birds. Storing all those empty perches (zeros) is a waste of seeds!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Instead of a giant array, we store only the `(Row, Column, Value)` of the non-empty nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a Sparse Array?",
        "options": [
          "Mostly zeros",
          "Mostly ones",
          "Very small"
        ],
        "correctAnswer": "Mostly zeros"
      },
      {
        "type": "match_following",
        "questionText": "Match the Storage!",
        "pairs": [
          {
            "key": "Regular",
            "value": "Size N"
          },
          {
            "key": "Sparse",
            "value": "Non-zero count"
          },
          {
            "key": "Efficiency",
            "value": "Saves memory"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Percentage of non-zeros to be considered sparse?",
        "codeSnippet": "if (nonzero_count < (total_size / ___))",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is crucial for Google Maps and social network graphs. Millions of nodes, but few connections!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Primary benefit of Sparse Array representation?",
        "options": [
          "Memory savings",
          "Search speed",
          "Color coding"
        ],
        "correctAnswer": "Memory savings"
      },
      {
        "type": "code_fill_in",
        "questionText": "Store as a list of ___.",
        "codeSnippet": "list of ___",
        "correctAnswer": "triplets"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't waste perches, fledgling. Be efficient!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my nest sparse?\"",
        "options": [
          "Full of seeds!",
          "Empty.",
          "A bit."
        ],
        "correctAnswer": "Full of seeds!"
      }
    ]
  },
  {
    "order": 20,
    "title": "Stage 1 Graduation",
    "desc": "The final test of your foundation flight.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"YOU MADE IT! The end of Stage 1. You have proven yourself to be more than a feather-brain! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We covered Memory, Indexing, Sums, Min/Max, Parity, and simple Search. You are ready to climb higher!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the most important lesson from Stage 1?",
        "options": [
          "O(1) Access",
          "Pico is cute",
          "Birdseed is good"
        ],
        "correctAnswer": "O(1) Access"
      },
      {
        "type": "multiple_choice",
        "questionText": "Array access time?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Linear search time?",
        "options": [
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Flipping an array space?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total sum of [1, 1, 1]?",
        "options": [
          "3",
          "1",
          "2"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Final Match!",
        "pairs": [
          {
            "key": "Pico",
            "value": "Master"
          },
          {
            "key": "Student",
            "value": "You"
          },
          {
            "key": "DSA",
            "value": "Mission"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The reward for a good flight is a harder destination. Next: Two-Pointers and Sliding Windows!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for Stage 2?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "Maybe."
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  }
];

module.exports = stage1;