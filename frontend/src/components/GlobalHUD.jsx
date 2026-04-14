import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LivingCharacter from './LivingCharacter';

const GlobalHUD = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="global-hud glass-panel">
      <div className="hud-left" onClick={() => navigate('/home')}>
        <LivingCharacter character="ace" size={40} state="levitating" />
        <div className="hud-user-info">
          <span className="hud-username">{user.username}</span>
          <div className="hud-level-bar">
             <div className="hud-level-fill" style={{ width: `${(user.xp % 100)}%` }} />
          </div>
        </div>
      </div>

      <div className="hud-right">
        <div className="hud-stat-pill fire">
          <span>🔥</span>
          <span className="stat-val">{user.streak || 0}</span>
        </div>
        <div className="hud-stat-pill heart">
          <span>❤️</span>
          <span className="stat-val">{user.lives ?? 3}</span>
        </div>
        <div className="hud-stat-pill gem">
           <span>💎</span>
           <span className="stat-val">{user.xp || 0}</span>
        </div>
      </div>

      <style>{`
        .global-hud {
          position: fixed;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          max-width: 600px;
          height: 60px;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          border-radius: 20px;
          border: 1px solid rgba(0, 242, 255, 0.2);
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }

        .hud-left {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .hud-user-info {
           display: flex;
           flex-direction: column;
           gap: 2px;
        }

        .hud-username {
           font-size: 14px;
           font-weight: 800;
           letter-spacing: 0.5px;
           color: #fff;
        }

        .hud-level-bar {
           width: 80px;
           height: 6px;
           background: rgba(255,255,255,0.1);
           border-radius: 3px;
           overflow: hidden;
        }

        .hud-level-fill {
           height: 100%;
           background: var(--theme-primary);
           box-shadow: 0 0 10px var(--theme-primary);
        }

        .hud-right {
          display: flex;
          gap: 10px;
        }

        .hud-stat-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
        }

        .hud-stat-pill.fire { border-color: #FF4E50; }
        .hud-stat-pill.heart { border-color: #EF4444; }
        .hud-stat-pill.gem { border-color: #FFD700; }

        .stat-val {
          font-weight: 900;
          font-size: 14px;
        }

        @media (max-width: 480px) {
           .hud-username { display: none; }
           .hud-level-bar { display: none; }
        }
      `}</style>
    </div>
  );
};

export default GlobalHUD;
