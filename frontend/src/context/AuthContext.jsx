import React, { createContext, useState, useEffect, useRef } from 'react';
import api from '../api';

export const AuthContext = createContext();

// ✅ Use localStorage so the login session persists across browser restarts
//    and works correctly on all devices (not just the developer's browser).
const STORAGE_KEY = 'pico_auth_token';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY));
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);
  // Track in-flight fetch to allow cancellation
  const abortRef = useRef(null);

  useEffect(() => {
    // Cancel any previous in-flight request
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const fetchUserData = async () => {
      if (!token) {
        setUser(null);
        setSubjects([]);
        setLoading(false);
        return;
      }

      try {
        console.log('[Auth] Syncing session from stored token...');
        const [userRes, subRes] = await Promise.all([
          api.get('/api/user', { signal: controller.signal }),
          api.get('/api/curriculum/subjects', { signal: controller.signal })
        ]);
        if (!controller.signal.aborted) {
          setUser(userRes.data);
          setSubjects(subRes.data);
        }
      } catch (err) {
        if (err.name === 'CanceledError' || err.name === 'AbortError') return; // Normal cleanup
        console.error('[Auth Error] Session sync failed:', err);
        // 401 handled by interceptor → clears token & redirects
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchUserData();
    return () => controller.abort();
  }, [token]);

  const loginSuccess = (data) => {
    // ✅ localStorage persists across sessions — the fix for cross-device login
    localStorage.setItem(STORAGE_KEY, data.token);
    setToken(data.token);
    setUser(data.user);
  };

  const login = async (email, password) => {
    const res = await api.post('/api/auth/login', { email, password });
    loginSuccess(res.data);
  };

  const register = async (name, email, password) => {
    const res = await api.post('/api/auth/register', { name, email, password });
    loginSuccess(res.data);
  };

  const loginAsGuest = async () => {
    const res = await api.post('/api/auth/guest');
    loginSuccess(res.data);
  };

  const verifyEmail = async (email, code) => {
    const res = await api.post('/api/auth/verify-email', { email, code });
    loginSuccess(res.data); // Log in immediately after verification
  };

  const forgotPassword = async (email) => {
    await api.post('/api/auth/forgot-password', { email });
  };

  const resetPassword = async (email, code, newPassword) => {
    await api.post('/api/auth/reset-password', { email, code, newPassword });
  };

  const refreshUser = async () => {
    try {
      const [userRes, subRes] = await Promise.all([
        api.get('/api/user'),
        api.get('/api/curriculum/subjects')
      ]);
      setUser(userRes.data);
      setSubjects(subRes.data);
      return userRes.data;
    } catch (err) {
      console.error('[Auth] Refresh failed:', err);
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
    setUser(null);
    setSubjects([]);
  };

  return (
    <AuthContext.Provider value={{ 
      user, token, loading, login, register, loginAsGuest, logout, 
      verifyEmail, forgotPassword, resetPassword,
      setUser, loginSuccess, subjects, setSubjects, refreshUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
