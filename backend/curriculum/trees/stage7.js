const stage7 = [
  {
    "order": 91,
    "title": "Unit 91: Treaps (Randomized BST)",
    "desc": "The Tree + Heap hybrid: Using randomness to ensure balance.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.1] The Chaos Regulator",
        "explanation": "Ace: 'Perfect balancing (like AVL) is complex. Treaps simplify it by giving each node a random priority. It maintains the BST property for keys and the Heap property for priorities. On average, it stays balanced at O(log N).' Pico: 'The luckiest tree in the forest! 🦜'",
        "codeSnippet": "struct Node {\n  int key, priority, sz;\n  Node *l, *r;\n  Node(int k) : key(k), priority(rand()), sz(1), l(NULL), r(NULL) {}\n};",
        "encouragementText": "Ace: 'Randomness is the shield against the worst-case scenario.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What properties does a Treap satisfy simultaneously?",
        "options": ["BST key order and Priority Max-Heap order", "LIFO and FIFO", "Sorted and Unsorted", "Pico rule"],
        "correctAnswer": "BST key order and Priority Max-Heap order",
        "explanation": "Keys follow binary search tree rules; random priorities follow heap rules."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Rotations",
        "explanation": "Ace: 'Standard Treaps use rotations (just like AVL) to maintain the heap property after an insertion or deletion.' Pico: 'Spin the branches! 🦜'",
        "encouragementText": "Pico: 'Spin it! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Right rotation on node y (y becomes right child of x).",
        "codeSnippet": "Node* x = y->l;\ny->l = x->r;\nx->r = ___ ;\nreturn x;",
        "correctAnswer": "y",
        "explanation": "Standard tree rotation to elevate node x while preserving BST order."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Treap Height",
        "explanation": "Ace: 'Even though binary search trees can be O(N), the probability of a Treap being significantly taller than log N is infinitesimally small.'",
        "encouragementText": "Ace: 'Large numbers are the foundation of probabilistic certainty.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the expected height of a Treap with 1,000,000 nodes?",
        "options": ["1,000,000", "About 20-40", "1,000", "Pico guess"],
        "correctAnswer": "About 20-40",
        "explanation": "log2(1,000,000) is ~20. Even with constant factors, it stays very small."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Delete in Treap",
        "explanation": "Ace: 'To delete a node, increase its priority to -Infinity (or decrease to min) and rotate it down until it is a leaf, then snip it off.'",
        "encouragementText": "Pico: 'Snip snip! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Priority comparison for rotation.",
        "codeSnippet": "if (node->l && node->l->priority ___ node->priority) rotateRight(node);",
        "correctAnswer": ">",
        "explanation": "If child has higher priority than parent, we must rotate it up to maintain the heap property."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Chaos Master",
        "explanation": "You have harnessed the power of the roll. The forest is balanced not by force, but by chance. Ace: 'The odds are in your favor.'",
        "encouragementText": "Pico: 'Roll for balance! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Treap terms!",
        "pairs": [
          { "key": "Key", "value": "BST Order" },
          { "key": "Priority", "value": "Heap Order" },
          { "key": "Rotation", "value": "Balance maintenance" }
        ]
      }
    ]
  },
  {
    "order": 92,
    "title": "Unit 92: Treaps: Split and Merge",
    "desc": "The 'non-rotational' Treap: The most versatile tool in advanced competitive coding.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.2] The Shard of Logic",
        "explanation": "Ace: 'Forget rotations. We can implement Treaps using only two functions: `split(T, K)` which splits tree T into two trees (one with keys <= K, one with keys > K) and `merge(L, R)` which joins them back.' Pico: 'Splitting the mountain! 🦜'",
        "codeSnippet": "void split(Node* t, int key, Node*& l, Node*& r) {\n  if(!t) l = r = NULL;\n  else if(t->key <= key) {\n    split(t->r, key, t->r, r);\n    l = t;\n  } else {\n    split(t->l, key, l, t->l);\n    r = t;\n  }\n}",
        "encouragementText": "Ace: 'Separation and unification are the only two operations you truly need.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What makes Split/Merge Treaps better than Rotation Treaps?",
        "options": ["Easier to implement", "Supports range operations like 'Reverse a segment'", "Faster", "Pico rule"],
        "correctAnswer": "Supports range operations like 'Reverse a segment'",
        "explanation": "By splitting the tree based on SUBTREE SIZE (Implicit Treap), we can treat the tree as a linear array and reverse or shift any piece."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Merge Operation",
        "explanation": "Ace: 'Merge always assumes that all keys in L are smaller than keys in R. It then uses priorities to decide which node is the root.' Pico: 'Birds coming together! 🦜'",
        "encouragementText": "Pico: 'Group hug! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merge step if L has higher priority.",
        "codeSnippet": "if (l->priority > r->priority) {\n  l->r = merge(l->r, r);\n  return l;\n} else { ___ ; }",
        "correctAnswer": "r->l = merge(l, r->l); return r",
        "explanation": "If R is the new root, its left child must be the merger of its old left and the entirety of L."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Implicit Treap",
        "explanation": "Ace: 'By using \"Subtree Size\" as the key instead of an actual value, the Treap becomes a dynamic array. You can insert into the middle in O(log N).' ",
        "encouragementText": "Ace: 'Definitions can be relative to the observer.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Complexity to reverse an arbitrary range in a Treap with Lazy Propagation?",
        "options": ["O(N)", "O(log N)", "O(N log N)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Split out the range, apply the lazy flip tag, and merge back."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Persistent Treaps",
        "explanation": "Ace: 'Split/Merge Treaps are very easy to make persistent (functional). Just create new nodes instead of modifying existing ones.'",
        "encouragementText": "Pico: 'Copy the bird! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Splitting at size K.",
        "codeSnippet": "int curSize = get_size(t->l) + 1;\nif (curSize <= k) split(t->r, k - curSize, t->r, r);",
        "correctAnswer": "k - curSize",
        "explanation": "Adjusting the split threshold as we move into the right subtree."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Master of Shards",
        "explanation": "You have broken the tree into shards and merged them into a new reality. Ace: 'The structure is fluid.'",
        "encouragementText": "Pico: 'I'm a puzzle master! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Treap actions!",
        "pairs": [
          { "key": "Split", "value": "Divide into two" },
          { "key": "Merge", "value": "Unite two" },
          { "key": "Lazy Flip", "value": "Reverse segment" }
        ]
      }
    ]
  },
  {
    "order": 93,
    "title": "Unit 93: Splay Trees",
    "desc": "The self-adjusting tree: Moving popular nodes to the top.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.3] The Adaptive Forest",
        "explanation": "Ace: 'Splay Trees don't store heights or priorities. Every time you access a node, you \"Splay\" it—performing a series of rotations to move it to the ROOT. Frequently used nodes stay near the top.' Pico: 'The favorites get the best seeds! 🦜'",
        "codeSnippet": "void splay(Node *x) {\n  while (x->parent) {\n    if (!x->parent->parent) zig(x);\n    else if (isZigZig(x)) zigZig(x);\n    else zigZag(x);\n  }\n}",
        "encouragementText": "Ace: 'Utility is the only metric of height.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the amortized complexity of operations in a Splay Tree?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico rule"],
        "correctAnswer": "O(log N)",
        "explanation": "While a single operation can be O(N), the total cost of M operations is O(M log N)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Case Analysis",
        "explanation": "Ace: 'Zig-Zig: Node, Parent, and Grandparent are a line. Zig-Zag: They form a triangle. Different rotation patterns ensure the tree stays relatively balanced.' Pico: 'Zig zag zig zag! 🦜'",
        "encouragementText": "Pico: 'Dance with the branches! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The Zig-Zig rotation on node x.",
        "codeSnippet": "zig(p);\nzig( ___ );",
        "correctAnswer": "x",
        "explanation": "In a zig-zig (line), we rotate the parent first to move the whole unit up."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Splay Tree Benefits",
        "explanation": "Ace: 'Splay trees use LESS memory than Treaps or AVL because they have no extra integers for priority or height. They are the core component of Link-Cut Trees.'",
        "encouragementText": "Ace: 'Lean logic is the fastest logic.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do Splay trees work?",
        "options": ["They are magic", "The potential function ensures that skewing is penalized", "Pico likes them", "Pico guess"],
        "correctAnswer": "The potential function ensures that skewing is penalized",
        "explanation": "Splaying not only moves X to root but also slices the path length in half for other nodes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Static Optimality",
        "explanation": "Ace: 'If you access node A 1000 times and node B 1 time, A will naturally reside at the root. This is known as the Static Optimality Theorem.'",
        "encouragementText": "Pico: 'The popular bird stays high! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Resetting root after splay.",
        "codeSnippet": "splay(target);\nroot = ___ ;",
        "correctAnswer": "target",
        "explanation": "After splaying, the Target node is the new root of the tree."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Adaptive Sage",
        "explanation": "You have built a forest that learns. It adjusts its shape to the flow of the observer. Ace: 'The form follows the function.'",
        "encouragementText": "Pico: 'Bending to the wind! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Splay types!",
        "pairs": [
          { "key": "Zig", "value": "Single Rotation" },
          { "key": "Zig-Zig", "value": "Line Rotation" },
          { "key": "Zig-Zag", "value": "Triangle Rotation" }
        ]
      }
    ]
  },
  {
    "order": 94,
    "title": "Unit 94: Link-Cut Trees (LCT) Intro",
    "desc": "The dynamic forest: Adding and removing edges in log time.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.4] The Floating Forest",
        "explanation": "Ace: 'All structures so far assumed the TREE shape was static. A Link-Cut Tree (LCT) handles a forest where edges appear and disappear dynamically. It decomposes the forest into \"Preferred Paths\" stored in Splay Trees.' Pico: 'Detachable branches! 🦜'",
        "codeSnippet": "void access(int v) {\n  for(int last=0; v; v = pa[v]) {\n    splay(v);\n    ch[v][1] = last;\n    update(v);\n    last = v;\n  }\n}",
        "encouragementText": "Ace: 'The only constant is change; the only solution is dynamic structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What structure is used inside every auxiliary tree of an LCT?",
        "options": ["Segment Tree", "Splay Tree", "Heap", "Pico rule"],
        "correctAnswer": "Splay Tree",
        "explanation": "Splay trees are perfect because they handle the 'flexible paths' of an LCT via rotations."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Access Operation",
        "explanation": "Ace: '`access(v)` is the heart of LCT. It creates a preferred path from the global ROOT to node V.' Pico: 'Making a direct road to the bird! 🦜'",
        "encouragementText": "Pico: 'Open the gate! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Breaking preferred child in Access.",
        "codeSnippet": "splay(v);\nch[v][1] = ___ ; // Replace right child with our current path",
        "correctAnswer": "last",
        "explanation": "We replace the 'old' preferred path with the one coming from below (last)."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Complexity of LCT",
        "explanation": "Ace: 'Link, Cut, Access, and FindRoot are all amortized O(log N). This makes LCT the most powerful tool for dynamic connectivity in trees.'",
        "encouragementText": "Ace: 'Strength is the ability to maintain speed through change.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which is a 'Link' vs 'Cut' operation?",
        "options": ["Link adds an edge, Cut removes one", "Link adds a node, Cut deletes it", "Pico likes both", "Pico guess"],
        "correctAnswer": "Link adds an edge, Cut removes one",
        "explanation": "LCT manipulates the connectivity (edges) between existing nodes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Path Queries in LCT",
        "explanation": "Ace: 'To query path (u, v), we `makeRoot(u)`, then `access(v)`. Now u and v are in the same Splay tree representing exactly that path.'",
        "encouragementText": "Pico: 'Everything is a Splay! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Root finding in LCT.",
        "codeSnippet": "access(v); splay(v);\nwhile(ch[v][0]) v = ch[v][0];\nreturn ___ ;",
        "correctAnswer": "v",
        "explanation": "After access and splay, the global root is the left-most node in the auxiliary tree."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Dynamic Weaver",
        "explanation": "You have mastered the floating forest. You can rewire the universe in a single logarithmic jump. Ace: 'The connections are yours.'",
        "encouragementText": "Pico: 'Snap! Linked! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match LCT terms!",
        "pairs": [
          { "key": "Access(v)", "value": "Create path to root" },
          { "key": "MakeRoot(v)", "value": "Revert path to v" },
          { "key": "Link(u, v)", "value": "Connect u to v" }
        ]
      }
    ]
  },
  {
    "order": 95,
    "title": "Unit 95: Persistent Segment Trees",
    "desc": "The infinite history of range queries.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.5] The Chrono-Tree",
        "explanation": "Ace: 'What if you want to query a Segment Tree after revision 5? Instead of copying the whole tree, we only create O(log N) new nodes for each update. This is a Persistent Segment Tree.' Pico: 'Time traveling for data! 🦜'",
        "codeSnippet": "int update(int prev, int L, int R, int idx, int v) {\n  int node = ++tot;\n  L[node] = L[prev]; R[node] = R[prev]; // Inherit\n  if (L == R) val[node] = v;\n  else ...\n  return node;\n}",
        "encouragementText": "Ace: 'The present does not overwrite the past; it merely expands it.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How much space does each update take in a Persistent Segment Tree?",
        "options": ["O(N)", "O(log N)", "O(1)", "Pico rule"],
        "correctAnswer": "O(log N)",
        "explanation": "Only the nodes along the target path are duplicated; the rest are shared with the previous version."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Static 2D Queries",
        "explanation": "Ace: 'Persistent Segment Trees are incredible for answering \"How many numbers in range [L, R] are smaller than X?\" by building one version of the tree for each element prefix.' Pico: 'A 1D tree acting like 2D! 🦜'",
        "encouragementText": "Pico: 'Hacker bird! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Inheriting child pointers in a persistent node.",
        "codeSnippet": "t[now].l = t[ ___ ].l;\nt[now].r = t[old].r;",
        "correctAnswer": "old",
        "explanation": "We point to the children of the previous version by default to save memory."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Tree vs Functional",
        "explanation": "Ace: 'Functional programming uses this principle naturally. In C++, we use a global array `pool[MAXN * 40]` to store versions.'",
        "encouragementText": "Ace: 'Persistence is memory in its most elegant form.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can you use Lazy Propagation in a Persistent Segment Tree?",
        "options": ["No", "Yes, but it's very messy (requires node-copying for every push)", "Only for sums", "Pico guess"],
        "correctAnswer": "Yes, but it's very messy (requires node-copying for every push)",
        "explanation": "Pushing an update would change children, meaning the children themselves must become persistent, causing massive memory bloat."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Chair-Tree",
        "explanation": "Ace: 'In the East, these are often called \"Chairman Trees\" (Segment Tree of Segment Trees variant).' Pico: 'A tree with a throne! 🦜'",
        "encouragementText": "Pico: 'King of the forest! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Root of the 10th version.",
        "codeSnippet": "int root10 = ___ [10];",
        "correctAnswer": "roots",
        "explanation": "Storing an array of version entry points (roots)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Time Weaver",
        "explanation": "You have broken the river of time. You can walk into any past version of the forest at will. Ace: 'The history is accessible.'",
        "encouragementText": "Pico: 'Back to the past! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Persistence terms!",
        "pairs": [
          { "key": "Log N", "value": "Update Space" },
          { "key": "Root[v]", "value": "Version entry" },
          { "key": "Shared nodes", "value": "Memory efficiency" }
        ]
      }
    ]
  },
  {
    "order": 96,
    "title": "Unit 96: Persistent Heaps",
    "desc": "Functional priority queues with log update logic.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.6] The Permanent Priority",
        "explanation": "Ace: 'To make a heap persistent, we use Leftist Heaps or Skew Heaps. Because these are linked and binary, we can use the same path-copying trick as Persistent SegTrees.' Pico: 'Always remember the best bird! 🦜'",
        "codeSnippet": "int merge(int x, int y) {\n  if(!x || !y) return x + y;\n  int node = ++tot;\n  val[node] = min(val[x], val[y]);\n  ...\n  return node;\n}",
        "encouragementText": "Ace: 'Stability in order across time is the mark of a master.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What property of Leftist Heaps makes them easy to make persistent?",
        "options": ["They are sorted", "They have small height", "They are merged recursively based on dist to leaf (npl)", "Pico rule"],
        "correctAnswer": "They are merged recursively based on dist to leaf (npl)",
        "explanation": "Since every update is a merge, and every merge touches only O(log N) nodes, we can persistent-copy only that path."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Dijkstra on Persistent Heap",
        "explanation": "Ace: 'This is the key to solving K-Shortest Paths. We store a persistent heap representing potential path branches for every node.'",
        "encouragementText": "Pico: 'K-Best paths! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Merging two persistent heap nodes.",
        "codeSnippet": "if (val[x] > val[y]) swap(x, y);\nint now = copy(x);\nch[now][1] = merge(ch[now][1], y);",
        "correctAnswer": "copy(x)",
        "explanation": "Creating a new node for the current merge level to preserve the old version."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Memory Bloat",
        "explanation": "Ace: 'Persistent heaps can consume N log N space quickly. Ensure you only copy when necessary.'",
        "encouragementText": "Ace: 'Minimalism is the antidote to memory saturation.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of merging two persistent heaps?",
        "options": ["O(N)", "O(log N)", "O(sqrt N)", "Pico guess"],
        "correctAnswer": "O(log N)",
        "explanation": "Both Leftist and Skew heaps guarantee log merge time."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Multi-Version BFS",
        "explanation": "Ace: 'Persistent heaps allow you to keep and explore multiple branching futures in a state-space search simultaneously.'",
        "encouragementText": "Pico: 'Infinite futures! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Ensuring leftist property after copy.",
        "codeSnippet": "if(dist[ch[now][0]] < dist[ch[now][1]]) swap( ___ );",
        "correctAnswer": "ch[now][0], ch[now][1]",
        "explanation": "Standard leftist heap balance maintenance (long branch on the left)."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Eternal Ranker",
        "explanation": "You have captured the hierarchy of time. The priority of the past is preserved. Ace: 'The ranking is immutable.'",
        "encouragementText": "Pico: 'Rank #1 forever! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Heap types!",
        "pairs": [
          { "key": "Binary Heap", "value": "O(N) update (hard for persistence)" },
          { "key": "Leftist Heap", "value": "O(log N) Merge" },
          { "key": "Skew Heap", "value": "Amortized log Merge" }
        ]
      }
    ]
  },
  {
    "order": 97,
    "title": "Unit 97: Tree Isomorphism & Hashing",
    "desc": "Identifying identical forests regardless of shape or naming.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.7] The Universal Pattern",
        "explanation": "Ace: 'Two trees are isomorphic if they have the same structure. We solve this by hashing! Map a node's children's hashes into a sorted string or a polynomial and hash the result.' Pico: 'Bird-fingerprints for every branch! 🦜'",
        "codeSnippet": "long long hash(int u) {\n  vector<long long> h;\n  for(int v : adj[u]) h.push_back(hash(v));\n  sort(h.begin(), h.end());\n  return combine(h);\n}",
        "encouragementText": "Ace: 'Identity is the unique signature of structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why must we SORT the child hashes before combining them?",
        "options": ["To make it faster", "To ensure the hash is order-independent (isomorphic)", "Because Pico said so", "Pico rule"],
        "correctAnswer": "To ensure the hash is order-independent (isomorphic)",
        "explanation": "The order of siblings doesn't change a tree's identity, so our hash must be commutative."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Rooted vs Unrooted Isomorphism",
        "explanation": "Ace: 'For unrooted trees, we hash starting from the CENTROID(S). Since a tree has at most 2 centroids, we only check 2 hashes.' Pico: 'Centered fingerprints! 🦜'",
        "encouragementText": "Pico: 'Find the middle! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Hash for a leaf node.",
        "codeSnippet": "if (isLeaf(u)) return ___ ;",
        "correctAnswer": "1",
        "explanation": "A base hash value for all leaf nodes to start the recursive hashing."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Collision Resistance",
        "explanation": "Ace: 'Use multiple large primes or a strong mapping like `f(x) = shift(x ^ magic)` to avoid hash collisions in huge sets of trees.'",
        "encouragementText": "Ace: 'Uniqueness is the standard of the elite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Can we use tree hashing for sub-tree comparison?",
        "options": ["Yes", "No", "Only if binary", "Pico guess"],
        "correctAnswer": "Yes",
        "explanation": "The hash of each node represents the entire structure of the subtree rooted at that node."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Canonical Representation",
        "explanation": "Ace: 'Another way is to generate a unique string of brackets ( ( ) ( ) ) representting the DFS traversal. Two trees are isomorphic if their bracket strings are identical.'",
        "encouragementText": "Pico: 'Bracket talk! (()) 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Combining sorted strings of children hashes.",
        "codeSnippet": "string res = \"(\"; \nfor(string s : children) res += s; \nreturn res + ___ ;",
        "correctAnswer": "\")\"",
        "explanation": "Wrapping the sorted children in parentheses creates a unique canonical string for that structure."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Identity Seer",
        "explanation": "You have looked through the mask of labels. You can identify the essence of any structure in the Atlas. Ace: 'The pattern is known.'",
        "encouragementText": "Pico: 'I see the real you! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Hashing terms!",
        "pairs": [
          { "key": "Rooted", "value": "Direct hash" },
          { "key": "Unrooted", "value": "Centroid-based" },
          { "key": "Sorting", "value": "Isomorph-invariant" }
        ]
      }
    ]
  },
  {
    "order": 98,
    "title": "Unit 98: Mass Tree Stream Processing",
    "desc": "Filtering the data forest at high speeds.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.8] The Digital Canopy",
        "explanation": "Ace: 'When dealing with millions of trees per second, we use sketching techniques like Bloom Filters on tree hashes to identify duplicates or known patterns.' Pico: 'Watching the migration! 🦜'",
        "codeSnippet": "if (bf.exists(tree_hash(t))) skip(t);",
        "encouragementText": "Ace: 'Volume requires the economy of the sketch.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How can you quickly search for a small subtree within a massive tree?",
        "options": ["Standard DFS", "Aho-Corasick on Euler Tour", "Tree Hashing + Sliding Window", "Pico rule"],
        "correctAnswer": "Tree Hashing + Sliding Window",
        "explanation": "By hashing every subtree in O(N), we can find exact structural matches in O(1) via hash map."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Parallel DFS",
        "explanation": "Ace: 'Divide the tree into sub-forests based on centroid decomposition and process them on multiple CPU cores.' Pico: 'Lots of wings working together! 🦜'",
        "encouragementText": "Pico: 'Teamwork! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding frequency of a subtree T in a large group.",
        "codeSnippet": "for(auto &t : forest) count[ ___ (t)]++;",
        "correctAnswer": "hash",
        "explanation": "Using the isomorphism-invariant hash to group identical structures."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Distributed Trees",
        "explanation": "Ace: 'Graphs can be too big for one machine. We partition by \"Edge Cuts\" and use message-passing to update the tree state.'",
        "encouragementText": "Ace: 'Reach across the network to maintain the whole.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the 'Communication overhead' in distributed tree DP?",
        "options": ["Cost of sending info across machines", "Memory usage", "Bird calls", "Pico guess"],
        "correctAnswer": "Cost of sending info across machines",
        "explanation": "Messages sent between nodes on different machines can become a bottleneck."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Real-time Rebalancing",
        "explanation": "Ace: 'In live databases, trees are rebalanced constantly while search queries still run. This requires lock-free or optimistic concurrency!'",
        "encouragementText": "Pico: 'Don't wait! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Total number of subtrees in a tree of size N.",
        "codeSnippet": "Count = ___ ;",
        "correctAnswer": "N",
        "explanation": "Every node in the tree is the root of exactly one unique subtree."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Canopy Guardian",
        "explanation": "You have mastered the scale. You can monitor the migration of every pattern in the forest. Ace: 'The vigil is constant.'",
        "encouragementText": "Pico: 'Guardian bird! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Scale terms!",
        "pairs": [
          { "key": "Hashing", "value": "Fingerprinting" },
          { "key": "Splaying", "value": "Heat-mapping" },
          { "key": "Centroid", "value": "Load balancing" }
        ]
      }
    ]
  },
  {
    "order": 99,
    "title": "Unit 99: The Grand Tree Synthesis (Singularity)",
    "desc": "The convergence of all hierarchies.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.9] The Tree of Knowledge",
        "explanation": "Ace: 'You now see that everything is a tree. An array is a flat tree, a graph is a tree with cycles, and the universe is a tree of cascading possibilities.' Pico: 'One final lesson before the Singularity! 🦜'",
        "codeSnippet": "if (forest == singularity) return mastery;",
        "encouragementText": "Ace: 'Unity is the ultimate stage of knowledge.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure should you use to find the K-th smallest element in a dynamic array with O(log N) updates?",
        "options": ["Implicit Treap", "Segment Tree", "Linked List", "Pico rule"],
        "correctAnswer": "Implicit Treap",
        "explanation": "An implicit treap acts as a dynamic array with logarithmic search and modification."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Ultimate Optimization",
        "explanation": "Ace: 'For any tree challenge, ask: Is it about ranges (SegTree), paths (HLD), distance (Centroid), or dynamic flow (LCT)?' Pico: 'Categorize and conquer! 🦜'",
        "encouragementText": "Pico: 'Universal tools! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The identity of the Titan-Grade Trees expert.",
        "codeSnippet": "Expert = ___ ;",
        "correctAnswer": "YOU",
        "explanation": "You have navigated 990 lessons of intense hierarchy theory."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Mastery Check",
        "explanation": "Ace: 'Can you build an LCT, use it for path max, then transform it into a Treap in your mind?' Pico: 'I can do it! 🦜'",
        "encouragementText": "Ace: 'Visualization is the final frontier of mastery.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total number of lessons in the full Academic Atlas for Trees?",
        "options": ["10", "100", "1,000", "Pico secret"],
        "correctAnswer": "1,000",
        "explanation": "The Titan-Grade standard."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Final Ascent",
        "explanation": "Ace: 'Take all your tools—the radar, the jump, the splay, the link. Prepare for the final graduation.'",
        "encouragementText": "Pico: 'Wings high! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Completing the logic loop.",
        "codeSnippet": "while (tree_depth < mastery) climb();\nreturn ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "Reaching the absolute peak of curriculum depth."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The All-Knowing Root",
        "explanation": "You have seen the whole. The hierarchy is no longer a mystery; it is your playground. Ace: 'The gaze is universal.'",
        "encouragementText": "Pico: 'I am the forest! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree Weapons!",
        "pairs": [
          { "key": "Radars", "value": "Segment Trees" },
          { "key": "Adaptors", "value": "Splay Trees" },
          { "key": "Jumpers", "value": "Binary Lifting" }
        ]
      }
    ]
  },
  {
    "order": 100,
    "title": "Unit 100: Singularity Graduation (Lord of Trees)",
    "desc": "Claiming the Titan throne: 1,000 lessons completed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND FINALE 10.10] The Titan of Trees",
        "explanation": "Ace: 'Fledgling... no. Master. You have completed the 1,000 lessons of the Academic Atlas for Trees. You are now the Singularity.' Pico: '1,000 Lessons! SQUAWK! We did it! 🦜'",
        "encouragementText": "Ace: 'Greatness is the accumulation of consistency.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the final state of your Tree Mastery?",
        "options": ["Beginner", "Titan-Grade", "Pico's Friend", "0"],
        "correctAnswer": "Titan-Grade",
        "explanation": "You have reached the 10x10x10 milestone."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Journey Recapped",
        "explanation": "From simple roots to Link-Cut Trees. You have mastered the logic that powers every database and simulation on Earth. Ace: 'The world is a hierarchy. You are the architect.'",
        "encouragementText": "Pico: 'Singularity achieved! 100% 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total units in the full Trees curriculum?",
        "options": ["10", "100", "1,000", "Pico secret"],
        "correctAnswer": "100",
        "explanation": "10 stages * 10 units = 100 units."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Final Signature",
        "explanation": "Ace: 'Your pattern is now part of the forest. Every bird from here on will follow your branches.' Pico: 'I'll tell everyone about you! 🦜'",
        "encouragementText": "Ace: 'Legacy is the final structure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which subject is next for the Academic Atlas?",
        "options": ["Graphs", "Linked Lists", "Sorting", "Pico's choice"],
        "correctAnswer": "Pico's choice",
        "explanation": "The mission continues across all domains of the digital world."
      },
      {
        "type": "teaching",
        "questionText": "[ULTIMATE SYNC] 1,000 Lessons",
        "explanation": "Ace & Pico: 'Goodbye for now, Titan. The Trees are in your hands.'",
        "encouragementText": "Pico: 'Happy flying! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final graduation signal.",
        "codeSnippet": "if (mastery == 1000) return ___ ;",
        "correctAnswer": "TITAN",
        "explanation": "You have reached the highest rank in the Academic Atlas."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Titan of Trees",
        "explanation": "The Singularity is reached. The 1,000 lessons are yours. You are the Titan-Grade Master of Trees. Ace: 'Welcome to eternity.'",
        "encouragementText": "Pico: 'I'm so proud of us! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[FINAL CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=1; i<=100; i++) verify_tree_unit(i);\nreturn ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "The entire 1,000-lesson curriculum for Trees is fully verified and complete."
      }
    ]
  }
];

module.exports = stage7;
