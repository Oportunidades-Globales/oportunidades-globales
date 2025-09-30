import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GoogleAds from './GoogleAds';
import { getArticulosLista } from '../data/articulos';
import { AD_SLOTS } from '../config/adsense';

const Articulos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  // Guardar posición de scroll cuando se navega a un artículo
  const handleNavigateToArticle = (articleId) => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);
    sessionStorage.setItem('articlesScrollPosition', currentPosition.toString());
    sessionStorage.setItem('cameFromArticle', 'true');
    sessionStorage.setItem('articleId', articleId.toString());
    console.log('Guardando posición de scroll de artículos:', currentPosition, 'para artículo:', articleId);
    navigate(`/articulo/${articleId}`);
  };

  // Función para navegar al inicio limpiando sessionStorage
  const handleNavigateToHome = () => {
    // Limpiar sessionStorage de artículos
    sessionStorage.removeItem('articlesScrollPosition');
    sessionStorage.removeItem('cameFromArticle');
    sessionStorage.removeItem('articleId');
    navigate('/');
  };

  // Sistema simplificado de restauración de scroll
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('articlesScrollPosition');
    const cameFromArticle = sessionStorage.getItem('cameFromArticle');
    const articleId = sessionStorage.getItem('articleId');
    
    if (savedPosition && cameFromArticle && location.pathname === '/articulos') {
      const position = parseInt(savedPosition, 10);
      console.log(`Restaurando scroll para artículo ${articleId}, posición: ${position}`);
      
      // Función simple de restauración
      const restoreScroll = () => {
        window.scrollTo(0, position);
        console.log(`Scroll restaurado a posición: ${position}`);
        
        // Limpiar sessionStorage
        sessionStorage.removeItem('articlesScrollPosition');
        sessionStorage.removeItem('cameFromArticle');
        sessionStorage.removeItem('articleId');
      };

      // Restaurar inmediatamente
      restoreScroll();
      
      // También restaurar después de un delay para asegurar que el contenido esté cargado
      setTimeout(restoreScroll, 100);
      setTimeout(restoreScroll, 300);
      
    } else if (location.pathname === '/articulos') {
      // Si se navega directamente a /articulos, ir al principio
      console.log('Navegando directamente a artículos, scroll al inicio');
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Efecto adicional para manejar el botón atrás del navegador
  useEffect(() => {
    const handlePopState = () => {
      const savedPosition = sessionStorage.getItem('articlesScrollPosition');
      const cameFromArticle = sessionStorage.getItem('cameFromArticle');
      
      if (savedPosition && cameFromArticle) {
        const position = parseInt(savedPosition, 10);
        console.log('Botón atrás detectado, restaurando scroll a:', position);
        
        setTimeout(() => {
          window.scrollTo(0, position);
          sessionStorage.removeItem('articlesScrollPosition');
          sessionStorage.removeItem('cameFromArticle');
          sessionStorage.removeItem('articleId');
        }, 50);
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Obtener artículos desde la base de datos centralizada
  const articulos = getArticulosLista();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación - fijo en la parte superior */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Botón de navegación a la izquierda (visible en móvil y desktop) */}
            <button 
              onClick={handleNavigateToHome}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Volver al Inicio</span>
              <span className="sm:hidden">Volver</span>
            </button>

            {/* En móvil: Logo y branding a la derecha */}
            <button 
              onClick={handleNavigateToHome}
              className="flex sm:hidden items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo2.png" 
                alt="Oportunidades Globales" 
                className="w-8 h-8 rounded-lg"
              />
              <h1 className="text-lg font-bold text-gray-900">Oportunidades Globales</h1>
            </button>

            {/* En desktop: Logo centrado y clickeable */}
            <button 
              onClick={handleNavigateToHome}
              className="hidden sm:flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo2.png" 
                alt="Oportunidades Globales" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg"
              />
              <h1 className="text-xl font-bold text-gray-900">Oportunidades Globales</h1>
            </button>

            {/* En desktop: Espacio vacío para balancear el layout */}
            <div className="hidden sm:block w-32"></div>
          </div>
        </div>
      </div>

      {/* Espacio para compensar el header fijo */}
      <div className="h-20"></div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Artículos y Guías
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos educativos y guías especializadas para estudiantes latinoamericanos que buscan oportunidades internacionales
          </p>
        </div>

        {/* Anuncio superior */}
        <div className="flex justify-center mb-8">
          <GoogleAds 
            adSlot={AD_SLOTS.ARTICLES_TOP} 
            adFormat="auto"
            fullWidthResponsive={true}
          />
        </div>

        {/* Grid de artículos - Primera mitad */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {articulos.slice(0, Math.ceil(articulos.length / 2)).map((articulo) => (
            <article
              key={articulo.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => handleNavigateToArticle(articulo.id)}
            >
              {/* Imagen del artículo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/imagenes/Problemas.jpg'; // Imagen de fallback
                  }}
                />
                {/* Overlay con categoría */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {articulo.categoria}
                  </span>
                </div>
                {/* Overlay con tiempo de lectura */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {articulo.tiempoLectura}
                  </span>
                </div>
              </div>

              {/* Contenido del artículo */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {articulo.titulo}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {articulo.resumen}
                </p>
                
                {/* Footer del artículo */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{articulo.fecha}</span>
                  <span className="text-primary-500 font-medium group-hover:text-primary-600">
                    Leer más →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Anuncio en el medio */}
        <div className="flex justify-center mb-8">
          <GoogleAds 
            adSlot={AD_SLOTS.ARTICLES_MIDDLE} 
            adFormat="auto"
            fullWidthResponsive={true}
          />
        </div>

        {/* Grid de artículos - Segunda mitad */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articulos.slice(Math.ceil(articulos.length / 2)).map((articulo) => (
            <article
              key={articulo.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => handleNavigateToArticle(articulo.id)}
            >
              {/* Imagen del artículo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/imagenes/Problemas.jpg'; // Imagen de fallback
                  }}
                />
                {/* Overlay con categoría */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {articulo.categoria}
                  </span>
                </div>
                {/* Overlay con tiempo de lectura */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    {articulo.tiempoLectura}
                  </span>
                </div>
              </div>

              {/* Contenido del artículo */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {articulo.titulo}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {articulo.resumen}
                </p>
                
                {/* Footer del artículo */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{articulo.fecha}</span>
                  <span className="text-primary-500 font-medium group-hover:text-primary-600">
                    Leer más →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Anuncio inferior */}
        <div className="flex justify-center mb-8">
          <GoogleAds 
            adSlot={AD_SLOTS.ARTICLES_BOTTOM} 
            adFormat="auto"
            fullWidthResponsive={true}
          />
        </div>

        {/* Sección de redes sociales */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-4 sm:p-6 text-white max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-bold mb-3 text-center">¿Te interesa este artículo?</h3>
          <p className="text-blue-100 mb-4 text-sm sm:text-base text-center">Mantente al día con los mejores artículos. Síguenos en nuestras redes sociales para contenido exclusivo.</p>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 sm:px-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm flex-shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm sm:text-base">Facebook</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 sm:px-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm flex-shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721c-.49 0-.875-.385-.875-.875s.385-.875.875-.875h8.558c.49 0 .875.385.875.875s-.385.875-.875.875z"/>
              </svg>
              <span className="text-sm sm:text-base">Instagram</span>
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 sm:px-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm flex-shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span className="text-sm sm:text-base">TikTok</span>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 sm:px-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm flex-shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-sm sm:text-base">YouTube</span>
            </a>
            <a 
              href="mailto:contacto@ejemplo.com" 
              className="flex items-center px-3 py-2 sm:px-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm flex-shrink-0"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="text-sm sm:text-base">Gmail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulos;