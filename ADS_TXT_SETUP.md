# Configuración del archivo ads.txt para Google AdSense

## ¿Qué es ads.txt?

El archivo `ads.txt` (Authorized Digital Sellers) es un archivo de texto que los editores web pueden usar para declarar públicamente las empresas autorizadas para vender su inventario digital. Google AdSense requiere este archivo para verificar la propiedad del sitio web.

## Ubicación del archivo

El archivo `ads.txt` debe estar ubicado en la raíz de tu dominio web, es decir:
- `https://tudominio.com/ads.txt`

## Configuración actual

He creado el archivo `ads.txt` en la carpeta `public/` de tu proyecto. Este archivo se copiará automáticamente a la raíz de tu sitio web cuando hagas el build.

## Pasos para completar la configuración

1. **Obtén tu ID de publicador de Google AdSense:**
   - Ve a tu cuenta de Google AdSense
   - Busca tu ID de publicador (formato: `pub-XXXXXXXXXXXXXXXX`)

2. **Edita el archivo `public/ads.txt`:**
   - Abre el archivo `public/ads.txt`
   - Reemplaza `pub-1234567890123456` con tu ID real de AdSense
   - Descomenta la línea (quita el # al inicio)

3. **Ejemplo de configuración correcta:**
   ```
   google.com, pub-TU_ID_REAL_AQUI, DIRECT, f08c47fec0942fa0
   ```

4. **Despliega los cambios:**
   - Haz commit y push de los cambios
   - Netlify desplegará automáticamente la nueva versión

5. **Verifica en Google AdSense:**
   - Ve a AdSense > Sitios
   - Verifica que el estado del archivo ads.txt cambie a "Encontrado"

## Verificación

Puedes verificar que el archivo esté funcionando visitando:
`https://tudominio.com/ads.txt`

## Notas importantes

- El archivo debe estar en la raíz del dominio (no en un subdirectorio)
- Debe ser accesible públicamente (sin autenticación)
- El formato debe ser exacto (sin espacios extra, comas correctas)
- Puede tomar hasta 24 horas para que Google AdSense detecte el archivo

## Troubleshooting

Si Google AdSense sigue reportando que no encuentra el archivo:

1. Verifica que el archivo esté en `https://tudominio.com/ads.txt`
2. Asegúrate de que no haya errores de formato
3. Espera hasta 24 horas para la propagación
4. Verifica que tu sitio esté desplegado correctamente
