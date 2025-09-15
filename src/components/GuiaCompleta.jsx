import React from 'react';
import { useNavigate } from 'react-router-dom';

const GuiaCompleta = () => {
  const navigate = useNavigate();

  const secciones = [
    {
      id: 1,
      titulo: "Preparación Inicial",
      descripcion: "Todo lo que necesitas saber antes de comenzar tu búsqueda de oportunidades internacionales",
      pasos: [
        "Definir tus objetivos académicos y profesionales",
        "Evaluar tu nivel de idiomas actual",
        "Preparar documentos básicos (CV, cartas de recomendación)",
        "Investigar países y universidades de interés",
        "Calcular presupuesto disponible"
      ]
    },
    {
      id: 2,
      titulo: "Búsqueda de Oportunidades",
      descripcion: "Cómo encontrar las mejores oportunidades que se adapten a tu perfil",
      pasos: [
        "Utilizar bases de datos oficiales de becas",
        "Seguir organizaciones gubernamentales en redes sociales",
        "Contactar directamente con universidades",
        "Participar en ferias de educación internacional",
        "Unirse a comunidades de estudiantes internacionales"
      ]
    },
    {
      id: 3,
      titulo: "Proceso de Aplicación",
      descripcion: "Guía paso a paso para completar exitosamente tus aplicaciones",
      pasos: [
        "Leer cuidadosamente todos los requisitos",
        "Preparar documentos específicos para cada programa",
        "Escribir cartas de motivación personalizadas",
        "Solicitar cartas de recomendación con anticipación",
        "Completar formularios online con precisión"
      ]
    },
    {
      id: 4,
      titulo: "Preparación para Entrevistas",
      descripcion: "Consejos para destacar en entrevistas de becas y programas",
      pasos: [
        "Investigar sobre la institución y el programa",
        "Preparar respuestas a preguntas comunes",
        "Practicar presentaciones en el idioma requerido",
        "Preparar preguntas inteligentes para el entrevistador",
        "Simular entrevistas con amigos o mentores"
      ]
    },
    {
      id: 5,
      titulo: "Proceso de Visa",
      descripcion: "Todo sobre visas de estudiante y permisos de trabajo",
      pasos: [
        "Identificar el tipo de visa requerida",
        "Recopilar documentos necesarios",
        "Programar cita en el consulado",
        "Preparar para la entrevista consular",
        "Mantener documentos actualizados"
      ]
    },
    {
      id: 6,
      titulo: "Preparación para el Viaje",
      descripcion: "Últimos pasos antes de comenzar tu aventura internacional",
      pasos: [
        "Reservar vuelos y alojamiento temporal",
        "Obtener seguro médico internacional",
        "Abrir cuenta bancaria en el país destino",
        "Preparar documentación académica",
        "Contactar con otros estudiantes internacionales"
      ]
    }
  ];

  const consejos = [
    {
      titulo: "Comienza Temprano",
      descripcion: "La mayoría de procesos de aplicación toman entre 6-12 meses. Comienza tu preparación con al menos un año de anticipación."
    },
    {
      titulo: "Personaliza Cada Aplicación",
      descripcion: "No uses la misma carta de motivación para todos los programas. Adapta tu aplicación a los valores y objetivos específicos de cada institución."
    },
    {
      titulo: "Mantén un Portafolio Organizado",
      descripcion: "Crea un sistema para organizar todos tus documentos, fechas límite y comunicaciones con instituciones."
    },
    {
      titulo: "Desarrolla tu Red Profesional",
      descripcion: "Conecta con ex-becarios, profesores y profesionales en tu campo de interés. LinkedIn es una herramienta invaluable."
    },
    {
      titulo: "Practica Idiomas Constantemente",
      descripcion: "Incluso si ya tienes el nivel requerido, mantén y mejora tus habilidades lingüísticas. Son cruciales para el éxito."
    },
    {
      titulo: "Mantén un Plan B",
      descripcion: "Aplica a múltiples programas y países. Tener opciones te dará más tranquilidad y oportunidades de éxito."
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
            Guía Completa para Oportunidades Internacionales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas saber para conseguir becas, voluntariados y trabajos en el extranjero. 
            Una guía paso a paso creada por expertos en educación internacional.
          </p>
        </div>

        {/* Introducción */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-4">¿Por qué esta guía?</h2>
          <p className="text-lg leading-relaxed mb-4">
            Después de ayudar a más de 15,000 estudiantes a conseguir oportunidades internacionales, 
            hemos identificado los patrones comunes de éxito y los errores más frecuentes. Esta guía 
            condensa toda esa experiencia en un recurso práctico y actualizado.
          </p>
          <p className="text-lg leading-relaxed">
            Cada sección incluye consejos específicos, ejemplos reales y recursos adicionales que 
            te ayudarán a maximizar tus posibilidades de éxito.
          </p>
        </div>

        {/* Secciones principales */}
        <div className="space-y-12 mb-16">
          {secciones.map((seccion, index) => (
            <div key={seccion.id} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {seccion.titulo}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {seccion.descripcion}
                  </p>
                  <div className="space-y-3">
                    {seccion.pasos.map((paso, pasoIndex) => (
                      <div key={pasoIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{paso}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consejos adicionales */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Consejos de Expertos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consejos.map((consejo, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {consejo.titulo}
                </h3>
                <p className="text-gray-600">
                  {consejo.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recursos adicionales */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesitas más ayuda?
          </h2>
          <p className="text-primary-100 mb-6 text-lg">
            Accede a nuestros artículos y guías especializadas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/articulos')}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Ver Artículos
            </button>
            <button 
              onClick={() => navigate('/blog')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Leer Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaCompleta;
