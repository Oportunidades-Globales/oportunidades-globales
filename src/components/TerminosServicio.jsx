import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TerminosServicio = () => {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Título principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Términos de Servicio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Contenido de los términos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          {/* Introducción */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Al acceder y utilizar la plataforma Oportunidades Globales ("la plataforma", "nosotros", "nuestro"), 
              usted acepta estar sujeto a estos Términos de Servicio ("Términos"). Si no está de acuerdo con alguna parte de estos términos, 
              no debe utilizar nuestros servicios.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>Importante:</strong> Estos términos establecen claramente que somos únicamente un portal informativo 
              y no nos hacemos responsables de los resultados o consecuencias de las oportunidades que compartimos.
            </p>
          </section>

          {/* Descripción del servicio */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Oportunidades Globales es una plataforma informativa que:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
              <li>Comparte información sobre oportunidades internacionales (becas, voluntariados, trabajos, etc.)</li>
              <li>Proporciona enlaces a sitios web oficiales de organizaciones y programas</li>
              <li>Ofrece un newsletter con actualizaciones y nuevas oportunidades</li>
              <li>Facilita el contacto entre usuarios y organizaciones</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Naturaleza del Servicio:</strong> Somos únicamente un intermediario informativo. 
                    No organizamos, administramos ni participamos en ninguno de los programas que compartimos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Descargo de responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Descargo de Responsabilidad</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <strong>Descargo de Responsabilidad Crítico:</strong> Usted acepta que utiliza nuestra plataforma bajo su propio riesgo.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">3.1 No Somos Responsables Por:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>La veracidad, exactitud o actualidad de la información compartida</li>
                <li>Los resultados de las aplicaciones a programas o oportunidades</li>
                <li>El comportamiento, políticas o prácticas de organizaciones externas</li>
                <li>Daños, pérdidas o perjuicios derivados del uso de enlaces externos</li>
                <li>Problemas legales, financieros o de seguridad en programas externos</li>
                <li>Fraudes, estafas o actividades ilegales de terceros</li>
                <li>Cambios en los requisitos o condiciones de programas externos</li>
                <li>Cancelaciones, retrasos o modificaciones de oportunidades</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800">3.2 Uso de Enlaces Externos</h3>
              <p className="text-gray-600 leading-relaxed">
                Al hacer clic en enlaces externos, usted abandona nuestra plataforma y acepta que:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>No tenemos control sobre el contenido de sitios externos</li>
                <li>No respaldamos ni garantizamos la seguridad de sitios externos</li>
                <li>Usted es responsable de verificar la legitimidad de cualquier programa</li>
                <li>Debe revisar las políticas y términos de sitios externos</li>
              </ul>
            </div>
          </section>

          {/* Uso aceptable */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso Aceptable</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Usted se compromete a utilizar nuestra plataforma únicamente para fines legales y apropiados:
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">4.1 Uso Permitido:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Buscar y revisar oportunidades internacionales</li>
                <li>Suscribirse a nuestro newsletter</li>
                <li>Contactarnos para consultas legítimas</li>
                <li>Compartir información de manera responsable</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800">4.2 Uso Prohibido:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Usar la plataforma para actividades ilegales o fraudulentas</li>
                <li>Intentar acceder a sistemas o información no autorizada</li>
                <li>Transmitir malware, virus o código dañino</li>
                <li>Spam, phishing o actividades de acoso</li>
                <li>Violar derechos de propiedad intelectual</li>
                <li>Usar bots o scripts automatizados sin autorización</li>
              </ul>
            </div>
          </section>

          {/* Propiedad intelectual */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Propiedad Intelectual</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              El contenido de nuestra plataforma está protegido por derechos de autor y otras leyes de propiedad intelectual:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>El diseño, estructura y funcionalidad de la plataforma</li>
              <li>El contenido original creado por nuestro equipo</li>
              <li>Nuestro nombre, logo y marca comercial</li>
              <li>El contenido del newsletter y comunicaciones</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              <strong>Excepción:</strong> Las oportunidades, programas y enlaces externos pertenecen a sus respectivos propietarios 
              y no reclamamos derechos sobre ellos.
            </p>
          </section>

          {/* Limitación de responsabilidad */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Limitación Crítica:</strong> En ningún caso seremos responsables por daños indirectos, incidentales, 
                    especiales, consecuentes o punitivos, incluyendo pérdida de beneficios, datos o uso.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Nuestra responsabilidad total, si se determina que existe, estará limitada al monto que haya pagado por nuestros servicios 
              en los 12 meses anteriores al evento que dio lugar a la reclamación.
            </p>
          </section>

          {/* Indemnización */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Indemnización</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Usted acepta indemnizar y eximir de responsabilidad a Oportunidades Globales, sus directores, empleados y agentes 
              de cualquier reclamación, daño, pérdida o gasto (incluyendo honorarios legales) que surja de:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Su uso de la plataforma</li>
              <li>Su violación de estos términos</li>
              <li>Su interacción con sitios web externos</li>
              <li>Su participación en programas o oportunidades externas</li>
              <li>Cualquier actividad ilegal o fraudulenta</li>
            </ul>
          </section>

          {/* Modificaciones */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modificaciones de los Términos</h2>
            <p className="text-gray-600 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor 
              inmediatamente después de su publicación. Su uso continuado de la plataforma después de los cambios 
              constituye aceptación de los nuevos términos.
            </p>
          </section>

          {/* Terminación */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Terminación</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Podemos suspender o terminar su acceso a la plataforma en cualquier momento, con o sin causa, 
              incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Violación de estos términos</li>
              <li>Uso fraudulento o ilegal</li>
              <li>Actividades que puedan dañar nuestra reputación</li>
              <li>Comportamiento abusivo hacia otros usuarios</li>
            </ul>
          </section>

          {/* Ley aplicable */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Ley Aplicable y Jurisdicción</h2>
            <p className="text-gray-600 leading-relaxed">
              Estos términos se rigen por las leyes de España. Cualquier disputa será resuelta en los tribunales 
              competentes de España. Usted acepta someterse a la jurisdicción exclusiva de estos tribunales.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Si tiene preguntas sobre estos Términos de Servicio, puede contactarnos a través de:
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

export default TerminosServicio;
