import React, { useState } from 'react';
import api from '../api';
import ReactMarkdown from 'react-markdown';
import './CareerGuidance.css';

const CareerGuidance = () => {
  const [formData, setFormData] = useState({
    branch: '',
    interests: '',
    goal: ''
  });
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult('');
    try {
      const res = await api.post('/api/ai/career-guidance', formData);
      setResult(res.data.advice);
    } catch (err) {
      setError('The Career Matrix encountered a synchronization error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-guidance-page">
      <div className="career-container">
        <header className="career-header">
          <h1 className="career-title">ENGINEERING CAREER MATRIX</h1>
          <p className="career-subtitle">Architect your future with Elite AI Guidance</p>
        </header>

        <section className="career-content">
          {!result ? (
            <div className="career-form-card extreme-card">
              <div className="card-glitch-overlay"></div>
              <form onSubmit={handleSubmit} className="career-form">
                <div className="form-group">
                  <label>ENGINEERING BRANCH</label>
                  <input
                    type="text"
                    name="branch"
                    placeholder="e.g. Computer Science, Mechanical, EEE..."
                    value={formData.branch}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CORE INTERESTS / SKILLS</label>
                  <textarea
                    name="interests"
                    placeholder="e.g. Web Dev, Robotics, Data Science, Problem Solving..."
                    value={formData.interests}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>LONG-TERM VISION / GOAL</label>
                  <input
                    type="text"
                    name="goal"
                    placeholder="e.g. SDE at FAANG, Entrepreneurship, Research..."
                    value={formData.goal}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="career-submit-btn" disabled={loading}>
                  {loading ? 'CALCULATING ROADMAP...' : 'GENERATE ELITE ROADMAP'}
                </button>
              </form>
            </div>
          ) : (
            <div className="career-result-card extreme-card animate-fade-in">
              <div className="result-header">
                <h3>YOUR GENERATED DESTINY</h3>
                <button onClick={() => setResult('')} className="reset-btn">NEW PROJECTION</button>
              </div>
              <div className="markdown-content">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            </div>
          )}
        </section>

        {error && <div className="career-error">{error}</div>}
      </div>
    </div>
  );
};

export default CareerGuidance;
