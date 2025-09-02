import React from 'react';
import { useNavigate } from 'react-router-dom';

const OportunidadCard = ({ oportunidad }) => {
  const navigate = useNavigate();

  // Validación de seguridad
  if (!oportunidad || !oportunidad.id) {
    return null;
  }

  const getCategoriaColor = (categoria) => {
    const colores = {
      'Beca': 'bg-blue-100 text-blue-800',
      'Voluntariado': 'bg-green-100 text-green-800',
      'Trabajo': 'bg-purple-100 text-purple-800',
      'Crucero': 'bg-orange-100 text-orange-800'
    };
    return colores[categoria] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    try {
      // Parsear la fecha manualmente para evitar problemas de zona horaria
      const [year, month, day] = dateString.split('-').map(num => parseInt(num, 10));
      const date = new Date(year, month - 1, day); // month - 1 porque los meses van de 0-11
      
      if (isNaN(date.getTime())) return 'Fecha no disponible';
      
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Fecha no disponible';
    }
  };

  const handleVerDetalles = () => {
    console.log('Haciendo clic en Ver más detalles para oportunidad:', oportunidad.id);
    try {
      navigate(`/oportunidad/${oportunidad.id}`);
      console.log('Navegando a:', `/oportunidad/${oportunidad.id}`);
    } catch (error) {
      console.error('Error al navegar:', error);
    }
  };

  return (
    <div className="card overflow-hidden group">
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={oportunidad.imagen || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMTIwQzE2MCAxMDcuMTYzIDE3MC4xNjMgOTcgMTgzIDk3SDE2N0MxNzkuODM3IDk3IDE5MCAxMDcuMTYzIDE5MCAxMjBIMTYwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTYwIDE0MEMxNjAgMTI3LjE2MyAxNzAuMTYzIDExNyAxODMgMTE3SDE2N0MxNzkuODM3IDExNyAxOTAgMTI3LjE2MyAxOTAgMTQwSDE2MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2ZyB4PSIxNzAiIHk9IjEwMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNMTAgMTBIMTdWMTdIMFYxMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2ZyB4PSIxNzAiIHk9IjEyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNMTAgMTBIMTdWMTdIMFYxMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3NDhCIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlbiBObyBEaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4K'}
          alt={oportunidad.titulo || 'Oportunidad'}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMTIwQzE2MCAxMDcuMTYzIDE3MC4xNjMgOTcgMTgzIDk3SDE2N0MxNzkuODM3IDk3IDE5MCAxMDcuMTYzIDE5MCAxMjBIMTYwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTYwIDE0MEMxNjAgMTI3LjE2MyAxNzAuMTYzIDExNyAxODMgMTE3SDE2N0MxNzkuODM3IDExNyAxOTAgMTI3LjE2MyAxOTAgMTQwSDE2MFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2ZyB4PSIxNzAiIHk9IjEwMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNMTAgMTBIMTdWMTdIMFYxMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHN2ZyB4PSIxNzAiIHk9IjEyMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9Im5vbmUiPgo8cGF0aCBkPSJNMTAgMTBIMTdWMTdIMFYxMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3NDhCIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkltYWdlbiBObyBEaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4K';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Badge de categoría */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoriaColor(oportunidad.categoria)}`}>
            {oportunidad.categoria || 'Sin categoría'}
          </span>
        </div>

        {/* País */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-medium text-gray-700">{oportunidad.pais || 'País no especificado'}</span>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Título */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
          {oportunidad.titulo || 'Título no disponible'}
        </h3>

        {/* Descripción */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {oportunidad.descripcion || 'Descripción no disponible'}
        </p>

        {/* Detalles */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Duración: {oportunidad.duracion || 'No especificada'}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Fecha límite: {formatDate(oportunidad.fechaLimite)}</span>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="flex justify-between items-center">
          <button 
            onClick={handleVerDetalles}
            className="btn-primary w-full hover:scale-105 transition-transform duration-200"
          >
            Ver más detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default OportunidadCard;
