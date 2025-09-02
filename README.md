# 🌍 Oportunidades Globales

Una plataforma web moderna para descubrir oportunidades únicas en el extranjero: becas, voluntariados, trabajos y cruceros.

## ✨ Características

- **Diseño Moderno**: Interfaz minimalista y atractiva con TailwindCSS
- **Responsive**: Optimizado para todos los dispositivos
- **Filtros Inteligentes**: Búsqueda por categoría y texto
- **Contenido Dinámico**: Sistema de tarjetas para mostrar oportunidades
- **Navegación Intuitiva**: Header sticky con menú móvil
- **SEO Optimizado**: Metadatos completos y estructura semántica

## 🚀 Tecnologías Utilizadas

- **React 18** - Framework de interfaz de usuario
- **TailwindCSS** - Framework de CSS utilitario
- **JavaScript ES6+** - Funcionalidades modernas
- **Responsive Design** - Mobile-first approach

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd oportunidades-globales
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm start
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx     # Navegación principal
│   ├── Hero.jsx       # Sección principal
│   ├── Filtros.jsx    # Búsqueda y filtros
│   ├── OportunidadCard.jsx  # Tarjeta individual
│   ├── ListaOportunidades.jsx  # Lista de oportunidades
│   └── Footer.jsx     # Pie de página
├── data/              # Datos de la aplicación
│   └── oportunidades.js  # Lista de oportunidades
├── App.js             # Componente principal
└── index.css          # Estilos globales y TailwindCSS
```

## 📝 Agregar Nuevas Oportunidades

Para agregar nuevas oportunidades, edita el archivo `src/data/oportunidades.js`:

```javascript
export const oportunidades = [
  {
    id: 10,
    categoria: "Beca",
    titulo: "Nueva Beca Internacional",
    descripcion: "Descripción de la nueva oportunidad...",
    imagen: "https://ejemplo.com/imagen.jpg",
    link: "#",
    pais: "País",
    duracion: "Duración",
    fechaLimite: "2024-12-31"
  }
  // ... más oportunidades
];
```

### Estructura de una Oportunidad

- **id**: Identificador único (número)
- **categoria**: "Beca", "Voluntariado", "Trabajo", o "Crucero"
- **titulo**: Título descriptivo de la oportunidad
- **descripcion**: Descripción detallada
- **imagen**: URL de la imagen representativa
- **link**: Enlace para más información
- **pais**: País o región de la oportunidad
- **duracion**: Duración del programa
- **fechaLimite**: Fecha límite de aplicación (YYYY-MM-DD)

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Azul principal
    600: '#2563eb', // Azul hover
  },
  secondary: {
    500: '#22c55e', // Verde secundario
    600: '#16a34a', // Verde hover
  }
}
```

### Tipografía
La fuente principal es Inter, pero se puede cambiar en `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Tu-Fuente', 'system-ui', 'sans-serif'],
}
```

## 📱 Responsive Design

- **Mobile**: 1 columna de tarjetas
- **Tablet**: 2 columnas de tarjetas
- **Desktop**: 3 columnas de tarjetas

## 🔍 Funcionalidades de Búsqueda

- **Filtro por Categoría**: Becas, Voluntariados, Trabajos, Cruceros
- **Búsqueda por Texto**: Busca en título, descripción y país
- **Filtros Combinados**: Ambos filtros funcionan simultáneamente

## 🚀 Despliegue

### Netlify
1. Conecta tu repositorio de GitHub
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `build`

### Vercel
1. Importa tu proyecto desde GitHub
2. Framework preset: Create React App
3. Deploy automático en cada push

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Para soporte o preguntas, contacta a través de:
- Email: soporte@oportunidades-globales.com
- GitHub Issues: [Crear un issue](https://github.com/tu-usuario/oportunidades-globales/issues)

---

**¡Explora el mundo a través de oportunidades únicas!** 🌍✨
