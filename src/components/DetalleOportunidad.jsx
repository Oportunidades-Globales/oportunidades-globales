import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { oportunidades } from '../data/oportunidades';
// import { contactConfig } from '../config/contact';
import ContactoRedes from './ContactoRedes';
import GoogleAds from './GoogleAds';

const DetalleOportunidad = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [imagenModal, setImagenModal] = useState({ 
    abierto: false, 
    imagen: '', 
    titulo: '', 
    indiceActual: 0,
    imagenes: []
  });

  // Encontrar la oportunidad por ID
  const oportunidad = oportunidades.find(op => op.id === parseInt(id));

  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Función para regresar a oportunidades manteniendo la posición
  const handleVolverAOportunidades = () => {
    // Guardar la posición actual antes de navegar
    const savedPosition = sessionStorage.getItem('oportunidadesScrollPosition');
    if (savedPosition) {
      navigate('/');
      // Restaurar posición después de un pequeño delay
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }, 100);
    } else {
      navigate('/');
    }
  };

  // Función para cerrar el modal
  const cerrarImagenModal = useCallback(() => {
    setImagenModal({ abierto: false, imagen: '', titulo: '', indiceActual: 0, imagenes: [] });
  }, []);

  // Función para cerrar con tecla Escape y navegación con flechas
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!imagenModal.abierto) return;
      
      switch (e.key) {
        case 'Escape':
          cerrarImagenModal();
          break;
        case 'ArrowLeft':
          navegarImagen('anterior');
          break;
        case 'ArrowRight':
          navegarImagen('siguiente');
          break;
        default:
          break;
      }
    };

    if (imagenModal.abierto) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Restaurar scroll del body
    };
  }, [imagenModal.abierto, cerrarImagenModal]);

  // Función para navegar entre imágenes
  const navegarImagen = useCallback((direccion) => {
    if (!imagenModal.imagenes || imagenModal.imagenes.length <= 1) return;
    
    let nuevoIndice = imagenModal.indiceActual;
    
    if (direccion === 'anterior') {
      nuevoIndice = nuevoIndice > 0 ? nuevoIndice - 1 : imagenModal.imagenes.length - 1;
    } else if (direccion === 'siguiente') {
      nuevoIndice = nuevoIndice < imagenModal.imagenes.length - 1 ? nuevoIndice + 1 : 0;
    }
    
    setImagenModal(prev => ({
      ...prev,
      indiceActual: nuevoIndice,
      imagen: prev.imagenes[nuevoIndice],
      titulo: `Imagen ${nuevoIndice + 1}`
    }));
  }, [imagenModal.imagenes, imagenModal.indiceActual]);

  if (!oportunidad) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oportunidad no encontrada</h2>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  // Funciones para los botones de acción
  const handleAplicarAhora = () => {
    if (oportunidad.sitioWeb) {
      window.open(oportunidad.sitioWeb, '_blank');
    }
  };

  // Función para abrir el modal de imagen
  const abrirImagenModal = (imagen, titulo, indice = 0) => {
    const imagenes = oportunidad.imagenes || [];
    setImagenModal({ 
      abierto: true, 
      imagen, 
      titulo, 
      indiceActual: indice,
      imagenes 
    });
  };

  // Función para cerrar el modal al hacer click en el fondo
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      cerrarImagenModal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleVolverAOportunidades}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Oportunidades
            </button>
            

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Información principal */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Imagen principal */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={oportunidad.imagen}
              alt={oportunidad.titulo}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Badge de categoría */}
            <div className="absolute top-6 left-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                oportunidad.categoria === 'Beca' ? 'bg-blue-100 text-blue-800' :
                oportunidad.categoria === 'Voluntariado' ? 'bg-green-100 text-green-800' :
                oportunidad.categoria === 'Trabajo' ? 'bg-purple-100 text-purple-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {oportunidad.categoria}
              </span>
            </div>

            {/* País */}
            <div className="absolute top-6 right-6">
              <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-gray-700">{oportunidad.pais}</span>
              </div>
            </div>

            {/* Título sobre la imagen */}
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-4xl font-bold text-white mb-2">
                {oportunidad.titulo}
              </h1>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-8">
            {/* Descripción */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Descripción</h3>
              <div className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                {oportunidad.descripcion}
              </div>
            </div>

            {/* Detalles importantes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-semibold text-gray-900">Duración</h4>
                </div>
                <p className="text-gray-600">{oportunidad.duracion}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h4 className="font-semibold text-gray-900">Fecha Límite</h4>
                </div>
                <p className="text-gray-600">
                  {(() => {
                    try {
                      // Parsear la fecha manualmente para evitar problemas de zona horaria
                      const [year, month, day] = oportunidad.fechaLimite.split('-').map(num => parseInt(num, 10));
                      const date = new Date(year, month - 1, day); // month - 1 porque los meses van de 0-11
                      return date.toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      });
                    } catch (error) {
                      return 'Fecha no disponible';
                    }
                  })()}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 className="font-semibold text-gray-900">País</h4>
                </div>
                <p className="text-gray-600">{oportunidad.pais}</p>
              </div>
            </div>

            {/* Sección de multimedia */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multimedia</h3>
              
              {/* Imágenes */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Imágenes</h4>
                                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {oportunidad.imagenes && oportunidad.imagenes.map((imagen, index) => (
                     <img 
                       key={index}
                       src={imagen} 
                       alt={`${oportunidad.titulo} - Imagen ${index + 1}`}
                       className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
                       onClick={() => abrirImagenModal(imagen, `Imagen ${index + 1}`, index)}
                     />
                   ))}
                 </div>
              </div>

              {/* Videos */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Videos</h4>
                {oportunidad.videos && oportunidad.videos.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {oportunidad.videos.map((video, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            video.plataforma === 'TikTok' ? 'bg-black text-white' : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          }`}>
                            {video.plataforma === 'TikTok' ? (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.05-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                              </svg>
                            )}
                          </div>
                          <span className="font-medium text-gray-900">{video.titulo}</span>
                        </div>
                        <button
                          onClick={() => window.open(video.url, '_blank')}
                          className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
                        >
                          <span>Ver en {video.plataforma}</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No hay videos disponibles</p>
                )}
              </div>
            </div>

                         {/* Botones de acción */}
             <div className="w-full">
               <button 
                 onClick={handleAplicarAhora}
                 className="btn-primary w-full flex items-center justify-center py-3"
               >
                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                 </svg>
                 Aplicar Ahora
               </button>
             </div>

             {/* Anuncio en página de detalle */}
             <div className="mt-8 flex justify-center">
               <GoogleAds 
                 adSlot="0987654321" 
                 adFormat="auto"
                 className="max-w-full"
               />
             </div>
          </div>
        </div>

        {/* Sección de contacto y redes sociales */}
        <ContactoRedes 
          className="mt-8"
          titulo="¿Te interesa esta oportunidad?"
        />
      </div>

                    {/* Modal de imagen */}
        {imagenModal.abierto && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={imagenModal.imagen}
                alt={imagenModal.titulo}
                className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
                style={{
                  maxWidth: '95vw',
                  maxHeight: '95vh',
                  width: 'auto',
                  height: 'auto'
                }}
              />
              
              {/* Botón de cerrar */}
              <button
                onClick={cerrarImagenModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                title="Cerrar (ESC)"
              >
                &times;
              </button>

              {/* Contador de imágenes */}
              {imagenModal.imagenes && imagenModal.imagenes.length > 1 && (
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  {imagenModal.indiceActual + 1} / {imagenModal.imagenes.length}
                </div>
              )}

              {/* Flecha izquierda */}
              {imagenModal.imagenes && imagenModal.imagenes.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navegarImagen('anterior');
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                  title="Imagen anterior (←)"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Flecha derecha */}
              {imagenModal.imagenes && imagenModal.imagenes.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navegarImagen('siguiente');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-10"
                  title="Imagen siguiente (→)"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

            </div>
          </div>
        )}
    </div>
  );
};

export default DetalleOportunidad;
