const stage1 = [
  {
    "order": 1,
    "title": "The Forest Scout",
    "desc": "Introduction to Searching and Linear Search.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Grand Hunt! Searching is the art of finding a specific bird in this vast forest. If we have no order, we must check every branch! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Linear Search: Start from the first tree and check each one until you find the bird or reach the end. It's simple, but slow for big forests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In Linear Search, what is the best-case time complexity?",
        "options": [
          "O(1) - Found at the first tree!",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1) - Found at the first tree!"
      },
      {
        "type": "match_following",
        "questionText": "Match Search basics!",
        "pairs": [
          {
            "key": "Linear Search",
            "value": "Sequential scan"
          },
          {
            "key": "Best Case",
            "value": "First element"
          },
          {
            "key": "Worst Case",
            "value": "Last or not found"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Linear search checks elements ___.",
        "codeSnippet": "Traversal = ___ ;",
        "correctAnswer": "one by one"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Linear Search in a forest of N trees?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for equality.",
        "codeSnippet": "if (forest[i] ___ target) return i;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Every bird counts! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Can I find a bird in an unsorted list quickly?\"",
        "options": [
          "Only using Linear Search!",
          "Yes, effortlessly",
          "0"
        ],
        "correctAnswer": "Only using Linear Search!"
      }
    ]
  },
  {
    "order": 2,
    "title": "The Sentinel Scout",
    "desc": "Optimizing Linear Search with a Sentinel.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Guarded Gate! We can speed up Linear Search by placing the bird we're looking for at the very last tree. This avoids checking the boundary in every step! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Sentinel Search: Temporarily replace the last element with the target. Now we only need one comparison per loop! 🦜\"",
        "codeSnippet": "int last = arr[n-1];\narr[n-1] = target;\nwhile(arr[i] != target) i++;\narr[n-1] = last;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Sentinel Search reduce?",
        "options": [
          "Number of boundary comparisons",
          "Time complexity from O(N) to O(log N)",
          "Memory usage"
        ],
        "correctAnswer": "Number of boundary comparisons"
      },
      {
        "type": "match_following",
        "questionText": "Match Sentinel logic!",
        "pairs": [
          {
            "key": "Sentinel",
            "value": "Temporary target"
          },
          {
            "key": "Benefit",
            "value": "Fewer loop checks"
          },
          {
            "key": "Complexity",
            "value": "Still O(N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Sentinel search reduces the number of ___ per iteration.",
        "codeSnippet": "Reduced = ___ ;",
        "correctAnswer": "comparisons"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Sentinel Search worth it for very small arrays?",
        "options": [
          "Not significantly",
          "Yes, always",
          "No, it's slower"
        ],
        "correctAnswer": "Not significantly"
      },
      {
        "type": "code_fill_in",
        "questionText": "Set sentinel.",
        "codeSnippet": "arr[n-1] = ___ ;",
        "correctAnswer": "target"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Smart scouting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Does the worst case change?\"",
        "options": [
          "No, it's still O(N)",
          "Yes, O(1)!",
          "0"
        ],
        "correctAnswer": "No, it's still O(N)"
      }
    ]
  },
  {
    "order": 3,
    "title": "The Sorted Divide",
    "desc": "Introduction to Binary Search.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Order is Power! If the birds are perched in order of their size, we don't need to check every tree. We can just check the middle and eliminate half the forest! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Binary Search: The ultimate hunter. It requires a SORTED forest. By checking the middle, we decide if our bird is in the left half or the right half! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the mandatory condition for Binary Search?",
        "options": [
          "Sorted elements",
          "Unique elements",
          "Bird sounds"
        ],
        "correctAnswer": "Sorted elements"
      },
      {
        "type": "match_following",
        "questionText": "Match BS logic!",
        "pairs": [
          {
            "key": "Target < Middle",
            "value": "Search Left half"
          },
          {
            "key": "Target > Middle",
            "value": "Search Right half"
          },
          {
            "key": "Target == Middle",
            "value": "Found!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Binary Search follows which paradigm?",
        "codeSnippet": "Paradigm = ___ ;",
        "correctAnswer": "divide and conquer"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Time Complexity: O(log N). From 1,000,000 trees to 1 bird in just 20 steps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Efficiency of Binary Search vs Linear Search on 1000 items?",
        "options": [
          "BS is much faster",
          "Linear is faster",
          "Same"
        ],
        "correctAnswer": "BS is much faster"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initial low index.",
        "codeSnippet": "int low = ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Splitting the ranks! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is order mandatory?\"",
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
    "order": 4,
    "title": "Precision Midpoint",
    "desc": "Calculating the middle index safely.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Avoid the Overflow! Calculating `(low + high) / 2` can crash your wings if the numbers are too big. Use the safe path! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Safe Middle: `low + (high - low) / 2`. This ensures the sum never exceeds the limits of our integer nest! 🦜\"",
        "codeSnippet": "mid = low + (high - low) / 2;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use `low + (high - low) / 2`?",
        "options": [
          "Prevent Integer Overflow",
          "It's faster",
          "Pico likes it"
        ],
        "correctAnswer": "Prevent Integer Overflow"
      },
      {
        "type": "match_following",
        "questionText": "Match Midpoint math!",
        "pairs": [
          {
            "key": "low=0, high=10",
            "value": "mid=5"
          },
          {
            "key": "low=5, high=10",
            "value": "mid=7"
          },
          {
            "key": "Max Int safe",
            "value": "low + (high-low)/2"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Safe mid calculation formula.",
        "codeSnippet": "mid = low + ( ___ ) / 2;",
        "correctAnswer": "high - low"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Even for small forests, habits define the elite scout! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If low=10 and high=20, what is mid?",
        "options": [
          "15",
          "10",
          "20"
        ],
        "correctAnswer": "15"
      },
      {
        "type": "code_fill_in",
        "questionText": "Middle calculation.",
        "codeSnippet": "mid = low + (high - low) ___ 2;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Steady center! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it safe now?\"",
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
    "order": 5,
    "title": "Iterative Conquest",
    "desc": "Implementing Iterative Binary Search.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Ground Loop! Iterative search uses a simple while-loop to shrink the search space until the bird is trapped! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Loop: `while (low <= high)`. If target > mid, move `low = mid + 1`. If target < mid, move `high = mid - 1`. 🦜\"",
        "codeSnippet": "while (low <= high) {\n  int mid = low + (high - low) / 2;\n  if (arr[mid] == target) return mid;\n  if (arr[mid] < target) low = mid + 1;\n  else high = mid - 1;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In Iterative BS, when does the search end as 'unsuccessful'?",
        "options": [
          "When low > high",
          "When mid == 0",
          "When birds leave"
        ],
        "correctAnswer": "When low > high"
      },
      {
        "type": "match_following",
        "questionText": "Match Iterative steps!",
        "pairs": [
          {
            "key": "Move low",
            "value": "mid + 1"
          },
          {
            "key": "Move high",
            "value": "mid - 1"
          },
          {
            "key": "Condition",
            "value": "low <= high"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Termination condition for the loop.",
        "codeSnippet": "while (low ___ high)",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Space Complexity: O(1). No recursion stack needed! Efficient and lean. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if target is NOT in the array?",
        "options": [
          "Returns -1 or sentinel",
          "Infinite loop",
          "Array crashes"
        ],
        "correctAnswer": "Returns -1 or sentinel"
      },
      {
        "type": "code_fill_in",
        "questionText": "Return not found.",
        "codeSnippet": "return ___ ;",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Looped victory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the loop closed?\"",
        "options": [
          "Until low > high!",
          "No.",
          "0"
        ],
        "correctAnswer": "Until low > high!"
      }
    ]
  },
  {
    "order": 6,
    "title": "Recursive Reach",
    "desc": "Implementing Recursive Binary Search.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Echoing Call! Recursion lets the forest speak to itself. Each call narrows the search in a new, smaller branch! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Recursion: Pass `low` and `high` as parameters. Base case is `low > high`. Recursive calls narrow the range! 🦜\"",
        "codeSnippet": "int search(arr, low, high, x) {\n  if (low > high) return -1;\n  int mid = low + (high-low)/2;\n  if (arr[mid] == x) return mid;\n  if (arr[mid] > x) return search(arr, low, mid-1, x);\n  return search(arr, mid+1, high, x);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of Recursive Binary Search?",
        "options": [
          "O(log N) (Stack space)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N) (Stack space)"
      },
      {
        "type": "match_following",
        "questionText": "Match Recursive parts!",
        "pairs": [
          {
            "key": "Base Case",
            "value": "low > high"
          },
          {
            "key": "Stack Space",
            "value": "O(log N)"
          },
          {
            "key": "Time",
            "value": "O(log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive BS base case condition.",
        "codeSnippet": "if (low ___ high) return -1;",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Elegant and clean code, but uses recursive stack memory. Choose your wings wisely! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can recursion overflow the stack for huge N?",
        "options": [
          "Yes, if N is massive",
          "No, it's logarithmic",
          "Never"
        ],
        "correctAnswer": "No, it's logarithmic"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call right.",
        "codeSnippet": "return search(arr, mid + 1, high, ___);",
        "correctAnswer": "x"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Echoing wisdom! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Does the recursion end?\"",
        "options": [
          "At the base case!",
          "No.",
          "0"
        ],
        "correctAnswer": "At the base case!"
      }
    ]
  },
  {
    "order": 7,
    "title": "The First Glimpse",
    "desc": "Finding the first occurrence of an element.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Earliest Bird! When many birds look the same, we might want to find the one closest to the start of the forest. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"First Occurrence: When `arr[mid] == target`, don't stop! Save the index as a potential answer and search the LEFT half to see if a earlier bird exists! 🦜\"",
        "codeSnippet": "if (arr[mid] == target) {\n  result = mid;\n  high = mid - 1;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "To find the FIRST occurrence, where do you search after finding a match?",
        "options": [
          "Left half",
          "Right half",
          "Stop immediate"
        ],
        "correctAnswer": "Left half"
      },
      {
        "type": "match_following",
        "questionText": "Match First Occur logic!",
        "pairs": [
          {
            "key": "Match found",
            "value": "Save as result"
          },
          {
            "key": "Search left",
            "value": "high = mid - 1"
          },
          {
            "key": "Continue",
            "value": "Refine match"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "After match, set `high` to check for earlier matches.",
        "codeSnippet": "high = ___ ;",
        "correctAnswer": "mid - 1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(log N). We still halve the forest, just with a secondary mission to find the earliest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [1, 2, 2, 2, 3], first index of 2?",
        "options": [
          "1",
          "2",
          "3"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Save potential result.",
        "codeSnippet": "if (arr[mid] == x) ___ = mid;",
        "correctAnswer": "result"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Earliest entry! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we find the very first?\"",
        "options": [
          "Found and verified!",
          "No.",
          "0"
        ],
        "correctAnswer": "Found and verified!"
      }
    ]
  },
  {
    "order": 8,
    "title": "The Last Sighting",
    "desc": "Finding the last occurrence of an element.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Final Perch! If multiple identical birds exist, finding the very last one requires searching the RIGHT half after a match! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Last Occurrence: When `arr[mid] == target`, save the result and move `low = mid + 1` to check for later birds! 🦜\"",
        "codeSnippet": "if (arr[mid] == target) {\n  result = mid;\n  low = mid + 1;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "To find the LAST occurrence, where do you search after a match?",
        "options": [
          "Right half",
          "Left half",
          "Middle"
        ],
        "correctAnswer": "Right half"
      },
      {
        "type": "match_following",
        "questionText": "Match Last Occur logic!",
        "pairs": [
          {
            "key": "Match found",
            "value": "Save as result"
          },
          {
            "key": "Search right",
            "value": "low = mid + 1"
          },
          {
            "key": "Continue",
            "value": "Check for later"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "After match, set `low` to check for later matches.",
        "codeSnippet": "low = ___ ;",
        "correctAnswer": "mid + 1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(log N). Same speed, different direction! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [1, 2, 2, 2, 3], last index of 2?",
        "options": [
          "3",
          "2",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Move low forward.",
        "codeSnippet": "low = mid ___ 1;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Latest sighting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we find the very last?\"",
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
    "order": 9,
    "title": "Counting the Flock",
    "desc": "Count total occurrences using Binary Search.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Census! To count how many identical birds are in a sorted forest, we can find the `First` and `Last` occurrences and subtract! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Count = (Last Index - First Index + 1). O(log N) because we run two Binary Searches! 🦜\"",
        "codeSnippet": "count = (last - first) + 1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "If first=2 and last=5, how many birds are there?",
        "options": [
          "4",
          "3",
          "5"
        ],
        "correctAnswer": "4",
        "explanation": "5 - 2 + 1 = 4"
      },
      {
        "type": "match_following",
        "questionText": "Match Counting logic!",
        "pairs": [
          {
            "key": "First Find",
            "value": "Earliest match"
          },
          {
            "key": "Last Find",
            "value": "Latest match"
          },
          {
            "key": "Formula",
            "value": "Last - First + 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total count formula in sorted array.",
        "codeSnippet": "Count = (Last - First) ___ 1;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Much faster than O(N) linear counting. Scalable for billions of birds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to count in sorted array?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Range calculation.",
        "codeSnippet": "total = last ___ first + 1;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Census accuracy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Can we count quickly?\"",
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
    "order": 10,
    "title": "The Root Hunter",
    "desc": "Binary Search for Square Root.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Math in the Air! Binary Search isn't just for arrays. We can use it to find the square root of a number `X` by searching in the range [0, X]! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Check if `mid * mid <= X`. If true, `mid` is a potential square root, so search the RIGHT half for a bigger one! 🦜\"",
        "codeSnippet": "while(low <= high) {\n  mid = low + (high-low)/2;\n  if(mid*mid <= X) { ans=mid; low=mid+1; }\n  else high=mid-1;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Square root of 10 (floor)?",
        "options": [
          "3",
          "4",
          "2"
        ],
        "correctAnswer": "3",
        "explanation": "3*3=9 (<=10), 4*4=16 (>10)"
      },
      {
        "type": "match_following",
        "questionText": "Match Root login!",
        "pairs": [
          {
            "key": "mid*mid <= X",
            "value": "Search Right"
          },
          {
            "key": "mid*mid > X",
            "value": "Search Left"
          },
          {
            "key": "Range",
            "value": "0 to X"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Maximum value for search range of sqrt(X).",
        "codeSnippet": "high = ___ ;",
        "correctAnswer": "X"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(log X). This finds integer square roots efficiently! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can this be extended to find roots with decimals?",
        "options": [
          "Yes (Precision loops)",
          "No",
          "Only for birds"
        ],
        "correctAnswer": "Yes (Precision loops)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Square check.",
        "codeSnippet": "if (mid * mid ___ X) ans = mid;",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Mathematical flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we find the root?\"",
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
    "order": 11,
    "title": "Discovery of Order",
    "desc": "Introduction to Sorting.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Organized Flock! Sorting is the process of arranging birds in a specific order—be it size, wing color, or seed priority! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Why Sort? Because many powerful searches, like Binary Search, ONLY work when the forest is ordered! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "A sorted array is required for which searching algorithm?",
        "options": [
          "Binary Search",
          "Linear Search",
          "Sentinel Search"
        ],
        "correctAnswer": "Binary Search"
      },
      {
        "type": "match_following",
        "questionText": "Match Sorting goals!",
        "pairs": [
          {
            "key": "Ascending",
            "value": "Small to Large"
          },
          {
            "key": "Descending",
            "value": "Large to Small"
          },
          {
            "key": "Stability",
            "value": "Preserving relative order"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Sorting makes the forest ___ to search.",
        "codeSnippet": "Searchable = ___ ;",
        "correctAnswer": "faster"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Time Complexity: Basic sorts take O(N^2), while advanced ones take O(N log N). Every wing beat counts! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In an ascending sort, where does the smallest bird go?",
        "options": [
          "The very first tree",
          "The very last tree",
          "The middle"
        ],
        "correctAnswer": "The very first tree"
      },
      {
        "type": "code_fill_in",
        "questionText": "Descending check.",
        "codeSnippet": "if (current < next) ___ (current, next);",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Defining the ranks! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Can we sort thousands of birds?\"",
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
    "order": 12,
    "title": "Bubbling Up",
    "desc": "Introduction to Bubble Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Rising Bubble! Bubble Sort repeatedly swaps adjacent birds if they are in the wrong order. The heaviest birds 'bubble' to the end! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Pass by Pass: In each pass, the largest unsorted bird finds its final spot at the end of the forest! 🦜\"",
        "codeSnippet": "for(i=0; i<n-1; i++) {\n  for(j=0; j<n-i-1; j++) {\n    if(arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Bubble Sort (Average/Worst)?",
        "options": [
          "O(N^2)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "match_following",
        "questionText": "Match Bubble logic!",
        "pairs": [
          {
            "key": "Outer Loop",
            "value": "Number of passes"
          },
          {
            "key": "Inner Loop",
            "value": "Adjacent comparisons"
          },
          {
            "key": "Swap Condition",
            "value": "arr[j] > arr[j+1]"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bubble sort compares ___ elements.",
        "codeSnippet": "Comparison = ___ ;",
        "correctAnswer": "adjacent"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Simple to code, but very slow for massive flocks. It's the first flight of many! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "After the first pass, where is the largest element?",
        "options": [
          "At the last index",
          "At the first index",
          "Random"
        ],
        "correctAnswer": "At the last index"
      },
      {
        "type": "code_fill_in",
        "questionText": "Bubble swap.",
        "codeSnippet": "if (arr[j] > arr[j+1]) ___ (arr[j], arr[j+1]);",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Bubbling power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it the fastest sort?\"",
        "options": [
          "SQUAWK NO!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "SQUAWK NO!"
      }
    ]
  },
  {
    "order": 13,
    "title": "Optimized Bubbles",
    "desc": "Bubble Sort with early exit optimization.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Early Exit! If a pass happens and NO birds were swapped, the forest is already sorted! We can stop immediately and save our energy! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Optimized Bubble: Use a `swapped` boolean. If it remains `false` after a full pass, break the loop! 🦜\"",
        "codeSnippet": "bool swapped = false;\nfor(...) {\n  swapped = false;\n  for(...) { if(arr[j]>arr[j+1]) { swap(...); swapped = true; } }\n  if (!swapped) break;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a pre-sorted array, what is the complexity of Optimized Bubble Sort?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Opti-Bubble!",
        "pairs": [
          {
            "key": "Swapped = true",
            "value": "Continue sorting"
          },
          {
            "key": "Swapped = false",
            "value": "Break and stop"
          },
          {
            "key": "Best Case",
            "value": "Already sorted"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Flag used to detect if sorting is done.",
        "codeSnippet": "Flag = ___ ;",
        "correctAnswer": "swapped"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N) for sorted data, but still O(N^2) for the worst case. A small, clever wing-tweak! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does optimization help if only one bird is out of place?",
        "options": [
          "Yes",
          "No",
          "Only for eagles"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Reset flag.",
        "codeSnippet": "swapped = ___ ;",
        "correctAnswer": "false"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Smart exit! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we save energy?\"",
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
    "title": "Selective Choice",
    "desc": "Introduction to Selection Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Minimum Hunter! Selection Sort finds the smallest bird in the entire forest and swaps it into the first tree. Then find the next smallest for the second tree! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Selection Process: We maintain a `min_idx`. After scanning the unsorted part, we swap and move forward. 🦜\"",
        "codeSnippet": "for(i=0; i<n-1; i++) {\n  min_idx = i;\n  for(j=i+1; j<n; j++) if(arr[j] < arr[min_idx]) min_idx = j;\n  swap(arr[min_idx], arr[i]);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Selection Sort?",
        "options": [
          "O(N^2) (Always)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N^2) (Always)"
      },
      {
        "type": "match_following",
        "questionText": "Match Selection logic!",
        "pairs": [
          {
            "key": "Find Min",
            "value": "Search unsorted"
          },
          {
            "key": "Swap",
            "value": "Place at current front"
          },
          {
            "key": "Outer Pass",
            "value": "Identify final position"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Selection Sort minimizes the number of ___.",
        "codeSnippet": "Minimized = ___ ;",
        "correctAnswer": "swaps"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Selection Sort is unique because it never does more than O(N) swaps. Perfect if moving heavy birds is expensive! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Selection Sort stable by default?",
        "options": [
          "No (Swaps skip elements)",
          "Yes",
          "Only for smaller birds"
        ],
        "correctAnswer": "No (Swaps skip elements)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update min index.",
        "codeSnippet": "if (arr[j] < arr[min_idx]) min_idx = ___ ;",
        "correctAnswer": "j"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Hunter's precision! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we find the smallest?\"",
        "options": [
          "Swap to front!",
          "No.",
          "0"
        ],
        "correctAnswer": "Swap to front!"
      }
    ]
  },
  {
    "order": 15,
    "title": "The Weaver's Nest",
    "desc": "In-place Selection Sort logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"In-Place Weaving! Selection sort doesn't need extra nests. It works entirely within the current array by swapping birds. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Space Complexity: O(1). No extra memory is allocated to hold the birds. We use the same branch we started with! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does O(1) space complexity mean?",
        "options": [
          "Constant extra memory used",
          "Memory scales with N",
          "No memory is used"
        ],
        "correctAnswer": "Constant extra memory used"
      },
      {
        "type": "match_following",
        "questionText": "Match Selection constraints!",
        "pairs": [
          {
            "key": "Space",
            "value": "O(1)"
          },
          {
            "key": "Time",
            "value": "O(N^2)"
          },
          {
            "key": "Swaps",
            "value": "O(N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Selection sort swaps elements into their ___ positions.",
        "codeSnippet": "Target = ___ ;",
        "correctAnswer": "correct"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Stable time, variable swaps. It's a reliable hunter in a fixed memory forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many comparisons are made in the first pass of N elements?",
        "options": [
          "N - 1",
          "N",
          "1"
        ],
        "correctAnswer": "N - 1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Starting i.",
        "codeSnippet": "for (int i = 0; i < n ___ 1; i++)",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Fixed space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are we memory efficient?\"",
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
    "title": "Playing Your Cards",
    "desc": "Introduction to Insertion Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Deck Master! Think of sorting a hand of playing cards. You pick a card and 'insert' it into its correct position among the cards already in your hand! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Subarray Order: We divide the forest into 'sorted' and 'unsorted' sections. Take the first unsorted bird and slide it into the sorted section! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How does Insertion Sort treat the first element initially?",
        "options": [
          "As already sorted",
          "As unsorted",
          "As the root"
        ],
        "correctAnswer": "As already sorted"
      },
      {
        "type": "match_following",
        "questionText": "Match Insertion cards!",
        "pairs": [
          {
            "key": "Key",
            "value": "The bird to insert"
          },
          {
            "key": "Sorted part",
            "value": "Left side"
          },
          {
            "key": "Unsorted part",
            "value": "Right side"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Insertion sort builds the result ___.",
        "codeSnippet": "Method = ___ ;",
        "correctAnswer": "incrementally"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Time Complexity: O(N^2) worst case. But if the forest is mostly sorted, it's very fast—O(N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Insertion Sort efficient for small datasets?",
        "options": [
          "Yes, very efficient",
          "No",
          "Only for cards"
        ],
        "correctAnswer": "Yes, very efficient"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pick key.",
        "codeSnippet": "int key = arr[ ___ ];",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Card logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are you holding the deck?\"",
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
    "order": 17,
    "title": "The Nest Shift",
    "desc": "The inner loop of Insertion Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Crowded Row! To make room for the new bird, we must shift the larger birds to the right until a space opens up! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Shift: While `arr[j] > key`, move `arr[j+1] = arr[j]`. This copies the bird rightward. 🦜\"",
        "codeSnippet": "int j = i - 1;\nwhile(j >= 0 && arr[j] > key) {\n  arr[j+1] = arr[j];\n  j = j - 1;\n}\narr[j+1] = key;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens in the inner while loop?",
        "options": [
          "Elements are shifted right",
          "Elements are swapped",
          "Random movement"
        ],
        "correctAnswer": "Elements are shifted right"
      },
      {
        "type": "match_following",
        "questionText": "Match the Shift!",
        "pairs": [
          {
            "key": "arr[j+1] = arr[j]",
            "value": "Right shift"
          },
          {
            "key": "Condition",
            "value": "arr[j] > key"
          },
          {
            "key": "Final place",
            "value": "arr[j+1] = key"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Direction of shifts in Insertion Sort.",
        "codeSnippet": "Shifts = ___ ;",
        "correctAnswer": "rightward"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Stability Alert! Insertion sort is stable because we only shift birds that are GREATER than our key. Identical birds stay in order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Max number of comparisons for node at index 5?",
        "options": [
          "5",
          "1",
          "N"
        ],
        "correctAnswer": "5"
      },
      {
        "type": "code_fill_in",
        "questionText": "Move index back.",
        "codeSnippet": "j = j ___ 1;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Nesting complete! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we find the gap?\"",
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
    "order": 18,
    "title": "The Status Quo (Stability)",
    "desc": "Understanding Stability in Sorting.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Loyal Friends! A sorting algorithm is STABLE if it preserves the relative order of birds with identical values. If two birds arrived together, they should stay in that order! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Example: If you sort by Bird Type (Parrots, Eagles), and multiple Parrots exist, a stable sort keeps them in their original sequence! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which of these is NOT naturally stable?",
        "options": [
          "Selection Sort",
          "Bubble Sort",
          "Insertion Sort"
        ],
        "correctAnswer": "Selection Sort"
      },
      {
        "type": "match_following",
        "questionText": "Match Stability status!",
        "pairs": [
          {
            "key": "Bubble Sort",
            "value": "Stable"
          },
          {
            "key": "Insertion Sort",
            "value": "Stable"
          },
          {
            "key": "Selection Sort",
            "value": "Unstable"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Preserving original relative order is called ___.",
        "codeSnippet": "Property = ___ ;",
        "correctAnswer": "stability"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Stability is crucial when sorting complex birds with multiple traits (like size and age)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Selection Sort is unstable because it might ___.",
        "options": [
          "Swap an element far across the array",
          "Skip comparisons",
          "Wait too long"
        ],
        "correctAnswer": "Swap an element far across the array"
      },
      {
        "type": "code_fill_in",
        "questionText": "Stable check.",
        "codeSnippet": "if (arr[j] ___ key) break;",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Respecting history! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Do we keep the order?\"",
        "options": [
          "Stable pilots!",
          "No.",
          "0"
        ],
        "correctAnswer": "Stable pilots!"
      }
    ]
  },
  {
    "order": 19,
    "title": "The Shifting Branch",
    "desc": "Search in a nearly sorted array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Almost Home! Sometimes a bird is just one branch away from its correct spot in a sorted forest. This is a Nearly Sorted Array! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Strategy: An element at index `i` might actually be at `i-1` or `i+1`. We check all three neighbors using Binary Search logic! 🦜\"",
        "codeSnippet": "if (arr[mid] == x) return mid;\nif (mid > low && arr[mid-1] == x) return mid-1;\nif (mid < high && arr[mid+1] == x) return mid+1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a nearly sorted array (within distance 1), how many positions can a target be relative to mid?",
        "options": [
          "3 (mid-1, mid, mid+1)",
          "1 (only mid)",
          "All of them"
        ],
        "correctAnswer": "3 (mid-1, mid, mid+1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Nearly-Sorted!",
        "pairs": [
          {
            "key": "Check mid",
            "value": "Direct match"
          },
          {
            "key": "Check mid-1",
            "value": "Shifted left"
          },
          {
            "key": "Check mid+1",
            "value": "Shifted right"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Nearly sorted binary search skips ___ items already checked.",
        "codeSnippet": "Shift = ___ ;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Time Complexity remains O(log N), but we gain robustness for small forest displacements! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If `target > arr[mid+1]`, where do we search next?",
        "options": [
          "low = mid + 2",
          "low = mid + 1",
          "high = mid - 1"
        ],
        "correctAnswer": "low = mid + 2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Narrow right side.",
        "codeSnippet": "low = mid ___ 2;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Flexible scouting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Can we find them?\"",
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
    "order": 20,
    "title": "Stage 1 Wings",
    "desc": "Searching & Sorting Foundation Graduate.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"GRADUATION! You have mastered the base ranks of searching and sorting. You can find birds, organize nests, and keep the forest stable! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"From Linear Scans to Logarithmic Precision and O(N^2) Basics. Your foundational wings are strong. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Binary Search time complexity?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which sort is O(N) for sorted data?",
        "options": [
          "Insertion Sort",
          "Selection Sort",
          "Binary Sort"
        ],
        "correctAnswer": "Insertion Sort"
      },
      {
        "type": "match_following",
        "questionText": "Final Stage 1 Check!",
        "pairs": [
          {
            "key": "Linear",
            "value": "Check all"
          },
          {
            "key": "Binary",
            "value": "Check half"
          },
          {
            "key": "Bubble",
            "value": "Check neighbors"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Fly higher into Stage 2 for Divide & Conquer! 🦜\""
      }
    ]
  }
];

module.exports = stage1;
