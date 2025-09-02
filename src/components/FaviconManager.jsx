import { useEffect } from 'react';

const FaviconManager = () => {
  useEffect(() => {
    // Función para cambiar el favicon
    const changeFavicon = () => {
      // Obtener todos los enlaces de favicon existentes
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      
      // Remover todos los favicons existentes
      existingFavicons.forEach(link => {
        link.remove();
      });
      
      // Crear un favicon dinámico con Canvas
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      
      // Fondo azul
      ctx.fillStyle = '#3b82f6';
      ctx.fillRect(0, 0, 32, 32);
      
      // Texto blanco "OG"
      ctx.fillStyle = 'white';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('OG', 16, 16);
      
      // Convertir a data URL
      const dataURL = canvas.toDataURL();
      
      // Crear nuevos enlaces de favicon
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.href = dataURL;
      favicon.type = 'image/png';
      
      const shortcutIcon = document.createElement('link');
      shortcutIcon.rel = 'shortcut icon';
      shortcutIcon.href = dataURL;
      shortcutIcon.type = 'image/png';
      
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = dataURL;
      
      // Agregar al head
      document.head.appendChild(favicon);
      document.head.appendChild(shortcutIcon);
      document.head.appendChild(appleTouchIcon);
      
      console.log('Favicon dinámico creado:', dataURL.substring(0, 50) + '...');
    };
    
    // Cambiar el favicon inmediatamente
    changeFavicon();
    
    // Cambiar el favicon cada 500ms para forzar la actualización
    const interval = setInterval(changeFavicon, 500);
    
    // También cambiar después de un pequeño delay para asegurar que se aplique
    const timer = setTimeout(changeFavicon, 100);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return null; // Este componente no renderiza nada visual
};

export default FaviconManager;
