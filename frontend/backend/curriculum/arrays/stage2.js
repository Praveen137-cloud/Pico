const stage2 = [
  {
    "order": 21,
    "title": "The Triple Reverse",
    "desc": "Rotate an array by K steps in O(1) space.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rotating K steps? Don't just fly in circles! There is a faster way using THREE flips. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rule: 1. Reverse the whole array. 2. Reverse the first K. 3. Reverse the rest! 🦜\"",
        "codeSnippet": "reverse(arr, 0, n-1);\nreverse(arr, 0, k-1);\nreverse(arr, k, n-1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "After reversing [1, 2, 3, 4, 5] and K=2, what is the first step result?",
        "options": [
          "[5, 4, 3, 2, 1]",
          "[4, 5, 1, 2, 3]",
          "[1, 2, 3, 4, 5]"
        ],
        "correctAnswer": "[5, 4, 3, 2, 1]"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Whole Array"
          },
          {
            "key": "Step 2",
            "value": "First K"
          },
          {
            "key": "Step 3",
            "value": "The Rest"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "If K=2 and N=5, what is the middle boundary index?",
        "codeSnippet": "reverse(arr, k, ___);",
        "correctAnswer": "n-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a Google classic! It saves space because you don't need a temporary array. O(1) space, O(N) time!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Triple Reverse?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(K)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Make K safe using modulo.",
        "codeSnippet": "k = k ___ n;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Always use modulo. If K is 100 and N is 5, you shouldn't fly 100 times! Just 0!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did the birds get dizzy?\"",
        "options": [
          "Maybe!",
          "No.",
          "What was the question?"
        ],
        "correctAnswer": "Maybe!"
      }
    ]
  },
  {
    "order": 22,
    "title": "Sliding Window (Fixed)",
    "desc": "Finding the maximum sum of K consecutive birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Sliding Window! Imagine a window of size K moving across the nests. Don't re-calculate the sum every time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Subtract the bird that leaves the window, and add the new bird that enters! 🦜\"",
        "codeSnippet": "current_sum = current_sum - arr[i-k] + arr[i];"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the sum of a window of size 3 on [1, 4, 2, 10, 2]?",
        "options": [
          "16 (4+2+10)",
          "7 (1+4+2)",
          "14 (2+10+2)"
        ],
        "correctAnswer": "16 (4+2+10)"
      },
      {
        "type": "match_following",
        "questionText": "Match Window Actions!",
        "pairs": [
          {
            "key": "Enter",
            "value": "Add element"
          },
          {
            "key": "Exit",
            "value": "Subtract element"
          },
          {
            "key": "Slide",
            "value": "Update Current"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Index of the element exiting a window of size K.",
        "codeSnippet": "exit_index = i ___ K;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This turns an O(N*K) problem into O(N). Brilliantly efficient, like a hawk diving!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Sliding Window?",
        "options": [
          "O(N)",
          "O(N*K)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize max_sum.",
        "codeSnippet": "max_sum = ___(max_sum, current_sum);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep the window moving. Never look back! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the window open?\"",
        "options": [
          "YES!",
          "No.",
          "SQUAWK!"
        ],
        "correctAnswer": "YES!"
      }
    ]
  },
  {
    "order": 23,
    "title": "Two Pointer Squeeze",
    "desc": "Finding two birds that sum up to a target (2Sum Sorted).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Squeeze! If the nests are SORTED, we use two pointers: one at the start, one at the end. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sum > Target? Move the right bird left. Sum < Target? Move the left bird right! 🦜\"",
        "codeSnippet": "if (sum > target) right--;\nelse if (sum < target) left++;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Requirement for the Two-Pointer Squeeze?",
        "options": [
          "Sorted Array",
          "Unsorted Array",
          "Large Array"
        ],
        "correctAnswer": "Sorted Array"
      },
      {
        "type": "match_following",
        "questionText": "Match Moves!",
        "pairs": [
          {
            "key": "Sum too big",
            "value": "right--"
          },
          {
            "key": "Sum too small",
            "value": "left++"
          },
          {
            "key": "Found",
            "value": "Done!"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the while loop.",
        "codeSnippet": "while (left ___ right)",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(1) space! No extra hash map needed if the input is already sorted. Elite efficiency!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [1, 2, 4, 7, 11] with target 9, what elements are found?",
        "options": [
          "2 and 7",
          "1 and 11",
          "4 and 7"
        ],
        "correctAnswer": "2 and 7"
      },
      {
        "type": "code_fill_in",
        "questionText": "Increment left pointer.",
        "codeSnippet": "left___ ;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't get squeezed! Stay sharp! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are your pointers touching?\"",
        "options": [
          "No, that's the limit!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "No, that's the limit!"
      }
    ]
  },
  {
    "order": 24,
    "title": "Kadane's Wings",
    "desc": "Finding the maximum subarray sum (Maximum contiguous sum).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The heavy hitter! Kadane's Algorithm. How to find the most seeds in a contiguous sub-flock! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the current sum becomes negative, THROW IT AWAY! Start fresh from the next bird! 🦜\"",
        "codeSnippet": "current_sum += arr[i];\nif (current_sum < 0) current_sum = 0;"
      },
      {
        "type": "multiple_choice",
        "questionText": "In [-2, 1, -3, 4, -1, 2, 1, -5, 4], what is the max sum?",
        "options": [
          "6",
          "4",
          "8"
        ],
        "correctAnswer": "6",
        "explanation": "[4, -1, 2, 1] sums to 6."
      },
      {
        "type": "match_following",
        "questionText": "Match Kadane Logic!",
        "pairs": [
          {
            "key": "current_sum",
            "value": "Running total"
          },
          {
            "key": "max_sum",
            "value": "Global record"
          },
          {
            "key": "Reset",
            "value": "current_sum = 0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update max_sum.",
        "codeSnippet": "max_sum = max(max_sum, ___);",
        "correctAnswer": "current_sum"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time. This is pure dynamic programming magic. Fast as a thunderbolt! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if all numbers in the array are NEGATIVE?",
        "options": [
          "Max is the largest negative number",
          "Max is 0",
          "Max is -Infinity"
        ],
        "correctAnswer": "Max is the largest negative number"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize max_sum for all-negative handling.",
        "codeSnippet": "int max_s = ___;",
        "correctAnswer": "INT_MIN"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Zoho, Amazon, Google—they ALL ask this. It's a foundational elite move!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you fly as high as Kadane?\"",
        "options": [
          "HIGHER!",
          "No.",
          "SQUAWK!"
        ],
        "correctAnswer": "HIGHER!"
      }
    ]
  },
  {
    "order": 25,
    "title": "The Dutch National Bird",
    "desc": "Sorting 0s, 1s, and 2s in O(N) (DNF Algorithm).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sorting with three types of birds! Low (0), Mid (1), and High (2). We called it the Dutch National Flag algorithm! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use three pointers: Low, Mid, High. If Mid is 0, swap with Low. If Mid is 2, swap with High! 🦜\"",
        "codeSnippet": "if (a[mid] == 0) swap(a[low++], a[mid++]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens to the `mid` pointer when we swap with `high`?",
        "options": [
          "mid stays (needs re-check)",
          "mid moves forward",
          "mid moves backward"
        ],
        "correctAnswer": "mid stays (needs re-check)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Swaps!",
        "pairs": [
          {
            "key": "Case 0",
            "value": "Swap(Low, Mid)"
          },
          {
            "key": "Case 1",
            "value": "Mid++"
          },
          {
            "key": "Case 2",
            "value": "Swap(Mid, High)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to keep partitioning.",
        "codeSnippet": "while (mid ___ high)",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity? O(N). Why sort the whole flock when you only have three types? Smart bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What property does DNF ensure?",
        "options": [
          "Sorted colors",
          "Median found",
          "Random order"
        ],
        "correctAnswer": "Sorted colors"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize `high` pointer.",
        "codeSnippet": "high = ___;",
        "correctAnswer": "n-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every elite interview has this variation. Master the pointers, master the flag!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my flag red, white, and blue?\"",
        "options": [
          "Yes!",
          "No, gold!",
          "0"
        ],
        "correctAnswer": "Yes!"
      }
    ]
  },
  {
    "order": 26,
    "title": "The Majority Bird",
    "desc": "Finding an element that appears > N/2 times (Boyer-Moore).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Is there a bird that rules the flock? A majority element appears more than HALF the time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Boyer-Moore Voting! If count is 0, pick a new candidate. If current == candidate, count++. Else, count--! 🦜\"",
        "codeSnippet": "if (count == 0) candidate = arr[i];"
      },
      {
        "type": "multiple_choice",
        "questionText": "In [2, 2, 1, 1, 1, 2, 2], what is the majority element?",
        "options": [
          "2",
          "1",
          "None"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match Vote Actions!",
        "pairs": [
          {
            "key": "Matches Candidate",
            "value": "count++"
          },
          {
            "key": "Different",
            "value": "count--"
          },
          {
            "key": "Count 0",
            "value": "New Candidate"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check the majority count threshold.",
        "codeSnippet": "if (freq > (n / ___))",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(1) space and O(N) time. You don't need a hash map to find the king! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does the voting algorithm GUARANTEE a majority if one exists?",
        "options": [
          "Yes",
          "No",
          "Only for parrots"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize the `candidate` variable.",
        "codeSnippet": "int cand = ___;",
        "correctAnswer": "arr[0]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a beautiful logic riddle. It feels like magic, but it's just math!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do I have the majority vote?\"",
        "options": [
          "YES!",
          "In your dreams.",
          "SQUAWK!"
        ],
        "correctAnswer": "YES!"
      }
    ]
  },
  {
    "order": 27,
    "title": "The Overlapping Horizon",
    "desc": "Merging overlapping intervals.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flight Schedules! If two time intervals overlap, we must merge them. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sort them by START time first! Then compare the current end to the next start. 🦜\"",
        "codeSnippet": "if (current_end >= next_start) merge();"
      },
      {
        "type": "multiple_choice",
        "questionText": "Merge [1, 3] and [2, 6]?",
        "options": [
          "[1, 6]",
          "[1, 3], [2, 6]",
          "[2, 3]"
        ],
        "correctAnswer": "[1, 6]"
      },
      {
        "type": "match_following",
        "questionText": "Match Interval Terms!",
        "pairs": [
          {
            "key": "Start",
            "value": "First element"
          },
          {
            "key": "End",
            "value": "Second element"
          },
          {
            "key": "Overlap",
            "value": "Start <= Prev End"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update the merged end time.",
        "codeSnippet": "merged_end = max(prev_end, ___) ;",
        "correctAnswer": "curr_end"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Crucial for scheduling apps. O(N log N) because of the sorting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Merging Intervals after sorting?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Sort by start time (Index 0).",
        "codeSnippet": "intervals.sort(a, b => a[___] - b[___])",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the first start isn't before the second end, they are separate islands! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is our flight on time?\"",
        "options": [
          "Always.",
          "Delayed.",
          "0"
        ],
        "correctAnswer": "Always."
      }
    ]
  },
  {
    "order": 28,
    "title": "Stock Market Seeds",
    "desc": "Buy and Sell Stocks once for maximum profit.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Buy low, sell high! Like trading rare feathers for golden seeds. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep track of the `min_price` seen so far. Every day, calculate the profit if you sold TODAY! 🦜\"",
        "codeSnippet": "profit = priceToday - minPrice;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Max profit from [7, 1, 5, 3, 6, 4]?",
        "options": [
          "5 (Buy at 1, Sell at 6)",
          "7",
          "4"
        ],
        "correctAnswer": "5 (Buy at 1, Sell at 6)"
      },
      {
        "type": "match_following",
        "questionText": "Match Stock Actions!",
        "pairs": [
          {
            "key": "minPrice",
            "value": "Best day to buy"
          },
          {
            "key": "maxProfit",
            "value": "Global best trade"
          },
          {
            "key": "Today",
            "value": "Potential sell day"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update min_price.",
        "codeSnippet": "min_p = min(min_p, ___);",
        "correctAnswer": "price"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time, O(1) space. A clean, classic elite interview question! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the profit if prices only go DOWN?",
        "options": [
          "0",
          "-1",
          "-Infinity"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize max_profit.",
        "codeSnippet": "int p = ___;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dont be greedy! Take the profit when its at its peak! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Should I buy more seeds?\"",
        "options": [
          "HODL!",
          "Sell!",
          "Buy!"
        ],
        "correctAnswer": "HODL!"
      }
    ]
  },
  {
    "order": 29,
    "title": "The Next Permutation",
    "desc": "Finding the next lexicographical higher arrangement.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Word puzzles! What is the next bigger arrangement of numbers? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Step 1: Find the first dip from the right (`arr[i] < arr[i+1]`). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Next permutation of [1, 2, 3]?",
        "options": [
          "[1, 3, 2]",
          "[2, 1, 3]",
          "[3, 2, 1]"
        ],
        "correctAnswer": "[1, 3, 2]"
      },
      {
        "type": "match_following",
        "questionText": "Match Permutation Steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Identify dip"
          },
          {
            "key": "Step 2",
            "value": "Swap with larger"
          },
          {
            "key": "Step 3",
            "value": "Reverse rest"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Find dip from the end.",
        "codeSnippet": "if (arr[i] ___ arr[i+1]) break;",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity? O(N). Brute force would be O(N!). This is why we fly, not crawl! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the next permutation of [3, 2, 1]?",
        "options": [
          "[1, 2, 3]",
          "[3, 1, 2]",
          "[1, 3, 2]"
        ],
        "correctAnswer": "[1, 2, 3]",
        "explanation": "It wraps back to the smallest."
      },
      {
        "type": "code_fill_in",
        "questionText": "Standard library function for this in C++.",
        "codeSnippet": "___(begin, end);",
        "correctAnswer": "next_permutation"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If no dip is found, the flock is in reverse-sorted order. Just flip the whole thing!\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the best bird?\"",
        "options": [
          "YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "YES!"
      }
    ]
  },
  {
    "order": 30,
    "title": "Rainfall Traps (Intro)",
    "desc": "Calculating trapped water between bird cages.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Storm! Water is trapped between nests of different heights. How much can we store? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For each nest, the water height is `min(MaxLeft, MaxRight) - NestHeight`. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In heights [3, 0, 2], how much water at index 1?",
        "options": [
          "2",
          "0",
          "3"
        ],
        "correctAnswer": "2",
        "explanation": "min(3, 2) - 0 = 2."
      },
      {
        "type": "match_following",
        "questionText": "Match Trap Logic!",
        "pairs": [
          {
            "key": "Cage height",
            "value": "arr[i]"
          },
          {
            "key": "Water height",
            "value": "Pillar min"
          },
          {
            "key": "Total",
            "value": "Sum all"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate water trapped at index `i`.",
        "codeSnippet": "w = min(l[i], r[i]) ___ arr[i];",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pre-calculate MaxLeft and MaxRight arrays (Prefix sums!) to solve it in O(N) time and space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity with pre-calculated arrays?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update left max array.",
        "codeSnippet": "l[i] = max(l[i-1], ___);",
        "correctAnswer": "arr[i]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next we will learn the O(1) space version using two pointers. But first, let these seeds soak! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you have an umbrella?\"",
        "options": [
          "No, I enjoy it!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "No, I enjoy it!"
      }
    ]
  },
  {
    "order": 31,
    "title": "The Pascal Pyramid",
    "desc": "Generating rows of Pascal's Triangle using arrays.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math patterns! Pascal's Triangle is a pyramid where each bird is the sum of the two birds above it! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"`Triangle[i][j] = Triangle[i-1][j-1] + Triangle[i-1][j]`. The edges are always 1s! 🦜\"",
        "codeSnippet": "row[j] = prev[j-1] + prev[j];"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 3rd row of Pascal's Triangle? (Row 0 is [1])",
        "options": [
          "[1, 2, 1]",
          "[1, 3, 3, 1]",
          "[1, 1, 1]"
        ],
        "correctAnswer": "[1, 2, 1]"
      },
      {
        "type": "match_following",
        "questionText": "Match Pascal Rules!",
        "pairs": [
          {
            "key": "Edges",
            "value": "Always 1"
          },
          {
            "key": "Internal",
            "value": "Sum of above"
          },
          {
            "key": "Complexity",
            "value": "O(N^2)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initialize the first and last element of a row.",
        "codeSnippet": "row[0] = row[i] = ___;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used in combinations and probability! High-level bird math for Zoho Elite! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity to store the entire triangle of N rows?",
        "options": [
          "O(N^2)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Java: Create a 2D array.",
        "codeSnippet": "int[][] tri = new int[___][___];",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you only need the Kth row, you can do it in O(K) space! Can you figure out how? 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the peak of the pyramid?\"",
        "options": [
          "SQUAWK YES!",
          "The 1 above.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 32,
    "title": "Spiral Scouting",
    "desc": "Traversing a 2D Matrix in a spiral pattern.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Spiral Scouting! Fly around the perimeter, then sink into the middle. It's a drill, fledgling! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use 4 boundaries: Top, Bottom, Left, Right. Shrink them as you finish each edge! 🦜\"",
        "codeSnippet": "for(int i=left; i<=right; i++) { ... } top++;"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a 3x3 matrix, what is the sequence of directions?",
        "options": [
          "Right, Down, Left, Up",
          "Up, Down, Right, Left",
          "Clockwise"
        ],
        "correctAnswer": "Right, Down, Left, Up"
      },
      {
        "type": "match_following",
        "questionText": "Match Boundaries!",
        "pairs": [
          {
            "key": "Top Row done",
            "value": "top++"
          },
          {
            "key": "Right Col done",
            "value": "right--"
          },
          {
            "key": "Bottom Row done",
            "value": "bottom--"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to continue the spiral.",
        "codeSnippet": "while (top <= bottom && left ___ right)",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(R*C). Every cell is visited once. This mission tests your boundary management! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many elements are visited in a 4x5 matrix?",
        "options": [
          "20",
          "9",
          "40"
        ],
        "correctAnswer": "20"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize `bottom` index.",
        "codeSnippet": "bottom = ___;",
        "correctAnswer": "rows-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't overshoot! Always check if `top <= bottom` before the Left and Up passes! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you dizzy yet?\"",
        "options": [
          "Spinning!",
          "No.",
          "0"
        ],
        "correctAnswer": "Spinning!"
      }
    ]
  },
  {
    "order": 33,
    "title": "Rotation Station (Matrix)",
    "desc": "Rotating a 2D matrix by 90 degrees in-place.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rotate the Whole World! To rotate 90 degrees clockwise: 1. Transpose. 2. Reverse each row! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Transpose means `Swap(matrix[i][j], matrix[j][i])`. It flips the world across the diagonal! 🦜\"",
        "codeSnippet": "swap(a[i][j], a[j][i]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "If you transpose a 2x3 matrix, what are the dimensions?",
        "options": [
          "3x2",
          "2x3",
          "2x2"
        ],
        "correctAnswer": "3x2"
      },
      {
        "type": "match_following",
        "questionText": "Match Rotation Steps!",
        "pairs": [
          {
            "key": "Transpose",
            "value": "A[i][j] <-> A[j][i]"
          },
          {
            "key": "Reverse Rows",
            "value": "Clockwise 90"
          },
          {
            "key": "Reverse Columns",
            "value": "Anti-Clockwise"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Inner loop for Transpose to avoid double-swapping.",
        "codeSnippet": "for(int j = ___; j < n; j++)",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(1) auxiliary space! In-place mastery is what separates the chickadees from the raptors! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final complexity of 90-degree rotation?",
        "options": [
          "O(N^2)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Reverse row `i` of matrix `m`.",
        "codeSnippet": "reverse(m[i].begin(), m[i].___());",
        "correctAnswer": "end"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Simple and elegant. Two steps, total mastery! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is your world upside down?\"",
        "options": [
          "It's rotated!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "It's rotated!"
      }
    ]
  },
  {
    "order": 34,
    "title": "The Greedy Peck",
    "desc": "Introduction to Greedy Strategy on arrays.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Greedy! Take the best choice RIGHT NOW and hope it works out. Parrots are naturally greedy! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Example: Jump Game. What is the farthest you can reach at any moment? 🦜\"",
        "codeSnippet": "max_reach = max(max_reach, i + arr[i]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "In [2, 3, 1, 1, 4], can you reach the last index?",
        "options": [
          "Yes",
          "No",
          "Depends on Pico"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "match_following",
        "questionText": "Match Greedy Terms!",
        "pairs": [
          {
            "key": "Local Optimal",
            "value": "Current best"
          },
          {
            "key": "Global Optimal",
            "value": "Final best"
          },
          {
            "key": "Choice",
            "value": "Greedy"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update the farthest reach.",
        "codeSnippet": "reach = max(reach, i + ___);",
        "correctAnswer": "nums[i]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Greedy is O(N) but it doesn't always work. If it does, it's the fastest flight path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Greedy work for ALL problems?",
        "options": [
          "No",
          "Yes",
          "Only for birds"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if current index is unreachable.",
        "codeSnippet": "if (i ___ max_reach) return false;",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Choose wisely, or you might end up in a dead-end nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I have ALL the seeds?\"",
        "options": [
          "Yes!",
          "Greedy parrot.",
          "0"
        ],
        "correctAnswer": "Yes!"
      }
    ]
  },
  {
    "order": 35,
    "title": "The Rearrangement",
    "desc": "Rearranging positive and negative numbers in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Balance! Positive birds in even spots, negative birds in odd spots. Let's align the flock! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use two pointers: `pos = 0`, `neg = 1`. If a bird is misplaced, fly them to the right spot! 🦜\"",
        "codeSnippet": "if (a[i] > 0) { res[pos] = a[i]; pos += 2; }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Goal of Rearrange Pos/Neg?",
        "options": [
          "Interleave them",
          "Group them",
          "Sort them"
        ],
        "correctAnswer": "Interleave them"
      },
      {
        "type": "match_following",
        "questionText": "Match Spots!",
        "pairs": [
          {
            "key": "Positive",
            "value": "0, 2, 4..."
          },
          {
            "key": "Negative",
            "value": "1, 3, 5..."
          },
          {
            "key": "Step",
            "value": "+2"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Increment negative pointer index.",
        "codeSnippet": "neg_idx ___ 2;",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time and O(N) space if we use a result array. Elite interviews love this one! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final complexity of O(N) Rearrange?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize the result array.",
        "codeSnippet": "vector<int> res(___);",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Patterns! Look for the patterns, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I positive or negative?\"",
        "options": [
          "POSitively amazing!",
          "Negative.",
          "0"
        ],
        "correctAnswer": "POSitively amazing!"
      }
    ]
  },
  {
    "order": 36,
    "title": "Subset Snatching",
    "desc": "Introduction to powerset and generating all subarrays.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Small groups! A subarray is a contiguous slice. A subset is any combination of birds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Total subarrays in size N? `N*(N+1)/2`. Total subsets? `2^N`. The subsets grow exponentially! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many subsets in [1, 2, 3]?",
        "options": [
          "8 (2^3)",
          "6",
          "3"
        ],
        "correctAnswer": "8 (2^3)"
      },
      {
        "type": "match_following",
        "questionText": "Match Sub-Groups!",
        "pairs": [
          {
            "key": "Subarray",
            "value": "Contiguous"
          },
          {
            "key": "Subset",
            "value": "Any indices"
          },
          {
            "key": "Power Set",
            "value": "All 2^N"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total number of subarrays for size 5.",
        "codeSnippet": "count = (5 * ___) / 2;",
        "correctAnswer": "6"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To generate subsets, use Recursion or Bit manipulation! We'll learn that soon. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of generating all subsets?",
        "options": [
          "O(2^N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(2^N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Bit shift for 2^N.",
        "codeSnippet": "count = 1 ___ n;",
        "correctAnswer": "<<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Power Set is massive! Only for tiny flocks! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I be a subset of the best?\"",
        "options": [
          "You ARE the set!",
          "No.",
          "0"
        ],
        "correctAnswer": "You ARE the set!"
      }
    ]
  },
  {
    "order": 37,
    "title": "The Leader Recall (Reverse)",
    "desc": "Final check of leader logic with a twist.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recall! A leader is greater than ALL to its right. Let's see if you can do it without help! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Challenge: Find leaders in [10, 22, 12, 3, 0, 6]. Rightmost is 6. Next? 12? No, 22! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Leaders in [10, 22, 12, 3, 0, 6]?",
        "options": [
          "22, 12, 6",
          "22, 6",
          "10, 22, 6"
        ],
        "correctAnswer": "22, 12, 6",
        "explanation": "6 is last. 0 < 6. 3 < 6. 12 > 6 (Leader!). 22 > 12 (Leader!). 10 < 22."
      },
      {
        "type": "match_following",
        "questionText": "Match Leader Checks!",
        "pairs": [
          {
            "key": "Is 12 leader?",
            "value": "Yes (>6)"
          },
          {
            "key": "Is 3 leader?",
            "value": "No (<6)"
          },
          {
            "key": "Is 22 leader?",
            "value": "Yes (>12)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update leaders list.",
        "codeSnippet": "if (arr[i] > max_right) {\n  max_right = arr[i];\n  leaders.___(arr[i]);\n}",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Found them! Now reverse the list to show them in the original order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why reverse the result list?",
        "options": [
          "Found them R-to-L",
          "Sorting",
          "Convention"
        ],
        "correctAnswer": "Found them R-to-L"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final complexity?",
        "codeSnippet": "O(___)",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recalling patterns is what makes you ELITE! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the ultimate leader?\"",
        "options": [
          "YES!",
          "No.",
          "What was the question?"
        ],
        "correctAnswer": "YES!"
      }
    ]
  },
  {
    "order": 38,
    "title": "Frequency Maps (Intermediate)",
    "desc": "Intro to hashing for O(N) duplicate checks.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Master Class! Use a Hash Map (Dictionary) to count birds with ANY value, not just small ones! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Lookup is O(1). Store `BirdValue -> Count`. Fast as a falcon! 🦜\"",
        "codeSnippet": "map[arr[i]] = (map[arr[i]] || 0) + 1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of checking if X exists in a Hash Map?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Hash Terms!",
        "pairs": [
          {
            "key": "Key",
            "value": "The Bird Value"
          },
          {
            "key": "Value",
            "value": "The Count"
          },
          {
            "key": "Collision",
            "value": "Two birds, one nest"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if key exists in JS Map.",
        "codeSnippet": "if (myMap.___(target))",
        "correctAnswer": "has"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Python: `from collections import Counter`. It's the elite way! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of Frequency Hash Map?",
        "options": [
          "O(N)",
          "O(1)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Python: Get count with default 0.",
        "codeSnippet": "count = map.get(x, ___)",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the flock has unique values, use a HASH SET! Just yes/no! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can a Map store my ego?\"",
        "options": [
          "Too big!",
          "O(1)",
          "Yes."
        ],
        "correctAnswer": "Too big!"
      }
    ]
  },
  {
    "order": 39,
    "title": "The Missing Pivot",
    "desc": "Finding a pivot element (Sum of Left == Sum of Right).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Pivot! Same as Equilibrium, but faster. Total sum - Current element! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mission: Find the index where `LeftSum == TotalSum - Current - LeftSum`. 🦜\"",
        "codeSnippet": "if (2 * l_sum == t_sum - arr[i]) return i;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the sum of [1, 7, 3, 6, 5, 6]?",
        "options": [
          "28",
          "27",
          "29"
        ],
        "correctAnswer": "28"
      },
      {
        "type": "match_following",
        "questionText": "Match Pivot Logic!",
        "pairs": [
          {
            "key": "i=3 (val=6)",
            "value": "Pivot!"
          },
          {
            "key": "Left Sum",
            "value": "1+7+3 = 11"
          },
          {
            "key": "Right Sum",
            "value": "5+6 = 11"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate the Right Sum implicitly.",
        "codeSnippet": "right_sum = total_sum - left_sum - ___;",
        "correctAnswer": "arr[i]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time, O(1) space. A LeetCode 724 classic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If no pivot exists, what should you return?",
        "options": [
          "-1",
          "0",
          "Infinity"
        ],
        "correctAnswer": "-1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update left sum after check.",
        "codeSnippet": "left_sum ___ arr[i];",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sharp eyes, fledgling! The pivot is the heart of the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I your pivot?\"",
        "options": [
          "Always.",
          "No.",
          "0"
        ],
        "correctAnswer": "Always."
      }
    ]
  },
  {
    "order": 40,
    "title": "Stage 2 Graduation",
    "desc": "Mastery of Intermediate Array Patterns.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 2 COMPLETE! You are now an Intermediate Array Specialist! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We conquered Kadane, DNF, Boyer-Moore, Sliding Windows, and Matrix Spirals! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Most complex pattern in Stage 2?",
        "options": [
          "Rainwater Trapping",
          "Summing",
          "Printing"
        ],
        "correctAnswer": "Rainwater Trapping"
      },
      {
        "type": "multiple_choice",
        "questionText": "Kadane algorithm complexity?",
        "options": [
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Boyer-Moore Voting space?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Sliding window time?",
        "options": [
          "O(N)",
          "O(N*K)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Spiral Matrix complexity?",
        "options": [
          "O(R*C)",
          "O(N)"
        ],
        "correctAnswer": "O(R*C)"
      },
      {
        "type": "match_following",
        "questionText": "Final Stage 2 Match!",
        "pairs": [
          {
            "key": "Intermediate",
            "value": "Check!"
          },
          {
            "key": "Mastery",
            "value": "Pending..."
          },
          {
            "key": "Pico",
            "value": "Proud!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stage 3 will be brutal. Multi-dimensional Dynamic Programming and Matrix Mastery await! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready for the summit?\"",
        "options": [
          "FLIGHT ON!",
          "Maybe.",
          "No."
        ],
        "correctAnswer": "FLIGHT ON!"
      }
    ]
  }
];

module.exports = stage2;