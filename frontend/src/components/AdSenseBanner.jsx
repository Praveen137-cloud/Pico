import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const AdSenseBanner = ({ slot, style = {}, format = 'auto', responsive = 'true' }) => {
  const { user } = useContext(AuthContext);

  // 🛡️ AD BLOCKER LOGIC
  // Do not show ads if user is an admin, is premium, or has been manually exempted by admin.
  const shouldHideAds = user?.role === 'admin' || user?.isPremium || user?.adsHidden;

  useEffect(() => {
    if (!shouldHideAds) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, [shouldHideAds]);

  if (shouldHideAds) {
    return null;
  }

  return (
    <div className="adsense-container" style={{ margin: '20px 0', textAlign: 'center', minHeight: '90px', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9828288929078248"
        data-ad-slot={slot || 'default'}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdSenseBanner;
