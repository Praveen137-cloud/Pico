import React, { useState, useEffect } from 'react';
import api from '../api';
import { Search, UserPlus, UserMinus, ShieldCheck, Heart } from 'lucide-react';
import './Social.css';

const Social = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    fetchMySocialStats();
  }, []);

  const fetchMySocialStats = async () => {
    setLoading(true);
    try {
      // We use 'me' or similar, but since we have user ID in context, 
      // we'll use a specific stats endpoint or just the profile endpoint.
      // For now, let's fetch current user profile to get connection list.
      const res = await api.get('/api/user');
      const statsRes = await api.get(`/api/social/stats/${res.data._id}`);
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
      setResults(res.data);
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
      // Refresh
      handleSearch({ preventDefault: () => {} });
      fetchMySocialStats();
    } catch (err) {
      console.error('Action failed', err);
    }
  };

  return (
    <div className="social-page">
      <header className="social-header">
        <h1 className="social-title">SOCIAL MATRIX</h1>
        <p className="social-subtitle">Sync connections with elite agents</p>
      </header>

      <div className="social-grid">
        {/* Connection Stats */}
        <div className="social-stats-card extreme-card">
           <div className="stats-row">
              <div className="stat-item">
                 <span className="stat-value">{stats?.followerCount || 0}</span>
                 <span className="stat-label">FOLLOWERS</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                 <span className="stat-value">{stats?.followingCount || 0}</span>
                 <span className="stat-label">FOLLOWING</span>
              </div>
           </div>
        </div>

        {/* Search Matrix */}
        <div className="social-search-container">
           <form onSubmit={handleSearch} className="search-bar">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search Agent Code or Username..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" disabled={searchLoading}>
                {searchLoading ? 'SYNCING...' : 'SEARCH'}
              </button>
           </form>

           <div className="search-results">
              {results.length > 0 ? (
                results.map(targetUser => {
                   const isFollowing = stats?.following.some(f => f._id === targetUser._id);
                   const isFollower = stats?.followers.some(f => f._id === targetUser._id);
                   const isMutual = isFollowing && isFollower;

                   return (
                    <div key={targetUser._id} className="agent-row extreme-card animate-fade-in">
                       <div className="agent-info">
                          <span className="agent-avatar">
                            {targetUser.avatar === 'Lion' ? '🦁' : 
                             targetUser.avatar === 'Tiger' ? '🐯' : 
                             targetUser.avatar === 'Parrot' ? '🦜' : '👤'}
                          </span>
                          <div className="agent-details">
                             <div className="agent-name-row">
                                <span className="agent-name">{targetUser.name}</span>
                                {isMutual && <Heart className="mutual-heart" size={14} fill="currentColor" />}
                             </div>
                             <span className="agent-xp">{targetUser.xp} XP • {targetUser.streak} 🔥</span>
                          </div>
                       </div>
                       <button 
                        className={`follow-btn ${isFollowing ? 'unfollow' : ''}`}
                        onClick={() => toggleFollow(targetUser._id, isFollowing)}
                       >
                          {isFollowing ? <UserMinus size={18} /> : <UserPlus size={18} />}
                          {isFollowing ? 'UNFOLLOW' : 'FOLLOW'}
                       </button>
                    </div>
                   );
                })
              ) : query && !searchLoading ? (
                <div className="empty-search">No agents found in this sector.</div>
              ) : null}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
