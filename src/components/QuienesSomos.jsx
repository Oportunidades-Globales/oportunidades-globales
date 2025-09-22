import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleAds from './GoogleAds';

const QuienesSomos = () => {
  const navigate = useNavigate();

  // Scroll al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación - fijo en la parte superior */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Botón de navegación a la izquierda */}
            <button 
              onClick={() => {
                if (window.restoreFooterPosition) {
                  window.restoreFooterPosition();
                } else {
                  navigate('/');
                }
              }}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Volver al Inicio</span>
              <span className="sm:hidden">Volver</span>
            </button>

            {/* En móvil: Logo y branding a la derecha */}
            <button 
              onClick={() => {
                if (window.restoreFooterPosition) {
                  window.restoreFooterPosition();
                } else {
                  navigate('/');
                }
              }}
              className="flex sm:hidden items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo2.png" 
                alt="Oportunidades Globales" 
                className="w-8 h-8 rounded-lg"
              />
              <h1 className="text-lg font-bold text-gray-900">Oportunidades Globales</h1>
            </button>

            {/* En desktop: Logo centrado y clickeable */}
            <button 
              onClick={() => {
                if (window.restoreFooterPosition) {
                  window.restoreFooterPosition();
                } else {
                  navigate('/');
                }
              }}
              className="hidden sm:flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo2.png" 
                alt="Oportunidades Globales" 
                className="w-12 h-12 rounded-lg"
              />
              <h1 className="text-xl font-bold text-gray-900">Oportunidades Globales</h1>
            </button>

            {/* En desktop: Espacio vacío para balancear el layout */}
            <div className="hidden sm:block w-32"></div>
          </div>
        </div>
      </div>

      {/* Espacio para compensar el header fijo */}
      <div className="h-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
              Oportunidades Globales nació en 2020 de la convicción de que el acceso a la educación 
              y las experiencias internacionales no debería ser un privilegio, sino un derecho 
              universal. Fundada por un equipo de profesionales apasionados por el desarrollo 
              humano y la movilidad social, con experiencia en educación internacional y 
              cooperación al desarrollo.
            </p>
            <p className="text-lg leading-relaxed text-center mb-6">
              Nuestro equipo está compuesto por ex-becarios internacionales, profesionales 
              de la educación, consultores en movilidad académica y expertos en cooperación 
              internacional. Cada miembro ha vivido en primera persona las oportunidades que 
              compartimos, lo que nos permite ofrecer asesoramiento real y actualizado.
            </p>
            <p className="text-lg leading-relaxed text-center">
              Desde nuestros inicios, hemos conectado a más de 15,000 personas con becas, 
              voluntariados, trabajos y experiencias únicas en más de 50 países, 
              transformando vidas y construyendo un mundo más conectado y solidario.
            </p>
          </div>
        </div>

        {/* Equipo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">MR</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">María Rodríguez</h3>
              <p className="text-primary-600 font-medium mb-2">Directora Ejecutiva</p>
              <p className="text-gray-600 text-sm">
                Ex-becaria Chevening, Master en Educación Internacional. 
                Experiencia en cooperación al desarrollo y movilidad académica.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">CG</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Carlos González</h3>
              <p className="text-primary-600 font-medium mb-2">Coordinador de Programas</p>
              <p className="text-gray-600 text-sm">
                Ex-voluntario internacional en 3 continentes. 
                Especialista en programas de intercambio cultural y voluntariado.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">AL</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ana López</h3>
              <p className="text-primary-600 font-medium mb-2">Especialista en Becas</p>
              <p className="text-gray-600 text-sm">
                Doctora en Ciencias Políticas, ex-becaria Fulbright. 
                Experta en procesos de aplicación y requisitos académicos.
              </p>
            </div>
          </div>
        </div>

        {/* Metodología */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestra Metodología</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investigación y Verificación</h3>
              <p className="text-gray-600 mb-4">
                Cada oportunidad que compartimos pasa por un riguroso proceso de verificación. 
                Nuestro equipo investiga la legitimidad de los programas, verifica los requisitos 
                actualizados y confirma que las organizaciones son confiables.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Verificación de fuentes oficiales</li>
                <li>Confirmación de fechas límite actualizadas</li>
                <li>Validación de requisitos y beneficios</li>
                <li>Revisión de políticas de las organizaciones</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contenido Educativo</h3>
              <p className="text-gray-600 mb-4">
                No solo compartimos oportunidades, sino que creamos contenido educativo de calidad 
                que ayuda a los estudiantes a prepararse mejor para sus aplicaciones internacionales.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Guías paso a paso para cada proceso</li>
                <li>Plantillas profesionales descargables</li>
                <li>Consejos de expertos en educación internacional</li>
                <li>Casos de éxito y testimonios reales</li>
              </ul>
            </div>
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
