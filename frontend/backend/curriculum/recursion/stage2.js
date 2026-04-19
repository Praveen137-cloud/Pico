const stage2 = [
  {
    "order": 11,
    "title": "String Length",
    "desc": "Measuring feathers one by one recursively.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Length Check! How many characters are in this string? Instead of a loop, we can just peel off one char at a time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursive Length: 1 + Length of the rest of the string. Base case? An empty string has length 0! 🦜\"",
        "codeSnippet": "int len(char* s) {\n  if (*s == '\\0') return 0;\n  return 1 + len(s + 1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the base case for recursive string length?",
        "options": [
          "Empty string ('' or '\\0')",
          "String of size 1",
          "Null pointer"
        ],
        "correctAnswer": "Empty string ('' or '\\0')"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "len('hi')",
            "value": "1 + len('i')"
          },
          {
            "key": "len('i')",
            "value": "1 + len('')"
          },
          {
            "key": "len('')",
            "value": "0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Expression for the remaining string in JS/Python.",
        "codeSnippet": "return 1 + length(str. ___ (1));",
        "correctAnswer": "substr"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time and O(N) space. Not as efficient as a loop, but very elegant for our recursive mindset! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If the string is 'Pico', how many calls are made total?",
        "options": [
          "5 (P, i, c, o, '')",
          "4",
          "1"
        ],
        "correctAnswer": "5 (P, i, c, o, '')"
      },
      {
        "type": "code_fill_in",
        "questionText": "Python slice for rest of string.",
        "codeSnippet": "return 1 + length(s[ ___ :])",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Slow and steady measures the wing! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my name long?\"",
        "options": [
          "4 chars!",
          "No.",
          "0"
        ],
        "correctAnswer": "4 chars!"
      }
    ]
  },
  {
    "order": 12,
    "title": "Palindrome Check",
    "desc": "Symmetry in the mirror.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Palindrome! 'racecar', 'madam', 'level'. Does it look the same backward and forward? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Check the first and last wings. If they match, check the inner flock! 🦜\"",
        "codeSnippet": "bool check(string s, int i, int j) {\n  if (i >= j) return true;\n  return (s[i] == s[j]) && check(s, i + 1, j - 1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is 'bird' a palindrome?",
        "options": [
          "No ('b' != 'd')",
          "Yes",
          "Maybe"
        ],
        "correctAnswer": "No ('b' != 'd')"
      },
      {
        "type": "match_following",
        "questionText": "Match the Symmetry!",
        "pairs": [
          {
            "key": "s[i] != s[j]",
            "value": "Return False"
          },
          {
            "key": "i >= j",
            "value": "Return True (Base Case)"
          },
          {
            "key": "Recursive Step",
            "value": "check(i+1, j-1)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the recursive case.",
        "codeSnippet": "return (s[i] == s[j]) ___ isPal(s, i+1, j-1);",
        "correctAnswer": "&&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time and O(N) stack space. Perfectly balanced, as all things should be! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the string has only 1 character?",
        "options": [
          "It is a palindrome",
          "It is not",
          "Error"
        ],
        "correctAnswer": "It is a palindrome"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initial pointers for check(s, 0, ___).",
        "codeSnippet": "check(s, 0, s.length - ___ )",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reflection is the key to truth! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a palindrome?\"",
        "options": [
          "ocip... No.",
          "SQUAWK YES!",
          "0"
        ],
        "correctAnswer": "ocip... No."
      }
    ]
  },
  {
    "order": 13,
    "title": "Recursive Linear Search",
    "desc": "Finding seeds without a loop.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Search Mission! Can you find target X in the array using recursion? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Check index 0. If it matches, return 0. Else, look in the rest of the array starting from index 1! 🦜\"",
        "codeSnippet": "int search(int* arr, int n, int x) {\n  if (n == 0) return -1;\n  if (arr[0] == x) return 0;\n  return search(arr + 1, n - 1, x); // Wait, this changes index...\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Better approach: Pass the index `i` as a parameter?",
        "options": [
          "Yes, to keep array intact",
          "No, pointer math is better",
          "None"
        ],
        "correctAnswer": "Yes, to keep array intact"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Cases!",
        "pairs": [
          {
            "key": "arr[i] == x",
            "value": "return i"
          },
          {
            "key": "i == n",
            "value": "return -1"
          },
          {
            "key": "Recursive",
            "value": "search(arr, i + 1, n, x)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check for when the array is exhausted.",
        "codeSnippet": "if (i ___ n) return -1;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time. Every element is visited once via a new stack frame. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst case recursive calls?",
        "options": [
          "N + 1",
          "1",
          "N^2"
        ],
        "correctAnswer": "N + 1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Increment index in recursive call.",
        "codeSnippet": "return search(arr, ___ , x);",
        "correctAnswer": "index + 1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"No nest left unturned! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you find the golden seed?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 14,
    "title": "Recursive Binary Search",
    "desc": "Elite jumping in a sorted world.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Efficiency Peak! Searching in a SORTED flock. Why walk when we can jump? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Divide and Conquer! Check the middle. If smaller, recurse left; if larger, recurse right! 🦜\"",
        "codeSnippet": "if (arr[mid] == x) return mid;\nif (arr[mid] > x) return binSearch(arr, low, mid - 1, x);\nelse return binSearch(arr, mid + 1, high, x);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of recursive binary search?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Search Bounds!",
        "pairs": [
          {
            "key": "Target < Mid",
            "value": "high = mid - 1"
          },
          {
            "key": "Target > Mid",
            "value": "low = mid + 1"
          },
          {
            "key": "Base Case",
            "value": "low > high"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate mid-point safely.",
        "codeSnippet": "int mid = low + ( (___ - low) / 2 );",
        "correctAnswer": "high"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Space Complexity? O(log N) due to the recursive call stack depth! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can this be tail-optimized?",
        "options": [
          "Yes (The call is the last action)",
          "No",
          "Only in Python"
        ],
        "correctAnswer": "Yes (The call is the last action)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Empty range condition.",
        "codeSnippet": "if (low ___ high) return -1;",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Faster than a Peregrine Falcon! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at any index?\"",
        "options": [
          "Index #1!",
          "No.",
          "0"
        ],
        "correctAnswer": "Index #1!"
      }
    ]
  },
  {
    "order": 15,
    "title": "Reverse a String",
    "desc": "Flipping the word order bird-by-bird.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flip the Script! To reverse a string, take the last character and put it in front of the reversed rest of the string! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reverse('abc') = Reverse('bc') + 'a'. 🦜\"",
        "codeSnippet": "string reverse(string s) {\n  if (s == \"\") return \"\";\n  return reverse(s.substr(1)) + s[0];\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is reverse('Pico')?",
        "options": [
          "'ociP'",
          "'Poci'",
          "'Pic'"
        ],
        "correctAnswer": "'ociP'"
      },
      {
        "type": "match_following",
        "questionText": "Match Reverse Steps!",
        "pairs": [
          {
            "key": "reverse('ab')",
            "value": "reverse('b') + 'a'"
          },
          {
            "key": "reverse('b')",
            "value": "reverse('') + 'b'"
          },
          {
            "key": "reverse('')",
            "value": "''"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complete the recursive return for 'Pico'.",
        "codeSnippet": "return reverse(s.substr(1)) ___ s[0];",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This builds the string as the calls return (climb back up the stack). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for string reversal (if concatenation is O(1))?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: length of s is ___.",
        "codeSnippet": "if (s.length() <= ___ ) return s;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Backward is just another forward! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you read my mind in reverse?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 16,
    "title": "Remove Duplicates",
    "desc": "Cleaning the flock of copycats recursively.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unique Birds! If a bird is a duplicate of its neighbor, ignore it and check the rest! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Compare `s[0]` and `s[1]`. If same, skip `s[0]`. If different, include `s[0]` and continue. 🦜\"",
        "codeSnippet": "if (s[0] == s[1]) return removeDup(s.substr(1));\nreturn s[0] + removeDup(s.substr(1));"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of removeDup('aaabbb')?",
        "options": [
          "'ab'",
          "'ababab'",
          "''"
        ],
        "correctAnswer": "'ab'"
      },
      {
        "type": "match_following",
        "questionText": "Match the Deduplication!",
        "pairs": [
          {
            "key": "'aa'",
            "value": "Skip first 'a'"
          },
          {
            "key": "'ab'",
            "value": "Keep 'a', check 'b'"
          },
          {
            "key": "Base",
            "value": "Empty or Size 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Skip current if it matches next.",
        "codeSnippet": "if (s[0] == s[1]) return ___(s.substr(1));",
        "correctAnswer": "removeDup"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This only removes ADJACENT duplicates. For global ones, you need a Hash Set! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for adjacent removal?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check string length before indexing `s[1]`.",
        "codeSnippet": "if (s.length() < ___ ) return s;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Quality over quantity! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are there two Picos?\"",
        "options": [
          "Only one elite bird!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "Only one elite bird!"
      }
    ]
  },
  {
    "order": 17,
    "title": "All Subsequences",
    "desc": "Finding every possible bird sub-flock (Power Set).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Explorable Paths! For every bird in the flock, you have TWO choices: Include it, or Exclude it. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This creates a branching tree of possibilities. Total subsequences? 2^N! 🦜\"",
        "codeSnippet": "void generate(string input, string output) {\n  if (input == \"\") { print(output); return; }\n  generate(input.substr(1), output + input[0]); // Include\n  generate(input.substr(1), output); // Exclude\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many subsequences for a string of length 3 ('abc')?",
        "options": [
          "8 (2^3)",
          "3",
          "6"
        ],
        "correctAnswer": "8 (2^3)"
      },
      {
        "type": "match_following",
        "questionText": "Match Subsequence Choices!",
        "pairs": [
          {
            "key": "Choice 1",
            "value": "Take current"
          },
          {
            "key": "Choice 2",
            "value": "Don't take"
          },
          {
            "key": "Total",
            "value": "Power Set"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The call where we EXCLUDE index 0.",
        "codeSnippet": "generate(s.substr(1), ___ );",
        "correctAnswer": "output"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity O(2^N). This is where recursion starts to get heavy. Be careful with large strings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the subsequence of 'ab' that includes nothing?",
        "options": [
          "'' (Empty string)",
          "'a'",
          "'b'"
        ],
        "correctAnswer": "'' (Empty string)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive calls per step.",
        "codeSnippet": "Each call results in ___ new calls.",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every possibility is a dream within a dream! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I be in all subsequences?\"",
        "options": [
          "If you choose me!",
          "No.",
          "0"
        ],
        "correctAnswer": "If you choose me!"
      }
    ]
  },
  {
    "order": 18,
    "title": "Print Flux",
    "desc": "Printing arrays forward and backward with recursion.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Order of Song! Where you put your print state matters more than you think. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Print(n) { print(node); call(n-1); } -> FORWARD. But if you call BEFORE printing, you print BACKWARD! 🦜\"",
        "codeSnippet": "void back(n) { if(n<0) return; back(n-1); print(a[n]); }"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you print AFTER the recursive call, when does the first print happen?",
        "options": [
          "After hitting the base case",
          "Immediately",
          "Never"
        ],
        "correctAnswer": "After hitting the base case"
      },
      {
        "type": "match_following",
        "questionText": "Match Print Order!",
        "pairs": [
          {
            "key": "Pre-order",
            "value": "Print then call"
          },
          {
            "key": "Post-order",
            "value": "Call then print"
          },
          {
            "key": "Stack Effect",
            "value": "Reverses the order"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Write a backward print step.",
        "codeSnippet": "printArray(i + 1);\n___(arr[i]);",
        "correctAnswer": "print"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the essence of tree traversals! Pre-order, In-order, Post-order—it's all about where the bird sings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to print an array of size N recursively?",
        "options": [
          "O(N)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: out of bounds index `i`.",
        "codeSnippet": "if (i ___ n) return;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Forward for progress, backward for wisdom! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I sing both ways?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 19,
    "title": "All Uppercase",
    "desc": "Finding the first uppercase bird in a string.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Big Birds! Find the first character that is UPPERCASE (A-Z). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Check index 0. If `isupper()`, return it. Else, check the rest of the string! 🦜\"",
        "codeSnippet": "if (isupper(s[i])) return s[i];\nreturn findFirst(s, i + 1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "First uppercase in 'picoAcademy'?",
        "options": [
          "'A'",
          "'p'",
          "None"
        ],
        "correctAnswer": "'A'"
      },
      {
        "type": "match_following",
        "questionText": "Match Character Logic!",
        "pairs": [
          {
            "key": "A-Z",
            "value": "Uppercase"
          },
          {
            "key": "a-z",
            "value": "Lowercase"
          },
          {
            "key": "Found",
            "value": "Stop & Return"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call if not found.",
        "codeSnippet": "return findUpper(s, ___ );",
        "correctAnswer": "index + 1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursion can be a search party. Once the leader finds the prize, the message travels back up! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Return value if no uppercase is found?",
        "options": [
          "0 or '\\0'",
          "'-1'",
          "Crashes"
        ],
        "correctAnswer": "0 or '\\0'"
      },
      {
        "type": "code_fill_in",
        "questionText": "CPP check for uppercase.",
        "codeSnippet": "if (___(s[i]))",
        "correctAnswer": "isupper"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spot the giant, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I UPPERCASE?\"",
        "options": [
          "Pico... No.",
          "PICO... YES!",
          "0"
        ],
        "correctAnswer": "Pico... No."
      }
    ]
  },
  {
    "order": 20,
    "title": "Master Point (Recursion 2)",
    "desc": "String and Array mastery confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 2 COMPLETE! You've used recursion to measure, search, and reverse the world! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which recursive search is faster in a sorted array?",
        "options": [
          "Binary Search",
          "Linear Search",
          "Jump Search"
        ],
        "correctAnswer": "Binary Search"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total number of subsequences for string size N?",
        "options": [
          "2^N",
          "N^2",
          "N!"
        ],
        "correctAnswer": "2^N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Your wings are strong. In Stage 3, we face the Sorting algorithms! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 2",
            "value": "Explorer"
          },
          {
            "key": "Stage 3",
            "value": "Pathfinder"
          },
          {
            "key": "Next",
            "value": "Sorting Sands"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Next stage is...",
        "codeSnippet": "currentStage + ___ ;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deep dreams, fast flights! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Continue?",
        "options": [
          "SQUAWK YES!",
          "Maybe.",
          "No."
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final Call?",
        "options": [
          "Recurse!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Recurse!"
      }
    ]
  }
];

module.exports = stage2;
