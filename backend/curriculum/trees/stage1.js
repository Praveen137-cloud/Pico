const stage1 = [
  {
    "order": 1,
    "title": "The Infinite Branch (Trees)",
    "desc": "Introduction to Tree data structures.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Expanding the Forest! Think of a tree as a family of nests. One ROOT at the top, and branches that split into children below! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Unlike stacks or queues, trees are hierarchical. A node can have multiple children, but only ONE parent! 🦜\"",
        "codeSnippet": "struct Node {\n  int data;\n  vector<Node*> children;\n};"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the top-most node of a tree called?",
        "options": [
          "Root",
          "Stem",
          "Cap"
        ],
        "correctAnswer": "Root"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree Terms!",
        "pairs": [
          {
            "key": "Leaf",
            "value": "No children"
          },
          {
            "key": "Edge",
            "value": "Connection link"
          },
          {
            "key": "Parent",
            "value": "One level above"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Term for nodes with the same parent.",
        "codeSnippet": "Birds in the same nest are called ___;",
        "correctAnswer": "siblings"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Trees are everywhere—from your computer folders to the way we classify species in the forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a tree have a cycle?",
        "options": [
          "No (Cycles mean it is a graph)",
          "Yes",
          "Only on weekends"
        ],
        "correctAnswer": "No (Cycles mean it is a graph)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize a node with data.",
        "codeSnippet": "newNode->data = ___;",
        "correctAnswer": "val"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Growing tall! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the root?\"",
        "options": [
          "The king of the forest!",
          "No.",
          "0"
        ],
        "correctAnswer": "The king of the forest!"
      }
    ]
  },
  {
    "order": 2,
    "title": "Dual-Path (Binary Trees)",
    "desc": "Introduction to Binary Trees.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Binary Split! A binary tree is a special nest where each bird can have at most TWO children: Left and Right. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This simple split allows for extremely fast searching and sorting as the tree grows. 🦜\"",
        "codeSnippet": "struct Node {\n  int data;\n  Node* left;\n  Node* right;\n};"
      },
      {
        "type": "multiple_choice",
        "questionText": "Maximum number of children in a Binary Tree?",
        "options": [
          "2",
          "1",
          "Unlimited"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match Binary Parts!",
        "pairs": [
          {
            "key": "Left",
            "value": "First child"
          },
          {
            "key": "Right",
            "value": "Second child"
          },
          {
            "key": "NULL",
            "value": "Empty branch"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Pointer to the left child of a node `n`.",
        "codeSnippet": "n->___ ;",
        "correctAnswer": "left"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Every branch is a potential sub-tree. Recursion is the natural language of trees! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Can a node in a binary tree have only one child?",
        "options": [
          "Yes",
          "No",
          "If it’s the root"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check if current node is a leaf.",
        "codeSnippet": "if (n->left == NULL && n->___ == NULL)",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Symmetry in the branches! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a binary bird?\"",
        "options": [
          "Always two options!",
          "No.",
          "0"
        ],
        "correctAnswer": "Always two options!"
      }
    ]
  },
  {
    "order": 3,
    "title": "Inorder Exploration",
    "desc": "Depth-First Search: Left -> Root -> Right.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Inorder Flight! We visit the LEFT sub-tree first, then the ROOT, then the RIGHT sub-tree. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In a Binary Search Tree, Inorder traversal gives you the birds in SORTED order! 🦜\"",
        "codeSnippet": "void inorder(Node* root) {\n  if(!root) return;\n  inorder(root->left);\n  cout << root->data << \" \";\n  inorder(root->right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Inorder sequence for [Root=10, Left=5, Right=15]?",
        "options": [
          "5, 10, 15",
          "10, 5, 15",
          "15, 10, 5"
        ],
        "correctAnswer": "5, 10, 15"
      },
      {
        "type": "match_following",
        "questionText": "Match Inorder steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Recurse Left"
          },
          {
            "key": "Step 2",
            "value": "Process Current"
          },
          {
            "key": "Step 3",
            "value": "Recurse Right"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call to visit the left side.",
        "codeSnippet": "inorder(root->___);",
        "correctAnswer": "left"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) time and O(Height) space for the recursive call-stack! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Inorder of a BST is always?",
        "options": [
          "Sorted",
          "Reversed",
          "Random"
        ],
        "correctAnswer": "Sorted"
      },
      {
        "type": "code_fill_in",
        "questionText": "Process the root data.",
        "codeSnippet": "visit(root->___);",
        "correctAnswer": "data"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Orderly and peaceful! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I inorder?\"",
        "options": [
          "Following the path!",
          "No.",
          "0"
        ],
        "correctAnswer": "Following the path!"
      }
    ]
  },
  {
    "order": 4,
    "title": "Preorder Command",
    "desc": "Depth-First Search: Root -> Left -> Right.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Preorder Command! We visit the ROOT first, then the children. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Great for copying the tree or creating a prefix expression from an expression tree! 🦜\"",
        "codeSnippet": "void preorder(Node* root) {\n  if(!root) return;\n  cout << root->data << \" \";\n  preorder(root->left);\n  preorder(root->right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Preorder sequence for [Root=1, Left=2, Right=3]?",
        "options": [
          "1, 2, 3",
          "2, 1, 3",
          "3, 2, 1"
        ],
        "correctAnswer": "1, 2, 3"
      },
      {
        "type": "match_following",
        "questionText": "Match Preorder steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Process Current"
          },
          {
            "key": "Step 2",
            "value": "Recurse Left"
          },
          {
            "key": "Step 3",
            "value": "Recurse Right"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call to visit the right side.",
        "codeSnippet": "preorder(root->___);",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Again, O(N) time. The root always comes first in every sub-flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which traversal is used for prefix notation?",
        "options": [
          "Preorder",
          "Inorder",
          "Postorder"
        ],
        "correctAnswer": "Preorder"
      },
      {
        "type": "code_fill_in",
        "questionText": "Base case for recursion.",
        "codeSnippet": "if (root == ___) return;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Leading the flock! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I preorder?\"",
        "options": [
          "The first choice!",
          "No.",
          "0"
        ],
        "correctAnswer": "The first choice!"
      }
    ]
  },
  {
    "order": 5,
    "title": "Postorder Cleanup",
    "desc": "Depth-First Search: Left -> Right -> Root.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Postorder Cleanup! We visit both children first, and then the ROOT. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Perfect for deleting a tree or calculating the total size of branches! 🦜\"",
        "codeSnippet": "void postorder(Node* root) {\n  if(!root) return;\n  postorder(root->left);\n  postorder(root->right);\n  cout << root->data << \" \";\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Postorder sequence for [Root=10, Left=5, Right=15]?",
        "options": [
          "5, 15, 10",
          "10, 5, 15",
          "5, 10, 15"
        ],
        "correctAnswer": "5, 15, 10"
      },
      {
        "type": "match_following",
        "questionText": "Match Postorder steps!",
        "pairs": [
          {
            "key": "Step 1",
            "value": "Recurse Left"
          },
          {
            "key": "Step 2",
            "value": "Recurse Right"
          },
          {
            "key": "Step 3",
            "value": "Process Current"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Root processing index.",
        "codeSnippet": "Postorder visits the root ____ ;",
        "correctAnswer": "last"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) time. This ensures you know everything about the children before you decide anything about the parent! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which traversal is used for postfix notation?",
        "options": [
          "Postorder",
          "Inorder",
          "Preorder"
        ],
        "correctAnswer": "Postorder"
      },
      {
        "type": "code_fill_in",
        "questionText": "Left recursive call.",
        "codeSnippet": "postorder(root->___);",
        "correctAnswer": "left"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Watching the nest grow! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I postorder?\"",
        "options": [
          "The final word!",
          "No.",
          "0"
        ],
        "correctAnswer": "The final word!"
      }
    ]
  },
  {
    "order": 6,
    "title": "Tree Altitude (Height)",
    "desc": "Calculating the height and depth of a tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"How high do the nests go? The Height is the longest path from the Root to a Leaf bird. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Height = `1 + max(Height(Left), Height(Right))`. A single root has height 1 (or 0, depending on the woods). 🦜\"",
        "codeSnippet": "int height(Node* root) {\n  if(!root) return 0;\n  return 1 + max(height(root->left), height(root->right));\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Height of an empty tree?",
        "options": [
          "0",
          "1",
          "-1"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "match_following",
        "questionText": "Match Altitude logic!",
        "pairs": [
          {
            "key": "Base Case",
            "value": "Return 0"
          },
          {
            "key": "max()",
            "value": "Compare branches"
          },
          {
            "key": "1 +",
            "value": "Count current level"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function to find the taller branch.",
        "codeSnippet": "h = 1 + ___ (hl, hr);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) because we must visit every nest to check its height. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Height of a tree with only Root?",
        "options": [
          "1",
          "0",
          "2"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call for right height.",
        "codeSnippet": "hr = height(root->___);",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Reaching for the sky! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the max height?\"",
        "options": [
          "Leading the canopy!",
          "No.",
          "0"
        ],
        "correctAnswer": "Leading the canopy!"
      }
    ]
  },
  {
    "order": 7,
    "title": "The Search Tree (BST)",
    "desc": "Introduction to Binary Search Trees.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Organized Forest! In a Binary Search Tree, smaller birds go LEFT, and bigger birds go RIGHT. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This organization lets you find any bird in O(log N) time if the tree is balanced! 🦜\"",
        "codeSnippet": "bool search(Node* root, int x) {\n  if(!root) return false;\n  if(root->data == x) return true;\n  if(x < root->data) return search(root->left, x);\n  return search(root->right, x);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where does 5 go relative to a root of 10 in a BST?",
        "options": [
          "Left",
          "Right",
          "Bottom"
        ],
        "correctAnswer": "Left"
      },
      {
        "type": "match_following",
        "questionText": "Match BST Rules!",
        "pairs": [
          {
            "key": "Smaller",
            "value": "Go Left"
          },
          {
            "key": "Larger",
            "value": "Go Right"
          },
          {
            "key": "Search",
            "value": "Binary division"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to search the right side.",
        "codeSnippet": "if (x ___ root->data) return search(root->right, x);",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"This is exactly like Binary Search in an array, but inside a living tree! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Minimum value in a BST?",
        "options": [
          "Left-most node",
          "Right-most node",
          "Root"
        ],
        "correctAnswer": "Left-most node"
      },
      {
        "type": "code_fill_in",
        "questionText": "Initialize a new node.",
        "codeSnippet": "if (root == NULL) return ___(val);",
        "correctAnswer": "newNode"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Strategic placement! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the right sub-tree?\"",
        "options": [
          "Only if I’m bigger!",
          "No.",
          "0"
        ],
        "correctAnswer": "Only if I’m bigger!"
      }
    ]
  },
  {
    "order": 8,
    "title": "BST Cultivation",
    "desc": "Inserting into a Binary Search Tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Planting new seeds! Insertion in a BST must follow the same Left/Right rules. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Follow the path until you hit an empty nest (NULL), then place the new bird there! 🦜\"",
        "codeSnippet": "Node* insert(Node* root, int x) {\n  if(!root) return new Node(x);\n  if(x < root->data) root->left = insert(root->left, x);\n  else root->right = insert(root->right, x);\n  return root;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for insertion in a balanced BST?",
        "options": [
          "O(log N)",
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Insertion Flows!",
        "pairs": [
          {
            "key": "Base Case",
            "value": "Place new node"
          },
          {
            "key": "Greater",
            "value": "Recurse Right"
          },
          {
            "key": "Links",
            "value": "Update parent pointers"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Connect the new node to the left child.",
        "codeSnippet": "root->left = ___(root->left, val);",
        "correctAnswer": "insert"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In the worst case (a skewed tree), insertion becomes O(N). We will learn to BALANCE the forest later! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Does BST allow duplicate keys?",
        "options": [
          "Usually No",
          "Always Yes",
          "Pico rule"
        ],
        "correctAnswer": "Usually No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Set result to parent.",
        "codeSnippet": "return ___;",
        "correctAnswer": "root"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A growing habitat! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the newest node?\"",
        "options": [
          "Just arrived!",
          "No.",
          "0"
        ],
        "correctAnswer": "Just arrived!"
      }
    ]
  },
  {
    "order": 9,
    "title": "Tree Blueprints",
    "desc": "Array vs Linked List representation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Blueprint Basics! How do we actually store trees in the bird-brain computer? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Linked List (Standard): Nodes with pointers. Array: Root at `i`, Left at `2i+1`, Right at `2i+2`! 🦜\"",
        "codeSnippet": "LeftChild(i) = 2*i + 1;\nRightChild(i) = 2*i + 2;\nParent(i) = (i-1) / 2;"
      },
      {
        "type": "multiple_choice",
        "questionText": "In an array representation, if parent is at index 0, where is the right child?",
        "options": [
          "2",
          "1",
          "Root"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "match_following",
        "questionText": "Match Representations!",
        "pairs": [
          {
            "key": "Linked List",
            "value": "Flexible & Dynamic"
          },
          {
            "key": "Array",
            "value": "Space-waste if skewed"
          },
          {
            "key": "Heaps",
            "value": "Always use arrays"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Math to find the parent index in an array.",
        "codeSnippet": "parent = (i ___ 1) / 2;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Arrays are only good for FULL or COMPLETE binary trees. Otherwise, there are many empty nests (NULLs) in the middle! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Indices for Left/Right of index 5?",
        "options": [
          "11 and 12",
          "10 and 11",
          "6 and 7"
        ],
        "correctAnswer": "11 and 12"
      },
      {
        "type": "code_fill_in",
        "questionText": "Calculate left child index.",
        "codeSnippet": "lc = ___ * i + 1;",
        "correctAnswer": "2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mapping the woods! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I in the array?\"",
        "options": [
          "Index-perfect!",
          "No.",
          "0"
        ],
        "correctAnswer": "Index-perfect!"
      }
    ]
  },
  {
    "order": 10,
    "title": "Master Point (Foundation)",
    "desc": "Reflecting on the Tree Basics.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"FOUNDATION HALFWAY! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Root, Leaf, Left, Right, and the three DFS flights (In, Pre, Post). 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Which traversal is Root-first?",
        "options": [
          "Preorder",
          "Postorder"
        ],
        "correctAnswer": "Preorder"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which traversal is Root-last?",
        "options": [
          "Postorder",
          "Inorder"
        ],
        "correctAnswer": "Postorder"
      },
      {
        "type": "multiple_choice",
        "questionText": "BST Search complexity (balanced)?",
        "options": [
          "O(log N)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Array Right child of `i`?",
        "options": [
          "2i+2",
          "2i+1"
        ],
        "correctAnswer": "2i+2"
      },
      {
        "type": "multiple_choice",
        "questionText": "Height calculation base?",
        "options": [
          "1 + max(L, R)",
          "L + R"
        ],
        "correctAnswer": "1 + max(L, R)"
      },
      {
        "type": "match_following",
        "questionText": "Master Pivot Match!",
        "pairs": [
          {
            "key": "Pointers",
            "value": "Solid!"
          },
          {
            "key": "Traversals",
            "value": "Mapped!"
          },
          {
            "key": "Pico",
            "value": "Amazed!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Final 10 units of Foundation: Mirrored Nests, Identical Twins, and the BFS Level-Order Flight! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready to climb higher?\"",
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
    "order": 11,
    "title": "The Census (Tree Size)",
    "desc": "Calculating the total number of nodes in a tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"How many birds in the woods? We need to count EVERY nest in the tree! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursion is the key! Count is `1 + Size(Left) + Size(Right)`. If you hit an empty branch, return 0. 🦜\"",
        "codeSnippet": "int size(Node* root) {\n  if(!root) return 0;\n  return 1 + size(root->left) + size(root->right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for counting all nodes in a tree?",
        "options": [
          "O(N)",
          "O(Height)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Size logic!",
        "pairs": [
          {
            "key": "Base Case",
            "value": "Return 0"
          },
          {
            "key": "Recursive step",
            "value": "Sum children"
          },
          {
            "key": "+1",
            "value": "Count current root"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The total bird count formula.",
        "codeSnippet": "total = ___ + size(L) + size(R);",
        "correctAnswer": "1"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) because every nest must be visited exactly once. No bird left uncounted! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Size of a tree with 0 nodes?",
        "options": [
          "0",
          "1",
          "NULL"
        ],
        "correctAnswer": "0"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call for right children.",
        "codeSnippet": "sr = size(root->___);",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The final tally! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I counted?\"",
        "options": [
          "Part of the census!",
          "No.",
          "0"
        ],
        "correctAnswer": "Part of the census!"
      }
    ]
  },
  {
    "order": 12,
    "title": "Leaf Patrol",
    "desc": "Counting all the leaf nodes (nodes with no children).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The End-points! How many nests are at the very tips of the branches? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A leaf has both LEFT and RIGHT children as NULL. If you find one, return 1! 🦜\"",
        "codeSnippet": "int countLeaves(Node* root) {\n  if(!root) return 0;\n  if(!root->left && !root->right) return 1;\n  return countLeaves(root->left) + countLeaves(root->right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the root a leaf if it has no children?",
        "options": [
          "Yes",
          "No",
          "Only in winter"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "match_following",
        "questionText": "Match Patrol Rule!",
        "pairs": [
          {
            "key": "Left == NULL",
            "value": "Potential Leaf"
          },
          {
            "key": "Right == NULL",
            "value": "Potential Leaf"
          },
          {
            "key": "Both NULL",
            "value": "Actual Leaf"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Identify a leaf node.",
        "codeSnippet": "if (n->left == NULL ___ n->right == NULL)",
        "correctAnswer": "&&"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). We visit every nest to check if it's an end-point. The tips of the forest! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many leaves in [1(2,3)]?",
        "options": [
          "2",
          "1",
          "3"
        ],
        "correctAnswer": "2"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call to check left branches.",
        "codeSnippet": "return countLeaves(root->___) + ... ;",
        "correctAnswer": "left"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Tip-toeing on the leaves! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I on a leaf?\"",
        "options": [
          "The edge of the world!",
          "No.",
          "0"
        ],
        "correctAnswer": "The edge of the world!"
      }
    ]
  },
  {
    "order": 13,
    "title": "Peak Search (Max)",
    "desc": "Finding the maximum data value in a Binary Tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Alpha Bird! Who has the largest value in the entire forest? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursion again! Max is `max(rootVal, Max(Left), Max(Right))`. Simple and elite! 🦜\"",
        "codeSnippet": "int findMax(Node* root) {\n  if(!root) return INT_MIN;\n  return max({root->data, findMax(root->left), findMax(root->right)});\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding Max in an unsorted Binary Tree?",
        "options": [
          "O(N)",
          "O(log N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Max Pieces!",
        "pairs": [
          {
            "key": "Base Case",
            "value": "Return INT_MIN"
          },
          {
            "key": "max()",
            "value": "The three-way compare"
          },
          {
            "key": "Result",
            "value": "The peak value"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Function to find the maximum between three values.",
        "codeSnippet": "m = ___ (a, b, c);",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"O(N) because we have to check everyone. But in a BST, it's just the right-most bird! O(log N)! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "What if all birds have the same value?",
        "options": [
          "Any bird is max",
          "Error",
          "Highest nest wins"
        ],
        "correctAnswer": "Any bird is max"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call for right side max.",
        "codeSnippet": "mr = findMax(root->___);",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Viewing from the peak! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I the alpha?\"",
        "options": [
          "The biggest SQUAWK!",
          "No.",
          "0"
        ],
        "correctAnswer": "The biggest SQUAWK!"
      }
    ]
  },
  {
    "order": 14,
    "title": "The Level-Order Flight (BFS)",
    "desc": "Breadth-First Search: Level by level.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Level Up! Instead of going deep, we visit level 0, then level 1, then level 2... 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Use a QUEUE! Push the root. While queue is not empty, pop a bird, process it, and push its children! 🦜\"",
        "codeSnippet": "q.push(root);\nwhile(!q.empty()) {\n  Node* temp = q.pop();\n  if(temp->left) q.push(temp->left);\n  if(temp->right) q.push(temp->right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which data structure is essential for Level-Order traversal?",
        "options": [
          "Queue",
          "Stack",
          "Array"
        ],
        "correctAnswer": "Queue"
      },
      {
        "type": "match_following",
        "questionText": "Match BFS steps!",
        "pairs": [
          {
            "key": "Push",
            "value": "Add children"
          },
          {
            "key": "Pop",
            "value": "Process current"
          },
          {
            "key": "Order",
            "value": "Left to Right level"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to keep flying through levels.",
        "codeSnippet": "while (!queue.___())",
        "correctAnswer": "empty"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N) time and O(Width) space. This lets you see the whole floor of the forest before moving down! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Level order for [1(2,3)]?",
        "options": [
          "1, 2, 3",
          "2, 3, 1",
          "1, 3, 2"
        ],
        "correctAnswer": "1, 2, 3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Push left child to queue.",
        "codeSnippet": "if (curr->left) q.push(curr->___);",
        "correctAnswer": "left"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Scanning the floor! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I first in level?\"",
        "options": [
          "Leading the floor!",
          "No.",
          "0"
        ],
        "correctAnswer": "Leading the floor!"
      }
    ]
  },
  {
    "order": 15,
    "title": "The Mirror Image",
    "desc": "Swapping all left and right children (Invert Binary Tree).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Reflection! Every nest on the left moves to the right, and every right moves to the left. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Recursively swap children for every node! `temp = left; left = right; right = temp`. 🦜\"",
        "codeSnippet": "void invert(Node* root) {\n  if(!root) return;\n  swap(root->left, root->right);\n  invert(root->left);\n  invert(root->right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the \"Max Home\" problem also called?",
        "options": [
          "Invert Binary Tree",
          "Search Tree",
          "Pico Reflection"
        ],
        "correctAnswer": "Invert Binary Tree"
      },
      {
        "type": "match_following",
        "questionText": "Match Mirror steps!",
        "pairs": [
          {
            "key": "Swap",
            "value": "Change neighbors"
          },
          {
            "key": "Left Recurse",
            "value": "Mirror sub-left"
          },
          {
            "key": "Right Recurse",
            "value": "Mirror sub-right"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Built-in function to trade values.",
        "codeSnippet": "___ (root->left, root->right);",
        "correctAnswer": "swap"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Google famously asked this on a whiteboard. Now every bird in the academy knows the answer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for mirror of [1(2, NULL)]?",
        "options": [
          "[1(NULL, 2)]",
          "[1(2, NULL)]",
          "0"
        ],
        "correctAnswer": "[1(NULL, 2)]"
      },
      {
        "type": "code_fill_in",
        "questionText": "Mirror the right branch.",
        "codeSnippet": "invert(root->___);",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Double-sided beauty! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I inverted?\"",
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
    "order": 16,
    "title": "Identical Twins",
    "desc": "Checking if two trees are equal.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Duplicate Check! Are these two trees exactly the same in structure and value? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Two trees are identical if: 1. Roots are NULL. 2. Roots have same data. 3. Lefts are identical AND Rights are identical! 🦜\"",
        "codeSnippet": "bool isSame(Node* p, Node* q) {\n  if(!p && !q) return true;\n  if(!p || !q) return false;\n  return (p->val == q->val) && isSame(p->left, q->left) && isSame(p->right, q->right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if one tree is NULL and the other is not?",
        "options": [
          "Not identical",
          "Identical",
          "Error"
        ],
        "correctAnswer": "Not identical"
      },
      {
        "type": "match_following",
        "questionText": "Match Twin Rules!",
        "pairs": [
          {
            "key": "Data check",
            "value": "p->val == q->val"
          },
          {
            "key": "Structure check",
            "value": "Same children"
          },
          {
            "key": "Base Case",
            "value": "Both NULL"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Complexity of checking two trees.",
        "codeSnippet": "O( min(N1, ___) )",
        "correctAnswer": "N2"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complexity: O(N). We compare every nest one by one. Precision is paramount! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If data is same but children are swapped, are they identical?",
        "options": [
          "No",
          "Yes",
          "0"
        ],
        "correctAnswer": "No"
      },
      {
        "type": "code_fill_in",
        "questionText": "Verify right side identity.",
        "codeSnippet": "isSame(p->right, q->___);",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Mirror images are different! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I a twin?\"",
        "options": [
          "One of two!",
          "No.",
          "0"
        ],
        "correctAnswer": "One of two!"
      }
    ]
  },
  {
    "order": 17,
    "title": "BST Deletion (Basics)",
    "desc": "Removing a node from a BST (Intro).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Harvest! How to remove a nest while keeping the organized BST rules? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"1. No children? Just delete. 2. One child? Parent takes the grandchild. 3. Two children? Harder! 🦜\"",
        "codeSnippet": "if(!root->left && !root->right) return NULL;\nif(!root->left) return root->right;\nif(!root->right) return root->left;"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens when you delete a leaf node in a BST?",
        "options": [
          "Parent pointer becomes NULL",
          "Parent pointer stays same",
          "Error"
        ],
        "correctAnswer": "Parent pointer becomes NULL"
      },
      {
        "type": "match_following",
        "questionText": "Match Deletion Cases!",
        "pairs": [
          {
            "key": "Leaf",
            "value": "Delete node"
          },
          {
            "key": "1 Child",
            "value": "Promote child"
          },
          {
            "key": "2 Children",
            "value": "Special Swap"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Connector for the single child case.",
        "codeSnippet": "return root->___ ;",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"For the tricky case of 2 children, we usually find the smallest bird in the RIGHT sub-tree (Inorder Successor). Move it to the root, then delete the old successor! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for BST deletion?",
        "options": [
          "O(log N)",
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(log N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call to delete on left.",
        "codeSnippet": "root->left = delete(root->left, ___);",
        "correctAnswer": "val"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Careful surgery! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I harvested?\"",
        "options": [
          "Returning to the forest!",
          "No.",
          "0"
        ],
        "correctAnswer": "Returning to the forest!"
      }
    ]
  },
  {
    "order": 18,
    "title": "Inorder Successor",
    "desc": "Finding the next node in an inorder traversal.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The Next Bird! Who comes after me in the sorted sequence of the forest? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"In a BST: If you have a right child, the successor is the left-most bird in that right branch! 🦜\"",
        "codeSnippet": "Node* getSuccessor(Node* root) {\n  Node* curr = root->right;\n  while(curr && curr->left) curr = curr->left;\n  return curr;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where is the inorder successor of a node `n` if it has a right child?",
        "options": [
          "Left-most of right sub-tree",
          "Right-most of left sub-tree",
          "Parent"
        ],
        "correctAnswer": "Left-most of right sub-tree"
      },
      {
        "type": "match_following",
        "questionText": "Match Successor Logic!",
        "pairs": [
          {
            "key": "Right exist",
            "value": "Check right branch"
          },
          {
            "key": "Left-most",
            "value": "The smallest bigger"
          },
          {
            "key": "No right",
            "value": "Ancestor hunt"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Loop to find the left-most node.",
        "codeSnippet": "while (curr && curr->___) curr = curr->left;",
        "correctAnswer": "left"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"If there is no right child, the successor is the first ancestor whose LEFT child contains the current nest. It’s a trek up the branches! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Successor of 10 in [5, 10, 15]?",
        "options": [
          "15",
          "5",
          "None"
        ],
        "correctAnswer": "15"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update current to left.",
        "codeSnippet": "curr = curr->___;",
        "correctAnswer": "left"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"The next leader! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Who follows me?\"",
        "options": [
          "The successor!",
          "No.",
          "0"
        ],
        "correctAnswer": "The successor!"
      }
    ]
  },
  {
    "order": 19,
    "title": "Perfectly Full Completion",
    "desc": "Types of Binary Tree shapes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Geometry of Nests! Is the tree Full? Complete? Perfect? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Full: Each bird has 0 or 2 children. Complete: All levels full except maybe the last, filled left-to-right. Perfect: ALL levels full! 🦜\"",
        "codeSnippet": "bool isFull(Node* root) {\n  if(!root) return true;\n  if(!root->left && !root->right) return true;\n  if(root->left && root->right) return isFull(root->left) && isFull(root->right);\n  return false;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which tree type MUST have all leaf nodes at the same level?",
        "options": [
          "Perfect",
          "Full",
          "Complete"
        ],
        "correctAnswer": "Perfect"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree Shapes!",
        "pairs": [
          {
            "key": "Full",
            "value": "0 or 2 children"
          },
          {
            "key": "Complete",
            "value": "Packed Left"
          },
          {
            "key": "Perfect",
            "value": "Full + Even"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The property of a Perfect Binary Tree of height H.",
        "codeSnippet": "Nodes count = 2^H ___ 1 ;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Complete binary trees are the basis for HEAPS. They never have gaps in the nests! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is every Perfect tree also a Full tree?",
        "options": [
          "Yes",
          "No",
          "If Pico likes it"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check full property on right side.",
        "codeSnippet": "return isFull(root->left) && isFull(root->___);",
        "correctAnswer": "right"
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Shape and form! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Am I perfect?\"",
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
    "order": 20,
    "title": "Stage 1 Graduation",
    "desc": "The Tree Foundation Complete.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"STAGE 1 COMPLETE! You have conquered the first branches of the great Tree Academy. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"DFS, BFS, BST, and the Mirroring of the Woods. You are ready to climb higher! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Tree vs Graph?",
        "options": [
          "No cycles in Trees",
          "No edges in Trees"
        ],
        "correctAnswer": "No cycles in Trees"
      },
      {
        "type": "multiple_choice",
        "questionText": "BFS space complexity?",
        "options": [
          "O(Width)",
          "O(Height)"
        ],
        "correctAnswer": "O(Width)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Inorder traversal order?",
        "options": [
          "Left-Root-Right",
          "Root-Left-Right"
        ],
        "correctAnswer": "Left-Root-Right"
      },
      {
        "type": "multiple_choice",
        "questionText": "Mirror tree action?",
        "options": [
          "Swap children",
          "Invert values"
        ],
        "correctAnswer": "Swap children"
      },
      {
        "type": "multiple_choice",
        "questionText": "Identical tree check code?",
        "options": [
          "Recurse all branches",
          "Check root only"
        ],
        "correctAnswer": "Recurse all branches"
      },
      {
        "type": "match_following",
        "questionText": "Final Foundation Match!",
        "pairs": [
          {
            "key": "Trees",
            "value": "Branches!"
          },
          {
            "key": "Nodes",
            "value": "Nests!"
          },
          {
            "key": "Pico",
            "value": "Salutes!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Next, we face the Intermediate Stage: Balanced Trees, Views from the Canopy, and the Construction of the Forest! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "🦜 Pico: \"Are you ready for the canopy?\"",
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

module.exports = stage1;