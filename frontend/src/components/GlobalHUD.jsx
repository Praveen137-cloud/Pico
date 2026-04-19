import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { User, Compass, Award, BookOpen, Brain, Laptop, Users } from 'lucide-react';

const avatarMapHUD = { Lion: '🦁', Tiger: '🐯', Elephant: '🐘', Giraffe: '🦒', Goat: '🐐', Parrot: '🦜', 'Electric Parrot': '⚡🦜', Dragon: '🐉', Wolf: '🐺', Fox: '🦊', Panda: '🐼' };

const getRankTitle = (xp) => {
  if (xp >= 10000) return 'LEGEND';
  if (xp >= 5000) return 'ELITE';
  if (xp >= 2000) return 'EXPERT';
  if (xp >= 1000) return 'ADVANCED';
  if (xp >= 500) return 'INTERMEDIATE';
  if (xp >= 100) return 'ROOKIE';
  return 'RECRUIT';
};

const quickLinks = [
  { to: '/career-guidance', icon: Compass, title: 'Career' },
  { to: '/pyqs',            icon: Award,   title: 'PYQs' },
  { to: '/feed',            icon: BookOpen, title: 'Lore' },
  { to: '/puzzles',         icon: Brain,   title: 'Puzzles' },
  { to: '/basics',          icon: Laptop,  title: 'Training' },
  { to: '/social',          icon: Users,   title: 'Social' },
];

const GlobalHUD = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) return null;

  const avatarDisplay = user?.avatar === 'Parrot' ? (
    <img src="/pico-bird.png" alt="Pico" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  ) : user?.avatar?.startsWith('http') ? (
    <img src={user.avatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  ) : (
    <span style={{ fontSize: 18 }}>{avatarMapHUD[user.avatar] || '🦜'}</span>
  );

  const rankTitle = getRankTitle(user?.xp || 0);

  return (
    <div className="global-hud glass-panel">
      {/* LEFT: Profile badge */}
      <div className="hud-left" onClick={() => navigate('/profile')}>
        <div className="top-profile-badge glass-panel hover-tilt">
          <div className="avatar-box">
             {avatarDisplay}
          </div>
          <div className="profile-meta">
             <div className="profile-name">{user?.name?.toUpperCase() || 'GUEST'}</div>
             <div className="profile-rank">{rankTitle}</div>
          </div>
        </div>
      </div>

      <div className="hud-quick-strip">
        {quickLinks.map(({ to, icon: Icon, title }) => (
          <NavLink
            key={to}
            to={to}
            title={title}
            className={({ isActive }) => `hud-quick-btn${isActive ? ' hud-quick-active' : ''}`}
          >
            <Icon size={16} />
          </NavLink>
        ))}
      </div>

      {/* RIGHT: Stats */}
      <div className="hud-right">
        {user?.isPremium && (
          <div className="hud-premium-tag">👑</div>
        )}
        <div className="hud-stat-pill fire">
          <span style={{ filter: 'drop-shadow(0 0 5px #FF4E50)' }}>🔥</span>
          <span className="stat-val">{user.streak || 0}</span>
        </div>
        <div className="hud-stat-pill bolt">
           <span style={{ filter: 'drop-shadow(0 0 5px #FFD700)' }}>⚡</span>
           <span className="stat-val">{user.xp || 0}</span>
        </div>
      </div>

      <style>{`
        .global-hud {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 50px;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          border-radius: 0;
          border-bottom: 1px solid rgba(0, 242, 255, 0.2);
          background: rgba(8, 12, 20, 0.96);
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
          gap: 8px;
        }

        .hud-left {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          cursor: pointer;
        }

        .top-profile-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px 4px 4px;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9));
          border: 1px solid var(--theme-primary);
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .top-profile-badge:hover {
          filter: brightness(1.2);
          border-color: #fff;
        }

        .avatar-box {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--bg-dark);
          border: 2px solid var(--theme-primary);
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .profile-meta {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .profile-name {
          color: #fff;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .profile-rank {
          color: var(--theme-primary);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        /* ── Quick-access icon strip ── */
        .hud-quick-strip {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }

        .hud-quick-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #64748B;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          padding: 0;
          text-decoration: none;
        }

        @media (hover: hover) {
          .hud-quick-btn:hover {
            background: rgba(0, 242, 255, 0.12);
            border-color: var(--theme-primary);
            color: var(--theme-primary);
            transform: translateY(-2px) scale(1.1);
            box-shadow: 0 4px 12px rgba(0, 242, 255, 0.2);
          }
        }

        .hud-quick-btn:active {
          transform: scale(0.95);
        }

        .hud-quick-btn.hud-quick-active {
          background: rgba(0, 242, 255, 0.15);
          border-color: var(--theme-primary);
          color: var(--theme-primary);
          box-shadow: 0 0 10px rgba(0, 242, 255, 0.3), inset 0 0 6px rgba(0, 242, 255, 0.1);
        }

        .hud-right {
          display: flex;
          gap: 6px;
          align-items: center;
          flex-shrink: 0;
        }

        .hud-stat-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 4px 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
        }

        .stat-val {
          font-weight: 900;
          font-size: 12px;
          color: #fff;
        }

        .hud-premium-tag {
          font-size: 16px;
          font-weight: 900;
          color: #FFD700;
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 2px 6px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Mobile: hide strip labels, shrink buttons */
        @media (max-width: 640px) {
          .profile-meta { display: none; }
          .top-profile-badge { padding: 4px; border-radius: 50%; }
          .hud-quick-btn { width: 28px; height: 28px; border-radius: 8px; }
          .hud-quick-strip { gap: 2px; }
          .stat-val { font-size: 11px; }
          .hud-stat-pill { padding: 3px 6px; gap: 3px; }
        }
        @media (max-width: 420px) {
          /* On very small phones hide career/social to avoid overflow */
          .hud-quick-btn:nth-child(n+5) { display: none; }
        }
        @media (max-width: 360px) {
          .avatar-box { width: 26px; height: 26px; }
          .hud-quick-btn:nth-child(n+4) { display: none; }
        }
      `}</style>
    </div>
  );
};

export default GlobalHUD;
