import React, { useState } from 'react';
import NewsletterModal from './NewsletterModal';

const Hero = () => {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);
  const scrollToOportunidades = () => {
    const element = document.getElementById('oportunidades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="gradient-bg py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">


          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Explora el Mundo a Través de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Oportunidades Únicas
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Encuentra becas, voluntariados, trabajos y experiencias en cruceros que te llevarán 
            a vivir aventuras inolvidables mientras desarrollas tu carrera y expandes tus horizontes.
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Oportunidades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">50+</div>
              <div className="text-gray-600">Países</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">1000+</div>
              <div className="text-gray-600">Éxitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary-600 mb-2">24/7</div>
              <div className="text-gray-600">Soporte</div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToOportunidades}
              className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              Explorar Oportunidades
            </button>
            <button 
              onClick={() => setShowNewsletterModal(true)}
              className="btn-secondary text-lg px-8 py-4"
            >
              Suscribirse al Newsletter
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Modal de Newsletter */}
      <NewsletterModal 
        isOpen={showNewsletterModal}
        onClose={() => setShowNewsletterModal(false)}
      />
    </section>
  );
};

export default Hero;
