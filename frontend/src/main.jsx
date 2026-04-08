import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';

const PICO_GOOGLE_ID = "885867681504-lasrb7t0pm5rlvin175e5rnj70jh3hmf.apps.googleusercontent.com";
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || PICO_GOOGLE_ID;

if (!import.meta.env.VITE_GOOGLE_CLIENT_ID) {
  console.warn('[Pico Auth] Using hardcoded production Client ID.');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
