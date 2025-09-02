# 🐙 Configuración de GitHub

## Pasos para subir tu repositorio a GitHub:

### 1. **Crear repositorio en GitHub:**
1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en **"New repository"**
3. Nombre: `oportunidades-globales`
4. Descripción: `Sitio web de oportunidades internacionales: becas, voluntariados, trabajos y cruceros`
5. Hazlo **Público**
6. **NO** agregues README, .gitignore o licencia (ya los tenemos)
7. Haz clic en **"Create repository"**

### 2. **Conectar con tu repositorio local:**

Después de crear el repositorio, ejecuta estos comandos en tu terminal:

```bash
# Reemplaza TU_USUARIO con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/oportunidades-globales.git

# Subir el código
git push -u origin main
```

### 3. **Verificar que todo esté bien:**
- Ve a tu repositorio en GitHub
- Deberías ver todos los archivos
- El README.md debería mostrarse en la página principal

### 4. **Configurar GitHub Pages (opcional):**
1. Ve a **Settings** de tu repositorio
2. Scroll hasta **Pages**
3. En **Source**, selecciona **"Deploy from a branch"**
4. Selecciona **"main"** branch
5. Tu sitio estará disponible en: `https://TU_USUARIO.github.io/oportunidades-globales`

## 🎉 ¡Listo!

Tu repositorio estará en GitHub y podrás:
- ✅ Compartir el código
- ✅ Usar GitHub Pages para hosting gratuito
- ✅ Conectar con Netlify para deployment automático
- ✅ Colaborar con otros desarrolladores

## 📝 Próximos pasos recomendados:

1. **Subir a Netlify** (más fácil para React):
   - Conecta tu repositorio de GitHub
   - Deploy automático en cada push

2. **Configurar dominio personalizado** (opcional)

3. **Configurar Google AdSense** y **Analytics**

¡Tu proyecto está listo para el mundo! 🌍
