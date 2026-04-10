const stage2 = [
  {
    "order": 21,
    "title": "Divide and Conquer",
    "desc": "Introduction to the Divide and Conquer paradigm.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Strategic Split! When the forest is too large, we don't scale it all at once. We break it into tiny groves, solve them, and join them back! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Divide and Conquer involves three steps: 1. Divide (Split the problem), 2. Conquer (Solve standard cases), 3. Combine (Join results). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the second step of Divide and Conquer?",
        "options": [
          "Conquer",
          "Divide",
          "Combine"
        ],
        "correctAnswer": "Conquer"
      },
      {
        "type": "match_following",
        "questionText": "Match the Split!",
        "pairs": [
          {
            "key": "Divide",
            "value": "Split into parts"
          },
          {
            "key": "Conquer",
            "value": "Solve recursively"
          },
          {
            "key": "Combine",
            "value": "Join solutions"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "D&C reduces complex problems into ___ subproblems.",
        "codeSnippet": "Scale = ___ ;",
        "correctAnswer": "smaller"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Merge Sort and Quick Sort use this to achieve O(N log N) speed. It's the secret of the elite flyers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "When do we stop dividing?",
        "options": [
          "At the base case",
          "At the root",
          "When birds get tired"
        ],
        "correctAnswer": "At the base case"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive split.",
        "codeSnippet": "mid = (left + right) ___ 2;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Efficient strategy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is splitting always better?\"",
        "options": [
          "Usually for large N!",
          "No.",
          "0"
        ],
        "correctAnswer": "Usually for large N!"
      }
    ]
  },
  {
    "order": 22,
    "title": "The Perfect Blend (Merge)",
    "desc": "The Merge step of Merge Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Harmonious Union! If we have two smaller groves that are ALREADY sorted, we can merge them into one large sorted forest in O(N) time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Merge Logic: Compare the leading birds of both groves. Take the smaller one, and move forward. Repeat until all birds are placed! 🦜\"",
        "codeSnippet": "while(i < n1 && j < n2) {\n  if(L[i] <= R[j]) { arr[k] = L[i]; i++; }\n  else { arr[k] = R[j]; j++; }\n  k++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of merging two sorted arrays of size N?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Merge steps!",
        "pairs": [
          {
            "key": "Compare",
            "value": "Find smaller bird"
          },
          {
            "key": "Copy",
            "value": "Move to main forest"
          },
          {
            "key": "Remaining",
            "value": "Append leftover birds"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Merge sort requires ___ extra space for merging.",
        "codeSnippet": "Space = O( ___ );",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N) extra space is the price for O(N log N) time and stability. A fair trade for a well-ordered forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the Merge step stable?",
        "options": [
          "Yes, if we pick the left bird on ties (L[i] <= R[j])",
          "No",
          "Only for twins"
        ],
        "correctAnswer": "Yes, if we pick the left bird on ties (L[i] <= R[j])"
      },
      {
        "type": "code_fill_in",
        "questionText": "Tie breaker code.",
        "codeSnippet": "if (L[i] ___ R[j]) arr[k] = L[i];",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Smooth merger! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Do we need a temporary array?\"",
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
    "title": "Merge Sort Mastery",
    "desc": "Full implementation of Merge Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Full Cycle! Divide the forest until each grove has only ONE bird (base case), then merge them back up the tree of recursion! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Implementation: `mergeSort(arr, l, r)`. 1. Find mid. 2. `mergeSort(l, mid)`. 3. `mergeSort(mid+1, r)`. 4. `merge()`. 🦜\"",
        "codeSnippet": "void mergeSort(arr, l, r) {\n  if (l >= r) return;\n  int m = l + (r-l)/2;\n  mergeSort(arr, l, m);\n  mergeSort(arr, m+1, r);\n  merge(arr, l, m, r);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst-case time complexity of Merge Sort?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the complexity!",
        "pairs": [
          {
            "key": "Best Case",
            "value": "O(N log N)"
          },
          {
            "key": "Worst Case",
            "value": "O(N log N)"
          },
          {
            "key": "Space",
            "value": "O(N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Merge Sort is an example of ___ sort. (Hint: uses extra memory)",
        "codeSnippet": "Category = ___ sort;",
        "correctAnswer": "external"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Stable, predictable, and powerful. Merge Sort never slows down, even if the forest is in complete chaos! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Merge Sort's performance depend on initial order?",
        "options": [
          "No, it's always O(N log N)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No, it's always O(N log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Split limit.",
        "codeSnippet": "if (l ___ r) return;",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Recursive order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is Merge Sort stable?\"",
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
    "order": 24,
    "title": "The Pivot's Choice",
    "desc": "Partition logic in Quick Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Sovereign Pivot! Quick Sort picks a leader (Pivot) and arranges the forest such that all smaller birds are on the left and larger ones on the right! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Partitioning: After one pass, the pivot bird is in its final sorted position. Now we just need to sort the two sub-forests! 🦜\"",
        "codeSnippet": "int partition(arr, l, h) {\n  pivot = arr[h]; i = l-1;\n  for(j=l; j<h; j++) if(arr[j] < pivot) swap(arr[++i], arr[j]);\n  swap(arr[i+1], arr[h]);\n  return i+1;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In Quick Sort, what is placing the pivot in its correct spot called?",
        "options": [
          "Partitioning",
          "Merging",
          "Bubbling"
        ],
        "correctAnswer": "Partitioning"
      },
      {
        "type": "match_following",
        "questionText": "Match Partition logic!",
        "pairs": [
          {
            "key": "Pivot",
            "value": "Reference bird"
          },
          {
            "key": "Smaller",
            "value": "Left of pivot"
          },
          {
            "key": "Larger",
            "value": "Right of pivot"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Quick Sort is ___ compared to Merge Sort (usually).",
        "codeSnippet": "Speed = ___ ;",
        "correctAnswer": "faster"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Quick Sort is in-place (O(1) extra space), but its worst case is O(N^2) if we pick bad pivots! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which pivot usually leads to worst case on a sorted array?",
        "options": [
          "Smallest or Largest",
          "The middle",
          "A random bird"
        ],
        "correctAnswer": "Smallest or Largest"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pivot swap.",
        "codeSnippet": "swap(arr[i+1], arr[ ___ ]);",
        "correctAnswer": "h"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Pivot power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the pivot in its final spot?\"",
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
    "title": "Quick Sort Velocity",
    "desc": "Implementing Quick Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Speedster! Quick Sort is often the fastest sort in practice because it has a tiny footprint and avoids extra memory copying! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Implementation: 1. Partition to get `p`. 2. `quickSort(l, p-1)`. 3. `quickSort(p+1, r)`. That's it! 🦜\"",
        "codeSnippet": "void quickSort(arr, l, r) {\n  if (l < r) {\n    int p = partition(arr, l, r);\n    quickSort(arr, l, p-1);\n    quickSort(arr, p+1, r);\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average time complexity of Quick Sort?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Quick logic!",
        "pairs": [
          {
            "key": "Average Time",
            "value": "O(N log N)"
          },
          {
            "key": "Worst Time",
            "value": "O(N^2)"
          },
          {
            "key": "Memory",
            "value": "In-place"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Quick Sort doesn't require ___ array memory.",
        "codeSnippet": "ExtraMemory = ___ ;",
        "correctAnswer": "secondary"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Space Complexity: O(log N) for the recursive stack. It's the king of memory-efficient sorting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Quick Sort stable by default?",
        "options": [
          "No (Swaps are far reaching)",
          "Yes",
          "Only for eagles"
        ],
        "correctAnswer": "No (Swaps are far reaching)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Right partition call.",
        "codeSnippet": "quickSort(arr, p ___ 1, r);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Fast flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it faster than Merge Sort?\"",
        "options": [
          "Usually in practice!",
          "No.",
          "0"
        ],
        "correctAnswer": "Usually in practice!"
      }
    ]
  },
  {
    "order": 26,
    "title": "Randomized Shield",
    "desc": "Protecting Quick Sort with randomization.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Defensive Wing! Worst-case Quick Sort happens when the pivot is always the smallest or largest bird. We can fix this by picking a RANDOM bird as the pivot! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Randomized Quick Sort: Swap `arr[randomIdx]` with the end, then partition as usual. It makes O(N^2) almost impossible! 🦜\"",
        "codeSnippet": "int random = low + rand() % (high-low);\nswap(arr[random], arr[high]);\nreturn partition(arr, low, high);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use Randomized Quick Sort?",
        "options": [
          "Avoid O(N^2) worst case",
          "It's easier to code",
          "Birds like games"
        ],
        "correctAnswer": "Avoid O(N^2) worst case"
      },
      {
        "type": "match_following",
        "questionText": "Match Rand-Quick!",
        "pairs": [
          {
            "key": "Random Pivot",
            "value": "Unpredictable choices"
          },
          {
            "key": "Complexity",
            "value": "Expected O(N log N)"
          },
          {
            "key": "Worst probability",
            "value": "Near zero"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Randomizing the pivot ensures ___ performance.",
        "codeSnippet": "Reliability = ___ ;",
        "correctAnswer": "average"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Mathematical insurance for your sorting speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does randomization change the algorithm's base complexity?",
        "options": [
          "No, only the probability",
          "Yes, it's faster",
          "0"
        ],
        "correctAnswer": "No, only the probability"
      },
      {
        "type": "code_fill_in",
        "questionText": "Swap with current end.",
        "codeSnippet": "swap(arr[random_idx], arr[ ___ ]);",
        "correctAnswer": "high"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Stable averages! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are we safe?\"",
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
    "order": 27,
    "title": "The Quick Search",
    "desc": "QuickSelect algorithm for K-th element.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Find without Sorting! If you only need to find the 3rd largest bird, you don't need to sort the whole forest. You can use the Quick Sort partition logic to ignore half the forest in every step! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"QuickSelect: Partition at index `p`. If `p == k`, we found it! If `p < k`, search only the RIGHT side. If `p > k`, search only the LEFT! 🦜\"",
        "codeSnippet": "if (p == k) return arr[p];\nif (p > k) return quickSelect(l, p-1, k);\nreturn quickSelect(p+1, r, k);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average time complexity of finding K-th element with QuickSelect?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match QuickSelect!",
        "pairs": [
          {
            "key": "Average Time",
            "value": "O(N)"
          },
          {
            "key": "Worst Time",
            "value": "O(N^2)"
          },
          {
            "key": "Goal",
            "value": "K-th smallest/largest"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "QuickSelect discards ___ of the problem in each step. (Hint: approximate average)",
        "codeSnippet": "Reduction = ___ ;",
        "correctAnswer": "half"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N) vs O(N log N). It's much faster than sorting when you only need one specific bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens in the worst case (bad pivots)?",
        "options": [
          "Complexity is O(N^2)",
          "It's still O(N)",
          "0"
        ],
        "correctAnswer": "Complexity is O(N^2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Target found check.",
        "codeSnippet": "if (p ___ k) return arr[p];",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Target locked! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it better than sorting?\"",
        "options": [
          "SQUAWK YES (for single targets)!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES (for single targets)!"
      }
    ]
  },
  {
    "order": 28,
    "title": "Abstract Search",
    "desc": "Binary Search on Answer Space.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Beyond the Index! Sometimes the 'answer' is a range of numbers, not a position in an array. We can use Binary Search to find the optimal result! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Answer Space: Define a `low` (minimum possible answer) and `high` (maximum possible answer). Check the middle: is it feasible? If yes, try for a better one! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What do we binary search on in 'Search on Answer Space'?",
        "options": [
          "Possible answer values",
          "Array indices",
          "Bird names"
        ],
        "correctAnswer": "Possible answer values"
      },
      {
        "type": "match_following",
        "questionText": "Match Answer logic!",
        "pairs": [
          {
            "key": "Range",
            "value": "Min to Max possible"
          },
          {
            "key": "isValid(mid)",
            "value": "Feasability check"
          },
          {
            "key": "Goal",
            "value": "Optimal (Min/Max)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Binary Search on answer space works if the check function is ___.",
        "codeSnippet": "Condition = ___ ;",
        "correctAnswer": "monotonic"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Monotonicity: If `mid` is possible, then all values larger (or smaller) must also be possible. This lets us cut the search space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Typical complexity of Search on Answer Space?",
        "options": [
          "O(N log (Max-Min))",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(N log (Max-Min))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check function usage.",
        "codeSnippet": "if ( ___ (mid)) { ans = mid; ... }",
        "correctAnswer": "isPossible"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Invisible search! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it for optimization?\"",
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
    "order": 29,
    "title": "Finding Peaks",
    "desc": "Peak Element searching.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Mountain Top! A peak element is a neighbor-defying-bird who is larger than both its left and right friends! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Logic: If `arr[mid] < arr[mid+1]`, there MUST be a peak on the right. If `arr[mid] > arr[mid+1]`, the peak is on the left (including mid)! 🦜\"",
        "codeSnippet": "if (arr[mid] < arr[mid+1]) low = mid + 1;\nelse high = mid;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexify of finding a peak in an unsorted array?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Peak logic!",
        "pairs": [
          {
            "key": "arr[m] < arr[m+1]",
            "value": "Search right"
          },
          {
            "key": "arr[m] > arr[m+1]",
            "value": "Search left"
          },
          {
            "key": "Mid found",
            "value": "Peak potential"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Peak finding works because of the ___ property.",
        "codeSnippet": "Property = ___ ;",
        "correctAnswer": "slope"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(log N) even for unsorted data! This is because any direction of increase eventually hits a peak or the boundary. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [1, 2, 3, 1], where is the peak?",
        "options": [
          "Index 2 (value 3)",
          "Index 1",
          "Index 0"
        ],
        "correctAnswer": "Index 2 (value 3)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Right search.",
        "codeSnippet": "if (arr[mid] < arr[mid+1]) low = ___ ;",
        "correctAnswer": "mid + 1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Summit reach! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Does every array have a peak?\"",
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
    "title": "The Infinite Array",
    "desc": "Searching in an unbounded array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Endless Horizon! What if the forest has no end (infinite array)? We can't set `high = n-1`. We must find our own boundary! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Solution: Exponential Growth. Start with range [0, 1]. If target > arr[high], double the range: [high, high*2]. Once trapped, use standard Binary Search! 🦜\"",
        "codeSnippet": "int l=0, h=1;\nwhile(target > arr[h]) {\n  l = h;\n  h = h * 2;\n}\nreturn binarySearch(arr, l, h, target);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding the range in an infinite array?",
        "options": [
          "O(log P) where P is target index",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log P) where P is target index"
      },
      {
        "type": "match_following",
        "questionText": "Match Infinite steps!",
        "pairs": [
          {
            "key": "low=0, high=1",
            "value": "Initial guess"
          },
          {
            "key": "h = h * 2",
            "value": "Exponential jump"
          },
          {
            "key": "BS(l, h)",
            "value": "Final hunt"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "We find the range by ___ the distance each time.",
        "codeSnippet": "Jump = ___ ;",
        "correctAnswer": "doubling"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(log P). Even if the bird is billions of trees away, we find the range in just 30-40 jumps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we search if the array is unsorted?",
        "options": [
          "No, order is needed",
          "Yes",
          "0"
        ],
        "correctAnswer": "No, order is needed"
      },
      {
        "type": "code_fill_in",
        "questionText": "Double high.",
        "codeSnippet": "high = high ___ 2;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Endless hunt! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we find the trap?\"",
        "options": [
          "In the [low, high] range!",
          "No.",
          "0"
        ],
        "correctAnswer": "In the [low, high] range!"
      }
    ]
  },
  {
    "order": 31,
    "title": "The Predicate Function",
    "desc": "Deep dive into 'isPossible' verification.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Gatekeeper! In Answer Space problems, the most important part is the `isPossible(mid)` function. It checks if our proposed answer can actually work! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Monotonic Patterns: Usually, if 5 birds can fit in 2 nests, then 6 birds can't (or 4 birds definitely can). This 'Yes/No' transition is where we search! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What must be true for Binary Search to work on answers?",
        "options": [
          "The condition must be monotonic",
          "The array must be unique",
          "Pico must be present"
        ],
        "correctAnswer": "The condition must be monotonic"
      },
      {
        "type": "match_following",
        "questionText": "Match Predicate logic!",
        "pairs": [
          {
            "key": "isPossible == true",
            "value": "Save as potential ans"
          },
          {
            "key": "isPossible == false",
            "value": "Search other half"
          },
          {
            "key": "Predicate",
            "value": "Yes/No condition"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check function usually runs in O(___) time.",
        "codeSnippet": "CheckTime = ___ ;",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N) check * O(log Range) search = O(N log Range). Premium speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If `min` is requested and `mid` is possible, what's next?",
        "options": [
          "Try smaller (high = mid - 1)",
          "Try larger (low = mid + 1)",
          "Stop"
        ],
        "correctAnswer": "Try smaller (high = mid - 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Save ans.",
        "codeSnippet": "if (check(mid)) { ___ = mid; high = mid - 1; }",
        "correctAnswer": "ans"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Predicate power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we find the sweet spot?\"",
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
    "order": 32,
    "title": "The Loaded Branch",
    "desc": "Split Array Largest Sum problem.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Balancing the Load! Split the forest into `M` sections such that the maximum total birds in any section is MINIMIZED! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Solution: Binary Search on the Sum! Range: [Max Element, Total Sum]. If we can split the array with max sum `mid` using <= M sections, it's possible! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum possible answer for Split Array sum?",
        "options": [
          "Max element in array",
          "Sum of array",
          "0"
        ],
        "correctAnswer": "Max element in array"
      },
      {
        "type": "match_following",
        "questionText": "Match Split logic!",
        "pairs": [
          {
            "key": "Low",
            "value": "Max(arr)"
          },
          {
            "key": "High",
            "value": "Sum(arr)"
          },
          {
            "key": "Condition",
            "value": "Minimize the Maximum"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Split array is a classic ___ problem.",
        "codeSnippet": "Type = ___ ;",
        "correctAnswer": "optimization"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Also known as Painter's Partition or Book Allocation. Same bird, different feathers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If `split(arr, mid) > M`, what should we do?",
        "options": [
          "Increase mid (low = mid + 1)",
          "Decrease mid (high = mid - 1)",
          "Stop"
        ],
        "correctAnswer": "Increase mid (low = mid + 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initial high.",
        "codeSnippet": "high = ___ (arr);",
        "correctAnswer": "sum"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Balanced load! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the sum minimized?\"",
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
    "order": 33,
    "title": "The Rotated Snap",
    "desc": "Searching in a Rotated Sorted Array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Circular Forest! Imagine the forest was sorted, but then snapped and part of it was moved to the front. This is a Rotated Array! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Trick: One half of the array will ALWAYS be sorted. Identify which half is sorted, and check if the bird lies within its range! 🦜\"",
        "codeSnippet": "if (arr[low] <= arr[mid]) {\n  if (target >= arr[low] && target < arr[mid]) high = mid-1;\n  else low = mid+1;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How can you tell if the LEFT half is sorted?",
        "options": [
          "arr[low] <= arr[mid]",
          "arr[mid] <= arr[high]",
          "target == arr[mid]"
        ],
        "correctAnswer": "arr[low] <= arr[mid]"
      },
      {
        "type": "match_following",
        "questionText": "Match Rotation logic!",
        "pairs": [
          {
            "key": "arr[l] <= arr[m]",
            "value": "Left is sorted"
          },
          {
            "key": "arr[m] <= arr[h]",
            "value": "Right is sorted"
          },
          {
            "key": "Broken edge",
            "value": "The Pivot point"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Rotated searching still takes O(___) time.",
        "codeSnippet": "Complexity = ___ ;",
        "correctAnswer": "log N"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Always look for the order! Even in a broken forest, half the trees stand tall. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [4, 5, 6, 7, 0, 1, 2], is the left half [4, 5, 6, 7] sorted?",
        "options": [
          "Yes",
          "No",
          "0"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Right sorted check.",
        "codeSnippet": "else if (arr[mid] ___ arr[high])",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Snapped precision! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we find it?\"",
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
    "order": 34,
    "title": "Finding the Snap",
    "desc": "Finding the Minimum in a Rotated Sorted Array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Deepest Valley! To find the smallest bird in a rotated forest, find the point where the sorted order 'snaps'! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Pivot: If `arr[mid] < arr[high]`, the right half is sorted and the min must be on the left (or mid). If `arr[mid] > arr[high]`, the min is on the right! 🦜\"",
        "codeSnippet": "if (arr[mid] > arr[high]) low = mid + 1;\nelse high = mid;"
      },
      {
        "type": "multiple_choice",
        "questionText": "In [3, 4, 5, 1, 2], where is the snap / pivot element?",
        "options": [
          "1",
          "5",
          "3"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match Min logic!",
        "pairs": [
          {
            "key": "arr[m] > arr[h]",
            "value": "Smallest is right"
          },
          {
            "key": "arr[m] < arr[h]",
            "value": "Smallest is left/mid"
          },
          {
            "key": "Complexity",
            "value": "O(log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Identifying the snap point is also known as finding the ___.",
        "codeSnippet": "Point = ___ ;",
        "correctAnswer": "pivot"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This snap point is the key to solving rotated searches and relative offsets! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we handle duplicates like [2, 2, 2, 0, 1]?",
        "options": [
          "Yes, by skipping duplicates (l++, h--)",
          "No",
          "0"
        ],
        "correctAnswer": "Yes, by skipping duplicates (l++, h--)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Search right.",
        "codeSnippet": "if (arr[mid] > arr[high]) low = ___ ;",
        "correctAnswer": "mid + 1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Valley located! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it the minimum?\"",
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
    "order": 35,
    "title": "Two Forests Merge (Median)",
    "desc": "Median of Two Sorted Arrays concept.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Center of Power! Finding the median of TWO sorted forests without merging them is the ultimate Binary Search challenge! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Cut Logic: We cut both arrays such that the total number of birds on the left side is exactly equal to the right! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Median is the value that splits a dataset into ___.",
        "options": [
          "Two equal halves",
          "Three parts",
          "Wings and Beaks"
        ],
        "correctAnswer": "Two equal halves"
      },
      {
        "type": "match_following",
        "questionText": "Match Median goal!",
        "pairs": [
          {
            "key": "Left Partition",
            "value": "Max(L1, L2)"
          },
          {
            "key": "Right Partition",
            "value": "Min(R1, R2)"
          },
          {
            "key": "Total Size",
            "value": "(N + M + 1) / 2"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "To find median, we search on the ___ array.",
        "codeSnippet": "TargetArr = ___ ;",
        "correctAnswer": "smaller"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Why the smaller one? To ensure our index math doesn't overflow or go out of bounds on the second array! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity target for Median of Two Sorted Arrays?",
        "options": [
          "O(log(min(N, M)))",
          "O(N + M)",
          "O(N log N)"
        ],
        "correctAnswer": "O(log(min(N, M)))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Total combined size.",
        "codeSnippet": "wholeSize = n1 ___ n2;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Conceptual cuts! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it a logarithmic hunt?\"",
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
    "order": 36,
    "title": "The Median Cut",
    "desc": "Implementing Median of Two Sorted Arrays.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Precision Cuts! We find `cut1` in Array 1. This automatically defines `cut2` in Array 2. We verify if the left birds are smaller than the right! 🦜\"",
        "codeSnippet": "l1 = (cut1 == 0) ? MIN : a1[cut1-1];\nr1 = (cut1 == n1) ? MAX : a1[cut1];\nif(l1 <= r2 && l2 <= r1) return Median!"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"If `l1 > r2`, we have too many birds from Array 1 on the left. Move the cut to the LEFT (`high = cut1 - 1`). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Correct condition for a valid median cut?",
        "options": [
          "l1 <= r2 && l2 <= r1",
          "l1 == r2",
          "l1 > r2"
        ],
        "correctAnswer": "l1 <= r2 && l2 <= r1"
      },
      {
        "type": "match_following",
        "questionText": "Match Cut adjustments!",
        "pairs": [
          {
            "key": "l1 > r2",
            "value": "high = cut1 - 1"
          },
          {
            "key": "l2 > r1",
            "value": "low = cut1 + 1"
          },
          {
            "key": "Found",
            "value": "Valid cross-checks"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Base value used for out-of-bounds cut on left.",
        "codeSnippet": "LeftBound = ___ ;",
        "correctAnswer": "-infinity"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"If total size is even, median is average of `max(l1,l2)` and `min(r1,r2)`. If odd, it's just `max(l1,l2)`! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N+M = 5, what is the middle index?",
        "options": [
          "2",
          "3",
          "1"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Max check.",
        "codeSnippet": "ans = (double)(max(l1, l2) + ___ (r1, r2)) / 2.0;",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Median master! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we merge?\"",
        "options": [
          "SQUAWK NO (Virtual merge)!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK NO (Virtual merge)!"
      }
    ]
  },
  {
    "order": 37,
    "title": "Missing in Action",
    "desc": "K-th missing positive number in sorted array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Absent Birds! Given a sorted list of birds present, find the K-th bird who is missing! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Math Trick: At index `i`, the number of missing elements is `arr[i] - (i + 1)`. Use Binary Search to find where 'Missing Count' reaches K! 🦜\"",
        "codeSnippet": "missingCount = arr[mid] - (mid + 1);\nif(missingCount < k) low = mid + 1;\nelse high = mid - 1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many numbers are missing at index `i` (value `V`)?",
        "options": [
          "V - (i + 1)",
          "V - i",
          "V + i"
        ],
        "correctAnswer": "V - (i + 1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Missing logic!",
        "pairs": [
          {
            "key": "missing < K",
            "value": "Search right"
          },
          {
            "key": "missing >= K",
            "value": "Search left"
          },
          {
            "key": "Final Ans",
            "value": "low + k"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Binary Search handles the search for missing birds in O(___).",
        "codeSnippet": "Efficiency = ___ ;",
        "correctAnswer": "log N"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The final answer is usually `low + k` because `low` represents the number of elements present before the K-th gap! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [2, 3, 4], 2nd missing positive number?",
        "options": [
          "5",
          "1",
          "6"
        ],
        "correctAnswer": "5",
        "explanation": "Missing: 1, 5, 6... 2nd is 5."
      },
      {
        "type": "code_fill_in",
        "questionText": "Missing formula.",
        "codeSnippet": "missing = arr[mid] - ( ___ + 1);",
        "correctAnswer": "mid"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Missing located! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it 1-indexed?\"",
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
    "order": 38,
    "title": "The Master Painter",
    "desc": "Painter's Partition Problem.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Coloring the Forest! You have `K` painters and `N` boards. Each painter takes 1 unit of time per board. Minimize the maximum time taken to paint all boards! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "This problem is functionally identical to which other challenge?",
        "options": [
          "Split Array Largest Sum",
          "Binary Search for Max",
          "Bubble Sort"
        ],
        "correctAnswer": "Split Array Largest Sum"
      },
      {
        "type": "match_following",
        "questionText": "Match Painter constraints!",
        "pairs": [
          {
            "key": "Painters",
            "value": "Subdivisions (M)"
          },
          {
            "key": "Boards",
            "value": "Array elements"
          },
          {
            "key": "Time limit",
            "value": "The 'Sum' target"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "If one board takes 50 units, the minimum time to paint it is ___.",
        "codeSnippet": "MinTime = ___ ;",
        "correctAnswer": "50"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The check function: Give boards to the first painter until the limit `mid` is hit, then use the next painter. If you use > K painters, return false! 🦜\""
      },
      {
        "type": "code_fill_in",
        "questionText": "Sum limit high.",
        "codeSnippet": "high = ___ (boards);",
        "correctAnswer": "totalSum"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Artistic efficiency! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it an optimization?\"",
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
    "order": 39,
    "title": "The Academic Split",
    "desc": "Allocate Books Problem.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Library Loom! Allocate books to `S` students such that the maximum pages assigned to a student is minimized! Each student must get at least one book, and books are contiguous. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If students > books, is it possible to allocate one book each?",
        "options": [
          "No (-1)",
          "Yes",
          "Maybe"
        ],
        "correctAnswer": "No (-1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Book logic!",
        "pairs": [
          {
            "key": "low",
            "value": "Max pages in 1 book"
          },
          {
            "key": "high",
            "value": "Sum of all pages"
          },
          {
            "key": "isPossible",
            "value": "Check student count"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Allocation of pages uses ___ range binary search.",
        "codeSnippet": "Method = ___ ;",
        "correctAnswer": "answer"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This trio—Split Array, Painter, and Book Allocation—forms the core of binary search mastery! 🦜\""
      },
      {
        "type": "code_fill_in",
        "questionText": "Max pages check.",
        "codeSnippet": "if (currentSum + pages[i] ___ limit)",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Knowledge split! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we share the books?\"",
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
    "order": 40,
    "title": "Intermediate Wings",
    "desc": "Stage 2 Graduate.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"GRADUATION! You are no longer a fledgling bird. You have mastered D&C Sorts and Binary Search on the invisible Answer Space! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Stage 2 completed. Your logic is sharp, and your search is logarithmic. Fly into Stage 3 for Elite Sorts! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which sort is O(N log N) worst-case and stable?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Randomized Sort"
        ],
        "correctAnswer": "Merge Sort"
      },
      {
        "type": "multiple_choice",
        "questionText": "Primary benefit of Quick Sort over Merge Sort?",
        "options": [
          "O(1) extra space",
          "Stabler",
          "Simpler code"
        ],
        "correctAnswer": "O(1) extra space"
      },
      {
        "type": "match_following",
        "questionText": "Final Stage 2 Check!",
        "pairs": [
          {
            "key": "Merge Sort",
            "value": "Stable D&C"
          },
          {
            "key": "Quick Sort",
            "value": "In-place D&C"
          },
          {
            "key": "Answer BS",
            "value": "Monotonic hunts"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Elite ranks await... 🦜\""
      }
    ]
  }
];

module.exports = stage2;
