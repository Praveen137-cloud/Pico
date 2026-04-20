const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
  title: String,
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  order: Number,
  videoUrl: { type: String, default: '' },
  videoTitle: { type: String, default: '' },
});

module.exports = mongoose.model('Stage', stageSchema);
