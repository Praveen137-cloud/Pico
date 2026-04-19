import React, { useState, useEffect } from 'react';
import api from '../api';
import './Admin.css';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ totalUsers: 0, guestUsers: 0 });
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmPurge, setConfirmPurge] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get('/api/admin/users');
      const userData = Array.isArray(res.data) ? res.data : [];
      setUsers(userData);
      
      const guests = userData.filter(u => u?.isGuest).length;
      const premium = userData.filter(u => u?.isPremium).length;
      
      setStats({
        totalUsers: userData.length,
        guestUsers: guests,
        premiumUsers: premium
      });
      
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users. Access denied?');
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id, statusUpdates) => {
    try {
      const res = await api.put(`/api/admin/users/${id}/status`, statusUpdates);
      if (res.data.success) {
        setUsers(users.map(u => u._id === id ? { ...u, ...statusUpdates } : u));
        // Re-calculate stats
        const updatedUsers = users.map(u => u._id === id ? { ...u, ...statusUpdates } : u);
        setStats(prev => ({
          ...prev,
          premiumUsers: updatedUsers.filter(u => u.isPremium).length
        }));
      }
    } catch (err) {
      setError('Failed to update user status.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleDeleteUser = async (id) => {
    if (confirmDeleteId !== id) {
      setConfirmDeleteId(id);
      return;
    }
    
    try {
      setError('');
      await api.delete(`/api/admin/users/${id}`);
      setUsers(users.filter(u => u._id !== id));
      setStats(prev => ({ ...prev, totalUsers: prev.totalUsers - 1 }));
      setConfirmDeleteId(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to terminate agent identity.');
      setConfirmDeleteId(null);
      setTimeout(() => setError(''), 5000);
    }
  };

  const handlePurgeGuests = async () => {
    if (!confirmPurge) {
      setConfirmPurge(true);
      return;
    }

    try {
      setError('');
      const res = await api.delete('/api/admin/purge-guests');
      setStats(prev => ({ ...prev, totalUsers: prev.totalUsers - res.data.count, guestUsers: 0 }));
      setUsers(users.filter(u => !u.isGuest));
      setConfirmPurge(false);
      setError(`SUCCESS: ${res.data.message}`);
      setTimeout(() => setError(''), 5000);
    } catch (err) {
      setError('Failed to purge guests.');
      setConfirmPurge(false);
      setTimeout(() => setError(''), 5000);
    }
  };

  if (loading) return <div className="admin-loading">INITIALIZING SECURE TERMINAL...</div>;

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-title">
          <h1>COMMAND CENTER</h1>
          <p>Global Intelligence Matrix Control</p>
        </div>
        <div className="admin-actions">
          <button 
            className={`admin-purge-btn ${confirmPurge ? 'confirming' : ''}`} 
            onClick={handlePurgeGuests}
          >
            {confirmPurge ? 'CONFIRM PURGE?' : 'PURGE GUESTS'}
          </button>
          {confirmPurge && (
            <button className="admin-cancel-btn" onClick={() => setConfirmPurge(false)}>
              ✕
            </button>
          )}
        </div>
      </header>

      {error && <div className="admin-error">{error}</div>}

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <span className="stat-label">TOTAL AGENTS</span>
          <span className="stat-value">{stats.totalUsers}</span>
        </div>
        <div className="admin-stat-card" style={{ borderBottom: '3px solid var(--admin-premium)' }}>
          <span className="stat-label">PREMIUM AGENTS 💎</span>
          <span className="stat-value" style={{ color: 'var(--admin-premium)' }}>{stats.premiumUsers}</span>
        </div>
        <div className="admin-stat-card">
          <span className="stat-label">GUEST ACCOUNTS</span>
          <span className="stat-value">{stats.guestUsers}</span>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-user-table">
          <thead>
            <tr>
              <th>AGENT IDENTITY</th>
              <th>DATA INTERFACE</th>
              <th>PROGRESS (XP)</th>
              <th>ACCOUNT CLASS</th>
              <th>OPERATIONAL STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td data-label="AGENT IDENTITY">
                  <div className="agent-cell">
                    <div className="agent-avatar">
                      {user.avatar === 'Parrot' ? '🦜' : '👤'}
                    </div>
                    <div className="agent-info">
                      <div className={`agent-name ${user.isPremium ? 'premium-glow' : ''}`}>
                        {user.name.toUpperCase()} {user.isPremium && '💎'}
                      </div>
                      <div className="agent-email">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td data-label="DATA INTERFACE">
                  <span style={{ fontSize: 10, color: '#475569', fontWeight: 800 }}>MERN_V1_CORE</span>
                </td>
                <td data-label="PROGRESS (XP)">
                   <span style={{ color: 'var(--admin-primary)', fontWeight: 900 }}>{user.xp}</span>
                </td>
                <td data-label="ACCOUNT CLASS">
                   {user.isPremium ? (
                     <span className="premium-badge">PREMIUM</span>
                   ) : (
                     <span className={`guest-badge ${user.isGuest ? 'guest' : ''}`}>
                       {user.isGuest ? 'GUEST' : 'AGENT'}
                     </span>
                   )}
                </td>
                <td data-label="OPERATIONAL STATUS" className="status-controls">
                  <div className="status-toggle-group">
                    <label className="toggle-label">
                      PREMIUM
                      <input 
                        type="checkbox" 
                        checked={user.isPremium || false} 
                        onChange={(e) => handleUpdateStatus(user._id, { isPremium: e.target.checked })}
                      />
                    </label>
                    <label className="toggle-label">
                      HIDE ADS
                      <input 
                        type="checkbox" 
                        checked={user.adsHidden || false} 
                        onChange={(e) => handleUpdateStatus(user._id, { adsHidden: e.target.checked })}
                      />
                    </label>
                  </div>
                </td>
                <td data-label="ACTIONS">
                  {confirmDeleteId === user._id ? (
                    <div className="confirm-actions">
                       <button 
                        className="user-confirm-btn" 
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        CONFIRM?
                      </button>
                      <button 
                        className="user-cancel-btn" 
                        onClick={() => setConfirmDeleteId(null)}
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <button 
                      className="user-delete-btn" 
                      onClick={() => setConfirmDeleteId(user._id)}
                    >
                      TERMINATE
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
