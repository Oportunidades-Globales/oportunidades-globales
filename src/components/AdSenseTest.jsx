import React from 'react';

const AdSenseTest = ({ adSlot, title = "Anuncio de Prueba" }) => {
  return (
    <div className="bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-8 text-center">
      <div className="text-gray-600 mb-2">
        <strong>{title}</strong>
      </div>
      <div className="text-sm text-gray-500">
        Slot: {adSlot}
      </div>
      <div className="text-xs text-gray-400 mt-2">
        En producción se mostrará el anuncio real de Google AdSense
      </div>
    </div>
  );
};

export default AdSenseTest;
