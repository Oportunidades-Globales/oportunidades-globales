import React, { useState } from 'react';
import subscriptionService from '../services/subscriptionService';
import { paymentUtils } from '../config/payment';

const NewsletterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState('email'); // 'email', 'payment', 'success'
  const [error, setError] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!paymentUtils.validateEmail(email)) {
      setError('Por favor ingresa un email válido');
      return;
    }
    setError('');
    setStep('payment');
  };

  const handlePayment = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      // Crear suscripción usando el servicio
      const result = await subscriptionService.createSubscription(email, 'stripe');
      
      if (result.success) {
        // Enviar email de confirmación
        await subscriptionService.sendConfirmationEmail(email, result.subscriptionId);
        setStep('success');
      } else {
        setError('Error al procesar el pago. Intenta nuevamente.');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError('Error al procesar el pago. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmail('');
    setStep('email');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        {/* Botón cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        {step === 'email' && (
          <div>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Suscríbete al Newsletter Premium
              </h2>
              <p className="text-gray-600">
                Recibe actualizaciones mensuales con las mejores oportunidades
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">✨ Beneficios incluidos:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Oportunidades exclusivas antes que nadie</li>
                <li>• Resumen mensual de nuevas becas y trabajos</li>
                <li>• Tips y consejos para aplicar exitosamente</li>
                <li>• Notificaciones de fechas límite importantes</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span className="text-yellow-800 font-medium">Costo: $1 USD mensual</span>
              </div>
            </div>

            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="tu@email.com"
                  required
                />
                {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                Continuar al Pago
              </button>
            </form>
          </div>
        )}

        {step === 'payment' && (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Información de Pago
              </h2>
              <p className="text-gray-600">
                Suscripción mensual por $1 USD
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Email:</span>
                <span className="font-medium">{email}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Plan:</span>
                <span className="font-medium">Newsletter Premium</span>
              </div>
              <div className="flex justify-between items-center border-t pt-2">
                <span className="text-gray-900 font-semibold">Total mensual:</span>
                <span className="text-gray-900 font-semibold">$1.00 USD</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">💳 Métodos de pago:</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="radio" id="stripe" name="payment" defaultChecked className="mr-2" />
                  <label htmlFor="stripe" className="text-sm text-blue-800">Tarjeta de crédito/débito</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" id="paypal" name="payment" className="mr-2" />
                  <label htmlFor="paypal" className="text-sm text-blue-800">PayPal</label>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 p-3 rounded-lg mb-4">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={() => setStep('email')}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
              >
                Atrás
              </button>
              <button
                onClick={handlePayment}
                disabled={isLoading}
                className="flex-1 bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </div>
                ) : (
                  'Pagar $1.00'
                )}
              </button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ¡Suscripción Exitosa!
            </h2>
            <p className="text-gray-600 mb-6">
              Gracias por suscribirte. Recibirás tu primer newsletter en los próximos días.
            </p>
            
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-green-900 mb-2">📧 Próximos pasos:</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Confirma tu email en tu bandeja de entrada</li>
                <li>• Recibirás actualizaciones mensuales</li>
                <li>• Puedes cancelar en cualquier momento</li>
              </ul>
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            >
              ¡Perfecto!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterModal;
