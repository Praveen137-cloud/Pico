const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  icon: String, 
  isTitan: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
  stages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stage' }],
});

module.exports = mongoose.model('Subject', subjectSchema);
