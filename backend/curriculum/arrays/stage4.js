const stage4 = [
  {
    "order": 61,
    "title": "Min Window Substring",
    "desc": "Finding the smallest window in S that contains all characters of T.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Elite Sliding Window! We need the SMALLEST nest possible that holds all the different birds we seek. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Expand the `right` pointer until you have all birds. Then, shrink the `left` pointer as much as possible while keeping all birds! 🦜\"",
        "codeSnippet": "while (count == targetCount) {\n  if (right - left < minLen) { minLen = right - left; start = left; }\n  if (map[s[left]]++ == 0) count--;\n  left++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Goal of Min Window Substring?",
        "options": [
          "Smallest window with T",
          "Largest window",
          "All unique chars"
        ],
        "correctAnswer": "Smallest window with T"
      },
      {
        "type": "match_following",
        "questionText": "Match Window Actions!",
        "pairs": [
          {
            "key": "Expand",
            "value": "right++"
          },
          {
            "key": "Shrink",
            "value": "left++"
          },
          {
            "key": "Condition",
            "value": "Still has all T"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if current char is in T.",
        "codeSnippet": "if (map[s[right]]-- ___ 0) count++;",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time Complexity: O(N). Space: O(constant) for the character map. This is a Meta and Amazon legend! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Total passes over the string S?",
        "options": [
          "Two (one for each pointer)",
          "One",
          "N"
        ],
        "correctAnswer": "Two (one for each pointer)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize min length.",
        "codeSnippet": "int minL = ___;",
        "correctAnswer": "INT_MAX"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep it tight, fledgling! Waste no room! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did the window break?\"",
        "options": [
          "No, optimized!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "No, optimized!"
      }
    ]
  },
  {
    "order": 62,
    "title": "Median of Two Sorted",
    "desc": "Finding the median of two sorted arrays in O(log(min(M,N))).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"THE FINAL BOSS of array logic. Finding the median of TWO sorted flocks without merging them! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary Search on the PARTITION of the smaller array! Ensure `leftSideMax <= rightSideMin` for both flocks. 🦜\"",
        "codeSnippet": "if (maxLeftX <= minRightY && maxLeftY <= minRightX) // Found!"
      },
      {
        "type": "multiple_choice",
        "questionText": "Required time complexity for Median of Two Sorted Arrays?",
        "options": [
          "O(log(min(M,N)))",
          "O(M+N)",
          "O(log(M+N))"
        ],
        "correctAnswer": "O(log(min(M,N)))"
      },
      {
        "type": "match_following",
        "questionText": "Match Partition Rules!",
        "pairs": [
          {
            "key": "leftSideSize",
            "value": "(m+n+1)/2"
          },
          {
            "key": "maxLeftX",
            "value": "A[i-1]"
          },
          {
            "key": "minRightX",
            "value": "A[i]"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Partition index of array Y.",
        "codeSnippet": "partitionY = (m + n + 1) / 2 ___ partitionX;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If one flock is empty, the median is just the middle of the other. Handling edge cases is 90% of this battle! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the smaller array always used for Binary Search?",
        "options": [
          "Yes, for speed",
          "No",
          "Depends on Pico"
        ],
        "correctAnswer": "Yes, for speed"
      },
      {
        "type": "code_fill_in",
        "questionText": "Adjust partitionX if maxLeftX > minRightY.",
        "codeSnippet": "high = ___;",
        "correctAnswer": "partitionX-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The most prestigious solution in all of LeetCode. You are touching the sun! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the median?\"",
        "options": [
          "The EXACT middle!",
          "No.",
          "0"
        ],
        "correctAnswer": "The EXACT middle!"
      }
    ]
  },
  {
    "order": 63,
    "title": "Matrix Shifting (Advanced)",
    "desc": "Rotating a rectangle matrix 90 degrees in O(1) space.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rectangular Rotation! Squares are easy, but rotating a rectangle matrix IN-PLACE? That requires a different flight path! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Actually, you can ONLY do it in-place for SQUARE matrices. For rectangles, you MUST create a new bird cage of size CxR! 🦜\"",
        "codeSnippet": "newMat[j][rows - 1 - i] = oldMat[i][j];"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you rotate a 2x3 matrix, what are the new dimensions?",
        "options": [
          "3x2",
          "2x3",
          "2x2"
        ],
        "correctAnswer": "3x2"
      },
      {
        "type": "match_following",
        "questionText": "Match Coordinate Mapping!",
        "pairs": [
          {
            "key": "old[i][j]",
            "value": "new[j][R-1-i]"
          },
          {
            "key": "Space",
            "value": "O(R*C)"
          },
          {
            "key": "Time",
            "value": "O(R*C)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "New row index in the rotated matrix.",
        "codeSnippet": "new_row = ___ ;",
        "correctAnswer": "j"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't try to be too clever with memory. Sometimes a new cage is the only way for a rectangular flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of non-square matrix rotation?",
        "options": [
          "O(R*C)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(R*C)"
      },
      {
        "type": "code_fill_in",
        "questionText": "New column index in total height `H`.",
        "codeSnippet": "new_col = H - 1 - ___ ;",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Elite developers know when to use extra space and when to be stingy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the rectangle a square?\"",
        "options": [
          "If R == C!",
          "No.",
          "0"
        ],
        "correctAnswer": "If R == C!"
      }
    ]
  },
  {
    "order": 64,
    "title": "Count Inversions",
    "desc": "Counting how many swaps a bubble sort would need (Merge Sort application).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Inversion Counting! How jumbled is the flock? An inversion is when a bigger bird comes before a smaller bird! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use Merge Sort! During the merge step, if `leftBird > rightBird`, then `leftBird` and ALL BIRDS AFTER IT in the left half are inversions! 🦜\"",
        "codeSnippet": "if (left[i] > right[j]) count += (mid - i + 1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of counting inversions?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Inversion Logic!",
        "pairs": [
          {
            "key": "Merge Sort",
            "value": "The engine"
          },
          {
            "key": "Left[i] > Right[j]",
            "value": "Match!"
          },
          {
            "key": "count +=",
            "value": "mid - i + 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call to count left inversions.",
        "codeSnippet": "c = countInv(arr, low, ___) + countInv(...);",
        "correctAnswer": "mid"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This measures how 'unsorted' the array is. It’s used in ranking algorithms and search engines! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Max inversions in a reverse sorted array of size N?",
        "options": [
          "N(N-1)/2",
          "N",
          "0"
        ],
        "correctAnswer": "N(N-1)/2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final total inversions.",
        "codeSnippet": "return leftCount + rightCount + ___ ;",
        "correctAnswer": "mergeCount"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sort and Count. A powerful dual-mission! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we upside down?\"",
        "options": [
          "Total inversions!",
          "No.",
          "0"
        ],
        "correctAnswer": "Total inversions!"
      }
    ]
  },
  {
    "order": 65,
    "title": "The Skyline Sketch",
    "desc": "Drawing the silhouette of buildings (Priority Queue + Arrays).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Skyline! Multiple buildings (rectangles) overlapping. We need the outer silhouette! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Break buildings into `(Start, Height)` and `(End, Height)`. Sweep across the X-axis and keep the MAX height in a Priority Queue! 🦜\"",
        "codeSnippet": "if (currMaxHeight != prevMaxHeight) ans.push({x, currMaxHeight});"
      },
      {
        "type": "multiple_choice",
        "questionText": "Best data structure for tracking heights in the Skyline problem?",
        "options": [
          "Max Heap / Priority Queue",
          "Hash Map",
          "Stack"
        ],
        "correctAnswer": "Max Heap / Priority Queue"
      },
      {
        "type": "match_following",
        "questionText": "Match Sweep Actions!",
        "pairs": [
          {
            "key": "Start point",
            "value": "Add height"
          },
          {
            "key": "End point",
            "value": "Remove height"
          },
          {
            "key": "Critical Point",
            "value": "Height change"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Insert height into heap for a start point.",
        "codeSnippet": "heap.___(height);",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time Complexity: O(N log N). Every roof vertex is a critical point. This is the ultimate test of geometry logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if two critical points have the same X coordinate?",
        "options": [
          "Process them together",
          "Ignore one",
          "Crash"
        ],
        "correctAnswer": "Process them together"
      },
      {
        "type": "code_fill_in",
        "questionText": "Sort by X, then handle height ties.",
        "codeSnippet": "events.sort((a,b) => a.x - b.x || ___) ;",
        "correctAnswer": "b.h - a.h"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The city looks beautiful from up here, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the tallest building?\"",
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
    "order": 66,
    "title": "Fenwick Tree Flight",
    "desc": "Intro to Binary Indexed Trees (BIT) for prefix sums.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The BIT Tree! Prefix sums that can be UPDATED in O(log N). Fixed prefix sums are too static for a bird! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use `i & (-i)` to find the 'Last Set Bit'. This magic bit tells you which branch to fly to! 🦜\"",
        "codeSnippet": "void update(int i, int val) {\n  for (; i <= n; i += (i & -i)) tree[i] += val;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Update complexity for a Fenwick Tree?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match BIT Terms!",
        "pairs": [
          {
            "key": "update(i)",
            "value": "i += (i & -i)"
          },
          {
            "key": "query(i)",
            "value": "i -= (i & -i)"
          },
          {
            "key": "Space",
            "value": "O(N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The bitwise trick to find the isolated last set bit.",
        "codeSnippet": "parent = i - (i & ___);",
        "correctAnswer": "-i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It fits in a simple array of the same size. No complex nodes, just pure bit math. Elegance at its peak! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a Fenwick Tree do Range Sum queries?",
        "options": [
          "Yes: query(R) - query(L-1)",
          "No",
          "Only for 0 to N"
        ],
        "correctAnswer": "Yes: query(R) - query(L-1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Calculate prefix sum up to index `i`.",
        "codeSnippet": "for(; i > 0; i -= (i & -i)) sum += ___;",
        "correctAnswer": "tree[i]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bitwise flight is the fastest flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you a bit or a byte?\"",
        "options": [
          "A bit of both!",
          "Byte.",
          "0"
        ],
        "correctAnswer": "A bit of both!"
      }
    ]
  },
  {
    "order": 67,
    "title": "Largest Rectangle (Elite)",
    "desc": "Finding the largest area in a histogram in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Histogram Mastery! Bars of different heights. What is the biggest rectangular area we can carve out? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Monotonic Stack! Keep indices of bars in increasing height. If a shorter bar appears, it's time to calculate the area for the previous peak! 🦜\"",
        "codeSnippet": "while (h[stack.top()] > h[i]) {\n  height = h[stack.pop()];\n  width = i - stack.top() - 1;\n  area = max(area, height * width);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for Largest Rectangle in Histogram?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Stack Logic!",
        "pairs": [
          {
            "key": "Increasing",
            "value": "Push"
          },
          {
            "key": "Decreasing",
            "value": "Process peak"
          },
          {
            "key": "Width",
            "value": "i - left - 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Area for bar of height `H` and width `W`.",
        "codeSnippet": "area = ___ * W;",
        "correctAnswer": "H"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The stack ensures each bar is pushed and popped exactly once. Linear time magic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens at the very end of the array?",
        "options": [
          "Add a virtual bar of height 0",
          "Stop",
          "Reset"
        ],
        "correctAnswer": "Add a virtual bar of height 0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check stack before popping.",
        "codeSnippet": "while (!st.empty() && h[st.top()] ___ h[i])",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Monotonic stacks are advanced bird nests. Hard to build, but incredibly strong! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the rectangle gold?\"",
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
    "order": 68,
    "title": "Range Min Query (RMQ)",
    "desc": "Sparse Table intro for static Range Minimum Queries.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Static Range Minimums! If the flock doesn't change, we can answer any min(L, R) query in O(1) time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Sparse Table! Pre-calculate mins for all intervals of size 2^K. Any range [L, R] is just two overlapping intervals of power-of-2 size! 🦜\"",
        "codeSnippet": "st[i][j] = min(st[i][j-1], st[i + (1 << (j-1))][j-1]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Query complexity for Sparse Table RMQ?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Table Costs!",
        "pairs": [
          {
            "key": "Pre-calculate",
            "value": "O(N log N)"
          },
          {
            "key": "Space",
            "value": "O(N log N)"
          },
          {
            "key": "Query",
            "value": "O(1)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The power of 2 for overlap k.",
        "codeSnippet": "ans = min(st[L][k], st[R - (1 << ___) + 1][k]);",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One pre-calculation, infinite O(1) queries. Perfect for read-only flight logs! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you use Sparse Table if the array keeps changing?",
        "options": [
          "No (Too slow to rebuild)",
          "Yes",
          "Only for 0 to N"
        ],
        "correctAnswer": "No (Too slow to rebuild)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Log2 of length L.",
        "codeSnippet": "int k = ___(len);",
        "correctAnswer": "log2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Overlapping intervals are okay because `min(x, x)` is just `x`. This is called IDEMPOTENCE! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I idempotent?\"",
        "options": [
          "Pure!",
          "No.",
          "0"
        ],
        "correctAnswer": "Pure!"
      }
    ]
  },
  {
    "order": 69,
    "title": "Maximum Subarray (Advanced)",
    "desc": "Solving Kadane with a twist - Circular maximum subarray sum.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Circular Kadane! The flock is a circle. A subarray can wrap from the end to the beginning! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The max is either the regular Kadane sum OR (TotalSum - MinSubarraySum)! 🦜\"",
        "codeSnippet": "return max(kadane(a), totalSum - minKadane(a));"
      },
      {
        "type": "multiple_choice",
        "questionText": "Max circular sum of [5, -3, 5]?",
        "options": [
          "10 (5 + 5 from ends)",
          "7",
          "5"
        ],
        "correctAnswer": "10 (5 + 5 from ends)"
      },
      {
        "type": "match_following",
        "questionText": "Match Circular Cases!",
        "pairs": [
          {
            "key": "Case 1",
            "value": "Standard Kadane"
          },
          {
            "key": "Case 2",
            "value": "Wrapped around"
          },
          {
            "key": "Edge",
            "value": "All negative"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculation if the max wraps around.",
        "codeSnippet": "max_wrap = total_sum ___ min_kadane;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the total sum equals the min Kadane, return the standard max Kadane (handles all negative arrays)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Circular Kadane?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for all-negative case.",
        "codeSnippet": "if (total == minK) return ___;",
        "correctAnswer": "maxK"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A circle has no end, fledgling. Just new beginnings! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a circle?\"",
        "options": [
          "Perfectly round!",
          "No.",
          "0"
        ],
        "correctAnswer": "Perfectly round!"
      }
    ]
  },
  {
    "order": 70,
    "title": "The Sliding Window Max",
    "desc": "Finding the maximum in every window of size K (Deque).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Window Max! As the window slides, we need the maximum bird inside, every single step! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Monotonic Deque! Keep indices. If the new bird is bigger than those in the deque, KICK THEM OUT! They can never be the max! 🦜\"",
        "codeSnippet": "while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for Sliding Window Maximum?",
        "options": [
          "O(N)",
          "O(N*K)",
          "O(N log K)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Deque Actions!",
        "pairs": [
          {
            "key": "dq.front()",
            "value": "Current Max Index"
          },
          {
            "key": "pop_front",
            "value": "Out of window"
          },
          {
            "key": "pop_back",
            "value": "Too small"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if the front index is outside the sliding window size K.",
        "codeSnippet": "if (dq.front() ___ i - K)",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Each element is added and removed from the deque exactly once. Pure efficiency! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for the Monotonic Deque?",
        "options": [
          "O(K)",
          "O(N)",
          "O(log K)"
        ],
        "correctAnswer": "O(K)"
      },
      {
        "type": "code_fill_in",
        "questionText": "The value at the front of the deque.",
        "codeSnippet": "ans.push(a[dq.___()]);",
        "correctAnswer": "front"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Window to the soul of the array, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Who is the max in my window?\"",
        "options": [
          "Pico!",
          "Me.",
          "0"
        ],
        "correctAnswer": "Pico!"
      }
    ]
  },
  {
    "order": 71,
    "title": "Rainwater Traps II (2D)",
    "desc": "Calculating trapped water in a 2D grid matrix.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Flooded Island! Instead of a row, the water is trapped in a 2D GRID! This is 3D trapping, fledgling! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Min Heap of all boundary cells. Process the shortest boundary cell, and check its neighbors! 🦜\"",
        "codeSnippet": "while (!pq.isEmpty()) {\n  Cell curr = pq.poll();\n  for(neighbor : curr) {\n    water += max(0, curr.h - n.h);\n    pq.push(Cell(n.x, n.y, max(n.h, curr.h)));\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Best data structure for 2D Trapping Rainwater?",
        "options": [
          "Min Heap (Priority Queue)",
          "Queue (BFS)",
          "Stack"
        ],
        "correctAnswer": "Min Heap (Priority Queue)"
      },
      {
        "type": "match_following",
        "questionText": "Match 2D Trap Logic!",
        "pairs": [
          {
            "key": "Boundary",
            "value": "Min Heap entries"
          },
          {
            "key": "Processing",
            "value": "BFS with Heap"
          },
          {
            "key": "Complexity",
            "value": "O(MN log(MN))"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add initial boundary to the heap.",
        "codeSnippet": "if (isBoundary(r, c)) heap.___(new Cell(r, c, mat[r][c]));",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The water only leaks from the lowest point on the perimeter. So we always process the MINIMUM boundary! Brilliant! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for 2D Rainwater Trapping?",
        "options": [
          "O(MN log(MN))",
          "O(MN)",
          "O(M+N)"
        ],
        "correctAnswer": "O(MN log(MN))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Mark cell as visited.",
        "codeSnippet": "visited[r][c] = ___;",
        "correctAnswer": "true"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"An island of code in a sea of logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I swim?\"",
        "options": [
          "Parrots fly!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "Parrots fly!"
      }
    ]
  },
  {
    "order": 72,
    "title": "Range Sum 2D (Mutable)",
    "desc": "Updating and querying rectangle sums in O(log M * log N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"2D Fenwick Tree! Updating a single point and querying the sum of any rectangle in the matrix! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Nested BITs! An outer Fenwick tree for Rows, and inner Fenwick trees for Columns! 🦜\"",
        "codeSnippet": "for(; i<=m; i+=i&-i)\n  for(; j<=n; j+=j&-j)\n    tree[i][j] += val;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of point update in 2D Fenwick Tree?",
        "options": [
          "O(log M * log N)",
          "O(M * N)",
          "O(log(M+N))"
        ],
        "correctAnswer": "O(log M * log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match 2D BIT Terms!",
        "pairs": [
          {
            "key": "update(r, c)",
            "value": "Nested Loops"
          },
          {
            "key": "query(r, c)",
            "value": "Rect sum(0,0 to r,c)"
          },
          {
            "key": "Space",
            "value": "O(MN)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Query sum of rectangle (r1, c1) to (r2, c2).",
        "codeSnippet": "ans = sum(r2,c2) - sum(r1-1,c2) - sum(r2,c1-1) ___ sum(r1-1,c1-1);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the cornerstone of dynamic 2D grid processing. Extremely efficient for frequent updates! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a 2D segment tree do the same thing?",
        "options": [
          "Yes (O(log M * log N))",
          "No",
          "Only for 1D"
        ],
        "correctAnswer": "Yes (O(log M * log N))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update loop for J index.",
        "codeSnippet": "for(; j <= cols; j += (j & ___))",
        "correctAnswer": "-j"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The matrix moves as I fly! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the rectangle gold?\"",
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
    "order": 73,
    "title": "The Skyline 2D (Intro)",
    "desc": "Finding the outer perimeter of buildings in a 2D plane.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Skyline Recall! Let's build the Divide and Conquer version of the skyline problem for maximum efficiency! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Split the buildings into two halves. Recursively find the skyline for each, and then Merge! 🦜\"",
        "codeSnippet": "vector<Point> merge(leftSky, rightSky);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Divide and Conquer Skyline?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match D&C Steps!",
        "pairs": [
          {
            "key": "Base Case",
            "value": "One building"
          },
          {
            "key": "Combine",
            "value": "Merge points"
          },
          {
            "key": "Pivot",
            "value": "N/2"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Compare current heights of left and right skylines.",
        "codeSnippet": "h = max(h_left, ___);",
        "correctAnswer": "h_right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merging is tricky—you must check for redundant points where the height doesn't change! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is D&C sometimes preferred over Sweep-Line?",
        "options": [
          "Easier to parallelize",
          "Faster",
          "Slower"
        ],
        "correctAnswer": "Easier to parallelize"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update last height.",
        "codeSnippet": "lastH = ___;",
        "correctAnswer": "h"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The horizon is clearer now! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do I have a skyline?\"",
        "options": [
          "A silhouette of glory!",
          "No.",
          "0"
        ],
        "correctAnswer": "A silhouette of glory!"
      }
    ]
  },
  {
    "order": 74,
    "title": "Median of Unsorted",
    "desc": "Finding the median of an unsorted array in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"QuickSelect! How to find the median (or Kth smallest) of a jumbled flock in LINEAR time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Partition like QuickSort! If the pivot index is K, you found it! If not, only fly into ONE half! 🦜\"",
        "codeSnippet": "if (pivotIdx == k) return a[k];\nelse if (pivotIdx > k) return quickSelect(low, pivotIdx-1);\nelse return quickSelect(pivotIdx+1, high);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average case time complexity for QuickSelect?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Partitioning!",
        "pairs": [
          {
            "key": "Pivot < K",
            "value": "Search Right"
          },
          {
            "key": "Pivot > K",
            "value": "Search Left"
          },
          {
            "key": "Worst Case",
            "value": "O(N^2)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Find the element at the middle index (Median).",
        "codeSnippet": "result = quickSelect(0, n-1, ___);",
        "correctAnswer": "n/2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To guarantee O(N) even in the worst case, use the 'Median of Medians' algorithm to pick a good pivot! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Worst-case time complexity for QuickSelect with Median of Medians?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Randomly pick a pivot index.",
        "codeSnippet": "int pIdx = low + rand() % (___);",
        "correctAnswer": "high-low+1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The true median remains hidden until you partition! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the median bird?\"",
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
    "order": 75,
    "title": "Subarray XOR K",
    "desc": "Counting subarrays with XOR sum equal to M (O(N)).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"XOR Puzzles! Exactly like Subarray Sum K, but with Bitwise XOR! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If `PrefixXOR[j] ^ PrefixXOR[i] == M`, then the subarray i to j matches! Check if `currXOR ^ M` is in your map! 🦜\"",
        "codeSnippet": "if (map.has(currXOR ^ m)) count += map.get(currXOR ^ m);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding Subarray XOR M?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match XOR Magic!",
        "pairs": [
          {
            "key": "X ^ X",
            "value": "0"
          },
          {
            "key": "X ^ 0",
            "value": "X"
          },
          {
            "key": "X ^ Y = M",
            "value": "X ^ M = Y"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The bitwise target calculation.",
        "codeSnippet": "target = currXOR ___ k;",
        "correctAnswer": "^"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"XOR is its own inverse! That is why we check for `currXOR ^ M`. Bitwise logic at the highest level! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Initial value in the XOR map for sum 0?",
        "options": [
          "{0: 1}",
          "{1: 1}",
          "{}"
        ],
        "correctAnswer": "{0: 1}"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update current XOR.",
        "codeSnippet": "currXOR ___ arr[i];",
        "correctAnswer": "^="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bits are my friends, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the XOR 0?\"",
        "options": [
          "Only if I’m cloned!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "Only if I’m cloned!"
      }
    ]
  },
  {
    "order": 76,
    "title": "Count Smallest After",
    "desc": "Counting smaller elements to the right for each bird (Fenwick Tree).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Smaller Right! For each bird, how many smaller birds are to its right? Let's process backward! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Process from right to left. For each bird `x`, query the Fenwick Tree for `sum(x-1)`, then `update(x, 1)`! 🦜\"",
        "codeSnippet": "for(int i=n-1; i>=0; i--) {\n  ans[i] = query(rank[arr[i]] - 1);\n  update(rank[arr[i]], 1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for Count of Smaller Elements Self?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match BIT Steps!",
        "pairs": [
          {
            "key": "Backward",
            "value": "Right side seen"
          },
          {
            "key": "query(x-1)",
            "value": "Counts seen value < x"
          },
          {
            "key": "update(x)",
            "value": "Mark bird as seen"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update BIT with seen value.",
        "codeSnippet": "bit.update(value, ___);",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You MUST coordinate (compress) the values first so they fit in a small BIT! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if elements repeat?",
        "options": [
          "Handles correctly via rank",
          "Crashes",
          "Ignore"
        ],
        "correctAnswer": "Handles correctly via rank"
      },
      {
        "type": "code_fill_in",
        "questionText": "Query for smaller birds.",
        "codeSnippet": "count = bit.query(rank - ___);",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Looking back to see the future of the array! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are the birds smaller?\"",
        "options": [
          "SQUAWK!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK!"
      }
    ]
  },
  {
    "order": 77,
    "title": "Range Max (Mutable)",
    "desc": "Updating and querying range maximums (Segment Tree).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Segment Tree Mastery! A binary tree where each node stores the MAX of its children. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Update a value? Update the leaf and climb the tree to refresh affected maxes! O(log N). 🦜\"",
        "codeSnippet": "tree[v] = max(tree[2*v], tree[2*v+1]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Range Max Query in a Segment Tree?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match SegTree Terms!",
        "pairs": [
          {
            "key": "Leaf",
            "value": "Actual array elements"
          },
          {
            "key": "Internal",
            "value": "max(L, R)"
          },
          {
            "key": "Build",
            "value": "O(N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Left child index for node `v`.",
        "codeSnippet": "leftChild = ___ ;",
        "correctAnswer": "2*v"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Segment trees are the heavy artillery of array processing. They can do Range Sum, Range Min, Range Max, even GCD! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for a Segment Tree?",
        "options": [
          "O(4N)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(4N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive query merge logic.",
        "codeSnippet": "return max(query(left), query(___));",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A tree of peaks! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the root?\"",
        "options": [
          "The ultimate max!",
          "No.",
          "0"
        ],
        "correctAnswer": "The ultimate max!"
      }
    ]
  },
  {
    "order": 78,
    "title": "Maximum XOR Pair",
    "desc": "Finding two numbers with the maximum XOR result (Trie).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Max XOR Pair! How to find two birds whose bits clash the hardest? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Store every number in a BIT-TRIE. For each number, try to traverse the path that has the OPPOSITE bit! 🦜\"",
        "codeSnippet": "if (trie.has(!currentBit)) { res += (1 << i); node = node.next[!currentBit]; }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for Max XOR Pair using a Trie?",
        "options": [
          "O(N * Log(MaxVal))",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N * Log(MaxVal))"
      },
      {
        "type": "match_following",
        "questionText": "Match Trie Rules!",
        "pairs": [
          {
            "key": "Opposite bit",
            "value": "Adds (1<<i)"
          },
          {
            "key": "Same bit",
            "value": "Required path"
          },
          {
            "key": "Bit depth",
            "value": "31 or 63"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Get the bit at position `i`.",
        "codeSnippet": "bit = (x >>> ___) & 1;",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you can't find the opposite bit, you must settle for the same bit. But we always prefer the clash! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity for the Bitwise Trie?",
        "options": [
          "O(N * bitDepth)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N * bitDepth)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Current max XOR calculation.",
        "codeSnippet": "max_xor = max(max_xor, ___);",
        "correctAnswer": "current_val"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The clash of bits creates the spark of logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the XOR maxed?\"",
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
    "order": 79,
    "title": "The Sliding Window Min",
    "desc": "Finding the minimum in every window of size K.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Window Min Recall! The opposite mission. Maximize the smallness, every single step! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Monotonic Deque (Increasing)! Kick out anyone BIGGER than the new bird! They are useless! 🦜\"",
        "codeSnippet": "while (!dq.empty() && a[dq.back()] >= a[i]) dq.pop_back();"
      },
      {
        "type": "multiple_choice",
        "questionText": "Required complexity for Sliding Window Minimum?",
        "options": [
          "O(N)",
          "O(N*K)",
          "O(N log K)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Deque Rules!",
        "pairs": [
          {
            "key": "dq.front()",
            "value": "Current Min Index"
          },
          {
            "key": "New bird is smaller",
            "value": "Wipe Deque"
          },
          {
            "key": "Goal",
            "value": "O(N) time"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Add index to deque.",
        "codeSnippet": "dq.___(i);",
        "correctAnswer": "push_back"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sliding window max and min are the twin wings of performance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you solve this with a Segment Tree?",
        "options": [
          "Yes (O(N log N))",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (O(N log N))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Remove expired indices.",
        "codeSnippet": "if (dq.front() <= i - ___) dq.pop_front();",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Window to the smallest secret! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I small?\"",
        "options": [
          "Tiny but mighty!",
          "No.",
          "0"
        ],
        "correctAnswer": "Tiny but mighty!"
      }
    ]
  },
  {
    "order": 80,
    "title": "Stage 4 Graduation",
    "desc": "Touch the Sun: Elite Array Mastery.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 4 COMPLETE! You have reached the summit of Elite Array logic. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"2D Rainwater, Skyline D&C, Segment Trees, Fenwick Trees, and Max XOR Tries. You are no longer a fledgling; you are a RAPTOR! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What was the toughest Elite pattern?",
        "options": [
          "Median of Two Sorted",
          "Fenwick Tree",
          "D&C Skyline"
        ],
        "correctAnswer": "Median of Two Sorted"
      },
      {
        "type": "multiple_choice",
        "questionText": "QuickSelect average time?",
        "options": [
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Segment Tree space?",
        "options": [
          "O(4N)",
          "O(N)"
        ],
        "correctAnswer": "O(4N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "First Missing Positive time?",
        "options": [
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Median of medians goal?",
        "options": [
          "O(N) worst case",
          "Sorting"
        ],
        "correctAnswer": "O(N) worst case"
      },
      {
        "type": "match_following",
        "questionText": "Final Elite Match!",
        "pairs": [
          {
            "key": "Fledgling",
            "value": "Past"
          },
          {
            "key": "Raptor",
            "value": "Present"
          },
          {
            "key": "Master",
            "value": "Stage 5"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next, we enter the Realm of Strings. Prepare for KMP, Manacher, and Suffix Automata! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for Stage 5?\"",
        "options": [
          "SQUAWK YES!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  }
];

module.exports = stage4;