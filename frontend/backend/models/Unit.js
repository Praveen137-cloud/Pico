const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  title: String,
  desc: String,
  stageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stage' },
  order: Number,
  xp: { type: Number, default: 50 },
  isUnlocked: { type: Boolean, default: true },
});

module.exports = mongoose.model('Unit', unitSchema);
