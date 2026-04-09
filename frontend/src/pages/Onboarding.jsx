import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import TypingEffect from '../components/TypingEffect';
import { Layout, Rocket, Brain, Code, Target, Trophy, Disc, Layers, BookOpen, Terminal, Database, Cpu, Link, Zap, RefreshCw, BarChart3, MousePointer2, Gem } from 'lucide-react';
import './Onboarding.css';

const Onboarding = () => {
  const { user, subjects, setUser } = useContext(AuthContext);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
     // If user already has a preference, skip onboarding
     if (user && user.lastVisitedSubject && user.lastVisitedSubject !== 'Arrays') {
        // navigate('/'); // Uncomment if we want strict skip, but user might want to re-select
     }
  }, [user, navigate]);

  const getSubjectIcon = (name) => {
    const icons = {
      'Arrays': <Layers />,
      'Strings': <Code />,
      'Two Pointers': <MousePointer2 />,
      'Hash Maps': <Database />,
      'Recursion': <RefreshCw />,
      'Sorting': <BarChart3 />,
      'Math': <Cpu />,
      'Stacks & Queues': <Layers />,
      'Linked Lists': <Link />,
      'Dynamic Programming': <Zap />,
      'Basics': <Terminal />,
      'Zoho Elite': <Gem />
    };
    return icons[name] || <Terminal />;
  };

  const handleSelect = async (subjectName) => {
    setSelectedSubject(subjectName);
    try {
      const res = await api.put('/api/auth/last-subject', {
        userId: user._id,
        subjectName: subjectName
      });
      
      if (res.data.success) {
         // Update local auth state
         setUser({ ...user, lastVisitedSubject: subjectName, onboardingCompleted: true });
         // Give a small delay for the "vibe" before navigating
         setTimeout(() => navigate('/'), 800);
      }
    } catch (err) {
      console.error('Onboarding preference update failed', err);
      navigate('/'); // Backup
    }
  };

  if (!subjects || subjects.length === 0) {
     return (
       <div className="onboarding-page">
         <div className="onboarding-content">
            <h2 style={{color: 'var(--theme-primary)', fontWeight: 900}}>SCANNING ELITE CURRICULUM...</h2>
         </div>
       </div>
     );
  }

  return (
    <div className="onboarding-page">
      <div className="onboarding-content">
         <div className="onboarding-mascot">
            <img src="/funny-parrot.png" alt="Pico Mascot" className="mascot-animation" />
         </div>
         
         <h1 className="onboarding-title">
            <TypingEffect 
              text="Your preferred subject:" 
              speed={50} 
              onComplete={() => setShowOptions(true)} 
            />
         </h1>

         <div className={`onboarding-grid ${showOptions ? 'show' : ''}`}>
            {subjects.map(subj => (
               <div 
                 key={subj._id} 
                 className={`onboarding-card ${selectedSubject === subj.name ? 'selected' : ''}`}
                 onClick={() => handleSelect(subj.name)}
               >
                  <div className="card-icon">{getSubjectIcon(subj.name)}</div>
                  <span className="card-label">{subj.name}</span>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Onboarding;
