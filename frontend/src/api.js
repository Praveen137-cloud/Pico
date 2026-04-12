import axios from 'axios';

// Create a dedicated axios instance that ALWAYS attaches the latest token from localStorage
// Smart URL Detection: Automatically points to production Render or Localhost
const PICO_PRIMARY_BACKEND = 'https://pico-3haq.onrender.com';

export const baseURL = import.meta.env.VITE_API_URL || 
  (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000' 
    : PICO_PRIMARY_BACKEND);

console.log(`[Pico API] Base URL: ${baseURL}`);

const api = axios.create({
  baseURL,
  timeout: 10000 // 10s timeout to prevent infinite loading
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  
  // 🛡️ DO NOT send token to auth routes to prevent stale session interference
  const isAuthRoute = config.url.startsWith('/api/auth/') && 
                     !config.url.includes('/api/auth/last-subject'); // last-subject might need it if it's private, but others are public

  if (token && !isAuthRoute) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

// Global response interceptor to handle 401s
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn('[Pico API] Unauthorized access (401). Clearing session.');
      sessionStorage.removeItem('token');
      // If we are not on the auth page, we might want to reload to trigger state reset
      if (window.location.pathname !== '/auth') {
        window.location.href = '/auth';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
