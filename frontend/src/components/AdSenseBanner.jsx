import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdSenseBanner = ({ slot, style = {}, format = 'auto', responsive = 'true' }) => {
  const { user } = useContext(AuthContext);

  // 🛡️ AD BLOCKER LOGIC
  const shouldHideAds = user?.role === 'admin' || user?.isPremium || user?.adsHidden;

  useEffect(() => {
    if (!shouldHideAds && typeof window !== 'undefined') {
      try {
        // Prevent multiple initializations in React 18 Strict Mode
        const ads = document.getElementsByClassName('adsbygoogle');
        const lastAd = ads[ads.length - 1];
        if (lastAd && !lastAd.getAttribute('data-adsbygoogle-status')) {
             (window.adsbygoogle = window.adsbygoogle || []).push({});
             console.log('[AdSense] Initializing unit:', slot);
        }
      } catch (e) {
        console.warn('[AdSense] Initialization skipped:', e.message);
      }
    }
  }, [shouldHideAds, slot]);

  if (shouldHideAds) return null;

  // \u26A0\uFE0F IMPORTANT: You MUST provide a valid slot ID from your dashboard.
  // Using "default" or leaving it empty will prevent ads from loading.
  if (!slot || slot === 'default') {
     console.warn('[AdSense Warning] Invalid Slot ID provided. Ad will not show.');
     return <div style={{height: 0, opacity: 0}} />;
  }

  return (
    <div className="adsense-container" style={{ margin: '20px 0', textAlign: 'center', minHeight: '90px', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9828288929078248" // \u2705 USER: Ensure this matches your Publisher ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdSenseBanner;
