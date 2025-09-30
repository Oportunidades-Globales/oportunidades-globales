// Configuración de Google AdSense
// Reemplaza estos valores con los slots reales de tu cuenta de AdSense

export const AD_SLOTS = {
  // Slots para página principal
  HOME_BOTTOM: '3008002058', // Anuncio inferior en página principal
  
  // Slots para página de artículos
  ARTICLES_TOP: '1234567895', // Anuncio superior en lista de artículos
  ARTICLES_MIDDLE: '1234567896', // Anuncio en el medio de la lista
  ARTICLES_BOTTOM: '1234567890', // Anuncio inferior en lista de artículos
  
  // Slots para detalle de artículos
  ARTICLE_AFTER_IMAGE: '1234567892', // Anuncio después de la imagen
  ARTICLE_MIDDLE_CONTENT: '1234567894', // Anuncio en el medio del contenido
  ARTICLE_AFTER_CONTENT: '1234567893', // Anuncio después del contenido
  
  // Slots para detalle de oportunidades
  OPPORTUNITY_DETAIL: '0987654321', // Anuncio en detalle de oportunidades
  
  // Slots para otras páginas
  QUIENES_SOMOS: '1234567897', // Anuncio en página "Quiénes Somos"
  CONTACTO: '1234567898', // Anuncio en página de contacto
};

// Configuración del cliente de AdSense
export const AD_CLIENT = 'ca-pub-5233249247468234';

// Configuración por defecto de anuncios
export const DEFAULT_AD_CONFIG = {
  adFormat: 'auto',
  fullWidthResponsive: true,
  className: 'max-w-full'
};
