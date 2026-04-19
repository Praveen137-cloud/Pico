const stage3 = [
  {
    "order": 41,
    "title": "The Forest Codec",
    "desc": "Serializing and Deserializing a Binary Tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Deep Storage! How do you turn a living tree into a string of seeds to send across the sky, and then regrow it exactly as it was? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use Level-Order or DFS! Use a special character like `#` or `NULL` to mark empty nests. A string like \"1,2,3,#,#,4,5\" can reconstruct the entire forest! 🦜\"",
        "codeSnippet": "string serialize(Node* root) {\n  if(!root) return \"#\";\n  return to_string(root->val) + \",\" + serialize(root->left) + \",\" + serialize(root->right);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of Tree Serialization?",
        "options": [
          "O(N)",
          "O(Height)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Codec pieces!",
        "pairs": [
          {
            "key": "Serialize",
            "value": "Tree to String"
          },
          {
            "key": "Deserialize",
            "value": "String to Tree"
          },
          {
            "key": "#",
            "value": "Empty nest marker"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Delimiter used to separate bird values in the string.",
        "codeSnippet": "res += to_string(node->val) + \"___\";",
        "correctAnswer": ","
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"During deserialization, use a queue of the split string. Pop a seed, grow a node, and recurse for its children! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is serialization important for trees?",
        "options": [
          "For saving to DB/File",
          "To make them taller",
          "Pico rule"
        ],
        "correctAnswer": "For saving to DB/File"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call to regrow the left branch.",
        "codeSnippet": "root->left = ___(q);",
        "correctAnswer": "deserialize"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Data in flight! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I encoded?\"",
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
    "title": "Max Path (Any-to-Any)",
    "desc": "Finding the maximum path sum between any two nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Ultimate Highway! What is the largest sum of seeds you can find on a path that starts anywhere and ends anywhere? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"At every node, calculate `root + LeftMax + RightMax` and update a global max. But only return `root + max(Left, Right)` to the parent! 🦜\"",
        "codeSnippet": "int dfs(Node* node, int& res) {\n  if(!node) return 0;\n  int l = max(0, dfs(node->left, res));\n  int r = max(0, dfs(node->right, res));\n  res = max(res, node->val + l + r);\n  return node->val + max(l, r);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we return `node + max(L, R)` instead of `node + L + R` to the parent?",
        "options": [
          "A path cannot branch in both directions up the tree",
          "To save memory",
          "Pico rule"
        ],
        "correctAnswer": "A path cannot branch in both directions up the tree"
      },
      {
        "type": "match_following",
        "questionText": "Match Path logic!",
        "pairs": [
          {
            "key": "max(0, ...)",
            "value": "Ignore negative branches"
          },
          {
            "key": "node->val + l + r",
            "value": "Current peak path candidate"
          },
          {
            "key": "Global res",
            "value": "The ultimate answer"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition to discard a branch that would decrease our sum.",
        "codeSnippet": "branchSum = ___ (0, dfs(branch));",
        "correctAnswer": "max"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(N). This is a God-mode tree problem that tests your understanding of recursive return values vs global state! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If a node is -10 and its children return 20 and 30, what is the max path at this node?",
        "options": [
          "40 (20 + 30 - 10)",
          "20",
          "30"
        ],
        "correctAnswer": "40 (20 + 30 - 10)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Update the global record.",
        "codeSnippet": "res = max(res, node->val + ___ + r);",
        "correctAnswer": "l"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Summit reached! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I the maximum?\"",
        "options": [
          "The ultimate path!",
          "No.",
          "0"
        ],
        "correctAnswer": "The ultimate path!"
      }
    ]
  },
  {
    "order": 43,
    "title": "BST Recovery (O(1))",
    "desc": "Swapping two incorrect nodes in a BST in constant space.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Sabotage! Two birds have swapped nests in our sorted BST. Can you find and fix them in O(1) space? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use Morris Traversal (Level 10 Linked List concept)! While flying inorder, keep track of transitions where `prev > current`. 🦜\"",
        "codeSnippet": "if(prev && prev->val > curr->val) {\n  if(!first) first = prev;\n  second = curr;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "In an inorder traversal of a BST, any violation `prev > current` indicates?",
        "options": [
          "The swapped nodes",
          "The tree is empty",
          "Pico rule"
        ],
        "correctAnswer": "The swapped nodes"
      },
      {
        "type": "match_following",
        "questionText": "Match Recovery roles!",
        "pairs": [
          {
            "key": "First",
            "value": "The first \"bigger\" bird"
          },
          {
            "key": "Second",
            "value": "The last \"smaller\" bird"
          },
          {
            "key": "Swap",
            "value": "Final fix"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initial value for the tracking pointers.",
        "codeSnippet": "Node* first = ___; Code* second = NULL;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Morris Traversal uses the tree’s own NULL pointers to create temporary back-links, allowing for O(1) space traversal! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding the swapped nodes with Morris?",
        "options": [
          "O(N) time, O(1) space",
          "O(N^2) time, O(1) space",
          "O(N) space"
        ],
        "correctAnswer": "O(N) time, O(1) space"
      },
      {
        "type": "code_fill_in",
        "questionText": "Final fix: swap the values.",
        "codeSnippet": "swap(first->val, second->___);",
        "correctAnswer": "val"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Restored order! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are they back in their nests?\"",
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
    "title": "BST From Preorder (O(N))",
    "desc": "Constructing a BST from its preorder traversal in linear time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Preorder Seedling! Construct a full BST from [8, 5, 1, 7, 10, 12] in one pass. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Pass a BOUND down! A bird can only land here if it is within (min, max). If not, it belongs to another branch. 🦜\"",
        "codeSnippet": "Node* build(int& i, int bound) {\n  if(i == n || pre[i] > bound) return NULL;\n  Node* root = new Node(pre[i++]);\n  root->left = build(i, root->val);\n  root->right = build(i, bound);\n  return root;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why is O(N) possible here while general construction is O(N log N)?",
        "options": [
          "BST properties limit valid placement",
          "Preorder is magic",
          "Pico rule"
        ],
        "correctAnswer": "BST properties limit valid placement"
      },
      {
        "type": "match_following",
        "questionText": "Match Bound logic!",
        "pairs": [
          {
            "key": "Left bound",
            "value": "Current Root value"
          },
          {
            "key": "Right bound",
            "value": "Previous Ancestor bound"
          },
          {
            "key": "i++",
            "value": "Consume seed"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Base case for exceeding the parent’s limit.",
        "codeSnippet": "if (i == n || pre[i] ___ bound) return NULL;",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"One pass, no sorting, no maps. This is the peak of BST architecting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for [8, 5, 1]? Root 8, Left 5, 5’s Left 1?",
        "options": [
          "Yes",
          "No",
          "0"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call for right sub-tree.",
        "codeSnippet": "root->right = build(i, ___);",
        "correctAnswer": "bound"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Perfect alignment! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I constructed?\"",
        "options": [
          "Linearly perfect!",
          "No.",
          "0"
        ],
        "correctAnswer": "Linearly perfect!"
      }
    ]
  },
  {
    "order": 45,
    "title": "Vertical Order (Elite)",
    "desc": "Returning the tree grouped by vertical columns.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Vertical Scan! Group birds by their horizontal distance, sorted by level and value! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use a Map of Multisets or a sorted vector! Level-Order ensures we go top-down. Map ensures we go left-to-right. 🦜\"",
        "codeSnippet": "map<int, vector<int>> res;\nqueue<pair<Node*, int>> q; q.push({root, 0});\nwhile(!q.empty()) {\n  auto p = q.pop();\n  res[p.hd].push_back(p.node->val);\n  // push children with hd-1, hd+1...\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if two nodes are at the same (HD, Level)?",
        "options": [
          "Sort them by value (usually)",
          "Pick first",
          "Error"
        ],
        "correctAnswer": "Sort them by value (usually)"
      },
      {
        "type": "match_following",
        "questionText": "Match Vertical pieces!",
        "pairs": [
          {
            "key": "HD",
            "value": "The Column Coordinate"
          },
          {
            "key": "Level",
            "value": "The Row Coordinate"
          },
          {
            "key": "Multiset",
            "value": "Sorted values at same cell"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Coordinate increase for the right child.",
        "codeSnippet": "q.push({curr->right, hd ___ 1});",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(N log N). This view is the definitive silhouette of the forest. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If root is at HD 0, its Right-Left grandchild is at HD?",
        "options": [
          "0 (0+1-1)",
          "1",
          "-1"
        ],
        "correctAnswer": "0 (0+1-1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Add to column results.",
        "codeSnippet": "columnMap[horizontalDist].___ (node->val);",
        "correctAnswer": "push_back"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Perfect columns! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Can you see the columns?\"",
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
    "order": 46,
    "title": "Burning Tree",
    "desc": "Calculating time to burn the entire tree from a leaf.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Forest Fire! If a fire starts at a target nest, how long until every bird must fly away? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"1. Map all nodes to their parents (BFS). 2. Use BFS from the target to spread fire in THREE directions (Left, Right, Parent)! 🦜\"",
        "codeSnippet": "while(!q.empty()) {\n  int sz = q.size();\n  for(int i=0; i<sz; i++) {\n    Node* curr = q.pop();\n    if(left && !vis[left]) q.push(left);\n    if(right && !vis[right]) q.push(right);\n    if(parent[curr] && !vis[parent[curr]]) q.push(parent[curr]);\n  }\n  time++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we need a parent map?",
        "options": [
          "To spread the fire upwards",
          "To save memory",
          "Pico rule"
        ],
        "correctAnswer": "To spread the fire upwards"
      },
      {
        "type": "match_following",
        "questionText": "Match Fire directions!",
        "pairs": [
          {
            "key": "Up",
            "value": "Parent Pointer"
          },
          {
            "key": "Down",
            "value": "Left/Right Children"
          },
          {
            "key": "Visited",
            "value": "Prevent infinite burn"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Increment time for each layer of spreading fire.",
        "codeSnippet": "if (fireSpreads) burnTime ___ 1;",
        "correctAnswer": "++"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N) time and space. The distance to the furthest node from the fire-start is the answer! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of building the parent map?",
        "options": [
          "O(N)",
          "O(Height)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Follow parent link.",
        "codeSnippet": "if (___[curr] && !visited[parent])",
        "correctAnswer": "parentMap"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Heat map complete! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did the forest burn?\"",
        "options": [
          "Every nest reached!",
          "No.",
          "0"
        ],
        "correctAnswer": "Every nest reached!"
      }
    ]
  },
  {
    "order": 47,
    "title": "Complete Tree Count",
    "desc": "Counting nodes in a Complete Binary Tree in O(log^2 N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Packed Forest! In a Complete Binary Tree, we can count the birds FASTER than O(N). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"If the leftmost and rightmost heights are the same, it is a Perfect tree: Count = `2^h - 1`. If not, recurse! 🦜\"",
        "codeSnippet": "if(lh == rh) return (1 << lh) - 1;\nreturn 1 + countNodes(left) + countNodes(right);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity for counting Complete Tree nodes?",
        "options": [
          "O(log^2 N)",
          "O(N)",
          "O(log N)"
        ],
        "correctAnswer": "O(log^2 N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Counting Logic!",
        "pairs": [
          {
            "key": "Leftmost h",
            "value": "Fastest depth"
          },
          {
            "key": "Rightmost h",
            "value": "Inner depth"
          },
          {
            "key": "(1<<h)-1",
            "value": "Perfect count"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Formula for total nodes in a perfect tree of height H.",
        "codeSnippet": "count = (1 ___ h) - 1;",
        "correctAnswer": "<<"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Because the tree is Complete, at least one sub-tree will always be Perfect at every level! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If left height = 4 and right height = 4, count is?",
        "options": [
          "15 (2^4 - 1)",
          "7",
          "16"
        ],
        "correctAnswer": "15 (2^4 - 1)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recurse if not perfect.",
        "codeSnippet": "return 1 + ___ (root->left) + ... ;",
        "correctAnswer": "countNodes"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Logarithmic precision! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I skip any birds?\"",
        "options": [
          "Only the math!",
          "No.",
          "0"
        ],
        "correctAnswer": "Only the math!"
      }
    ]
  },
  {
    "order": 48,
    "title": "Robbing the Forest",
    "desc": "Tree Dynamic Programming (House Robber III).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Seed Thief! You want to rob nests for the most seeds, but you CANNOT rob two adjacent nests (parent and child). 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Return two values at each node: {MaxIfRobbed, MaxIfNotRobbed}. If robbed: `root + child.notRobbed`. If not: `max(childRobbed, childNotRobbed)`. 🦜\"",
        "codeSnippet": "pair<int, int> rob(Node* root) {\n  if(!root) return {0, 0};\n  auto l = rob(root->left);\n  auto r = rob(root->right);\n  int res1 = root->val + l.second + r.second;\n  int res2 = max(l.first, l.second) + max(r.first, r.second);\n  return {res1, res2};\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Condition for robbing the current root?",
        "options": [
          "Must not rob children",
          "Must rob children",
          "0"
        ],
        "correctAnswer": "Must not rob children"
      },
      {
        "type": "match_following",
        "questionText": "Match Robbery logic!",
        "pairs": [
          {
            "key": "Robbed",
            "value": "root + children.notRobbed"
          },
          {
            "key": "Not Robbed",
            "value": "max sums from children"
          },
          {
            "key": "Result",
            "value": "max(pair)"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Max sum if we DON’T rob the current node.",
        "codeSnippet": "notRob = max(l.rob, l.notRob) ___ max(r.rob, r.notRob);",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N) time and space. This is a classic \"Choice\" DP on a hierarchical structure. 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If children have 10 and 20 seeds, and root has 5, which is better?",
        "options": [
          "Rob children (30)",
          "Rob root (5)",
          "0"
        ],
        "correctAnswer": "Rob children (30)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Return the choice pair.",
        "codeSnippet": "return {robMe, ___};",
        "correctAnswer": "dontRobMe"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Optimal harvesting! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I rob it all?\"",
        "options": [
          "The biggest haul!",
          "No.",
          "0"
        ],
        "correctAnswer": "The biggest haul!"
      }
    ]
  },
  {
    "order": 49,
    "title": "Distance K (Elite)",
    "desc": "Finding all nodes exactly distance K from a target node.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Radar Scan! Find every bird exactly K hops away from a specific target nest. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Just like Burning Tree! Map parents, then BFS 3-ways from the target until the level reached is K. 🦜\"",
        "codeSnippet": "while(!q.empty()) {\n  if(currLevel == k) return q.toVector();\n  // expand 3-ways...\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Time complexity for Distance K finding?",
        "options": [
          "O(N)",
          "O(Height^2)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Radar steps!",
        "pairs": [
          {
            "key": "Up",
            "value": "Parent map"
          },
          {
            "key": "Down",
            "value": "Left/Right"
          },
          {
            "key": "K-limit",
            "value": "Stop condition"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Stop BFS when level matches K.",
        "codeSnippet": "if (currentDistance ___ k) return result;",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This handles targets that are deep in the tree. The fire spreads through the family links! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "How many directions can fire spread from an internal node?",
        "options": [
          "3 (L, R, P)",
          "2",
          "1"
        ],
        "correctAnswer": "3 (L, R, P)"
      },
      {
        "type": "code_fill_in",
        "questionText": "BFS traversal loop.",
        "codeSnippet": "while (!q.___())",
        "correctAnswer": "empty"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Targets locked! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find everyone?\"",
        "options": [
          "Full radius cover!",
          "No.",
          "0"
        ],
        "correctAnswer": "Full radius cover!"
      }
    ]
  },
  {
    "order": 50,
    "title": "Elite Master Checkpoint",
    "desc": "Reflecting on the God-Mode stage.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"ELITE STAGE HALFWAY! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Codecs, Max Paths, Morris Traversal, and Tree DP. You are speaking the language of the forest gods! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Morris Traversal space?",
        "options": [
          "O(1)",
          "O(N)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Max Path Sum complexity?",
        "options": [
          "O(N)",
          "O(N^2)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Vertical order sort?",
        "options": [
          "HD, then Level",
          "Value only"
        ],
        "correctAnswer": "HD, then Level"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complete Tree count complexity?",
        "options": [
          "O(log^2 N)",
          "O(N)"
        ],
        "correctAnswer": "O(log^2 N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Tree DP robber choice?",
        "options": [
          "Robbed/NotRobbed pair",
          "Simple int"
        ],
        "correctAnswer": "Robbed/NotRobbed pair"
      },
      {
        "type": "match_following",
        "questionText": "Master Final Match!",
        "pairs": [
          {
            "key": "Pico",
            "value": "Speechless!"
          },
          {
            "key": "Trees",
            "value": "Conquered!"
          },
          {
            "key": "God-Mode",
            "value": "Unlocked!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Final 10 units: Path Sum Global, Maximum Width, and the Ultimate Graduation! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are you ready for the final stretch?\"",
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
    "title": "The Wide Horizon",
    "desc": "Calculating the maximum width of a binary tree.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Broadest Floor! What is the maximum number of birds that could fit in a single level, including the empty nests between them? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use Level-Order with indices! For every level, the width is `LastIndex - FirstIndex + 1`. To avoid overflow, subtract the first index of each level from all birds at that level! 🦜\"",
        "codeSnippet": "unsigned long long first, last;\nfor(int i=0; i<sz; i++) {\n  unsigned long long curIdx = q.front().second - startIdx;\n  if(i == 0) first = curIdx;\n  if(i == sz-1) last = curIdx;\n  // push children with 2*curIdx + 1, 2*curIdx + 2\n}\nmaxWidth = max(maxWidth, last - first + 1);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity of finding Maximum Width?",
        "options": [
          "O(N)",
          "O(Width)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "match_following",
        "questionText": "Match Width logic!",
        "pairs": [
          {
            "key": "Index",
            "value": "2*i + 1 and 2*i + 2"
          },
          {
            "key": "Overflow",
            "value": "Subtract startIdx"
          },
          {
            "key": "Last - First + 1",
            "value": "Level Width"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Index for the right child of index `i`.",
        "codeSnippet": "rightChildIdx = 2 * i ___ 2;",
        "correctAnswer": "+"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Even if there are NULLs between birds, the indices maintain the correct spacing. O(N) time and O(Width) space! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Maximum width of [1(2,3), (4,5), (6,7)]?",
        "options": [
          "4",
          "3",
          "2"
        ],
        "correctAnswer": "4"
      },
      {
        "type": "code_fill_in",
        "questionText": "Calculate relative index.",
        "codeSnippet": "long long cur_id = q.front().second ___ first_idx_of_level;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Horizon to horizon! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I the widest?\"",
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
    "order": 52,
    "title": "Path Sum Global (Max)",
    "desc": "Path Sum involving any node to any node (revisited).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Infinite Trail! Finding the absolute maximum sum along any contiguous path in the tree. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This is the elite version where nodes can have negative values. Remember: `max(0, ...)` is your best friend to prune bad branches! 🦜\"",
        "codeSnippet": "int dfs(Node* node, int& res) {\n  if(!node) return 0;\n  int l = max(0, dfs(node->left, res));\n  int r = max(0, dfs(node->right, res));\n  res = max(res, node->val + l + r);\n  return node->val + max(l, r);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "What if all node values are negative?",
        "options": [
          "The max is the single largest node value",
          "The max is 0",
          "Error"
        ],
        "correctAnswer": "The max is the single largest node value"
      },
      {
        "type": "match_following",
        "questionText": "Match Path Sum Global!",
        "pairs": [
          {
            "key": "l + r + node",
            "value": "Current max path through node"
          },
          {
            "key": "node + max(l, r)",
            "value": "Best path to contribute to parent"
          },
          {
            "key": "N",
            "value": "Time Complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Initialize results with the smallest possible integer.",
        "codeSnippet": "int maxSum = ___ ;",
        "correctAnswer": "INT_MIN"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"We return the best single branch to the parent, but update the global maximum with the best possible 'V' shape path at this node! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Result for a single node tree [-5]?",
        "options": [
          "-5",
          "0",
          "-1"
        ],
        "correctAnswer": "-5"
      },
      {
        "type": "code_fill_in",
        "questionText": "Compare with current global max.",
        "codeSnippet": "___ = max(globalMax, currentPath);",
        "correctAnswer": "globalMax"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"The peak of the summits! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I find the gold?\"",
        "options": [
          "Pure treasure!",
          "No.",
          "0"
        ],
        "correctAnswer": "Pure treasure!"
      }
    ]
  },
  {
    "order": 53,
    "title": "Morris Traversal Intro",
    "desc": "O(1) space Inorder traversal using Threaded Binary Trees.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Ghostly Links! Can you traverse the entire forest in inorder without using a stack or recursion? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Yes! Create temporary links from the RIGHT-MOST node of a left sub-tree back to the current root. These are called threads! 🦜\"",
        "codeSnippet": "if(!curr->left) { visit(curr); curr = curr->right; }\nelse {\n  pre = curr->left; while(pre->right && pre->right != curr) pre = pre->right;\n  if(!pre->right) { pre->right = curr; curr = curr->left; }\n  else { pre->right = NULL; visit(curr); curr = curr->right; }\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Space complexity of Morris Traversal?",
        "options": [
          "O(1)",
          "O(N)",
          "O(Height)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "match_following",
        "questionText": "Match Morris pieces!",
        "pairs": [
          {
            "key": "Thread",
            "value": "Link to predecessor"
          },
          {
            "key": "NULL thread",
            "value": "Cleanup after visiting"
          },
          {
            "key": "O(N)",
            "value": "Time complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Condition where a thread already exists.",
        "codeSnippet": "if (pre->right ___ curr)",
        "correctAnswer": "=="
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Every node is visited at most 3 times. O(N) time but O(1) space. This is how the bird-brain works on limited memory! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "In a single-node tree, how many times is it visited in Morris?",
        "options": [
          "1",
          "2",
          "0"
        ],
        "correctAnswer": "1"
      },
      {
        "type": "code_fill_in",
        "questionText": "Break the thread.",
        "codeSnippet": "pre->right = ___ ;",
        "correctAnswer": "NULL"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Threaded mastery! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I using extra space?\"",
        "options": [
          "Zero extra footprint!",
          "No.",
          "0"
        ],
        "correctAnswer": "Zero extra footprint!"
      }
    ]
  },
  {
    "order": 54,
    "title": "K-th Smallest in BST",
    "desc": "Finding the K-th smallest node in O(log N) or O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Ranked Search! Who is the 3rd smallest bird in the forest? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use Inorder Traversal! Since Inorder of a BST is sorted, the K-th bird processed is your answer. 🦜\"",
        "codeSnippet": "void inorder(Node* root, int& k, int& res) {\n  if(!root) return;\n  inorder(root->left, k, res);\n  if(--k == 0) { res = root->val; return; }\n  inorder(root->right, k, res);\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which traversal finds the K-th smallest in O(N) efficiently?",
        "options": [
          "Inorder",
          "Preorder",
          "Postorder"
        ],
        "correctAnswer": "Inorder"
      },
      {
        "type": "match_following",
        "questionText": "Match Ranked logic!",
        "pairs": [
          {
            "key": "Left-first",
            "value": "Inorder start"
          },
          {
            "key": "--k == 0",
            "value": "Target found"
          },
          {
            "key": "O(Height)",
            "value": "Space complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Check if current bird is the K-th target.",
        "codeSnippet": "if (___ k == 0) result = root->val;",
        "correctAnswer": "--"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"To do it in O(log N), every node must store the SIZE of its sub-tree. Then you can skip whole branches! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "K-th largest in BST?",
        "options": [
          "Reverse Inorder (Right-Root-Left)",
          "Standard Inorder",
          "0"
        ],
        "correctAnswer": "Reverse Inorder (Right-Root-Left)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call for left side.",
        "codeSnippet": "traverse(root->___, k, ans);",
        "correctAnswer": "left"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Ranked and ready! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I the K-th?\"",
        "options": [
          "Exactly the rank!",
          "No.",
          "0"
        ],
        "correctAnswer": "Exactly the rank!"
      }
    ]
  },
  {
    "order": 55,
    "title": "Construct BST (Sorted Array)",
    "desc": "Building a Height-Balanced BST from a sorted array.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Sorted Seedlings! Turn [1, 2, 3, 4, 5, 6, 7] into a perfectly balanced tree. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Pick the MIDDLE seed as root. Recurse for the left half and right half! 🦜\"",
        "codeSnippet": "Node* build(int l, int r) {\n  if(l > r) return NULL;\n  int m = l + (r-l)/2;\n  Node* root = new Node(nums[m]);\n  root->left = build(l, m-1);\n  root->right = build(m+1, r);\n  return root;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why pick the middle element?",
        "options": [
          "To keep the tree balanced",
          "Because it is the largest",
          "Pico rule"
        ],
        "correctAnswer": "To keep the tree balanced"
      },
      {
        "type": "match_following",
        "questionText": "Match Array-BST pieces!",
        "pairs": [
          {
            "key": "Mid",
            "value": "Root node"
          },
          {
            "key": "l to mid-1",
            "value": "Left sub-tree"
          },
          {
            "key": "mid+1 to r",
            "value": "Right sub-tree"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Constraint for the middle index split.",
        "codeSnippet": "mid = l + (r - l) ___ 2;",
        "correctAnswer": "/"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(N) time and O(log N) space. This creates a tree with minimum possible height! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Height of a balanced BST with 7 nodes?",
        "options": [
          "3",
          "7",
          "1"
        ],
        "correctAnswer": "3"
      },
      {
        "type": "code_fill_in",
        "questionText": "Recursive call to build right side.",
        "codeSnippet": "root->right = build(mid + 1, ___);",
        "correctAnswer": "r"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Perfectly poised! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I balanced?\"",
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
    "order": 56,
    "title": "BST Range Sum",
    "desc": "Calculating the sum of all nodes in range [L, R].",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Range Harvest! Sum up all the seeds that have values between Low and High. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Pruning! If root < Low, don’t search left. If root > High, don’t search right. Sum valid birds and move on! 🦜\"",
        "codeSnippet": "if(root->val >= low && root->val <= high) sum += root->val;\nif(root->val > low) sum += rangeSum(left);\nif(root->val < high) sum += rangeSum(right);"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why skip the left branch if `root->val < low`?",
        "options": [
          "BST property: all left nodes are also < low",
          "Because Pico says so",
          "To save memory"
        ],
        "correctAnswer": "BST property: all left nodes are also < low"
      },
      {
        "type": "match_following",
        "questionText": "Match Range logic!",
        "pairs": [
          {
            "key": "val < Low",
            "value": "Prune Left"
          },
          {
            "key": "val > High",
            "value": "Prune Right"
          },
          {
            "key": "val in range",
            "value": "Add to result"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Compare root value with the low bound.",
        "codeSnippet": "if (root->val ___ low) sum += dfs(root->left);",
        "correctAnswer": ">"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Complexity: O(N) in worst case, but O(Range) in practice if many nodes are pruned. Elite efficiency! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Range sum of [10(5,15)] for [6, 12]?",
        "options": [
          "10",
          "15",
          "30"
        ],
        "correctAnswer": "10"
      },
      {
        "type": "code_fill_in",
        "questionText": "Check the high bound for right search.",
        "codeSnippet": "if (root->val < ___) sum += dfs(root->right);",
        "correctAnswer": "high"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Selective gathering! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Is the sum correct?\"",
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
    "order": 57,
    "title": "The Ancestor Check",
    "desc": "Determining if Node A is an ancestor of Node B.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"Family Tree! Is bird A a grandparent or higher of bird B? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Use Entry and Exit times! Bird A is an ancestor of B if `Entry[A] < Entry[B]` AND `Exit[A] > Exit[B]`. 🦜\"",
        "codeSnippet": "void dfs(u) {\n  tin[u] = timer++;\n  for(v : adj[u]) dfs(v);\n  tout[u] = timer++;\n}"
      },
      {
        "type": "multiple_choice",
        "questionText": "Algorithm term for entry/exit time labels?",
        "options": [
          "Discovery Times",
          "Bird Tags",
          "Nest IDs"
        ],
        "correctAnswer": "Discovery Times"
      },
      {
        "type": "match_following",
        "questionText": "Match Ancestry times!",
        "pairs": [
          {
            "key": "Entry[A] < Entry[B]",
            "value": "A started before B"
          },
          {
            "key": "Exit[A] > Exit[B]",
            "value": "A finished after B"
          },
          {
            "key": "O(N)",
            "value": "Complexity"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "The property for A to be an ancestor of B.",
        "codeSnippet": "if (tin[a] <= tin[b] ___ tout[a] >= tout[b])",
        "correctAnswer": "&&"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"This is a fundamental concept in Graphs also! O(N) to label, O(1) to check! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Is the root an ancestor of every node?",
        "options": [
          "Yes",
          "No",
          "If Pico likes it"
        ],
        "correctAnswer": "Yes"
      },
      {
        "type": "code_fill_in",
        "questionText": "Mark the timer.",
        "codeSnippet": "tin[u] = ___++;",
        "correctAnswer": "timer"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Trace the lineage! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Am I the elder?\"",
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
    "order": 58,
    "title": "Binary Tree Coloring",
    "desc": "Game theory on trees: Can Player 1 win by picking a node?",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"The Strategy Game! Pick a node to cut the tree. You get all birds in that branch. Can you beat the opponent? 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Three directions to win: 1. Your Left sub-tree. 2. Your Right sub-tree. 3. The REST of the tree (N - L - R - 1). 🦜\"",
        "codeSnippet": "int l = count(target->left);\nint r = count(target->right);\nint rest = n - l - r - 1;\nif(l > n/2 || r > n/2 || rest > n/2) return true;"
      },
      {
        "type": "multiple_choice",
        "questionText": "Condition to win in tree coloring?",
        "options": [
          "Pick a sub-tree with > 50% nodes",
          "Pick the root",
          "0"
        ],
        "correctAnswer": "Pick a sub-tree with > 50% nodes"
      },
      {
        "type": "match_following",
        "questionText": "Match Coloring areas!",
        "pairs": [
          {
            "key": "L",
            "value": "Left children count"
          },
          {
            "key": "R",
            "value": "Right children count"
          },
          {
            "key": "n - L - R - 1",
            "value": "Everyone else"
          }
        ]
      },
      {
        "type": "programming_board",
        "questionText": "Calculate the size of the rest of the tree.",
        "codeSnippet": "rest = totalNodes - l - r ___ 1;",
        "correctAnswer": "-"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"O(N) time to find counts. Game theory meets tree traversal! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "If N=11 and your Left sub-tree has 6 birds, can you win?",
        "options": [
          "Yes (6 > 5.5)",
          "No",
          "0"
        ],
        "correctAnswer": "Yes (6 > 5.5)"
      },
      {
        "type": "code_fill_in",
        "questionText": "Count nodes in left branch.",
        "codeSnippet": "l = ___ (target->left);",
        "correctAnswer": "count"
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Checkmate in the canopy! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Did I win?\"",
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
    "title": "The Master Review (Elite)",
    "desc": "Elite Trees Mastery Review.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"THE ELITE FINALE! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Maximum Width, Path Sum Global, Morris Traversal, and Ancestry Timestamps. You have touched the peak of hierarchical logic! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "Morris Traversal space?",
        "options": [
          "O(1)",
          "O(Height)"
        ],
        "correctAnswer": "O(1)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Maximum Width index logic?",
        "options": [
          "2*i + 1",
          "i + 1"
        ],
        "correctAnswer": "2*i + 1"
      },
      {
        "type": "multiple_choice",
        "questionText": "K-th smallest in BST traversal?",
        "options": [
          "Inorder",
          "Postorder"
        ],
        "correctAnswer": "Inorder"
      },
      {
        "type": "multiple_choice",
        "questionText": "Tree coloring win condition?",
        "options": [
          "> N/2 nodes",
          "> 0"
        ],
        "correctAnswer": "> N/2 nodes"
      },
      {
        "type": "multiple_choice",
        "questionText": "Ancestry check using timer?",
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
            "key": "Pico",
            "value": "Speechless!"
          },
          {
            "key": "Hierarchical",
            "value": "Mastered!"
          },
          {
            "key": "Tree DP",
            "value": "Unlocked!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Final unit: The Trees Academy Graduation! You are a God of the Forest! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are you ready to graduate?\"",
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
    "title": "Trees Graduation",
    "desc": "The Subject Complete: God-Mode Master.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "By Pico: \"GRADUATION DAY! You have completed all 60 units of the Trees Academy. 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"From basic traversals to the complex O(1) Morris threads. You have mastered the hierarchical fortress! 🦜\""
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
        "questionText": "Binary Search Tree property?",
        "options": [
          "Left < Root < Right",
          "Left > Root"
        ],
        "correctAnswer": "Left < Root < Right"
      },
      {
        "type": "multiple_choice",
        "questionText": "Tree DP return?",
        "options": [
          "Choice state pair",
          "Single int"
        ],
        "correctAnswer": "Choice state pair"
      },
      {
        "type": "multiple_choice",
        "questionText": "BFS for Trees?",
        "options": [
          "Level-Order",
          "Preorder"
        ],
        "correctAnswer": "Level-Order"
      },
      {
        "type": "multiple_choice",
        "questionText": "Threaded Tree benefit?",
        "options": [
          "Space efficiency",
          "Height reduction"
        ],
        "correctAnswer": "Space efficiency"
      },
      {
        "type": "multiple_choice",
        "questionText": "LCA complexity in BT?",
        "options": [
          "O(N)",
          "O(1)"
        ],
        "correctAnswer": "O(N)"
      },
      {
        "type": "multiple_choice",
        "questionText": "Maximum Path Sum approach?",
        "options": [
          "DFS with Global Max",
          "Simple BFS"
        ],
        "correctAnswer": "DFS with Global Max"
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
            "key": "Forest",
            "value": "Mapped!"
          },
          {
            "key": "Next",
            "value": "GRAPHS!"
          }
        ]
      },
      {
        "type": "teaching",
        "questionText": "By Pico: \"Trees are done. You have conquered the canopy. Next, we enter the interconnected web of logic: GRAPHS! SQUAWK! 🦜\""
      },
      {
        "type": "multiple_choice",
        "questionText": "By Pico: \"Are you ready for the network?\"",
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