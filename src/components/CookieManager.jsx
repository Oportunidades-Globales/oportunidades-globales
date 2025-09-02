import React, { useState, useEffect } from 'react';

const CookieManager = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false
  });
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    loadCookiePreferences();
  }, []);

  const loadCookiePreferences = () => {
    const saved = localStorage.getItem('cookieConsent');
    const date = localStorage.getItem('cookieConsentDate');
    
    if (saved) {
      setCookiePreferences(JSON.parse(saved));
      setLastUpdated(date ? new Date(date) : null);
    }
  };

  const updateCookiePreferences = (newPreferences) => {
    setCookiePreferences(newPreferences);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setLastUpdated(new Date());
    
    // Aplicar las nuevas preferencias
    applyCookies(newPreferences);
  };

  const applyCookies = (preferences) => {
    if (preferences.analytics) {
      enableGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }
    
    if (preferences.functional) {
      enableFunctionalCookies();
    } else {
      disableFunctionalCookies();
    }
    
    if (preferences.marketing) {
      enableMarketingCookies();
    } else {
      disableMarketingCookies();
    }
  };

  const enableGoogleAnalytics = () => {
    // Implementar Google Analytics
    console.log('Google Analytics habilitado');
    
    // Ejemplo de implementación:
    // window.gtag('consent', 'update', {
    //   'analytics_storage': 'granted'
    // });
  };

  const disableGoogleAnalytics = () => {
    console.log('Google Analytics deshabilitado');
    
    // Ejemplo de implementación:
    // window.gtag('consent', 'update', {
    //   'analytics_storage': 'denied'
    // });
  };

  const enableFunctionalCookies = () => {
    console.log('Cookies funcionales habilitadas');
    // Implementar cookies de funcionalidad
  };

  const disableFunctionalCookies = () => {
    console.log('Cookies funcionales deshabilitadas');
    // Limpiar cookies funcionales
  };

  const enableMarketingCookies = () => {
    console.log('Cookies de marketing habilitadas');
    // Implementar cookies de marketing
  };

  const disableMarketingCookies = () => {
    console.log('Cookies de marketing deshabilitadas');
    // Limpiar cookies de marketing
  };

  const resetAllCookies = () => {
    const onlyEssential = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    
    updateCookiePreferences(onlyEssential);
    
    // Limpiar cookies no esenciales
    disableGoogleAnalytics();
    disableFunctionalCookies();
    disableMarketingCookies();
  };

  const acceptAllCookies = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    
    updateCookiePreferences(allAccepted);
  };

  const getCookieStatus = () => {
    const total = Object.keys(cookiePreferences).length;
    const active = Object.values(cookiePreferences).filter(Boolean).length;
    return { total, active };
  };

  const getCookieStatusText = () => {
    const { total, active } = getCookieStatus();
    if (active === 1) return 'Solo cookies esenciales';
    if (active === total) return 'Todas las cookies aceptadas';
    return `${active} de ${total} tipos de cookies activas`;
  };

  return {
    cookiePreferences,
    lastUpdated,
    updateCookiePreferences,
    resetAllCookies,
    acceptAllCookies,
    getCookieStatus,
    getCookieStatusText,
    applyCookies
  };
};

export default CookieManager;
