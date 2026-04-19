const mongoose = require('mongoose');
const CareerPath = require('./models/CareerPath');
require('dotenv').config();

const careerPaths = [
  // ── SOFTWARE ENGINEERING ──────────────────────────────────────────
  {
    branch: 'Software Engineering',
    interest: 'Frontend Architecture',
    title: 'Frontend Architect',
    description: 'Engineer pixel-perfect, performant UIs at scale.',
    roadmap: `### 🌐 Frontend Architecture Roadmap\n\n**Stage 1: Core Foundations (Weeks 1-4)**\n- HTML5 Semantic Web, CSS3, Flexbox/Grid\n- Modern JS: ES6+, Promises, Async/Await\n\n**Stage 2: React Mastery (Weeks 5-12)**\n- React Hooks, Context API, Code Splitting\n- TailwindCSS, Framer Motion, Storybook\n\n**Stage 3: Performance & Architecture (Weeks 13-18)**\n- Web Vitals, Lighthouse audits, Lazy Loading\n- Micro-frontends, Design Systems\n\n**Stage 4: Advanced Tooling (Weeks 19-24)**\n- Vite, Webpack, CI/CD pipelines\n- Testing: Vitest, Playwright\n\n**💡 Elite Tip:** Build a live portfolio with 3 deployed projects.`,
    skills: ['HTML', 'CSS', 'React', 'TypeScript', 'Performance'],
    estimatedTime: '6 Months'
  },
  {
    branch: 'Software Engineering',
    interest: 'Backend Distributed Systems',
    title: 'Distributed Systems Engineer',
    description: 'Design systems that scale to millions without breaking a sweat.',
    roadmap: `### ⚙️ Backend Distributed Systems Roadmap\n\n**Stage 1: Core Backend (Weeks 1-6)**\n- Node.js / Go / Java: Pick one and go deep\n- REST APIs, GraphQL, gRPC\n\n**Stage 2: Databases (Weeks 7-12)**\n- PostgreSQL, Redis, MongoDB\n- Database sharding, replication, indexing\n\n**Stage 3: Distributed Concepts (Weeks 13-20)**\n- CAP Theorem, Consistent Hashing\n- Message Queues: Kafka, RabbitMQ\n- Service Mesh, Load Balancers\n\n**Stage 4: Cloud & Deployment (Weeks 21-26)**\n- AWS/GCP core services, Docker & Kubernetes\n- Observability: Prometheus, Grafana\n\n**💡 Elite Tip:** Design and implement a URL shortener that handles 100k req/s.`,
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
    estimatedTime: '8 Months'
  },
  {
    branch: 'Software Engineering',
    interest: 'Full-Stack Web3',
    title: 'Web3 Full-Stack Developer',
    description: 'Build the decentralized future on blockchain infrastructure.',
    roadmap: `### ⛓️ Full-Stack Web3 Roadmap\n\n**Stage 1: Web2 Foundation (Weeks 1-6)**\n- Solid React + Node.js skills\n- TypeScript, REST APIs\n\n**Stage 2: Blockchain Basics (Weeks 7-12)**\n- Ethereum, Solidity, Smart Contracts\n- Hardhat, Truffle, Remix IDE\n\n**Stage 3: DApp Development (Weeks 13-18)**\n- ethers.js, Web3.js, Wagmi\n- Wallet integration: MetaMask, WalletConnect\n\n**Stage 4: Advanced Web3 (Weeks 19-24)**\n- DeFi Protocols, NFT standards (ERC-721/1155)\n- IPFS, TheGraph, Chainlink Oracles\n\n**💡 Elite Tip:** Deploy a token + NFT marketplace on Testnet.`,
    skills: ['Solidity', 'React', 'ethers.js', 'Hardhat', 'IPFS'],
    estimatedTime: '7 Months'
  },

  // ── DATA SCIENCE ──────────────────────────────────────────────────
  {
    branch: 'Data Science',
    interest: 'Machine Learning',
    title: 'ML Engineer',
    description: 'Build models that learn, predict, and adapt.',
    roadmap: `### 🧠 Machine Learning Roadmap\n\n**Stage 1: Math & Stats (Weeks 1-6)**\n- Linear Algebra, Calculus, Probability\n- Statistical thinking and hypothesis testing\n\n**Stage 2: Python for Data (Weeks 7-12)**\n- NumPy, Pandas, Matplotlib, Seaborn\n- Scikit-Learn: Regression, Trees, Clustering\n\n**Stage 3: Deep Learning (Weeks 13-20)**\n- Neural Networks, CNNs, RNNs\n- PyTorch or TensorFlow training pipelines\n\n**Stage 4: MLOps (Weeks 21-26)**\n- MLflow, FastAPI model serving\n- Docker + cloud deployment of models\n\n**💡 Elite Tip:** Win a Kaggle competition in your problem domain.`,
    skills: ['Python', 'PyTorch', 'Scikit-Learn', 'Statistics', 'MLflow'],
    estimatedTime: '8 Months'
  },
  {
    branch: 'Data Science',
    interest: 'Data Engineering',
    title: 'Data Engineer',
    description: 'Build the pipelines that power all data-driven decisions.',
    roadmap: `### 🏗️ Data Engineering Roadmap\n\n**Stage 1: SQL Mastery (Weeks 1-4)**\n- Advanced SQL: CTEs, Window Functions, Indexing\n- PostgreSQL + BigQuery\n\n**Stage 2: Python ETL (Weeks 5-10)**\n- Pandas, PySpark, Airflow DAGs\n- Data quality and validation\n\n**Stage 3: Data Warehousing (Weeks 11-16)**\n- Snowflake, Redshift, Delta Lake\n- dbt for data transformation\n\n**Stage 4: Streaming Data (Weeks 17-22)**\n- Apache Kafka, Flink\n- Real-time dashboards with Metabase\n\n**💡 Elite Tip:** Build a real-time Bitcoin price analytics pipeline.`,
    skills: ['SQL', 'PySpark', 'Airflow', 'Kafka', 'dbt'],
    estimatedTime: '7 Months'
  },
  {
    branch: 'Data Science',
    interest: 'Quantitative Analysis',
    title: 'Quantitative Analyst',
    description: 'Apply mathematical models to financial markets.',
    roadmap: `### 📊 Quantitative Analysis Roadmap\n\n**Stage 1: Finance Fundamentals (Weeks 1-4)**\n- Financial instruments, market microstructure\n- Options, derivatives pricing basics\n\n**Stage 2: Statistical Modeling (Weeks 5-12)**\n- Time series: ARIMA, GARCH\n- Python: NumPy, SciPy, statsmodels\n\n**Stage 3: Algo Trading (Weeks 13-18)**\n- Backtesting frameworks: Backtrader, Zipline\n- Risk management: Sharpe Ratio, Max Drawdown\n\n**Stage 4: ML for Finance (Weeks 19-24)**\n- LSTM for price prediction\n- Reinforcement Learning for portfolio optimization\n\n**💡 Elite Tip:** Paper trade your strategy for 3 months before going live.`,
    skills: ['Python', 'Statistics', 'Finance', 'ARIMA', 'Backtesting'],
    estimatedTime: '8 Months'
  },

  // ── ARTIFICIAL INTELLIGENCE ───────────────────────────────────────
  {
    branch: 'Artificial Intelligence',
    interest: 'LLM Training',
    title: 'LLM Research Engineer',
    description: 'Train, fine-tune, and deploy large language models.',
    roadmap: `### 🤖 LLM Training Roadmap\n\n**Stage 1: Deep Learning Foundations (Weeks 1-8)**\n- Transformers architecture: Attention, BERT, GPT\n- PyTorch from scratch — tensors to training loops\n\n**Stage 2: Fine-Tuning (Weeks 9-16)**\n- LoRA, QLoRA, PEFT methods\n- Hugging Face Transformers library\n- Instruction tuning and RLHF basics\n\n**Stage 3: Evaluation & Alignment (Weeks 17-22)**\n- MMLU, HumanEval benchmarks\n- Constitutional AI, safety red-teaming\n\n**Stage 4: Deployment (Weeks 23-28)**\n- vLLM, TGI, Ollama for inference serving\n- Quantization: GGUF, AWQ, GPTQ\n\n**💡 Elite Tip:** Fine-tune Llama-3 on a domain dataset and host it publicly.`,
    skills: ['PyTorch', 'Transformers', 'LoRA', 'Hugging Face', 'CUDA'],
    estimatedTime: '10 Months'
  },
  {
    branch: 'Artificial Intelligence',
    interest: 'Computer Vision',
    title: 'Computer Vision Engineer',
    description: 'Teach machines to see and understand the visual world.',
    roadmap: `### 👁️ Computer Vision Roadmap\n\n**Stage 1: Image Fundamentals (Weeks 1-6)**\n- OpenCV: image processing, filters, morphology\n- Feature detection: SIFT, ORB, Harris\n\n**Stage 2: Deep CV (Weeks 7-14)**\n- CNNs: VGG, ResNet, EfficientNet\n- Object detection: YOLO, Faster R-CNN\n\n**Stage 3: Advanced Vision (Weeks 15-22)**\n- Segmentation: U-Net, SAM\n- Vision Transformers (ViT, DINO)\n\n**Stage 4: Deployment (Weeks 23-28)**\n- ONNX, TensorRT, Edge deployment\n- Real-time inference optimization\n\n**💡 Elite Tip:** Build a real-time object detection system for a webcam.`,
    skills: ['Python', 'OpenCV', 'PyTorch', 'YOLO', 'TensorRT'],
    estimatedTime: '8 Months'
  },
  {
    branch: 'Artificial Intelligence',
    interest: 'Autonomous Agents',
    title: 'AI Agent Architect',
    description: 'Build autonomous AI systems that reason, plan, and act.',
    roadmap: `### 🕵️ Autonomous Agents Roadmap\n\n**Stage 1: Agent Foundations (Weeks 1-6)**\n- ReAct, Chain-of-Thought, Tool use patterns\n- LangChain, LlamaIndex, AutoGen\n\n**Stage 2: Memory & Planning (Weeks 7-12)**\n- Vector databases: Pinecone, Chroma, Weaviate\n- RAG pipelines and context management\n\n**Stage 3: Multi-Agent Systems (Weeks 13-18)**\n- CrewAI, AutoGen multi-agent orchestration\n- Agent communication protocols\n\n**Stage 4: Production Agents (Weeks 19-24)**\n- Evaluation frameworks for agents\n- Cost optimization and latency\n\n**💡 Elite Tip:** Build a fully autonomous research agent that writes reports.`,
    skills: ['LangChain', 'RAG', 'Vector DBs', 'AutoGen', 'Prompt Engineering'],
    estimatedTime: '7 Months'
  },

  // ── CYBERSECURITY ─────────────────────────────────────────────────
  {
    branch: 'Cybersecurity',
    interest: 'Penetration Testing',
    title: 'Ethical Hacker / Penetration Tester',
    description: 'Break systems legally to make them stronger.',
    roadmap: `### 🔐 Penetration Testing Roadmap\n\n**Stage 1: Networking Fundamentals (Weeks 1-6)**\n- TCP/IP, DNS, HTTP/HTTPS, OSI Model\n- Wireshark for packet analysis\n\n**Stage 2: Linux & Scripting (Weeks 7-10)**\n- Kali Linux mastery, Bash scripting\n- Python for exploit automation\n\n**Stage 3: Attack Techniques (Weeks 11-20)**\n- OWASP Top 10 vulnerabilities\n- SQLi, XSS, SSRF, IDOR exploitation\n- Metasploit Framework, Burp Suite Pro\n\n**Stage 4: Red Team Operations (Weeks 21-26)**\n- Active Directory attacks: Pass-the-Hash, Kerberoasting\n- C2 Frameworks: Cobalt Strike, Sliver\n\n**💡 Elite Tip:** Get your OSCP certification — it's the gold standard.`,
    skills: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Python', 'Networking'],
    estimatedTime: '8 Months'
  },
  {
    branch: 'Cybersecurity',
    interest: 'Security Architecture',
    title: 'Security Architect',
    description: 'Design enterprise-grade security systems from the ground up.',
    roadmap: `### 🏰 Security Architecture Roadmap\n\n**Stage 1: Security Fundamentals (Weeks 1-6)**\n- CIA Triad, Zero Trust Architecture\n- Risk assessment and security frameworks (NIST, ISO 27001)\n\n**Stage 2: Network Security (Weeks 7-12)**\n- Firewalls, IDS/IPS, VPNs, WAF\n- Cloud security: AWS Security Hub, IAM best practices\n\n**Stage 3: Identity & Access (Weeks 13-18)**\n- OAuth 2.0, SAML, OpenID Connect\n- PAM solutions, MFA implementation\n\n**Stage 4: Enterprise Security (Weeks 19-24)**\n- SIEM: Splunk, Microsoft Sentinel\n- Incident response playbooks\n\n**💡 Elite Tip:** Earn CISSP or CISM for senior-level roles.`,
    skills: ['Zero Trust', 'SIEM', 'Cloud Security', 'IAM', 'Risk Management'],
    estimatedTime: '9 Months'
  },
  {
    branch: 'Cybersecurity',
    interest: 'Cryptography',
    title: 'Cryptography Engineer',
    description: 'Protect data with the mathematics of secrets.',
    roadmap: `### 🔒 Cryptography Roadmap\n\n**Stage 1: Math Foundations (Weeks 1-6)**\n- Number theory: Modular arithmetic, Prime factorization\n- Group theory and elliptic curves basics\n\n**Stage 2: Symmetric Cryptography (Weeks 7-10)**\n- AES, DES, stream ciphers\n- Block cipher modes: CBC, GCM, CTR\n\n**Stage 3: Asymmetric Cryptography (Weeks 11-16)**\n- RSA, Diffie-Hellman, ECC\n- Digital signatures and certificates (PKI)\n\n**Stage 4: Modern Cryptography (Weeks 17-22)**\n- Zero-knowledge proofs\n- Post-quantum cryptography (CRYSTALS-Kyber)\n\n**💡 Elite Tip:** Implement RSA from scratch in Python.`,
    skills: ['Mathematics', 'Python', 'AES', 'RSA', 'Zero-Knowledge Proofs'],
    estimatedTime: '6 Months'
  },

  // ── PROMPT ENGINEERING ────────────────────────────────────────────
  {
    branch: 'Prompt Engineering',
    interest: 'Agentic Workflows',
    title: 'Agentic AI Engineer',
    description: 'Design automated AI workflows that replace entire teams.',
    roadmap: `### 🤖 Agentic Workflows Roadmap\n\n**Stage 1: Prompt Mastery (Weeks 1-4)**\n- Chain-of-Thought, Few-shot, Zero-shot prompting\n- Structured output: JSON mode, function calling\n\n**Stage 2: LangChain & Tools (Weeks 5-10)**\n- LCEL (LangChain Expression Language)\n- Tool integration: Web search, code execution, databases\n\n**Stage 3: Production Workflows (Weeks 11-16)**\n- LangGraph for stateful workflows\n- Error handling, retry logic, human-in-the-loop\n\n**Stage 4: Scale & Monitor (Weeks 17-22)**\n- LangSmith tracing and evaluation\n- Cost optimization strategies\n\n**💡 Elite Tip:** Build an agent that autonomously researches and writes a tech blog post.`,
    skills: ['Prompt Engineering', 'LangChain', 'LangGraph', 'Python', 'APIs'],
    estimatedTime: '5 Months'
  },
  {
    branch: 'Prompt Engineering',
    interest: 'Prompt Hacking',
    title: 'Prompt Security Researcher',
    description: 'Find and patch vulnerabilities in AI systems.',
    roadmap: `### 🛡️ Prompt Hacking Roadmap\n\n**Stage 1: LLM Fundamentals (Weeks 1-4)**\n- How LLMs work: tokenization, temperature, sampling\n- System prompts, context windows, RLHF alignment\n\n**Stage 2: Attack Techniques (Weeks 5-10)**\n- Prompt injection, jailbreaking, goal hijacking\n- Indirect prompt injection via tools\n\n**Stage 3: Defense Strategies (Weeks 11-16)**\n- Input/output filtering, guardrails\n- Constitutional AI and safety classifiers\n\n**Stage 4: Red Teaming (Weeks 17-20)**\n- Systematic red-teaming frameworks\n- Automated adversarial testing\n\n**💡 Elite Tip:** Participate in AI bug bounty programs like HackerOne AI category.`,
    skills: ['Prompt Engineering', 'LLMs', 'Security', 'Python', 'Red Teaming'],
    estimatedTime: '4 Months'
  },
  {
    branch: 'Prompt Engineering',
    interest: 'Generative Art',
    title: 'Generative AI Artist',
    description: 'Create stunning visuals and media using AI.',
    roadmap: `### 🎨 Generative Art Roadmap\n\n**Stage 1: Image Generation Basics (Weeks 1-4)**\n- Stable Diffusion, Midjourney, DALL-E 3\n- Prompt anatomy: subject, style, lighting, medium\n\n**Stage 2: Advanced Prompting (Weeks 5-8)**\n- Negative prompts, ControlNet, LoRA styles\n- Inpainting, outpainting, img2img workflows\n\n**Stage 3: Automation & APIs (Weeks 9-14)**\n- ComfyUI workflow automation\n- Replicate, FAL.ai API integration\n\n**Stage 4: Commercial Applications (Weeks 15-18)**\n- Building AI art products and SaaS\n- IP considerations and model licensing\n\n**💡 Elite Tip:** Build a custom fine-tuned model on your own art style using DreamBooth.`,
    skills: ['Stable Diffusion', 'ComfyUI', 'ControlNet', 'Python', 'APIs'],
    estimatedTime: '4 Months'
  }
];

const seedDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pico_elite');
    console.log(`Connected to ${conn.connection.host}`);
    
    await CareerPath.deleteMany({});
    console.log('Cleared existing career paths.');
    
    await CareerPath.insertMany(careerPaths);
    console.log(`✅ Seeded ${careerPaths.length} career paths successfully!`);
    
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seedDB();
