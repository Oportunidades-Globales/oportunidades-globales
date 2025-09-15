import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recursos = () => {
  const navigate = useNavigate();

  const recursos = [
    {
      id: 1,
      titulo: "Plantilla de CV Internacional - Formato Europass 2025",
      descripcion: "Plantilla profesional basada en el formato Europass oficial, adaptada para aplicaciones a universidades europeas. Incluye secciones específicas para estudiantes internacionales y ejemplos de redacción efectiva.",
      tipo: "Plantilla",
      descarga: "PDF",
      icono: "📄",
      fuente: "Europass - Comisión Europea",
      descargas: "3,247"
    },
    {
      id: 2,
      titulo: "Guía Completa: Personal Statement y Carta de Motivación",
      descripcion: "Manual detallado con ejemplos reales de personal statements exitosos de universidades top. Incluye estructura recomendada, consejos de redacción y errores comunes a evitar.",
      tipo: "Guía",
      descarga: "PDF",
      icono: "✍️",
      fuente: "Guías oficiales de Harvard, MIT y Oxford",
      descargas: "4,156"
    },
    {
      id: 3,
      titulo: "Checklist de Documentos por País - Actualizado 2025",
      descripcion: "Lista completa y actualizada de documentos requeridos para 30 países, incluyendo requisitos específicos de visa, traducciones certificadas y apostillas. Basado en información oficial de embajadas.",
      tipo: "Lista",
      descarga: "Excel",
      icono: "📋",
      fuente: "Embajadas y Consulados Oficiales",
      descargas: "5,403"
    },
    {
      id: 4,
      titulo: "Calculadora de Costos de Vida por Ciudad Universitaria",
      descripcion: "Herramienta interactiva con datos oficiales de costos de vida en 60+ ciudades universitarias principales. Actualizada con precios 2025 y conversiones de moneda en tiempo real.",
      tipo: "Herramienta",
      descarga: "Online",
      icono: "🧮",
      fuente: "Numbeo + Datos oficiales de gobiernos",
      descargas: "7,891"
    },
    {
      id: 5,
      titulo: "Guía de Entrevistas para Becas y Admisiones Internacionales",
      descripcion: "Manual completo con preguntas frecuentes, técnicas de respuesta, simulacros de entrevistas y consejos basados en experiencias reales de ex-becarios de universidades top.",
      tipo: "Guía",
      descarga: "PDF",
      icono: "🎤",
      fuente: "Testimonios verificados de ex-becarios",
      descargas: "3,634"
    },
    {
      id: 6,
      titulo: "Diccionario de Términos Académicos Internacionales",
      descripcion: "Glosario completo de 600+ términos académicos en inglés, francés y alemán, con definiciones, contexto de uso y ejemplos prácticos para aplicaciones universitarias.",
      tipo: "Glosario",
      descarga: "PDF",
      icono: "📚",
      fuente: "Oxford Dictionary + fuentes académicas oficiales",
      descargas: "2,487"
    },
    {
      id: 7,
      titulo: "Plantilla de Carta de Recomendación Académica",
      descripcion: "Formato profesional y guía completa para que tus profesores escriban cartas de recomendación efectivas. Incluye ejemplos específicos por área de estudio y nivel académico.",
      tipo: "Plantilla",
      descarga: "Word",
      icono: "📝",
      fuente: "Mejores prácticas de universidades top",
      descargas: "4,245"
    },
    {
      id: 8,
      titulo: "Base de Datos de Becas Internacionales 2025",
      descripcion: "Base de datos actualizada con 500+ oportunidades de financiamiento, enlaces directos a convocatorias oficiales, fechas límite y requisitos específicos por país y universidad.",
      tipo: "Base de Datos",
      descarga: "Excel",
      icono: "💰",
      fuente: "Gobiernos y organizaciones oficiales",
      descargas: "8,234"
    },
    {
      id: 9,
      titulo: "Guía de Preparación Pre-Viaje para Estudiantes Internacionales",
      descripcion: "Lista completa y detallada de preparativos: seguros médicos, documentación, alojamiento, transporte, apertura de cuentas bancarias y primeros días en el país destino.",
      tipo: "Guía",
      descarga: "PDF",
      icono: "✈️",
      fuente: "Embajadas + experiencias de estudiantes",
      descargas: "3,456"
    },
    {
      id: 10,
      titulo: "Guía de Recursos Educativos Abiertos (OER) para Estudiantes",
      descripcion: "Catálogo curado de recursos educativos abiertos de universidades top como MIT, Harvard y Stanford. Incluye cursos gratuitos, materiales de estudio y herramientas de aprendizaje.",
      tipo: "Catálogo",
      descarga: "Online",
      icono: "🌐",
      fuente: "MIT OpenCourseWare, HarvardX, Stanford Online",
      descargas: "6,789"
    },
    {
      id: 11,
      titulo: "Plantilla de Portafolio Académico Digital",
      descripcion: "Plantilla profesional para crear tu portafolio académico digital. Incluye secciones para proyectos, investigaciones, logros académicos y experiencia internacional.",
      tipo: "Plantilla",
      descarga: "HTML/CSS",
      icono: "💻",
      fuente: "Mejores prácticas de universidades internacionales",
      descargas: "2,345"
    },
    {
      id: 12,
      titulo: "Guía de Networking Académico Internacional",
      descripcion: "Manual completo para establecer conexiones académicas internacionales: cómo contactar profesores, participar en conferencias virtuales y construir una red profesional global.",
      tipo: "Guía",
      descarga: "PDF",
      icono: "🤝",
      fuente: "Consejos de académicos internacionales",
      descargas: "1,987"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recursos Gratuitos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas, plantillas y guías que te ayudarán a preparar tu aplicación internacional
          </p>
        </div>

        {/* Grid de recursos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recursos.map((recurso) => (
            <div 
              key={recurso.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4 flex-shrink-0">{recurso.icono}</div>
                <div className="flex-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {recurso.tipo}
                  </span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
                {recurso.titulo}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                {recurso.descripcion}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {recurso.descarga}
                  </span>
                  <span className="text-gray-500 font-medium">
                    {recurso.descargas} descargas
                  </span>
                </div>
                <div className="flex items-start text-xs text-gray-500">
                  <svg className="w-3 h-3 mr-1 mt-0.5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="line-clamp-2">{recurso.fuente}</span>
                </div>
              </div>
              
              <button 
                onClick={() => navigate(`/recursos/${recurso.id}`)}
                className="w-full bg-primary-600 text-white px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-sm flex items-center justify-center group"
              >
                Ver Detalles
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Sección de metodología */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Nuestra Metodología de Creación de Recursos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fuentes Oficiales</h3>
              <p className="text-gray-600 text-sm">
                Todos nuestros recursos están basados en fuentes oficiales de gobiernos, universidades y organizaciones reconocidas internacionalmente.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Validación por Expertos</h3>
              <p className="text-gray-600 text-sm">
                Cada recurso es revisado por ex-becarios y profesionales con experiencia directa en los procesos que documentamos.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Actualización Constante</h3>
              <p className="text-gray-600 text-sm">
                Mantenemos nuestros recursos actualizados con los últimos cambios en requisitos y procesos oficiales.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recursos;
