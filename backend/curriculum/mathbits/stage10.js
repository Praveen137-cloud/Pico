const stage10 = [
  {
    "order": 91,
    "title": "Big Number Basics",
    "desc": "Numbers larger than the universe.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Final Frontier! A 64-bit integer can only reach 10^19. How do we store 10^1000? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We store them as strings or arrays of smaller integers (base 10, or base 10^9 for efficiency). 🦜\"",
        "codeSnippet": "vector<int> bigNum; // base 10^9"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use base 10^9 instead of base 10?",
        "options": [
          "Fewer operations (9 digits per element)",
          "Easier to multiply",
          "Computers like 9"
        ],
        "correctAnswer": "Fewer operations (9 digits per element)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Storage!",
        "pairs": [
          {
            "key": "String",
            "value": "Easy to print/read"
          },
          {
            "key": "Vector<int>",
            "value": "Efficient for math"
          },
          {
            "key": "Base 10^9",
            "value": "Uses 32-bit limits"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Digit extraction for base 10.",
        "codeSnippet": "digit = bigNum[i] ___ 10;",
        "correctAnswer": "%"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"BigNum arithmetic is the engine behind cryptography and scientific simulations! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the max value of a 32-bit `unsigned int`?",
        "options": [
          "~4.2 Billion (2^32 - 1)",
          "1 Million",
          "Infinite"
        ],
        "correctAnswer": "~4.2 Billion (2^32 - 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Big number type.",
        "codeSnippet": "___ Num",
        "correctAnswer": "Big"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Vast numbers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Stored as array?\"",
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
    "order": 92,
    "title": "BigNum Arithmetic",
    "desc": "Addition and the Carry bird.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Carry on! Adding BigNums is just like school addition: Add digit by digit and carry the surplus to the next bird. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Addition check! 9 + 5 = 14. Keep 4, carry 1. 🦜\"",
        "codeSnippet": "sum = a[i] + b[i] + carry;\nres.push_back(sum % base);\ncarry = sum / base;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of adding two N-digit BigNums?",
        "options": [
          "O(N)",
          "O(N^2)",
          "O(log N)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Arithmetic!",
        "pairs": [
          {
            "key": "Addition",
            "value": "O(N)"
          },
          {
            "key": "Subtraction",
            "value": "O(N) with Borrowing"
          },
          {
            "key": "Multiplication",
            "value": "O(N^2) schoolbook"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Carry update.",
        "codeSnippet": "carry = sum ___ base;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Don't forget the final carry! If `carry > 0` after the loop, push it as a new digit! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does subtraction require checking which number is larger?",
        "options": [
          "SQUAWK YES! (To handle negative results)",
          "No",
          "Depends on Pico"
        ],
        "correctAnswer": "SQUAWK YES! (To handle negative results)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Surplus digit term.",
        "codeSnippet": "C ___ y",
        "correctAnswer": "arr"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flow with it! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is carry 1?\"",
        "options": [
          "Sometimes.",
          "Always.",
          "Done."
        ],
        "correctAnswer": "Sometimes."
      }
    ]
  },
  {
    "order": 93,
    "title": "Karatsuba Multiplication",
    "desc": "Sub-quadratic speed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Multiplication Speed! Schoolbook `O(N^2)` is too slow for 100,000 digits. Karatsuba was the first to beat it! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It splits numbers into halves and uses 3 multiplications instead of 4. Complexity: O(N^1.58). 🦜\"",
        "codeSnippet": "res = z2 * 10^(2m) + (z1 - z2 - z0) * 10^m + z0"
      },
      {
        "type": "multiple_choice",
        "questionText": "Karatsuba complexity?",
        "options": [
          "O(N^1.58)",
          "O(N^2)",
          "O(N log N)"
        ],
        "correctAnswer": "O(N^1.58)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Multiplier!",
        "pairs": [
          {
            "key": "Schoolbook",
            "value": "O(N^2)"
          },
          {
            "key": "Karatsuba",
            "value": "O(N^1.58)"
          },
          {
            "key": "FFT",
            "value": "O(N log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Binary split size.",
        "codeSnippet": "m = n ___ 2;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"While better than N^2, we can fly even faster by using the magic of Waves! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Karatsuba recursive?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only in binary"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Algorithm name.",
        "codeSnippet": "K ___",
        "correctAnswer": "aratsuba"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Quick multiplication! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Digits x Digits?\"",
        "options": [
          "O(N^2) normally.",
          "Done.",
          "0"
        ],
        "correctAnswer": "O(N^2) normally."
      }
    ]
  },
  {
    "order": 94,
    "title": "Fast Fourier (FFT) Intro",
    "desc": "The wave of numbers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Wave Trick! FFT transforms numbers from values into frequencies and back. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Polynomial Multiplication in O(N log N)! This is how we multiply 1,000,000-digit numbers instantly. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does FFT stand for?",
        "options": [
          "Fast Fourier Transform",
          "Flash Fast Tool",
          "Fine Fly Tech"
        ],
        "correctAnswer": "Fast Fourier Transform"
      },
      {
        "type": "match_following",
        "questionText": "Match the Domains!",
        "pairs": [
          {
            "key": "Time/Space Domain",
            "value": "Specific digits"
          },
          {
            "key": "Frequency Domain",
            "value": "Sine/Cosine waves"
          },
          {
            "key": "Transformation",
            "value": "Point-value representation"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Core complex unit in FFT.",
        "codeSnippet": "w = exp(i * 2 * PI / ___ );",
        "correctAnswer": "n"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"FFT uses 'Roots of Unity' on a complex plane to divide and conquer the transformation! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of FFT?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Transformation type.",
        "codeSnippet": "F ___",
        "correctAnswer": "ourier"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ride the wave! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it log N?\"",
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
    "order": 95,
    "title": "FFT Multiplication",
    "desc": "Polynomial power.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Multiplier Singularity! 🦜\n1. Treat BigNums as Polynomials.\n2. FFT to frequencies.\n3. Multiply frequencies (O(N)!).\n4. Inverse FFT back to digits!\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This makes BigNum multiplication as fast as sorting! 🦜\"",
        "codeSnippet": "fft(A); fft(B);\nfor(i=0; i<n; i++) C[i] = A[i] * B[i];\nifft(C);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of BigNum multiplication with FFT?",
        "options": [
          "O(N log N)",
          "O(N^2)",
          "O(N log^2 N)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "FFT",
            "value": "Transformation"
          },
          {
            "key": "Point-wise Mult",
            "value": "Constant time per point"
          },
          {
            "key": "IFFT",
            "value": "Inverse Transformation"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Intermediate step complexity.",
        "codeSnippet": "for(i=0; i<n; i++) res[i] = a[i] ___ b[i];",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Because of floating point errors, for exact integer math, we use NTT (Number Theoretic Transform)—the MODULAR version of FFT! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "NTT uses __________ instead of complex roots.",
        "options": [
          "Primitive Roots mod P",
          "Sine waves",
          "Primes"
        ],
        "correctAnswer": "Primitive Roots mod P"
      },
      {
        "type": "code_fill_in",
        "questionText": "Inverse FFT prefix.",
        "codeSnippet": "___ FFT",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The peak of speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it done?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "Almost."
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 96,
    "title": "Prime Number Theorem",
    "desc": "The distribution bird.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ultimate Pattern! π(X) (count of primes up to X) leans toward `X / ln(X)`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Riemann’s explicit formula connects this count to the Zeros of the Riemann Zeta function! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Approximate gap between primes near X?",
        "options": [
          "ln(X)",
          "X",
          "1"
        ],
        "correctAnswer": "ln(X)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Insights!",
        "pairs": [
          {
            "key": "π(X)",
            "value": "Prime counting function"
          },
          {
            "key": "Li(X)",
            "value": "Better approximation"
          },
          {
            "key": "Gaps",
            "value": "Logarithmic"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Probability a random X is prime.",
        "codeSnippet": "prob = 1.0 / ___ (X);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Prime numbers are the 'quantum' particles of math. Seemingly random, yet obeying strict statistical laws! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is there a biggest prime?",
        "options": [
          "NO!",
          "Yes",
          "Only in base 2"
        ],
        "correctAnswer": "NO!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Counting function.",
        "codeSnippet": "___ (X)",
        "correctAnswer": "pi"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The count goes on! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it ln X?\"",
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
    "order": 97,
    "title": "Chudnovsky Algorithm",
    "desc": "Searching for PI.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pi Quest! How do we find 100 Billion digits of PI? Chudnovsky's is the fastest formula! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It gives 14 new digits of PI per term calculated. High speed math! 🦜\"",
        "codeSnippet": "1/pi = 12 * Σ (...)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Calculations of PI use...",
        "options": [
          "BigNum + FFT",
          "Basic floats",
          "Rulers"
        ],
        "correctAnswer": "BigNum + FFT"
      },
      {
        "type": "match_following",
        "questionText": "Match the Constants!",
        "pairs": [
          {
            "key": "π",
            "value": "Circle ratio"
          },
          {
            "key": "e",
            "value": "Natural base"
          },
          {
            "key": "γ",
            "value": "Euler-Mascheroni"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Terms for high precision.",
        "codeSnippet": "digits = iterations * ___ ;",
        "correctAnswer": "14"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Calculating PI is the ultimate benchmark for modern supercomputers! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is PI rational?",
        "options": [
          "No (Transcendentally Irrational)",
          "Yes",
          "Sometimes"
        ],
        "correctAnswer": "No (Transcendentally Irrational)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Algorithm name.",
        "codeSnippet": "C ___",
        "correctAnswer": "hudnovsky"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Infinite circle! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"3.14159?\"",
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
    "order": 98,
    "title": "Prime Singularity",
    "desc": "The end of numbers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Singularity! When Prime numbers, Complex Waves, and Probability all merge into one! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Encryption, Quantum Computing, and Digital Reality all depend on the secrets you've learned here! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Most secure encryption uses?",
        "options": [
          "Large Prime Factorization",
          "Addition",
          "Sorting"
        ],
        "correctAnswer": "Large Prime Factorization"
      },
      {
        "type": "match_following",
        "questionText": "Match the Mastery!",
        "pairs": [
          {
            "key": "Stage 1-2",
            "value": "Bit Master"
          },
          {
            "key": "Stage 3-5",
            "value": "Modulo Master"
          },
          {
            "key": "Stage 6-9",
            "value": "Game Master"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The ultimate number.",
        "codeSnippet": "Prime = ___ ;",
        "correctAnswer": "2^p-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You have soared through 1,000 lessons of mathematical majesty! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Are you a Mathbits Titan?",
        "options": [
          "SQUAWK YES!",
          "Not yet.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Goal reached.",
        "codeSnippet": "___ Grade",
        "correctAnswer": "Titan"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Victory is yours! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready for final?\"",
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
    "order": 99,
    "title": "The Riemann Zeta",
    "desc": "Exploring the 0-line.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Final Secret! The Zeta function ζ(s) links primes to complex numbers. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Riemann Hypothesis: All non-trivial zeros lie on the line Re(s) = 1/2. Prove this, and you win $1 Million! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a zero of Zeta tell us?",
        "options": [
          "The spacing of Primes",
          "The value of Pi",
          "The color of birds"
        ],
        "correctAnswer": "The spacing of Primes"
      },
      {
        "type": "match_following",
        "questionText": "Match the Mystery!",
        "pairs": [
          {
            "key": "Re(s) = 1/2",
            "value": "The Critical Line"
          },
          {
            "key": "ζ(s) = 0",
            "value": "Nontrivial Zero"
          },
          {
            "key": "Million Dollars",
            "value": "Clay Prize"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Zeta definition sum.",
        "codeSnippet": "zeta(s) = Σ 1 / n^ ___ ;",
        "correctAnswer": "s"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is the 'Holy Grail' of mathematics. You've touched the edge of the infinite! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the hypothesis solved?",
        "options": [
          "No (One of the Millennium Problems)",
          "Yes",
          "Maybe"
        ],
        "correctAnswer": "No (One of the Millennium Problems)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Function name.",
        "codeSnippet": "___ Function",
        "correctAnswer": "Zeta"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The final zero! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "Done."
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 100,
    "title": "Master Point (Mathbits 10)",
    "desc": "Singularity status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SINGULARITY REACHED! You've mastered BigNum FFT, the Riemann Depths, and the entire bit manipulation landscape. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Fastest algorithm for BigNum multiplication?",
        "options": [
          "FFT / NTT",
          "Karatsuba",
          "Schoolbook"
        ],
        "correctAnswer": "FFT / NTT"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total lessons completed in Mathbits?",
        "options": [
          "1,000",
          "100",
          "10"
        ],
        "correctAnswer": "1,000"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a MATH SINGULARITY! You have completed the 1,000-lesson Titan-Grade Mathbits curriculum. The numbers now fly at your command! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Legacy!",
        "pairs": [
          {
            "key": "Skill",
            "value": "Transcendent"
          },
          {
            "key": "Platform",
            "value": "Pico Elite"
          },
          {
            "key": "Status",
            "value": "TITAN"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Singularity Points.",
        "codeSnippet": "10 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You have evolved! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Mission Accomplished?",
        "options": [
          "SQUAWK YES!",
          "Maybe.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SQUAWK! TITAN GRADE COMPLETED! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Final Thought?",
        "options": [
          "Numbers are Life.",
          "Done.",
          "1"
        ],
        "correctAnswer": "Numbers are Life."
      }
    ]
  }
];

module.exports = stage10;
