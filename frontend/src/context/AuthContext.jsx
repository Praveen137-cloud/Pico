import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(sessionStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (token) {
          const res = await api.get('/api/user');
          setUser(res.data);
          
          // Also fetch subjects globally if we are logged in
          const subRes = await api.get('/api/curriculum/subjects');
          setSubjects(subRes.data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error('Invalid token or failed to fetch user:', err);
        logout(); 
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
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
