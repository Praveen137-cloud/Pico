import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import api from '../api';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, register, setUser, loginAsGuest } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSuccess = async (response) => {
    setLoading(true);
    try {
      const res = await api.post('/api/auth/google', { credential: response.credential });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      navigate('/');
    } catch (err) {
      setErrorMsg('Google login failed.');
      console.error(err);
    }
    setLoading(false);
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    try {
      await loginAsGuest();
      navigate('/');
    } catch (err) {
      setErrorMsg('Guest initialization failed.');
      console.error(err);
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
          <div className="auth-switch-prompt">
            {isLogin ? "Don't have an account? Create one to track your progress and climb the leaderboard!" : "Already part of the elite? Access your secure training terminal."}
          </div>
          <span className="auth-switch-link" onClick={switchMode}>
            {isLogin ? 'Sign up' : 'Log in'}
          </span>
        </div>

        <div className="auth-divider">Or</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() => setErrorMsg('Google login failed')}
            theme="filled_black"
            text="continue_with"
            shape="pill"
            size="large"
            width="100%"
          />
        </div>

        <button 
          className="auth-guest-btn" 
          onClick={handleGuestLogin}
          disabled={loading}
        >
          {loading ? 'INITIALIZING...' : 'CONTINUE AS GUEST'}
        </button>
      </div>
    </div>
  );
};

export default Auth;
