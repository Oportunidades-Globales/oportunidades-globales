# Configuración del Sistema de Pagos - Newsletter Premium

## Descripción
Este sistema permite a los usuarios suscribirse al newsletter premium por $1 USD mensual, recibiendo actualizaciones exclusivas sobre oportunidades.

## Componentes Implementados

### 1. NewsletterModal.jsx
- Modal de suscripción con 3 pasos: email, pago, confirmación
- Validación de email
- Interfaz de pago con opciones de tarjeta y PayPal
- Confirmación de suscripción exitosa

### 2. subscriptionService.js
- Servicio para manejar suscripciones
- Crear, cancelar y gestionar suscripciones
- Envío de emails de confirmación
- Procesamiento de webhooks

### 3. payment.js
- Configuración para Stripe y PayPal
- Utilidades para validación y formateo
- Configuración de precios y monedas

## Configuración para Producción

### 1. Stripe Setup
```bash
# Instalar Stripe
npm install @stripe/stripe-js

# Configurar variables de entorno
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_your_key_here
REACT_APP_STRIPE_SECRET_KEY=sk_live_your_secret_here
```

### 2. PayPal Setup
```bash
# Instalar PayPal
npm install @paypal/react-paypal-js

# Configurar variables de entorno
REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id
REACT_APP_PAYPAL_CLIENT_SECRET=your_paypal_secret
```

### 3. Backend API (Node.js/Express)
```javascript
// Ejemplo de endpoints necesarios
app.post('/api/subscriptions/create', createSubscription);
app.post('/api/subscriptions/cancel', cancelSubscription);
app.post('/api/webhooks/stripe', handleStripeWebhook);
app.post('/api/email/send', sendEmail);
```

### 4. Base de Datos
```sql
-- Tabla de suscripciones
CREATE TABLE subscriptions (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  status ENUM('active', 'canceled', 'past_due') DEFAULT 'active',
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Integración con Stripe

### 1. Frontend (React)
```javascript
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// En el componente de pago
const handleStripePayment = async () => {
  const stripe = await stripePromise;
  
  // Crear payment intent en el backend
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, amount: 100 }) // $1.00 en centavos
  });
  
  const { clientSecret } = await response.json();
  
  // Confirmar pago
  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement('card'),
      billing_details: { email }
    }
  });
};
```

### 2. Backend (Node.js)
```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { email, amount } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      metadata: { email },
      automatic_payment_methods: {
        enabled: true,
      },
    });
    
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Integración con PayPal

### 1. Frontend
```javascript
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalPayment = () => (
  <PayPalScriptProvider options={{ 
    "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID 
  }}>
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: "1.00",
            },
            description: "Newsletter Premium - 1 mes"
          }],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          // Procesar suscripción exitosa
          handleSuccessfulPayment(details);
        });
      }}
    />
  </PayPalScriptProvider>
);
```

## Servicio de Email

### 1. Configurar servicio de email (ej: SendGrid)
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = async (email, subscriptionId) => {
  const msg = {
    to: email,
    from: 'noreply@oportunidadesglobales.es',
    subject: '¡Bienvenido al Newsletter Premium!',
    templateId: 'd-your-template-id',
    dynamicTemplateData: {
      subscription_id: subscriptionId,
      cancel_url: `${process.env.FRONTEND_URL}/cancel/${subscriptionId}`
    }
  };
  
  await sgMail.send(msg);
};
```

## Webhooks

### 1. Stripe Webhooks
```javascript
app.post('/api/webhooks/stripe', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  
  switch (event.type) {
    case 'invoice.payment_succeeded':
      await handleSuccessfulPayment(event.data.object);
      break;
    case 'invoice.payment_failed':
      await handleFailedPayment(event.data.object);
      break;
    case 'customer.subscription.deleted':
      await handleSubscriptionCancellation(event.data.object);
      break;
  }
  
  res.json({received: true});
});
```

## Variables de Entorno Necesarias

```env
# Stripe
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# PayPal
REACT_APP_PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...

# Email
SENDGRID_API_KEY=SG...

# Base de datos
DATABASE_URL=...

# Frontend
REACT_APP_API_URL=https://api.oportunidadesglobales.es
```

## Próximos Pasos

1. **Configurar Stripe/PayPal** con las claves reales
2. **Implementar backend** con Node.js/Express
3. **Configurar base de datos** para almacenar suscripciones
4. **Configurar servicio de email** (SendGrid, Mailgun, etc.)
5. **Implementar webhooks** para manejar renovaciones automáticas
6. **Agregar página de gestión** para que usuarios cancelen suscripciones
7. **Implementar analytics** para tracking de conversiones
8. **Configurar SSL** para procesamiento seguro de pagos

## Notas de Seguridad

- Nunca expongas las claves secretas en el frontend
- Usa HTTPS en producción
- Valida todos los inputs del usuario
- Implementa rate limiting en los endpoints de pago
- Usa webhooks para confirmar pagos, no solo respuestas del frontend
- Mantén logs detallados de todas las transacciones
