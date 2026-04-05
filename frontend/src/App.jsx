import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Code from './pages/Code';
import League from './pages/League';
import Feed from './pages/Feed';
import Basics from './pages/Basics';
import Profile from './pages/Profile';
import Map from './pages/Map';
import Lesson from './pages/Lesson';
import Celebration from './pages/Celebration';
import Puzzles from './pages/Puzzles';
import { AuthProvider, AuthContext } from './context/AuthContext';

export const AudioContext = React.createContext();

// Component to hide navigation dock on auth page
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="main-content">
        {children}
      </div>
      <Navigation />
    </>
  );
};

function App() {
  const [bgmMuted, setBgmMuted] = useState(false);
  const [interacted, setInteracted] = useState(false);
  
  const bgmRef = React.useRef(new Audio('https://cdn.pixabay.com/download/audio/2021/08/09/audio_82136e053a.mp3')); 
  const sfxRef = React.useRef(new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b7f7ebb7.mp3')); 
  const successRef = React.useRef(new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3'));
  const errorRef = React.useRef(new Audio('https://assets.mixkit.co/active_storage/sfx/1110/1110-preview.mp3'));
  const fanfareRef = React.useRef(new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3'));
  
  useEffect(() => {
    bgmRef.current.loop = true;
    bgmRef.current.volume = 0.3;
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

  return (
    <AudioContext.Provider value={{ playClick, playSuccess, playError, playFanfare, bgmMuted, setBgmMuted }}>
      <AuthProvider>
        <div className="app-container" onClick={handleGlobalClick}>
          <Router>
            <Routes>
              {/* No more separate /auth route unless specifically requested for future use */}
              {/* All routes are now in standard layout */}
              <Route path="/*" element={
                <MainLayout>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/code" element={<Code />} />
                    <Route path="/league" element={<League />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/basics" element={<Basics />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/puzzles" element={<Puzzles />} />
                    <Route path="/map/:subjectId/:sectionId" element={<Map />} />
                    <Route path="/lesson/:subjectId/:sectionId/:unitId" element={<Lesson />} />
                    <Route path="/celebration" element={<Celebration />} />
                    {/* Fallback for old auth links */}
                    <Route path="/auth" element={<Navigate to="/" replace />} />
                  </Routes>
                </MainLayout>
              } />
            </Routes>
          </Router>
        </div>
      </AuthProvider>
    </AudioContext.Provider>
  );
}

export default App;
