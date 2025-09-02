import React, { useEffect } from 'react';

const GoogleAds = ({ 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = '',
  responsive = true 
}) => {
  useEffect(() => {
    // Cargar Google AdSense
    if (window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  if (!adSlot) {
    return null;
  }

  return (
    <div className={`ads-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-TU_CLIENT_ID_AQUI" // Reemplazar con tu Client ID
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default GoogleAds;
