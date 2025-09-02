import React from 'react';
import RedesSociales from './RedesSociales';
import { contactConfig } from '../config/contact';

const ContactoRedes = ({ className = '', titulo = 'Síguenos en redes sociales', descripcion = 'Mantente al día con las mejores oportunidades. Síguenos en nuestras redes sociales para contenido exclusivo.' }) => {
  const handleContacto = () => {
    const asunto = 'Información general sobre Oportunidades Globales';
    const cuerpo = 'Hola,\n\nMe gustaría obtener más información sobre Oportunidades Globales.\n\nSaludos cordiales.';
    const mailtoLink = `mailto:${contactConfig.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    window.open(mailtoLink);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{titulo}</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          {descripcion}
        </p>
      </div>

      {/* Redes sociales con etiquetas */}
      <div className="mb-8">
        <RedesSociales 
          className="justify-center" 
          showLabels={true} 
          size="lg"
        />
      </div>

      {/* Información de contacto */}
      <div className="text-center">
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">¿Tienes preguntas?</h4>
          <p className="text-gray-600 mb-4">
            Escríbenos directamente a nuestro correo electrónico
          </p>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-gray-700 font-medium">{contactConfig.email}</span>
          </div>
          <button
            onClick={handleContacto}
            className="btn-primary inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Enviar mensaje
          </button>
        </div>
      </div>

      {/* Nota sobre Facebook */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          <span className="font-medium">Nota:</span> Nuestra página de Facebook estará disponible próximamente.
        </p>
      </div>
    </div>
  );
};

export default ContactoRedes;
