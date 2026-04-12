const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, default: 'Student' },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional to allow future OAuth where passwords aren't present
  googleId: { type: String, sparse: true }, // For Google OAuth
  isGuest: { type: Boolean, default: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  preferredLanguage: { type: String, default: 'c', enum: ['c', 'python', 'java'] },
  isPremium: { type: Boolean, default: false },
  adsHidden: { type: Boolean, default: false },
  
  avatar: { type: String, default: 'Parrot' },
  lastVisitedSubject: { type: String, default: 'Arrays' },
  lastSubjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  lastSectionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Stage' },
  onboardingCompleted: { type: Boolean, default: false },
  xp: { type: Number, default: 0 },
  xpBoostUntil: { type: Date, default: null }, // For Double XP boosters
  lessonsCompleted: { type: Number, default: 0 },
  streak: { type: Number, default: 0 },
  lastStreakUpdate: { type: Date, default: null },
  completedSubjects: [{ type: String }],
  completedUnits: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' }], 
  questsClaimed: [{ type: String }], // e.g. "quest_c_compile", "quest_login"
  progress: {
    subjectProgress: {
      type: Map,
      of: new mongoose.Schema({
        currentSectionIndex: { type: Number, default: 0 },
        currentUnitIndex: { type: Number, default: 0 },
        currentLessonIndex: { type: Number, default: 0 }
      })
    }
  },
  submissions: [{
    problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
    problemTitle: { type: String },
    language: { type: String },
    status: { type: String },
    solvedAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

// Pre-save hook to hash password before saving to database
userSchema.pre('save', async function() {
  if (!this.isModified('password')) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Helper method to compare password during login
userSchema.methods.comparePassword = async function(candidatePassword) {
  if (!this.password) return false;
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
