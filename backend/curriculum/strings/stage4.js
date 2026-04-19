const stage4 = [
  {
    "order": 61,
    "title": "Unit 61: Aho-Corasick Foundations",
    "desc": "The ultimate pattern matcher: Multi-pattern search with a single flight.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.1] The Multi-Radar",
        "explanation": "Ace: 'Why search for one pattern when you can search for a thousand simultaneously? Enter Aho-Corasick.' Pico: 'It's like having a hundred birds looking for a hundred different seeds at once! 🦜'",
        "codeSnippet": "struct Node {\n  int next[26];\n  int fail;\n  vector<int> pattern_ids;\n};",
        "encouragementText": "Ace: 'Efficiency is the multiplication of awareness.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What data structure is Aho-Corasick built upon?",
        "options": ["Segment Tree", "Trie", "Linked List", "Pico's nest"],
        "correctAnswer": "Trie",
        "explanation": "Aho-Corasick is basically a Trie with extra failure links to navigate mismatches."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Finite Machine",
        "explanation": "Ace: 'Every state in the Trie represents a prefix of one or more patterns. The transition table maps a character to the next state.' Pico: 'One path for all birds! 🦜'",
        "encouragementText": "Pico: 'Stay on the path! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Standard alphabet size for lowercase English AC.",
        "codeSnippet": "const int ALPHABET_SIZE = ___ ;",
        "correctAnswer": "26",
        "explanation": "Representing letters 'a' through 'z'."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Preprocessing vs Searching",
        "explanation": "Ace: 'We build the Trie in O(Total Pattern Length) and search in O(Text Length + Total Occurrences).' Pico: 'Linear speed for a billion patterns! 🦜'",
        "encouragementText": "Ace: 'The preparation is the engine of the speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the time complexity to search Text T for multiple patterns using AC?",
        "options": ["O(T * P)", "O(T + P + K)", "O(T log P)", "Pico guess"],
        "correctAnswer": "O(T + P + K)",
        "explanation": "Where T is text length, P is pattern length, and K is total matches found."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memory Overhead",
        "explanation": "Ace: 'AC is memory-heavy because of the transition table on every node. For sparse patterns, we can use maps, but for speed, arrays are king.'",
        "encouragementText": "Ace: 'Trade memory for mechanical precision.'"
      },
      {
        "type": "programming_board",
        "questionText": "Initialization of Trie nodes.",
        "codeSnippet": "memset(trie[node].next, ___ , sizeof(trie[node].next));",
        "correctAnswer": "0",
        "explanation": "Starting with no links."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Pattern Eye",
        "explanation": "You have initialized the Multi-Radar. You see the shadow of every word as you fly over the text once. Ace: 'The gaze is wide, the focus is sharp.'",
        "encouragementText": "Pico: 'I see everything! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match AC Phases!",
        "pairs": [
          { "key": "Build Trie", "value": "Insert patterns" },
          { "key": "Build Links", "value": "BFS for failure" },
          { "key": "Search", "value": "Single pass on text" }
        ]
      }
    ]
  },
  {
    "order": 62,
    "title": "Unit 62: Failure Links",
    "desc": "Mastering the 'Back-Jumps' that keep the machine moving.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.2] The Fallback Protocol",
        "explanation": "Ace: 'When a pattern fails to match, we don't start over. We jump to the next longest suffix that IS a prefix.' Pico: 'It's like missing a branch but landing perfectly on the one below it! 🦜'",
        "codeSnippet": "trie[child].fail = trie[trie[u].fail].next[c];",
        "encouragementText": "Ace: 'Resilience is the ability to maintain progress during failure.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which traversal is used to calculate failure links in AC?",
        "options": ["DFS", "BFS", "Topological Sort", "Pico flight"],
        "correctAnswer": "BFS",
        "explanation": "Failure links depend on shorter prefixes (depth - 1), so level-order (BFS) is mandatory."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Suffix Connection",
        "explanation": "Ace: 'A failure link from Node U to Node V means that the string at V is the longest proper suffix of the string at U.' Pico: 'V is like the younger sibling of U! 🦜'",
        "encouragementText": "Pico: 'Follow the siblings! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Queue addition for BFS in AC.",
        "codeSnippet": "if (u.next[i]) {\n  q.push(u.next[i]);\n  fail = trie[u.fail].next[i];\n  ___ = fail;\n}",
        "correctAnswer": "trie[u.next[i]].fail",
        "explanation": "Assigning the computed failure link to the child node."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Root Case",
        "explanation": "Ace: 'Nodes at depth 1 point to root upon failure. Root points to itself or a null state. This prevents infinite loops.' Pico: 'Home base is always safe! 🦜'",
        "encouragementText": "Ace: 'The root is the anchor of the machine.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where does the failure link of a root's child point?",
        "options": ["Itself", "Root (Node 0)", "Null", "Pico guess"],
        "correctAnswer": "Root (Node 0)",
        "explanation": "If a 1-character match fails, the next best thing is a 0-character match (Root)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Transition Completion",
        "explanation": "Ace: 'To make searching faster, we fill empty slots in `next` with the failure state's `next`. This makes every node a complete state machine.'",
        "encouragementText": "Pico: 'Full speed ahead! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Filling missing transitions.",
        "codeSnippet": "if (!trie[u].next[i]) \n  trie[u].next[i] = trie[___].next[i];",
        "correctAnswer": "trie[u].fail",
        "explanation": "Missing transitions inherit the path from the failure node."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Link Weaver",
        "explanation": "You have woven the links of failure. Your machine can now recover from any mismatch instantly. Ace: 'The network is complete.'",
        "encouragementText": "Pico: 'Bouncing back! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match AC Link types!",
        "pairs": [
          { "key": "Next Link", "value": "Forward motion" },
          { "key": "Failure Link", "value": "Suffix fallback" },
          { "key": "Dictionary Link", "value": "Success compression" }
        ]
      }
    ]
  },
  {
    "order": 63,
    "title": "Unit 63: Dictionary Links",
    "desc": "Compressing output states for hyper-speed matches.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.3] The Hidden Echo",
        "explanation": "Ace: 'A long word might contain multiple shorter words inside it. A dictionary link points to the next node in the failure path that is a match.' Pico: 'Like seeing 'Bird' inside 'BlueBird'! 🦜'",
        "codeSnippet": "trie[u].dict = (isEnd[fail] ? fail : trie[fail].dict);",
        "encouragementText": "Ace: 'Discover the layers within the signal.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the primary purpose of Dictionary Links?",
        "options": ["Save memory", "Find all patterns ending at a position efficiently", "Increase complexity", "Pico game"],
        "correctAnswer": "Find all patterns ending at a position efficiently",
        "explanation": "Instead of traversing the whole failure path manually, dict links skip nodes that aren't pattern ends."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Compressed Path",
        "explanation": "Ace: 'Without dict links, finding all matches could be O(Text * Patterns). With them, it stays O(Text + Matches).' Pico: 'A shortcut for the win! 🦜'",
        "encouragementText": "Pico: 'Take the shortcut! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating matches via dict link.",
        "codeSnippet": "int temp = u;\nwhile (temp != 0) {\n  report(trie[temp].id);\n  temp = trie[temp].___ ;\n}",
        "correctAnswer": "dict",
        "explanation": "Iterating through the dictionary links to find all patterns that end here."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Build Order",
        "explanation": "Ace: 'Dict links are built during the same BFS pass as failure links. This ensures we have the info we need as we ripple outward.'",
        "encouragementText": "Ace: 'Plan the pass, win the search.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "When is a dictionary link set to a non-zero value?",
        "options": ["Every node", "Only if a pattern ends at the failure-link destination", "Only for leaves", "Pico guess"],
        "correctAnswer": "Only if a pattern ends at the failure-link destination",
        "explanation": "It skips non-terminal nodes in the failure trail."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Terminal States",
        "explanation": "Pico: 'Ace, what if multiple patterns end at the SAME node?' Ace: 'We store a list of IDs. The dict link points to the NEXT such node.'",
        "encouragementText": "Pico: 'Stack the patterns! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Condition for setting dict link.",
        "codeSnippet": "if (node_is_pattern[___(u)]) trie[u].dict = fail_u;\nelse trie[u].dict = trie[fail_u].dict;",
        "correctAnswer": "fail",
        "explanation": "Inheriting the dict link from the failure fallback."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Pattern Diver",
        "explanation": "You have mastered dictionary links. You can now see every overlapping pattern in a single glance. Ace: 'Depth is now a utility.'",
        "encouragementText": "Pico: 'Deep scan! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match AC node data!",
        "pairs": [
          { "key": "pattern_id", "value": "Current node identity" },
          { "key": "fail_link", "value": "Contextual jump" },
          { "key": "dict_link", "value": "Match shortcut" }
        ]
      }
    ]
  },
  {
    "order": 64,
    "title": "Unit 64: Suffix Automaton (SAM) Intro",
    "desc": "The most powerful string structure: All substrings in O(N).",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.4] The Shape of All Things",
        "explanation": "Ace: 'If a Trie is a tree, a Suffix Automaton is a Directed Acyclic Graph. It represents EVERY substring of a string in linear space. This is String Singularity.' Pico: 'It's a shape-shifting nest for every string possible! 🦜'",
        "codeSnippet": "struct State {\n  int len, link;\n  map<char, int> next;\n};",
        "encouragementText": "Ace: 'The DAG is the shadow of the string's soul.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many states can a Suffix Automaton have for a string of length N?",
        "options": ["O(2^N)", "O(N^2)", "At most 2N - 1", "Pico rule"],
        "correctAnswer": "At most 2N - 1",
        "explanation": "Remarkably, despite representing O(N^2) substrings, it only needs linear nodes and edges."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Substrings as Paths",
        "explanation": "Ace: 'Any path from the start state in a SAM represents a unique substring of the original string.' Pico: 'One walk, one word! 🦜'",
        "encouragementText": "Pico: 'Walk the graph! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Total transitions (edges) and nodes in SAM.",
        "codeSnippet": "Nodes = 2*N, Edges = ___*N;",
        "correctAnswer": "3",
        "explanation": "The maximum number of edges is roughly 3N."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] End-Position Equivalence",
        "explanation": "Ace: 'The core of SAM is \"End-Pos Equivalence Classes\". Two substrings are in the same state if they appear at exactly the same end positions in the string.'",
        "encouragementText": "Ace: 'Symmetry is the key to compression.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a state in a SAM represent?",
        "options": ["A single character", "A set of substrings with the same end positions", "The whole string", "Pico's lunch"],
        "correctAnswer": "A set of substrings with the same end positions",
        "explanation": "This is how the SAM achieves linear space."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Online Construction",
        "explanation": "Ace: 'We build the SAM one character at a time. This is called an \"Online\" algorithm. Every insertion adds a node or redirects links.'",
        "encouragementText": "Pico: 'One bead at a time! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "New state initialization.",
        "codeSnippet": "int cur = sz++;\nst[cur].len = st[___].len + 1;",
        "correctAnswer": "last",
        "explanation": "The new state is one character longer than the previous whole-string state."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Substring Architect",
        "explanation": "You have envisioned the SAM. You see the compression of the infinite into the linear. Ace: 'The architecture is profound.'",
        "encouragementText": "Pico: 'Constructing... 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SAM terms!",
        "pairs": [
          { "key": "State", "value": "End-pos set" },
          { "key": "Link", "value": "Suffix fallback" },
          { "key": "Transition", "value": "Character addition" }
        ]
      }
    ]
  },
  {
    "order": 65,
    "title": "Unit 65: SAM: State Extensions",
    "desc": "Mastering the mechanics of SAM creation.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.5] The Split of Reality",
        "explanation": "Ace: 'When adding a char, we might need to split a state. A state represents a set of strings. If only some of them can be extended, reality bifurcates.' Pico: 'Two nests where there was one! 🦜'",
        "codeSnippet": "int clone = sz++;\nst[clone].len = st[p].len + 1;\nst[clone].link = st[q].link;\nst[clone].next = st[q].next;",
        "encouragementText": "Ace: 'Structure evolves to accommodate the new.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "In SAM construction, when do we 'clone' a state?",
        "options": ["Every time", "Never", "When st[p].len + 1 != st[q].len", "Pico guess"],
        "correctAnswer": "When st[p].len + 1 != st[q].len",
        "explanation": "If the length isn't exact, some strings in the class can extend but others can't—so we must split the class."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Link Redirection",
        "explanation": "Ace: 'After cloning, we must update all previous states to point to the new clone instead of the old state.' Pico: 'Redirect the flight traffic! 🦜'",
        "encouragementText": "Pico: 'Rerouting... 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Redirecting transitions in SAM up the link path.",
        "codeSnippet": "while (p != -1 && st[p].next[c] == q) {\n  st[p].next[c] = ___ ;\n  p = st[p].link;\n}",
        "correctAnswer": "clone",
        "explanation": "Updating old states to point to the correct split reality."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Suffix Links in SAM",
        "explanation": "Ace: 'The link in a SAM points to the state containing the longest suffix that belongs to a DIFFERENT end-pos class.' Pico: 'A safety net for smaller strings! 🦜'",
        "encouragementText": "Ace: 'The link is the inverse of the transition.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a Suffix Link in SAM structurally resemble?",
        "options": ["A tree", "A loop", "A grid", "Pico's wings"],
        "correctAnswer": "A tree",
        "explanation": "The links form a 'Suffix Link Tree', rooted at state 0."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] State Minimality",
        "explanation": "Ace: 'SAM is the smallest possible DFA that accepts all suffixes of a string. That is its ultimate power.'",
        "encouragementText": "Pico: 'Tiny but mighty! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Base state 0 initialization.",
        "codeSnippet": "st[0].len = 0; st[0].link = ___ ;",
        "correctAnswer": "-1",
        "explanation": "The root of all link trees as -1 or NULL."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Reality Bender",
        "explanation": "You have mastered SAM state extensions. You can now build the smallest machine for the largest data. Ace: 'The construct is ready.'",
        "encouragementText": "Pico: 'Locked in! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SAM update cases!",
        "pairs": [
          { "key": "No next[c]", "value": "Straight link" },
          { "key": "st[p].len+1 == st[q].len", "value": "Simple link" },
          { "key": "st[p].len+1 != st[q].len", "value": "State split/clone" }
        ]
      }
    ]
  },
  {
    "order": 66,
    "title": "Unit 66: SAM: Longest Common Substrings",
    "desc": "Using SAM to solve the holy grail of string comparison.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.6] The Shared DNA",
        "explanation": "Ace: 'Given string A and string B, find the longest string that exists in both. We build a SAM for A and run B through it.' Pico: 'One bird in another bird's nest! 🦜'",
        "codeSnippet": "while (v != 0 && st[v].next.count(c) == 0) {\n  v = st[v].link; l = st[v].len;\n}\nif (st[v].next.count(c)) { v = st[v].next[c]; l++; }",
        "encouragementText": "Ace: 'Commonality is found in the path of intersection.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the complexity of finding the LCS of two strings using SAM?",
        "options": ["O(N^2)", "O(N log N)", "O(N + M)", "Pico rule"],
        "correctAnswer": "O(N + M)",
        "explanation": "Linear time for both construction and traversal. Much faster than DP's O(N*M)."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Matching Lengths",
        "explanation": "Ace: 'As we slide B through A's SAM, we track the current matching length `l`. If we hit a wall, we follow a link to a shorter suffix.' Pico: 'Back down a bit, then move forward! 🦜'",
        "encouragementText": "Pico: 'Keep sliding! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating the global best LCS.",
        "codeSnippet": "if (l > best) {\n  best = l;\n  best_pos = ___ ;\n}",
        "correctAnswer": "i",
        "explanation": "Storing the length and position of the best match found in string B."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Generalizing to K Strings",
        "explanation": "Ace: 'To find the LCS of 10 strings, we use the same SAM and maintain a \"min-of-max\" array across states.' Pico: 'The common logic of the whole flock! 🦜'",
        "encouragementText": "Ace: 'Universal logic is the peak of synthesis.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How do we store the 'Min-of-Max' match per state in SAM?",
        "options": ["In a global variable", "In an array corresponding to SAM states", "In the next pointer", "Pico guess"],
        "correctAnswer": "In an array corresponding to SAM states",
        "explanation": "Each state remembers the longest match it saw for each string, and we take the minimum of those maxes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Substring Count",
        "explanation": "Ace: 'Total unique substrings is just the sum of (st[i].len - st[st[i].link].len) over all states.' Pico: 'Every state holds a different length range! 🦜'",
        "encouragementText": "Pico: 'Count the variety! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Formula for unique substrings in a state.",
        "codeSnippet": "long long ways = 0;\nfor(int i=1; i<sz; i++) \n  ways += st[i].len - st[___].len;",
        "correctAnswer": "st[i].link",
        "explanation": "The number of strings represented by state i is the range [minLen, maxLen]."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Common Link",
        "explanation": "You have found the intersection of worlds. You can find the shared pulse of any two datasets in linear time. Ace: 'The bond is quantified.'",
        "encouragementText": "Pico: 'We have so much in common! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match SAM Applications!",
        "pairs": [
          { "key": "LCS", "value": "Traverse B on SAM(A)" },
          { "key": "Distinct Substrings", "value": "Sum nodes (L-LinkL)" },
          { "key": "Count Occurrences", "value": "Link tree DP" }
        ]
      }
    ]
  },
  {
    "order": 67,
    "title": "Unit 67: SAM: Count Occurrences",
    "desc": "Quantifying the repetitions in the string matrix.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.7] The Echo Counter",
        "explanation": "Ace: 'How many times does 'ABC' appear in a gigabyte of text? In SAM, we use the Suffix Link Tree to propagate the count.' Pico: 'Every leaf sends a count up to the root! 🦜'",
        "codeSnippet": "for(int i=sz-1; i>=0; i--) {\n  int v = sorted_states[i];\n  count[st[v].link] += count[v];\n}",
        "encouragementText": "Ace: 'Truth is found in the summation of echoes.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why do we process states in reverse order of length to calculate counts?",
        "options": ["It's alphabetical", "Ensures we process children before parents in the link tree", "For fun", "Pico guess"],
        "correctAnswer": "Ensures we process children before parents in the link tree",
        "explanation": "Suffix links point to shorter strings (parents). Processing longer ones first ensures counts flow correctly upward."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Initial Counts",
        "explanation": "Ace: 'A state created as a 'New' node (not a clone) starts with count=1. Clones start with count=0 because they are just split placeholders.' Pico: 'Originals count, clones assist! 🦜'",
        "encouragementText": "Pico: 'Originals only! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Marking terminal states in SAM build.",
        "codeSnippet": "st[cur].count = 1;\nst[clone].count = ___ ;",
        "correctAnswer": "0",
        "explanation": "Freshly added nodes represent actual positions in the string; clones represent structural adjustments."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Topological Sort of SAM",
        "explanation": "Ace: 'Instead of full topological sort, we can just sort nodes by their `len` property. Longer strings always depend on shorter ones via links.'",
        "encouragementText": "Ace: 'Simplify the order, speed up the math.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which property is used for bucket sorting SAM states?",
        "options": ["Link", "Next", "Length (len)", "Pico color"],
        "correctAnswer": "Length (len)",
        "explanation": "Length is directly related to depth in the suffix structures."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] All Occurrences of P",
        "explanation": "Ace: 'Find state V representing pattern P. The count[V] is the number of occurrences. To find the ACTUAL positions, we follow paths down the link tree.'",
        "encouragementText": "Pico: 'Map the nests! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding occurrences after traversal.",
        "codeSnippet": "int v = traverse(pattern);\nreturn (v == -1) ? 0 : ___ ;",
        "correctAnswer": "count[v]",
        "explanation": "Retrieving the precomputed count for the found state."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Frequency Lord",
        "explanation": "You have mapped the density of the string. You know the weight of every syllable. Ace: 'Statistics are the bones of reality.'",
        "encouragementText": "Pico: 'Counting the seeds... 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Count phases!",
        "pairs": [
          { "key": "Initialization", "value": "Set cur.count = 1" },
          { "key": "Sorting", "value": "Bucket sort by len" },
          { "key": "Propagation", "value": "Add child count to link" }
        ]
      }
    ]
  },
  {
    "order": 68,
    "title": "Unit 68: Compressed Tries & Patricia Trees",
    "desc": "Shrinking the tree to fit the elite world.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.8] The Compact Spire",
        "explanation": "Ace: 'A standard Trie is bloated. A Compressed Trie (or Patricia Tree) merges paths of single children into single edges with string labels.' Pico: 'No more empty branches! 🦜'",
        "codeSnippet": "struct Edge {\n  int start, length;\n  int next_node;\n};",
        "encouragementText": "Ace: 'Space is the final constraint to conquer.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "How many nodes does a Suffix Tree (Compressed Trie of all suffixes) have?",
        "options": ["O(N^2)", "O(N)", "O(log N)", "Pico rule"],
        "correctAnswer": "O(N)",
        "explanation": "Compression ensures that internal nodes only exist where paths branch, resulting in at most 2N nodes."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Edge Labels",
        "explanation": "Ace: 'An edge isn't just a char; it's a range [L, R] in our original string. This is how we store whole words for the price of two integers.' Pico: 'Efficiency is beautiful! 🦜'",
        "encouragementText": "Pico: 'Label the flight! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Finding character at position X on a compressed edge.",
        "codeSnippet": "char c = original_string[edge.start + ___ ];",
        "correctAnswer": "X",
        "explanation": "Accessing the original string using the compressed offset."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Trie vs Suffix Tree",
        "explanation": "Ace: 'A Suffix Tree is just a Compressed Trie of all suffixes. It and SAM are duals—different views of the same string soul.'",
        "encouragementText": "Ace: 'Choose the perspective that solves the problem.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What's the main advantage of Patricia Trees in routing tables (like IP routing)?",
        "options": ["They look like trees", "Prefix matching is fast and space-efficient", "They use more RAM", "Pico guess"],
        "correctAnswer": "Prefix matching is fast and space-efficient",
        "explanation": "Ideal for CIDR blocks and longest prefix matches."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Memory Comparison",
        "explanation": "Ace: 'Compressing a Trie can save 90% of memory for strings with shared paths. But it makes insertion more complex split operations.'",
        "encouragementText": "Pico: 'Worth it! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Split logic condition.",
        "codeSnippet": "if (search_char != edge_char) {\n  split_node(edge, ___ );\n}",
        "correctAnswer": "pos",
        "explanation": "When a new string diverges from a compressed path, the edge must split."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Compactor",
        "explanation": "You have squeezed the air out of the data. Your trees are dense and your logic is lean. Ace: 'Minimalism is power.'",
        "encouragementText": "Pico: 'Tight fit! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Tree types!",
        "pairs": [
          { "key": "Standard Trie", "value": "One char per node" },
          { "key": "Patricia Tree", "value": "Compressed paths" },
          { "key": "Suffix Tree", "value": "The SAM's sibling" }
        ]
      }
    ]
  },
  {
    "order": 69,
    "title": "Unit 69: Suffix Links in SAM (Deep Dive)",
    "desc": "Understanding the gravity that holds the DAG together.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[MISSION LORE 7.9] The Link of Heritage",
        "explanation": "Ace: 'Suffix links are not just fallbacks. They form a tree where every child is a longer version of the parent, but shares the same ENTIRE set of occurrences.' Pico: 'The string family tree! 🦜'",
        "codeSnippet": "LinkTree[st[v].link].push_back(v);",
        "encouragementText": "Ace: 'Heritage is the map of existence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "If state A points to state B via a suffix link, what is always true?",
        "options": ["A.len < B.len", "B.len < A.len", "A is a prefix of B", "Pico guess"],
        "correctAnswer": "B.len < A.len",
        "explanation": "Suffix links always point to shorter suffixes of the current strings."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The First Position",
        "explanation": "Ace: 'We can store the `first_pos` (the first index where this class of substrings ends) as we build the SAM. This helps find an actual occurrence instantly.'",
        "encouragementText": "Pico: 'First seen! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Updating first_pos for a clone.",
        "codeSnippet": "st[clone].first_pos = st[___].first_pos;",
        "correctAnswer": "q",
        "explanation": "Clones inherit the first occurrence position from the original state they split from."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Link Tree Traversal",
        "explanation": "Ace: 'By running DFS on the Link Tree, we can compute things like the set of all end-positions (using Segment Trees or Small-to-Large merging).' Pico: 'The Tree inside the DAG! 🦜'",
        "encouragementText": "Ace: 'Dual structures unlock dual solutions.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does a leaf in the Link Tree represent?",
        "options": ["A character", "A substring that only appears once (unique suffix)", "The whole string", "Pico guess"],
        "correctAnswer": "A substring that only appears once (unique suffix)",
        "explanation": "Unique substrings that never recur as suffixes elsewhere."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Suffix Paths",
        "explanation": "Ace: 'Walking up the suffix links from a state V gives you EVERY suffix of the string ending at first_pos[V].'",
        "encouragementText": "Pico: 'Walk the line! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Iterating up the link tree to root.",
        "codeSnippet": "while (v != ___ ) {\n  v = st[v].link;\n}",
        "correctAnswer": "-1",
        "explanation": "Stopping at the sentinel value above state 0."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Link Master",
        "explanation": "You have descended into the link tree. You understand the invisible bonds that support the massive string structure. Ace: 'Depth is the foundation of width.'",
        "encouragementText": "Pico: 'Rooted! 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Link properties!",
        "pairs": [
          { "key": "st[v].link", "value": "Immediate parent" },
          { "key": "depth[v]", "value": "Distance to root" },
          { "key": "first_pos", "value": "Index of occurrence" }
        ]
      }
    ]
  },
  {
    "order": 70,
    "title": "Unit 70: Stage 7 Graduation (The Automata Architect)",
    "desc": "Claiming the Automata Peak: Suffixes and Dictionary links are yours.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND MISSION LORE 7.10] The Citadel of Strings",
        "explanation": "Ace: 'You have mastered Aho-Corasick's multi-vision and the Suffix Automaton's universal substrings. You are no longer just comparing strings; you are an Architect of String Reality.' Pico: 'Stage 7 Complete! We fly to the Mirrors of Manacher next! 🦜'",
        "encouragementText": "Ace: 'Structure is the destiny of the data.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which structure should you use for searching a million fixed patterns in a stream?",
        "options": ["SAM", "Aho-Corasick", "KMP", "Pico guess"],
        "correctAnswer": "Aho-Corasick",
        "explanation": "AC is optimized specifically for fixed pattern dictionary matching."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Substring Supremacy",
        "explanation": "10 units, 100 lessons. This stage has unlocked the most powerful tools in competitive string theory. Ace: 'Take a breath. The mirror world awaits.'",
        "encouragementText": "Pico: '70% through the 1,000-lesson gauntlet! 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the space complexity of a SAM?",
        "options": ["O(N^2)", "O(N)", "O(log N)", "Pico secret"],
        "correctAnswer": "O(N)",
        "explanation": "Despite representing O(N^2) strings, it only needs at most 2N-1 states."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Graduation Check",
        "explanation": "Ace: 'Prove you can transition from AC to SAM in your mental buffers.' Pico: 'AC for patterns, SAM for substrings! 🦜'",
        "encouragementText": "Ace: 'Clarity is the final stage of learning.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "LPS of 'abcabc'?",
        "options": ["0", "3", "6", "Pico guess"],
        "correctAnswer": "3",
        "explanation": "The prefix 'abc' matches the suffix 'abc'."
      },
      {
        "type": "teaching",
        "questionText": "[FINAL SYNC] The 10x10x10 Path",
        "explanation": "You are 70% through the ultimate journey. Your next target: **Stage 8: Palindromic Mastery**. Ace: 'The symmetry awaits.'",
        "encouragementText": "Pico: 'Stage 8 seeds are waiting! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final stage signal.",
        "codeSnippet": "if (automata_architect == true) return ___ ;",
        "correctAnswer": "GRADUATE",
        "explanation": "You have successfully mastered the Advanced Automata Phase."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Architect of Strings",
        "explanation": "The automata are built. The transitions are fluid. You are a Stage 7 Graduate. Ace: 'Welcome to the inner circle.'",
        "encouragementText": "Pico: 'Titan-Grade! 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[GRADUATION CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=61; i<=70; i++) verify_automata(i);\nreturn ___ ;",
        "correctAnswer": "COMPLETE",
        "explanation": "The seventh decile of the 1,000-lesson curriculum is fully verified."
      }
    ]
  }
];

module.exports = stage4;
