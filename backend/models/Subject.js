const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  icon: String, // Animal icon (Professionally styled)
  stages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stage' }],
});

module.exports = mongoose.model('Subject', subjectSchema);
