// Configuración de Google AdSense
// Reemplaza estos valores con los slots reales de tu cuenta de AdSense

export const AD_SLOTS = {
  // Slots para página principal
  HOME_BOTTOM: '3008002058', // Anuncio inferior en página principal
  
  // Slots para página de artículos
  ARTICLES_TOP: '7612449715', // Anuncio superior en lista de artículos
  ARTICLES_MIDDLE: '5442593705', // Anuncio en el medio de la lista
  ARTICLES_BOTTOM: '5498434024', // Anuncio inferior en lista de artículos
  
  // Slots para detalle de artículos
  ARTICLE_AFTER_IMAGE: '2816430361', // Anuncio después de la imagen
  ARTICLE_MIDDLE_CONTENT: '3962631704', // Anuncio en el medio del contenido
  ARTICLE_AFTER_CONTENT: '1559189012', // Anuncio después del contenido
  
  // Slots para detalle de oportunidades
  OPPORTUNITY_DETAIL: '1503348692', // Anuncio en detalle de oportunidades
  
  // Slots para otras páginas
  QUIENES_SOMOS: '4986286372', // Anuncio en página "Quiénes Somos"
  CONTACTO: '9190267027', // Anuncio en página de contacto
};

// Configuración del cliente de AdSense
export const AD_CLIENT = 'ca-pub-5233249247468234';

// Configuración por defecto de anuncios
export const DEFAULT_AD_CONFIG = {
  adFormat: 'auto',
  fullWidthResponsive: true,
  className: 'max-w-full'
};
