const stage3 = [
  {
    "order": 41,
    "title": "The Sliding Window Peak",
    "desc": "Finding the maximum element in every sliding window of size K.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Panoramic View! In a stream of birds [1, 3, -1, -3, 5, 3, 6, 7] and window K=3, what is the loudest bird in every 3-bird snapshot? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a DEQUE of indices! Maintain it in decreasing order. When a new bird arrives, pop smaller birds from the back. When a bird falls out of the window, pop from the front! 🦜\"",
        "codeSnippet": "while(!dq.empty() && nums[dq.back()] <= nums[i]) dq.pop_back();\ndq.push_back(i);\nif(dq.front() == i - k) dq.pop_front();\nif(i >= k - 1) res.push_back(nums[dq.front()]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Sliding Window Maximum for N elements?",
        "options": [
          "O(N)",
          "O(N * K)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Deque rules!",
        "pairs": [
          {
            "key": "Pop Back",
            "value": "Remove smaller"
          },
          {
            "key": "Pop Front",
            "value": "Remove out-of-bounds"
          },
          {
            "key": "Front",
            "value": "Current Max"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the front bird to fall out of window.",
        "codeSnippet": "if (dq.front() == i ___ k) dq.pop_front();",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time because each bird enters and leaves the deque exactly once. The deque keeps only the potential kings of future windows! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for [1, 3, 1, 2, 0, 5], K=3?",
        "options": [
          "[3, 3, 2, 5]",
          "[3, 3, 5, 5]",
          "[1, 3, 5]"
        ],
        "correctAnswer": "[3, 3, 2, 5]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Store the current window maximum.",
        "codeSnippet": "res.push_back(nums[dq.___()]);",
        "correctAnswer": "front"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Always watching the strongest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the window peak?\"",
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
    "order": 42,
    "title": "The Celebrity Trap",
    "desc": "Finding the celebrity who knows no one but everyone knows them.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Social Hierarchy! A celebrity knows NO other birds. But EVERY other bird knows the celebrity. Can you find them in a party of N? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Stack! Push everyone. Pop two (A, B). If A knows B, A is not a celebrity (Pop A). Else B is not a celebrity (Pop B). Push the potential until one bird remains! 🦜\"",
        "codeSnippet": "while(s.size() > 1) {\n  int a = s.pop(); int b = s.pop();\n  if(knows(a, b)) s.push(b);\n  else s.push(a);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity to find the celebrity?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Celebrity Logic!",
        "pairs": [
          {
            "key": "A knows B",
            "value": "A cannot be celebrity"
          },
          {
            "key": "A doesn't know B",
            "value": "B cannot be celebrity"
          },
          {
            "key": "Verification",
            "value": "Final check of candidate"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for A to potentially be the celebrity.",
        "codeSnippet": "if (!knows(a, b)) s.___ (a);",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't forget the final check: the candidate must NOT know anyone, and everyone else MUST know the candidate! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If no bird satisfies the conditions, the result is?",
        "options": [
          "-1",
          "Random bird",
          "0"
        ],
        "correctAnswer": "-1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Verify the candidate knows no one.",
        "codeSnippet": "for(int i=0; i<n; i++) if(i!=c && knows(c, i)) return ___;",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Eyes on the crown! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a celebrity?\"",
        "options": [
          "The world knows me!",
          "No.",
          "0"
        ],
        "correctAnswer": "The world knows me!"
      }
    ]
  },
  {
    "order": 43,
    "title": "Nested List Iterator",
    "desc": "Flattening an iterator of nested lists like [[1,1],2,[1,1]].",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Nested Eggs! You have a list that can contain integers OR more lists. You need to iterate through all integers in order. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Stack of the lists! When `hasNext()` is called, look at the top item. If it's a list, pop it and push its contents BACKWARD into the stack! 🦜\"",
        "codeSnippet": "while(!s.empty()) {\n  NestedInteger ni = s.top();\n  if(ni.isInteger()) return true;\n  s.pop();\n  for(int i=ni.getList().size()-1; i>=0; i--) s.push(ni.getList()[i]);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why push elements backward into the stack?",
        "options": [
          "To maintain FIFO order in LIFO",
          "To save space",
          "Pico rule"
        ],
        "correctAnswer": "To maintain FIFO order in LIFO"
      },
      {
        "type": "match_following",
        "questionText": "Match Iterator methods!",
        "pairs": [
          {
            "key": "hasNext()",
            "value": "Flatten stack top"
          },
          {
            "key": "next()",
            "value": "Return top integer"
          },
          {
            "key": "isInteger()",
            "value": "Type check"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if top is ready to be returned.",
        "codeSnippet": "if (s.top().___()) return true;",
        "correctAnswer": "isInteger"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(1) average for next(). The stack handles the depth for you, like a bird descending into nested nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if a sub-list is empty?",
        "options": [
          "hasNext() ignores it and keeps popping",
          "Error",
          "Return NULL"
        ],
        "correctAnswer": "hasNext() ignores it and keeps popping"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push sub-elements in reverse.",
        "codeSnippet": "for (int i = list.size() - 1; i ___ 0; i--)",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Depth before everything! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I flattened?\"",
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
    "title": "Smallest Subsequence",
    "desc": "Hard: Smallest lexicographical subsequence of distinct characters.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Distinct & Smallest! Given \"bcabc\", finding the lexicographically smallest subsequence that contains every distinct character exactly once. \"abc\"! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Monotonic Stack + Counts + Presence! If current char `c` is smaller than stack.top AND stack.top appears again later, pop stack! 🦜\"",
        "codeSnippet": "while(!s.empty() && s.top() > c && count[s.top()] > 0) {\n  visited[s.pop()] = false;\n}\ns.push(c); visited[c] = true;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Condition to pop `stack.top`?",
        "options": [
          "top > current && top occurs again later",
          "top < current",
          "K > 0"
        ],
        "correctAnswer": "top > current && top occurs again later"
      },
      {
        "type": "match_following",
        "questionText": "Match Subsequence logic!",
        "pairs": [
          {
            "key": "Count Map",
            "value": "Availability Check"
          },
          {
            "key": "Visited Set",
            "value": "Uniqueness Check"
          },
          {
            "key": "Stack",
            "value": "The Result"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if the bird is already in our result stack.",
        "codeSnippet": "if (___[c]) continue;",
        "correctAnswer": "visited"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time and space. This is a very popular elite challenge. It tests greedy logic with monotonic stack! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of \"cbacdcbc\"?",
        "options": [
          "\"acdb\"",
          "\"abcd\"",
          "\"badc\""
        ],
        "correctAnswer": "\"acdb\""
      },
      {
        "type": "code_fill_in",
        "questionText": "Decrement char frequency.",
        "codeSnippet": "count[c]___;",
        "correctAnswer": "--"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Elegant selection! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I distinct?\"",
        "options": [
          "One of a kind!",
          "No.",
          "0"
        ],
        "correctAnswer": "One of a kind!"
      }
    ]
  },
  {
    "order": 45,
    "title": "Rainwater II (PQ-Stack)",
    "desc": "Introduction to 2D water trapping logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"3D Collector! What if the buildings are in a grid? Water is trapped in bowls formed by city walls! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Min-Priority Queue for the border birds. Pick the shortest wall, check its neighbors. If neighbor < wall, it traps water! 🦜\"",
        "codeSnippet": "pq.push({x, y, h});\nwhile(!pq.empty()) {\n  curr = pq.pop();\n  for(neighbor : curr) {\n    ans += max(0, curr.h - neighbor.h);\n    pq.push({nx, ny, max(curr.h, neighbor.h)});\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of 3D Rain Water Trapping?",
        "options": [
          "O(R * C * log(R+C))",
          "O(R * C)",
          "O(1)"
        ],
        "correctAnswer": "O(R * C * log(R+C))"
      },
      {
        "type": "match_following",
        "questionText": "Match 2D Rain steps!",
        "pairs": [
          {
            "key": "Boundary",
            "value": "Initial PQ birds"
          },
          {
            "key": "Min-PQ",
            "value": "Flood-fill start"
          },
          {
            "key": "Max(curr, neigh)",
            "value": "Limit for neighbor"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Trapped water amount for neighbor `nh`.",
        "codeSnippet": "ans += max(0, currHeight ___ nh);",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This combines PQ and BFS logic. Elite birds see the whole landscape from above! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a Min-Heap?",
        "options": [
          "Water flows from the lowest boundary point",
          "Water flows to the highest",
          "Pico likes heaps"
        ],
        "correctAnswer": "Water flows from the lowest boundary point"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push higher wall to heap.",
        "codeSnippet": "pq.push({nx, ny, ___(h, neighbor.h)});",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"City of reservoirs! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I submerged?\"",
        "options": [
          "Deep in logic!",
          "No.",
          "0"
        ],
        "correctAnswer": "Deep in logic!"
      }
    ]
  },
  {
    "order": 46,
    "title": "Longest Valid Parens (O(N))",
    "desc": "Finding the length of the longest valid parentheses substring.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Longest Harmony! In \")()())\", the longest valid part is \"()()\", length 4. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Stack for INDICES! Push -1 as a base. When you see `(`, push its index. When `)`, pop. If stack is empty, push current index. Else, length is `current - stack.top`! 🦜\"",
        "codeSnippet": "if(s[i] == '(') st.push(i);\nelse {\n  st.pop();\n  if(st.empty()) st.push(i);\n  else maxLength = max(maxLength, i - st.top());\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding Longest Valid Parentheses?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Length Logic!",
        "pairs": [
          {
            "key": "-1",
            "value": "The sentinel"
          },
          {
            "key": "( Index",
            "value": "Potential start"
          },
          {
            "key": "i - top",
            "value": "Current length"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initial sentinel for calculating length.",
        "codeSnippet": "st.push(___);",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time and space. The stack remembers exactly where the last invalid bird was, so we can measure the distance to the current one! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for \"()(())\"?",
        "options": [
          "6",
          "4",
          "2"
        ],
        "correctAnswer": "6"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pop for closing bracket.",
        "codeSnippet": "st.___();",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Harmonic length! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the longest?\"",
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
    "order": 47,
    "title": "Design a Basic Calculator",
    "desc": "Evaluating expressions with +, -, (, and ).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Math God! Handle \"1 + (4 + 5 + 2) - 3\". Plus/Minus and Parentheses! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One stack + Sign + CurrentValue. When you see `(`, push current result and sign. When `)`, calculate result and pop/add! 🦜\"",
        "codeSnippet": "if(c == '(') { st.push(res); st.push(sign); res = 0; sign = 1; }\nelse if(c == ')') { res = res * st.pop() + st.pop(); }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we push the sign before the result in the stack?",
        "options": [
          "To apply to the whole group result",
          "To save space",
          "Pico rule"
        ],
        "correctAnswer": "To apply to the whole group result"
      },
      {
        "type": "match_following",
        "questionText": "Match Calculator pieces!",
        "pairs": [
          {
            "key": "Result",
            "value": "Running total"
          },
          {
            "key": "Sign",
            "value": "+1 or -1"
          },
          {
            "key": "Stack",
            "value": "Parentheses context"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Apply sign to group result after `)`.",
        "codeSnippet": "res = res * st.pop() + ___;",
        "correctAnswer": "st.pop()"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time. The stack effectively pauses the current math and starts a sub-calculation in the nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of \" 2-1 + 2 \"?",
        "options": [
          "3",
          "1",
          "0"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Toggle sign for subtraction.",
        "codeSnippet": "if (c == '-') sign = ___;",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Master math! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"What is my result?\"",
        "options": [
          "Elite precision!",
          "No.",
          "0"
        ],
        "correctAnswer": "Elite precision!"
      }
    ]
  },
  {
    "order": 48,
    "title": "Decode String II",
    "desc": "Advanced: Decoding nested strings with complex multipliers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Elite Coding! \"2[m3[p]]\" expands to \"mpppmppp\". Depth is everything! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The dual-stack method from Unit 35 scales infinitely. Just keep track of the multipliers and the previous substrings. 🦜\"",
        "codeSnippet": "while (isdigit(s[i])) num = num * 10 + (s[i++] - '0');\nif (s[i] == '[') { numStack.push(num); strStack.push(res); res = \"\"; num = 0; }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for \"100[a]\"?",
        "options": [
          "O(Total_Length)",
          "O(100)",
          "O(N)"
        ],
        "correctAnswer": "O(Total_Length)"
      },
      {
        "type": "match_following",
        "questionText": "Match Advanced Decode!",
        "pairs": [
          {
            "key": "StringStack",
            "value": "Ancestor strings"
          },
          {
            "key": "NumStack",
            "value": "Repeat factors"
          },
          {
            "key": "StringBuilder",
            "value": "Result efficiency"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Apply multi-digit multiplier.",
        "codeSnippet": "num = num * 10 + (c - ___);",
        "correctAnswer": "'0'"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If the result is massive, use a StringBuilder in Java or append all to a list in Python to avoid O(N^2) string copying! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Decoded \"2[a]2[b]\"?",
        "options": [
          "\"aabb\"",
          "\"abab\"",
          "\"ab\""
        ],
        "correctAnswer": "\"aabb\""
      },
      {
        "type": "code_fill_in",
        "questionText": "Multiply inner string.",
        "codeSnippet": "while (k-- > 0) temp.___ (curr);",
        "correctAnswer": "append"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Expansion total! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I expand?\"",
        "options": [
          "Growth hacking!",
          "No.",
          "0"
        ],
        "correctAnswer": "Growth hacking!"
      }
    ]
  },
  {
    "order": 49,
    "title": "Increment Stack O(1)",
    "desc": "Designing a stack with an increment(k, val) operation in O(1).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fast Increases! Increment the bottom K elements by `val`, all in constant time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Lazy Evaluation! Store the increments in a separate array/stack. When you POP, pass the increment down to the next bird! 🦜\"",
        "codeSnippet": "void push(int x) { s.push(x); inc.push(0); }\nint pop() {\n  int i = s.size()-1;\n  if(i > 0) inc[i-1] += inc[i];\n  return s.pop() + inc[i];\n}\nvoid increment(int k, int v) { inc[min(k-1, n-1)] += v; }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of increment(k, val)?",
        "options": [
          "O(1)",
          "O(K)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Increment logic!",
        "pairs": [
          {
            "key": "Lazy Add",
            "value": "Store at index K-1"
          },
          {
            "key": "Pop",
            "value": "Propagate Down"
          },
          {
            "key": "Wait",
            "value": "Evaluation on exit"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Propagate increment to the bird below on pop.",
        "codeSnippet": "if (i > 0) add[i-1] ___ add[i];",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a God-mode optimization. By not actually updating all K birds until they need to fly (pop), you save massive time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Storage needed for the lazy array?",
        "options": [
          "O(N)",
          "O(1)",
          "O(K)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Target the K-th bird for increment.",
        "codeSnippet": "inc[min(k, size) - 1] += ___ ;",
        "correctAnswer": "val"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Patient power! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I lazy?\"",
        "options": [
          "Optimized lazy!",
          "No.",
          "0"
        ],
        "correctAnswer": "Optimized lazy!"
      }
    ]
  },
  {
    "order": 50,
    "title": "Elite Master Checkpoint",
    "desc": "Reflecting on the God-Mode Stage.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"ELITE STAGE HALFWAY! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sliding Window Max, Celebrities, Nested Iterators, and O(1) Increments. Your linear logic is unstoppable! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Sliding Window Max complexity?",
        "options": [
          "O(N)",
          "O(N log K)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Celebrity search complexity?",
        "options": [
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Longest Valid Parens sentinel?",
        "options": [
          "-1",
          "0"
        ],
        "correctAnswer": "-1"
      },
      {
        "type": "multiple_choice",
        "questionText": "3D Rain Water heap?",
        "options": [
          "Min-Heap",
          "Max-Heap"
        ],
        "correctAnswer": "Min-Heap"
      },
      {
        "type": "multiple_choice",
        "questionText": "Increment stack lazy propagation?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Master Pivot Match!",
        "pairs": [
          {
            "key": "Monotonic",
            "value": "Mastered!"
          },
          {
            "key": "Lazy",
            "value": "Optimized!"
          },
          {
            "key": "Pico",
            "value": "Speechless!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Final 10 units of Stacks & Queues: XOR Stacks, Constrained Sums, and the Ultimate Graduation! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for the final stretch?\"",
        "options": [
          "BEYOND AND UP!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "BEYOND AND UP!"
      }
    ]
  },
  {
    "order": 51,
    "title": "Shortest Subarray Over K",
    "desc": "Shortest subarray with sum at least K (Deque O(N)).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Tiniest Range! Find the shortest slice of the flock whose total weight is at least K. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use Prefix Sums and a DEQUE! Keep indices in the deque such that prefix sums are in increasing order. When `P[i] - P[dq.front()] >= K`, you found a candidate! 🦜\"",
        "codeSnippet": "while(!dq.empty() && P[i] - P[dq.front()] >= k) {\n  ans = min(ans, i - dq.pop_front());\n}\nwhile(!dq.empty() && P[i] <= P[dq.back()]) dq.pop_back();\ndq.push_back(i);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for Shortest Subarray with Sum >= K?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Deque pruning!",
        "pairs": [
          {
            "key": "Front Pop",
            "value": "Check candidate length"
          },
          {
            "key": "Back Pop",
            "value": "Maintain Monotonicity"
          },
          {
            "key": "Prefix Sum",
            "value": "Linear range weight"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Constraint to update answer.",
        "codeSnippet": "if (p[i] - p[dq.front()] >= k) ans = min(ans, i - ___ );",
        "correctAnswer": "dq.pop_front()"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait! Why pop the back if `P[i] <= P[dq.back()]`? Because `P[i]` is a better (smaller) prefix sum and it appears LATER, so it's always a stronger start for future ranges! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why can't we use a simple sliding window here?",
        "options": [
          "Array might have negative numbers",
          "It’s too slow",
          "Pico rule"
        ],
        "correctAnswer": "Array might have negative numbers"
      },
      {
        "type": "code_fill_in",
        "questionText": "Maintain increasing order.",
        "codeSnippet": "while(!dq.empty() && p[i] ___ p[dq.back()]) dq.pop_back();",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Precision targeting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the shortest?\"",
        "options": [
          "Minimalist elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Minimalist elite!"
      }
    ]
  },
  {
    "order": 52,
    "title": "Constrained Sum",
    "desc": "Max subsequence sum where no two elements are > K distance apart.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Leaping Bird! Choose a subsequence with the largest sum, but you can never jump more than K nests at a time! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is DP with a Deque! `dp[i] = nums[i] + max(0, dp[dq.front()])`. Keep the deque monotonic decreasing to get the current max of the last K DP values! 🦜\"",
        "codeSnippet": "dp[i] = nums[i] + max(0, dq.empty() ? 0 : dp[dq.front()]);\nwhile(!dq.empty() && dp[i] >= dp[dq.back()]) dq.pop_back();\nif(dq.front() == i - k) dq.pop_front();"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Constrained Subsequence Sum?",
        "options": [
          "O(N)",
          "O(N * K)",
          "O(N log K)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match DP pieces!",
        "pairs": [
          {
            "key": "dp[i]",
            "value": "Best sum ending at i"
          },
          {
            "key": "dq.front()",
            "value": "Max of last K results"
          },
          {
            "key": "max(0, ...)",
            "value": "Don't take negatives"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Remove indices that are out of the jump range K.",
        "codeSnippet": "if (dq.front() == i ___ k) dq.pop_front();",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). The deque effectively slides the max value forward as you fly through the nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity with Deque optimization?",
        "options": [
          "O(N)",
          "O(NK)",
          "O(NlogK)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Add current max to current bird.",
        "codeSnippet": "res = nums[i] + ___(0, dq.empty() ? 0 : dp[dq.front()]);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Elite leaps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I jump far?\"",
        "options": [
          "K distance mastery!",
          "No.",
          "0"
        ],
        "correctAnswer": "K distance mastery!"
      }
    ]
  },
  {
    "order": 3,
    "title": "The Super-Stack (XOR)",
    "desc": "Implementing a Stack using an XOR Linked List (Concept).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Phantom Nest! Can you build a stack that uses 50% less pointer space? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Just like the XOR list (Unit 51 of LL), a stack only needs to know the XOR of `prev ^ next`. Since stack only moves UP and DOWN, it's easy! 🦜\"",
        "codeSnippet": "st->npx = prev ^ NULL;\n// on pop\nprev = curr ^ next;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is XOR stack easier than a full XOR list?",
        "options": [
          "Access is only at one end",
          "Less memory",
          "Pico likes bits"
        ],
        "correctAnswer": "Access is only at one end"
      },
      {
        "type": "match_following",
        "questionText": "Match Stack Bits!",
        "pairs": [
          {
            "key": "Top",
            "value": "The Entry"
          },
          {
            "key": "npx",
            "value": "prev ^ next"
          },
          {
            "key": "Pop",
            "value": "curr ^ next = prev"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate previous pointer address.",
        "codeSnippet": "prev = curr ^ ___;",
        "correctAnswer": "next"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In a stack, one side is always NULL at the top, simplifying the math! O(1) space per node for both directions. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is XOR stack faster than standard LL stack?",
        "options": [
          "No (Same O(1), but math overhead)",
          "Yes",
          "Pico rule"
        ],
        "correctAnswer": "No (Same O(1), but math overhead)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update npx on push.",
        "codeSnippet": "newNode->npx = ___ ^ nextNode;",
        "correctAnswer": "prevNode"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Encoded height! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you see my bits?\"",
        "options": [
          "Stealth elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Stealth elite!"
      }
    ]
  },
  {
    "order": 4,
    "title": "The 132 Pattern",
    "desc": "Finding if a subsequence i < j < k exists s.t. nums[i] < nums[k] < nums[j].",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Zig-Zag Trio! Find three birds in the line such that the first is smallest, the second is biggest, and the third is in the middle! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Monotonic Stack from RIGHT to LEFT! Keep track of the second largest bird (nums[k]). If you see a bird smaller than it, you found a 132 pattern! 🦜\"",
        "codeSnippet": "for(int i=n-1; i>=0; i--) {\n  if(nums[i] < third) return true;\n  while(!s.empty() && nums[i] > s.top()) third = s.pop();\n  s.push(nums[i]);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of 132 Pattern search?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match 132 Roles!",
        "pairs": [
          {
            "key": "nums[i]",
            "value": "The small start"
          },
          {
            "key": "nums[j]",
            "value": "The peak (in stack)"
          },
          {
            "key": "nums[k]",
            "value": "The third (popped)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Satisfied condition for the 1-3-2 hunt.",
        "codeSnippet": "if (nums[i] ___ third) return true;",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait! Scanning backward allows the stack to find the potential 3-2 pair efficiently while we hunt for 1. Complexity: O(N). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for [3, 1, 4, 2]?",
        "options": [
          "True (1, 4, 2)",
          "False",
          "Pico falls"
        ],
        "correctAnswer": "True (1, 4, 2)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update the third candidate.",
        "codeSnippet": "third = st.___(); st.pop();",
        "correctAnswer": "top"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mountain and Valley! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I find the curve?\"",
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
    "title": "Car Fleet",
    "desc": "Calculating fleet formation on a 1D road.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Traffic Jam! Birds at different positions with different speeds. If a fast bird catches a slow one, they form a fleet 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sort by position (closest to target first). Calculate time to arrival: `(target - pos) / speed`. Use a stack! If current bird takes LESS time than top, it joins the fleet (no extra fleet). 🦜\"",
        "codeSnippet": "sort(cars);\nfor(car c : cars) {\n  double time = (target - c.pos) / c.speed;\n  if(s.empty() || time > s.top()) s.push(time);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Number of car fleets = ?",
        "options": [
          "Size of the final stack",
          "Number of cars",
          "Target / Speed"
        ],
        "correctAnswer": "Size of the final stack"
      },
      {
        "type": "match_following",
        "questionText": "Match Fleet Variables!",
        "pairs": [
          {
            "key": "Time",
            "value": "(Target - Pos) / Speed"
          },
          {
            "key": "Stack",
            "value": "Fleet Lead times"
          },
          {
            "key": "Sort",
            "value": "Process by position"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formation of new fleet if current takes more time.",
        "codeSnippet": "if (s.empty() || currentTime ___ s.top()) s.push(currentTime);",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N log N) for sorting. The stack then processes them in O(N). Catching up means joining, not passing! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If target=10, car at 8 with speed 1 joins car at 5 with speed 1?",
        "options": [
          "No (Distance remains same)",
          "Yes",
          "Wait..."
        ],
        "correctAnswer": "No (Distance remains same)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Calculate time.",
        "codeSnippet": "double t = (double)(target - pos) / ___;",
        "correctAnswer": "speed"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flying together! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in a fleet?\"",
        "options": [
          "Part of the group!",
          "No.",
          "0"
        ],
        "correctAnswer": "Part of the group!"
      }
    ]
  },
  {
    "order": 56,
    "title": "Shortest Unsorted Subarray",
    "desc": "Finding the range [L, R] that must be sorted to sort the whole list.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Disarranged Flock! What is the smallest segment of birds that is out of order? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use two monotonic stacks! First pass: find the leftmost bird that was popped by someone smaller. Second pass: find the rightmost bird that was popped by someone bigger! 🦜\"",
        "codeSnippet": "for(int i=0; i<n; i++) {\n  while(!s.empty() && nums[s.top()] > nums[i]) l = min(l, s.pop());\n  s.push(i);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time Complexity for finding shortest unsorted segment?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Sort Segments!",
        "pairs": [
          {
            "key": "Left Bound",
            "value": "Minimum popped index"
          },
          {
            "key": "Right Bound",
            "value": "Maximum popped index"
          },
          {
            "key": "Result",
            "value": "Right - Left + 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update the left-most unsorted boundary.",
        "codeSnippet": "left = min(left, st.___());",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time and space. The stacks remember precisely where the \"sortedness\" was violated! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for [1, 2, 3, 4]?",
        "options": [
          "0 (Already sorted)",
          "[0, 3]",
          "[1, 2]"
        ],
        "correctAnswer": "0 (Already sorted)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push current bird.",
        "codeSnippet": "st.___ (i);",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Order in progress! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the segment small?\"",
        "options": [
          "Minimalist elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Minimalist elite!"
      }
    ]
  },
  {
    "order": 57,
    "title": "The Circular Deque Revisit",
    "desc": "Hard: Efficiently designing a thread-safe Deque (Concept).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Concurrent Nest! How to let multiple birds add/remove from the deque at the same time? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use Locks or Atomic Pointers! Ensure only one bird updates 'Front' or 'Rear' at any micro-second! 🦜\"",
        "codeSnippet": "lock();\nrear = (rear + 1) % size;\nunlock();"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is thread-safety harder for Deques than stacks?",
        "options": [
          "Two ends mean two points of contention",
          "More memory",
          "Pico fell off"
        ],
        "correctAnswer": "Two ends mean two points of contention"
      },
      {
        "type": "match_following",
        "questionText": "Match Concurrency terms!",
        "pairs": [
          {
            "key": "Lock",
            "value": "Exclusive access"
          },
          {
            "key": "Atomic",
            "value": "Uninterrupted move"
          },
          {
            "key": "Race Condition",
            "value": "Double update error"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Unlock the structure after update.",
        "codeSnippet": "___ mutex;",
        "correctAnswer": "unlock"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A circular array deque is great, but a Doubly Linked List with individual locks per node is the peak of elite concurrent design! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a standard C++ queue thread-safe?",
        "options": [
          "No",
          "Yes",
          "Usually"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Protect the count.",
        "codeSnippet": "___ (mtx); count++;",
        "correctAnswer": "lock"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Safe and secure flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I thread-safe?\"",
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
    "order": 8,
    "title": "Monotonic Queue Revisit",
    "desc": "Advanced: Finding the sum of subarray minimums.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Weight of All Segments! Sum up the minimum value of EVERY possible subarray. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Contribution logic! For every bird `nums[i]`, how many subarrays is it the minimum? `(i - LeftBound) * (RightBound - i)`. Use Monotonic Stacks to find bounds! 🦜\"",
        "codeSnippet": "long long ans = 0;\nfor(int i=0; i<n; i++) {\n  ans = (ans + (long long)nums[i] * (i - left[i]) * (right[i] - i));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding sum of all subarray minimums?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Subarray Min Logic!",
        "pairs": [
          {
            "key": "Left[i]",
            "value": "First smaller on left"
          },
          {
            "key": "Right[i]",
            "value": "First smaller on right"
          },
          {
            "key": "Contribution",
            "value": "Weight * L * R"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The fundamental contribution formula.",
        "codeSnippet": "total += val * (i - l) * (___ - i);",
        "correctAnswer": "r"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time and space. This is a God-mode math + stack combination. By counting the influence of each bird, you avoid O(N^2) loops! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If nums=[3, 1, 2], what is the contribution of 1?",
        "options": [
          "1 * 2 * 2 = 4",
          "1",
          "1 * 1 * 1"
        ],
        "correctAnswer": "1 * 2 * 2 = 4",
        "explanation": "[3,1], [1], [1,2], [3,1,2]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pop while stack top is larger.",
        "codeSnippet": "while(!st.empty() && arr[st.top()] ___ arr[i]) st.pop();",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The sum of the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I contributing?\"",
        "options": [
          "Every feather counts!",
          "No.",
          "0"
        ],
        "correctAnswer": "Every feather counts!"
      }
    ]
  },
  {
    "order": 59,
    "title": "The Master Review (Elite)",
    "desc": "Elite Stacks & Queues Review.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"THE ELITE FINALE! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sliding Windows, Constrained Sums, 132 Patterns, and Subarray Minimums. You have touched the ceiling of linear logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Sliding Window Max deque order?",
        "options": [
          "Decreasing",
          "Increasing"
        ],
        "correctAnswer": "Decreasing"
      },
      {
        "type": "multiple_choice",
        "questionText": "Celebrity search time?",
        "options": [
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "132 pattern stack scan?",
        "options": [
          "Right to Left",
          "Left to Right"
        ],
        "correctAnswer": "Right to Left"
      },
      {
        "type": "multiple_choice",
        "questionText": "Subarray minimum contribution formula?",
        "options": [
          "L * R",
          "L + R"
        ],
        "correctAnswer": "L * R"
      },
      {
        "type": "multiple_choice",
        "questionText": "XOR stack pointer space?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Master Final Match!",
        "pairs": [
          {
            "key": "Linear",
            "value": "Conquered!"
          },
          {
            "key": "Elite",
            "value": "Unlocked!"
          },
          {
            "key": "Pico",
            "value": "Amazed!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Final unit: The Stacks & Queues Graduation! You are a God of Linear Containers! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready to graduate?\"",
        "options": [
          "SQUAWK YES!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 60,
    "title": "Stacks & Queues Graduation",
    "desc": "The Subject Complete: God-Mode Master.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"GRADUATION DAY! You have completed all 60 units of the Stacks & Queues Academy. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"From basic Push/Pop to the complex Deque-DP of constrained sums. You have mastered the linear fortress! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Stack vs Queue?",
        "options": [
          "LIFO vs FIFO",
          "Both FIFO"
        ],
        "correctAnswer": "LIFO vs FIFO"
      },
      {
        "type": "multiple_choice",
        "questionText": "Monotonic Stack usage?",
        "options": [
          "Next Greater Element",
          "Sorted Sort"
        ],
        "correctAnswer": "Next Greater Element"
      },
      {
        "type": "multiple_choice",
        "questionText": "Max-Priority Queue top?",
        "options": [
          "Largest Element",
          "Smallest"
        ],
        "correctAnswer": "Largest Element"
      },
      {
        "type": "multiple_choice",
        "questionText": "Sliding Window Max complexity?",
        "options": [
          "O(N)",
          "O(NK)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Infix to Postfix algorithm?",
        "options": [
          "Shunting-Yard",
          "Floyd’s"
        ],
        "correctAnswer": "Shunting-Yard"
      },
      {
        "type": "multiple_choice",
        "questionText": "Trapping Rain Water stack condition?",
        "options": [
          "Current > Top",
          "Current < Top"
        ],
        "correctAnswer": "Current > Top"
      },
      {
        "type": "multiple_choice",
        "questionText": "XOR Stack benefit?",
        "options": [
          "Pointer space save",
          "Speed increase"
        ],
        "correctAnswer": "Pointer space save"
      },
      {
        "type": "match_following",
        "questionText": "Subject Mastery Match!",
        "pairs": [
          {
            "key": "Subject",
            "value": "Complete!"
          },
          {
            "key": "Linear",
            "value": "Mastered!"
          },
          {
            "key": "Next",
            "value": "TREES!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stacks and Queues are done. You have conquered the lines. Next, we enter the infinite branches of development: TREES! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready to climb the tree?\"",
        "options": [
          "SQUAWK YES!",
          "Fly high!",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  }
];

module.exports = stage3;