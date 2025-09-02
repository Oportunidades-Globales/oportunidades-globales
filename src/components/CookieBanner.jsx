import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Siempre activas
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Verificar si ya se han configurado las cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    
    setCookiePreferences(allAccepted);
    saveCookiePreferences(allAccepted);
    setShowBanner(false);
    
    // Aplicar todas las cookies
    applyCookies(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    
    setCookiePreferences(onlyEssential);
    saveCookiePreferences(onlyEssential);
    setShowBanner(false);
    
    // Solo aplicar cookies esenciales
    applyCookies(onlyEssential);
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(cookiePreferences);
    setShowBanner(false);
    setShowPreferences(false);
    
    // Aplicar cookies según preferencias
    applyCookies(cookiePreferences);
  };

  const saveCookiePreferences = (preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
  };

  const applyCookies = (preferences) => {
    if (preferences.analytics) {
      // Habilitar Google Analytics
      enableGoogleAnalytics();
    }
    
    if (preferences.functional) {
      // Habilitar cookies de funcionalidad
      enableFunctionalCookies();
    }
    
    if (preferences.marketing) {
      // Habilitar cookies de marketing
      enableMarketingCookies();
    }
  };

  const enableGoogleAnalytics = () => {
    // Aquí se implementaría la lógica para habilitar Google Analytics
    console.log('Google Analytics habilitado');
  };

  const enableFunctionalCookies = () => {
    // Habilitar cookies de funcionalidad
    console.log('Cookies funcionales habilitadas');
  };

  const enableMarketingCookies = () => {
    // Habilitar cookies de marketing
    console.log('Cookies de marketing habilitadas');
  };

  const handleTogglePreference = (type) => {
    if (type === 'essential') return; // Las esenciales no se pueden desactivar
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner principal */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Texto del banner */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 Utilizamos cookies para mejorar tu experiencia
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Utilizamos cookies esenciales para el funcionamiento del sitio y cookies opcionales para análisis y funcionalidad. 
                Puedes gestionar tus preferencias en cualquier momento.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                <Link 
                  to="/cookies" 
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  Política de Cookies
                </Link>
                <span>•</span>
                <Link 
                  to="/politica-privacidad" 
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  Política de Privacidad
                </Link>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Personalizar
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                Rechazar Todo
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
              >
                Aceptar Todo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de preferencias */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  🍪 Configuración de Cookies
                </h2>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Descripción */}
              <p className="text-gray-600 mb-6">
                Puedes gestionar tus preferencias de cookies a continuación. Las cookies esenciales son necesarias 
                para el funcionamiento del sitio y no se pueden desactivar.
              </p>

              {/* Tipos de cookies */}
              <div className="space-y-4 mb-6">
                {/* Cookies Esenciales */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Cookies Esenciales</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Necesarias para el funcionamiento básico del sitio web. Incluyen autenticación, 
                        seguridad y preferencias básicas.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.essential}
                        disabled
                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="ml-2 text-xs text-gray-500">Siempre activas</span>
                    </div>
                  </div>
                </div>

                {/* Cookies Funcionales */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Cookies Funcionales</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Mejoran la funcionalidad recordando tus preferencias, filtros de búsqueda 
                        y configuraciones personalizadas.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.functional}
                        onChange={() => handleTogglePreference('functional')}
                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Cookies de Análisis */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Cookies de Análisis</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Nos ayudan a entender cómo usas el sitio para mejorar la experiencia. 
                        Incluyen Google Analytics y métricas de rendimiento.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.analytics}
                        onChange={() => handleTogglePreference('analytics')}
                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Cookies de Marketing */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">Cookies de Marketing</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Utilizadas para mostrar contenido relevante y medir la efectividad 
                        de nuestras campañas publicitarias.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={cookiePreferences.marketing}
                        onChange={() => handleTogglePreference('marketing')}
                        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Importante:</strong> Puedes cambiar estas preferencias en cualquier momento 
                      desde la configuración de tu navegador o contactándonos directamente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
                >
                  Guardar Preferencias
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
