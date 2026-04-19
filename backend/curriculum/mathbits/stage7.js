const stage7 = [
  {
    "order": 61,
    "title": "Probability Basics",
    "desc": "Predicting the flight path.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Chance of a seed! Probability (P) is the ratio of Favorable outcomes to Total possible outcomes. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"0 ≤ P ≤ 1. If P=0, it's impossible. If P=1, it's certain! 🦜\"",
        "codeSnippet": "P(E) = n(E) / n(S)"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the probability of rolling a 4 on a 6-sided die?",
        "options": [
          "1/6",
          "1/2",
          "1/4"
        ],
        "correctAnswer": "1/6"
      },
      {
        "type": "match_following",
        "questionText": "Match the Probabilities!",
        "pairs": [
          {
            "key": "Certain",
            "value": "1.0"
          },
          {
            "key": "Impossible",
            "value": "0.0"
          },
          {
            "key": "Coin Flip (H)",
            "value": "0.5"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Probability of NOT E.",
        "codeSnippet": "P_not_E = 1.0 - ___ ;",
        "correctAnswer": "P_E"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The 'Sample Space' (S) must contain every single bird that could possibly land! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In a deck of 52 cards, P(Drawing an Ace)?",
        "options": [
          "4/52 (1/13)",
          "1/52",
          "1/4"
        ],
        "correctAnswer": "4/52 (1/13)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Space name.",
        "codeSnippet": "S ___ Space",
        "correctAnswer": "ample"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Roll the dice! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it likely?\"",
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
    "order": 62,
    "title": "Conditional Prob",
    "desc": "Knowing the weather.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Given that... Conditional probability P(A|B) is the chance of A happening, GIVEN that B has already happened. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Formula: P(A|B) = P(A ∩ B) / P(B). It's like shrinking the forest to only include the birds where B is true! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If you roll a die and it's EVEN, what is the chance it's a 2?",
        "options": [
          "1/3 (2 is one of {2,4,6})",
          "1/6",
          "1/2"
        ],
        "correctAnswer": "1/3 (2 is one of {2,4,6})"
      },
      {
        "type": "match_following",
        "questionText": "Match the Terms!",
        "pairs": [
          {
            "key": "P(A ∩ B)",
            "value": "Both happen"
          },
          {
            "key": "P(A|B)",
            "value": "A given B"
          },
          {
            "key": "P(B)",
            "value": "The condition"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculation of P(A|B).",
        "codeSnippet": "prob = intersect / ___ ;",
        "correctAnswer": "probB"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Multiplication Rule: P(A ∩ B) = P(B) * P(A|B). To get both, the condition must happen first, then the event! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If P(Raining)=0.2 and P(Clouds|Rain)=1.0, what is P(Rain ∩ Clouds)?",
        "options": [
          "0.2",
          "1.0",
          "0"
        ],
        "correctAnswer": "0.2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Intersection symbol.",
        "codeSnippet": "A ___ B",
        "correctAnswer": "intersection"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Adjust the odds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is the cloud here?\"",
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
    "order": 63,
    "title": "Bayes' Theorem",
    "desc": "Updating your belief bird.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Inverse! Bayes' Theorem flips the condition: `P(B|A) = (P(A|B) * P(B)) / P(A)`. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"It's the heart of modern AI! Use evidence (A) to update your prior belief (B). 🦜\"",
        "codeSnippet": "P(Prior|Evidence) ∝ P(Evidence|Prior) * P(Prior)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Bayes' theorem is used in...",
        "options": [
          "Spam filters / Medical diagnosis",
          "Sorting arrays",
          "Drawing circles"
        ],
        "correctAnswer": "Spam filters / Medical diagnosis"
      },
      {
        "type": "match_following",
        "questionText": "Match the Bayes!",
        "pairs": [
          {
            "key": "Posterior",
            "value": "P(B|A)"
          },
          {
            "key": "Prior",
            "value": "P(B)"
          },
          {
            "key": "Likelihood",
            "value": "P(A|B)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Numerator of Bayes.",
        "codeSnippet": "num = p_A_given_B ___ p_B ;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If a test is 99% accurate but the disease is super rare (1 in 10,000), a positive result only means a ~1% real chance of disease! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does Bayes help with uncertainty?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Only in binary"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Theorem author.",
        "codeSnippet": "___ ' Theorem",
        "correctAnswer": "Bayes"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Update your nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"P(A|B)?\"",
        "options": [
          "Likelihood!",
          "No.",
          "0"
        ],
        "correctAnswer": "Likelihood!"
      }
    ]
  },
  {
    "order": 64,
    "title": "Independent Events",
    "desc": "Birds that don't care.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Zero Influence! Two events are independent if one happening doesn't change the probability of the other. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Condition for independence: P(A ∩ B) = P(A) * P(B). 🦜\"",
        "codeSnippet": "P(A|B) = P(A)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Are two coin flips independent?",
        "options": [
          "SQUAWK YES! (Coins have no memory)",
          "No",
          "Only if the coin is elite"
        ],
        "correctAnswer": "SQUAWK YES! (Coins have no memory)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Relations!",
        "pairs": [
          {
            "key": "Independent",
            "value": "P(A)*P(B)"
          },
          {
            "key": "Mutually Exclusive",
            "value": "P(A ∩ B) = 0"
          },
          {
            "key": "Dependent",
            "value": "Influence each other"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Independence verification code.",
        "codeSnippet": "if (PA_and_B == PA ___ PB) return true;",
        "correctAnswer": "*"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Wait! Mutually exclusive is NOT independent. If A happens, B CAN'T happen—that's a huge influence! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If A and B are mutually exclusive, what is P(A ∩ B)?",
        "options": [
          "0",
          "1",
          "P(A)*P(B)"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Logic type.",
        "codeSnippet": "I ___",
        "correctAnswer": "ndependent"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Individual flights! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do I care?\"",
        "options": [
          "NO!",
          "Yes.",
          "0"
        ],
        "correctAnswer": "NO!"
      }
    ]
  },
  {
    "order": 65,
    "title": "Expected Value E(X)",
    "desc": "The average nest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Average bird! The Expected Value is the average outcome you'd get if you repeated the experiment billions of times. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"E(X) = Σ (Value * Probability). 🦜\"",
        "codeSnippet": "E(X) = ∑ x_i * P(x_i)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Expected value of a fair 6-sided die?",
        "options": [
          "3.5 (Average of 1,2,3,4,5,6)",
          "3",
          "4"
        ],
        "correctAnswer": "3.5 (Average of 1,2,3,4,5,6)"
      },
      {
        "type": "match_following",
        "questionText": "Match Expected!",
        "pairs": [
          {
            "key": "Σ",
            "value": "Sum of all"
          },
          {
            "key": "P(X)",
            "value": "权重 (Weight)"
          },
          {
            "key": "E(X)",
            "value": "Mean"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initial expected value in loop sum.",
        "codeSnippet": "E = ___ ;",
        "correctAnswer": "0"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Expected Value doesn't have to be a possible individual outcome. You can't roll a 3.5, but it's still the average! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If you win $10 with 10% chance, what is E?",
        "options": [
          "$1 (10 * 0.1)",
          "$10",
          "$0.1"
        ],
        "correctAnswer": "$1 (10 * 0.1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Mean symbol.",
        "codeSnippet": "E ( ___ )",
        "correctAnswer": "X"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"On balance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it 3.5?\"",
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
    "title": "Linearity of E",
    "desc": "The ultimate shortcut.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Elite Trick! The expected value of a SUM is the SUM of expected values: E(A + B) = E(A) + E(B). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This works even if A and B are DEPENDENT! This is the most powerful tool in competitive probability. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If E(One Die) = 3.5, what is E(Sum of 10 Dice)?",
        "options": [
          "35 (3.5 * 10)",
          "3.5",
          "Impossible"
        ],
        "correctAnswer": "35 (3.5 * 10)"
      },
      {
        "type": "match_following",
        "questionText": "Match Linear Rules!",
        "pairs": [
          {
            "key": "E(X + Y)",
            "value": "E(X) + E(Y)"
          },
          {
            "key": "E(kX)",
            "value": "k * E(X)"
          },
          {
            "key": "Condition",
            "value": "None (Universal!)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Constant multiplier in expected value.",
        "codeSnippet": "E(10 * X) = ___ * E(X);",
        "correctAnswer": "10"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To count the expected number of birds in nests, just sum the probability of EACH bird being in its nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Expected number of matching pairs when n cards are shuffled?",
        "options": [
          "1 (A classic result)",
          "n",
          "0"
        ],
        "correctAnswer": "1 (A classic result)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Property name.",
        "codeSnippet": "L ___",
        "correctAnswer": "inearity"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Sum it up easily! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it E(A)+E(B)?\"",
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
    "order": 67,
    "title": "Coupon Collector",
    "desc": "Collecting the whole flock.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Collection time! There are N different bird stickers. How many packs must you buy to expect to have all N? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Let X be the total attempts. E(X) = n * (1/1 + 1/2 + 1/3 + ... + 1/n). 🦜\"",
        "codeSnippet": "E(X) = n * Hn (Harmonic Number)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Approximate complexity for E(X)?",
        "options": [
          "O(N log N)",
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Steps!",
        "pairs": [
          {
            "key": "First new sticker",
            "value": "1 try"
          },
          {
            "key": "Second new",
            "value": "n / (n-1) tries"
          },
          {
            "key": "Last sticker",
            "value": "n tries"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Harmonic sum part.",
        "codeSnippet": "sum += 1.0 / ___ ;",
        "correctAnswer": "i"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you have 10 stickers, you need about 10 * ln(10) ≈ 29 attempts to get them all! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the first sticker always new?",
        "options": [
          "SQUAWK YES! (P=1)",
          "Maybe",
          "No"
        ],
        "correctAnswer": "SQUAWK YES! (P=1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Problem name.",
        "codeSnippet": "C ___ Collector",
        "correctAnswer": "oupon"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complete the set! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"n log n?\"",
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
    "title": "Variance V(X)",
    "desc": "How spread out we are.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Fluctuation! Variance measures how much the birds stray from the average nest. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"V(X) = E(X^2) - [E(X)]^2. Standard Deviation is just the sqrt of Variance! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If every bird is EXACTLY in the middle, what is the variance?",
        "options": [
          "0",
          "1",
          "n"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "match_following",
        "questionText": "Match Variance!",
        "pairs": [
          {
            "key": "V(X)",
            "value": "Average squared diff"
          },
          {
            "key": "σ (Sigma)",
            "value": "Standard Deviation"
          },
          {
            "key": "σ^2",
            "value": "Variance"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Expansion of V(X).",
        "codeSnippet": "var = E_X_squared - (EX * ___ );",
        "correctAnswer": "EX"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For independent events: V(A + B) = V(A) + V(B). Notice: Linearity works for Variance ONLY when independent! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Relation between SD and Variance?",
        "options": [
          "SD = sqrt(Var)",
          "SD = Var^2",
          "Independent"
        ],
        "correctAnswer": "SD = sqrt(Var)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Spread name.",
        "codeSnippet": "V ___",
        "correctAnswer": "ariance"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay grouped! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is it σ^2?\"",
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
    "order": 69,
    "title": "Geometric Distribution",
    "desc": "Waiting for the catch.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Success at last! How many times must you try until a bird finally lands (p = prob of land)? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Geometric Distribution: E(X) = 1 / p. 🦜\"",
        "codeSnippet": "P(X=k) = (1-p)^(k-1) * p"
      },
      {
        "type": "multiple_choice",
        "questionText": "If chance of success is 1/10, what is the expected number of tries?",
        "options": [
          "10",
          "1",
          "100"
        ],
        "correctAnswer": "10"
      },
      {
        "type": "match_following",
        "questionText": "Match the Dist!",
        "pairs": [
          {
            "key": "E(X)",
            "value": "1/p"
          },
          {
            "key": "V(X)",
            "value": "(1-p)/p^2"
          },
          {
            "key": "Type",
            "value": "Discrete"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Probability of failing `k-1` times.",
        "codeSnippet": "fail_prob = pow(1.0 - p, ___ );",
        "correctAnswer": "k-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Memoryless Property: If you've already failed 100 times, the chance of needing 'X' more tries is still the same as if you just started! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does a coin remember it was 'Tails' 5 times in a row?",
        "options": [
          "NO!",
          "Yes",
          "Sometimes"
        ],
        "correctAnswer": "NO!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Success probability.",
        "codeSnippet": "P = ___",
        "correctAnswer": "p"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Finally! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"1/p?\"",
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
    "order": 70,
    "title": "Master Point (Mathbits 7)",
    "desc": "Probability pilot status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 7 COMPLETE! You've mastered Bayes' Theorem, Linearity of Expectation, and the random walk of the flock. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Linearity of Expectation E(A+B)=E(A)+E(B) require for independence?",
        "options": [
          "Nothing (It's always true)",
          "A and B must be independent",
          "A and B must be mutually exclusive"
        ],
        "correctAnswer": "Nothing (It's always true)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Expected number of flips for a fair coin to get Heads?",
        "options": [
          "2",
          "1",
          "4"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Probability Pilot! In Stage 8, we build Numerical Models: Square Roots, Floating Point errors, and Integrations! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 7",
            "value": "Probability Pilot"
          },
          {
            "key": "Stage 8",
            "value": "Numerical Navigator"
          },
          {
            "key": "Next",
            "value": "Mathbits 8"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Success Points.",
        "codeSnippet": "7 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Chance favors the prepared! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Ready for Numbers?",
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
        "questionText": "Final Prob?",
        "options": [
          "1.0",
          "0.0",
          "Done."
        ],
        "correctAnswer": "1.0"
      }
    ]
  }
];

module.exports = stage7;
