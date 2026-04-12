import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Helmet } from 'react-helmet-async';
import api from '../api';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);

  const { login, register, setUser, loginAsGuest, loginSuccess } = useContext(AuthContext);
  const navigate = useNavigate();

  // Cyber Terminal Background Logs
  useEffect(() => {
    const startupLogs = [
      "> INITIALIZING PICO MATRIX SERVER...",
      "> SECURING PORT 5000...",
      "> ENCRYPTING DATA LINK...",
      "> WAITING FOR AGENT AUTHENTICATION...",
      "> SYSTEM READY."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < startupLogs.length) {
        setLogs(prev => [...prev, startupLogs[i]].slice(-5));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleGoogleSuccess = async (response) => {
    setLoading(true);
    try {
      const res = await api.post('/api/auth/google', { credential: response.credential });
      
      loginSuccess(res.data);
      navigate('/home');
    } catch (err) {
      const detail = err.response?.data?.details || err.response?.data?.error || 'Network Error or Access Denied';
      setErrorMsg(`Google Auth Rejected: ${detail}`);
      console.error(err);
    }
    setLoading(false);
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    try {
      await loginAsGuest();
      navigate('/home');
    } catch (err) {
      setErrorMsg('Guest initialization rejected.');
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name || 'Agent', email, password);
      }
      navigate('/home');
    } catch (err) {
      const detailedError = err.response?.data?.error || 'Authentication sequence failed.';
      setErrorMsg(detailedError);
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <Helmet>
        <title>Login & Signup | Pico Elite Academy</title>
        <meta name="description" content="Log in to your Pico Elite Academy matrix. Access world-class DSA, Web Dev, and App Dev training modules." />
      </Helmet>
      {/* Terminal Background */}
      <div className="terminal-background">
        {logs.map((log, idx) => (
          <div key={idx} className="terminal-line">{log}</div>
        ))}
      </div>

      <div className="auth-card scale-in">
        <div className="mascot-container floating">
          <img src="/pico-bird.png" alt="Pico Mascot" className="auth-mascot" />
          <div className="mascot-shadow"></div>
        </div>

        <div className="auth-content">
          <header className="auth-header">
            <h1 className="auth-title">
              {isLogin ? 'SYSTEM LOGIN' : 'CREATE AGENT'}
            </h1>
            <p className="auth-subtitle">
              {isLogin ? 'Enter your secure access credentials.' : 'Initialize your elite training profile.'}
            </p>
          </header>

          {errorMsg && (
            <div className="auth-error animate-shake">{errorMsg}</div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-group">
                <input
                  type="text"
                  placeholder="AGENT ALIAS"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="input-group">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="ACCESS CODE"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className="auth-submit-btn" type="submit" disabled={loading}>
              {loading ? 'SYNCING...' : isLogin ? 'AUTHENTICATE' : 'INITIALIZE'}
            </button>
          </form>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="auth-actions">
            <div className="google-login-box">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => setErrorMsg('Google Link Failed')}
                theme="filled_black"
                shape="pill"
                size="large"
                width="100%"
              />
            </div>
            
            <button className="auth-guest-link" onClick={handleGuestLogin}>
              CONTINUE AS GUEST
            </button>
          </div>

          <footer className="auth-footer">
            <button className="mode-toggle" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "NEW AGENT? CREATE ACCOUNT" : "EXISTING AGENT? LOG IN"}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Auth;
