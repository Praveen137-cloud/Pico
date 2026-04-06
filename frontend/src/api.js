import axios from 'axios';

// Create a dedicated axios instance that ALWAYS attaches the latest token from localStorage
// Smart URL Detection: Automatically points to production Render or Localhost
export const baseURL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5000' 
  : 'https://pico-3haq.onrender.com';

const api = axios.create({
  baseURL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

export default api;
