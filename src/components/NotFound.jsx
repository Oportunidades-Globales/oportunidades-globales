import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        {/* Icono de error */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>

        {/* Título y descripción */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Página no encontrada</h2>
        <p className="text-lg text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Botones de acción */}
        <div className="space-y-4">
          <button
            onClick={() => navigate('/')}
            className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
          >
            Volver al Inicio
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
          >
            Página Anterior
          </button>
        </div>

        {/* Enlaces útiles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Enlaces útiles</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <button
              onClick={() => navigate('/becas')}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Becas
            </button>
            <button
              onClick={() => navigate('/voluntariados')}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Voluntariados
            </button>
            <button
              onClick={() => navigate('/trabajos')}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Trabajos
            </button>
            <button
              onClick={() => navigate('/cruceros')}
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              Cruceros
            </button>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Si crees que esto es un error, por favor contacta con nosotros.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
