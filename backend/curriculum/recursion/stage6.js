const stage6 = [
  {
    "order": 51,
    "title": "Tree Traversals",
    "desc": "Navigating the branches of the bird forest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Welcome to the Forest! A tree is just a recursive nest. Each branch (node) has its own sub-trees! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Three ways to sing! Pre-order (Node-L-R), In-order (L-Node-R), and Post-order (L-R-Node). 🦜\"",
        "codeSnippet": "void inOrder(Node* root) {\n  if (root == NULL) return;\n  inOrder(root->left);\n  print(root->val);\n  inOrder(root->right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In which order do we visit the Node FIRST?",
        "options": [
          "Pre-order",
          "In-order",
          "Post-order"
        ],
        "correctAnswer": "Pre-order"
      },
      {
        "type": "match_following",
        "questionText": "Match the Traversals!",
        "pairs": [
          {
            "key": "In-order",
            "value": "Sorted values (for BST)"
          },
          {
            "key": "Post-order",
            "value": "Delete/Measure subtrees first"
          },
          {
            "key": "Pre-order",
            "value": "Copy/Clone trees"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The call for the right child in In-order.",
        "codeSnippet": "inOrder(root.left);\nprint(root.val);\ninOrder(root.___ );",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trees are perfectly recursive. Every 'child' is the 'root' of its' own smaller tree! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity to traverse a tree with N nodes?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case for an empty nest.",
        "codeSnippet": "if (root == ___ ) return;",
        "correctAnswer": "null"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Climb every branch, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I at the root?\"",
        "options": [
          "THE KING OF THE TREE!",
          "No.",
          "0"
        ],
        "correctAnswer": "THE KING OF THE TREE!"
      }
    ]
  },
  {
    "order": 52,
    "title": "Tree Height",
    "desc": "How tall is your birdhouse hierarchy?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Measuring Height! The height is the longest path from the root to any leaf. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Height = 1 + Max(Height of Left, Height of Right). 🦜\"",
        "codeSnippet": "int height(node) {\n  if (node == NULL) return 0;\n  return 1 + max(height(node.left), height(node.right));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Height of a single node (leaf) in this logic?",
        "options": [
          "1",
          "0",
          "2"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "match_following",
        "questionText": "Match the Measures!",
        "pairs": [
          {
            "key": "Height",
            "value": "Root to Leaf"
          },
          {
            "key": "Empty Tree",
            "value": "Height = 0"
          },
          {
            "key": "Max()",
            "value": "Takes the longest path"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The additive recursive step.",
        "codeSnippet": "return ___ + max(h(left), h(right));",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"We measure from the bottom up. Each leaf reports zero, and their parents add one! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Height of a full tree with 7 nodes?",
        "options": [
          "3",
          "7",
          "log 7"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Comparison function.",
        "codeSnippet": "return 1 + ___(lh, rh);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Aim for the highest leaf! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I tall enough?\"",
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
    "title": "Count Your Birds",
    "desc": "Summing nodes in the recursive forest.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Census Time! How many birds are living in this tree total? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Total = 1 (current bird) + Count of left children + Count of right children. 🦜\"",
        "codeSnippet": "int count(node) {\n  if (node == NULL) return 0;\n  return 1 + count(node.left) + count(node.right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to count nodes in a tree?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Sums!",
        "pairs": [
          {
            "key": "Null",
            "value": "Count 0"
          },
          {
            "key": "Root",
            "value": "Adds 1"
          },
          {
            "key": "Recursion",
            "value": "Visits all"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The return line for counting.",
        "codeSnippet": "return 1 + ___(root.left) + ___(root.right);",
        "correctAnswer": "count"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a typical tree fold operation. You can count leaves, parents, or specific birds (like those with seeds) by changing the '1' logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If a node has 2 children and 4 grandchildren, total count?",
        "options": [
          "7 (1 + 2 + 4)",
          "3",
          "4"
        ],
        "correctAnswer": "7 (1 + 2 + 4)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Condition for leaf node detection (useful for counting leaves).",
        "codeSnippet": "if (root.left == null ___ root.right == null)",
        "correctAnswer": "&&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every bird matters in the academy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I counted?\"",
        "options": [
          "ALWAYS #1!",
          "No.",
          "0"
        ],
        "correctAnswer": "ALWAYS #1!"
      }
    ]
  },
  {
    "order": 54,
    "title": "Tree Diameter",
    "desc": "Finding the longest path between any two birds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Diameter Mastery! What is the longest possible distance between any two birds in the tree? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The diameter can either: 1. Pass through the root (HeightL + HeightR + 1) OR 2. Be entirely in the Left or Right subtree! 🦜\"",
        "codeSnippet": "return max({lh + rh + 1, diameter(left), diameter(right)});"
      },
      {
        "type": "multiple_choice",
        "questionText": "Does the diameter always pass through the root?",
        "options": [
          "No (Might be in a very deep subtree)",
          "Yes",
          "Only in balanced trees"
        ],
        "correctAnswer": "No (Might be in a very deep subtree)"
      },
      {
        "type": "match_following",
        "questionText": "Match the Widths!",
        "pairs": [
          {
            "key": "lh + rh + 1",
            "value": "Longest path through root"
          },
          {
            "key": "max(dL, dR)",
            "value": "Longest internal path"
          },
          {
            "key": "Complexity",
            "value": "O(N^2) naive, O(N) optimized"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Return the maximum of the three possibilities.",
        "codeSnippet": "return ___(throughRoot, max(diagL, diagR));",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Optimized tip: Return both Height and Diameter in a single recursive call to reach O(N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Diameter of a tree with 1 node?",
        "options": [
          "1",
          "0",
          "2"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Height calculation used inside diameter.",
        "codeSnippet": "lh = ___(node.left);",
        "correctAnswer": "height"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Broad horizons, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is my wingspan the diameter?\"",
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
    "title": "Balanced Tree Check",
    "desc": "Is your tree leaning too far?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Balance Power! A tree is height-balanced if for every node, the height difference between Left and Right is <= 1. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Check heights recursively. If any branch finds an imbalance, report -1 (or False) all the way up! 🦜\"",
        "codeSnippet": "if (abs(lh - rh) > 1) return -1;\nreturn 1 + max(lh, rh);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is a balanced tree good?",
        "options": [
          "Keeps search complexity O(log N)",
          "It looks symmetrical",
          "Saves memory"
        ],
        "correctAnswer": "Keeps search complexity O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Balance Rules!",
        "pairs": [
          {
            "key": "|lh - rh| <= 1",
            "value": "Balanced"
          },
          {
            "key": "|lh - rh| > 1",
            "value": "Unbalanced"
          },
          {
            "key": "Skewed Tree",
            "value": "Height = N"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The function to check absolute difference.",
        "codeSnippet": "if (___(lh - rh) > 1) return -1;",
        "correctAnswer": "abs"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"An O(N) check. We verify every node's balance property as we calculate its' height. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is a single path of 10 nodes (skewed) balanced?",
        "options": [
          "No",
          "Yes",
          "Depends on the bird"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Return -1 if child is unbalanced.",
        "codeSnippet": "if (lh == -1 || rh == -1) return ___ ;",
        "correctAnswer": "-1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Stay centered! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I balanced?\"",
        "options": [
          "Perfectly!",
          "A bit wobbly.",
          "0"
        ],
        "correctAnswer": "Perfectly!"
      }
    ]
  },
  {
    "order": 56,
    "title": "Common Ancestor (LCA)",
    "desc": "Finding the first bird shared by two lineages.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Grandparent! Finding the Lowest Common Ancestor (LCA) of two birds. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recurse! If you find one node on the left and the other on the right, the current root IS the ancestor! 🦜\"",
        "codeSnippet": "Node* find(root, p, q) {\n  if (root == NULL || root == p || root == q) return root;\n  L = find(root->left, p, q);\n  R = find(root->right, p, q);\n  if (L && R) return root; // Ancestor found!\n  return L ? L : R;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the LCA of two nodes if one is the parent of the other?",
        "options": [
          "The parent node",
          "The child node",
          "The root"
        ],
        "correctAnswer": "The parent node"
      },
      {
        "type": "match_following",
        "questionText": "Match LCA Scenarios!",
        "pairs": [
          {
            "key": "L and R found",
            "value": "Root is LCA"
          },
          {
            "key": "Only L found",
            "value": "Ancestor is on left"
          },
          {
            "key": "Found node P",
            "value": "Return P"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition for the current node being the ancestor.",
        "codeSnippet": "if (leftSide != null ___ rightSide != null) return root;",
        "correctAnswer": "&&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is a beautiful O(N) application. It ripples down and bubbles the common parent back up! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for LCA in a balanced tree?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)",
        "explanation": "We still might have to visit every node to find P and Q."
      },
      {
        "type": "code_fill_in",
        "questionText": "Return result of right branch if left is null.",
        "codeSnippet": "return left == null ? ___ : left;",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Respect the ancestors! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I your ancestor?\"",
        "options": [
          "THE FIRST BIRD!",
          "No.",
          "0"
        ],
        "correctAnswer": "THE FIRST BIRD!"
      }
    ]
  },
  {
    "order": 57,
    "title": "Root to Leaf Paths",
    "desc": "Sifting through every route to the ground.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Flight Paths! Does there exist a path from root to leaf where the sum of birds equals Target S? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Subtract the current bird's seeds from S and recurse down. If you reach a leaf with S=0, you found it! 🦜\"",
        "codeSnippet": "bool hasSum(root, sum) {\n  if (root == null) return false;\n  if (isLeaf(root)) return sum == root.val;\n  return hasSum(root.left, sum - root.val) || ...;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the leaf condition?",
        "options": [
          "left == null && right == null",
          "root == null",
          "val == 0"
        ],
        "correctAnswer": "left == null && right == null"
      },
      {
        "type": "match_following",
        "questionText": "Match Path Logic!",
        "pairs": [
          {
            "key": "sum - root.val",
            "value": "Update target"
          },
          {
            "key": "Leaf sum==val",
            "value": "Found path"
          },
          {
            "key": "|| operator",
            "value": "Any path works"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The call for the right branch.",
        "codeSnippet": "return hasPath(left, s - v) ___ hasPath(right, s - v);",
        "correctAnswer": "||"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To print ALL paths, use a dynamic list. Backtrack after visiting children! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Number of possible paths in a tree with L leaves?",
        "options": [
          "L",
          "N",
          "2^N"
        ],
        "correctAnswer": "L"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case: tree is empty.",
        "codeSnippet": "if (root == null) return ___ ;",
        "correctAnswer": "false"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Follow the trail of seeds! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Is there a path to my heart?\"",
        "options": [
          "SQUAWK YES!",
          "Maybe.",
          "0"
        ],
        "correctAnswer": "SQUAWK YES!"
      }
    ]
  },
  {
    "order": 58,
    "title": "BST Properties",
    "desc": "Validating the elite sorted tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Sorted Forest! In a Binary Search Tree, everything on the left is SMALLER, and everything on the right is LARGER. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"To validate a BST, it’s not enough to check immediate children. The WHOLE left subtree must be < Root! 🦜\"",
        "codeSnippet": "bool isValid(root, minDir, maxDir) {\n  if (root == null) return true;\n  if (val < minDir || val > maxDir) return false;\n  return isValid(left, minDir, val) && isValid(right, val, maxDir);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What are the allowed bounds for the root of the whole tree?",
        "options": [
          "(-Infinity, +Infinity)",
          "(0, 100)",
          "Only positive"
        ],
        "correctAnswer": "(-Infinity, +Infinity)"
      },
      {
        "type": "match_following",
        "questionText": "Match BST Rules!",
        "pairs": [
          {
            "key": "Left Side",
            "value": "Update Max Bound"
          },
          {
            "key": "Right Side",
            "value": "Update Min Bound"
          },
          {
            "key": "In-order",
            "value": "Produces sorted array"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The left child's upper boundary is the current node's value.",
        "codeSnippet": "isValid(root.left, min, ___);",
        "correctAnswer": "root.val"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity O(N). Passing down the ranges (min, max) is the elite way to simplify this problem! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In-order traversal of a BST results in:",
        "options": [
          "Sorted elements",
          "Random elements",
          "Reversed elements"
        ],
        "correctAnswer": "Sorted elements"
      },
      {
        "type": "code_fill_in",
        "questionText": "Violation check.",
        "codeSnippet": "if (root.val <= min || root.val ___ max) return false;",
        "correctAnswer": ">="
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Order in the court, fledgling! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I valid?\"",
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
    "title": "Mirror a Tree",
    "desc": "Flipping every branch horizontally.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mirror Mirror! Can you make the tree look like its' reflection? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursively swap the left and right children of every node! 🦜\"",
        "codeSnippet": "void mirror(node) {\n  if (node == null) return;\n  mirror(node.left);\n  mirror(node.right);\n  swap(node.left, node.right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What traversal logic is mirroring?",
        "options": [
          "Post-order (Swap after children)",
          "Pre-order (Swap before children)",
          "Both work"
        ],
        "correctAnswer": "Both work"
      },
      {
        "type": "match_following",
        "questionText": "Match Mirror Steps!",
        "pairs": [
          {
            "key": "Swap",
            "value": "Horizon Flip"
          },
          {
            "key": "Left -> Right",
            "value": "Recursive transformation"
          },
          {
            "key": "N nodes",
            "value": "O(N) operations"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Swap the two recursive results (or nodes).",
        "codeSnippet": "temp = root.left;\nroot.left = ___(root.right);\nroot.right = ___(temp);",
        "correctAnswer": "mirror"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time and O(H) space. Inverting a world is easier than you think! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Will mirroring change the height?",
        "options": [
          "No",
          "Yes",
          "Only in elite cases"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Return mirroring result (for bottom-up).",
        "codeSnippet": "return ___ ;",
        "correctAnswer": "root"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Symmetry is beauty! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I flipped?\"",
        "options": [
          "Maybe!",
          "No.",
          "0"
        ],
        "correctAnswer": "Maybe!"
      }
    ]
  },
  {
    "order": 60,
    "title": "Master Point (Recursion 6)",
    "desc": "Tree climber status confirmed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 6 COMPLETE! Heights, Counts, LCAs, and BSTs. You are at home in the canopy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which tree property is checked using |lh - rh| <= 1?",
        "options": [
          "Balance",
          "Height",
          "Diameter"
        ],
        "correctAnswer": "Balance"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does Post-order mean?",
        "options": [
          "Left, Right, Node",
          "Node, Left, Right",
          "Sorted"
        ],
        "correctAnswer": "Left, Right, Node"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"You are a Tree Climber! In Stage 7, we merge Recursion with the power of Bits! 🦜\""
      },
      {
        "type": "match_following",
        "questionText": "Match the Rank!",
        "pairs": [
          {
            "key": "Stage 6",
            "value": "Tree Climber"
          },
          {
            "key": "Stage 7",
            "value": "Bit Weaver"
          },
          {
            "key": "Next",
            "value": "Recursive Bits"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Nests Climbed.",
        "codeSnippet": "6 * ___ ;",
        "correctAnswer": "100"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The branches are dense, but your vision is sharp! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Climb higher?",
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
        "questionText": "Final Traverse?",
        "options": [
          "Pre-order!",
          "Done.",
          "0"
        ],
        "correctAnswer": "Pre-order!"
      }
    ]
  }
];

module.exports = stage6;
