const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: String,
  type: {
    type: String,
    enum: ['teaching', 'multiple_choice', 'true_false', 'match_following', 'programming_board', 'code_fill_in', 'code_problem'],
    default: 'multiple_choice'
  },
  questionText: String,
  options: [String],
  correctAnswer: String,
  pairs: [{ key: String, value: String }], // for match_following
  codeSnippet: String,
  language: String,
  explanation: String, // shown after wrong answer
  hint: String,        // shown on demand via hint button
});


const unitSchema = new mongoose.Schema({
  title: String,
  desc: String,
  xp: { type: Number, default: 20 },
  isUnlocked: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  lessons: [lessonSchema]
});

const sectionSchema = new mongoose.Schema({
  title: String,
  units: [unitSchema]
});

const subjectSchema = new mongoose.Schema({
  name: String, // e.g., Arrays, Trees, Sorting
  icon: String, // emoji or image path
  sections: [sectionSchema]
});

module.exports = mongoose.model('Subject', subjectSchema);
