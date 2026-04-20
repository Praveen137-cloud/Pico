import React, { useState, useEffect, useContext, Suspense, lazy, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import { AuthProvider, AuthContext } from './context/AuthContext';
import PicoBot from './components/PicoBot';
import GlobalHUD from './components/GlobalHUD';
import DigitalBackground from './components/DigitalBackground';
import PreLoader from './components/PreLoader';
import { wakeBackend } from './utils/wakeUp';

// Lazy load pages for performance
const Landing = lazy(() => import('./pages/Landing'));
const Home = lazy(() => import('./pages/Home'));
const Code = lazy(() => import('./pages/Code'));
const League = React.lazy(() => import('./pages/League'));
const Certificate = React.lazy(() => import('./pages/Certificate'));
const Feed = lazy(() => import('./pages/Feed'));
const Basics = lazy(() => import('./pages/Basics'));
const Profile = lazy(() => import('./pages/Profile'));
const Map = lazy(() => import('./pages/Map'));
const Lesson = lazy(() => import('./pages/Lesson'));
const Celebration = lazy(() => import('./pages/Celebration'));
const Auth = lazy(() => import('./pages/Auth'));
const Puzzles = lazy(() => import('./pages/Puzzles'));
const Missions = lazy(() => import('./pages/Missions'));
const Pyqs = lazy(() => import('./pages/Pyqs'));
const Admin = lazy(() => import('./pages/Admin'));
const CareerGuidance = lazy(() => import('./pages/CareerGuidance'));
const Social = lazy(() => import('./pages/Social'));
const Diagnostics = lazy(() => import('./pages/Diagnostics'));

export const Onboarding = lazy(() => import('./pages/Onboarding'));

export const AudioContext = React.createContext();

const ProtectedRoute = ({ children }) => {
  const { user, token, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <PreLoader onReady={() => {}} />;
  if (!token) return <Navigate to="/auth" replace />;

  // Force onboarding for first-time users
  const isNewUser = user && !user.onboardingCompleted && (user.lessonsCompleted || 0) === 0;
  
  if (isNewUser && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
};

// \u2705 Prevents logged-in users from landing on the login page again
const AuthRedirect = ({ children }) => {
  const { token, loading } = useContext(AuthContext);
  if (loading) return <PreLoader onReady={() => {}} />;
  if (token) return <Navigate to="/home" replace />;
  return children;
};

// Component to hide navigation dock on auth and onboarding pages
const MainLayout = ({ children }) => {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/lesson') || 
                  location.pathname === '/celebration' ||
                  location.pathname === '/onboarding' ||
                  location.pathname === '/auth' ||
                  location.pathname === '/';
  
  return (
    <>
      {!hideNav && <GlobalHUD />}
      <div className={`main-content ${hideNav ? 'no-nav' : ''}`} style={{ paddingTop: !hideNav ? '50px' : '0' }}>
        {children}
      </div>
      {!hideNav && <Navigation />}
    </>
  );
};

const GlobalPremiumWrapper = ({ children, onClick }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.isDyslexic) {
      document.body.classList.add('dyslexic-mode');
    } else {
      document.body.classList.remove('dyslexic-mode');
    }
  }, [user?.isDyslexic]);

  return (
    <div className={`app-container ${user?.isPremium ? 'premium-mode' : ''}`} onClick={onClick}>
      {children}
    </div>
  );
};

function App() {
  const [bgmMuted, setBgmMuted] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [engineReady, setEngineReady] = useState(false);
  const [hackMode, setHackMode] = useState(false);
  
  // KONAMI HACK MODE
  useEffect(() => {
    let sequence = '';
    const konami = 'hack';
    const listener = (e) => {
      sequence += e.key.toLowerCase();
      if (sequence.length > konami.length) {
        sequence = sequence.slice(1);
      }
      if (sequence === konami) {
        setHackMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', listener);

    // Glowing Cursor Trail Effect
    const cursorListener = (e) => {
      const drop = document.createElement('div');
      drop.className = 'cursor-trail';
      drop.style.left = `${e.clientX}px`;
      drop.style.top = `${e.clientY}px`;
      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 600);
    };
    window.addEventListener('mousemove', cursorListener);

    return () => {
      window.removeEventListener('keydown', listener);
      window.removeEventListener('mousemove', cursorListener);
    };
  }, []);

  useEffect(() => {
    if (hackMode) {
      document.body.classList.add('hack-mode');
    } else {
      document.body.classList.remove('hack-mode');
    }
  }, [hackMode]);

  const handleEngineReady = React.useCallback(() => {
    setEngineReady(true);
  }, []);

  useEffect(() => {
    // Start warming up the backend immediately
    wakeBackend().then(success => {
      if (success) handleEngineReady();
    });
  }, [handleEngineReady]);
  
  // 🎵 Background Lofi Music - plays automatically after first interaction
  const bgmRef = React.useRef(new Audio('https://cdn.pixabay.com/download/audio/2022/10/25/audio_946b9efe9e.mp3'));
  const sfxRef = React.useRef(new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_1a609c8b35.mp3')); /* Soft click */
  const successRef = React.useRef(new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_c6ccae6a30.mp3')); /* Success chime */
  const errorRef = React.useRef(new Audio('https://cdn.pixabay.com/download/audio/2022/01/28/audio_d9e0b65fa8.mp3')); /* Soft error */
  const fanfareRef = React.useRef(new Audio('https://cdn.pixabay.com/download/audio/2021/08/04/audio_c6ccae6a30.mp3')); /* Fanfare */

  
  useEffect(() => {
    bgmRef.current.loop = true;
    bgmRef.current.volume = 0.18; // Gentle ambient level

    const month = new Date().getMonth();
    let seasonClass = '';
    if (month >= 2 && month <= 4) seasonClass = 'season-spring';
    else if (month >= 5 && month <= 7) seasonClass = 'season-summer';
    else if (month >= 8 && month <= 10) seasonClass = 'season-autumn';
    else seasonClass = 'season-winter';
    document.documentElement.className = seasonClass;
  }, []);

  useEffect(() => {
    if (interacted && !bgmMuted) {
      bgmRef.current.play().catch(e => console.log('Autoplay blocked'));
    } else {
      bgmRef.current.pause();
    }
  }, [interacted, bgmMuted]);

  const playClick = () => {
    if (!bgmMuted) {
      sfxRef.current.currentTime = 0;
      sfxRef.current.play().catch(e => {});
    }
  };

  const playSuccess = () => {
    if (!bgmMuted) {
      successRef.current.currentTime = 0;
      successRef.current.play().catch(e => {});
    }
  };

  const playError = () => {
    if (!bgmMuted) {
      errorRef.current.currentTime = 0;
      errorRef.current.play().catch(e => {});
    }
  };

  const playFanfare = () => {
    if (!bgmMuted) {
      fanfareRef.current.currentTime = 0;
      fanfareRef.current.play().catch(e => {});
    }
  };

  const handleGlobalClick = () => {
    if (!interacted) setInteracted(true);
    playClick();
  };

  // 🔒 GLOBAL ENGINE GATE: If the backend is cold, block the app with PreLoader
  if (!engineReady) {
    return (
      <AuthProvider>
        <DigitalBackground />
        <div className="crt-overlay" />
        <PreLoader onReady={handleEngineReady} />
      </AuthProvider>
    );
  }

  return (
    <AudioContext.Provider value={{ playClick, playSuccess, playError, playFanfare, bgmMuted, setBgmMuted }}>
      <AuthProvider>
        <DigitalBackground />
        <div className="crt-overlay" />
        
        {/* Music plays silently in background - no visible DJ controller */}

        <GlobalPremiumWrapper onClick={handleGlobalClick}>
          <Router>
            <Suspense fallback={<PreLoader onReady={handleEngineReady} />}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<AuthRedirect><div className="main-content"><Auth /></div></AuthRedirect>} />
                <Route path="/diagnostics" element={<Diagnostics />} />

                {/* Protected Routes */}
                <Route path="/*" element={
                  <ProtectedRoute>
                    <MainLayout>
                      <Suspense fallback={<div style={{ color: 'white', padding: 20, textAlign: 'center' }}>Loading page...</div>}>
                        <Routes>
                          <Route path="/home" element={<Home />} />
                          <Route path="/code" element={<Code />} />
                          <Route path="/league" element={<League />} />
                          <Route path="/certificate" element={<Certificate />} />
                          <Route path="/feed" element={<Feed />} />
                          <Route path="/basics" element={<Basics />} />
                          <Route path="/profile" element={<Profile />} />
                          <Route path="/puzzles" element={<Puzzles />} />
                          <Route path="/missions" element={<Missions />} />
                          <Route path="/pyqs" element={<Pyqs />} />
                          <Route path="/onboarding" element={<Onboarding />} />
                          <Route path="/map/:subjectId/:sectionId" element={<Map />} />
                          <Route path="/lesson/:subjectId/:sectionId/:unitId" element={<Lesson />} />
                          <Route path="/celebration" element={<Celebration />} />
                          <Route path="/admin" element={<Admin />} />
                          <Route path="/career-guidance" element={<CareerGuidance />} />
                          <Route path="/social" element={<Social />} />
                        </Routes>
                      </Suspense>
                    </MainLayout>
                  </ProtectedRoute>
                } />
              </Routes>
            </Suspense>
            <PicoBot />
          </Router>
        </GlobalPremiumWrapper>
      </AuthProvider>
    </AudioContext.Provider>
  );
}

export default App;
