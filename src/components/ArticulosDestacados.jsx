import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticulosDestacados = () => {
  const navigate = useNavigate();
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
      tiempoLectura: "9 min",
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
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Artículos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contenido original y detallado creado por nuestro equipo de expertos en educación internacional
          </p>
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos.map((articulo) => (
            <article 
              key={articulo.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="aspect-w-16 aspect-h-9 cursor-pointer"
                onClick={() => navigate(`/articulo/${articulo.id}`)}
              >
                <img 
                  src={articulo.imagen} 
                  alt={articulo.titulo}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {articulo.categoria}
                  </span>
                  <span className="text-sm text-gray-500">{articulo.tiempoLectura}</span>
                </div>
                <h3 
                  className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 cursor-pointer hover:text-primary-600 transition-colors duration-200"
                  onClick={() => navigate(`/articulo/${articulo.id}`)}
                >
                  {articulo.titulo}
                </h3>
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
                  <button 
                    onClick={() => navigate(`/articulo/${articulo.id}`)}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Leer artículo →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ArticulosDestacados;
