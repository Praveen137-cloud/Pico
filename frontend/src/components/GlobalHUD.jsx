import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const GlobalHUD = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="global-hud glass-panel">
      <div className="hud-left" onClick={() => navigate('/home')}>
        <div className="hud-user-info">
          <span className="hud-username">{user.username}</span>
          <div className="hud-level-bar">
             <div className="hud-level-fill" style={{ width: `${(user.xp % 100)}%` }} />
          </div>
        </div>
      </div>

      <div className="hud-right">
        {user?.isPremium && (
          <div className="hud-premium-tag">
            👑 PREMIUM
          </div>
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
          padding: 0 15px;
          border-radius: 0;
          border-bottom: 1px solid rgba(0, 242, 255, 0.2);
          background: rgba(10, 19, 41, 0.9);
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
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
           font-size: 13px;
           font-weight: 800;
           letter-spacing: 0.5px;
           color: #fff;
           text-transform: uppercase;
        }

        .hud-level-bar {
           width: 60px;
           height: 4px;
           background: rgba(255,255,255,0.1);
           border-radius: 2px;
           overflow: hidden;
        }

        .hud-level-fill {
           height: 100%;
           background: var(--theme-primary);
           box-shadow: 0 0 8px var(--theme-primary);
        }

        .hud-right {
          display: flex;
          gap: 8px;
        }

        .hud-stat-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
        }

        .stat-val {
          font-weight: 900;
          font-size: 13px;
          color: #fff;
        }

        .hud-premium-tag {
          font-size: 10px;
          font-weight: 900;
          color: #FFD700;
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 3px 8px;
          border-radius: 8px;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
        }

        @media (max-width: 480px) {
           .hud-username { display: none; }
           .hud-level-bar { display: none; }
           .hud-premium-tag { display: none; }
        }
      `}</style>
    </div>
  );
};

export default GlobalHUD;
