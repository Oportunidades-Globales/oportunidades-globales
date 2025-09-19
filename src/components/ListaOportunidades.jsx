import React, { useEffect, useState } from 'react';
import OportunidadCard from './OportunidadCard';
import GoogleAds from './GoogleAds';
import { oportunidades } from '../data/oportunidades';

const ListaOportunidades = ({ categoriaActiva, busqueda }) => {
  const [oportunidadesMostradas, setOportunidadesMostradas] = useState(51);
  const OPPORTUNIDADES_POR_CARGA = 50;

  // Filtrar oportunidades según categoría y búsqueda
  const oportunidadesFiltradas = React.useMemo(() => {
    return oportunidades.filter(oportunidad => {
      // Filtro por categoría
      const coincideCategoria = categoriaActiva === 'todas' || 
        (oportunidad.categoria && oportunidad.categoria.toLowerCase() === categoriaActiva.toLowerCase());
      
      // Filtro por búsqueda
      const coincideBusqueda = !busqueda || busqueda.trim() === '' || 
        (oportunidad.titulo && oportunidad.titulo.toLowerCase().includes(busqueda.toLowerCase())) ||
        (oportunidad.descripcion && oportunidad.descripcion.toLowerCase().includes(busqueda.toLowerCase())) ||
        (oportunidad.pais && oportunidad.pais.toLowerCase().includes(busqueda.toLowerCase()));

      return coincideCategoria && coincideBusqueda;
    });
  }, [categoriaActiva, busqueda]);

  // Obtener solo las oportunidades que se deben mostrar
  const oportunidadesParaMostrar = React.useMemo(() => {
    return oportunidadesFiltradas.slice(0, oportunidadesMostradas);
  }, [oportunidadesFiltradas, oportunidadesMostradas]);

  // Resetear el contador cuando cambian los filtros
  useEffect(() => {
    setOportunidadesMostradas(51);
  }, [categoriaActiva, busqueda]);

  // Función para cargar más oportunidades
  const cargarMasOportunidades = () => {
    setOportunidadesMostradas(prev => Math.min(prev + OPPORTUNIDADES_POR_CARGA, oportunidadesFiltradas.length));
  };

  // Verificar si hay más oportunidades para cargar
  const hayMasOportunidades = oportunidadesMostradas < oportunidadesFiltradas.length;

  // Restaurar posición de scroll cuando se regresa desde una oportunidad
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('oportunidadesScrollPosition');
    if (savedPosition) {
      const position = parseInt(savedPosition, 10);
      setTimeout(() => {
        window.scrollTo(0, position);
        sessionStorage.removeItem('oportunidadesScrollPosition');
      }, 100);
    }
  }, []);

  // Mensaje cuando no hay resultados
  if (oportunidadesFiltradas.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-md mx-auto">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No se encontraron oportunidades</h3>
            <p className="mt-1 text-sm text-gray-500">
              Intenta ajustar tus filtros de búsqueda o categoría.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Generar mensaje de resultados
  const getMensajeResultados = () => {
    let mensaje = `${oportunidadesFiltradas.length} Oportunidades Encontradas`;
    
    if (categoriaActiva !== 'todas') {
      mensaje += ` en ${categoriaActiva}s`;
    }
    
    if (busqueda && busqueda.trim() !== '') {
      mensaje += ` para "${busqueda}"`;
    }
    
    return mensaje;
  };

  // Generar mensaje de progreso de carga
  const getMensajeProgreso = () => {
    if (oportunidadesMostradas >= oportunidadesFiltradas.length) {
      return `Mostrando todas las ${oportunidadesFiltradas.length} oportunidades`;
    }
    return `Mostrando ${oportunidadesMostradas} de ${oportunidadesFiltradas.length} oportunidades`;
  };

  return (
    <section id="oportunidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de resultados */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {getMensajeResultados()}
          </h2>
        </div>

        {/* Anuncio superior */}
        <div className="mb-8 flex justify-center">
          <GoogleAds 
            adSlot="1234567890" 
            adFormat="auto"
            className="max-w-full"
          />
        </div>

        {/* Grid de oportunidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oportunidadesParaMostrar.map((oportunidad) => (
            <OportunidadCard 
              key={oportunidad.id} 
              oportunidad={oportunidad} 
            />
          ))}
        </div>

        {/* Botón cargar más oportunidades */}
        {hayMasOportunidades && (
          <div className="mt-12 text-center">
            <button
              onClick={cargarMasOportunidades}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Cargar más oportunidades
            </button>
            <p className="mt-4 text-sm text-gray-500">
              {getMensajeProgreso()}
            </p>
          </div>
        )}

        {/* Información adicional cuando se muestran todas */}
        {!hayMasOportunidades && oportunidadesFiltradas.length > 0 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ¡Has visto todas las oportunidades disponibles!
            </div>
            <p className="mt-4 text-sm text-gray-500">
              {getMensajeProgreso()}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListaOportunidades;
