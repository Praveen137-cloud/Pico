const mongoose = require('mongoose');

const testCaseSchema = new mongoose.Schema({
  args: [{ type: String }],
  expectedOutput: { type: String, required: true }
});

const languageTemplateSchema = new mongoose.Schema({
  starterCode: { type: String, required: true },
  driverCode: { type: String, default: '' }
});

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  difficulty: { type: String, default: 'Easy', enum: ['Easy', 'Medium', 'Hard'] },
  tag: { type: String, default: 'Math', enum: ['Arrays', 'Strings', 'Math', 'Sorting', 'Recursion', 'Two Pointers', 'Hash Maps', 'Stacks & Queues', 'Linked Lists', 'Dynamic Programming', 'Greedy', 'Heaps', 'Bit Manipulation', 'Sliding Window', 'Backtracking', 'Zoho Elite', 'Zoho PYQ'] },
  hints: [{ type: String }],
  testCases: [testCaseSchema],
  templates: {
    c: languageTemplateSchema,
    python: languageTemplateSchema,
    java: languageTemplateSchema
  }
});

module.exports = mongoose.model('Problem', problemSchema);
