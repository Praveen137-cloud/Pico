import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import api from '../api';
import './SubjectNav.css';

const SubjectNav = ({ activeSubject, onSelect }) => {
  const { subjects, authUser, setAuthUser } = useContext(AuthContext);

  // Helper to get consistent icons/colors for subjects
  const getSubjectMeta = (name) => {
    const meta = {
      'Arrays': { icon: '🐘', color: '#6366F1' },
      'Linked Lists': { icon: '🦒', color: '#06B6D4' },
      'Stacks & Queues': { icon: '🦓', color: '#EF4444' },
      'Recursion': { icon: '🦁', color: '#F59E0B' },
      'Hashing': { icon: '🐆', color: '#10B981' },
      'Trees': { icon: '🦅', color: '#A855F7' },
      'Graphs': { icon: '🐺', color: '#3B82F6' },
      'Sorting': { icon: '🦌', color: '#FB923C' },
      'Dynamic Programming': { icon: '🐢', color: '#F43F5E' },
      'Backtracking': { icon: '🦉', color: '#8B5CF6' }
    };
    return meta[name] || { icon: '📚', color: '#94A3B8' };
  };

  const handleSubjectClick = async (subjectName) => {
    onSelect(subjectName);
    
    // Most Recent First Logic: Update Preference in DB
    try {
      if (authUser) {
        await api.put('/api/auth/last-subject', {
          userId: authUser._id,
          subjectName: subjectName
        });
        // Update local state to trigger re-sort
        setAuthUser({ ...authUser, lastVisitedSubject: subjectName });
      }
    } catch (err) {
      console.error('Failed to update last visited subject', err);
    }
  };

  // DUOLINGO SORTING: Put last visited subject FIRST
  const sortedSubjects = [...subjects].sort((a, b) => {
     if (a.name === authUser?.lastVisitedSubject) return -1;
     if (b.name === authUser?.lastVisitedSubject) return 1;
     return 0;
  });

  return (
    <div className="subject-nav-container">
      {sortedSubjects.map((subj) => {
        const isActive = activeSubject === subj.name;
        const meta = getSubjectMeta(subj.name);
        return (
          <div 
            key={subj._id} 
            className={`subject-tab ${isActive ? 'active' : ''}`}
            style={{
              borderColor: isActive ? meta.color : 'transparent',
              background: isActive ? `linear-gradient(180deg, #1F1010, ${meta.color}33)` : 'rgba(255,255,255,0.02)',
              boxShadow: isActive ? `0 0 20px ${meta.color}55` : 'none'
            }}
            onClick={() => handleSubjectClick(subj.name)}
          >
            <div className="subject-tab-content">
              <span className="subject-icon" style={{filter: isActive ? `drop-shadow(0 0 10px ${meta.color})` : 'grayscale(100%)', opacity: isActive ? 1 : 0.6}}>
                {meta.icon}
              </span>
              <span className="subject-name" style={{color: isActive ? '#fff' : 'rgba(255,255,255,0.4)'}}>
                {subj.name}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default SubjectNav;
