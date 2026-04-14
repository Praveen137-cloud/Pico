const stage4 = [
  {
    "order": 61,
    "title": "Unit 61: Intro to Segment Trees",
    "desc": "The ultimate range query weapon: Point updates and range results in logarithmic time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.1] The Division of Labor",
        "explanation": "Ace: 'When the forest grows too dense, we cannot count every leaf one by one. We must divide the forest into ranges and store the summary of each range in a master tree.' Pico: 'A tree that watches over the segments of an array! Meta-tree! 🦜'",
        "codeSnippet": "void build(int node, int start, int end) {\n  if(start == end) tree[node] = arr[start];\n  else {\n    int mid = (start + end) / 2;\n    build(2*node, start, mid);\n    build(2*node+1, mid+1, end);\n    tree[node] = tree[2*node] + tree[2*node+1];\n  }\n}",
        "encouragementText": "Ace: 'Structure is the lens through which we view chaos.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity to update a single element in a Segment Tree?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico rule"],
        "correctAnswer": "O(log N)",
        "explanation": "Updating a point requires updating its path of ancestors up to the root, which is proportional to the tree height."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Representation",
        "explanation": "Ace: 'A segment tree for an array of size N has roughly 4N nodes. Each node represents a range [L, R]. If L == R, it is a leaf.' Pico: '4 nests for every seed! 🦜'",
        "encouragementText": "Pico: 'Lots of nests! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Memory allocation for a Segment Tree on an array of size N.",
        "codeSnippet": "int segment_tree[___ * N];",
        "correctAnswer": "4",
        "explanation": "4N is the safe upper bound for a pointer-based or array-based segment tree."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Query Property",
        "explanation": "Ace: 'Segment trees are associative. They work for SUM, MIN, MAX, GCD, and any operation where `op(A, op(B, C)) == op(op(A, B), C)`.'",
        "encouragementText": "Ace: 'Associativity is the key to range-merging.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which of these CANNOT be calculated easily with a simple Segment Tree?",
        "options": ["Range Sum", "Range Maximum", "Range Median", "Range GCD"],
        "correctAnswer": "Range Median",
        "explanation": "Median is not associative—you can't find the median of the whole by just knowing the medians of two halves."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Logarithmic Query",
        "explanation": "Ace: 'A range query [L, R] decomposes into at most 2 * log N nodes. This ensures the query remains lightning fast.' Pico: 'Slicing the forest into few pieces! 🦜'",
        "encouragementText": "Pico: 'Slice and dice! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base case for range query in Segment Tree.",
        "codeSnippet": "if (L <= start && end <= R) return ___ ;",
        "correctAnswer": "tree[node]",
        "explanation": "If current range is entirely within query range, return the whole precomputed value."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Segment Watcher",
        "explanation": "You have initialized the Range Radar. You can see the properties of any segment of data in logarithmic time. Ace: 'The gaze is structured.'",
        "encouragementText": "Pico: 'I see the segments! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SEGTREE nodes!",
        "pairs": [
          { "key": "Root", "value": "Range [0, N-1]" },
          { "key": "Left Child", "value": "Range [L, mid]" },
          { "key": "Right Child", "value": "Range [mid+1, R]" }
        ]
      }
    ]
  },
  {
    "order": 62,
    "title": "Unit 62: Segment Tree Construction",
    "desc": "Building the master tree from the ground up in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.2] The Growing Woods",
        "explanation": "Ace: 'Construction starts from the leaves. We place the original values at the bottom and merge them upward to the root.' Pico: 'Stacking the bird-stats! 🦜'",
        "codeSnippet": "void merge(int node) {\n  tree[node] = tree[2*node] + tree[2*node+1];\n}",
        "encouragementText": "Ace: 'Synthesis is the final stage of building.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity to build a Segment Tree for N elements?",
        "options": ["O(N log N)", "O(N)", "O(N^2)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Although it looks recursive, the total number of nodes is ~2N, and each is processed once."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Array Implementation",
        "explanation": "Ace: 'We use a 1-indexed array for the tree. Node `i` has children at `2i` and `2i+1`.' Pico: 'Family math! 🦜'",
        "encouragementText": "Pico: '2i and 2i+1! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Index of the right child of node 'u'.",
        "codeSnippet": "int right_child = ___ ;",
        "correctAnswer": "2*u + 1",
        "explanation": "Standard binary tree indexing in an array."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Perfect Binary Tree",
        "explanation": "Ace: 'If N is a power of 2, the segment tree is a perfect binary tree. For other N, we pad with identity elements or simply handle the boundaries.'",
        "encouragementText": "Ace: 'Adaptability is the mark of a robust algorithm.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'identity element' for a Range Minimum Query?",
        "options": ["0", "-1", "Infinity", "Pico guess"],
        "correctAnswer": "Infinity",
        "explanation": "min(x, Infinity) is always x, so it won't affect the range minimum."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Recursive Build",
        "explanation": "Ace: 'Construction is a post-order traversal. We build sub-trees, then compute the parent.'",
        "encouragementText": "Pico: 'Bottom up! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for leaf node in build function.",
        "codeSnippet": "if (start ___ end) { ... }",
        "correctAnswer": "==",
        "explanation": "A range with start == end represents a single array element."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Tree Planter",
        "explanation": "The tree is planted. Its roots are deep in the array, and its branches reach every range. Ace: 'The foundation is solid.'",
        "encouragementText": "Pico: 'Tall and strong! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SEGTREE steps!",
        "pairs": [
          { "key": "Build", "value": "O(N)" },
          { "key": "Point Update", "value": "O(log N)" },
          { "key": "Range Query", "value": "O(log N)" }
        ]
      }
    ]
  },
  {
    "order": 63,
    "title": "Unit 63: Range Minimum Query (RMQ)",
    "desc": "Finding the smallest bird in any segment.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.3] The Lowest Valley",
        "explanation": "Ace: 'RMQ finds the minimum value in array indices [L, R]. Combined with segment trees, we can also perform point updates simultaneously.' Pico: 'Finding the tiniest seed in a specific patch! 🦜'",
        "codeSnippet": "int query(int node, int start, int end, int L, int R) {\n  if(R < start || end < L) return INF;\n  if(L <= start && end <= R) return tree[node];\n  ...\n  return min(left_res, right_res);\n}",
        "encouragementText": "Ace: 'Precision in selection is the core of query logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if the current node's range is COMPLETELY OUTSIDE the query range [L, R]?",
        "options": ["Return 0", "Throw error", "Return identity (eg INF for min)", "Pico guess"],
        "correctAnswer": "Return identity (eg INF for min)",
        "explanation": "Returning an identity element ensures it doesn't modify the final result when merged."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Overlap Cases",
        "explanation": "Ace: 'Every node in the recursion is either: 1. Completely Outside, 2. Completely Inside, 3. Partially Overlapping.' Pico: 'Three paths for every bird! 🦜'",
        "encouragementText": "Pico: 'Check the bounds! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merge function for RMQ.",
        "codeSnippet": "tree[node] = ___ (tree[2*node], tree[2*node+1]);",
        "correctAnswer": "min",
        "explanation": "For RMQ, we take the minimum of the two child ranges."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Point Update in RMQ",
        "explanation": "Ace: 'When we change an element, we must update all nodes along the path from leaf to root. O(log N).' Pico: 'A ripple in the forest! 🦜'",
        "encouragementText": "Ace: 'Consistency must be maintained from the ground up.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many point updates can we perform in the time it takes for one O(N) array scan?",
        "options": ["1", "log N", "N / log N", "Pico guess"],
        "correctAnswer": "N / log N",
        "explanation": "Segment trees give massive multiplier efficiency for high-frequency updates."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memory Locality",
        "explanation": "Ace: 'Segment tree arrays are good for CPU caching because parent and children are often near each other in memory.'",
        "encouragementText": "Pico: 'Fast memory! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Update call for parent node.",
        "codeSnippet": "if (idx <= mid) update(2*node, ...);\nelse update(2*node+1, ...);\ntree[node] = min(tree[2*node], tree[2*node+1]);",
        "correctAnswer": "tree[2*node+1]",
        "explanation": "Updating the current node value based on the potentially updated children."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Valley Tracer",
        "explanation": "You have mastered the search for the minimum. No depth is hidden from you. Ace: 'The floor is found.'",
        "encouragementText": "Pico: 'Going low! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Query return values!",
        "pairs": [
          { "key": "Sum Query", "value": "Return 0" },
          { "key": "Min Query", "value": "Return INF" },
          { "key": "Max Query", "value": "Return -INF" }
        ]
      }
    ]
  },
  {
    "order": 64,
    "title": "Unit 64: Lazy Propagation Foundations",
    "desc": "Updating whole ranges in O(log N) - The lazier, the faster.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.4] The Delayed Action",
        "explanation": "Ace: 'What if we want to add 10 to every element in [L, R]? Updating N leaves is O(N log N). Lazy Propagation marks nodes and only updates their children when we actually visit them.' Pico: 'Don't do work until you have to! The Pico way! 🦜'",
        "codeSnippet": "void push(int node) {\n  if(lazy[node] != 0) {\n    tree[2*node] += lazy[node];\n    lazy[2*node] += lazy[node];\n    tree[2*node+1] += lazy[node];\n    lazy[2*node+1] += lazy[node];\n    lazy[node] = 0;\n  }\n}",
        "encouragementText": "Ace: 'Strategic procrastination is a form of efficiency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a 'Lazy' value at Node U represent?",
        "options": ["A pending update for Node U itself", "A pending update for U's children", "A deleted node", "Pico rule"],
        "correctAnswer": "A pending update for U's children",
        "explanation": "The current node is already updated, but the update hasn't reached the children yet."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Addition",
        "explanation": "Ace: 'For a range sum tree, adding X to a range of size S means adding S*X to the tree[node].' Pico: 'Multiply the effort! 🦜'",
        "encouragementText": "Pico: 'Math is magic! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating range sum tree node in Lazy Prop.",
        "codeSnippet": "tree[node] += (end - start + 1) * ___ ;",
        "correctAnswer": "val",
        "explanation": "Every element in the range [start, end] is increased by val."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Push Operation",
        "explanation": "Ace: 'Whenever we visit a node (in query or update), we MUST call `push()` to propagate pending updates down. This is the only way to ensure correct results.'",
        "encouragementText": "Ace: 'Information must flow when the search begins.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When do you call push()?",
        "options": ["Only in update", "Only in query", "Before recursing to children in both update and query", "Pico guess"],
        "correctAnswer": "Before recursing to children in both update and query",
        "explanation": "If children have stale data, they will return wrong results to the query."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Complexity of Lazy",
        "explanation": "Ace: 'Range update becomes O(log N). This is a massive jump from O(N log N).' Pico: 'Skip the hard work! 🦜'",
        "encouragementText": "Pico: 'Lazy wins! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Setting the lazy tag in update.",
        "codeSnippet": "if (L <= start && end <= R) {\n  tree[node] += (end - start + 1) * val;\n  lazy[node] += ___ ;\n  return;\n}",
        "correctAnswer": "val",
        "explanation": "Marking the node as having a pending update for its children."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Procrastinator",
        "explanation": "You have mastered the art of the lazy tag. You only work when the query demands it. Ace: 'The delay is calculated.'",
        "encouragementText": "Pico: 'Take a nap, then query! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Lazy steps!",
        "pairs": [
          { "key": "Apply", "value": "Update current node" },
          { "key": "Tag", "value": "Update lazy[node]" },
          { "key": "Push", "value": "Clear lazy[node] to children" }
        ]
      }
    ]
  },
  {
    "order": 65,
    "title": "Unit 65: Range Updates (Deep Dive)",
    "desc": "Range assignments and toggles: Beyond simple addition.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.5] The Grand Assignment",
        "explanation": "Ace: 'What if we want to SET every element to X? This is different from addition. The lazy value replaces the subtree instead of incrementing it.' Pico: 'Total takeover of the nests! 🦜'",
        "codeSnippet": "if(set_lazy[node] != -1) {\n  tree[node] = (end - start + 1) * set_lazy[node];\n  set_lazy[2*node] = set_lazy[node];\n  set_lazy[2*node+1] = set_lazy[node];\n  set_lazy[node] = -1;\n}",
        "encouragementText": "Ace: 'Consistency in command is the hallmark of leadership.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What's the best sentinel for an 'Assignment' lazy tag if values can be 0 or positive?",
        "options": ["0", "-1", "INF", "Pico rule"],
        "correctAnswer": "-1",
        "explanation": "We need a value that cannot appear as a legitimate assignment to indicate 'no pending update'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Flip (XOR)",
        "explanation": "Ace: 'For a bit-tree (0/1), we can flip a range (0 becomes 1, 1 becomes 0). `lazy[node] ^= 1`. Double flip is identity!' Pico: 'Toggle the lights! 🦜'",
        "encouragementText": "Pico: 'Flip flop! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Update sum in a 0/1 range-flip tree.",
        "codeSnippet": "tree[node] = (end - start + 1) ___ tree[node];",
        "correctAnswer": "-",
        "explanation": "The number of 1s becomes (Size - Current Count of 1s)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Multiple Lazy Tags",
        "explanation": "Ace: 'If you have addition AND assignment, order matters. Usually, assignment clears pending additions. Handling this requires a hierarchy of tags.'",
        "encouragementText": "Ace: 'Complexity must be governed by priority.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens to a 'Set to X' tag when an 'Add Y' tag arrives?",
        "options": ["Set to X+Y", "Error", "Ignore Add Y", "Pico guess"],
        "correctAnswer": "Set to X+Y",
        "explanation": "An assignment followed by an addition is equivalent to a single updated assignment."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Performance Tuning",
        "explanation": "Ace: 'In many contests, simple iterative segment trees are faster because they avoid the O(log N) overhead of recursion and push() calls.'",
        "encouragementText": "Pico: 'Go fast! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Resetting the assignment tag.",
        "codeSnippet": "set_lazy[node] = ___ ;",
        "correctAnswer": "-1",
        "explanation": "Clearing the pending status after propagation."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Pattern Architect",
        "explanation": "You have customized the flow. You can impose any pattern on the forest with a single decree. Ace: 'The blueprint is executed.'",
        "encouragementText": "Pico: 'A new world! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Operation types!",
        "pairs": [
          { "key": "Range Add", "value": "lazy += x" },
          { "key": "Range Set", "value": "lazy = x" },
          { "key": "Range Flip", "value": "lazy ^= 1" }
        ]
      }
    ]
  },
  {
    "order": 66,
    "title": "Unit 66: Segment Tree Beats",
    "desc": "Mastering non-trivial range updates like range_chmin(L, R, X).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.6] The Impossible Update",
        "explanation": "Ace: 'How do you do `a[i] = min(a[i], X)` for a whole range? This isn't associative in the normal sense. Enter \"Segment Tree Beats\": We maintain max, second_max, and count_max.' Pico: 'Beating the constraints! 🦜'",
        "codeSnippet": "if (v >= max1) return;\nif (v > max2) {\n  update_node(node, v);\n  return;\n}\npush(node); ...",
        "encouragementText": "Ace: 'Mastery is solving what others deem impossible.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When can we lazily update a `range_chmin(X)` on a node?",
        "options": ["Always", "If X is greater than max1", "If X is strictly between max1 and max2", "Pico rule"],
        "correctAnswer": "If X is strictly between max1 and max2",
        "explanation": "In this range, we ONLY change the current maximum values to X, while smaller values (second_max and below) stay unchanged. This allows lazy propagation."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Amortized Complexity",
        "explanation": "Ace: 'Segment Tree Beats has a complex O(log^2 N) or O(log N) amortized complexity. It feels like O(log N) in practice.' Pico: 'Magic math! 🦜'",
        "encouragementText": "Pico: 'Amortize it! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "If X >= current max, does range_chmin(X) change anything?",
        "codeSnippet": "if (X >= tree[node].max1) return ___ ;",
        "correctAnswer": "true",
        "explanation": "If the ceiling X is higher than our current maximum, no element in the sub-tree is reduced."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Historical Tracking",
        "explanation": "Ace: 'Beats can also solve \"Historical Maximums\"—what was the highest value this node EVER held during all updates?'",
        "encouragementText": "Ace: 'Memory is the second dimension of the tree.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we need max2 (second largest)?",
        "options": ["To know if only the max is affected", "For extra RAM", "To look smart", "Pico guess"],
        "correctAnswer": "To know if only the max is affected",
        "explanation": "If X <= max2, then elements other than just the current maximum will be changed, breaking the simple lazy prop."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Implementation Complexity",
        "explanation": "Ace: 'This is some of the hardest code to write in standard competitions. Error-free implementation is the mark of a God-Tier bird.'",
        "encouragementText": "Pico: 'I'll try my best! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Update sum in range_chmin(X) where only max is affected.",
        "codeSnippet": "tree[node].sum -= (long long)cnt1 * (max1 - ___ );",
        "correctAnswer": "X",
        "explanation": "The change in sum is the reduction of all 'max1' elements to 'X'."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Bound Master",
        "explanation": "You have mastered the conditional update. You can squeeze the forest within any boundary. Ace: 'The limits are yours to define.'",
        "encouragementText": "Pico: 'Tighten the range! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SEGTREE Beats cases!",
        "pairs": [
          { "key": "X >= max1", "value": "Return (NOP)" },
          { "key": "max1 > X > max2", "value": "Lazy Update" },
          { "key": "X <= max2", "value": "Recurse deeper" }
        ]
      }
    ]
  },
  {
    "order": 67,
    "title": "Unit 67: Implicit Segment Trees",
    "desc": "Trees without arrays: Handling massive ranges (10^9) with dynamic nodes.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.7] The Void Walker",
        "explanation": "Ace: 'What if your array is size 1 billion? A 4N array would take 16GB of RAM. We use pointers and only create nodes when we actually update them.' Pico: 'The tree that grows as you need it! 🦜'",
        "codeSnippet": "struct Node {\n  long long val;\n  Node *lc, *rc;\n};",
        "encouragementText": "Ace: 'Existence should be on-demand.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the space complexity to perform Q updates on a range of size 10^9 in an Implicit Segment Tree?",
        "options": ["O(N)", "O(Q log N)", "O(Q)", "Pico rule"],
        "correctAnswer": "O(Q log N)",
        "explanation": "Each update creates log N new nodes (one for each level of the path)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Null Pointers",
        "explanation": "Ace: 'If a node's child is NULL, it means the whole sub-range has the default value (e.g. 0).' Pico: 'A ghost range! 🦜'",
        "encouragementText": "Pico: 'Visit the ghosts! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Creating a node on demand.",
        "codeSnippet": "if (!node->lc) node->lc = ___ Node();",
        "correctAnswer": "new",
        "explanation": "Allocating memory only when the search path enters an empty segment."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Memory Management",
        "explanation": "Ace: 'Be careful! Memory allocation with `new` is slow. In competitive programming, we usually pre-allocate a large pool of nodes to stay fast.'",
        "encouragementText": "Ace: 'Speed is the byproduct of foresight.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can an Implicit Segment Tree exceed memory if Q is very large (eg 10^6)?",
        "options": ["No", "Yes", "Depends on the range", "Pico guess"],
        "correctAnswer": "Yes",
        "explanation": "10^6 * 30 nodes * 16 bytes/node = ~480MB. This can hit common 512MB memory limits."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Range Queries in Implicit",
        "explanation": "Ace: 'The query logic is almost identical. If a node is NULL, return the identity value immediately.'",
        "encouragementText": "Pico: 'Fast skip! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Empty range return.",
        "codeSnippet": "if (!node) return ___ ;",
        "correctAnswer": "0",
        "explanation": "Returning the default identity for an unvisited (empty) range."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Virtual Gardener",
        "explanation": "You have transcended the physical limit of the array. You can manage a forest that spans the universe. Ace: 'The void is yours to fill.'",
        "encouragementText": "Pico: 'Unlimited space! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SEGTREE types!",
        "pairs": [
          { "key": "Implicit", "value": "O(Q log N) Space" },
          { "key": "Iterative", "value": "Fastest Time" },
          { "key": "Standard", "value": "easiest to write" }
        ]
      }
    ]
  },
  {
    "order": 68,
    "title": "Unit 68: Segment Tree Optimization (Iterative)",
    "desc": "The non-recursive, super-fast 'Zkw-style' implementation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.8] The Industrial Machine",
        "explanation": "Ace: 'Recursive calls have overhead. Iterative segment trees use a flat array and simple loops. They are often 3x to 5x faster.' Pico: 'Stripping the fluff! 🦜'",
        "codeSnippet": "for (l += n, r += n; l < r; l >>= 1, r >>= 1) {\n  if (l&1) res = op(res, tree[l++]);\n  if (r&1) res = op(res, tree[--r]);\n}",
        "encouragementText": "Ace: 'Performance is the final stage of technical evolution.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In an iterative segment tree, where are the leaf nodes stored?",
        "options": ["Indices 0 to N-1", "Indices N to 2N-1", "Everywhere", "Pico rule"],
        "correctAnswer": "Indices N to 2N-1",
        "explanation": "The first N elements are internal parent nodes; the next N are the actual array elements."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bitwise Navigation",
        "explanation": "Ace: 'Moving from node `i` to parent is just `i >> 1`. Moving to left child is `i << 1`.' Pico: 'Bitwise flight! 🦜'",
        "encouragementText": "Pico: 'Shift it! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Point update in iterative tree.",
        "codeSnippet": "for (tree[p += n] = value; p > 1; p >>= 1) \n  tree[p >> 1] = ___ (tree[p], tree[p ^ 1]);",
        "correctAnswer": "op",
        "explanation": "Merging the current node with its sibling `p^1` and updating the parent."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Half-Open Intervals",
        "explanation": "Ace: 'Iterative queries usually work on the half-open range [L, R). Be careful with your indices!'",
        "encouragementText": "Ace: 'Clarity in boundaries is clarity in logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can the simple iterative segment tree handle Lazy Propagation easily?",
        "options": ["Yes, it's easier", "No, it's much harder (requires push levels)", "Exactly same", "Pico guess"],
        "correctAnswer": "No, it's much harder (requires push levels)",
        "explanation": "Because updates go bottom-up but lazy prop goes top-down. Complex iterative lazy trees exist but are rarely used."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Code Conciseness",
        "explanation": "Ace: 'The entire iterative build and update can fit in 10 lines of code. It is the weapon of choice for pure speed.'",
        "encouragementText": "Pico: 'Short and sweet! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Parent jump in iterative loop.",
        "codeSnippet": "p ___= 1;",
        "correctAnswer": ">>",
        "explanation": "Dividing the index by 2 to move up the tree."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Speed Demon",
        "explanation": "You have stripped the tree of its recursive burden. You process data at the hardware's limit. Ace: 'The cycle is optimized.'",
        "encouragementText": "Pico: 'Gotta go fast! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SEGTREE properties!",
        "pairs": [
          { "key": "Recursive", "value": "Easy Lazy Prop" },
          { "key": "Iterative", "value": "Fastest Point Update" },
          { "key": "4N size", "value": "Array requirement" }
        ]
      }
    ]
  },
  {
    "order": 69,
    "title": "Unit 69: 2D Segment Trees (Quad-Trees)",
    "desc": "Managing maps and grids: Range queries in 2 dimensions.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.9] The World Map",
        "explanation": "Ace: 'What if you want to find the maximum in a RECTANGLE on a 2D map? We can build a segment tree where every node is ANOTHER segment tree.' Pico: 'A tree inside a tree! Inception! 🦜'",
        "codeSnippet": "void update_x(int node_x, int lx, int rx, int x, int y, int v) {\n  if(lx != rx) update_x(..., mid_x, ...);\n  update_y(node_x, 1, 0, M-1, y, v);\n}",
        "encouragementText": "Ace: 'Dimensions are just recursive layers of the same truth.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of a 2D Rectangular Range Query?",
        "options": ["O(log N + log M)", "O(log N * log M)", "O(N * M)", "Pico rule"],
        "correctAnswer": "O(log N * log M)",
        "explanation": "We traverse a path in the X-tree, and for each node, we traverse a path in its internal Y-tree."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Quad-Trees",
        "explanation": "Ace: 'An alternative to nested Segment Trees is the Quad-Tree, where each node has 4 children (Top-Left, Top-Right, Bottom-Left, Bottom-Right).' Pico: 'A four-way split! 🦜'",
        "encouragementText": "Pico: 'Four directions! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Memory usage for N by N nested Segment Trees.",
        "codeSnippet": "Memory = 16 * ___ ;",
        "correctAnswer": "N*N",
        "explanation": "4N for X outer tree, and for each node, 4N for Y inner tree. Total ~16N^2."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] 2D Point Updates",
        "explanation": "Ace: 'For a point (x, y), we update log N trees in the X-structure, and for each, we update log M nodes in the Y-structure. O(log N * log M).'",
        "encouragementText": "Ace: 'Hierarchy persists across dimensions.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why are 2D Segment Trees rarely used for very large grids (eg 10^5 x 10^5)?",
        "options": ["Too complex to code", "Memory usage is too high (O(N*M))", "They only work for squares", "Pico guess"],
        "correctAnswer": "Memory usage is too high (O(N*M))",
        "explanation": "10^10 nodes is too much. For large sparse grids, we use Implicit 2D Trees or 2D BITs."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Sparse 2D Trees",
        "explanation": "Ace: 'By making the internal Y-trees implicit (dynamic), we can handle huge coordinate planes effectively.'",
        "encouragementText": "Pico: 'Dynamic maps! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Recursive call count for a 2D segment tree update.",
        "codeSnippet": "Calls = log2(N) * ___ ;",
        "correctAnswer": "log2(M)",
        "explanation": "Nested logarithmic branches."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Cartographer",
        "explanation": "You have mapped the grid. You are the master of the rectangle. Ace: 'The plane is yours.'",
        "encouragementText": "Pico: 'I see the whole field! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match 2D structures!",
        "pairs": [
          { "key": "Nested Segment Trees", "value": "Rect queries" },
          { "key": "Quad Tree", "value": "Image compression" },
          { "key": "2D BIT", "value": "Fast range sums" }
        ]
      }
    ]
  },
  {
    "order": 70,
    "title": "Unit 70: Stage 7 Graduation (The Range Master)",
    "desc": "Claiming the Range Peak: Segment Trees are your weapons.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 7.10] The Summit of Segments",
        "explanation": "Ace: 'You have mastered the Division of Labor. You can see the whole, the part, and the ripple in between. The forest is yours to query.' Pico: 'Stage 7 Complete! We fly to the Binary Indexed Trees next! 🦜'",
        "encouragementText": "Ace: 'Structure is the ultimate weapon against chaos.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure should you use to handle 10^5 range updates and 10^5 range sum queries?",
        "options": ["Standard SegTree", "Lazy Propagation SegTree", "Array", "Pico guess"],
        "correctAnswer": "Lazy Propagation SegTree",
        "explanation": "Only lazy prop handles whole range updates in log time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Performance Summary",
        "explanation": "10 units, 100 lessons. This stage has equipped you with the most versatile data structure in the Academic Atlas. Ace: 'Use it with precision.'",
        "encouragementText": "Pico: '70% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total number of nodes in a segment tree for size 1,024?",
        "options": ["1,024", "2,048", "4,096", "Exactly N-1"],
        "correctAnswer": "2,048",
        "explanation": "For N = power of 2, the total nodes is exactly 2N-1. (1024 leaves + 1023 internal nodes = 2047)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from recursive to iterative and lazy to implicit in your mental buffers.' Pico: 'I'm a SegTree pro now! 🦜'",
        "encouragementText": "Ace: 'Mastery is the ability to shift perspective.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Identity element for Range GCD?",
        "options": ["1", "0", "-1", "Pico guess"],
        "correctAnswer": "0",
        "explanation": "gcd(x, 0) is always x, so 0 is the identity for GCD."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 70% through the ultimate journey. Your next target: **Stage 8: Specialized Query Structures (BIT/DSU)**. Ace: 'The efficiency continues.'",
        "encouragementText": "Pico: 'Stage 8 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (range_master == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Segment Tree Phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of Scopes",
        "explanation": "The segments are aligned. The labels are lazy. You are a Stage 7 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=61; i<=70; i++) verify_segment(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The seventh decile of the 1,000-lesson curriculum is fully verified."
      }
    ]
  }
];

module.exports = stage4;
