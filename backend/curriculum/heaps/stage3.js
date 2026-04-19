const stage3 = [
  {
    "order": 21,
    "title": "Mergable Heaps",
    "desc": "Joining two nests efficiently.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merging Magic! If you have two Binary Heaps of size N, merging them takes O(N) by building from scratch. Can we do it in O(log N)? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Yes! 'Mergable Heaps' like Binomial or Fibonacci heaps allow you to join two priority queues extremely fast! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to merge two standard Binary Heaps?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Heap Merges!",
        "pairs": [
          {
            "key": "Binary Heap",
            "value": "O(N) Merge"
          },
          {
            "key": "Binomial Heap",
            "value": "O(log N) Merge"
          },
          {
            "key": "Fibonacci Heap",
            "value": "O(1) Merge"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Operation to join two queues.",
        "codeSnippet": "pq3 = ___(pq1, pq2);",
        "correctAnswer": "merge"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Advanced heaps use tree-linking logic instead of fixed arrays to achieve this speed! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Main use case for mergable heaps?",
        "options": [
          "Combining large priority streams",
          "Simple sorting",
          "Printing data"
        ],
        "correctAnswer": "Combining large priority streams"
      },
      {
        "type": "code_fill_in",
        "questionText": "Target complexity for merge.",
        "codeSnippet": "O( ___ n)",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Join the forces! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to unify?\"",
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
    "order": 22,
    "title": "Binomial Trees",
    "desc": "The building blocks of forest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Binomial Tree (B_k). B_0 is a single node. B_k is formed by joining two B_{k-1} trees! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Structure: B_k has exactly 2^k nodes, height k, and the root has k children. 🦜\"",
        "codeSnippet": "B_k = B_{k-1} + B_{k-1}"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many nodes are in a Binomial Tree of order 3 (B_3)?",
        "options": [
          "8 (2^3)",
          "4",
          "16"
        ],
        "correctAnswer": "8 (2^3)"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree Math!",
        "pairs": [
          {
            "key": "Order k",
            "value": "Root degree"
          },
          {
            "key": "Nodes",
            "value": "2^k"
          },
          {
            "key": "Joining",
            "value": "B_{k-1} becomes child of B_{k-1}"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The binomial coefficient calculation.",
        "codeSnippet": "n! / (k! * (n-___)!)",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Just like binary numbers, we can represent ANY number N using a collection of these power-of-2 trees! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the degree of the root in B_k?",
        "options": [
          "k",
          "2",
          "2^k"
        ],
        "correctAnswer": "k"
      },
      {
        "type": "code_fill_in",
        "questionText": "Nodes in B_k.",
        "codeSnippet": "2 ^ ___",
        "correctAnswer": "k"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursive symmetry! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you see the doubling?\"",
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
    "order": 23,
    "title": "Binomial Heaps",
    "desc": "A collection of trees.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Forest Power! A Binomial Heap is a collection (forest) of Binomial Trees that satisfy the Heap Property. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For any size N, there is at most ONE tree of each order. This matches the binary representation of N! 🦜\"",
        "codeSnippet": "N=7 (111 in binary) -> B_0, B_1, B_2"
      },
      {
        "type": "multiple_choice",
        "questionText": "If a Binomial Heap has 13 nodes (1101 in binary), which trees does it contain?",
        "options": [
          "B_0, B_2, B_3",
          "B_0, B_1, B_2",
          "B_4"
        ],
        "correctAnswer": "B_0, B_2, B_3"
      },
      {
        "type": "match_following",
        "questionText": "Match the Forest!",
        "pairs": [
          {
            "key": "Binary 1",
            "value": "Tree exists"
          },
          {
            "key": "Binary 0",
            "value": "Tree missing"
          },
          {
            "key": "Log N",
            "value": "Max number of trees"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Representation of size N.",
        "codeSnippet": "bits = toBinary(___);",
        "correctAnswer": "N"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Searching for the MIN in a binomial heap requires checking the roots of all (log N) trees! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to find the minimum of the forest?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Word for a group of trees.",
        "codeSnippet": "F + ___",
        "correctAnswer": "OREST"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Map the forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Can you count the trees?\"",
        "options": [
          "CHECK THE BITS!",
          "Maybe.",
          "No."
        ],
        "correctAnswer": "CHECK THE BITS!"
      }
    ]
  },
  {
    "order": 24,
    "title": "Binomial Merge",
    "desc": "Binary addition with birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Merge Time! Joining two Binomial Heaps is just like binary addition. 0+0=0, 1+0=1, 1+1=0 (carry 1). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If you have two B_k trees, join them into one B_{k+1} by making the larger root the child of the smaller! 🦜\"",
        "codeSnippet": "link(T1, T2); // O(1) link"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens when you have 'two trees of order K' during a merge?",
        "options": [
          "Link them into a tree of order K+1",
          "They stay separate",
          "One is deleted"
        ],
        "correctAnswer": "Link them into a tree of order K+1"
      },
      {
        "type": "match_following",
        "questionText": "Match the Carry!",
        "pairs": [
          {
            "key": "1+0",
            "value": "Copy tree"
          },
          {
            "key": "1+1",
            "value": "Link and carry"
          },
          {
            "key": "1+1+1",
            "value": "Copy one, link two"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total merge complexity.",
        "codeSnippet": "O( ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This allows us to merge two huge heaps by only doing log N 'Links'! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of one 'Link' operation (joining two trees)?",
        "options": [
          "O(1)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Analogy for merge.",
        "codeSnippet": "Binary ___",
        "correctAnswer": "Addition"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Add the nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Ready to carry?\"",
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
    "order": 25,
    "title": "ExtractMin (Binomial)",
    "desc": "Splitting the forest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Taking the Root! 1. Find the tree with the MIN root. 2. Remove it. 3. Its' children form ANOTHER Binomial Heap! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"4. Reverse the list of children and MERGE them back into the main forest. 🦜\"",
        "codeSnippet": "forest1.merge(reversedChildren);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why reverse the children of root B_k before merging?",
        "options": [
          "To keep them in increasing order of size (B_0...B_{k-1})",
          "For visual clarity",
          "Pico likes back-flips"
        ],
        "correctAnswer": "To keep them in increasing order of size (B_0...B_{k-1})"
      },
      {
        "type": "match_following",
        "questionText": "Match Extract Steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Find min root"
          },
          {
            "key": "Step 2",
            "value": "Split tree"
          },
          {
            "key": "Step 3",
            "value": "Merge children"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of ExtractMin.",
        "codeSnippet": "O( ___ N);",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Deletion also uses the Merge logic, keeping everything O(log N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Max number of children in a B_k tree removed during ExtractMin?",
        "options": [
          "k (log N)",
          "N",
          "1"
        ],
        "correctAnswer": "k (log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Root removal action.",
        "codeSnippet": "Reverse and ___",
        "correctAnswer": "Merge"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Split and reunite! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Found the min?\"",
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
    "order": 26,
    "title": "Fibonacci Heap Intro",
    "desc": "The lazy bird's dream.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Lazy Logic! Fibonacci Heaps are even faster. They don't link trees immediately. They just keep a 'Pool' of trees and only organize them when someone asks for the MIN! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Amortized Complexity: Insertion, Merge, and Decrease-Key are ALL O(1)! Extract-Min is O(log N). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the insertion complexity in a Fibonacci Heap?",
        "options": [
          "O(1)",
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Fibonacci Speeds!",
        "pairs": [
          {
            "key": "Insert",
            "value": "O(1)"
          },
          {
            "key": "Merge",
            "value": "O(1)"
          },
          {
            "key": "ExtractMin",
            "value": "O(log N)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The special O(1) operation used by Dijkstra's.",
        "codeSnippet": "\"DECREASE\" + \"_\" + \"___\" ;",
        "correctAnswer": "KEY"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"They are called Fibonacci because the number of children in a tree is related to the Fibonacci sequence! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why are Fibonacci heaps rarely used in simple apps?.",
        "options": [
          "High constant overhead and complex implementation",
          "They are too fast",
          "They are unstable"
        ],
        "correctAnswer": "High constant overhead and complex implementation"
      },
      {
        "type": "code_fill_in",
        "questionText": "Complexity type (over time).",
        "codeSnippet": "A + ___",
        "correctAnswer": "MORTIZED"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Efficiency over time! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you lazy?\"",
        "options": [
          "JUST EFFICIENT!",
          "Yes.",
          "No."
        ],
        "correctAnswer": "JUST EFFICIENT!"
      }
    ]
  },
  {
    "order": 27,
    "title": "Potential Functions",
    "desc": "Banking the bird energy.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Energy Bank! Amortized analysis uses a 'Potential Function'. Think of it as saving up work now to pay for it later! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In Fibonacci heaps, why is insertion O(1)?",
        "options": [
          "It just adds the node to the roots list and waits for later",
          "It uses a portal",
          "It's magic"
        ],
        "correctAnswer": "It just adds the node to the roots list and waits for later"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens during ExtractMin in a Fibonacci heap?",
        "options": [
          "Consolidation (The lazy nodes are finally organized)",
          "Nothing",
          "Deletion"
        ],
        "correctAnswer": "Consolidation (The lazy nodes are finally organized)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Potential increases with messy nodes and decreases when we clean up! 🦜\"\""
      },
      {
        "type": "match_following",
        "questionText": "Match Amortized Terms!",
        "pairs": [
          {
            "key": "Actual Cost",
            "value": "Time spent now"
          },
          {
            "key": "Potential Change",
            "value": "Difference in messiness"
          },
          {
            "key": "Amortized Cost",
            "value": "Actual + Delta Potential"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The symbol for potential function.",
        "codeSnippet": "___ (H);",
        "correctAnswer": "Phi"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Pay now, fly later! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Do you have potential?\"",
        "options": [
          "SQUAWK YES!",
          "No.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Check the bank?",
        "options": [
          "Balance!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Balance!"
      }
    ]
  },
  {
    "order": 28,
    "title": "Cascading Cuts",
    "desc": "Keeping trees from stretching.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Structure Guard! To keep Fibonacci heaps efficient, we can't let trees get too thin. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If a node loses TWO children, it must be CUT from its' parent and moved to the root list. This is a 'Cascading Cut'. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What triggers a Cascading Cut?",
        "options": [
          "A node losing its' second child",
          "A node getting too heavy",
          "Merging trees"
        ],
        "correctAnswer": "A node losing its' second child"
      },
      {
        "type": "match_following",
        "questionText": "Match Cut Logic!",
        "pairs": [
          {
            "key": "Marked Flag",
            "value": "Lost 1 child"
          },
          {
            "key": "Cut",
            "value": "Lost 2 children, move up"
          },
          {
            "key": "Fibonacci",
            "value": "Basis of tree rules"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of a single decrease-key (amortized).",
        "codeSnippet": "O( ___ );",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This maintenance ensures the forest stays 'Bushy' enough to keep Extract-Min O(log N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does this happen in Binomial heaps?",
        "options": [
          "No, binomial trees have a fixed structure",
          "Yes",
          "Only and always"
        ],
        "correctAnswer": "No, binomial trees have a fixed structure"
      },
      {
        "type": "code_fill_in",
        "questionText": "Action of moving to root list.",
        "codeSnippet": "C + ___",
        "correctAnswer": "ASCADING CUT"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Keep the bushy nest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you marked?\"",
        "options": [
          "NO!",
          "Yes.",
          "Maybe."
        ],
        "correctAnswer": "NO!"
      }
    ]
  },
  {
    "order": 29,
    "title": "Dijkstra's Optimization",
    "desc": "The reason for Fibonacci.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Theorem Time! Dijkstra's algorithm uses Extract-Min (V times) and Decrease-Key (E times). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Binary Heap: O(E log V). Fibonacci Heap: O(E + V log V). For dense graphs where E is large, Fibonacci is the CHAMPION! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "With Fibonacci heaps, what is the cost of the 'Decrease-Key' parts in Dijkstra's?",
        "options": [
          "O(E) total (O(1) each)",
          "O(E log V)",
          "O(V log V)"
        ],
        "correctAnswer": "O(E) total (O(1) each)"
      },
      {
        "type": "match_following",
        "questionText": "Match Heap Choices!",
        "pairs": [
          {
            "key": "Dense Graph",
            "value": "Fibonacci Heap"
          },
          {
            "key": "Sparse Graph",
            "value": "Binary Heap"
          },
          {
            "key": "Theory",
            "value": "Fibonacci always wins"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The E in O(E + V log V).",
        "codeSnippet": "E + V * ___ (V) ;",
        "correctAnswer": "log"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This improvement is one of the most famous theoretical breakthroughs in computer science! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is O(E + V log V) asymptotically faster than O(E log V)?",
        "options": [
          "SQUAWK YES!",
          "No",
          "Maybe"
        ],
        "correctAnswer": "SQUAWK YES!"
      },
      {
        "type": "code_fill_in",
        "questionText": "Graph density term.",
        "codeSnippet": "___ Graph",
        "correctAnswer": "Dense"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Fly the fastest path! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are we efficient yet?\"",
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
    "order": 30,
    "title": "Master Point (Heaps 3)",
    "desc": "Forest falcon status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 3 COMPLETE! You've mastered Binomial Addition, Fibonacci Laziness, and the potential of energy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In which heap is MERGE O(1) amortized?",
        "options": [
          "Fibonacci Heap",
          "Binomial Heap",
          "Binary Heap"
        ],
        "correctAnswer": "Fibonacci Heap"
      },
      {
        "type": "multiple_choice",
        "questionText": "A Binomial Heap of size 15 is made of how many trees?",
        "options": [
          "4 (B_0, B_1, B_2, B_3 because 1111 in binary)",
          "15",
          "1"
        ],
        "correctAnswer": "4 (B_0, B_1, B_2, B_3 because 1111 in binary)"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Forest Falcon! In Stage 4, we enter the Realm of Strings: Prefix, Suffix, and Trie magic! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 3",
            "value": "Forest Falcon"
          },
          {
            "key": "Stage 4",
            "value": "String Snipe"
          },
          {
            "key": "Next",
            "value": "Strings 1"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Total Titan Points.",
        "codeSnippet": "3 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Ascend to the canopy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Proceed to Strings?",
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
        "questionText": "Final Potential?",
        "options": [
          "Release!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Release!"
      }
    ]
  }
];

module.exports = stage3;
