// Configuración de Google Analytics
export const analyticsConfig = {
  // Reemplaza con tu Tracking ID real de Google Analytics
  trackingId: 'G-XXXXXXXXXX',
  
  // Configuración adicional
  config: {
    // Configuración de privacidad
    anonymize_ip: true,
    
    // Configuración de cookies
    cookie_expires: 63072000, // 2 años
    
    // Configuración de enlaces externos
    link_attribution: true,
    
    // Configuración de velocidad de sitio
    site_speed_sample_rate: 100,
  }
};

// Eventos personalizados para tracking
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Eventos específicos para el sitio
export const analyticsEvents = {
  // Tracking de oportunidades
  viewOpportunity: (opportunityId, opportunityTitle) => {
    trackEvent('view_opportunity', 'Opportunity', opportunityTitle, opportunityId);
  },
  
  // Tracking de aplicaciones
  applyOpportunity: (opportunityId, opportunityTitle) => {
    trackEvent('apply_opportunity', 'Conversion', opportunityTitle, opportunityId);
  },
  
  // Tracking de filtros
  useFilter: (filterType, filterValue) => {
    trackEvent('use_filter', 'Filter', filterValue, filterType);
  },
  
  // Tracking de búsquedas
  searchOpportunities: (searchTerm) => {
    trackEvent('search_opportunities', 'Search', searchTerm);
  },
  
  // Tracking de contacto
  contactForm: () => {
    trackEvent('contact_form', 'Conversion', 'Contact Form');
  }
};
