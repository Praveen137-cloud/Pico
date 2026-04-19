const stage3 = [
  {
    "order": 21,
    "title": "Merge Sort: Divide",
    "desc": "Splitting the flock until they are alone.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merge Sort! It's the ultimate 'Divide and Conquer'. Split the array in half, keep splitting until you have nests of size 1! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A single bird is always sorted! Once everything is split, we merge them back in order. 🦜\"",
        "codeSnippet": "void mergeSort(int l, int r) {\n  if (l >= r) return;\n  int mid = (l + r) / 2;\n  mergeSort(l, mid);\n  mergeSort(mid + 1, r);\n  merge(l, mid, r);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the base case for Merge Sort?",
        "options": [
          "Array size 1 or 0",
          "Array size 2",
          "When the array is sorted"
        ],
        "correctAnswer": "Array size 1 or 0"
      },
      {
        "type": "match_following",
        "questionText": "Match the Merge Phases!",
        "pairs": [
          {
            "key": "Divide",
            "value": "Find Mid"
          },
          {
            "key": "Conquer",
            "value": "Recursive calls"
          },
          {
            "key": "Combine",
            "value": "Merge Step"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The midpoint calculation.",
        "codeSnippet": "mid = (left ___ right) / 2;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merge Sort always splits exactly in half. This makes it very predictable and stable! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Merge Sort in-place?",
        "options": [
          "No (Usually needs extra array)",
          "Yes",
          "Only for Pico"
        ],
        "correctAnswer": "No (Usually needs extra array)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call for the right half.",
        "codeSnippet": "mergeSort(mid + ___ , r);",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Split the sky, then rule the clouds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I divided?\"",
        "options": [
          "One and only!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "One and only!"
      }
    ]
  },
  {
    "order": 22,
    "title": "Merge Sort: Conquer",
    "desc": "The complexity behind the split.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Why is Merge Sort great? Because no matter how messy the flock, it ALWAYS takes O(N log N) time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The tree has log N levels. At each level, we do N work to merge. Multiply them and you get the magic formula! 🦜\"",
        "codeSnippet": "Levels: log2(N)\nWork per level: N\nTotal: O(N log N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Merge Sort time complexity?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Efficiency!",
        "pairs": [
          {
            "key": "Time",
            "value": "O(N log N)"
          },
          {
            "key": "Space",
            "value": "O(N)"
          },
          {
            "key": "Stability",
            "value": "Always Stable"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Space complexity due to temporary arrays.",
        "codeSnippet": "Space = O(___) ;",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stable means if two birds are equal, they keep their original order. Merge Sort is a polite bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Merge Sort's time change if the array is already sorted?",
        "options": [
          "No, it's always N log N",
          "Yes, it becomes O(N)",
          "Yes, it becomes O(N^2)"
        ],
        "correctAnswer": "No, it's always N log N"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive depth for N=8.",
        "codeSnippet": "log2(8) = ___",
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Predictability is a superpower! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are my formulas correct?\"",
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
    "order": 23,
    "title": "Quick Sort: Partition",
    "desc": "The chaotic dance around the Pivot.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Quick Sort! Pick a bird as the 'Pivot'. Put all smaller birds to the left and larger ones to the right! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Now the Pivot is in its' PERFECT final spot. Recurse on the left and right sides! 🦜\"",
        "codeSnippet": "void quickSort(int l, int r) {\n  if (l < r) {\n    int p = partition(l, r);\n    quickSort(l, p - 1);\n    quickSort(p + 1, r);\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where does the 'Conquer' happen in Quick Sort?",
        "options": [
          "Before the recursive calls (Partition)",
          "After the recursive calls",
          "Never"
        ],
        "correctAnswer": "Before the recursive calls (Partition)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Quick Roles!",
        "pairs": [
          {
            "key": "Pivot",
            "value": "Focal point"
          },
          {
            "key": "Partition",
            "value": "Sorting step"
          },
          {
            "key": "In-place",
            "value": "No extra array!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Call QuickSort on the right side.",
        "codeSnippet": "quickSort(___ + 1, r);",
        "correctAnswer": "p"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unlike Merge Sort, Quick Sort is 'In-Place'. It uses the stack but doesn't need big extra arrays! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Quick Sort stable?",
        "options": [
          "Usually No",
          "Yes",
          "Only for sparrows"
        ],
        "correctAnswer": "Usually No"
      },
      {
        "type": "code_fill_in",
        "questionText": "The index where we split.",
        "codeSnippet": "int pi = ___(arr, low, high);",
        "correctAnswer": "partition"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fast and fierce, like a falcon's dive! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the pivot?\"",
        "options": [
          "Always the center!",
          "No.",
          "0"
        ],
        "correctAnswer": "Always the center!"
      }
    ]
  },
  {
    "order": 24,
    "title": "Choosing the Pivot",
    "desc": "Strategy is half the battle.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Picking the right bird as the Pivot is crucial. If you pick the smallest or largest every time, the flock gets unbalanced! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Common strategies: First element, Last element, Random element, or 'Median of Three'. 🦜\"",
        "codeSnippet": "pivot = arr[high]; // Lomuto Partition scheme"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if the pivot always splits the array into 1 and N-1?",
        "options": [
          "Worst case O(N^2)",
          "Best case O(N)",
          "O(N log N)"
        ],
        "correctAnswer": "Worst case O(N^2)"
      },
      {
        "type": "match_following",
        "questionText": "Match Pivot Types!",
        "pairs": [
          {
            "key": "Random",
            "value": "Prevents bad cases"
          },
          {
            "key": "Median",
            "value": "Balanced split"
          },
          {
            "key": "Lomuto",
            "value": "Last index"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Swap with a random bird to avoid hackers.",
        "codeSnippet": "randIdx = low + rand() % (high - low);\n___(arr[randIdx], arr[high]);",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Average case for Quick Sort is O(N log N). Randomization makes it almost certain! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=1000 and it's O(N^2), how many operations?",
        "options": [
          "1,000,000",
          "10,000",
          "1,000"
        ],
        "correctAnswer": "1,000,000"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pivot helps us ___ the array.",
        "codeSnippet": "pivot helps ___",
        "correctAnswer": "subdivide"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choose wisely, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I choose you?\"",
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
    "order": 25,
    "title": "Quick vs Merge",
    "desc": "The ultimate sorting showdown.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Which bird sorts better? Merge Sort is reliable but slow (memory-wise). Quick Sort is fast but risky! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merge is better for Linked Lists. Quick is usually faster for Arrays due to cache locality. 🦜\"",
        "codeSnippet": "Merge: Stable, O(N) space.\nQuick: Unstable, O(1) extra auxiliary space."
      },
      {
        "type": "multiple_choice",
        "questionText": "Best sorting for a cache-heavy system?",
        "options": [
          "Quick Sort",
          "Merge Sort",
          "Bubble Sort"
        ],
        "correctAnswer": "Quick Sort"
      },
      {
        "type": "match_following",
        "questionText": "Match the Stats!",
        "pairs": [
          {
            "key": "Merge Sort",
            "value": "Predictable O(N log N)"
          },
          {
            "key": "Quick Sort",
            "value": "Faster average O(N log N)"
          },
          {
            "key": "In-place",
            "value": "Quick Sort"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Worst Case complexity of Quick Sort.",
        "codeSnippet": "O(N ___ );",
        "correctAnswer": "^2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Most modern languages use Hybrid sorts like Timsort (Merge + Insertion) or Introsort (Quick + Heap)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Merge Sort better for Linked Lists?",
        "options": [
          "No random access needed",
          "It's faster",
          "Pico says so"
        ],
        "correctAnswer": "No random access needed"
      },
      {
        "type": "code_fill_in",
        "questionText": "Merge Sort is ___, Quick is not.",
        "codeSnippet": "Merge is ___",
        "correctAnswer": "stable"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Know your tools, rule the sky! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I fast or reliable?\"",
        "options": [
          "BOTH!",
          "Fast.",
          "Reliable."
        ],
        "correctAnswer": "BOTH!"
      }
    ]
  },
  {
    "order": 26,
    "title": "Selection Sort (Recursive)",
    "desc": "Finding the smallest bird recursively.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Selection Sort! Find the minimum in the current flock, swap it with the first bird, then recurse on the rest! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's just like finding the smallest seed, then finding the next smallest! 🦜\"",
        "codeSnippet": "void selection(arr, i, n) {\n  if (i >= n) return;\n  int minIdx = findMin(i, n);\n  swap(arr[i], arr[minIdx]);\n  selection(arr, i + 1, n);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Recursive Selection Sort?",
        "options": [
          "O(N^2)",
          "O(N log N)",
          "O(N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "findMin()",
            "value": "Another recursion"
          },
          {
            "key": "swap()",
            "value": "Fix current position"
          },
          {
            "key": "selection(i+1)",
            "value": "Sort the rest"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The base case condition.",
        "codeSnippet": "if (start ___ end) return;",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This uses TWO levels of recursion! One to find the min and one to iterate. Very stack-heavy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Total comparisons as N grows?",
        "options": [
          "N*(N-1)/2",
          "N",
          "log N"
        ],
        "correctAnswer": "N*(N-1)/2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Swap command.",
        "codeSnippet": "swap(arr[i], arr[___]);",
        "correctAnswer": "minIdx"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Smallest bird to the front! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the smallest?\"",
        "options": [
          "Standard bird size!",
          "No.",
          "0"
        ],
        "correctAnswer": "Standard bird size!"
      }
    ]
  },
  {
    "order": 27,
    "title": "Bubble Sort (Recursive)",
    "desc": "Floating to the top using recursive waves.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bubbles! One pass moves the largest bird to the very end. Then recurse on a smaller flock! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every call ensures ONE bird is in its final position at the end. 🦜\"",
        "codeSnippet": "void bubble(arr, n) {\n  if (n == 1) return;\n  for(i=0; i<n-1; i++) if(a[i]>a[i+1]) swap();\n  bubble(arr, n - 1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Recursive Bubble Sort complexity?",
        "options": [
          "O(N^2)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Bubbles!",
        "pairs": [
          {
            "key": "Inner Loop",
            "value": "One pass (Max to end)"
          },
          {
            "key": "Recursive Call",
            "value": "bubble(n-1)"
          },
          {
            "key": "Optimization",
            "value": "Stop if no swaps"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "If no swaps happened in a pass, the array is already...",
        "codeSnippet": "return if sorted ___ true;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Even though it's recursive, it's still slow for big flocks. Use it for small nests or teaching! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many swaps in [5, 4, 3, 2, 1] to move 5 to the end?",
        "options": [
          "4",
          "5",
          "1"
        ],
        "correctAnswer": "4"
      },
      {
        "type": "code_fill_in",
        "questionText": "Reduce flock size.",
        "codeSnippet": "bubble(arr, n ___ 1);",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Float like a bubble, sting like a bee! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a bubble?\"",
        "options": [
          "More like a bird!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "More like a bird!"
      }
    ]
  },
  {
    "order": 28,
    "title": "Counting Inversions",
    "desc": "Measuring chaos with Merge Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Inversions! An inversion is when a larger bird comes BEFORE a smaller bird. How many swaps are needed to sort them? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We can count inversions WHILE doing Merge Sort! During merge, if you pick from the right half, it means all remaining birds in the left half are inversions! 🦜\"",
        "codeSnippet": "if (a[i] > a[j]) {\n  count += (mid - i + 1);\n  j++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to count inversions using Merge Sort?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Chaos Terms!",
        "pairs": [
          {
            "key": "Inversion",
            "value": "i < j but a[i] > a[j]"
          },
          {
            "key": "Sorted",
            "value": "0 inversions"
          },
          {
            "key": "Reverse Sorted",
            "value": "N*(N-1)/2 inversions"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Count update during merge.",
        "codeSnippet": "invCount += (mid - ___ + 1);",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is an elite application of recursion. We get the sort AND the count for the same price! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Inversions in [3, 1, 2]?",
        "options": [
          "2 (3>1, 3>2)",
          "1",
          "3"
        ],
        "correctAnswer": "2 (3>1, 3>2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Return total count.",
        "codeSnippet": "return leftCount + rightCount + ___ ;",
        "correctAnswer": "mergeCount"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Measure the storm, then calm it! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I inverted?\"",
        "options": [
          "Upside down maybe!",
          "No.",
          "0"
        ],
        "correctAnswer": "Upside down maybe!"
      }
    ]
  },
  {
    "order": 29,
    "title": "QuickSelect",
    "desc": "Finding the Kth best bird without sorting everything.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"K-th Smallest! If you only want the 5th smallest bird, you don't need to sort the whole 1000-bird flock! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use Quick Sort partitioning. If the Pivot ends up at index K, you're done! Otherwise, only recurse on ONE half! 🦜\"",
        "codeSnippet": "if (p == k) return arr[p];\nif (p > k) return quickSelect(l, p - 1);\nelse return quickSelect(p + 1, r);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average time complexity of QuickSelect?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Selection Logic!",
        "pairs": [
          {
            "key": "Average",
            "value": "O(N)"
          },
          {
            "key": "Worst",
            "value": "O(N^2)"
          },
          {
            "key": "Search Space",
            "value": "Halves each step"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call if k is in the right half.",
        "codeSnippet": "if (pivotIdx < k) return quickSelect(pivotIdx ___ 1, r, k);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is 'Pruning'. By ignoring one half entirely, we drop the 'log N' from the complexity! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can QuickSelect find the Median?",
        "options": [
          "Yes (Set K = N/2)",
          "No",
          "Only in O(N^2)"
        ],
        "correctAnswer": "Yes (Set K = N/2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: range size is 1.",
        "codeSnippet": "if (l ___ r) return arr[l];",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pick the best, skip the rest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the K-th bird?\"",
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
    "order": 30,
    "title": "Master Point (Recursion 3)",
    "desc": "Sorting mastery confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 3 COMPLETE! You've split the world and merged it back together! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which recursive sort is STABLE and ALWAYS O(N log N)?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Bubble Sort"
        ],
        "correctAnswer": "Merge Sort"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average complexity of QuickSelect?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Sorting Pathfinder! In Stage 4, we explore the shadows of Backtracking! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 3",
            "value": "Pathfinder"
          },
          {
            "key": "Stage 4",
            "value": "Shadow Runner"
          },
          {
            "key": "Next",
            "value": "Backtracking Forest"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursion Level.",
        "codeSnippet": "3 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The splits are deep. The pivots are precise! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Proceed to the shadows?",
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
        "questionText": "One last split?",
        "options": [
          "Merge!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Merge!"
      }
    ]
  }
];

module.exports = stage3;
