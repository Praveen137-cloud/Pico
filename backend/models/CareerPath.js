const mongoose = require('mongoose');

const careerPathSchema = new mongoose.Schema({
  branch: { 
    type: String, 
    required: true,
    enum: [
      'Computer Science', 'Information Technology', 'Electronics', 'Electrical', 'Mechanical', 'Civil',
      'Software Engineering', 'Data Science', 'Artificial Intelligence', 'Cybersecurity', 'Prompt Engineering'
    ]
  },
  interest: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  roadmap: { 
    type: String, // Markdown content
    required: true 
  },
  skills: [{ type: String }],
  estimatedTime: { type: String, default: '6-12 Months' }
}, { timestamps: true });

// Index for fast lookups
careerPathSchema.index({ branch: 1, interest: 1 });

module.exports = mongoose.model('CareerPath', careerPathSchema);
