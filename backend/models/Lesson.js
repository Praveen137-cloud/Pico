const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
  order: Number,
  type: {
    type: String,
    enum: ['teaching', 'multiple_choice', 'true_false', 'match_following', 'programming_board', 'code_fill_in', 'code_problem'],
    default: 'teaching'
  },
  questionText: String,
  options: [String],
  correctAnswer: String,
  pairs: [{ key: String, value: String }],
  codeSnippet: String,
  language: String,
  explanation: String, // Purely professional academic content
  hint: String,
});

module.exports = mongoose.model('Lesson', lessonSchema);
