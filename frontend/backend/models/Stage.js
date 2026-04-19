const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
  title: String,
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  order: Number,
});

module.exports = mongoose.model('Stage', stageSchema);
