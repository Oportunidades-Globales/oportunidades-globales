import React from 'react';
import GoogleAds from './GoogleAds';

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Quiénes Somos?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos personas con oportunidades únicas en todo el mundo, 
            transformando vidas a través de la educación y las experiencias globales.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Nuestra Misión */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Nuestra Misión</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Democratizar el acceso a oportunidades educativas y profesionales a nivel global. 
              Creemos que cada persona merece la oportunidad de crecer, aprender y contribuir 
              al mundo, independientemente de su origen o circunstancias.
            </p>
          </div>

          {/* Nuestra Visión */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Nuestra Visión</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser la plataforma líder en conectar talento global con oportunidades transformadoras. 
              Visualizamos un mundo donde las barreras geográficas y económicas no limiten 
              el potencial humano y el crecimiento personal.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pasión</h3>
              <p className="text-gray-600">
                Amamos lo que hacemos y nos apasiona conectar personas con oportunidades que cambian vidas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con honestidad, transparencia y responsabilidad en cada interacción.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Colaboración</h3>
              <p className="text-gray-600">
                Trabajamos en equipo y construimos puentes entre culturas y comunidades.
              </p>
            </div>
          </div>
        </div>

        {/* Historia */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestra Historia</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-center mb-6">
              Oportunidades Globales nació de la convicción de que el acceso a la educación 
              y las experiencias internacionales no debería ser un privilegio, sino un derecho 
              universal. Fundada por un equipo de profesionales apasionados por el desarrollo 
              humano y la movilidad social.
            </p>
            <p className="text-lg leading-relaxed text-center">
              Desde nuestros inicios, hemos conectado a miles de personas con becas, 
              voluntariados, trabajos y experiencias únicas en más de 50 países, 
              transformando vidas y construyendo un mundo más conectado y solidario.
            </p>
          </div>
        </div>

        {/* Anuncio antes del Call to Action */}
        <div className="mt-16 mb-8 flex justify-center">
          <GoogleAds 
            adSlot="1122334455" 
            adFormat="auto"
            className="max-w-full"
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para tu próxima oportunidad?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explora nuestras oportunidades y comienza tu viaje hacia el crecimiento personal y profesional.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105"
          >
            Ver Oportunidades
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
