// Configuración para servicios de pago
export const paymentConfig = {
  // Stripe Configuration (para producción)
  stripe: {
    publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_stripe_key_here',
    secretKey: process.env.REACT_APP_STRIPE_SECRET_KEY || 'sk_test_your_stripe_secret_here',
  },
  
  // PayPal Configuration
  paypal: {
    clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID || 'your_paypal_client_id_here',
    clientSecret: process.env.REACT_APP_PAYPAL_CLIENT_SECRET || 'your_paypal_secret_here',
  },
  
  // Newsletter subscription details
  newsletter: {
    price: 1.00, // USD
    currency: 'USD',
    interval: 'month',
    name: 'Newsletter Premium',
    description: 'Suscripción mensual al newsletter premium con actualizaciones exclusivas',
  },
  
  // API endpoints (para backend)
  api: {
    createSubscription: '/api/subscriptions/create',
    cancelSubscription: '/api/subscriptions/cancel',
    updateSubscription: '/api/subscriptions/update',
    webhook: '/api/webhooks/stripe',
  }
};

// Funciones de utilidad para pagos
export const paymentUtils = {
  // Formatear precio para mostrar
  formatPrice: (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  },
  
  // Validar email
  validateEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  // Generar ID de suscripción único
  generateSubscriptionId: () => {
    return 'sub_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
};
