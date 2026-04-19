const stage3 = [
  {
    "order": 41,
    "title": "The Needle in the Haystack (Elite)",
    "desc": "Finding the first occurrence of a pattern using KMP.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"KMP Algorithm! Brute force is O(N*M), but we are elite birds. We search in O(N+M) by never looking back! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Longest Prefix Suffix (LPS) array! It tells you where to jump if a character fails to match. No more re-checking old beads! 🦜\"",
        "codeSnippet": "while (i < n) {\n  if (pattern[j] == text[i]) { i++; j++; }\n  if (j == m) { return i - j; }\n  else if (i < n && pattern[j] != text[i]) {\n    if (j != 0) j = lps[j-1];\n    else i++;\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for KMP string matching?",
        "options": [
          "O(N + M)",
          "O(N * M)",
          "O(log N)"
        ],
        "correctAnswer": "O(N + M)"
      },
      {
        "type": "match_following",
        "questionText": "Match KMP Terms!",
        "pairs": [
          {
            "key": "LPS Array",
            "value": "The Jump Map"
          },
          {
            "key": "pattern[j]",
            "value": "The Needle"
          },
          {
            "key": "text[i]",
            "value": "The Haystack"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Jump to the previous longest prefix suffix.",
        "codeSnippet": "j = lps[___];",
        "correctAnswer": "j-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Building the LPS array is half the battle. It uses the same matching logic against itself! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "LPS array for \"AAAA\"?",
        "options": [
          "[0, 1, 2, 3]",
          "[0, 0, 0, 0]",
          "[1, 2, 3, 4]"
        ],
        "correctAnswer": "[0, 1, 2, 3]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize LPS size.",
        "codeSnippet": "vector<int> lps(m, ___);",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Skip the redundancy, find the treasure! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the haystack?\"",
        "options": [
          "Moving fast!",
          "No.",
          "0"
        ],
        "correctAnswer": "Moving fast!"
      }
    ]
  },
  {
    "order": 42,
    "title": "The Z-Algorithm Flight",
    "desc": "Pattern matching using the Z-array (Linear time).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Z-Algorithm! Similar to KMP, but instead of prefixes, we store the length of the longest substring starting at `i` that matches the prefix! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Concatenate `Pattern + $ + Text`. Every index in the Text where Z[i] == Pattern.length() is a match! 🦜\"",
        "codeSnippet": "string S = P + \"$\" + T;\nfor(int i=1; i<S.len(); i++) {\n  if(Z[i] == P.len()) results.push(i - P.len() - 1);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of building the Z-array?",
        "options": [
          "O(N + M)",
          "O(N * M)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N + M)"
      },
      {
        "type": "match_following",
        "questionText": "Match Z-Array Logic!",
        "pairs": [
          {
            "key": "S = P + \"$\" + T",
            "value": "The combined string"
          },
          {
            "key": "Z[i]",
            "value": "Longest Prefix Match"
          },
          {
            "key": "$",
            "value": "Unique Separator"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The core check for a pattern match.",
        "codeSnippet": "if (z[i] ___ pattern.length()) results.add(...);",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Z-Algorithm is often easier to implement than KMP once you understand the [L, R] window boundary! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a separator like \"$\" in Z-Algorithm?",
        "options": [
          "To stop prefix matching",
          "For style",
          "It’s required by law"
        ],
        "correctAnswer": "To stop prefix matching"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update [L, R] boundary.",
        "codeSnippet": "L = i; R = i + z[i] ___ 1;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Linear matching is bird-magic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do I have a Z-identity?\"",
        "options": [
          "Prefix of Awesome!",
          "No.",
          "0"
        ],
        "correctAnswer": "Prefix of Awesome!"
      }
    ]
  },
  {
    "order": 43,
    "title": "Rolling with Rabin-Karp",
    "desc": "String matching using Rolling Hashes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rabin-Karp! We give every string a mathematical ID (Hash). If the IDs match, the strings MIGHT match! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Rolling Hash! As you slide the window, you only add the new bead and subtract the old one from the sum. O(1) update! 🦜\"",
        "codeSnippet": "h = (d * (h - s[i] * h_pow) + s[i+m]) % q;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Average time complexity for Rabin-Karp?",
        "options": [
          "O(N + M)",
          "O(N * M)",
          "O(N)"
        ],
        "correctAnswer": "O(N + M)"
      },
      {
        "type": "match_following",
        "questionText": "Match Hash Terms!",
        "pairs": [
          {
            "key": "P",
            "value": "Prime modulus"
          },
          {
            "key": "D",
            "value": "Base (alphabet size)"
          },
          {
            "key": "Collision",
            "value": "False positive"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Bit shift or math for rolling the hash.",
        "codeSnippet": "currentHash = (currentHash ___ oldCharVal) * base + newCharVal;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watch out for collisions! Always double check the actual strings if their hashes match to avoid the Spying Crow! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a large prime number for the modulus?",
        "options": [
          "Reduce collisions",
          "It’s lucky",
          "Required for speed"
        ],
        "correctAnswer": "Reduce collisions"
      },
      {
        "type": "code_fill_in",
        "questionText": "Modulo operation to keep hash small.",
        "codeSnippet": "hash = (hash + MOD) ___ MOD;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The math never lies, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my hash unique?\"",
        "options": [
          "Mostly!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "Mostly!"
      }
    ]
  },
  {
    "order": 44,
    "title": "Shortest Palindrome (KMP)",
    "desc": "Finding the minimum chars needed at start to make a string a palindrome.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shortest Palindrome! You can only add characters to the FRONT. How to make it a mirror with the fewest beads? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"KMP Trick! Concatenate `S + # + Reverse(S)`. The LPS of the final bead tells you the longest palindromic prefix already there! 🦜\"",
        "codeSnippet": "string combined = s + \"#\" + rev_s;\nint lps_val = computeLPS(combined).back();\nreturn rev_s.substr(0, s.len() - lps_val) + s;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Shortest palindrome for \"aacecaaa\"?",
        "options": [
          "\"aaacecaaa\"",
          "\"aacecaaa\"",
          "\"aafacecaaa\""
        ],
        "correctAnswer": "\"aaacecaaa\""
      },
      {
        "type": "match_following",
        "questionText": "Match Palindrome KMP!",
        "pairs": [
          {
            "key": "Longest Pal Prefix",
            "value": "LPS tail"
          },
          {
            "key": "Chars to add",
            "value": "n - lps_val"
          },
          {
            "key": "Result",
            "value": "Shortest Mirror"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "String to append to front of original `S`.",
        "codeSnippet": "prefix = reverseS.substr(0, s.length() ___ lps_val);",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Using KMP to find palindromes is an Elite bird-brain move. It reduces an O(N^2) search to O(N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding the shortest palindrome prefix?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Reverse the string.",
        "codeSnippet": "string revS = ___(s.begin(), s.end());",
        "correctAnswer": "reverse"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mirror at the front! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the shortest?\"",
        "options": [
          "Optimal!",
          "No.",
          "0"
        ],
        "correctAnswer": "Optimal!"
      }
    ]
  },
  {
    "order": 45,
    "title": "Finite Automata Search",
    "desc": "Matching strings using state machines.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Machine! We can represent pattern matching as a Finite Automaton where each character moves you to a new state! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"State `q` means we have matched `q` characters. If the next bead is right, `q -> q+1`. If wrong, we jump back to a previous valid state! 🦜\"",
        "codeSnippet": "state = automaton[state][currentChar];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Maximum number of states for a pattern of length M?",
        "options": [
          "M + 1",
          "N",
          "2^M"
        ],
        "correctAnswer": "M + 1"
      },
      {
        "type": "match_following",
        "questionText": "Match Automata Terms!",
        "pairs": [
          {
            "key": "State q",
            "value": "Matching progress"
          },
          {
            "key": "Alphabet",
            "value": "Possible beads"
          },
          {
            "key": "Transition",
            "value": "The move"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if we reached the final state.",
        "codeSnippet": "if (state ___ M) return i - M + 1;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Preprocessing takes O(M * |Alphabet|), but searching is O(N). This is how RegEx filters work inside! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Finite Automata search faster than KMP for searching?",
        "options": [
          "Same O(N)",
          "Slower",
          "Always Faster"
        ],
        "correctAnswer": "Same O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update state based on input `c`.",
        "codeSnippet": "state = TF[state][___];",
        "correctAnswer": "c"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The machine never stops! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I an automaton?\"",
        "options": [
          "Living logic!",
          "No.",
          "0"
        ],
        "correctAnswer": "Living logic!"
      }
    ]
  },
  {
    "order": 46,
    "title": "Text Justification",
    "desc": "Formatting a list of words into symmetrical lines.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Typesetter! Formatting words into lines of exactly `maxWidth` characters. Spaces must be distributed evenly! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Greedily pack words! If they don't fit, distribute extra spaces from left to right. Left gaps get more seeds! 🦜\"",
        "codeSnippet": "int spaces = (maxWidth - totalLength) / (wordCount - 1);\nint extras = (maxWidth - totalLength) % (wordCount - 1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many words per line if maxWidth=16 and words=[\"This\", \"is\", \"Pico\"]?",
        "options": [
          "3 (\"This    is  Pico\")",
          "2",
          "1"
        ],
        "correctAnswer": "3 (\"This    is  Pico\")"
      },
      {
        "type": "match_following",
        "questionText": "Match Justification Rules!",
        "pairs": [
          {
            "key": "Regular line",
            "value": "Even spaces"
          },
          {
            "key": "Last line",
            "value": "Left justified"
          },
          {
            "key": "One word line",
            "value": "Left justified"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Number of extra spaces per gap.",
        "codeSnippet": "numGaps = wordCount ___ 1;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a hard implementation challenge. It’s all about counting the gaps between the birds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the space complexity of Text Justification?",
        "options": [
          "O(N)",
          "O(1)",
          "O(Line Length)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Append spaces to the result string.",
        "codeSnippet": "line.append(numSpaces, ___);",
        "correctAnswer": "' '"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Beautiful layout, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my text justified?\"",
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
    "title": "Valid Number Parsing",
    "desc": "Identifying if a string is a valid floating point number.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Auditor! Is '-123.45e10' a valid number? This is the ultimate test of state management! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Handle the optional sign, the decimal point, the exponent 'e', and the mandatory digits. No letters allowed! 🦜\"",
        "codeSnippet": "if (c == 'e' || c == 'E') {\n  if (hasE || !hasDigit) return false;\n  hasE = true; hasDigit = false;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is \".1\" a valid number?",
        "options": [
          "Yes",
          "No",
          "Only in Java"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "match_following",
        "questionText": "Match Parsing Rules!",
        "pairs": [
          {
            "key": ".",
            "value": "Only one allowed"
          },
          {
            "key": "e",
            "value": "Needs digits after"
          },
          {
            "key": "abc",
            "value": "Invalid"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Reset digit flag after exponent.",
        "codeSnippet": "if (c == 'e') { ___ = false; }",
        "correctAnswer": "hasDigit"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You can use a Regex or build a custom state machine. A state machine is faster and more elite! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is \"99e2.5\" valid?",
        "options": [
          "No (Exponent must be integer)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (Exponent must be integer)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if character is a digit.",
        "codeSnippet": "if (___(c)) hasDigit = true;",
        "correctAnswer": "isdigit"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The numbers don’t lie! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a valid number?\"",
        "options": [
          "Infinite!",
          "1",
          "0"
        ],
        "correctAnswer": "Infinite!"
      }
    ]
  },
  {
    "order": 48,
    "title": "Interleaving Strings",
    "desc": "Can S3 be formed by interleaving S1 and S2?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Weaver! Can you weave necklace A and necklace B into necklace C while keeping their order? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dynamic Programming! `dp[i][j]` means s1[0...i] and s2[0...j] can form s3[0...i+j]. 🦜\"",
        "codeSnippet": "dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || (dp[i][j-1] && s2[j-1] == s3[i+j-1]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for s1=\"aa\", s2=\"bb\", s3=\"abab\"?",
        "options": [
          "Yes",
          "No",
          "Only if sorted"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "match_following",
        "questionText": "Match Weaver Logic!",
        "pairs": [
          {
            "key": "Top",
            "value": "Match with S1"
          },
          {
            "key": "Left",
            "value": "Match with S2"
          },
          {
            "key": "Base",
            "value": "dp[0][0] = true"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initial requirement for interleaving.",
        "codeSnippet": "if (s1.len() + s2.len() ___ s3.len()) return false;",
        "correctAnswer": "!="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Time Complexity: O(M * N). Space: O(M * N) or O(min(M,N)) if you optimize the DP table! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is interleaving the same as simply merging?",
        "options": [
          "No (Order matters)",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (Order matters)"
      },
      {
        "type": "code_fill_in",
        "questionText": "DP table initialization.",
        "codeSnippet": "bool dp[___][n+1];",
        "correctAnswer": "m+1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Woven with logic, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we interleaved?\"",
        "options": [
          "Perfectly bonded!",
          "No.",
          "0"
        ],
        "correctAnswer": "Perfectly bonded!"
      }
    ]
  },
  {
    "order": 49,
    "title": "Regular Expression Match",
    "desc": "Matching strings with . and * (Hard DP).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The wildcard! '.' matches any bird. '*' matches zero or more of the previous bird! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dynamic Programming again! If you see a '*', you have two choices: skip the bird (DP[i][j-2]) or use the bird (DP[i-1][j] if it matches)! 🦜\"",
        "codeSnippet": "if (p[j-1] == '*') {\n  dp[i][j] = dp[i][j-2] || (dp[i-1][j] && (s[i-1] == p[j-2] || p[j-2] == '.'));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does \"aa\" match \"a*\"?",
        "options": [
          "Yes",
          "No",
          "Only if ."
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "match_following",
        "questionText": "Match Regex Signs!",
        "pairs": [
          {
            "key": ".",
            "value": "Any char"
          },
          {
            "key": "*",
            "value": "Multiplicity"
          },
          {
            "key": "a",
            "value": "Literal"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the wildcard skip case.",
        "codeSnippet": "if (isMatch(s, p.substr(___))) // skipping the star",
        "correctAnswer": "i, j-2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a Google and Facebook favorite. It tests your ability to handle recursive branching in a DP table! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Regex matching?",
        "options": [
          "O(N * M)",
          "O(2^N)",
          "O(1)"
        ],
        "correctAnswer": "O(N * M)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base match check.",
        "codeSnippet": "bool match = !s.empty() && (s[0] == p[0] || p[0] == ___);",
        "correctAnswer": "'.'"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wild and free, like the wind! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Match my ego?\"",
        "options": [
          "* exceeds capacity!",
          "No.",
          "0"
        ],
        "correctAnswer": "* exceeds capacity!"
      }
    ]
  },
  {
    "order": 50,
    "title": "Pattern Pivot",
    "desc": "The junction of Stage 3 Patterns.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"PATTERNS MASTERED! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"KMP, Z-Algorithm, Rabin-Karp, and the Regular Expression Weaver. You have reached the core of String theory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Fastest substring search for single match?",
        "options": [
          "KMP (O(N+M))",
          "Brute Force (O(NM))"
        ],
        "correctAnswer": "KMP (O(N+M))"
      },
      {
        "type": "multiple_choice",
        "questionText": "Best for multiple pattern matching simultaneously?",
        "options": [
          "Rolling Hash (Rabin-Karp)",
          "KMP"
        ],
        "correctAnswer": "Rolling Hash (Rabin-Karp)"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does LPS[i] store?",
        "options": [
          "Longest Proper Prefix Suffix",
          "Length of string"
        ],
        "correctAnswer": "Longest Proper Prefix Suffix"
      },
      {
        "type": "multiple_choice",
        "questionText": "Z-algorithm S concatenation?",
        "options": [
          "P + $ + T",
          "T + P"
        ],
        "correctAnswer": "P + $ + T"
      },
      {
        "type": "multiple_choice",
        "questionText": "Regex \"*\" matches?",
        "options": [
          "Zero or more",
          "Exactly one"
        ],
        "correctAnswer": "Zero or more"
      },
      {
        "type": "match_following",
        "questionText": "Stage 3 Mastery Match!",
        "pairs": [
          {
            "key": "Search",
            "value": "Complete!"
          },
          {
            "key": "Regex",
            "value": "Mastered!"
          },
          {
            "key": "Pico",
            "value": "Proud!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next, we enter the God-Mode of Strings: Suffix Trees and Automata! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for the peak?\"",
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
    "order": 51,
    "title": "The Suffix Array (Intro)",
    "desc": "Sorting all suffixes of a string efficiently.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Suffix Array! A list of all starting positions of all suffixes, sorted alphabetically. It’s the power-tool for string searching! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Instead of sorting suffixes in O(N^2 log N), use Prefix Doubling in O(N log^2 N)! 🦜\"",
        "codeSnippet": "for (int k = 0; (1 << k) < n; ++k) {\n  sort(sa, sa + n, compare);\n  updateRanks();\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the Suffix Array for \"BANANA\"?",
        "options": [
          "[5, 3, 1, 0, 4, 2]",
          "[0, 1, 2, 3, 4, 5]",
          "Alphabetical"
        ],
        "correctAnswer": "[5, 3, 1, 0, 4, 2]",
        "explanation": "Suffixes: A, ANA, ANANA, BANANA, NA, NANA."
      },
      {
        "type": "match_following",
        "questionText": "Match Suffixes of \"BANANA\"!",
        "pairs": [
          {
            "key": "0",
            "value": "BANANA"
          },
          {
            "key": "5",
            "value": "A"
          },
          {
            "key": "2",
            "value": "NANA"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Step to double the rank comparison length.",
        "codeSnippet": "next_rank = (1 << ___);",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Once sorted, you can find any substring of length M in O(M log N) using Binary Search on the Suffix Array! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of building a Suffix Array with O(N log N) library sort?",
        "options": [
          "O(N log^2 N)",
          "O(N log N)",
          "O(N)"
        ],
        "correctAnswer": "O(N log^2 N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize suffix array.",
        "codeSnippet": "for(int i=0; i<n; i++) sa[i] = ___;",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The tails of the necklace! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the end?\"",
        "options": [
          "The prefix of the end!",
          "No.",
          "0"
        ],
        "correctAnswer": "The prefix of the end!"
      }
    ]
  },
  {
    "order": 52,
    "title": "The LCP Array",
    "desc": "Longest Common Prefix between adjacent suffixes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"LCP Array! For a sorted Suffix Array, find how many leading beads each suffix shares with its neighbor. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Kasai’s Algorithm lets you compute this in O(N) time by processing suffixes in their original order! 🦜\"",
        "codeSnippet": "if (rank[i] < n-1) {\n  int j = sa[rank[i]+1];\n  while(s[i+k] == s[j+k]) k++;\n  lcp[rank[i]] = k;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "LCP of \"ANA\" and \"ANANA\"?",
        "options": [
          "3",
          "2",
          "5"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "match_following",
        "questionText": "Match Kasai Logic!",
        "pairs": [
          {
            "key": "rank[i]",
            "value": "Position in SA"
          },
          {
            "key": "sa[rank[i]+1]",
            "value": "The neighbor"
          },
          {
            "key": "k",
            "value": "Common length"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Decrement k cautiously for the next iteration.",
        "codeSnippet": "if (k > 0) ___ ;",
        "correctAnswer": "k--"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The LCP array is the secret ingredient for finding Longest Repeated Substrings or the number of Unique Substrings in O(N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many unique substrings in a string of length N?",
        "options": [
          "N(N+1)/2 - sum(LCP)",
          "O(N)",
          "Depends on Pico"
        ],
        "correctAnswer": "N(N+1)/2 - sum(LCP)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for character match.",
        "codeSnippet": "while (i+k < n && j+k < n && s[i+k] ___ s[j+k]) k++;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Similarity is a spectrum! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we similar?\"",
        "options": [
          "Common prefix!",
          "No.",
          "0"
        ],
        "correctAnswer": "Common prefix!"
      }
    ]
  },
  {
    "order": 53,
    "title": "Aho-Corasick Flight",
    "desc": "Searching for multiple patterns simultaneously (Trie matching).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Aho-Corasick! Why search for one needle when you can search for a whole set in one pass? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It combines a Trie with KMP-like failure links! If one pattern fails, the failure link takes you to the longest prefix of ANOTHER pattern! 🦜\"",
        "codeSnippet": "node.fail = parent.fail.next[char];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find all occurrences of K patterns in text of size N?",
        "options": [
          "O(N + Total_Pattern_Length + Results)",
          "O(N * K)",
          "O(N!)"
        ],
        "correctAnswer": "O(N + Total_Pattern_Length + Results)"
      },
      {
        "type": "match_following",
        "questionText": "Match AC Terms!",
        "pairs": [
          {
            "key": "Trie",
            "value": "The roadmap"
          },
          {
            "key": "Failure Link",
            "value": "The shortcut"
          },
          {
            "key": "Dictionary",
            "value": "Set of needles"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Follow the failure path.",
        "codeSnippet": "temp = temp.___ ;",
        "correctAnswer": "fail"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is how anti-virus scanners find thousands of viruses in a split second. Efficiency is the bird’s law! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Initial state for building failure links?",
        "options": [
          "BFS (Level Order)",
          "DFS",
          "Random"
        ],
        "correctAnswer": "BFS (Level Order)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if current node is a terminal.",
        "codeSnippet": "if (node.___ > 0) processResult();",
        "correctAnswer": "count"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"One pass, a million patterns! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the dictionary?\"",
        "options": [
          "The definition of Elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "The definition of Elite!"
      }
    ]
  },
  {
    "order": 54,
    "title": "Manacher's Miracle",
    "desc": "Finding all palindromes in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Manacher’s Algorithm! Expand Around Center is O(N^2), but Manacher uses symmetry to skip calculations! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Transform string with '#' characters to handle even/odd. Then mirrors your existing results across the center! 🦜\"",
        "codeSnippet": "if (i < R) P[i] = min(R - i, P[2*C - i]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for Manacher’s Algorithm?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Manacher terms!",
        "pairs": [
          {
            "key": "P[i]",
            "value": "Radius of palindrome"
          },
          {
            "key": "C",
            "value": "Center of max range"
          },
          {
            "key": "R",
            "value": "Right boundary of C"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Mirror index of `i` around `C`.",
        "codeSnippet": "mirror = 2 * C ___ i;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The mirror reflection gives you a lower bound on the palindrome radius. You only expand further if you surpass the current boundary R! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why transform \"aba\" into \"#a#b#a#\"?",
        "options": [
          "Handle even/odd centers",
          "Looks pretty",
          "Adds extra luck"
        ],
        "correctAnswer": "Handle even/odd centers"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update center and boundary.",
        "codeSnippet": "C = i; R = i + ___ ;",
        "correctAnswer": "P[i]"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Perfect symmetry in linear time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my radius big?\"",
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
    "title": "Wildcard Mastery",
    "desc": "Pattern matching with ? and * (Greedy/DP).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wildcard Mania! '?' matches one bird, '*' matches any group of birds (including none)! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Linear Greedy Trick: Store the last position of '*' and try to match as few birds as possible until it fails, then go back and match one more! 🦜\"",
        "codeSnippet": "if (p[j] == '*') { starIdx = j++; match = i; }\nelse if (starIdx != -1) { j = starIdx + 1; match++; i = match; }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does \"abc\" match \"a*\"?",
        "options": [
          "Yes",
          "No",
          "Only if ?"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "match_following",
        "questionText": "Match Wildcards!",
        "pairs": [
          {
            "key": "?",
            "value": "Exactly 1"
          },
          {
            "key": "*",
            "value": "0 or more"
          },
          {
            "key": "char",
            "value": "Literal"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the single-bird wildcard.",
        "codeSnippet": "if (p[j] ___ '?' || p[j] == s[i]) { i++; j++; }",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This linear approach is much faster than DP for most practical strings. Follow the stars! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Greedy Wildcard matching?",
        "options": [
          "O(N + M) avg",
          "O(N * M) worst",
          "O(1)"
        ],
        "correctAnswer": "O(N + M) avg"
      },
      {
        "type": "code_fill_in",
        "questionText": "Skip trailing stars.",
        "codeSnippet": "while (j < m && p[j] == ___) j++;",
        "correctAnswer": "'*'"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wild and precise! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I wildcard?\"",
        "options": [
          "Unpredictably elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Unpredictably elite!"
      }
    ]
  },
  {
    "order": 56,
    "title": "The Lexicographical Key",
    "desc": "Finding the smallest cyclic rotation of a string (Booth's Algorithm).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cycle Sort! For 'PICO', the rotations are PICO, ICOP, COPI, OPIC. Which one comes first in the dictionary? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Booth’s Algorithm uses a modified KMP pre-processing on `S + S` to find the smallest rotation in O(N). 🦜\"",
        "codeSnippet": "f[j] = next_failure_index;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Smallest rotation of \"baaba\"?",
        "options": [
          "\"aabaa\"",
          "\"baaba\"",
          "\"abaaa\""
        ],
        "correctAnswer": "\"aabaa\""
      },
      {
        "type": "match_following",
        "questionText": "Match cyclic terms!",
        "pairs": [
          {
            "key": "Rotation",
            "value": "Shifted string"
          },
          {
            "key": "Lexicographical",
            "value": "Dict order"
          },
          {
            "key": "Minimum",
            "value": "The goal"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Double length for cyclic checks.",
        "codeSnippet": "combined = s ___ s;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Extremely useful in cryptography and genome sequence alignment. Find the starting line, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for reaching the smallest rotation?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Comparison to find smaller.",
        "codeSnippet": "if (s[i+k] < s[j+k]) ___ ;",
        "correctAnswer": "j = j+k+1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Start small, finish big! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the smallest?\"",
        "options": [
          "The humble origin!",
          "No.",
          "0"
        ],
        "correctAnswer": "The humble origin!"
      }
    ]
  },
  {
    "order": 57,
    "title": "The Duplicate Search",
    "desc": "Finding the longest repeated substring (Suffix Array application).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double necklace! What is the longest set of beads that appears at least twice? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Max value in your LCP array is the length of the longest repeated substring! 🦜\"",
        "codeSnippet": "max_len = max(lcp[i]);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Longest repeated substring in \"banana\"?",
        "options": [
          "\"ana\"",
          "\"na\"",
          "\"ban\""
        ],
        "correctAnswer": "\"ana\""
      },
      {
        "type": "match_following",
        "questionText": "Match Duplicate Logic!",
        "pairs": [
          {
            "key": "Suffix Array",
            "value": "Alphabetical sort"
          },
          {
            "key": "LCP[i]",
            "value": "Shared with neighbor"
          },
          {
            "key": "Max LCP",
            "value": "Result"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Retrieve the maximum LCP value.",
        "codeSnippet": "for(int x : lcp) ans = max(ans, ___);",
        "correctAnswer": "x"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Suffix structures make this linear instead of quadratic. O(N) mastery! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you find a repeated substring in \"abcda\"?",
        "options": [
          "Yes (\"a\")",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (\"a\")"
      },
      {
        "type": "code_fill_in",
        "questionText": "Index of the repeated substring in SA.",
        "codeSnippet": "int start = sa[___];",
        "correctAnswer": "maxIndex"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Twice as nice, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I repeated?\"",
        "options": [
          "Echo of greatness!",
          "No.",
          "0"
        ],
        "correctAnswer": "Echo of greatness!"
      }
    ]
  },
  {
    "order": 58,
    "title": "Distinct Substrings (Elite)",
    "desc": "Counting all unique substrings in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Total Uniqueness! Out of N(N+1)/2 total substrings, how many are UNIQUE once duplicates are removed? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Total - Sum(LCP). Because each LCP[i] represents a prefix shared by the NEXT sorted suffix—meaning it was already counted! 🦜\"",
        "codeSnippet": "long long total = (long long)n*(n+1)/2;\nfor(int val : lcp) total -= val;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Distinct substrings in \"aaa\"?",
        "options": [
          "3 (\"a\", \"aa\", \"aaa\")",
          "6",
          "1"
        ],
        "correctAnswer": "3 (\"a\", \"aa\", \"aaa\")"
      },
      {
        "type": "match_following",
        "questionText": "Match Substring Math!",
        "pairs": [
          {
            "key": "Total Possible",
            "value": "n(n+1)/2"
          },
          {
            "key": "Duplicate prefixes",
            "value": "sum(LCP)"
          },
          {
            "key": "Unique",
            "value": "Difference"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Summation of common prefixes.",
        "codeSnippet": "for(int x : lcp) sum ___ x;",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a god-level formula. Deriving it makes you a String Sage! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many substrings in \"ab\" (N=2)?",
        "options": [
          "3",
          "2",
          "4"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Calculate total possible.",
        "codeSnippet": "long total = (n * (n + ___)) / 2;",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every unique bead counted once! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are all my feathers unique?\"",
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
    "title": "Shortest Palindrome II (Elite)",
    "desc": "Advanced palindrome prefix matching with Manacher.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Palindrome Apex! Use Manacher's array to find the longest palindromic prefix in one pass! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If a palindrome starting at the first character has radius R, then S[0...R] is your prefix! 🦜\"",
        "codeSnippet": "if (i - P[i] == 1) maxPalPrefix = P[i];"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Manacher faster than KMP for this specific problem?",
        "options": [
          "Both O(N)",
          "Manacher",
          "KMP"
        ],
        "correctAnswer": "Both O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Palindrome Peaks!",
        "pairs": [
          {
            "key": "i - P[i] == 1",
            "value": "Touched left border"
          },
          {
            "key": "maxPalPrefix",
            "value": "Our target"
          },
          {
            "key": "Result",
            "value": "Shortest addition"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if palindrome reaches the index 0.",
        "codeSnippet": "if (center - radius ___ 1) // Using 1-based indexing (#)",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"By combining Manacher with greedy addition, you build the fastest mirroring bot in the sky! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is it center-radius=1?",
        "options": [
          "Starting '#' character",
          "Index 0",
          "Pico likes 1"
        ],
        "correctAnswer": "Starting '#' character"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final addition.",
        "codeSnippet": "return revS.substr(0, n - ___) + s;",
        "correctAnswer": "maxLen"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The fastest mirror in the woods! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can I mirror the speed of light?\"",
        "options": [
          "O(N) YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "O(N) YES!"
      }
    ]
  },
  {
    "order": 60,
    "title": "Stage 3 Graduation",
    "desc": "Master of Patterns: The Strings Apex.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 3 GRADUATE! You have mastered the most sophisticated string algorithms in modern computing. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"KMP, Z-Algorithm, Suffix Arrays, LCP, Aho-Corasick, and Manacher’s Miracle. You are a STRING SAGE! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Algorithm for O(N) palindrome search?",
        "options": [
          "Manacher’s",
          "KMP"
        ],
        "correctAnswer": "Manacher’s"
      },
      {
        "type": "multiple_choice",
        "questionText": "Algorithm for multi-pattern search?",
        "options": [
          "Aho-Corasick",
          "Rabin-Karp"
        ],
        "correctAnswer": "Aho-Corasick"
      },
      {
        "type": "multiple_choice",
        "questionText": "Suffix Array sorting (efficient)?",
        "options": [
          "Prefix Doubling (O(N log^2 N))",
          "Brute Sort"
        ],
        "correctAnswer": "Prefix Doubling (O(N log^2 N))"
      },
      {
        "type": "multiple_choice",
        "questionText": "Distinct substring formula?",
        "options": [
          "Total - Sum(LCP)",
          "Sum(LCP)"
        ],
        "correctAnswer": "Total - Sum(LCP)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Automata search complexity?",
        "options": [
          "O(N)",
          "O(NM)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Final Pattern Match!",
        "pairs": [
          {
            "key": "Sage",
            "value": "Complete!"
          },
          {
            "key": "Pico",
            "value": "Applause!"
          },
          {
            "key": "Subject",
            "value": "STRINGS DONE!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Final check—Strings are finished. You are ready to transition to the World of Pointers: LINKED LISTS! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for the next Subject?\"",
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

module.exports = stage3;