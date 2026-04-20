import React from 'react';
import { X } from 'lucide-react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoUrl, videoTitle }) => {
  if (!isOpen) return null;

  // Convert YouTube URL to Embed URL
  const getEmbedUrl = (url) => {
    if (!url) return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : '';
  };

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content extreme-card" onClick={e => e.stopPropagation()}>
        <header className="video-modal-header">
          <div className="video-modal-title-row">
            <span className="video-modal-tag">PICO BRIEFING</span>
            <h2 className="video-modal-title">{videoTitle || 'Stage Intelligence'}</h2>
          </div>
          <button className="video-modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </header>
        
        <div className="video-modal-body">
          <div className="video-iframe-container">
            <iframe 
              src={getEmbedUrl(videoUrl)}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
        
        <footer className="video-modal-footer">
          <p className="video-modal-hint">
            🦜 Pico: "Watch closely, human! Theoretical mastery is the key to field success."
          </p>
        </footer>
      </div>
    </div>
  );
};

export default VideoModal;
