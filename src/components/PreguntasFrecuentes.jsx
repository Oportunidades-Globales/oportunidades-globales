import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreguntasFrecuentes = () => {
  const navigate = useNavigate();

  const preguntas = [
    {
      id: 1,
      pregunta: "¿Qué tipo de oportunidades comparten en la página?",
      respuesta: "Compartimos becas de estudio, programas de intercambio cultural, voluntariados internacionales y ofertas de trabajo en el extranjero."
    },
    {
      id: 2,
      pregunta: "¿Las oportunidades son para todas las edades?",
      respuesta: "La mayoría están dirigidas a jóvenes universitarios o recién egresados, pero también hay opciones para profesionales, maestros e incluso adolescentes (como campamentos de verano)."
    },
    {
      id: 3,
      pregunta: "¿Necesito saber inglés u otro idioma?",
      respuesta: "Depende del programa. Muchos voluntariados no requieren un nivel alto de inglés, pero las becas e intercambios académicos suelen pedir al menos nivel intermedio o un examen oficial como TOEFL o IELTS."
    },
    {
      id: 4,
      pregunta: "¿Cómo sé si la oportunidad es confiable?",
      respuesta: "Solo compartimos programas con respaldo oficial (universidades, ONGs reconocidas, embajadas o empresas serias). Además, siempre incluimos el enlace directo a la convocatoria oficial."
    },
    {
      id: 5,
      pregunta: "¿Debo pagar por participar?",
      respuesta: "Algunos programas son totalmente financiados (cubren matrícula, alojamiento y estipendio), otros son parcialmente financiados y en el caso de voluntariados como campamentos, puedes recibir un salario o ayuda económica."
    },
    {
      id: 6,
      pregunta: "¿Qué necesito para postularme?",
      respuesta: "Cada programa tiene requisitos específicos, pero lo más común es: CV actualizado, carta de motivación, cartas de recomendación y, en algunos casos, certificado de idiomas."
    },
    {
      id: 7,
      pregunta: "¿Desde qué países puedo postularme?",
      respuesta: "La mayoría de oportunidades son internacionales y aceptan postulantes de varios países, aunque algunas son exclusivas para ciertas nacionalidades o regiones."
    },
    {
      id: 8,
      pregunta: "¿La página cobra por inscribirme?",
      respuesta: "No. Nosotros solo difundimos la información. La inscripción siempre se hace directamente en la página oficial del programa."
    },
    {
      id: 9,
      pregunta: "¿Con cuánta anticipación debo aplicar?",
      respuesta: "Lo recomendable es 6 a 12 meses antes, especialmente para becas y maestrías. En programas de voluntariado, el proceso suele ser más corto."
    },
    {
      id: 10,
      pregunta: "¿Qué beneficios puedo obtener con estas experiencias?",
      respuesta: "Mejorar tu perfil académico y profesional, practicar idiomas, hacer networking internacional, ganar experiencia laboral y vivir una inmersión cultural única."
    }
  ];

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
            <span className="text-3xl">❓</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Resolvemos todas tus dudas sobre las oportunidades internacionales que compartimos
          </p>
        </div>

        {/* Lista de preguntas */}
        <div className="space-y-6">
          {preguntas.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-sm">
                      {item.id}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.pregunta}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.respuesta}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de contacto */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-primary-100 mb-6 text-lg">
              Si no encuentras la respuesta que buscas, no dudes en contactarnos
            </p>
            <button 
              onClick={() => navigate('/contacto')}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
