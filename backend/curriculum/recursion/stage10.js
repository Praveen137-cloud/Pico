const stage10 = [
  {
    "order": 91,
    "title": "Palindrome Partition",
    "desc": "Cutting strings into symmetrical slices.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deep Cuts! Partition a string into substrings such that EVERY substring is a palindrome. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Try every prefix. If it's a palindrome, recurse on the remaining string! 🦜\"",
        "codeSnippet": "void partition(s, path) {\n  if (s == \"\") res.push(path);\n  for (i = 1; i <= s.len; i++) {\n    if (isPalindrome(s.substr(0, i))) {\n      path.push(s.substr(0, i));\n      partition(s.substr(i), path);\n      path.pop(); // Backtrack!\n    }\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the goal of this backtracking?",
        "options": [
          "To find all ways to cut the string into palindromes",
          "To find the longest palindrome",
          "To reverse the string"
        ],
        "correctAnswer": "To find all ways to cut the string into palindromes"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "isPalindrome",
            "value": "Safety check"
          },
          {
            "key": "s.substr(i)",
            "value": "The remaining trail"
          },
          {
            "key": "path.pop()",
            "value": "Undo the cut"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check the prefix before diving deeper.",
        "codeSnippet": "if (___(prefix)) { solve(rest); }",
        "correctAnswer": "isPal"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity O(N * 2^N). The number of cuts grows fast, but memoizing the palindrome check helps! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Partitions for 'aab'?",
        "options": [
          "[['a','a','b'], ['aa','b']]",
          "[['aab']]",
          "[['a','ab']]"
        ],
        "correctAnswer": "[['a','a','b'], ['aa','b']]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case reached.",
        "codeSnippet": "if (s. ___ == 0) return true;",
        "correctAnswer": "length"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Symmetry in every slice! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is 'Pico' a palindrome partition?\"",
        "options": [
          "['P','i','c','o']",
          "No.",
          "0"
        ],
        "correctAnswer": "['P','i','c','o']"
      }
    ]
  },
  {
    "order": 92,
    "title": "Digit DP (Intro)",
    "desc": "Counting numbers with recursive properties.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bird's Eye Count! How many numbers between 1 and 10^18 have exactly three '7's? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Solving digit-by-digit recursively. Key states: index, count of '7's, and 'tight' constraint to stay under the limit. 🦜\"",
        "codeSnippet": "long solve(idx, count, tight) {\n  if (idx == s.len) return count == 3;\n  int limit = tight ? s[idx] : 9;\n  for (int d = 0; d <= limit; d++) {\n    res += solve(idx + 1, count + (d == 7), tight && (d == limit));\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does the 'tight' constraint do?",
        "options": [
          "Ensures we don't exceed the input number (R)",
          "Makes the code faster",
          "Checks for negative numbers"
        ],
        "correctAnswer": "Ensures we don't exceed the input number (R)"
      },
      {
        "type": "match_following",
        "questionText": "Match Digit DP States!",
        "pairs": [
          {
            "key": "idx",
            "value": "Current digit position"
          },
          {
            "key": "count",
            "value": "Target property tracker"
          },
          {
            "key": "tight",
            "value": "Boundary flag"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update tight flag for the next digit.",
        "codeSnippet": "newTight = tight ___ (d == limit);",
        "correctAnswer": "&&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Digit DP turns an astronomical range (10^18) into a tiny O(Number_of_Digits) problem! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Max depth for numbers up to 10^18?",
        "options": [
          "18 (or 19)",
          "10^18",
          "1"
        ],
        "correctAnswer": "18 (or 19)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case condition.",
        "codeSnippet": "if (idx ___ s.size()) return ...;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Count the stars in decimals! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a 7?\"",
        "options": [
          "You're a 10!",
          "No.",
          "0"
        ],
        "correctAnswer": "You're a 10!"
      }
    ]
  },
  {
    "order": 93,
    "title": "Recursive Seg-Tree",
    "desc": "Managing ranges with a recursive tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Range Power! How do you find the minimum in range [L, R] and UPDATE a value in O(log N)? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Build a tree where each node stores the result for a specific range. Recurse left and right to query or update! 🦜\"",
        "codeSnippet": "int query(node, start, end, L, R) {\n  if (L <= start && end <= R) return tree[node];\n  mid = (start + end) / 2;\n  return min(query(2*node, start, mid, L, R), \n             query(2*node+1, mid+1, end, L, R));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to rebuild/update a Segment Tree leaf?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Segment Parts!",
        "pairs": [
          {
            "key": "2 * node",
            "value": "Left Child"
          },
          {
            "key": "2 * node + 1",
            "value": "Right Child"
          },
          {
            "key": "mid",
            "value": "(start+end)/2"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate mid-point for range splitting.",
        "codeSnippet": "int mid = (s ___ e) / 2;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Segment trees are perfectly recursive. Every level halves the search space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Size of Segment Tree array for N elements?",
        "options": [
          "4 * N",
          "N",
          "N^2"
        ],
        "correctAnswer": "4 * N"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: range size is 1.",
        "codeSnippet": "if (start ___ end)",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dominate the ranges! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the segment?\"",
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
    "order": 94,
    "title": "Matrix Chain Mult",
    "desc": "Bracketing the best parenthesization.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Matrix Mastery! If you multiply A, B, and C, does (A*B)*C cost less than A*(B*C)? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Try every 'split point' K between I and J. Recurse to find the cost of left parts and right parts! 🦜\"",
        "codeSnippet": "int solve(i, j) {\n  if (i >= j) return 0;\n  for (k = i; k < j; k++) {\n    temp = solve(i, k) + solve(k+1, j) + (p[i-1]*p[k]*p[j]);\n    ans = min(ans, temp);\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does this recursion find?",
        "options": [
          "Minimum multiplication operations",
          "The matrix result",
          "The largest eigenvalue"
        ],
        "correctAnswer": "Minimum multiplication operations"
      },
      {
        "type": "match_following",
        "questionText": "Match the Costs!",
        "pairs": [
          {
            "key": "solve(i, k)",
            "value": "Left side cost"
          },
          {
            "key": "solve(k+1, j)",
            "value": "Right side cost"
          },
          {
            "key": "p[i-1]*p[k]*p[j]",
            "value": "Merge cost of A*B"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The check for an already calculated range.",
        "codeSnippet": "if (memo[i][j] ___ -1) return memo[i][j];",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a 2D DP problem solved recursively. Complexity O(N^3). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Base case for 1 matrix (i == j)?",
        "options": [
          "0 (No multiplications)",
          "1",
          "size"
        ],
        "correctAnswer": "0 (No multiplications)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Loop through possible splits.",
        "codeSnippet": "for (int k = i; k ___ j; k++)",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Calculate with precision! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a matrix?\"",
        "options": [
          "A solid 1x1!",
          "No.",
          "0"
        ],
        "correctAnswer": "A solid 1x1!"
      }
    ]
  },
  {
    "order": 95,
    "title": "Minimax (Intro)",
    "desc": "Recursive decision making in games.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Game Theory! In Chess or Tic-Tac-Toe, you assume your opponent will make the best move for THEM (minimize your score). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Max Player wants higher score. Min Player wants lower. Recurse through the game tree! 🦜\"",
        "codeSnippet": "int minimax(node, depth, isMax) {\n  if (leaf) return value;\n  if (isMax) return max(minimax(child, depth-1, false));\n  else return min(minimax(child, depth-1, true));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is it called 'Minimax'?",
        "options": [
          "Maximizing your minimum gain",
          "It's a tiny algorithm",
          "Miniatures are involved"
        ],
        "correctAnswer": "Maximizing your minimum gain"
      },
      {
        "type": "match_following",
        "questionText": "Match Player Goals!",
        "pairs": [
          {
            "key": "Agent",
            "value": "Maximize score"
          },
          {
            "key": "Opponent",
            "value": "Minimize score"
          },
          {
            "key": "Leaf",
            "value": "End of game"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Toggle the boolean player flag.",
        "codeSnippet": "res = minimax(child, depth - 1, ___ isMax);",
        "correctAnswer": "!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Optimized with 'Alpha-Beta Pruning' to skip branches that won't change the outcome! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Base case for Minimax?",
        "options": [
          "Winner found or Max Depth reached",
          "When you win",
          "When you lose"
        ],
        "correctAnswer": "Winner found or Max Depth reached"
      },
      {
        "type": "code_fill_in",
        "questionText": "Selection logic for opponent.",
        "codeSnippet": "return ___(m1, m2);",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Play the elite game! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you win against me?\"",
        "options": [
          "It's a draw!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "It's a draw!"
      }
    ]
  },
  {
    "order": 96,
    "title": "Recursive Tries",
    "desc": "Dictionary nests for birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trie Mastery! A Trie (Prefix Tree) stores words. To insert 'PICO', you start at root and move to child 'P', then 'I', and so on. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To DELETE a word recursively, you move down and remove nodes if they have no other children! 🦜\"",
        "codeSnippet": "Node* remove(root, word, depth) {\n  if (root == NULL) return NULL;\n  if (depth == word.len) { isEndOfWord = false; ... }\n  root->children[idx] = remove(node, word, depth + 1);\n  if (isEmpty(root)) { delete(root); return NULL; }\n  return root;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Advantage of a Trie for autocomplete?",
        "options": [
          "O(L) search where L is word length",
          "O(N) search",
          "Uses very little memory"
        ],
        "correctAnswer": "O(L) search where L is word length"
      },
      {
        "type": "match_following",
        "questionText": "Match Trie Actions!",
        "pairs": [
          {
            "key": "Insert",
            "value": "Create path"
          },
          {
            "key": "Search",
            "value": "Follow path"
          },
          {
            "key": "Empty Node",
            "value": "Prunable"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Index calculation for a character.",
        "codeSnippet": "int idx = char - '___' ;",
        "correctAnswer": "a"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Delete is the hardest recursive part! You only prune an ancestor if ALL its' heirs are gone. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Max number of children per node in a standard A-Z trie?",
        "options": [
          "26",
          "2",
          "1"
        ],
        "correctAnswer": "26"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive depth increment.",
        "codeSnippet": "remove(child, word, depth ___ 1);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Your word is your bond! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the dictionary?\"",
        "options": [
          "First entry!",
          "No.",
          "0"
        ],
        "correctAnswer": "First entry!"
      }
    ]
  },
  {
    "order": 97,
    "title": "Wildcard Matching",
    "desc": "Recursion with '?' and '*'.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mystery Match! Does 'p*o' match 'pico'? '*' can be any sequence, '?' is any single letter. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you see '*', you have two choices: 1. Use the '*' for the current char, 2. Skip the '*'. 🦜\"",
        "codeSnippet": "if (p[j] == '*') {\n  return solve(i+1, j) || solve(i, j+1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is '*' the hardest part?",
        "options": [
          "It has multiple choices (length 0 to infinity)",
          "It's invisible",
          "It crashes the stack"
        ],
        "correctAnswer": "It has multiple choices (length 0 to infinity)"
      },
      {
        "type": "match_following",
        "questionText": "Match Matchers!",
        "pairs": [
          {
            "key": "?",
            "value": "Matches 1 char"
          },
          {
            "key": "*",
            "value": "Matches 0 or more"
          },
          {
            "key": "Mismatch",
            "value": "Return False"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The OR condition for '*' matching.",
        "codeSnippet": "return solve(i+1, j) ___ solve(i, j+1);",
        "correctAnswer": "||"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N * M) with memoization. A recursive beast that powers text editors everywhere! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does 'a*b' match 'ab'?",
        "options": [
          "Yes",
          "No",
          "Only in regular mode"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Single char match condition.",
        "codeSnippet": "if (p[j] == '___' || s[i] == p[j])",
        "correctAnswer": "?"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Solve the mystery! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a wildcard?\"",
        "options": [
          "I'M SPECIAL!",
          "No.",
          "0"
        ],
        "correctAnswer": "I'M SPECIAL!"
      }
    ]
  },
  {
    "order": 98,
    "title": "Regex Matcher",
    "desc": "The Final Boss of Recursive String Logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Boss! Regular Expressions with '. ' and '*'. '*' means zero or more of the PREVIOUS character. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Example: 'a*' matches 'aaa' or ''. Unlike wildcard, it links back to the neighbor! 🦜\"",
        "codeSnippet": "if (p[j+1] == '*') {\n  return solve(i, j+2) || (match && solve(i+1, j));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does '.' match?",
        "options": [
          "Any single character",
          "A full stop",
          "Nothing"
        ],
        "correctAnswer": "Any single character"
      },
      {
        "type": "match_following",
        "questionText": "Match Regex Logic!",
        "pairs": [
          {
            "key": "a*",
            "value": "Any number of 'a's"
          },
          {
            "key": ".*",
            "value": "Any sequence at all"
          },
          {
            "key": "a.c",
            "value": "abc, arc, ayc..."
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Skip the '*' and its character.",
        "codeSnippet": "if (solve(i, j ___ 2)) return true;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the holy grail of interview recursion. Master this, and nothing can stop your flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does 'c*a*b' match 'b'?",
        "options": [
          "Yes ('c' and 'a' both repeat 0 times)",
          "No",
          "Only in Perl"
        ],
        "correctAnswer": "Yes ('c' and 'a' both repeat 0 times)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Match check.",
        "codeSnippet": "match = (i < s.size() && (s[i] == p[j] || p[j] == '___'));",
        "correctAnswer": "."
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The ultimate pattern recognition! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a regex?\"",
        "options": [
          "P.*O... YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "P.*O... YES!"
      }
    ]
  },
  {
    "order": 99,
    "title": "Titan Final: Tower of Dreams",
    "desc": "The ultimate recursive challenge.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"TITAN TRIAL! Combine everything. Can you solve the N-Queens problem on a 3D board while avoiding a cyclic flood? 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the limiting factor of recursion?",
        "options": [
          "Recusrsion Depth / Stack Memory",
          "Bird speed",
          "Electricity"
        ],
        "correctAnswer": "Recusrsion Depth / Stack Memory"
      },
      {
        "type": "multiple_choice",
        "questionText": "How to prevent stack overflow for very deep recursion (like 10^9)?",
        "options": [
          "Iteration + Manual Stack",
          "More RAM",
          "Pico magic"
        ],
        "correctAnswer": "Iteration + Manual Stack"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You have flyed through the deepest stacks and returned to the root. 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Paradigms!",
        "pairs": [
          {
            "key": "Divide & Conquer",
            "value": "Independent splits"
          },
          {
            "key": "Backtracking",
            "value": "Exploration & Undo"
          },
          {
            "key": "Sticky (DP)",
            "value": "Memoized states"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Binary Tree Height for 1000 nodes (approx).",
        "codeSnippet": "log2(1000) approx ___ ;",
        "correctAnswer": "10"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Your recursive mind is now a fractal of excellence! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is recursion a loop?",
        "options": [
          "A loop with memory!",
          "No.",
          "Yes."
        ],
        "correctAnswer": "A loop with memory!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"See the world in levels! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final realization?",
        "options": [
          "SQUAWK! I AM READY!",
          "Maybe.",
          "0"
        ],
        "correctAnswer": "SQUAWK! I AM READY!"
      }
    ]
  },
  {
    "order": 100,
    "title": "Titan Point (Recursion 10)",
    "desc": "The Recursive God has ascended.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"THE TOP! 1,000 Lessons of Recursion mastered. You are the Architect of the Academy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which recursive level have you reached?",
        "options": [
          "Titan-Grade",
          "Novice",
          "Intermediate"
        ],
        "correctAnswer": "Titan-Grade"
      },
      {
        "type": "multiple_choice",
        "questionText": "Will you keep nesting?",
        "options": [
          "Infinite Recursion!",
          "Stop here.",
          "Return 0."
        ],
        "correctAnswer": "Infinite Recursion!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Recursive God! The academy bows to your infinite logic! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Final Legend!",
        "pairs": [
          {
            "key": "Recursion",
            "value": "Titan"
          },
          {
            "key": "Arrays",
            "value": "Titan"
          },
          {
            "key": "Hashing",
            "value": "Next..."
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total Titan Lessons.",
        "codeSnippet": "100 * ___ ;",
        "correctAnswer": "10"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The sun never sets on the elite flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ascend further?",
        "options": [
          "SQUAWK YES!",
          "Only to Hashing.",
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
        "questionText": "End of Recursion?",
        "options": [
          "RETURN TRUE!",
          "Done.",
          "0"
        ],
        "correctAnswer": "RETURN TRUE!"
      }
    ]
  }
];

module.exports = stage10;
