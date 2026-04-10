import React, { useState, useEffect } from 'react';
import api from '../api';
import './Admin.css';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ totalUsers: 0, guestUsers: 0 });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get('/api/admin/users');
      setUsers(res.data);
      
      // Basic stats calculation based on fetched users (for demo)
      const guests = res.data.filter(u => u.isGuest).length;
      setStats({
        totalUsers: res.data.length,
        guestUsers: guests
      });
      
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users. Access denied?');
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;
    
    try {
      await api.delete(`/api/admin/users/${id}`);
      setUsers(users.filter(u => u._id !== id));
    } catch (err) {
      alert('Failed to delete user.');
    }
  };

  const handlePurgeGuests = async () => {
    if (!window.confirm('Delete ALL guest accounts? This cleanup is permanent.')) return;

    try {
      const res = await api.delete('/api/admin/purge-guests');
      alert(res.data.message);
      fetchUsers();
    } catch (err) {
      alert('Failed to purge guests.');
    }
  };

  if (loading) return <div className="admin-loading">INITIALIZING SECURE TERMINAL...</div>;

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-title">
          <h1>CORE ADMINISTRATION</h1>
          <p>System User Matrix Control</p>
        </div>
        <button className="admin-purge-btn" onClick={handlePurgeGuests}>
          PURGE GUEST DATA
        </button>
      </header>

      {error && <div className="admin-error">{error}</div>}

      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <span className="stat-label">REGISTERED AGENTS</span>
          <span className="stat-value">{stats.totalUsers - stats.guestUsers}</span>
        </div>
        <div className="admin-stat-card">
          <span className="stat-label">TEMPORARY GUESTS</span>
          <span className="stat-value">{stats.guestUsers}</span>
        </div>
        <div className="admin-stat-card">
          <span className="stat-label">SYSTEM UPTIME</span>
          <span className="stat-value">99.9%</span>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-user-table">
          <thead>
            <tr>
              <th>AGENT NAME</th>
              <th>EMAIL INTERFACE</th>
              <th>XP</th>
              <th>TYPE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className={user.isGuest ? 'row-guest' : ''}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.xp}</td>
                <td>
                  <span className={`role-badge ${user.isGuest ? 'guest' : 'regular'}`}>
                    {user.isGuest ? 'GUEST' : 'AGENT'}
                  </span>
                </td>
                <td>
                  <button 
                    className="user-delete-btn" 
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    TERMINATE
                  </button>
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
