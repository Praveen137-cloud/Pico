const mongoose = require('mongoose');
const CareerPath = require('./models/CareerPath');
require('dotenv').config();

const careerPaths = [
  {
    branch: 'Computer Science',
    interest: 'Web Development',
    title: 'Full-Stack Web Architect',
    description: 'Master the art of building modern, scalable web applications from frontend to backend.',
    roadmap: `### 🌐 Full-Stack Web Development Roadmap

**Stage 1: Foundational Core (Weeks 1-4)**
*   **HTML5 & Semantic Web**: Master structure and SEO.
*   **CSS3 & Flexbox/Grid**: Build responsive, modern layouts.
*   **Modern JS (ES6+)**: Focus on Promises, Async/Await, and Closures.

**Stage 2: Frontend Mastery (Weeks 5-12)**
*   **React.js**: Components, Hooks (useState, useEffect), and Context API.
*   **TailwindCSS**: Utility-first styling for rapid UI development.
*   **State Management**: React Query or Redux Toolkit.

**Stage 3: Backend & API (Weeks 13-20)**
*   **Node.js & Express**: Build RESTful APIs and handle middleware.
*   **MongoDB & Mongoose**: NoSQL data modeling and indexing.
*   **Authentication**: JWT (JSON Web Tokens) and Bcrypt.

**Stage 4: Deployment & Scaling (Weeks 21-24)**
*   **Git & GitHub**: Professional version control workflow.
*   **Docker Basics**: Containerizing your environment.
*   **Platform Cloud**: Vercel (Frontend), Render/DigitalOcean (Backend).

**💡 Elite Tip:** Build a real-world project like a "Portfolio" or "Task Manager" to showcase your skills.`,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    estimatedTime: '6 Months'
  },
  {
    branch: 'Computer Science',
    interest: 'Artificial Intelligence',
    title: 'AI & Machine Learning Engineer',
    description: 'Dive deep into the mathematical foundations and architectural patterns of AI.',
    roadmap: `### 🧠 AI & Machine Learning Roadmap

**Stage 1: Mathematical Foundations (Weeks 1-6)**
*   **Linear Algebra**: Matrices, Vectors, and Eigenvalues.
*   **Calculus**: Gradients and Derivatives for Optimization.
*   **Statistics & Probability**: Bayes Theorem and Standard Distributions.

**Stage 2: Python for Data Science (Weeks 7-12)**
*   **NumPy & Pandas**: Data manipulation and numerical computing.
*   **Matplotlib & Seaborn**: Data visualization.
*   **Scikit-Learn**: Implementing classical ML models (Regression, Trees).

**Stage 3: Deep Learning Core (Weeks 13-20)**
*   **Neural Networks**: Perceptrons, Activations, and Backpropagation.
*   **PyTorch or TensorFlow**: building and training model architectures.
*   **Computer Vision (CNNs)**: Image classification and object detection.

**Stage 4: Advanced AI & Deployment (Weeks 21-28)**
*   **NLP (Natural Language Processing)**: Transformers and LLM basics.
*   **Model Deployment**: Fast API and MLOps basics.

**💡 Elite Tip:** Participate in Kaggle competitions to apply your skills to real datasets.`,
    skills: ['Python', 'Statistics', 'PyTorch', 'Linear Algebra', 'Scikit-Learn'],
    estimatedTime: '8-10 Months'
  },
  {
    branch: 'Electronics',
    interest: 'Embedded Systems',
    title: 'Embedded Systems & IoT Specialist',
    description: 'Bridge the gap between hardware and software by mastering low-level programming.',
    roadmap: `### 📟 Embedded Systems Roadmap

**Stage 1: Low-Level Programming (Weeks 1-6)**
*   **Advanced C Programming**: Pointers, Memory Management, and Bit manipulation.
*   **Data Structures for Embedded**: Linked lists and Circular buffers in C.

**Stage 2: Hardware Architecture (Weeks 7-12)**
*   **Microcontrollers**: Study 8051, AVR, and **ARM Cortex-M**.
*   **Peripherals**: UART, SPI, I2C, and ADC/DAC communication.
*   **RTOS Basics**: Concepts of Real-Time Operating Systems (FreeRTOS).

**Stage 3: IoT & Connectivity (Weeks 13-18)**
*   **Connectivity Protocols**: MQTT, HTTP, and BLE (Bluetooth Low Energy).
*   **IoT Platforms**: Integrating with AWS IoT Core or Firebase.

**Stage 4: Product Development (Weeks 19-24)**
*   **PCB Design Basics**: Using KiCad or Eagle.
*   **Debugging Tools**: JTAG, Logic Analyzers, and Oscilloscopes.

**💡 Elite Tip:** Build a Home Automation device using an ESP32 or STM32 board.`,
    skills: ['C', 'Microcontrollers', 'RTOS', 'I2C/SPI', 'IoT Protocols'],
    estimatedTime: '6-8 Months'
  },
  {
    branch: 'Mechanical',
    interest: 'Robotics',
    title: 'Robotics & Automation Engineer',
    description: 'Construct the future by integrating mechanical design with intelligent control systems.',
    roadmap: `### 🤖 Robotics Engineering Roadmap

**Stage 1: Mechanical Design (Weeks 1-8)**
*   **CAD Mastery**: SolidWorks or Autodesk Fusion 360.
*   **Mechanisms**: Linkages, Gears, and Actuators.
*   **Materials Science**: Choosing the right metal/plastic for stress points.

**Stage 2: Robotics Control (Weeks 9-16)**
*   **Kinematics**: Forward and Inverse Kinematics for Robot Arms.
*   **Sensors**: LIDAR, IMUs, and Ultrasonic sensors.
*   **Control Theory**: PID controllers and State-space modeling.

**Stage 3: Programming for Robots (Weeks 17-24)**
*   **ROS (Robot Operating System)**: Nodes, Topics, and NavStack.
*   **Python/C++ for Control**: Implementing logic on an Arduino/Raspberry Pi.

**Stage 4: Intelligence (Weeks 25-32)**
*   **Path Planning**: A* Search and SLAM (Simultaneous Localization and Mapping).
*   **Computer Vision**: Using OpenCV for object tracking.

**💡 Elite Tip:** Start with a simple mobile robot that can avoid obstacles and build toward a 3-DOF arm.`,
    skills: ['CAD', 'ROS', 'Control Systems', 'C++', 'Kinematics'],
    estimatedTime: '10-12 Months'
  }
];

const seedDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pico_elite');
    console.log(`Connected to ${conn.connection.host}`);
    
    await CareerPath.deleteMany({});
    console.log('Cleared existing career paths.');
    
    await CareerPath.insertMany(careerPaths);
    console.log('Seeded career paths successfully!');
    
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
