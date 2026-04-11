const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const CareerPath = require('../models/CareerPath');

const DEFAULT_PATHS = [
  {
    branch: 'Computer Science',
    interest: 'Web Development',
    title: 'Full-Stack Web Architect',
    description: 'Master the art of building modern, scalable web applications from frontend to backend.',
    roadmap: `### 🌐 Full-Stack Web Development Roadmap\n\n**Stage 1: Foundational Core (Weeks 1-4)**\n*   **HTML5 & Semantic Web**: Master structure and SEO.\n*   **CSS3 & Flexbox/Grid**: Build responsive, modern layouts.\n*   **Modern JS (ES6+)**: Focus on Promises, Async/Await, and Closures.\n\n**Stage 2: Frontend Mastery (Weeks 5-12)**\n*   **React.js**: Components, Hooks (useState, useEffect), and Context API.\n*   **TailwindCSS**: Utility-first styling for rapid UI development.\n*   **State Management**: React Query or Redux Toolkit.\n\n**Stage 3: Backend & API (Weeks 13-20)**\n*   **Node.js & Express**: Build RESTful APIs and handle middleware.\n*   **MongoDB & Mongoose**: NoSQL data modeling and indexing.\n*   **Authentication**: JWT (JSON Web Tokens) and Bcrypt.\n\n**Stage 4: Deployment & Scaling (Weeks 21-24)**\n*   **Git & GitHub**: Professional version control workflow.\n*   **Docker Basics**: Containerizing your environment.\n*   **Platform Cloud**: Vercel (Frontend), Render/DigitalOcean (Backend).\n\n**💡 Elite Tip:** Build a real-world project like a "Portfolio" or "Task Manager" to showcase your skills.`,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    estimatedTime: '6 Months'
  },
  {
    branch: 'Computer Science',
    interest: 'Artificial Intelligence',
    title: 'AI & Machine Learning Engineer',
    description: 'Dive deep into the mathematical foundations and architectural patterns of AI.',
    roadmap: `### 🧠 AI & Machine Learning Roadmap\n\n**Stage 1: Mathematical Foundations (Weeks 1-6)**\n*   **Linear Algebra**: Matrices, Vectors, and Eigenvalues.\n*   **Calculus**: Gradients and Derivatives for Optimization.\n*   **Statistics & Probability**: Bayes Theorem and Standard Distributions.\n\n**Stage 2: Python for Data Science (Weeks 7-12)**\n*   **NumPy & Pandas**: Data manipulation and numerical computing.\n*   **Matplotlib & Seaborn**: Data visualization.\n*   **Scikit-Learn**: Implementing classical ML models (Regression, Trees).\n\n**Stage 3: Deep Learning Core (Weeks 13-20)**\n*   **Neural Networks**: Perceptrons, Activations, and Backpropagation.\n*   **PyTorch or TensorFlow**: building and training model architectures.\n*   **Computer Vision (CNNs)**: Image classification and object detection.\n\n**Stage 4: Advanced AI & Deployment (Weeks 21-28)**\n*   **NLP (Natural Language Processing)**: Transformers and LLM basics.\n*   **Model Deployment**: Fast API and MLOps basics.\n\n**💡 Elite Tip:** Participate in Kaggle competitions to apply your skills to real datasets.`,
    skills: ['Python', 'Statistics', 'PyTorch', 'Linear Algebra', 'Scikit-Learn'],
    estimatedTime: '8-10 Months'
  },
  {
    branch: 'Electronics',
    interest: 'Embedded Systems',
    title: 'Embedded Systems & IoT Specialist',
    description: 'Bridge the gap between hardware and software by mastering low-level programming.',
    roadmap: `### 📟 Embedded Systems Roadmap\n\n**Stage 1: Low-Level Programming (Weeks 1-6)**\n*   **Advanced C Programming**: Pointers, Memory Management, and Bit manipulation.\n*   **Data Structures for Embedded**: Linked lists and Circular buffers in C.\n\n**Stage 2: Hardware Architecture (Weeks 7-12)**\n*   **Microcontrollers**: Study 8051, AVR, and **ARM Cortex-M**.\n*   **Peripherals**: UART, SPI, I2C, and ADC/DAC communication.\n*   **RTOS Basics**: Concepts of Real-Time Operating Systems (FreeRTOS).\n\n**Stage 3: IoT & Connectivity (Weeks 13-18)**\n*   **Connectivity Protocols**: MQTT, HTTP, and BLE (Bluetooth Low Energy).\n*   **IoT Platforms**: Integrating with AWS IoT Core or Firebase.\n\n**Stage 4: Product Development (Weeks 19-24)**\n*   **PCB Design Basics**: Using KiCad or Eagle.\n*   **Debugging Tools**: JTAG, Logic Analyzers, and Oscilloscopes.\n\n**💡 Elite Tip:** Build a Home Automation device using an ESP32 or STM32 board.`,
    skills: ['C', 'Microcontrollers', 'RTOS', 'I2C/SPI', 'IoT Protocols'],
    estimatedTime: '6-8 Months'
  },
  {
    branch: 'Mechanical',
    interest: 'Robotics',
    title: 'Robotics & Automation Engineer',
    description: 'Construct the future by integrating mechanical design with intelligent control systems.',
    roadmap: `### 🤖 Robotics Engineering Roadmap\n\n**Stage 1: Mechanical Design (Weeks 1-8)**\n*   **CAD Mastery**: SolidWorks or Autodesk Fusion 360.\n*   **Mechanisms**: Linkages, Gears, and Actuators.\n*   **Materials Science**: Choosing the right metal/plastic for stress points.\n\n**Stage 2: Robotics Control (Weeks 9-16)**\n*   **Kinematics**: Forward and Inverse Kinematics for Robot Arms.\n*   **Sensors**: LIDAR, IMUs, and Ultrasonic sensors.\n*   **Control Theory**: PID controllers and State-space modeling.\n\n**Stage 3: Programming for Robots (Weeks 17-24)**\n*   **ROS (Robot Operating System)**: Nodes, Topics, and NavStack.\n*   **Python/C++ for Control**: Implementing logic on an Arduino/Raspberry Pi.\n\n**Stage 4: Intelligence (Weeks 25-32)**\n*   **Path Planning**: A* Search and SLAM (Simultaneous Localization and Mapping).\n*   **Computer Vision**: Using OpenCV for object tracking.\n\n**💡 Elite Tip:** Start with a simple mobile robot that can avoid obstacles and build toward a 3-DOF arm.`,
    skills: ['CAD', 'ROS', 'Control Systems', 'C++', 'Kinematics'],
    estimatedTime: '10-12 Months'
  }
];

// @route   GET /api/career/options
// @desc    Get available branches and interests for the choice matrix
// @access  Private
router.get('/options', auth, async (req, res) => {
  try {
    let paths = await CareerPath.find({}, 'branch interest');
    
    // Auto-seed for production if empty
    if (paths.length === 0) {
      console.log("Seeding CareerPaths manually for production...");
      await CareerPath.insertMany(DEFAULT_PATHS);
      paths = await CareerPath.find({}, 'branch interest');
    }

    const branches = [...new Set(paths.map(p => p.branch))];
    const interestsByBranch = {};
    
    paths.forEach(p => {
      if (!interestsByBranch[p.branch]) interestsByBranch[p.branch] = [];
      if (!interestsByBranch[p.branch].includes(p.interest)) {
        interestsByBranch[p.branch].push(p.interest);
      }
    });

    res.json({ branches, interestsByBranch });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch options' });
  }
});

// @route   POST /api/career/guidance
// @desc    Get specific roadmap from DB
// @access  Private
router.post('/guidance', auth, async (req, res) => {
  try {
    const { branch, interest } = req.body;
    
    const path = await CareerPath.findOne({ branch, interest });
    
    if (!path) {
      // Fallback to a general branch-wide guidance if specific interest is missing
      const genericPath = await CareerPath.findOne({ branch });
      if (genericPath) {
        return res.json({ 
          advice: genericPath.roadmap, 
          title: genericPath.title,
          isGeneric: true 
        });
      }
      return res.status(404).json({ error: 'No roadmap found for this selection yet.' });
    }

    res.json({ 
      advice: path.roadmap, 
      title: path.title,
      skills: path.skills,
      estimatedTime: path.estimatedTime 
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch roadmap' });
  }
});

module.exports = router;
