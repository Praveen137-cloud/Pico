import React, { useState, useEffect } from 'react';
import api from '../api';
import ReactMarkdown from 'react-markdown';
import './CareerGuidance.css';

const CareerGuidance = () => {
  const [options, setOptions] = useState({ branches: [], interestsByBranch: {} });
  const [formData, setFormData] = useState({
    branch: '',
    interest: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 1. Fetch available options from DB
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const res = await api.get('/api/career/options');
        setOptions(res.data);
      } catch (err) {
        console.error("Error fetching career options:", err);
      }
    };
    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'branch') {
      setFormData({ branch: value, interest: '' }); // Reset interest when branch changes
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.branch || !formData.interest) return;
    
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await api.post('/api/career/guidance', formData);
      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'The Career Matrix encountered an error. Please contact an Admin.');
    } finally {
      setLoading(false);
    }
  };

  const availableInterests = options.interestsByBranch[formData.branch] || [];

  return (
    <div className="career-guidance-page">
      <div className="career-container">
        <header className="career-header">
          <h1 className="career-title">ENGINEERING CAREER MATRIX</h1>
          <p className="career-subtitle">Architect your future with Elite Curated Roadmaps</p>
        </header>

        <section className="career-content">
          {!result ? (
            <div className="career-form-card extreme-card">
              <div className="card-glitch-overlay"></div>
              <form onSubmit={handleSubmit} className="career-form">
                <div className="form-group">
                  <label>ENGINEERING BRANCH</label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="career-select"
                  >
                    <option value="">-- SELECT BRANCH --</option>
                    {options.branches.map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label>CORE INTEREST</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    disabled={!formData.branch}
                    className="career-select"
                  >
                    <option value="">-- SELECT FOCUS --</option>
                    {availableInterests.map(i => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="career-submit-btn" disabled={loading || !formData.interest}>
                  {loading ? 'RETRIEVING ROADMAP...' : 'GENERATE ELITE ROADMAP'}
                </button>
              </form>
            </div>
          ) : (
            <div className="career-result-card extreme-card animate-fade-in">
              <div className="result-header">
                <div>
                  <h3 className="result-title">{result.title}</h3>
                  {result.estimatedTime && <span className="time-badge">⏳ {result.estimatedTime}</span>}
                </div>
                <button onClick={() => setResult(null)} className="reset-btn">NEW SELECTION</button>
              </div>
              
              <div className="skills-row">
                {result.skills?.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>

              <div className="markdown-content">
                <ReactMarkdown>{result.advice}</ReactMarkdown>
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
