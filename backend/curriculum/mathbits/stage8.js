const stage8 = [
  {
    "order": 71,
    "title": "IEEE 754 Floating Point",
    "desc": "How decimals live in a binary world.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Decimal Deep Dive! Computers represent decimals using Scientific Notation in binary. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"IEEE 754: A 32-bit 'float' has 1 bit for SIGN, 8 bits for EXPONENT, and 23 bits for MANTISSA. 🦜\"",
        "codeSnippet": "Value = (-1)^S * (1 + Mantissa) * 2^(Exponent - Bias)"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many bits are in a 'double' precision float?",
        "options": [
          "64",
          "32",
          "16"
        ],
        "correctAnswer": "64"
      },
      {
        "type": "match_following",
        "questionText": "Match the Float Parts!",
        "pairs": [
          {
            "key": "Sign",
            "value": "Positive or Negative"
          },
          {
            "key": "Mantissa",
            "value": "Precision (The digits)"
          },
          {
            "key": "Exponent",
            "value": "Scale (Power of 2)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if sign bit is 1 (Negative).",
        "codeSnippet": "if (bits & (1 << ___ )) return -1.0;",
        "correctAnswer": "31"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Not every decimal can be represented perfectly! 1/10 (0.1) is a repeating fraction in binary, leading to errors! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result of (0.1 + 0.2) in many languages?",
        "options": [
          "0.30000000000000004",
          "0.3",
          "0.333"
        ],
        "correctAnswer": "0.30000000000000004"
      },
      {
        "type": "code_fill_in",
        "questionText": "Float standard.",
        "codeSnippet": "IEEE ___",
        "correctAnswer": "754"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Precision matters! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Double or Float?\"",
        "options": [
          "Double (More precision!)",
          "Float.",
          "0"
        ],
        "correctAnswer": "Double (More precision!)"
      }
    ]
  },
  {
    "order": 72,
    "title": "Precision & Epsilons",
    "desc": "Comparing floating birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Never use `==` for floats! Because of tiny errors, two numbers that should be equal might differ by 0.0000001. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Instead, check if the difference is smaller than a tiny constant: EPSILON (ε). 🦜\"",
        "codeSnippet": "const double EPS = 1e-9;\nif (abs(a - b) < EPS) // Equal!"
      },
      {
        "type": "multiple_choice",
        "questionText": "Correct way to compare double A and B?",
        "options": [
          "abs(A - B) < 1e-9",
          "A == B",
          "A - B == 0"
        ],
        "correctAnswer": "abs(A - B) < 1e-9"
      },
      {
        "type": "match_following",
        "questionText": "Match the Errors!",
        "pairs": [
          {
            "key": "Precision",
            "value": "Rounding digits"
          },
          {
            "key": "Underflow",
            "value": "Too small for bits"
          },
          {
            "key": "Overflow",
            "value": "Too large (Infinity)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Common epsilon value.",
        "codeSnippet": "EPS = 1e- ___ ;",
        "correctAnswer": "9"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"When accumulating many small floats (like 0.1), the error grows! This is 'Catastrophic Cancellation'. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How to avoid precision loss in sums?",
        "options": [
          "Kahan Summation Algorithm",
          "Just use Integers",
          "Hope for the best"
        ],
        "correctAnswer": "Kahan Summation Algorithm"
      },
      {
        "type": "code_fill_in",
        "questionText": "Greek letter for error.",
        "codeSnippet": "___ (ε)",
        "correctAnswer": "Epsilon"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep it close! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it < EPS?\"",
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
    "title": "Bisection Method",
    "desc": "Binary search for numbers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Finding the zero! If a function f(x) changes sign between A and B, there must be a root (f(x)=0) in between! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep halving the interval! If f(mid) * f(A) < 0, the root is in [A, mid]. Otherwise, [mid, B]. 🦜\"",
        "codeSnippet": "while (B - A > EPS) {\n  mid = (A + B) / 2;\n  if (f(A) * f(mid) < 0) B = mid;\n  else A = mid;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many iterations for 10^-7 precision in [0, 1] range?",
        "options": [
          "~24 (2^24 ≈ 1.6e7)",
          "10",
          "100"
        ],
        "correctAnswer": "~24 (2^24 ≈ 1.6e7)"
      },
      {
        "type": "match_following",
        "questionText": "Match the States!",
        "pairs": [
          {
            "key": "f(A)*f(mid)<0",
            "value": "Opposite signs (root here)"
          },
          {
            "key": "Iterations",
            "value": "log2(range / eps)"
          },
          {
            "key": "Convergence",
            "value": "Linear"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Midpoint calculation.",
        "codeSnippet": "mid = (low + high) / ___ ;",
        "correctAnswer": "2.0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bisection is reliable but slow. It works as long as the function is continuous! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can Bisection find roots of a discontinuous function?",
        "options": [
          "No (Might fall into a gap)",
          "Yes",
          "Only in binary"
        ],
        "correctAnswer": "No (Might fall into a gap)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Interval action.",
        "codeSnippet": "B ___",
        "correctAnswer": "isection"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Narrow it down! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it 0?\"",
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
    "order": 74,
    "title": "Newton-Raphson",
    "desc": "The tangent flight.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fast Landing! Newton's method uses the TANGENT of a function to find the root much faster than Bisection. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Formula: x_next = x - f(x) / f'(x). It doubles the precision digits at every step! 🦜\"",
        "codeSnippet": "x = x - f(x) / df(x);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of convergence for Newton-Raphson?",
        "options": [
          "Quadratic (Digits double)",
          "Linear",
          "O(1)"
        ],
        "correctAnswer": "Quadratic (Digits double)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Newton!",
        "pairs": [
          {
            "key": "f(x)",
            "value": "Current height"
          },
          {
            "key": "f'(x)",
            "value": "Slope (Derivative)"
          },
          {
            "key": "Problem",
            "value": "Can overshoot if slope is 0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Numerator in Newton's update.",
        "codeSnippet": "next = x - ___ / df(x);",
        "correctAnswer": "f(x)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Warning! If the slope is near zero, the tangent shoots the bird into infinity! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is needed to use Newton-Raphson?",
        "options": [
          "The function and its derivative",
          "Just the interval",
          "A binary number"
        ],
        "correctAnswer": "The function and its derivative"
      },
      {
        "type": "code_fill_in",
        "questionText": "Mathematical tool.",
        "codeSnippet": "D ___ (f')",
        "correctAnswer": "erivative"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Dive to 0! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Converged?\"",
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
    "title": "Numerical Integration",
    "desc": "Area under the wings.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Area Mapping! How to find the area under a curve f(x) if you can't integrate it analytically? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Simpson's Rule! Approximates the curve using Parabolas in small segments. 🦜\"",
        "codeSnippet": "Area = (h/3) * (f(x0) + 4f(x1) + f(x2))"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Integration represent geometrically?",
        "options": [
          "Area under the curve",
          "Slope of the curve",
          "Length of the curve"
        ],
        "correctAnswer": "Area under the curve"
      },
      {
        "type": "match_following",
        "questionText": "Match the Integration!",
        "pairs": [
          {
            "key": "Trapezoidal",
            "value": "Area of strips"
          },
          {
            "key": "Simpson's",
            "value": "Parabolic fit"
          },
          {
            "key": "Infinite",
            "value": "Limit as width -> 0"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Width of each integration strip.",
        "codeSnippet": "h = (B - A) / ___ ;",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Increasing the number of 'strips' (n) makes the estimate more accurate but takes more time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to get Area with N strips?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Method name.",
        "codeSnippet": "S ___ 's Rule",
        "correctAnswer": "impson"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fill the space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Area found?\"",
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
    "order": 76,
    "title": "The Quake Trick",
    "desc": "Fast Inverse Square Root.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Forbidden Magic! In 1999, Quake III Arena used a bizarre constant `0x5f3759df` to calculate `1/sqrt(x)` at light speed! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It treats the float как integer bits, shifts right, and subtracts from the magic constant to get a great first guess for Newton's method! 🦜\"",
        "codeSnippet": "i = 0x5f3759df - ( i >> 1 );"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why calculate 1/sqrt(x) fast?",
        "options": [
          "Normalizing vectors (3D Lighting)",
          "Sorting pixels",
          "Adding numbers"
        ],
        "correctAnswer": "Normalizing vectors (3D Lighting)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Quake!",
        "pairs": [
          {
            "key": "0x5f3759df",
            "value": "The Magic Constant"
          },
          {
            "key": "Type Pun",
            "value": "float to long"
          },
          {
            "key": "Speed",
            "value": "4x faster than sqrt"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Newton's iteration in the code.",
        "codeSnippet": "y = y * ( 1.5f - ( x2 * y * ___ ) );",
        "correctAnswer": "y"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This was a legendary hack that showed how understanding bit-level float storage leads to elite performance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is this trick still needed today?",
        "options": [
          "No (Modern CPUs have `rsqrt` instruction)",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No (Modern CPUs have `rsqrt` instruction)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Magic number.",
        "codeSnippet": "0x5f37 ___",
        "correctAnswer": "59df"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Bitwise bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Magic works?\"",
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
    "order": 77,
    "title": "Sparse Matrices",
    "desc": "Empty forest efficiency.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Empty nests! A Sparse Matrix is one where most elements are ZERO. Storing it as a full grid is a waste of memory! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We store only non-zero values using (row, col, value) triples or 'Compressed Sparse Row' (CSR). 🦜\"",
        "codeSnippet": "struct Entry { int r, c; double val; };"
      },
      {
        "type": "multiple_choice",
        "questionText": "Advantage of Sparse storage?",
        "options": [
          "Save memory and speed up multiplication",
          "Nicer formatting",
          "Random access"
        ],
        "correctAnswer": "Save memory and speed up multiplication"
      },
      {
        "type": "match_following",
        "questionText": "Match Sparse Formats!",
        "pairs": [
          {
            "key": "COO",
            "value": "Coordinate List (Triples)"
          },
          {
            "key": "CSR",
            "value": "Row Pointers + Col Indices"
          },
          {
            "key": "Dense",
            "value": "Normal 2D array"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to store an element in a sparse structure.",
        "codeSnippet": "if (abs(val) > ___ ) store(r, c, val);",
        "correctAnswer": "EPS"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Many real-world graphs (like the social web) are sparse. Matrix operations become O(Edges) instead of O(Nodes^2)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is access O(1) in a Sparse Matrix?",
        "options": [
          "No (Usually O(log non-zeros))",
          "Yes",
          "0"
        ],
        "correctAnswer": "No (Usually O(log non-zeros))"
      },
      {
        "type": "code_fill_in",
        "questionText": "Empty matrix type.",
        "codeSnippet": "S ___ Matrix",
        "correctAnswer": "parse"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Waste no space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it mostly 0?\"",
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
    "order": 78,
    "title": "Monte Carlo",
    "desc": "Randomness for results.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Random Gamble! Monte Carlo methods use repeated random sampling to find answers (like π). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To find π: Throw random darts at a 1x1 square. The fraction that land inside the quarter-circle is π/4! 🦜\"",
        "codeSnippet": "hits = 0;\nfor (i=0; i<N; i++) {\n  if (x*x + y*y <= 1) hits++;\n}\npi = 4.0 * hits / N;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens as N (samples) increases?",
        "options": [
          "Result becomes more accurate",
          "Result becomes smaller",
          "Nothing"
        ],
        "correctAnswer": "Result becomes more accurate"
      },
      {
        "type": "match_following",
        "questionText": "Match the Monte!",
        "pairs": [
          {
            "key": "Inside Circle",
            "value": "x^2 + y^2 ≤ r^2"
          },
          {
            "key": "N",
            "value": "Sample size"
          },
          {
            "key": "Use",
            "value": "Complex multi-D integrals"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Probability check in code.",
        "codeSnippet": "if (dist_sq ___ radius_sq) inside++;",
        "correctAnswer": "<="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Monte Carlo is amazing for 'Intractable' problems where regular math is too hard. Just keep rolling the dice! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Monte Carlo deterministic?",
        "options": [
          "No (It uses random numbers)",
          "Yes",
          "Only in binary"
        ],
        "correctAnswer": "No (It uses random numbers)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Algorithm name.",
        "codeSnippet": "Monte ___",
        "correctAnswer": "Carlo"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The lucky bird! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it random?\"",
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
    "title": "Simulated Annealing",
    "desc": "Cooling down to a solution.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hot and Cold! A meta-heuristic based on how metal cools. We start 'hot' (accepting bad moves) to escape local pits. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Slowly 'cool down'. As temperature T drops, we only accept moves that IMPROVE the result. 🦜\"",
        "codeSnippet": "if (deltaE < 0 || exp(-deltaE / T) > rand()) accept(move);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Purpose of accepting 'bad' moves when hot?",
        "options": [
          "Escaping Local Optima (Pits)",
          "To be random",
          "Faster speed"
        ],
        "correctAnswer": "Escaping Local Optima (Pits)"
      },
      {
        "type": "match_following",
        "questionText": "Match SA Logic!",
        "pairs": [
          {
            "key": "T",
            "value": "Temperature"
          },
          {
            "key": "e^(-ΔE / T)",
            "value": "Acceptance Probability"
          },
          {
            "key": "Cooling",
            "value": "Reducing T over time"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Cooling function.",
        "codeSnippet": "T = T * ___ ;",
        "correctAnswer": "0.99"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Used to solve 'Traveling Salesman' and other monster NP-hard problems with 'Good enough' results! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens when T reaches 0?",
        "options": [
          "Algorithm stops (Frozen)",
          "Becomes random again",
          "0"
        ],
        "correctAnswer": "Algorithm stops (Frozen)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Technique name.",
        "codeSnippet": "Simulated ___",
        "correctAnswer": "Annealing"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Steady state! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Cooling down?\"",
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
    "order": 80,
    "title": "Master Point (Mathbits 8)",
    "desc": "Numerical navigator status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 8 COMPLETE! You've mastered Epsilon safety, Newton's speed, and the Monte Carlo gambit. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use Epsilon (1e-9) in float comparison?",
        "options": [
          "To handle precision errors",
          "To make it faster",
          "To count better"
        ],
        "correctAnswer": "To handle precision errors"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which algorithm finds roots with tangents?",
        "options": [
          "Newton-Raphson",
          "Bisection",
          "Monte Carlo"
        ],
        "correctAnswer": "Newton-Raphson"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Numerical Navigator! In Stage 9, we soar into Game Theory: Nim, Sprague-Grundy, and Winning Strategies! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 8",
            "value": "Numerical Navigator"
          },
          {
            "key": "Stage 9",
            "value": "Strategist Scout"
          },
          {
            "key": "Status",
            "value": "Binary-Precision"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Numerical Points.",
        "codeSnippet": "8 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Calculate with precision! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Games?",
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
        "questionText": "Final Float?",
        "options": [
          "0.1 + 0.2",
          "1.0",
          "Done."
        ],
        "correctAnswer": "0.1 + 0.2"
      }
    ]
  }
];

module.exports = stage8;
