import React from 'react';
import OportunidadCard from './OportunidadCard';
import { oportunidades } from '../data/oportunidades';

const ListaOportunidades = ({ categoriaActiva, busqueda }) => {
  // Filtrar oportunidades según categoría y búsqueda
  const oportunidadesFiltradas = React.useMemo(() => {
    return oportunidades.filter(oportunidad => {
      // Filtro por categoría
      const coincideCategoria = categoriaActiva === 'todas' || 
        oportunidad.categoria.toLowerCase() === categoriaActiva.toLowerCase();
      
      // Filtro por búsqueda
      const coincideBusqueda = !busqueda || busqueda.trim() === '' || 
        oportunidad.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        oportunidad.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        oportunidad.pais.toLowerCase().includes(busqueda.toLowerCase());

      return coincideCategoria && coincideBusqueda;
    });
  }, [categoriaActiva, busqueda]);

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

  return (
    <section id="oportunidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de resultados */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {getMensajeResultados()}
          </h2>
        </div>

        {/* Grid de oportunidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {oportunidadesFiltradas.map((oportunidad) => (
            <OportunidadCard 
              key={oportunidad.id} 
              oportunidad={oportunidad} 
            />
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Mostrando {oportunidadesFiltradas.length} de {oportunidades.length} oportunidades disponibles
          </p>
        </div>
      </div>
    </section>
  );
};

export default ListaOportunidades;
