import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import { Palette } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import './Profile.css';

const avatarsList = [
  { name: 'Lion', emoji: '🦁' },
  { name: 'Tiger', emoji: '🐯' },
  { name: 'Elephant', emoji: '🐘' },
  { name: 'Giraffe', emoji: '🦒' },
  { name: 'Goat', emoji: '🐐' },
  { name: 'Parrot', emoji: '🦜' },
];

const themes = [
  { name: 'Gold', primary: '#FBBF24', secondary: '#F59E0B' },
  { name: 'Cyber', primary: '#C084FC', secondary: '#7E22CE' },  
  { name: 'Jade', primary: '#10B981', secondary: '#047857' },
  { name: 'Sapphire', primary: '#3B82F6', secondary: '#1D4ED8' }
];

const Profile = () => {
  const { user: authUser, loading, logout, setUser: setAuthUser } = useContext(AuthContext);
  const [user, setUser] = useState(authUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(authUser?.name || '');
  const [activeTheme, setActiveTheme] = useState('Gold');
  const [prefLang, setPrefLang] = useState(authUser?.preferredLanguage || 'c');

  useEffect(() => {
    if (authUser) {
      setUser(authUser);
      setEditName(authUser.name);
      setPrefLang(authUser.preferredLanguage || 'c');
    }
  }, [authUser]);

  const saveProfile = async (updates) => {
    if (!user) return;
    try {
      const res = await api.put('/api/user', {
        name: user.name,
        avatar: user.avatar,
        ...updates
      });
      setUser(res.data);
      if (setAuthUser) setAuthUser(res.data);
    } catch (err) {
      console.error('Failed to update profile', err);
    }
  };

  const handleNameSave = () => {
    setIsEditing(false);
    if (!user) return;
    if (editName.trim() !== '' && editName !== user.name) {
      saveProfile({ name: editName });
    } else {
      setEditName(user.name);
    }
  };

  const cycleTheme = () => {
    const currentIndex = themes.findIndex(t => t.name === activeTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    setActiveTheme(nextTheme.name);
    document.documentElement.style.setProperty('--theme-primary', nextTheme.primary);
    document.documentElement.style.setProperty('--theme-secondary', nextTheme.secondary);
  };

  if (loading) return <div style={{padding: 40, textAlign: 'center', color: 'white'}}>Initializing Profile...</div>;
  if (!user && !authUser) return <div style={{padding: 40, textAlign: 'center', color: 'white'}}>User Profile Not Found. Please Login Again.</div>;

  const currentAvatarEmoji = avatarsList.find(a => a.name === user.avatar)?.emoji || '🦜';

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-avatar-circle">{currentAvatarEmoji}</div>
        
        {isEditing ? (
          <input 
            autoFocus
            className="profile-name-input"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleNameSave}
            onKeyDown={(e) => e.key === 'Enter' && handleNameSave()}
          />
        ) : (
          <div className="profile-name-container" onClick={() => setIsEditing(true)}>
            <h2 className="profile-name">{user.name}</h2>
            <span className="profile-edit-hint">Tap to edit username</span>
          </div>
        )}
      </div>

      <div className="profile-stats-grid">
        <div className="profile-stat-box">
          <div className="profile-stat-value">{user.xp}</div>
          <div className="profile-stat-label">Total XP</div>
        </div>
        <div className="profile-stat-box">
          <div className="profile-stat-value">{user.lessonsCompleted}</div>
          <div className="profile-stat-label">Modules</div>
        </div>
        <div className="profile-stat-box">
          <div className="profile-stat-value">{user.streak} 🔥</div>
          <div className="profile-stat-label">Streak</div>
        </div>
      </div>

      <div className="theme-toggle-container">
        <div className="theme-toggle-info">
          <span className="theme-toggle-label">Interface Theme</span>
          <span className="theme-toggle-current">{activeTheme} Active</span>
        </div>
        <button className="theme-toggle-btn" onClick={cycleTheme}>
          <Palette size={18} />
          Change Theme
        </button>
      </div>

      <h3 className="profile-section-title">Preferred Coding Language</h3>
      <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
        {['c', 'python', 'java'].map(lang => (
          <button
            key={lang}
            onClick={() => {
              setPrefLang(lang);
              saveProfile({ preferredLanguage: lang });
            }}
            style={{
              flex: 1,
              padding: '14px',
              borderRadius: '8px',
              border: `2px solid ${prefLang === lang ? 'var(--theme-primary)' : 'var(--divider)'}`,
              backgroundColor: prefLang === lang ? 'rgba(255,255,255,0.05)' : 'var(--bg-card)',
              color: prefLang === lang ? 'var(--theme-primary)' : '#aaa',
              fontWeight: 900,
              fontSize: 14,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: 1,
              transition: 'all 0.2s'
            }}
          >
            {lang === 'c' ? '🔵 C' : lang === 'python' ? '🟡 Python' : '🟠 Java'}
          </button>
        ))}
      </div>

      <h3 className="profile-section-title">Solved Problems 🏆</h3>
      {(!user.submissions || user.submissions.length === 0) ? (
        <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--divider)', borderRadius: 8, padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>
          No problems solved yet. Head to the <strong style={{ color: 'var(--theme-primary)' }}>Basics</strong> tab to start! 💪
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {[...user.submissions].reverse().slice(0, 20).map((sub, i) => (
            <div key={i} style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--divider)', borderRadius: 8, padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: '#E2E8F0', fontWeight: 700, fontSize: 14, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub.problemTitle || 'Problem'}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: 11, marginTop: 2 }}>{new Date(sub.solvedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
              </div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 }}>
                <span style={{ backgroundColor: 'var(--bg-dark)', border: '1px solid var(--divider)', borderRadius: 6, padding: '3px 8px', fontSize: 11, fontWeight: 700, color: sub.language === 'c' ? '#60A5FA' : sub.language === 'python' ? '#FCD34D' : '#FB923C', textTransform: 'uppercase' }}>{sub.language}</span>
                <span style={{ backgroundColor: sub.status === 'SUCCESS' ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)', color: sub.status === 'SUCCESS' ? '#10B981' : '#EF4444', borderRadius: 6, padding: '3px 8px', fontSize: 11, fontWeight: 900 }}>{sub.status === 'SUCCESS' ? '✓ AC' : '✗'}</span>
              </div>
            </div>
          ))}
          {user.submissions.length > 20 && <p style={{ color: 'var(--text-muted)', fontSize: 12, textAlign: 'center' }}>Showing last 20 submissions</p>}
        </div>
      )}

      <h3 className="profile-section-title">Select Avatar</h3>
      <div className="profile-avatar-grid">
        {avatarsList.map(av => {
          const isActive = user.avatar === av.name;
          return (
            <div 
              key={av.name} 
              className={`profile-avatar-option ${isActive ? 'active' : ''}`}
              onClick={() => saveProfile({ avatar: av.name })}
            >
              <div className="profile-avatar-emoji">{av.emoji}</div>
              <div className="profile-avatar-name">{av.name}</div>
            </div>
          )
        })}
      </div>

      <h3 className="profile-section-title">Community & Support</h3>
      <a 
        href="https://chat.whatsapp.com/IgYGNiOigwvFVyig6M3roy" 
        target="_blank" 
        rel="noreferrer"
        className="profile-community-card"
      >
        <span style={{fontSize: 28}}>💬</span>
        <div>
          <div style={{color: '#fff', fontWeight: 800, fontSize: 16}}>Join the Lore (WhatsApp)</div>
          <div style={{color: 'rgba(255,255,255,0.7)', fontSize: 13, marginTop: 4}}>Official Pico Community Hub</div>
        </div>
      </a>

      <div className="profile-support-box">
        <h4 style={{color: '#fff', marginBottom: 8, fontSize: 18, fontWeight: 800}}>Support Pico 🦜</h4>
        <p style={{color: 'var(--text-muted)', fontSize: 14, maxWidth: '400px', margin: '0 auto'}}>
          Love the platform? Support development directly and help us build more premium features!
        </p>
        <div className="profile-support-upi">
          <strong>UPI ID:</strong> praveenkumar63811@oksbi
        </div>
      </div>

      <button 
        style={{ backgroundColor: 'transparent', color: '#DC2626', border: '1px solid #DC2626', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginBottom: '40px' }}
        onClick={logout}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Profile;
