import React, { useEffect, useRef } from 'react';
import AdSenseTest from './AdSenseTest';
import { AD_CLIENT, DEFAULT_AD_CONFIG } from '../config/adsense';

const GoogleAds = ({ 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block', width: '100%', height: '250px' },
  className = '',
  responsive = true 
}) => {
  const adRef = useRef(null);
  const isAdLoaded = useRef(false);

  useEffect(() => {
    // Solo cargar el anuncio en producción y si no se ha cargado antes
    if (process.env.NODE_ENV === 'production' && adRef.current && !isAdLoaded.current && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isAdLoaded.current = true;
      } catch (error) {
        console.log('AdSense error:', error);
      }
    }
  }, [adSlot]);

  if (!adSlot) {
    return null;
  }

  // En desarrollo local, mostrar anuncios de prueba
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`ads-container ${className}`}>
        <AdSenseTest 
          adSlot={adSlot} 
          title={`Anuncio - Slot ${adSlot}`}
        />
      </div>
    );
  }

  // Mostrar anuncios en producción ahora que AdSense está aprobado
  if (process.env.NODE_ENV === 'production') {
    return (
      <div className={`ads-container ${className}`} style={{ minHeight: '250px', minWidth: '300px' }}>
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={adStyle}
          data-ad-client={AD_CLIENT}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      </div>
    );
  }

  return (
    <div className={`ads-container ${className}`} style={{ minHeight: '250px', minWidth: '300px' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={AD_CLIENT}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
};

export default GoogleAds;
