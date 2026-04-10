const stage1 = [
  {
    "order": 1,
    "title": "The Magic Key (Intro)",
    "desc": "Understanding the power of O(1) lookups.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"Hashing! It's the ultimate shortcut. Instead of searching the whole forest, we use a key to find the EXACT nest instantly! 🦜\""
      },
      {
        "type": "teaching",
        "questionText": "🦜 Pico: \"A Hash Function takes an input (like a bird song) and turns it into a fixed number (the nest index). 🦜\"",
        "codeSnippet": "int hashFunc(string key) {\n  return key.length() % TABLE_SIZE;\n}"
      },
      { "type": "multiple_choice", "questionText": "Ideal time complexity for a hash lookup?", "options": ["O(1)", "O(N)", "O(log N)"], "correctAnswer": "O(1)" }
    ]
  },
  {
    "order": 2,
    "title": "The Index Engine",
    "desc": "How hash functions work.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"A good hash function distributes birds evenly across the forest. No crowding! 🦜\"" },
      { "type": "programming_board", "questionText": "Calculate index for 'Pico' if TABLE_SIZE=10 (using length%10).", "codeSnippet": "int index = 4 % 10; // index is ___;", "correctAnswer": "4" }
    ]
  },
  {
    "order": 3,
    "title": "Collision Catastrophe",
    "desc": "When two keys map to the same index.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Collision! Two birds, one nest. We need a strategy to handle this! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Is collision avoidable with a small table?", "options": ["No", "Yes", "Only for birds"], "correctAnswer": "No" }
    ]
  },
  {
    "order": 4,
    "title": "The Chain Link (Chaining)",
    "desc": "Using Linked Lists to handle collisions.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Chaining! Each nest becomes a Linked List. If a collision happens, just add the bird to the end of the chain! 🦜\"", "codeSnippet": "vector<list<string>> table(10);" },
      { "type": "multiple_choice", "questionText": "Worst-case lookup in a skewed chain?", "options": ["O(N)", "O(1)", "O(log N)"], "correctAnswer": "O(N)" }
    ]
  },
  {
    "order": 5,
    "title": "Linear Probing (Open Addressing)",
    "desc": "Finding the next empty nest.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"If the nest is full, look at the next one! And the next! 🦜\"" },
      { "type": "programming_board", "questionText": "Next index after 'i' in linear probing.", "codeSnippet": "next = (i + ___) % size;", "correctAnswer": "1" }
    ]
  },
  {
    "order": 6,
    "title": "Load Factor Logic",
    "desc": "Knowing when the forest is too full.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"Load Factor = Number of Birds / Total Nests. If it's too high, we need to REHASH! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Common load factor threshold for resizing?", "options": ["0.75", "0.1", "1.0"], "correctAnswer": "0.75" }
    ]
  },
  {
    "order": 7,
    "title": "Rehashing the Forest",
    "desc": "Dynamic resizing of the hash table.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"When we resize, we don't just copy. We must RE-HASH every bird to a new nest in the bigger forest! 🦜\"" },
      { "type": "multiple_choice", "questionText": "Why re-hash?", "options": ["Indices change with table size", "Bird songs change", "To save memory"], "correctAnswer": "Indices change with table size" }
    ]
  },
  {
    "order": 8,
    "title": "HashSet (The Unique Flock)",
    "desc": "Storing unique elements.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"`unordered_set` (C++) or `HashSet` (Java) only allows one of each bird. No duplicates! 🦜\"" },
      { "type": "programming_board", "questionText": "Check if bird 'Pico' exists in set 'birds'.", "codeSnippet": "if (birds.find(\"Pico\") ___ birds.end())", "correctAnswer": "!=" }
    ]
  },
  {
    "order": 9,
    "title": "HashMap (The Seed Map)",
    "desc": "Mapping Keys to Values.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"`unordered_map` (C++) or `HashMap` (Java) links a Bird to their Favorite Seed! 🦜\"" },
      { "type": "programming_board", "questionText": "Store 'Sunflower' for bird 'Pico'.", "codeSnippet": "favSeeds[\"Pico\"] = ___ ;", "correctAnswer": "\"Sunflower\"" }
    ]
  },
  {
    "order": 10,
    "title": "Frequency Counter",
    "desc": "Counting bird sightings.",
    "lessons": [
      { "type": "teaching", "questionText": "🦜 Pico: \"How many times did we see each bird? Use a Map! 🦜\"" },
      { "type": "programming_board", "questionText": "Increment count for bird 'b'.", "codeSnippet": "counts[b] ___ ;", "correctAnswer": "++" }
    ]
  },
  { "order": 11, "title": "First Non-Repeating", "desc": "Finding the unique bird.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Count all, then pick the first one with count 1! 🦜\"" } ] },
  { "order": 12, "title": "Subarray Sum 0", "desc": "Using prefix sums and hashing.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"If a prefix sum repeats, the sum in between was 0! 🦜\"" } ] },
  { "order": 13, "title": "Double Hashing", "desc": "Secondary search on collision.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"If collision, use a second hash function to find the step! 🦜\"" } ] },
  { "order": 14, "title": "Quadratic Probing", "desc": "Squaring the search step.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Step size: 1, 4, 9, 16... 🦜\"" } ] },
  { "order": 15, "title": "HashSet API", "desc": "Insert, erase, find.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Standard operations for sets. 🦜\"" } ] },
  { "order": 16, "title": "HashMap Entry Set", "desc": "Iterating through pairs.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Visiting every bird-seed pair! 🦜\"" } ] },
  { "order": 17, "title": "Ordered vs Unordered", "desc": "Trees vs Hashing.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"`std::map` is ordered (O(logN)), `std::unordered_map` is hashing (O(1)). 🦜\"" } ] },
  { "order": 18, "title": "Bloom Filters Intro", "desc": "Probably in the set?", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"A space-efficient way to say 'maybe' or 'definitely not'! 🦜\"" } ] },
  { "order": 19, "title": "Perfect Hashing", "desc": "Zero collisions for static data.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"Custom-built for set data! 🦜\"" } ] },
  { "order": 20, "title": "Master Point (Hashing 1)", "desc": "Instant Access Mastery.", "lessons": [ { "type": "teaching", "questionText": "🦜 Pico: \"HASHING STAGE 1 COMPLETE! No more searching—just finding. 🦜\"" } ] }
];

module.exports = stage1;
