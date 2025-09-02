import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cookies = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header con navegación */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Título principal */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Cookies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Contenido de la política */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          
          {/* Introducción */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. ¿Qué son las Cookies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computadora, tablet o smartphone) 
              cuando visita un sitio web. Estas cookies permiten que el sitio web "recuerde" sus acciones y preferencias 
              durante un período de tiempo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              En Oportunidades Globales, utilizamos cookies para mejorar su experiencia de navegación y proporcionar 
              funcionalidades esenciales del sitio.
            </p>
          </section>

          {/* Tipos de cookies que utilizamos */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Tipos de Cookies que Utilizamos</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">2.1 Cookies Esenciales</h3>
                <p className="text-blue-700 text-sm">
                  Estas cookies son necesarias para el funcionamiento básico del sitio web. Incluyen cookies que permiten 
                  recordar sus preferencias de idioma, región y configuraciones básicas.
                </p>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">2.2 Cookies de Funcionalidad</h3>
                <p className="text-green-700 text-sm">
                  Mejoran la funcionalidad del sitio recordando sus preferencias, como filtros de búsqueda aplicados 
                  o categorías de oportunidades que ha visitado.
                </p>
              </div>
              
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">2.3 Cookies de Análisis</h3>
                <p className="text-purple-700 text-sm">
                  Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio web, qué páginas visitan más 
                  y cómo podemos mejorar la experiencia del usuario.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies específicas */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cookies Específicas que Utilizamos</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-50 rounded-lg">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Nombre de la Cookie</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Propósito</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">session_id</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Mantener su sesión activa</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Sesión</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">language_pref</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Recordar su idioma preferido</td>
                    <td className="px-4 py-3 text-sm text-gray-600">1 año</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">search_filters</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Guardar filtros de búsqueda</td>
                    <td className="px-4 py-3 text-sm text-gray-600">30 días</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">newsletter_consent</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Recordar su consentimiento al newsletter</td>
                    <td className="px-4 py-3 text-sm text-gray-600">2 años</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Banner de consentimiento */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Banner de Consentimiento de Cookies</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Cumplimiento Legal:</strong> Nuestro banner de cookies cumple con todas las regulaciones 
                    de protección de datos y privacidad vigentes.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Para cumplir con las regulaciones de protección de datos, implementamos un sistema completo de consentimiento de cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
              <li><strong>Banner visible:</strong> Aparece en la primera visita y es claramente visible</li>
              <li><strong>Opciones claras:</strong> Aceptar todo, rechazar todo o personalizar preferencias</li>
              <li><strong>Información detallada:</strong> Explicación clara de cada tipo de cookie</li>
              <li><strong>Control granular:</strong> Selección individual de tipos de cookies</li>
              <li><strong>Acceso permanente:</strong> Cambiar preferencias en cualquier momento</li>
              <li><strong>Enlaces a políticas:</strong> Acceso directo a información legal completa</li>
            </ul>
          </section>

          {/* Cookies de terceros */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies de Terceros</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Importante:</strong> Algunas cookies pueden ser establecidas por servicios de terceros 
                    que utilizamos para mejorar nuestro sitio web.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Utilizamos servicios de terceros que pueden establecer cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> Para analizar el tráfico del sitio web</li>
              <li><strong>Redes Sociales:</strong> Para integrar botones de compartir</li>
              <li><strong>Servicios de Hosting:</strong> Para el funcionamiento técnico del sitio</li>
            </ul>
          </section>

          {/* Control de cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cómo Controlar las Cookies</h2>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">6.1 Banner de Consentimiento</h3>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">
                      <strong>Control Directo:</strong> Nuestro sitio web incluye un banner de consentimiento de cookies 
                      que le permite gestionar sus preferencias directamente.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Al visitar nuestro sitio web por primera vez, verá un banner en la parte inferior de la pantalla 
                que le permite:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                <li><strong>Aceptar todas las cookies:</strong> Permite el uso de cookies esenciales, funcionales, de análisis y marketing</li>
                <li><strong>Rechazar cookies opcionales:</strong> Solo permite cookies esenciales necesarias para el funcionamiento</li>
                <li><strong>Personalizar preferencias:</strong> Elegir específicamente qué tipos de cookies desea permitir</li>
                <li><strong>Acceder a políticas:</strong> Enlaces directos a nuestra Política de Cookies y Política de Privacidad</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800">6.2 Panel de Control de Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nuestro sistema de gestión de cookies le permite:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                <li>Cambiar sus preferencias en cualquier momento</li>
                <li>Ver qué tipos de cookies están activos</li>
                <li>Habilitar o deshabilitar cookies específicas</li>
                <li>Acceder a información detallada sobre cada tipo de cookie</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800">6.3 Configuración del Navegador</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                También puede controlar las cookies a través de la configuración de su navegador web:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instrucciones por navegador:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 text-sm">
                  <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos del sitio</li>
                  <li><strong>Firefox:</strong> Opciones → Privacidad y Seguridad → Cookies y datos del sitio</li>
                  <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos del sitio web</li>
                  <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Consecuencias de deshabilitar cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Consecuencias de Deshabilitar Cookies</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    <strong>Advertencia:</strong> Si deshabilita las cookies, algunas funcionalidades de nuestro sitio web 
                    pueden no funcionar correctamente.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              Al deshabilitar las cookies, puede experimentar:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Pérdida de preferencias guardadas</li>
              <li>Necesidad de volver a configurar filtros de búsqueda</li>
              <li>Funcionalidad limitada del sitio web</li>
              <li>Experiencia de usuario menos personalizada</li>
            </ul>
          </section>

          {/* Actualizaciones de la política */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Actualizaciones de esta Política</h2>
            <p className="text-gray-600 leading-relaxed">
              Esta Política de Cookies puede actualizarse periódicamente para reflejar cambios en nuestras prácticas 
              o por otras razones operativas, legales o reglamentarias. Le notificaremos sobre cambios significativos 
              a través de nuestro sitio web o newsletter.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Si tiene preguntas sobre nuestra Política de Cookies o sobre el uso de cookies en nuestro sitio web, 
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

export default Cookies;
