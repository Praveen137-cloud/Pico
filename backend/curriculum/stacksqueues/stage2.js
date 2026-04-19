const stage2 = [
  {
    "order": 21,
    "title": "The Polish Evaluator (Postfix)",
    "desc": "Calculating results of Postfix expressions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Postfix Notation! Instead of `2 + 3`, we say `2 3 +`. No parentheses needed, the stack knows what to do! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Walk through the tokens. If it's a bird (number), push to stack. If it's an operator, pop two birds, calculate, and push the result back! 🦜\"",
        "codeSnippet": "for(string t : tokens) {\n  if(isdigit(t[0])) s.push(stoi(t));\n  else {\n    int b = s.pop(); int a = s.pop();\n    s.push(apply(a, b, t));\n  }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of \"2 3 1 * +\"?",
        "options": [
          "5",
          "6",
          "1"
        ],
        "correctAnswer": "5"
      },
      {
        "type": "match_following",
        "questionText": "Match Postfix logic!",
        "pairs": [
          {
            "key": "Operand",
            "value": "Push to Stack"
          },
          {
            "key": "Operator",
            "value": "Pop 2 and Apply"
          },
          {
            "key": "Final Result",
            "value": "Top of Stack"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Order of operations after popping `a` then `b`.",
        "codeSnippet": "result = b ___ a; // for non-commutative like division",
        "correctAnswer": "a / b"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait! For subtraction and division, the first bird popped is the right-side operand (b), and the second is the left-side operand (a). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is Postfix called \"Reverse Polish Notation\"?",
        "options": [
          "Created by Jan Łukasiewicz",
          "It’s backward",
          "Pico liked Poland"
        ],
        "correctAnswer": "Created by Jan Łukasiewicz"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push the calculated result.",
        "codeSnippet": "s.___ (res);",
        "correctAnswer": "push"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math without boundaries! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I evaluated?\"",
        "options": [
          "Perfectly balanced!",
          "No.",
          "0"
        ],
        "correctAnswer": "Perfectly balanced!"
      }
    ]
  },
  {
    "order": 22,
    "title": "Prefix Precedence",
    "desc": "Calculating results of Prefix expressions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Prefix Notation! The operator comes BEFORE the birds: `+ 2 3`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trick: Scan from RIGHT to LEFT! If it's a bird, push. If it's an operator, pop two and push result. It’s just like Postfix in reverse! 🦜\"",
        "codeSnippet": "for(int i=n-1; i>=0; i--) {\n  if(isOperand(expr[i])) s.push(expr[i] - '0');\n  else { op1 = s.pop(); op2 = s.pop(); s.push(calc(op1, op2, expr[i])); }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Scanning direction for Prefix evaluation?",
        "options": [
          "Right to Left",
          "Left to Right",
          "Middle out"
        ],
        "correctAnswer": "Right to Left"
      },
      {
        "type": "match_following",
        "questionText": "Match Prefix Logic!",
        "pairs": [
          {
            "key": "Right to Left",
            "value": "Evaluate"
          },
          {
            "key": "Operator first",
            "value": "Prefix"
          },
          {
            "key": "Operand first",
            "value": "Postfix"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Loop to scan from the end.",
        "codeSnippet": "for (int i = n-1; i ___ 0; i--)",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time. By scanning backward, we handle operands in the correct order for division and subtraction without any extra mirrors! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of \"+ * 2 3 5\"?",
        "options": [
          "11",
          "25",
          "10"
        ],
        "correctAnswer": "11"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pop first operand.",
        "codeSnippet": "int v1 = s.___(); s.pop();",
        "correctAnswer": "top"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Leading the way! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I prefix?\"",
        "options": [
          "Leading with logic!",
          "No.",
          "0"
        ],
        "correctAnswer": "Leading with logic!"
      }
    ]
  },
  {
    "order": 23,
    "title": "The Great Translator",
    "desc": "Converting Postfix to Infix.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Translating Bird-Speech! Convert `A B +` into `(A + B)`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a Stack of strings! When you see an operator, pop two strings, wrap them in parentheses with the operator in between, and push back! 🦜\"",
        "codeSnippet": "string s2 = s.pop(); string s1 = s.pop();\nstring res = \"(\" + s1 + op + s2 + \")\";\ns.push(res);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Intermediate result of \"AB+C*\" during translation?",
        "options": [
          "((A+B)*C)",
          "(A+B*C)",
          "ABC+*"
        ],
        "correctAnswer": "((A+B)*C)"
      },
      {
        "type": "match_following",
        "questionText": "Match Translation steps!",
        "pairs": [
          {
            "key": "Operand",
            "value": "Push String"
          },
          {
            "key": "Operator",
            "value": "Form (S1+op+S2)"
          },
          {
            "key": "Stack type",
            "value": "Stack<string>"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Wrap the expression in parentheses.",
        "codeSnippet": "res = ___ + s1 + op + s2 + ___ ;",
        "correctAnswer": "\"(\", \")\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) time and space. Now humans can understand what the birds are calculating! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for \"ABC*+\"?",
        "options": [
          "(A+(B*C))",
          "((A+B)*C)",
          "ABC*+"
        ],
        "correctAnswer": "(A+(B*C))"
      },
      {
        "type": "code_fill_in",
        "questionText": "String concatenation.",
        "codeSnippet": "string combined = \"(\" + s1 + ___ + s2 + \")\";",
        "correctAnswer": "token"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Clear communication! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do I speak Infix?\"",
        "options": [
          "Fluently!",
          "No.",
          "0"
        ],
        "correctAnswer": "Fluently!"
      }
    ]
  },
  {
    "order": 24,
    "title": "The Shunting-Yard (Infix to Postfix)",
    "desc": "Converting Infix to Postfix (Basics).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Shunting-Yard! Converting `A + B * C` into `A B C * +`. Use a stack for OPERATORS only! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Higher precedence operators (like *) stay on top. Lower precedence (+, -) pop everyone off before taking their place! 🦜\"",
        "codeSnippet": "while(!s.empty() && prec(s.top()) >= prec(c)) {\n  res += s.pop();\n}\ns.push(c);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Priority of \"*\" vs \"+\"?",
        "options": [
          "* is higher",
          "+ is higher",
          "Same"
        ],
        "correctAnswer": "* is higher"
      },
      {
        "type": "match_following",
        "questionText": "Match Shunting Rules!",
        "pairs": [
          {
            "key": "Operand",
            "value": "Add to result"
          },
          {
            "key": "(",
            "value": "Push to stack"
          },
          {
            "key": ")",
            "value": "Pop until ("
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pop operators while their precedence is higher.",
        "codeSnippet": "while (!st.empty() && prec(st.top()) ___ prec(c))",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Parentheses `(` force themselves onto the stack, but they only leave when their twin `)` arrives. This is how compilers read your math! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "PostFix for \"A+B*C\"?",
        "options": [
          "ABC*+",
          "+*ABC",
          "AB+C*"
        ],
        "correctAnswer": "ABC*+"
      },
      {
        "type": "code_fill_in",
        "questionText": "Append operator to result string.",
        "codeSnippet": "res ___ st.top(); st.pop();",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Math rearranged! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I shunted?\"",
        "options": [
          "Perfectly sequenced!",
          "No.",
          "0"
        ],
        "correctAnswer": "Perfectly sequenced!"
      }
    ]
  },
  {
    "order": 25,
    "title": "The Next Greater Bird",
    "desc": "Finding the next larger value for every element (Monotonic Stack).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next Greater Element! For every bird in the line, who is the first bird to its RIGHT that is bigger than it? [4, 5, 2, 10] -> [5, 10, 10, -1]! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Monotonic Stack! Keep a stack of birds in decreasing order. If the new bird is BIGGER than the top, it's the answer for everyone it pops! 🦜\"",
        "codeSnippet": "while(!s.empty() && arr[s.top()] < arr[i]) {\n  ans[s.pop()] = arr[i];\n}\ns.push(i);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding NGE for all elements?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Monotonic logic!",
        "pairs": [
          {
            "key": "Increasing",
            "value": "New bird pops smaller"
          },
          {
            "key": "ans[j] = x",
            "value": "Assign answer"
          },
          {
            "key": "Stack",
            "value": "Indices waiting for answer"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if current matches a popping condition.",
        "codeSnippet": "while (!st.empty() && arr[st.top()] ___ currentVal)",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time because each bird enters and leaves the tower exactly once. A fundamental trick! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "NGE for [5, 4, 3, 2, 1]?",
        "options": [
          "[-1, -1, -1, -1, -1]",
          "[4, 3, 2, 1, -1]",
          "0"
        ],
        "correctAnswer": "[-1, -1, -1, -1, -1]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Default value for no greater element.",
        "codeSnippet": "vector<int> ans(n, ___);",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Looking ahead! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Who is greater than me?\"",
        "options": [
          "None! SQUAWK!",
          "No.",
          "0"
        ],
        "correctAnswer": "None! SQUAWK!"
      }
    ]
  },
  {
    "order": 26,
    "title": "The Circular Search (NGE II)",
    "desc": "Finding NGE in a circular array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Circular Monothon! The search doesn't stop at the end—it loops back to the beginning once. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trick: Iterate from `0` to `2N-1` and use `% N` to access elements. This simulates the loop with just one pass-and-a-half! 🦜\"",
        "codeSnippet": "for (int i = 0; i < 2 * n; i++) {\n  int num = nums[i % n];\n  while (!s.empty() && nums[s.top()] < num) ans[s.pop()] = num;\n  if (i < n) s.push(i);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "NGE for [1, 2, 1] (Circular)?",
        "options": [
          "[2, -1, 2]",
          "[2, -1, -1]",
          "[-1, -1, -1]"
        ],
        "correctAnswer": "[2, -1, 2]"
      },
      {
        "type": "match_following",
        "questionText": "Match Circular NGE!",
        "pairs": [
          {
            "key": "2 * N",
            "value": "Double Pass"
          },
          {
            "key": "i < N",
            "value": "Push Only once"
          },
          {
            "key": "num % N",
            "value": "Virtual index"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Modulo to map index to circular array.",
        "codeSnippet": "current = arr[i ___ n];",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). The circularity is just a perspective, but the monotonic stack remains the engine! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we only push in the first N steps?",
        "options": [
          "Answers for all found in 2nd N",
          "Save memory",
          "Pico rule"
        ],
        "correctAnswer": "Answers for all found in 2nd N"
      },
      {
        "type": "code_fill_in",
        "questionText": "Circular loop condition.",
        "codeSnippet": "for (int i = 0; i < ___ * n; i++)",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The loop never ends... well, twice! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I loop back?\"",
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
    "title": "Daily Temperatures",
    "desc": "How many days until a warmer bird arrives?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Temperature Flight! For every day [73, 74, 75, 71, 69, 72, 76, 73], how many days must you wait for a warmer one? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is just NGE, but you store the INDEX! The answer is `WarmerIndex - CurrentIndex`. 🦜\"",
        "codeSnippet": "while(!s.empty() && temp[i] > temp[s.top()]) {\n  int prevIdx = s.pop();\n  ans[prevIdx] = i - prevIdx;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Days to wait after 73 if next is 74?",
        "options": [
          "1",
          "0",
          "74-73"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match Temp logic!",
        "pairs": [
          {
            "key": "Wait Days",
            "value": "i - prevIdx"
          },
          {
            "key": "ans[i]",
            "value": "0 if no warmer"
          },
          {
            "key": "Stack",
            "value": "Indices of colder"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate the gap in days.",
        "codeSnippet": "ans[prev] = i ___ prev;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time. The stack keeps track of all the cold birds waiting for their warm sunrise! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for [30, 40, 50, 60]?",
        "options": [
          "[1, 1, 1, 0]",
          "[0, 0, 0, 0]",
          "[1, 2, 3, 0]"
        ],
        "correctAnswer": "[1, 1, 1, 0]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Pop colder day.",
        "codeSnippet": "st.___();",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Warmth is coming, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I warm?\"",
        "options": [
          "Heating up!",
          "No.",
          "0"
        ],
        "correctAnswer": "Heating up!"
      }
    ]
  },
  {
    "order": 28,
    "title": "The Stock Span",
    "desc": "Consecutive days price was <= current.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Investor Bird! How many consecutive days (including today) has the price been LOWER than or equal to current? [100, 80, 60, 70, 60, 75, 85] -> [1, 1, 1, 2, 1, 4, 6]. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reverse Monotonic Stack! Pop everyone SMALLER than current. The span is `CurrentIdx - TopIdx` (or CurrentIdx + 1 if stack is empty)! 🦜\"",
        "codeSnippet": "int span = s.empty() ? i+1 : i - s.top();\ns.push(i);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Stock span of 100 on day 0?",
        "options": [
          "1",
          "0",
          "100"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match Stock logic!",
        "pairs": [
          {
            "key": "Span",
            "value": "i - s.top()"
          },
          {
            "key": "Empty Stack",
            "value": "i + 1"
          },
          {
            "key": "Stack",
            "value": "Previous Highs"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pop while previous prices are smaller or equal.",
        "codeSnippet": "while (!st.empty() && prices[st.top()] ___ currentPrice)",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N). You only need to know when the last bird BIGGER than you flew. Everything in between is yours! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Span for [10, 20, 30]?",
        "options": [
          "[1, 2, 3]",
          "[1, 1, 1]",
          "[3, 2, 1]"
        ],
        "correctAnswer": "[1, 2, 3]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Index storage.",
        "codeSnippet": "st.push(___);",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wealth of knowledge! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my span growing?\"",
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
    "title": "Validate Stack Sequences",
    "desc": "Could these push/pop sequences happen?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Tower Auditor! If I push [1,2,3,4,5], can I pop [4,5,3,2,1]? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Simulate it! For every bird pushed, check if the Top matches the next bird in the POP sequence. If yes, pop and repeat! 🦜\"",
        "codeSnippet": "for(int x : pushed) {\n  s.push(x);\n  while(!s.empty() && s.top() == popped[j]) {\n    s.pop(); j++;\n  }\n}\nreturn s.empty();"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is pushed=[1,2,3], popped=[3,2,1] valid?",
        "options": [
          "Yes",
          "No",
          "If Pico sorts it"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "match_following",
        "questionText": "Match Sequence Logic!",
        "pairs": [
          {
            "key": "Push",
            "value": "Force bird on"
          },
          {
            "key": "Pop",
            "value": "Check top == popped[j]"
          },
          {
            "key": "Valid",
            "value": "Stack is empty"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check the condition for an immediate pop.",
        "codeSnippet": "while (!st.empty() && st.top() ___ popped[j])",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). If the stack is not empty at the end, it was an impossible sequence. No cheating in the bird tower! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is pushed=[1,2,3], popped=[1,3,2] valid?",
        "options": [
          "Yes",
          "No",
          "0"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final validity check.",
        "codeSnippet": "return st.___();",
        "correctAnswer": "empty"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Law of the tower! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I legal?\"",
        "options": [
          "Law-abiding elite!",
          "No.",
          "0"
        ],
        "correctAnswer": "Law-abiding elite!"
      }
    ]
  },
  {
    "order": 30,
    "title": "Simplifying Paths",
    "desc": "Cleaning up Unix-style paths (\"/a/./b/../../c/\").",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Path Cleaner! Directions like `/home/../pico` should just be `/pico`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Split by `/`. If it's `..`, pop the stack (back up). If it's `.` or empty, skip. Else, push to stack! 🦜\"",
        "codeSnippet": "if (part == \"..\") { if(!s.empty()) s.pop(); }\nelse if (part != \".\" && part != \"\") s.push(part);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Simplified path for \"/a/./b/../../c/\"?",
        "options": [
          "/c",
          "/a/c",
          "/a/b/c"
        ],
        "correctAnswer": "/c"
      },
      {
        "type": "match_following",
        "questionText": "Match Path Terms!",
        "pairs": [
          {
            "key": "..",
            "value": "Pop Stack"
          },
          {
            "key": ".",
            "value": "Stay Put"
          },
          {
            "key": "/",
            "value": "The Separator"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Combine names from stack with this separator.",
        "codeSnippet": "result += ___ + folder;",
        "correctAnswer": "\"/\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). Stacks are the reason your operating system knows where files are hidden! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the root path (\"/\") in a stack?",
        "options": [
          "Empty stack",
          "Top node",
          "Pico’s nest"
        ],
        "correctAnswer": "Empty stack"
      },
      {
        "type": "code_fill_in",
        "questionText": "Extract folder name.",
        "codeSnippet": "string folder = st.___(); st.pop();",
        "correctAnswer": "top"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Short and sweet! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the path clear?\"",
        "options": [
          "Direct flight!",
          "No.",
          "0"
        ],
        "correctAnswer": "Direct flight!"
      }
    ]
  },
  {
    "order": 31,
    "title": "The Great Histogram",
    "desc": "Finding the largest rectangle area in a histogram.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Skyline Architect! Given heights of adjacent buildings, what is the area of the largest rectangle you can fit inside? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Monotonic Increasing Stack! When you see a building SHORTER than the top, pop and calculate area. The width is `i - stack.top - 1`. 🦜\"",
        "codeSnippet": "while(!s.empty() && heights[s.top()] >= heights[i]) {\n  long h = heights[s.pop()];\n  long w = s.empty() ? i : i - s.top() - 1;\n  maxArea = max(maxArea, h * w);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding Largest Rectangle Area?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Histogram Logic!",
        "pairs": [
          {
            "key": "Height",
            "value": "heights[popped]"
          },
          {
            "key": "Width",
            "value": "i - top - 1"
          },
          {
            "key": "Push",
            "value": "On increase"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Width if the stack is EMPTY after popping.",
        "codeSnippet": "width = s.empty() ? ___ : i - s.top() - 1;",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait! Always add a dummy building of height 0 at the end to force the stack to pop everything out! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why add a height 0 at the end?",
        "options": [
          "To flush the stack",
          "For extra area",
          "Pico likes 0"
        ],
        "correctAnswer": "To flush the stack"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update max area.",
        "codeSnippet": "maxArea = ___(maxArea, h * w);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Building big, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a skyscraper?\"",
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
    "title": "The Matrix Rectangle",
    "desc": "Finding the largest rectangle of 1s in a binary matrix.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Matrix Architecture! Find the biggest rectangle of seeds (1s) in a grid. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Convert each row into a Histogram! The height of each bar is the number of consecutive 1s above it. Then use the Histogram Logic from Unit 31 on every row! 🦜\"",
        "codeSnippet": "for(int j=0; j<cols; j++) {\n  if(matrix[i][j] == '1') heights[j]++;\n  else heights[j] = 0;\n}\nmaxA = max(maxA, largestRectangle(heights));"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Maximal Rectangle in a R x C matrix?",
        "options": [
          "O(R * C)",
          "O(R^2 * C)",
          "O(R * C^2)"
        ],
        "correctAnswer": "O(R * C)"
      },
      {
        "type": "match_following",
        "questionText": "Match Matrix Steps!",
        "pairs": [
          {
            "key": "Row Loop",
            "value": "Build Histogram"
          },
          {
            "key": "Cell == 0",
            "value": "Reset height to 0"
          },
          {
            "key": "Final step",
            "value": "Apply Unit 31"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Update height if current cell is a seed (1).",
        "codeSnippet": "heights[j] = (matrix[i][j] == '1') ? heights[j] ___ 1 : 0;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a beautiful reduction. We turned a 2D matrix problem into a 1D histogram problem. Efficiency is bird-nature! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the space complexity?",
        "options": [
          "O(C) (Number of columns)",
          "O(R*C)",
          "O(1)"
        ],
        "correctAnswer": "O(C) (Number of columns)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Row-wise processing loop.",
        "codeSnippet": "for (int i = 0; i < ___; i++)",
        "correctAnswer": "rows"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Grid of gold! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the matrix?\"",
        "options": [
          "The chosen bird!",
          "No.",
          "0"
        ],
        "correctAnswer": "The chosen bird!"
      }
    ]
  },
  {
    "order": 33,
    "title": "Rainwater (Stack Style)",
    "desc": "Calculating trapped water using a stack.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Water Collector Revisit! We used 2-pointers before, but now we use a Monotonic Decreasing Stack! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"When you see a bar HIGHER than stack.top, a valley is formed! The popped top is the floor, and the new top/current bars are the walls. 🦜\"",
        "codeSnippet": "while(!s.empty() && height[i] > height[s.top()]) {\n  int mid = s.pop();\n  if(s.empty()) break;\n  int distance = i - s.top() - 1;\n  int boundedHeight = min(height[i], height[s.top()]) - height[mid];\n  ans += distance * boundedHeight;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of stack-based trapping rain water?",
        "options": [
          "O(N)",
          "O(1)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Rain logic!",
        "pairs": [
          {
            "key": "Mid",
            "value": "The valley floor"
          },
          {
            "key": "Distance",
            "value": "i - top - 1"
          },
          {
            "key": "BoundedH",
            "value": "min(walls) - floor"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate the height of the water bounded by walls.",
        "codeSnippet": "bh = min(height[i], height[st.top()]) ___ height[mid];",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every bird knows: water fills the low nests between high trees! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if the stack is empty after the first pop?",
        "options": [
          "No left wall, cannot trap",
          "Water flows to root",
          "0"
        ],
        "correctAnswer": "No left wall, cannot trap"
      },
      {
        "type": "code_fill_in",
        "questionText": "Bounded height calculation.",
        "codeSnippet": "___(height[i], height[st.top()]) - height[mid];",
        "correctAnswer": "min"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ocean in the nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I trapped?\"",
        "options": [
          "Floating with logic!",
          "No.",
          "0"
        ],
        "correctAnswer": "Floating with logic!"
      }
    ]
  },
  {
    "order": 34,
    "title": "Minimal Number (K-Delete)",
    "desc": "Removing K digits to form the smallest possible number.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Digit Pruner! Given \"1432219\" and K=3, remove 3 birds to get the smallest number possible. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Monotonic Increasing Stack! If current digit < stack.top, POP (delete top) as long as K > 0! 🦜\"",
        "codeSnippet": "while(k > 0 && !s.empty() && s.top() > d) {\n  s.pop(); k--;\n}\ns.push(d);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Greedy choice: when should we delete a digit?",
        "options": [
          "When it is larger than its successor",
          "When it is 9",
          "When K=1"
        ],
        "correctAnswer": "When it is larger than its successor"
      },
      {
        "type": "match_following",
        "questionText": "Match Pruning Logic!",
        "pairs": [
          {
            "key": "K > 0",
            "value": "Quotas left"
          },
          {
            "key": "Stack top > d",
            "value": "Discard top"
          },
          {
            "key": "Remaining K",
            "value": "Pop from back"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Constraint for popping the stack.",
        "codeSnippet": "while (k > 0 && !st.empty() && st.top() ___ digit)",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). Don't forget to handle leading zeros like \"0200\" -> \"200\"! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of \"10200\" removing 1 digit?",
        "options": [
          "\"0200\" (or \"200\")",
          "\"1200\"",
          "\"1020\""
        ],
        "correctAnswer": "\"0200\" (or \"200\")"
      },
      {
        "type": "code_fill_in",
        "questionText": "Remove trailing digits if K is still positive.",
        "codeSnippet": "while(k--) st.___();",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Small is beautiful! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the smallest?\"",
        "options": [
          "Optimal! SQUAWK!",
          "No.",
          "0"
        ],
        "correctAnswer": "Optimal! SQUAWK!"
      }
    ]
  },
  {
    "order": 35,
    "title": "The Decoding Quest",
    "desc": "Decoding nested strings like \"3[a2[c]]\" into \"accaccacc\".",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Secret Code! Brackets `[]` repeat the birds inside. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use TWO stacks: one for Counts, one for Strings! When you see `[`, push current state. When `]`, pop and multiply! 🦜\"",
        "codeSnippet": "if (isdigit(c)) num = num * 10 + (c - '0');\nelse if (c == '[') { countS.push(num); stringS.push(curr); ... }\nelse if (c == ']') { int k = countS.pop(); string prev = stringS.pop(); ... }"
      },
      {
        "type": "multiple_choice",
        "questionText": "Decoded \"2[abc]3[cd]ef\"?",
        "options": [
          "\"abcabccdcdcdcdef\"",
          "\"abcabcde\"",
          "\"abcd\""
        ],
        "correctAnswer": "\"abcabccdcdcdcdef\""
      },
      {
        "type": "match_following",
        "questionText": "Match Decoder Stacks!",
        "pairs": [
          {
            "key": "Count Stack",
            "value": "Number of repeats"
          },
          {
            "key": "String Stack",
            "value": "Previous context"
          },
          {
            "key": "Current String",
            "value": "The worker"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Multiply the string result `k` times.",
        "codeSnippet": "for(int i=0; i<k; i++) temp ___ currStr;",
        "correctAnswer": "+="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(Length of Result). Stacks are perfect for handling nested structures like a bird inside an egg inside a nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How to handle nested \"2[a3[b]]\"?",
        "options": [
          "Stacks handle depth automatically",
          "Need recursion",
          "0"
        ],
        "correctAnswer": "Stacks handle depth automatically"
      },
      {
        "type": "code_fill_in",
        "questionText": "Reset number after bracket.",
        "codeSnippet": "if (c == '[') { num = ___; }",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Cracking the shell! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did you decode it?\"",
        "options": [
          "Crystal clear!",
          "No.",
          "0"
        ],
        "correctAnswer": "Crystal clear!"
      }
    ]
  },
  {
    "order": 36,
    "title": "Asteroid Collision",
    "desc": "Simulating cosmic crashes using a stack.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Space Flight! Birds flying RIGHT (+) and birds flying LEFT (-). If they meet, they collide! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a stack to track birds moving Right. If a Left bird (-) arrives, it pops (destroys) all the Right birds it is bigger than until it explodes or clears the path! 🦜\"",
        "codeSnippet": "while(!s.empty() && s.top() > 0 && s.top() < abs(ast)) s.pop();\nif(!s.empty() && s.top() == abs(ast)) s.pop(); // Both destroy"
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for asteroids [5, 10, -5]?",
        "options": [
          "[5, 10]",
          "[5, -5]",
          "[]"
        ],
        "correctAnswer": "[5, 10]"
      },
      {
        "type": "match_following",
        "questionText": "Match Space Rules!",
        "pairs": [
          {
            "key": "Same sign",
            "value": "No collision"
          },
          {
            "key": "Top < abs(-val)",
            "value": "Right bird destroyed"
          },
          {
            "key": "Top == abs(-val)",
            "value": "Both destroyed"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for a Right(+) bird on top meeting a Left(-) bird.",
        "codeSnippet": "if (st.top() > 0 && asteroid ___ 0)",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N). Space is vast, but linear collisions are predictable! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for [8, -8]?",
        "options": [
          "[]",
          "[8]",
          "[-8]"
        ],
        "correctAnswer": "[]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check for remaining asteroids.",
        "codeSnippet": "while (!st.empty()) ans[pos--] = st.___();",
        "correctAnswer": "pop"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dust in the wind! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Did I survive the crash?\"",
        "options": [
          "Floating strong!",
          "No.",
          "0"
        ],
        "correctAnswer": "Floating strong!"
      }
    ]
  },
  {
    "order": 37,
    "title": "The Permutation Hunt (NGE III)",
    "desc": "Finding the next greater element among digits (Next Permutation).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Number Rearranger! What is the smallest increase to 12385? 12538! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1: Scan RIGHT to LEFT for the first drop `nums[i] < nums[i+1]`. 2: Find first digit on right bigger than nums[i]. 3: Swap. 4: Reverse the right side! 🦜\"",
        "codeSnippet": "int i = n-2; while(i >= 0 && nums[i] >= nums[i+1]) i--;\nif(i >= 0) {\n  int j = n-1; while(nums[j] <= nums[i]) j--;\n  swap(nums[i], nums[j]);\n}\nreverse(nums.begin()+i+1, nums.end());"
      },
      {
        "type": "multiple_choice",
        "questionText": "First step of Next Permutation?",
        "options": [
          "Find first decreasing element from right",
          "Sort the whole thing",
          "Swap 0 and N"
        ],
        "correctAnswer": "Find first decreasing element from right"
      },
      {
        "type": "match_following",
        "questionText": "Match Permutation phases!",
        "pairs": [
          {
            "key": "Search",
            "value": "Find the Pivot"
          },
          {
            "key": "Swap",
            "value": "Next larger digit"
          },
          {
            "key": "Reverse",
            "value": "Smallest tail"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Find pivot `i` where nums[i] < nums[i+1].",
        "codeSnippet": "while (i >= 0 && nums[i] ___ nums[i+1]) i--;",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N). This is how algorithms find lexicographical order. Step by step, the flock rearranges! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Next permutation for [3, 2, 1]?",
        "options": [
          "[1, 2, 3]",
          "[3, 1, 2]",
          "None"
        ],
        "correctAnswer": "[1, 2, 3]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Reverse the suffix.",
        "codeSnippet": "___(nums.begin() + i + 1, nums.end());",
        "correctAnswer": "reverse"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ordered and ready! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the next best?\"",
        "options": [
          "Optimal successor!",
          "No.",
          "0"
        ],
        "correctAnswer": "Optimal successor!"
      }
    ]
  },
  {
    "order": 38,
    "title": "Score of Parentheses",
    "desc": "Calculating nested score: () is 1, (A) is 2A, AB is A+B.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Point-Scoring! `()` is 1 point. `(())` is 2 points. `()()` is 2 points. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a stack to keep current level points. When you see `(`, push 0. When `]`, compute `max(2*top, 1)` and add to the previous level! 🦜\"",
        "codeSnippet": "if (c == '(') s.push(0);\nelse {\n  int v = s.pop();\n  int w = s.pop();\n  s.push(w + max(2 * v, 1));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Score for \"(()())\"?",
        "options": [
          "4",
          "3",
          "2"
        ],
        "correctAnswer": "4",
        "explanation": "(1+1)*2 = 4"
      },
      {
        "type": "match_following",
        "questionText": "Match Score logic!",
        "pairs": [
          {
            "key": "(",
            "value": "Push current score"
          },
          {
            "key": ")",
            "value": "Combine with inner"
          },
          {
            "key": "AB",
            "value": "A + B"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Contribution of a basic `()` pair.",
        "codeSnippet": "points += max(2 * inner, ___ );",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Alternative: Just count the depth of every leaf `()`. Complexity O(N). Linear flight score! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Score for \"((()))\"?",
        "options": [
          "4",
          "3",
          "6"
        ],
        "correctAnswer": "4"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update score for the nested closing.",
        "codeSnippet": "st.push(levelPrev + ___(2 * v, 1));",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Winning the nesting game! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"What is my score?\"",
        "options": [
          "Off the charts!",
          "No.",
          "0"
        ],
        "correctAnswer": "Off the charts!"
      }
    ]
  },
  {
    "order": 39,
    "title": "Minimum Add for Valid",
    "desc": "How many brackets must you add to make history valid?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fixing the Chain! For `()))((`, how many birds are missing their partners? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep a BALANCE counter. `(` means +1, `)` means -1. If balance < 0, you need a leading `(`. At the end, if balance > 0, you need ending `)`. 🦜\"",
        "codeSnippet": "for(char c : s) {\n  bal += (c == '(' ? 1 : -1);\n  if(bal == -1) { res++; bal = 0; }\n}\nreturn res + bal;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Missing for \"()))\"?",
        "options": [
          "2 (\"(())\")",
          "1",
          "3"
        ],
        "correctAnswer": "2 (\"(())\")"
      },
      {
        "type": "match_following",
        "questionText": "Match Repair Logic!",
        "pairs": [
          {
            "key": "bal < 0",
            "value": "Need ("
          },
          {
            "key": "bal > 0",
            "value": "Need )"
          },
          {
            "key": "Stack alternative",
            "value": "Size at end"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Increment needed count if more closers than openers.",
        "codeSnippet": "if (balance ___ 0) { count++; balance = 0; }",
        "correctAnswer": "<"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) time and O(1) space if you use a counter. A stack also works if you have memory to burn! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for \"(((\"?",
        "options": [
          "3",
          "0",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final correction sum.",
        "codeSnippet": "return answer + ___;",
        "correctAnswer": "balance"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Balanced life, healthy flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I complete?\"",
        "options": [
          "Finally whole!",
          "No.",
          "0"
        ],
        "correctAnswer": "Finally whole!"
      }
    ]
  },
  {
    "order": 40,
    "title": "Stage 2 Graduation",
    "desc": "Intermediate Stack Mastery Complete.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 2 COMPLETE! You have conquered the Monotonic Towers, the Histogram Cities, and the Rain-Valleys. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Evaluating expressions and simulating Asteroid Crashes. You are truly ELITE! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Monotonic Stack NGE complexity?",
        "options": [
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Maximal Rectangle Histogram height logic?",
        "options": [
          "h[j] = h[j]+1 if 1 else 0",
          "h[j] = h[j]+1"
        ],
        "correctAnswer": "h[j] = h[j]+1 if 1 else 0"
      },
      {
        "type": "multiple_choice",
        "questionText": "Rain water stack pop condition?",
        "options": [
          "current > top",
          "current < top"
        ],
        "correctAnswer": "current > top"
      },
      {
        "type": "multiple_choice",
        "questionText": "Decode string stack count?",
        "options": [
          "Use two stacks",
          "Use one list"
        ],
        "correctAnswer": "Use two stacks"
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum add for valid parentheses space?",
        "options": [
          "O(1) with counter",
          "O(N) only"
        ],
        "correctAnswer": "O(1) with counter"
      },
      {
        "type": "match_following",
        "questionText": "Final Intermediate Match!",
        "pairs": [
          {
            "key": "Pico",
            "value": "Salutes!"
          },
          {
            "key": "Mastery",
            "value": "Achieved!"
          },
          {
            "key": "God-Mode",
            "value": "Awaits!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next, we face the Master Stage: Sliding Window Max, The Celebrity Trap, and the Largest Area under any Skyline! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for the peak?\"",
        "options": [
          "BEYOND AND UP!",
          "Wait...",
          "0"
        ],
        "correctAnswer": "BEYOND AND UP!"
      }
    ]
  }
];

module.exports = stage2;