import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name || 'Gamer', email, password);
      }
      navigate('/');
    } catch (err) {
      console.error('Auth Error Details:', err);
      const detailedError = err.response?.data?.error || err.message || 'Authentication failed.';
      setErrorMsg(detailedError);
    }
    setLoading(false);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setErrorMsg('');
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">🦜</div>

        <h1 className="auth-title">
          {isLogin ? 'SYSTEM LOGIN' : 'CREATE ACCOUNT'}
        </h1>
        <p className="auth-subtitle">
          {isLogin ? 'Access your training matrix.' : 'Initialize your agent profile.'}
        </p>

        {errorMsg && (
          <div className="auth-error">{errorMsg}</div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              className="auth-input"
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            className="auth-input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="auth-submit-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : isLogin ? 'AUTHENTICATE' : 'INITIALIZE'}
          </button>
        </form>

        <div className="auth-switch">
          {isLogin ? "Don't have clearance?" : 'Already initialized?'}
          <span className="auth-switch-link" onClick={switchMode}>
            {isLogin ? ' Sign up' : ' Log in'}
          </span>
        </div>

        <div className="auth-divider">Or</div>

        <button className="auth-google-btn" type="button" disabled>
          <span style={{ fontSize: 18, fontWeight: 900 }}>G</span>
          Continue with Google (Coming Soon)
        </button>
      </div>
    </div>
  );
};

export default Auth;
