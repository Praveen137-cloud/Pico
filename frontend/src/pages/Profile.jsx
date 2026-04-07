import React, { useState, useEffect, useContext } from 'react';
import api from '../api';
import { Palette, Share2 } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import './Profile.css';

const avatarMap = { Lion: '🦁', Tiger: '🐯', Elephant: '🐘', Giraffe: '🦒', Goat: '🐐', Parrot: '🦜', 'Electric Parrot': '⚡🦜' };

const avatarsList = [
  { name: 'Lion', emoji: '🦁' },
  { name: 'Tiger', emoji: '🐯' },
  { name: 'Elephant', emoji: '🐘' },
  { name: 'Giraffe', emoji: '🦒' },
  { name: 'Goat', emoji: '🐐' },
  { name: 'Parrot', emoji: '🦜' },
  { name: 'Electric Parrot', emoji: '⚡🦜' },
];

const themes = [
  { name: 'Gold', primary: '#FBBF24', secondary: '#F59E0B' },
  { name: 'Cyber', primary: '#C084FC', secondary: '#7E22CE' },  
  { name: 'Jade', primary: '#10B981', secondary: '#047857' },
  { name: 'Sapphire', primary: '#3B82F6', secondary: '#1D4ED8' },
  { name: 'Ruby', primary: '#EF4444', secondary: '#991B1B' },
  { name: 'Forest', primary: '#22C55E', secondary: '#14532D' },
  { name: 'Sunset', primary: '#FB923C', secondary: '#9A3412' },
  { name: 'Midnight', primary: '#94A3B8', secondary: '#1E293B' },
  { name: 'Ocean', primary: '#2DD4BF', secondary: '#0D9488' },
  { name: 'Amethyst', primary: '#A78BFA', secondary: '#5B21B6' },
  { name: 'Magma', primary: '#F87171', secondary: '#7F1D1D' },
  { name: 'Neon', primary: '#A3E635', secondary: '#3F6212' }
];

const Profile = () => {
  const { user: authUser, loading, logout, setUser: setAuthUser } = useContext(AuthContext);
  const [user, setUser] = useState(authUser);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(authUser?.name || '');
  const [activeTheme, setActiveTheme] = useState('Gold');
  const [prefLang, setPrefLang] = useState(authUser?.preferredLanguage || 'c');
  const [shareFeedback, setShareFeedback] = useState(false);

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

  const handleShare = async () => {
    if (!user) return;
    
    const shareMessage = `Check out my Pico DSA Level! 🦜\n\n👤 Agent: ${user.name}\n⚡ XP: ${user.xp}\n🔥 Streak: ${user.streak}\n🏆 Problems Solved: ${user.submissions?.length || 0}\n\nJoin the elite at: ${window.location.origin}`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Pico DSA Profile',
          text: shareMessage,
          url: window.location.origin
        });
      } else {
        await navigator.clipboard.writeText(shareMessage);
        setShareFeedback(true);
        setTimeout(() => setShareFeedback(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing profile:', err);
    }
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
        
        <button 
          className={`profile-share-btn ${shareFeedback ? 'copied' : ''}`}
          onClick={handleShare}
        >
          <Share2 size={14} />
          {shareFeedback ? 'COPIED!' : 'SHARE PROFILE'}
        </button>
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
        <p style={{color: 'var(--text-muted)', fontSize: 14, maxWidth: '400px', margin: '0 auto', marginBottom: 20}}>
          Love the platform? Support development directly and help us build more premium features!
        </p>
        
        {/* UPI Direct Pay Button */}
        <a 
          href="upi://pay?pa=praveenkumar63811@oksbi&pn=Praveen%20Kumar&cu=INR&tn=Supporting%20Pico"
          className="profile-support-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #FFD700, #F59E0B)',
            color: '#000',
            padding: '14px 24px',
            borderRadius: '12px',
            fontWeight: 800,
            textDecoration: 'none',
            fontSize: '15px',
            transition: 'all 0.2s',
            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)'
          }}
        >
          <span>⚡</span> DIRECT PAY (UPI)
        </a>
        <div style={{color: 'var(--text-muted)', fontSize: 11, marginTop: 12}}>
          Works with GPay, PhonePe, Paytm & BHIM
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
