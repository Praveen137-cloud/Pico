import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Helmet } from 'react-helmet-async';
import api from '../api';
import './Auth.css';
import { getIsEngineReady, subscribeToEngineStatus } from '../utils/wakeUp';

const Auth = () => {
  const [mode, setMode] = useState('LOGIN'); // LOGIN, REGISTER, VERIFY, FORGOT, RESET
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);
  const [engineReady, setEngineReady] = useState(getIsEngineReady());

  const { 
    login, register, loginAsGuest, loginSuccess, 
    verifyEmail, forgotPassword, resetPassword 
  } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = subscribeToEngineStatus(setEngineReady);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const startupLogs = [
      "> INITIALIZING PICO MATRIX SERVER...",
      "> SECURING PORT 5000...",
      "> ENCRYPTING DATA LINK...",
      "> DETECTING ENGINE STATUS...",
      engineReady ? "> ENGINE ONLINE." : "> ENGINE SLEEPING. WAKING UP...",
      "> SYSTEM READY."
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < startupLogs.length) {
        setLogs(prev => [...prev, startupLogs[i]].slice(-5));
        i++;
      } else clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [engineReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');
    try {
      if (mode === 'LOGIN') {
        await login(email, password);
        navigate('/home');
      } else if (mode === 'REGISTER') {
        await register(name || 'Agent', email, password);
        setMode('VERIFY');
        setSuccessMsg('Verification code sent to email.');
      } else if (mode === 'VERIFY') {
        await verifyEmail(email, otp);
        navigate('/home');
      } else if (mode === 'FORGOT') {
        await forgotPassword(email);
        setMode('RESET');
        setSuccessMsg('Recovery code sent to email.');
      } else if (mode === 'RESET') {
        await resetPassword(email, otp, password);
        setMode('LOGIN');
        setSuccessMsg('Password reset successful. Please login.');
      }
    } catch (err) {
      if (err.response?.status === 403 && err.response?.data?.pendingVerification) {
        setMode('VERIFY');
        setErrorMsg(err.response?.data?.error);
      } else {
        setErrorMsg(err.response?.data?.error || 'System override failed.');
      }
    }
    setLoading(false);
  };

  const handleGoogleSuccess = async (response) => {
    setLoading(true);
    try {
      const res = await api.post('/api/auth/google', { credential: response.credential });
      loginSuccess(res.data);
      navigate('/home');
    } catch (err) {
      setErrorMsg('Google Link Failed.');
    }
    setLoading(false);
  };

  const renderForm = () => {
    if (mode === 'VERIFY' || mode === 'RESET' && otp.length < 1) { // Logic for OTP first
      // Shared OTP input for both flows
    }

    return (
      <form className="auth-form" onSubmit={handleSubmit}>
        {mode === 'REGISTER' && (
          <div className="input-group">
            <input type="text" placeholder="AGENT ALIAS" value={name} onChange={e => setName(e.target.value)} required />
          </div>
        )}

        {(mode === 'LOGIN' || mode === 'REGISTER' || mode === 'FORGOT') && (
          <div className="input-group">
            <input type="email" placeholder="EMAIL ADDRESS" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
        )}

        {(mode === 'VERIFY' || mode === 'RESET') && (
          <div className="input-group">
            <input type="text" placeholder="6-DIGIT CODE" value={otp} onChange={e => setOtp(e.target.value)} maxLength={6} required />
          </div>
        )}

        {(mode === 'LOGIN' || mode === 'REGISTER' || mode === 'RESET') && (
          <div className="input-group">
            <input type="password" placeholder={mode === 'RESET' ? "NEW ACCESS CODE" : "ACCESS CODE"} value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
        )}

        <button className="auth-submit-btn" type="submit" disabled={loading || !engineReady}>
          {loading ? 'SYNCING...' : !engineReady ? 'WAKING...' : 
           mode === 'LOGIN' ? 'AUTHENTICATE' : 
           mode === 'REGISTER' ? 'INITIALIZE' : 
           mode === 'VERIFY' ? 'VERIFY CODE' : 
           mode === 'FORGOT' ? 'REQUEST CODE' : 'RESET PASSWORD'}
        </button>
      </form>
    );
  };

  return (
    <div className="auth-page">
      <Helmet>
        <title>Identity Matrix | Pico Academy</title>
      </Helmet>
      
      <div className="terminal-background">
        {logs.map((log, idx) => <div key={idx} className="terminal-line">{log}</div>)}
      </div>

      <div className="auth-card scale-in">
        <div className="mascot-container floating">
          <img src="/pico-bird.png" alt="Pico" className="auth-mascot" />
          <div className="mascot-shadow"></div>
        </div>

        <div className="auth-content">
          <header className="auth-header">
            <h1 className="auth-title">
              {mode === 'LOGIN' ? 'SYSTEM LOGIN' : 
               mode === 'REGISTER' ? 'CREATE AGENT' : 
               mode === 'VERIFY' ? 'EMAIL VERIFICATION' : 
               mode === 'FORGOT' ? 'RECOVERY REQUEST' : 'RESET ACCESS'}
            </h1>
            <p className="auth-subtitle">
              {mode === 'LOGIN' ? 'Enter secure credentials.' : 
               mode === 'REGISTER' ? 'Initialize your elite profile.' :
               mode === 'VERIFY' ? `Check code sent to ${email}` : 
               mode === 'FORGOT' ? 'Enter email to receive recovery code.' : 'Set your new access code.'}
            </p>
          </header>

          {errorMsg && <div className="auth-error animate-shake">{errorMsg}</div>}
          {successMsg && <div className="auth-success pulse">{successMsg}</div>}

          {renderForm()}

          {mode === 'LOGIN' && (
            <>
              <div className="auth-divider"><span>OR</span></div>
              <div className="auth-actions">
                <div className="google-login-box">
                  <GoogleLogin onSuccess={handleGoogleSuccess} theme="filled_black" shape="pill" size="large" width="100%" />
                </div>
                <button className="auth-guest-link" onClick={async () => { setLoading(true); try { await loginAsGuest(); navigate('/home'); } catch(e){ setErrorMsg('Guest error'); } setLoading(false); }} disabled={loading || !engineReady}>
                  CONTINUE AS GUEST
                </button>
              </div>
            </>
          )}

          <footer className="auth-footer">
            {mode === 'LOGIN' ? (
              <>
                <button className="mode-toggle" onClick={() => { setMode('REGISTER'); setErrorMsg(''); setSuccessMsg(''); }}>NEW AGENT? CREATE ACCOUNT</button>
                <button className="mode-toggle secondary" onClick={() => { setMode('FORGOT'); setErrorMsg(''); setSuccessMsg(''); }}>FORGOT ACCESS CODE?</button>
              </>
            ) : (
              <button className="mode-toggle" onClick={() => { setMode('LOGIN'); setErrorMsg(''); setSuccessMsg(''); }}>BACK TO LOGIN</button>
            )}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Auth;
