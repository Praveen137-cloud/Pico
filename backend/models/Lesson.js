const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  unitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Unit' },
  subject: String, // Grouping for Titan-Grade curriculum
  unitTitle: String,
  unitOrder: Number,
  lessonOrder: Number,
  isTitan: { type: Boolean, default: false },
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
  explanation: String,
  hint: String,
}, { strict: false }); // Allow extra fields for safety durante expansion

module.exports = mongoose.model('Lesson', lessonSchema);
