import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const articulos = [
    {
      id: 1,
      titulo: "Guía Completa para Aplicar a Becas Internacionales: Paso a Paso",
      resumen: "Descubre todos los secretos para postularte exitosamente a becas en el extranjero. Desde la preparación de documentos hasta la entrevista final.",
      fecha: "2025-01-15",
      categoria: "Becas",
      imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      lectura: "8 min"
    },
    {
      id: 2,
      titulo: "10 Errores Comunes al Aplicar a Voluntariados Internacionales",
      resumen: "Evita estos errores frecuentes que pueden arruinar tu aplicación a programas de voluntariado en el extranjero.",
      fecha: "2025-01-12",
      categoria: "Voluntariados",
      imagen: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      lectura: "6 min"
    },
    {
      id: 3,
      titulo: "Cómo Preparar tu CV para Trabajos en el Extranjero",
      resumen: "Aprende a adaptar tu currículum para el mercado laboral internacional y aumentar tus posibilidades de éxito.",
      fecha: "2025-01-10",
      categoria: "Trabajos",
      imagen: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      lectura: "7 min"
    },
    {
      id: 4,
      titulo: "Requisitos de Idiomas para Estudiar en el Extranjero",
      resumen: "Todo lo que necesitas saber sobre certificaciones de idiomas, exámenes oficiales y niveles requeridos.",
      fecha: "2025-01-08",
      categoria: "Educación",
      imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      lectura: "9 min"
    },
    {
      id: 5,
      titulo: "Presupuesto para Estudiar en el Extranjero: Guía Financiera",
      resumen: "Calcula cuánto dinero necesitas para estudiar en diferentes países y cómo financiar tu educación internacional.",
      fecha: "2025-01-05",
      categoria: "Finanzas",
      imagen: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      lectura: "10 min"
    },
    {
      id: 6,
      titulo: "Visa de Estudiante: Documentos y Proceso Completo",
      resumen: "Guía detallada sobre cómo obtener tu visa de estudiante para diferentes países y qué documentos necesitas.",
      fecha: "2025-01-03",
      categoria: "Visas",
      imagen: "https://images.unsplash.com/photo-1582213782179-e0d6fec98f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      lectura: "12 min"
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
            Blog y Artículos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guías completas, consejos prácticos y artículos valiosos para tu aventura internacional
          </p>
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos.map((articulo) => (
            <article 
              key={articulo.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={articulo.imagen} 
                  alt={articulo.titulo}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {articulo.categoria}
                  </span>
                  <span className="text-sm text-gray-500">{articulo.lectura}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {articulo.titulo}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {articulo.resumen}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(articulo.fecha).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Leer más →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres más contenido?
            </h3>
            <p className="text-primary-100 mb-6 text-lg">
              Suscríbete a nuestro newsletter para recibir las últimas guías y oportunidades
            </p>
            <button 
              onClick={() => navigate('/')}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
