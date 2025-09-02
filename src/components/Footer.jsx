import React from 'react';
import RedesSociales from './RedesSociales';

const Footer = () => {

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

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suscríbete a nuestro newsletter</h4>
            <p className="text-gray-300 mb-4">
              Recibe las mejores oportunidades directamente en tu correo.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn-primary">
                Suscribirse
              </button>
            </div>
          </div>
        </div>



        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Oportunidades Globales. Todos los derechos reservados.
          </p>
          <div className="mt-2 flex justify-center space-x-6 text-sm text-gray-400">
            <button 
              onClick={() => window.location.href = '/politica-privacidad'}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => window.location.href = '/terminos-servicio'}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Términos de Servicio
            </button>
            <button 
              onClick={() => window.location.href = '/cookies'}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Cookies
            </button>
            <button 
              onClick={() => {
                // Mostrar el banner de cookies nuevamente
                localStorage.removeItem('cookieConsent');
                localStorage.removeItem('cookieConsentDate');
                window.location.reload();
              }}
              className="hover:text-white transition-colors duration-200 cursor-pointer"
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
