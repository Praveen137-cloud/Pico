import React, { useState, useEffect } from 'react';
import api from '../api';
import { Search, UserPlus, UserMinus, Heart, Users, UserCheck } from 'lucide-react';
import './Social.css';

const Social = () => {
  const [activeTab, setActiveTab] = useState('search'); // search, following, followers
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    fetchMySocialStats();
  }, []);

  const fetchMySocialStats = async () => {
    setLoading(true);
    try {
      const userRes = await api.get('/api/user');
      const statsRes = await api.get(`/api/social/stats/${userRes.data._id}`);
      setStats(statsRes.data);
    } catch (err) {
      console.error('Failed to fetch stats', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setSearchLoading(true);
    try {
      const res = await api.get(`/api/social/search?query=${query}`);
      setSearchResults(res.data);
      setActiveTab('search');
    } catch (err) {
      console.error('Search failed', err);
    } finally {
      setSearchLoading(false);
    }
  };

  const toggleFollow = async (targetUserId, isFollowing) => {
    try {
      if (isFollowing) {
        await api.post(`/api/social/unfollow/${targetUserId}`);
      } else {
        await api.post(`/api/social/follow/${targetUserId}`);
      }
      fetchMySocialStats();
      // If we are in search, refresh search results too
      if (query) {
        const res = await api.get(`/api/social/search?query=${query}`);
        setSearchResults(res.data);
      }
    } catch (err) {
      console.error('Action failed', err);
    }
  };

  const renderAgentRow = (targetUser) => {
    const isFollowing = stats?.following.some(f => f._id === targetUser._id);
    const isFollower = stats?.followers.some(f => f._id === targetUser._id);
    const isMutual = isFollowing && isFollower;
    const avatarEmoji = targetUser.avatar === 'Lion' ? '🦁' : targetUser.avatar === 'Tiger' ? '🐯' : targetUser.avatar === 'Parrot' ? '🦜' : '👤';

    return (
      <div key={targetUser._id} className="agent-row extreme-card animate-fade-in">
        <div className="agent-info">
          <span className="agent-avatar">{avatarEmoji}</span>
          <div className="agent-details">
            <div className="agent-name-row">
              <span className="agent-name">{targetUser.name}</span>
              {isMutual && <Heart className="mutual-heart" size={14} fill="currentColor" />}
            </div>
            <span className="agent-xp">{targetUser.xp} XP • {targetUser.streak || 0} 🔥</span>
          </div>
        </div>
        <div className="agent-actions">
           <button 
            className={`follow-btn ${isFollowing ? 'unfollow' : ''}`}
            onClick={() => toggleFollow(targetUser._id, isFollowing)}
           >
              {isFollowing ? <UserMinus size={16} /> : <UserPlus size={16} />}
              <span>{isFollowing ? 'UNFOLLOW' : 'FOLLOW'}</span>
           </button>
        </div>
      </div>
    );
  };

  return (
    <div className="social-page">
      <header className="social-header">
        <h1 className="social-title">SOCIAL MATRIX</h1>
        <p className="social-subtitle">Sync connections with elite agents</p>
      </header>

      <div className="social-grid">
        {/* Connection Stats Cards */}
        <div className="social-tabs-container">
           <button className={`social-tab ${activeTab === 'search' ? 'active' : ''}`} onClick={() => setActiveTab('search')}>
              <Search size={18} /> RESEARCH
           </button>
           <button className={`social-tab ${activeTab === 'following' ? 'active' : ''}`} onClick={() => setActiveTab('following')}>
              <UserCheck size={18} /> FOLLOWING ({stats?.followingCount || 0})
           </button>
           <button className={`social-tab ${activeTab === 'followers' ? 'active' : ''}`} onClick={() => setActiveTab('followers')}>
              <Users size={18} /> FOLLOWERS ({stats?.followerCount || 0})
           </button>
        </div>

        {activeTab === 'search' && (
          <div className="social-search-container">
             <form onSubmit={handleSearch} className="search-bar">
                <Search className="search-icon" size={20} />
                <input 
                  type="text" 
                  placeholder="Identify agent by code or name..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" disabled={searchLoading}>
                  {searchLoading ? 'SYNC...' : 'IDENTIFY'}
                </button>
             </form>
             <div className="search-results">
                {searchResults.map(user => renderAgentRow(user))}
                {query && searchResults.length === 0 && !searchLoading && (
                  <div className="empty-state">No agents detected in this sector.</div>
                )}
             </div>
          </div>
        )}

        {activeTab === 'following' && (
          <div className="connections-list">
             {stats?.following.length > 0 ? (
               stats.following.map(user => renderAgentRow(user))
             ) : (
               <div className="empty-state">You are not tracking any agents yet.</div>
             )}
          </div>
        )}

        {activeTab === 'followers' && (
          <div className="connections-list">
             {stats?.followers.length > 0 ? (
               stats.followers.map(user => renderAgentRow(user))
             ) : (
               <div className="empty-state">No agents are tracking your progress yet.</div>
             )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Social;
