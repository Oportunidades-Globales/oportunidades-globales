import React from 'react';
import { useNavigate } from 'react-router-dom';
import RedesSociales from './RedesSociales';

const Footer = () => {
  const navigate = useNavigate();

  // Función para manejar la navegación guardando la posición de scroll
  const handleNavigation = (path) => {
    // Guardar la posición actual de scroll
    const currentPosition = window.scrollY;
    sessionStorage.setItem('footerScrollPosition', currentPosition.toString());
    console.log('Guardando posición de scroll del footer:', currentPosition);
    navigate(path);
  };

  // Función helper para restaurar posición del footer al regresar
  const restoreFooterPosition = () => {
    const footerPosition = sessionStorage.getItem('footerScrollPosition');
    if (footerPosition) {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(footerPosition, 10),
          behavior: 'smooth'
        });
        sessionStorage.removeItem('footerScrollPosition');
      }, 100);
    } else {
      navigate('/');
    }
  };

  // Exportar la función para usar en otros componentes
  window.restoreFooterPosition = restoreFooterPosition;

  // Función para gestionar cookies (especial)
  const handleManageCookies = () => {
    // Mostrar el banner de cookies nuevamente
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentDate');
    window.location.reload();
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center overflow-hidden">
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
                <svg className="w-6 h-6 text-white hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Oportunidades Globales</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Conectamos personas con oportunidades únicas en todo el mundo. 
              Descubre becas, voluntariados, trabajos y experiencias que transformarán tu vida.
            </p>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <RedesSociales 
                className="text-gray-300" 
                size="lg"
              />
            </div>
          </div>

          {/* Frase inspiradora */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <blockquote className="text-xl md:text-2xl font-medium text-gray-200 italic leading-relaxed">
                "La educación es el pasaporte hacia el futuro, el mañana pertenece a aquellos que se preparan para él hoy."
              </blockquote>
              <p className="text-sm text-gray-400 mt-4">
                — Malcolm X
              </p>
              <div className="mt-6">
                <p className="text-gray-300 text-lg">
                  <span className="text-primary-400 font-semibold">Cada oportunidad</span> es un paso hacia tu futuro brillante.
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Oportunidades Globales. Todos los derechos reservados.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <button 
              onClick={() => handleNavigation('/politica-privacidad')}
              className="hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => handleNavigation('/terminos-servicio')}
              className="hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Términos de Servicio
            </button>
            <button 
              onClick={() => handleNavigation('/cookies')}
              className="hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Cookies
            </button>
            <button 
              onClick={() => handleNavigation('/quienes-somos')}
              className="hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              ¿Quiénes somos?
            </button>
            <button 
              onClick={handleManageCookies}
              className="hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              Gestionar Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
