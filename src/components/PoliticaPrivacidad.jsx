import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PoliticaPrivacidad = () => {
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
                // Usar función helper para restaurar posición del footer
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Título principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Contenido de la política */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          {/* Introducción */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Oportunidades Globales ("nosotros", "nuestro", "la plataforma") se compromete a proteger la privacidad de sus usuarios. 
              Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporciona.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Importante:</strong> Somos únicamente un portal informativo que comparte oportunidades internacionales. 
              No somos responsables de los programas, organizaciones o resultados de las aplicaciones realizadas a través de los enlaces que compartimos.
            </p>
          </section>

          {/* Información que recopilamos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">2.1 Información de Suscripción al Newsletter</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Dirección de correo electrónico</li>
                <li>Fecha y hora de suscripción</li>
                <li>Preferencias de comunicación (si las especifica)</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800">2.2 Información de Uso</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Dirección IP y datos de navegación</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Información del dispositivo y navegador</li>
                <li>Cookies y tecnologías similares</li>
              </ul>
            </div>
          </section>

          {/* Cómo utilizamos la información */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cómo Utilizamos la Información</h2>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">3.1 Newsletter y Comunicaciones</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Enviar oportunidades y actualizaciones relevantes</li>
                <li>Personalizar el contenido según sus intereses</li>
                <li>Responder consultas y solicitudes</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800">3.2 Mejora de Servicios</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Analizar el uso de la plataforma</li>
                <li>Mejorar la funcionalidad y experiencia del usuario</li>
                <li>Desarrollar nuevas características</li>
              </ul>
            </div>
          </section>

          {/* Compartir información */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Compartir Información</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>No vendemos, alquilamos o compartimos su información personal con terceros</strong>, excepto en las siguientes circunstancias:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Con su consentimiento explícito</li>
              <li>Para cumplir con obligaciones legales</li>
              <li>Para proteger nuestros derechos y seguridad</li>
              <li>Con proveedores de servicios que nos ayudan a operar la plataforma (bajo estrictos acuerdos de confidencialidad)</li>
            </ul>
          </section>

          {/* Seguridad */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad de la Información</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Acceso no autorizado</li>
              <li>Alteración, divulgación o destrucción</li>
              <li>Pérdida accidental</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Sin embargo, ningún sistema de seguridad es completamente infalible, y no podemos garantizar la seguridad absoluta de la información transmitida.
            </p>
          </section>

          {/* Sus derechos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sus Derechos</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Usted tiene derecho a:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Acceder a su información personal</li>
              <li>Corregir información inexacta</li>
              <li>Solicitar la eliminación de su información</li>
              <li>Retirar su consentimiento en cualquier momento</li>
              <li>Darse de baja del newsletter</li>
              <li>Presentar una queja ante las autoridades competentes</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Utilizamos cookies y tecnologías similares para:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Mejorar la funcionalidad del sitio</li>
              <li>Analizar el tráfico y uso del sitio</li>
              <li>Personalizar el contenido</li>
              <li>Recordar sus preferencias</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Puede controlar el uso de cookies a través de la configuración de su navegador.
            </p>
          </section>

          {/* Enlaces externos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Enlaces Externos y Terceros</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Descargo de Responsabilidad Importante:</strong> Nuestra plataforma contiene enlaces a sitios web de terceros. 
                    No somos responsables de las políticas de privacidad, contenido o prácticas de estos sitios externos.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Le recomendamos revisar las políticas de privacidad de cualquier sitio web que visite a través de nuestros enlaces.
            </p>
          </section>

          {/* Cambios en la política */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cambios en esta Política</h2>
            <p className="text-gray-600 leading-relaxed">
              Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. 
              Los cambios entrarán en vigor inmediatamente después de su publicación en la plataforma. 
              Le notificaremos sobre cambios significativos a través de nuestro newsletter o mediante un aviso en el sitio.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacto</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Si tiene preguntas sobre esta Política de Privacidad o sobre el tratamiento de su información personal, 
              puede contactarnos a través de:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 font-medium">Email: oportunidadesglobales.es@gmail.com</p>
              <p className="text-gray-600 text-sm mt-1">
                Responderemos a su consulta en un plazo máximo de 30 días hábiles.
              </p>
            </div>
          </section>

        </div>

        {/* Botón de regreso */}
        <div className="text-center mt-8">
          <button 
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
