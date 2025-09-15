import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ categoriaActiva, setCategoriaActiva, setBusqueda }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para filtrar por categoría y hacer scroll a las oportunidades
  const handleCategoryFilter = (categoriaId) => {
    // Solo aplicar filtro si estamos en la página principal
    if (window.location.pathname === '/') {
      setCategoriaActiva(categoriaId);
      setBusqueda(''); // Limpiar búsqueda al cambiar categoría
      
      // Hacer scroll suave a la sección de oportunidades
      setTimeout(() => {
        const oportunidadesSection = document.getElementById('oportunidades');
        if (oportunidadesSection) {
          const headerHeight = 80; // Altura aproximada del header
          const elementPosition = oportunidadesSection.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Delay para asegurar que el filtro se aplique primero
    } else {
      // Si estamos en otra página, navegar al inicio con el filtro aplicado
      navigate('/', { state: { categoriaActiva: categoriaId } });
    }
  };



  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo y título */}
          <button 
            onClick={() => {
              if (window.location.pathname === '/') {
                // Si ya estamos en la página principal, hacer scroll al inicio
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                // Si estamos en otra página, navegar al inicio
                navigate('/');
              }
            }}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500">
                             <img 
                 src="/logo2.png" 
                 alt="Oportunidades Globales Logo" 
                 className="w-full h-full object-contain"
                onError={(e) => {
                  // Si la imagen falla, mostrar un icono de fallback
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Icono de fallback */}
              <svg className="w-8 h-8 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Oportunidades Globales</h1>
          </button>

          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => {
                if (window.location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Inicio
            </button>
            <button 
              onClick={() => handleCategoryFilter('beca')}
              className={`font-medium transition-colors duration-200 ${
                categoriaActiva === 'beca' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Becas
            </button>
            <button 
              onClick={() => handleCategoryFilter('voluntariado')}
              className={`font-medium transition-colors duration-200 ${
                categoriaActiva === 'voluntariado' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Voluntariados
            </button>
            <button 
              onClick={() => handleCategoryFilter('trabajo')}
              className={`font-medium transition-colors duration-200 ${
                categoriaActiva === 'trabajo' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Trabajos
            </button>
            <button 
              onClick={() => handleCategoryFilter('crucero')}
              className={`font-medium transition-colors duration-200 ${
                categoriaActiva === 'crucero' 
                  ? 'text-primary-600 font-semibold' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Cruceros
            </button>
            <button 
              onClick={() => navigate('/articulos')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Artículos
            </button>
            <button 
              onClick={() => navigate('/quienes-somos')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              ¿Quiénes somos?
            </button>
            <button 
              onClick={() => navigate('/preguntas-frecuentes')}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Preguntas Frecuentes
            </button>
          </nav>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  if (window.location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    navigate('/');
                  }
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 font-medium rounded-md"
              >
                Inicio
              </button>
                             <button 
                 onClick={() => {
                   setIsMenuOpen(false);
                   handleCategoryFilter('beca');
                 }}
                 className={`block w-full text-left px-3 py-2 font-medium rounded-md ${
                   categoriaActiva === 'beca' 
                     ? 'text-primary-600 bg-primary-50' 
                     : 'text-gray-700 hover:text-primary-600'
                 }`}
               >
                 Becas
               </button>
                             <button 
                 onClick={() => {
                   setIsMenuOpen(false);
                   handleCategoryFilter('voluntariado');
                 }}
                 className={`block w-full text-left px-3 py-2 font-medium rounded-md ${
                   categoriaActiva === 'voluntariado' 
                     ? 'text-primary-600 bg-primary-50' 
                     : 'text-gray-700 hover:text-primary-600'
                 }`}
               >
                 Voluntariados
               </button>
                             <button 
                 onClick={() => {
                   setIsMenuOpen(false);
                   handleCategoryFilter('trabajo');
                 }}
                 className={`block w-full text-left px-3 py-2 font-medium rounded-md ${
                   categoriaActiva === 'trabajo' 
                     ? 'text-primary-600 bg-primary-50' 
                     : 'text-gray-700 hover:text-primary-600'
                 }`}
               >
                 Trabajos
               </button>
                             <button 
                 onClick={() => {
                   setIsMenuOpen(false);
                   handleCategoryFilter('crucero');
                 }}
                 className={`block w-full text-left px-3 py-2 font-medium rounded-md ${
                   categoriaActiva === 'crucero' 
                     ? 'text-primary-600 bg-primary-50' 
                     : 'text-gray-700 hover:text-primary-600'
                 }`}
               >
                 Cruceros
               </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/articulos');
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 font-medium rounded-md"
              >
                Artículos
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/quienes-somos');
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 font-medium rounded-md"
              >
                ¿Quiénes somos?
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/preguntas-frecuentes');
                }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 font-medium rounded-md"
              >
                Preguntas Frecuentes
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
