import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        setUser(null);
        setSubjects([]);
        setLoading(false);
        return;
      }

      // Determine what we actually need to fetch
      const needsUser = !user;
      const needsSubjects = subjects.length === 0;

      if (!needsUser && !needsSubjects) {
        setLoading(false);
        return;
      }

      try {
        console.log(`[Auth] Syncing session... (Needs User: ${needsUser}, Needs Subjects: ${needsSubjects})`);
        
        const [userRes, subRes] = await Promise.all([
          needsUser ? api.get('/api/user') : Promise.resolve({ data: user }),
          needsSubjects ? api.get('/api/curriculum/subjects') : Promise.resolve({ data: subjects })
        ]);
        
        if (needsUser) setUser(userRes.data);
        if (needsSubjects) setSubjects(subRes.data);
      } catch (err) {
        console.error('[Auth Error] Session sync failed:', err);
        // Interceptor handles 401. For others, we just stop loading.
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token]);

  const loginSuccess = (data) => {
    sessionStorage.setItem('token', data.token);
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

  const logout = () => {
    sessionStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, loginAsGuest, logout, setUser, loginSuccess, subjects, setSubjects }}>
      {children}
    </AuthContext.Provider>
  );
};
