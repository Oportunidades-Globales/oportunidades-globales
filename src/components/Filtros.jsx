import React, { useState, useEffect } from 'react';
import { categorias } from '../data/oportunidades';

const Filtros = ({ categoriaActiva, setCategoriaActiva, busqueda, setBusqueda }) => {
  const [searchTerm, setSearchTerm] = useState(busqueda);

  // Debounce para la búsqueda
  useEffect(() => {
    const timer = setTimeout(() => {
      setBusqueda(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, setBusqueda]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (categoriaId) => {
    setCategoriaActiva(categoriaId);
    // Limpiar búsqueda al cambiar categoría
    setSearchTerm('');
    setBusqueda('');
  };

  const clearFilters = () => {
    setCategoriaActiva('todas');
    setSearchTerm('');
    setBusqueda('');
  };

  return (
    <section className="bg-white py-12 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Encuentra tu Oportunidad Ideal
          </h2>
          <p className="text-lg text-gray-600">
            Filtra por categoría y busca oportunidades específicas
          </p>
        </div>

        {/* Barra de búsqueda */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar oportunidades por título, descripción o país..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => handleCategoryChange(categoria.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                categoriaActiva === categoria.id
                  ? `${categoria.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {categoria.nombre}
            </button>
          ))}
        </div>

        {/* Botón para limpiar filtros */}
        {(categoriaActiva !== 'todas' || searchTerm) && (
          <div className="text-center mb-6">
            <button
              onClick={clearFilters}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Limpiar Filtros
            </button>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Las oportunidades se actualizan semanalmente</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filtros;
