import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Landing.css';
import LivingCharacter from '../components/LivingCharacter';

const FEATURES = [
  {
    icon: '🧠',
    title: 'AI-Powered Tutor',
    desc: 'Ask PicoBot anything. Get instant explanations, hints, and code reviews powered by Gemini AI.'
  },
  {
    icon: '🗺️',
    title: 'Structured Learning Map',
    desc: 'Navigate through 40,000+ hand-crafted lessons arranged in a cinematic skill tree.'
  },
  {
    icon: '⚔️',
    title: 'Code Forge',
    desc: 'Write, run, and test code in 10+ languages directly in the browser. No setup needed.'
  },
  {
    icon: '🏆',
    title: 'Global Arena',
    desc: 'Compete on the leaderboard, earn XP, and rise through the ranks of elite engineers.'
  },
  {
    icon: '🎯',
    title: 'Daily Missions',
    desc: 'Stay sharp with daily coding challenges and streak-based XP rewards.'
  },
  {
    icon: '🧩',
    title: 'Interview Prep',
    desc: 'Practice previous year questions from FAANG, Zoho, TCS and other top companies.'
  },
  {
    icon: '🎖️',
    title: 'Certificates',
    desc: 'Earn verified certificates as you complete subjects. Share on LinkedIn and GitHub.'
  },
  {
    icon: '🚀',
    title: 'Career Matrix',
    desc: 'Explore curated roadmaps for Software Engineer, Data Scientist, ML Engineer, and more.'
  }
];

const SUBJECTS = [
  { icon: '🍫', name: 'Arrays' },
  { icon: '🔡', name: 'Strings' },
  { icon: '🍭', name: 'Linked Lists' },
  { icon: '🥨', name: 'Trees' },
  { icon: '🍦', name: 'Graphs' },
  { icon: '🏗️', name: 'Dynamic Programming' },
  { icon: '🎨', name: 'Algorithm Design' },
  { icon: '💎', name: 'Advanced DS' },
  { icon: '🗄️', name: 'Hashing' },
  { icon: '🌀', name: 'Recursion' },
];

const STATS = [
  { value: '40,000+', label: 'Lessons' },
  { value: '15+', label: 'Subjects' },
  { value: '10+', label: 'Languages' },
  { value: '100%', label: 'Free to Start' },
];

const Landing = () => {
  const canvasRef = useRef(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,200,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="landing-root">
      <Helmet>
        <title>Pico Elite Academy — Master DSA & Crack Any Interview</title>
        <meta name="description" content="Pico Elite Academy is a free, AI-powered technical training platform. Master Data Structures, Algorithms, Web Dev, and more with 40,000+ interactive lessons." />
        <meta property="og:title" content="Pico Elite Academy — Master DSA & Crack Any Interview" />
        <meta property="og:description" content="Free AI-powered platform to master DSA, Algorithms, and Web Development. Start your elite journey today." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Pico Elite Academy",
          "url": "https://pico-sooty.vercel.app",
          "description": "Elite AI-powered DSA and technical interview training platform with 40,000+ interactive lessons.",
          "educationalCredentialAwarded": "Certificate of Completion",
          "teaches": ["Data Structures", "Algorithms", "Web Development", "Dynamic Programming", "System Design"]
        })}</script>
      </Helmet>

      {/* Particle Background */}
      <canvas ref={canvasRef} className="landing-canvas" />

      {/* NAV */}
      <nav className="landing-nav glass-panel">
        <div className="landing-nav-logo">
          <LivingCharacter character="electric" size={40} state="happy" />
          <span className="landing-nav-title">PICO ELITE ACADEMY</span>
        </div>
        <div className="landing-nav-links">
          <a href="#features" className="landing-nav-link">Features</a>
          <a href="#subjects" className="landing-nav-link">Subjects</a>
          <a href="#stats" className="landing-nav-link">Stats</a>
          <Link to="/auth" className="landing-nav-cta" id="landing-nav-login-btn">Login</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="landing-hero cyber-mesh-bg">
        <div className="hero-character-left">
           <LivingCharacter character="pico" size={220} state="levitating" />
        </div>
        <div className="hero-character-right">
           <LivingCharacter character="ace" size={280} state="happy" />
        </div>
        
        <div className="landing-hero-badge">🔥 THE ELITE TRAINING MATRIX — VERSION 3.0</div>
        <h1 className="landing-hero-heading">
          Master DSA.<br />
          <span className="landing-hero-gradient">Enter the Matrix.</span>
        </h1>
        <p className="landing-hero-sub">
          A cinematic, AI-powered codebase with 40,000+ interactive modules. 
          The ultimate research phase for elite engineers starts here.
        </p>
        <div className="landing-hero-actions">
          <Link to="/auth" className="landing-cta-primary" id="landing-start-btn">
            🚀 Access the Core — Free
          </Link>
          <a href="#features" className="landing-cta-secondary" id="landing-features-btn" style={{ backdropFilter: 'blur(10px)' }}>
            System Reveal →
          </a>
        </div>

        {/* STATS ROW */}
        <div className="landing-stats-row" id="stats">
          {STATS.map((s, i) => (
            <div key={i} className="landing-stat-pill">
              <span className="landing-stat-val">{s.value}</span>
              <span className="landing-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SUBJECTS TICKER */}
      <section className="landing-ticker-section" id="subjects" aria-label="Subjects covered">
        <p className="landing-section-label">SUBJECTS COVERED</p>
        <div className="landing-ticker-wrap">
          <div className="landing-ticker">
            {[...SUBJECTS, ...SUBJECTS].map((s, i) => (
              <div key={i} className="landing-ticker-item">
                <span>{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="landing-features-section" id="features" aria-label="Platform Features">
        <h2 className="landing-section-heading">Everything You Need to Go Elite</h2>
        <p className="landing-section-sub">One platform. Every tool. Zero excuses.</p>
        <div className="landing-features-grid">
          {FEATURES.map((f, i) => (
            <article key={i} className="landing-feature-card" aria-label={f.title}>
              <div className="landing-feature-icon">{f.icon}</div>
              <h3 className="landing-feature-title">{f.title}</h3>
              <p className="landing-feature-desc">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="landing-cta-section" aria-label="Call to Action">
        <div className="landing-cta-glow" />
        <h2 className="landing-cta-heading">Ready to Enter the Matrix?</h2>
        <p className="landing-cta-sub">Join thousands of engineers who train elite with Pico.</p>
        <Link to="/auth" className="landing-cta-primary large" id="landing-bottom-cta-btn">
          ⚡ Create Free Account
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="landing-footer-logo">
          <img src="/electric-bird.png" alt="Pico" width={28} />
          <span>Pico Elite Academy</span>
        </div>
        <p className="landing-footer-copy">© {new Date().getFullYear()} Pico Elite Academy. Built with ⚡ for developers.</p>
        <div className="landing-footer-links">
          <Link to="/auth">Login</Link>
          <a href="/sitemap.xml">Sitemap</a>
          <a href="/robots.txt">Robots</a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
