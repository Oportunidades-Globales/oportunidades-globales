import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GoogleAds from './GoogleAds';

const Articulos = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  // Guardar posición de scroll cuando se navega a un artículo
  const handleNavigateToArticle = (articleId) => {
    setScrollPosition(window.scrollY);
    sessionStorage.setItem('articlesScrollPosition', window.scrollY.toString());
    navigate(`/articulo/${articleId}`);
  };

  // Restaurar posición de scroll cuando se regresa desde un artículo
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('articlesScrollPosition');
    if (savedPosition && location.pathname === '/articulos') {
      const position = parseInt(savedPosition, 10);
      setTimeout(() => {
        window.scrollTo(0, position);
        sessionStorage.removeItem('articlesScrollPosition');
      }, 100);
    }
  }, [location.pathname]);

  const articulos = [
    {
      id: 1,
      titulo: "15 Errores Críticos que Cometen los Estudiantes Latinoamericanos al Aplicar a Universidades Internacionales",
      resumen: "Análisis exhaustivo de los errores más comunes basado en datos de comités de admisión de universidades top. Incluye casos reales, estadísticas de rechazo y estrategias para evitarlos.",
      fecha: "2025-09-14",
      categoria: "Admisiones",
      tiempoLectura: "12 min",
      imagen: "/imagenes/Problemas.jpg"
    },
    {
      id: 2,
      titulo: "Guía Completa de Visas de Estudiante 2025: Estados Unidos, Canadá, Reino Unido y Australia",
      resumen: "Manual actualizado con todos los requisitos, procesos y consejos para obtener visas de estudiante en los principales destinos académicos. Incluye cambios recientes en políticas migratorias.",
      fecha: "2025-09-14",
      categoria: "Visas",
      tiempoLectura: "10 min",
      imagen: "/imagenes/visa.jpg"
    },
    {
      id: 3,
      titulo: "Costos Reales de Estudiar en el Extranjero 2025: Análisis Comparativo por País",
      resumen: "Estudio detallado de costos de vida, matrícula y gastos adicionales en 15 países principales. Incluye calculadora personalizada y estrategias de financiamiento.",
      fecha: "2025-09-14",
      categoria: "Finanzas",
      tiempoLectura: "12 min",
      imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      titulo: "Cómo Escribir un Personal Statement que Impresione a las Universidades Top",
      resumen: "Guía paso a paso con ejemplos reales de personal statements exitosos de estudiantes que fueron admitidos en Harvard, MIT, Oxford y Stanford. Incluye plantillas y consejos de redacción.",
      fecha: "2025-09-14",
      categoria: "Aplicaciones",
      tiempoLectura: "11 min",
      imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      titulo: "Recursos Educativos Abiertos (OER): Tu Arma Secreta para Preparar Aplicaciones Internacionales",
      resumen: "Catálogo completo de cursos gratuitos de universidades top, herramientas de aprendizaje y materiales de estudio que pueden fortalecer tu perfil académico sin costo adicional.",
      fecha: "2025-09-14",
      categoria: "Recursos",
      tiempoLectura: "10 min",
      imagen: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      titulo: "Networking Académico Internacional: Cómo Construir Conexiones que Cambien tu Carrera",
      resumen: "Estrategias probadas para establecer contactos con profesores, investigadores y estudiantes de universidades internacionales. Incluye templates de emails y consejos de seguimiento.",
      fecha: "2025-09-14",
      categoria: "Networking",
      tiempoLectura: "11 min",
      imagen: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      titulo: "Ranking Mundial de Universidades 2025: Análisis Detallado por Área de Estudio",
      resumen: "Análisis completo del QS World University Rankings y Times Higher Education 2025, con rankings específicos por disciplinas y consejos para elegir la universidad ideal según tu campo.",
      fecha: "2025-09-14",
      categoria: "Rankings",
      tiempoLectura: "12 min",
      imagen: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      titulo: "Becas Completas vs Parciales: Análisis Costo-Beneficio para Estudiantes Latinoamericanos",
      resumen: "Comparación detallada entre diferentes tipos de financiamiento, incluyendo becas completas, parciales, préstamos estudiantiles y oportunidades de trabajo-estudio.",
      fecha: "2025-09-14",
      categoria: "Becas",
      tiempoLectura: "10 min",
      imagen: "/imagenes/becas.jpg"
    },
    {
      id: 9,
      titulo: "Experiencia de Estudiantes Latinoamericanos en Universidades Top: Testimonios Reales",
      resumen: "Colección de entrevistas con estudiantes latinoamericanos que actualmente estudian en universidades de élite. Incluye consejos prácticos, desafíos enfrentados y lecciones aprendidas.",
      fecha: "2025-09-14",
      categoria: "Testimonios",
      tiempoLectura: "12 min",
      imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      titulo: "Requisitos de Idiomas para Estudiar en el Extranjero: Guía Completa por País",
      resumen: "Tabla comparativa actualizada de certificaciones de idiomas aceptadas por universidades de diferentes países, con datos oficiales de cada institución y consejos de preparación.",
      fecha: "2025-09-14",
      categoria: "Idiomas",
      tiempoLectura: "12 min",
      imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      titulo: "Voluntariado Internacional: Guía de Seguridad y Preparación 2025",
      resumen: "Consejos de seguridad, documentación necesaria y preparación cultural para voluntariados internacionales, basado en experiencias reales y mejores prácticas de organizaciones reconocidas.",
      fecha: "2025-09-14",
      categoria: "Voluntariado",
      tiempoLectura: "11 min",
      imagen: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      titulo: "Cómo Preparar tu CV Internacional: Formato Europass y Alternativas",
      resumen: "Guía completa para crear un CV que destaque en aplicaciones internacionales, incluyendo formato Europass, CV americano y consejos específicos por región y campo de estudio.",
      fecha: "2025-09-14",
      categoria: "Aplicaciones",
      tiempoLectura: "9 min",
      imagen: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>

      {/* Anuncio superior - temporalmente oculto hasta autorización de Google Ads
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center">
          <GoogleAds 
            adSlot="1234567890" 
            adFormat="auto"
            className="max-w-full"
          />
        </div>
      </div>
      */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Artículos y Guías Especializadas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contenido educativo respaldado por fuentes oficiales y experiencias reales de estudiantes internacionales
          </p>
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos && articulos.length > 0 ? articulos.map((articulo) => (
            <article 
              key={articulo.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className="aspect-w-16 aspect-h-9 cursor-pointer"
                onClick={() => handleNavigateToArticle(articulo.id)}
              >
                <img 
                  src={articulo.imagen} 
                  alt={articulo.titulo}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {articulo.categoria}
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {articulo.tiempoLectura}
                  </span>
                </div>
                
                <h2 
                  className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2 cursor-pointer hover:text-primary-600 transition-colors duration-200"
                  onClick={() => handleNavigateToArticle(articulo.id)}
                >
                  {articulo.titulo}
                </h2>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {articulo.resumen}
                </p>
                
                
                {/* Botón siempre visible */}
                <div className="mt-auto">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Botón clickeado para artículo:', articulo.id);
                      handleNavigateToArticle(articulo.id);
                    }}
                    className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm flex items-center justify-center group cursor-pointer"
                    style={{ pointerEvents: 'auto' }}
                  >
                    Leer más
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  <div className="text-center mt-2">
                    <span className="text-xs text-gray-500">
                      {new Date(articulo.fecha).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          )) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No hay artículos disponibles</p>
            </div>
          )}
        </div>

        {/* Anuncio central - temporalmente oculto hasta autorización de Google Ads
        <div className="mt-12 flex justify-center">
          <GoogleAds 
            adSlot="1234567891" 
            adFormat="auto"
            className="max-w-full"
          />
        </div>
        */}

        {/* Recuadro de redes sociales */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold text-center mb-4">¿Te interesa este artículo?</h2>
          <p className="text-blue-100 text-center mb-6">Mantente al día con los mejores artículos. Síguenos en nuestras redes sociales para contenido exclusivo.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281H7.721c-.49 0-.875-.385-.875-.875s.385-.875.875-.875h8.558c.49 0 .875.385.875.875s-.385.875-.875.875z"/>
              </svg>
              Instagram
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              TikTok
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
            <a 
              href="mailto:contacto@ejemplo.com" 
              className="flex items-center px-6 py-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-200 backdrop-blur-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Gmail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articulos;
