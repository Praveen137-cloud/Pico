const stage3 = [
  {
    "order": 41,
    "title": "Beyond Comparisons",
    "desc": "Introduction to Non-Comparison Sorts.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Speed Limit! Comparison-based sorts (like Merge/Quick) have a fundamental speed limit of O(N log N). To fly faster, we must stop comparing birds! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Non-Comparison Sorts use properties of the birds (like their digits or value ranges) to reach O(N) time. They don't ask 'Who is bigger?', they ask 'What is your value?'! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the lower bound for comparison-based sorting?",
        "options": [
          "O(N log N)",
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the speed!",
        "pairs": [
          {
            "key": "Quick Sort",
            "value": "Comparison based"
          },
          {
            "key": "Counting Sort",
            "value": "Non-comparison"
          },
          {
            "key": "Lower Bound",
            "value": "O(N log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Non-comparison sorts can reach ___ time complexity.",
        "codeSnippet": "IdealSpeed = ___ ;",
        "correctAnswer": "linear"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Linear time (O(N)) is the ultimate flight speed. But it requires extra knowledge about the birds' values! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which of these is a non-comparison sort?",
        "options": [
          "Counting Sort",
          "Selection Sort",
          "Merge Sort"
        ],
        "correctAnswer": "Counting Sort"
      },
      {
        "type": "code_fill_in",
        "questionText": "Linear time.",
        "codeSnippet": "Complexity = O( ___ );",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Breaking the limit! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Can we sort in O(N)?\"",
        "options": [
          "SQUAWK YES (with restrictions)!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES (with restrictions)!"
      }
    ]
  },
  {
    "order": 42,
    "title": "Counting the Beaks",
    "desc": "Introduction to Counting Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Tally Sheet! Counting Sort works if the birds have small, whole-number values. We count how many birds have each value! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Example: If we have birds of size 1, 2, and 3. Just count how many 1s, how many 2s, and how many 3s. Then place them in order! 🦜\"",
        "codeSnippet": "for(int x : arr) count[x]++;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Counting Sort is best when the range of values (K) is ___.",
        "options": [
          "Small (K ≈ N)",
          "Huge",
          "Negative only"
        ],
        "correctAnswer": "Small (K ≈ N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Counting steps!",
        "pairs": [
          {
            "key": "Count Array",
            "value": "Store frequencies"
          },
          {
            "key": "Range",
            "value": "Max element - Min element"
          },
          {
            "key": "Complexity",
            "value": "O(N + K)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Counting sort uses an array of size ___.",
        "codeSnippet": "Size = ___ ;",
        "correctAnswer": "max + 1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Time: O(N + K), where K is the range of values. If K is massive, this sort becomes very hungry for memory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [1, 4, 1, 2, 7], max count array index?",
        "options": [
          "7",
          "5",
          "1"
        ],
        "correctAnswer": "7"
      },
      {
        "type": "code_fill_in",
        "questionText": "Increment count.",
        "codeSnippet": "count[arr[i]] ___ ;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Tallying order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it memory efficient for range 1 to 1,000,000,000?\"",
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
    "order": 43,
    "title": "Mapping the Forest",
    "desc": "Counting Sort: Prefix Sum logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Finding the Nest! To know EXACTLY where a bird of size 2 should go, we sum up the counts of all smaller birds. This is the Prefix Sum! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Cumulative Count: `count[i] = count[i] + count[i-1]`. Now, `count[i]` tells us the number of birds less than or equal to `i`! 🦜\"",
        "codeSnippet": "for(int i=1; i<=max; i++) count[i] += count[i-1];"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the cumulative count at index 3 represent?",
        "options": [
          "Total birds with size <= 3",
          "Total birds with size exactly 3",
          "Pico's favorite number"
        ],
        "correctAnswer": "Total birds with size <= 3"
      },
      {
        "type": "match_following",
        "questionText": "Match Prefix logic!",
        "pairs": [
          {
            "key": "count[i]",
            "value": "End position of size i"
          },
          {
            "key": "Initial Count",
            "value": "Frequency"
          },
          {
            "key": "Cumulative",
            "value": "Position Mapping"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Prefix sum converts frequencies into ___.",
        "codeSnippet": "Result = ___ ;",
        "correctAnswer": "positions"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This mapping allows us to place each bird in its correct nest without comparing it to others! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If count[2]=3 and count[3]=5, how many birds have size 3?",
        "options": [
          "2 (5 - 3)",
          "5",
          "3"
        ],
        "correctAnswer": "2 (5 - 3)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Cumulative add.",
        "codeSnippet": "count[i] += count[ ___ ];",
        "correctAnswer": "i - 1"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Nest mapping! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Do we know where they go?\"",
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
    "order": 44,
    "title": "Stable Harvest",
    "desc": "Stable implementation of Counting Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Preserving History! To make Counting Sort stable, we process the birds from the BACK of the forest to the front. This keeps identical birds in their original relative order! 🦜\"",
        "codeSnippet": "for(int i = n-1; i >= 0; i--) {\n  output[count[arr[i]] - 1] = arr[i];\n  count[arr[i]]--;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why iterate backwards in the final step of Counting Sort?",
        "options": [
          "To maintain stability",
          "It's faster",
          "Reverse flight is cooler"
        ],
        "correctAnswer": "To maintain stability"
      },
      {
        "type": "match_following",
        "questionText": "Match Final steps!",
        "pairs": [
          {
            "key": "Iteration",
            "value": "Right to Left (n-1 to 0)"
          },
          {
            "key": "Placement",
            "value": "output[pos - 1]"
          },
          {
            "key": "Update pos",
            "value": "count[val]--"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Counting sort is NOT used if the data is ___.",
        "codeSnippet": "InvalidData = ___ ;",
        "correctAnswer": "decimal"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Counting Sort is a building block for Radix Sort. It's the engine of elite linear sorting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final time complexity of Stable Counting Sort?",
        "options": [
          "O(N + K)",
          "O(N log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N + K)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Output placement.",
        "codeSnippet": "output[ ___ [arr[i]] - 1] = arr[i];",
        "correctAnswer": "count"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Stable harvest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we keep the order?\"",
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
    "order": 45,
    "title": "The Digital Wing",
    "desc": "Introduction to Radix Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Bit by Bit! Radix Sort handles huge numbers by sorting them digit by digit, from the smallest place (ones) to the largest! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Process: Use Counting Sort on the ones digit, then the tens, then hundreds. As long as Counting Sort is STABLE, the final result will be perfectly sorted! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What property of Counting Sort is mandatory for Radix Sort?",
        "options": [
          "Stability",
          "O(1) space",
          "Bird names"
        ],
        "correctAnswer": "Stability"
      },
      {
        "type": "match_following",
        "questionText": "Match Radix logic!",
        "pairs": [
          {
            "key": "Pass 1",
            "value": "Sort by ones"
          },
          {
            "key": "Pass 2",
            "value": "Sort by tens"
          },
          {
            "key": "Requirement",
            "value": "Stable sub-sort"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Radix sort handles numbers digit by ___.",
        "codeSnippet": "Method = ___ ;",
        "correctAnswer": "digit"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Time Complexity: O(d * (N + K)), where `d` is the number of digits. For 32-bit integers, this is basically linear! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many digits in the number 123?",
        "options": [
          "3",
          "2",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Extract digit logic.",
        "codeSnippet": "digit = (num / exp) ___ 10;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Digital flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Can it sort 1,000,000 large numbers efficiently?\"",
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
    "order": 46,
    "title": "Radix Implementation",
    "desc": "How Radix Sort chains Counting Sort passes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Exponential Ladder! We start with `exp = 1` and multiply by 10 in each pass until we've covered the largest bird's digits! 🦜\"",
        "codeSnippet": "for(int exp = 1; max/exp > 0; exp *= 10) {\n  countSort(arr, n, exp);\n}"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Each `countSort` call uses the stable logic and extracts the digit using `(arr[i] / exp) % 10`. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the base Case for Radix Sort on integers?",
        "options": [
          "Base 10",
          "Base 2",
          "Base Birds"
        ],
        "correctAnswer": "Base 10"
      },
      {
        "type": "match_following",
        "questionText": "Match Radix passes!",
        "pairs": [
          {
            "key": "exp = 1",
            "value": "Ones digit"
          },
          {
            "key": "exp = 10",
            "value": "Tens digit"
          },
          {
            "key": "exp = 100",
            "value": "Hundreds digit"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "In each pass, `exp` is multiplied by ___.",
        "codeSnippet": "Multiplier = ___ ;",
        "correctAnswer": "10"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Radix Sort is great for fixed-length keys like strings and integers. It scales beautifully for massive, structured data! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of Radix Sort?",
        "options": [
          "O(N + K)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N + K)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Next pass prep.",
        "codeSnippet": "exp ___= 10;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Exponential reach! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it stable?\"",
        "options": [
          "SQUAWK YES (must be)!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES (must be)!"
      }
    ]
  },
  {
    "order": 47,
    "title": "Birds in Buckets",
    "desc": "Introduction to Bucket Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Scattering the Flock! Bucket Sort is perfect for birds with decimal values (like size 0.1, 0.5, 0.9). We scatter them into separate 'buckets' based on their value! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Logic: Split the range [0.0, 1.0) into N buckets. Put each bird into `n * arr[i]` bucket. Then sort buckets individually! 🦜\"",
        "codeSnippet": "int bi = n * arr[i];\nbuckets[bi].add(arr[i]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Bucket Sort is most effective when the data is ___.",
        "options": [
          "Uniformly distributed",
          "Concentrated at one value",
          "Randomized"
        ],
        "correctAnswer": "Uniformly distributed"
      },
      {
        "type": "match_following",
        "questionText": "Match Bucket steps!",
        "pairs": [
          {
            "key": "Scatter",
            "value": "Put birds in buckets"
          },
          {
            "key": "Sort",
            "value": "Order each bucket"
          },
          {
            "key": "Gather",
            "value": "Join buckets back"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bucket index for value 0.45 with 10 buckets.",
        "codeSnippet": "Index = ___ ;",
        "correctAnswer": "4"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Time Complexity (Average): O(N). Worst case (all birds in one bucket): O(N log N) or O(N^2). Distribution is key! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which sort is usually used to sort individual buckets?",
        "options": [
          "Insertion Sort",
          "Bubble Sort",
          "Selection Sort"
        ],
        "correctAnswer": "Insertion Sort"
      },
      {
        "type": "code_fill_in",
        "questionText": "Calculate index.",
        "codeSnippet": "int index = n ___ arr[i];",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Distributed order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Does it work for Decimals?\"",
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
    "order": 48,
    "title": "Gathering Buckets",
    "desc": "Completing the Bucket Sort cycle.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Grand Reunion! Once every bucket is sorted, we simply gather the birds from bucket 0 to bucket N-1 back into the main forest. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Gathering: Concatenate the contents of all non-empty buckets in order. 🦜\"",
        "codeSnippet": "for(auto bucket : buckets) {\n  for(float bird : bucket) arr[k++] = bird;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In Bucket Sort, what follows bucket sorting?",
        "options": [
          "Gathering",
          "Dividing",
          "Swapping"
        ],
        "correctAnswer": "Gathering"
      },
      {
        "type": "match_following",
        "questionText": "Match Bucket Gathering!",
        "pairs": [
          {
            "key": "Bucket 0Birds",
            "value": "Smallest range"
          },
          {
            "key": "Bucket N-1 Birds",
            "value": "Largest range"
          },
          {
            "key": "Result Array",
            "value": "Sorted whole"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bucket sort is a ___ and gather algorithm.",
        "codeSnippet": "Paradigm = ___ ;",
        "correctAnswer": "scatter"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"If buckets are sorted, the gathered list is guaranteed to be sorted! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we use Bucket Sort for integers?",
        "options": [
          "Yes, with range mapping",
          "No",
          "0"
        ],
        "correctAnswer": "Yes, with range mapping"
      },
      {
        "type": "code_fill_in",
        "questionText": "Gathering loop.",
        "codeSnippet": "for (float val : buckets[i]) arr[index ___ ] = val;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Reunited order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it ready?\"",
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
    "order": 49,
    "title": "Elite Comparators",
    "desc": "Sorting with Custom Comparators.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Rules of Engagement! What if we want to sort birds first by wingspan (descending), and if equal, by age (ascending)? We use Custom Comparators! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Custom Sort: A function that takes two birds (A, B) and returns `true` if A should come BEFORE B. 🦜\"",
        "codeSnippet": "bool compare(Bird a, Bird b) {\n  if (a.span != b.span) return a.span > b.span;\n  return a.age < b.age;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In a comparator, returning `true` for `a < b` results in which order?",
        "options": [
          "Ascending",
          "Descending",
          "Random"
        ],
        "correctAnswer": "Ascending"
      },
      {
        "type": "match_following",
        "questionText": "Match Comparator logic!",
        "pairs": [
          {
            "key": "a < b",
            "value": "Ascending Sort"
          },
          {
            "key": "a > b",
            "value": "Descending Sort"
          },
          {
            "key": "False on match",
            "value": "Stable check"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Comparators give you total ___ over the order.",
        "codeSnippet": "Control = ___ ;",
        "correctAnswer": "complete"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Elite scouts use custom rules to organize complex forests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if a comparator is not 'strict' (returns true for equal)?",
        "options": [
          "Possible crash or infinite loop",
          "It's fine",
          "0"
        ],
        "correctAnswer": "Possible crash or infinite loop"
      },
      {
        "type": "code_fill_in",
        "questionText": "Comparator return.",
        "codeSnippet": "return a.value ___ b.value;",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Custom rules! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Can we sort anything?\"",
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
    "order": 50,
    "title": "Grid Search Elite",
    "desc": "Searching in a sorted 2D Matrix.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Matrix Hunt! If every row and every column of a bird-grid is sorted, we can search it faster than checking every tree! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Step-wise Search: Start at the TOP-RIGHT corner. If bird > target, move LEFT. If bird < target, move DOWN! 🦜\"",
        "codeSnippet": "int r = 0, c = m-1;\nwhile(r < n && c >= 0) {\n  if(mat[r][c] == x) return true;\n  if(mat[r][c] > x) c--; else r++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Step-wise search in an N x M matrix?",
        "options": [
          "O(N + M)",
          "O(N * M)",
          "O(log N * log M)"
        ],
        "correctAnswer": "O(N + M)"
      },
      {
        "type": "match_following",
        "questionText": "Match Matrix moves!",
        "pairs": [
          {
            "key": "Current > Target",
            "value": "Move Left (Column --)"
          },
          {
            "key": "Current < Target",
            "value": "Move Down (Row ++)"
          },
          {
            "key": "Start Position",
            "value": "Top-Right or Bottom-Left"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Starting at top-right works because row is sorted ___ and column is sorted down.",
        "codeSnippet": "Direction = ___ ;",
        "correctAnswer": "leftward"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Linear time 2D search! Much faster than the O(N * M) brute force scan. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we start at the TOP-LEFT corner?",
        "options": [
          "No (Both directions increase)",
          "Yes",
          "Only for owls"
        ],
        "correctAnswer": "No (Both directions increase)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Move down.",
        "codeSnippet": "else r ___ ;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Grid locked! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did we find it in 2D?\"",
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
    "order": 51,
    "title": "Rotation Count",
    "desc": "How many times was the array rotated?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Missing Spin! To find how many times a sorted forest was rotated, just find the index of the MINIMUM bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [4, 5, 0, 1, 2], what is the rotation count?",
        "options": [
          "2",
          "4",
          "0"
        ],
        "correctAnswer": "2",
        "explanation": "Min is at index 2."
      },
      {
        "type": "match_following",
        "questionText": "Match Rotation counts!",
        "pairs": [
          {
            "key": "Index of Min",
            "value": "Rotation Count"
          },
          {
            "key": "Sorted Count",
            "value": "0 (Min at index 0)"
          },
          {
            "key": "Max Rotation",
            "value": "N - 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Rotation count is the ___ of the pivot.",
        "codeSnippet": "Value = ___ ;",
        "correctAnswer": "index"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Find the valley, find the spin! O(log N). 🦜\""
      },
      {
        "type": "code_fill_in",
        "questionText": "Return index.",
        "codeSnippet": "return ___ ; // index of min",
        "correctAnswer": "ans"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Spin identified! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it logarithmic?\"",
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
    "order": 52,
    "title": "Ternary Search",
    "desc": "Searching in a unimodal function.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Three-Way Split! Ternary search divides the range into THREE equal parts using two midpoints (`m1` and `m2`). Perfect for finding the maximum of a unimodal forest! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Logic: If `f(m1) < f(m2)`, the peak is definitely not in the first third. If `f(m1) > f(m2)`, it's not in the last third! 🦜\"",
        "codeSnippet": "m1 = l + (r-l)/3;\nm2 = r - (r-l)/3;\nif(f(m1) < f(m2)) l = m1 + 1;\nelse r = m2 - 1;"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many parts does Ternary Search divide the array into?",
        "options": [
          "3",
          "2",
          "4"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Match Ternary search!",
        "pairs": [
          {
            "key": "Midpoints",
            "value": "m1 and m2"
          },
          {
            "key": "Complexity",
            "value": "O(log3 N)"
          },
          {
            "key": "Use case",
            "value": "Unimodal functions"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Ternary search is often used to find the ___ of a function.",
        "codeSnippet": "Target = ___ ;",
        "correctAnswer": "maximum"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"While O(log3 N) sounds faster, it actually does more comparisons per step than binary search. Use it only when the slope changes! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Ternary Search find a target in a sorted array?",
        "options": [
          "Yes, but Binary Search is usually better",
          "No",
          "0"
        ],
        "correctAnswer": "Yes, but Binary Search is usually better"
      },
      {
        "type": "code_fill_in",
        "questionText": "Divide factor.",
        "codeSnippet": "m1 = l + (r - l) / ___ ;",
        "correctAnswer": "3"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Triple precision! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it 3-way?\"",
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
    "order": 53,
    "title": "Median Elite",
    "desc": "Advanced Binary Search: K-th element of two sorted arrays.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The K-th Master! Find the K-th smallest bird across two sorted forests without ever merging them. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "This problem is a general version of which other problem?",
        "options": [
          "Median of Two Sorted Arrays",
          "Quick Sort",
          "Binary Search"
        ],
        "correctAnswer": "Median of Two Sorted Arrays"
      },
      {
        "type": "match_following",
        "questionText": "Match K-th logic!",
        "pairs": [
          {
            "key": "Search Array",
            "value": "Smaller of the two"
          },
          {
            "key": "Partition sum",
            "value": "K"
          },
          {
            "key": "Range",
            "value": "Max(0, K-N2) to Min(K, N1)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Binary Search on K-th element takes O(___) time.",
        "codeSnippet": "Complexity = ___ ;",
        "correctAnswer": "log(min(N, M))"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Careful with the range! If K > N2, we MUST take at least `K-N2` birds from the first array. 🦜\""
      },
      {
        "type": "code_fill_in",
        "questionText": "Lower bound constraint.",
        "codeSnippet": "low = max(0, k ___ n2);",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Precision K-th! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the cut clean?\"",
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
    "order": 54,
    "title": "The Chaos Metric",
    "desc": "Introduction to Inversion Count.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Measure of Chaos! An inversion is a pair of birds (A, B) such that A appears before B, but A is LARGER than B. It measures how far the forest is from being sorted! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In [2, 4, 1, 3, 5], how many inversions?",
        "options": [
          "3 ( (2,1), (4,1), (4,3) )",
          "5",
          "0"
        ],
        "correctAnswer": "3 ( (2,1), (4,1), (4,3) )"
      },
      {
        "type": "match_following",
        "questionText": "Match Inversion states!",
        "pairs": [
          {
            "key": "Sorted Count",
            "value": "0"
          },
          {
            "key": "Reverse Sorted",
            "value": "N*(N-1)/2"
          },
          {
            "key": "Goal",
            "value": "Count pairs (i < j) where A[i] > A[j]"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Inversion count is related to the number of ___ needed in Bubble Sort.",
        "codeSnippet": "Metric = ___ ;",
        "correctAnswer": "swaps"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Elite scouts count chaos in O(N log N) time using a modified Merge Sort! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of brute-force Inversion Count?",
        "options": [
          "O(N^2)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Chaos pair condition.",
        "codeSnippet": "if (i < j && arr[i] ___ arr[j]) inversions++;",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Chaos mapped! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is a sorted array 0?\"",
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
    "order": 55,
    "title": "Divide and Count",
    "desc": "Inversion Count implementation using Merge Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Merge Logic! During the Merge step, if a bird from the RIGHT array is smaller than a bird from the LEFT, then it is smaller than ALL remaining birds in the left array! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Formula: `inversions += (mid - i + 1)`. This counts all pairs in one wing-beat! 🦜\"",
        "codeSnippet": "if(L[i] <= R[j]) arr[k++] = L[i++];\nelse { arr[k++] = R[j++]; inversions += (mid - i + 1); }"
      },
      {
        "type": "multiple_choice",
        "questionText": "When do we add to the inversion count in Merge Sort?",
        "options": [
          "When we pick from the right array",
          "When we pick from the left array",
          "When splitting"
        ],
        "correctAnswer": "When we pick from the right array"
      },
      {
        "type": "match_following",
        "questionText": "Match Inversion steps!",
        "pairs": [
          {
            "key": "Left Inversions",
            "value": "Recursive call 1"
          },
          {
            "key": "Right Inversions",
            "value": "Recursive call 2"
          },
          {
            "key": "Split Inversions",
            "value": "Cross-array pairs (counted in Merge)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Efficient Inversion count complexity.",
        "codeSnippet": "Speed = O( ___ );",
        "correctAnswer": "n log n"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This is the fastest way to measure forest disorder! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Base case inversion count for size 1 array?",
        "options": [
          "0",
          "1",
          "N"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Add count.",
        "codeSnippet": "invCount += (mid ___ i + 1);",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Chaos solved! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it O(N log N)?\"",
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
    "order": 56,
    "title": "The Minimum Write",
    "desc": "Introduction to Cycle Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Respect the Nest! Cycle Sort is unique because it makes the MINIMUM possible number of writes to the array. Perfect if changing a bird's nest is very expensive! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Logic: Find the correct position for each bird by counting how many birds are smaller than it. Then, cycle the bird into its spot and continue! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which sort is best for minimizing memory writes?",
        "options": [
          "Cycle Sort",
          "Quick Sort",
          "Bubble Sort"
        ],
        "correctAnswer": "Cycle Sort"
      },
      {
        "type": "match_following",
        "questionText": "Match Cycle logic!",
        "pairs": [
          {
            "key": "Writes",
            "value": "Minimum (O(N))"
          },
          {
            "key": "Comparisons",
            "value": "O(N^2)"
          },
          {
            "key": "In-place",
            "value": "Yes"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Cycle sort identifies separate ___ in the array.",
        "codeSnippet": "Structure = ___ ;",
        "correctAnswer": "cycles"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use this when you're sorting on Flash memory or expensive hardware where every write counts! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity of Cycle Sort?",
        "options": [
          "O(N^2)",
          "O(N)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N^2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Find pos.",
        "codeSnippet": "for(int j=i+1; j<n; j++) if(arr[j] < item) ___ ++;",
        "correctAnswer": "pos"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Cycle complete! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are writes minimal?\"",
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
    "order": 57,
    "title": "Shell Flight",
    "desc": "Introduction to Shell Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Bridging the Gap! Shell Sort is an optimized Insertion Sort. It compares birds far apart initially, then gradually reduces the 'gap' between comparisons! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Gap: Using a gap of N/2, then N/4... until gap=1. It moves distant birds quickly to their general area! 🦜\"",
        "codeSnippet": "for(int gap = n/2; gap > 0; gap /= 2) {\n  for(int i = gap; i < n; i++) {\n    int temp = arr[i]; int j;\n    for(j=i; j >= gap && arr[j-gap] > temp; j -= gap) arr[j] = arr[j-gap];\n    arr[j] = temp;\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Shell Sort is an optimization of which algorithm?",
        "options": [
          "Insertion Sort",
          "Selection Sort",
          "Quick Sort"
        ],
        "correctAnswer": "Insertion Sort"
      },
      {
        "type": "match_following",
        "questionText": "Match Shell logic!",
        "pairs": [
          {
            "key": "Initial Gap",
            "value": "Large (move fast)"
          },
          {
            "key": "Final Gap",
            "value": "1 (Standard Insertion)"
          },
          {
            "key": "Stability",
            "value": "Unstable"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Shell sort improves on the O(N^2) complexity of ___.",
        "codeSnippet": "SourceAlgorithm = ___ ;",
        "correctAnswer": "insertion"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity depends on the gap sequence, often around O(N^1.5) or better. A fast, old-school flyer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Shell Sort stable?",
        "options": [
          "No (Gaps skip birds)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (Gaps skip birds)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Reduce gap.",
        "codeSnippet": "gap ___= 2;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Shell speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it faster than O(N^2)?\"",
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
    "order": 58,
    "title": "Parallel Dreams",
    "desc": "Introduction to Bitonic Sort.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Synchronized Wings! Bitonic Sort is a parallel sorting algorithm. It creates a 'Bitonic sequence' (increases then decreases) and then resolves it into a fully sorted forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Bitonic Sort is designed for use on ___.",
        "options": [
          "Parallel processors / GPUs",
          "Single core CPUs",
          "Pen and Paper"
        ],
        "correctAnswer": "Parallel processors / GPUs"
      },
      {
        "type": "match_following",
        "questionText": "Match Bitonic logic!",
        "pairs": [
          {
            "key": "Bitonic Sequence",
            "value": "Up-Down profile"
          },
          {
            "key": "Complexity",
            "value": "O(log^2 N) on parallel"
          },
          {
            "key": "Input Size",
            "value": "Power of 2"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Input size for Bitonic sort must be a ___ of 2.",
        "codeSnippet": "Constraint = ___ ;",
        "correctAnswer": "power"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity on a single core is O(N log^2 N). Slower than Quick Sort, but a beast on a GPU! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Bitonic sort be used for any size N?",
        "options": [
          "Requires padding to power of 2",
          "No",
          "0"
        ],
        "correctAnswer": "Requires padding to power of 2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Swap logic.",
        "codeSnippet": "if (dir == (arr[i] ___ arr[j])) swap(arr[i], arr[j]);",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Parallel flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is it for GPUs?\"",
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
    "order": 59,
    "title": "Massive Forests",
    "desc": "Introduction to External Sorting.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Global Migration! What if the birds are so numerous they don't fit in your nest (RAM)? We use External Sorting! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Method: 1. Sort small 'runs' in RAM. 2. Write them to Disk. 3. Merge the sorted runs using Multi-way Merge! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "External sorting is used when data is too large for ___.",
        "options": [
          "RAM (Main Memory)",
          "The Disk",
          "The Cloud"
        ],
        "correctAnswer": "RAM (Main Memory)"
      },
      {
        "type": "match_following",
        "questionText": "Match External steps!",
        "pairs": [
          {
            "key": "Sort Run",
            "value": "In-memory sorting"
          },
          {
            "key": "Merge Runs",
            "value": "Multi-way merging on disk"
          },
          {
            "key": "Buffer",
            "value": "Chunk of data in RAM"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The merge step of External sorting uses a ___ to speed up multi-way merge.",
        "codeSnippet": "DataStructure = ___ ;",
        "correctAnswer": "min-heap"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N log N) but limited by Disk I/O speed. The migration continues! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm is the foundation for External Sort?",
        "options": [
          "Merge Sort",
          "Quick Sort",
          "Selection Sort"
        ],
        "correctAnswer": "Merge Sort"
      },
      {
        "type": "code_fill_in",
        "questionText": "Merge logic choice.",
        "codeSnippet": "Use ___ -way Merge for external sorting.",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Massive migration! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Does it handle Tera-birds?\"",
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
    "order": 60,
    "title": "Grand Search Master",
    "desc": "Searching & Sorting Curriculum Graduate.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"LEGENDARY! You have completed the 60-unit march through Searching and Sorting. From the simple Linear hunt to the massive External migration! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"You are now a Grand Scout. You can organize any forest and find any bird, no matter how hidden or rotated! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Fastest sorting algorithm for integers with a small range?",
        "options": [
          "Counting Sort",
          "Quick Sort",
          "Merge Sort"
        ],
        "correctAnswer": "Counting Sort"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which search finds the MAX of a parabolic hill?",
        "options": [
          "Ternary Search",
          "Binary Search",
          "Linear Search"
        ],
        "correctAnswer": "Ternary Search"
      },
      {
        "type": "match_following",
        "questionText": "Final Graduation Check!",
        "pairs": [
          {
            "key": "Radix",
            "value": "Digit by Digit"
          },
          {
            "key": "Inversion",
            "value": "Chaos metric"
          },
          {
            "key": "Median 2D",
            "value": "Grid Search"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Your feathers are golden. The mission path is complete! 🦜\""
      }
    ]
  }
];

module.exports = stage3;
