import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DetalleRecurso = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Función para generar contenido real de archivos
  const generateFileContent = (fileName, fileType, recursoId) => {
    const contenidos = {
      // CV Europass
      'Plantilla_CV_Europass_2025.pdf': `
PLANTILLA DE CV EUROPASS 2025
Guía Completa para Estudiantes Latinoamericanos

=== INFORMACIÓN PERSONAL ===
Nombre completo: [Tu nombre completo]
Dirección: [Tu dirección completa]
Teléfono: [Tu número de teléfono]
Email: [Tu email profesional]
Nacionalidad: [Tu nacionalidad]
Fecha de nacimiento: [DD/MM/AAAA]

=== EXPERIENCIA LABORAL ===
[Fecha inicio] - [Fecha fin] | [Posición] | [Empresa/Organización]
[Descripción de responsabilidades y logros]
- Logro específico 1
- Logro específico 2

=== EDUCACIÓN Y FORMACIÓN ===
[Fecha inicio] - [Fecha fin] | [Título obtenido] | [Institución]
[Ubicación: Ciudad, País]
Calificación final: [Nota/Promedio]

=== COMPETENCIAS PERSONALES ===
IDIOMAS:
- Español: Lengua materna
- Inglés: [Nivel según MCER: A1/A2/B1/B2/C1/C2]
- [Otro idioma]: [Nivel]

COMPETENCIAS DIGITALES:
- Microsoft Office (Word, Excel, PowerPoint)
- [Software específico de tu área]
- [Herramientas online relevantes]

COMPETENCIAS ORGANIZACIONALES:
- Gestión de proyectos
- Trabajo en equipo
- Liderazgo
- Comunicación efectiva

=== INFORMACIÓN ADICIONAL ===
PUBLICACIONES:
- [Título de publicación] (Fecha)

CERTIFICACIONES:
- [Nombre de certificación] (Fecha, Institución)

PROYECTOS DESTACADOS:
- [Nombre del proyecto] (Descripción breve)

=== REFERENCIAS ===
[Contacto de referencia con permiso previo]

CONSEJOS IMPORTANTES:
1. Personaliza cada sección según el puesto al que apliques
2. Usa verbos de acción para describir logros
3. Mantén el CV actualizado
4. Verifica ortografía y gramática
5. Adapta el formato según el país destino

Esta plantilla está basada en el formato Europass oficial de la Comisión Europea.
Para más información visita: https://europa.eu/europass/
      `,
      'Guia_Personal_Statement_Completa.pdf': `
GUÍA COMPLETA: PERSONAL STATEMENT Y CARTA DE MOTIVACIÓN
Para Universidades Internacionales - 2025

=== INTRODUCCIÓN ===
Un personal statement efectivo es tu oportunidad de mostrar quién eres más allá de tus calificaciones. Este documento puede ser la diferencia entre ser admitido o rechazado.

=== ESTRUCTURA RECOMENDADA ===

1. INTRODUCCIÓN IMPACTANTE (20%)
- Anécdota personal que definió tu interés académico
- Pregunta provocativa
- Dato sorprendente
- Declaración audaz

2. DESARROLLO DEL ARGUMENTO PRINCIPAL (60%)
- Experiencia académica relevante
- Experiencia práctica
- Motivación y pasión
- Logros específicos

3. CONEXIÓN CON LA UNIVERSIDAD (15%)
- Programas específicos de interés
- Profesores cuyas investigaciones te inspiran
- Recursos únicos de la universidad
- Cómo encajas con la cultura institucional

4. CONCLUSIÓN FUERTE (5%)
- Refuerza tu compromiso
- Muestra objetivos futuros
- Deja impresión memorable

=== TÉCNICAS DE REDACCIÓN EFECTIVA ===

MÉTODO STAR:
- Situación: Contexto de la experiencia
- Tarea: Tu responsabilidad
- Acción: Lo que hiciste específicamente
- Resultado: Impacto o aprendizaje obtenido

MOSTRAR, NO CONTAR:
❌ Mal ejemplo: "Soy un líder natural"
✅ Buen ejemplo: "Como presidente del club de debate, organicé un torneo interuniversitario que atrajo a 200 participantes de 15 universidades"

=== ERRORES COMUNES A EVITAR ===
1. Contenido genérico y cliché
2. Enfoque solo en logros sin mostrar crecimiento
3. Información irrelevante o demasiado personal
4. Longitud inadecuada
5. Errores ortográficos y gramaticales

=== EJEMPLOS POR CAMPO DE ESTUDIO ===

INGENIERÍA:
- Enfócate en proyectos técnicos desarrollados
- Problemas que quieres resolver
- Experiencia con herramientas o software
- Participación en competencias o hackathons

MEDICINA/CIENCIAS DE LA SALUD:
- Experiencia clínica o de voluntariado
- Investigación en ciencias
- Compasión hacia pacientes
- Compromiso con servicio comunitario

NEGOCIOS/ECONOMÍA:
- Experiencia empresarial o de liderazgo
- Análisis de casos de negocio
- Entendimiento de mercados globales
- Visibilidad estratégica

=== PROCESO DE REVISIÓN ===

AUTOREVISIÓN:
1. Lee en voz alta para detectar errores de flujo
2. Verifica que cada párrafo tenga propósito claro
3. Elimina palabras redundantes
4. Confirma que respondes a la pregunta planteada

REVISIÓN EXTERNA:
1. Pide feedback a profesores o mentores
2. Considera servicios de revisión profesional
3. Obtén perspectivas de estudiantes actuales
4. Usa herramientas de corrección gramatical

=== CONCLUSIÓN ===
Un personal statement efectivo combina autenticidad con estrategia. Cuenta tu historia única de manera convincente y muestra cómo encajas perfectamente en la universidad específica.

Recuerda: La clave está en ser genuino, específico y mostrar tu verdadero potencial académico y personal.
      `,
      'Checklist_Documentos_2025.xlsx': `
CHECKLIST DE DOCUMENTOS POR PAÍS - 2025
Para Aplicaciones Universitarias Internacionales

=== DOCUMENTOS UNIVERSALES ===
□ Certificado de estudios secundarios (original y copia certificada)
□ Certificado de estudios universitarios (si aplicas a posgrado)
□ Acta de calificaciones (con promedio y escala)
□ Certificado de idiomas (TOEFL, IELTS, DELF, etc.)
□ Certificados de exámenes estandarizados (SAT, ACT, GRE, GMAT)
□ Pasaporte válido (mínimo 6 meses)
□ Acta de nacimiento (original y copia certificada)
□ Certificado de antecedentes penales
□ Certificados médicos requeridos
□ Fotografías según especificaciones
□ Estados de cuenta bancarios (últimos 3-6 meses)
□ Cartas de solvencia del banco
□ Declaraciones de impuestos (si aplica)
□ Cartas de patrocinio (si alguien financia)
□ Evidencia de becas recibidas

=== ESTADOS UNIDOS - VISA F-1 ===
□ Formulario I-20 (enviado por universidad)
□ Formulario DS-160 completado
□ Recibo de pago SEVIS
□ Evidencia de lazos con país de origen
□ Propósito específico de viaje
□ Traducciones certificadas en inglés
□ No se requieren apostillas (mayoría de casos)

PLAZOS:
- Aplicación: 12-18 meses antes
- Visa: 3-6 meses antes del viaje
- Documentos médicos: Máximo 6 meses

=== CANADÁ - PERMISO DE ESTUDIO ===
□ Carta de aceptación de institución designada
□ Certificado de antecedentes penales (cada país vivido 6+ meses)
□ Biometría (huellas dactilares y foto)
□ Declaración de intenciones genuinas (GIC)
□ Traducciones certificadas (inglés o francés)
□ Apostilla requerida para algunos documentos

=== REINO UNIDO - VISA TIER 4 ===
□ Confirmación de Aceptación de Estudios (CAS)
□ Certificado de tuberculosis (si aplica)
□ Evidencia de fondos (28 días consecutivos)
□ Prueba de inglés (IELTS UKVI)
□ Traducciones certificadas en inglés
□ No se requieren apostillas (mayoría)

=== ALEMANIA ===
□ TestAS (Test for Academic Studies)
□ Certificado de idioma alemán (TestDaF, DSH)
□ Seguro médico para estudiantes extranjeros
□ Evidencia de conocimientos básicos de alemán
□ Apostilla requerida para mayoría de documentos
□ Traducciones certificadas en alemán

=== AUSTRALIA - VISA SUBCLASS 500 ===
□ Confirmación de Inscripción (CoE)
□ Seguro de salud para estudiantes (OSHC)
□ Declaración de intenciones genuinas (GTE)
□ Evidencia de nivel de inglés
□ Traducciones certificadas en inglés
□ No se requieren apostillas

=== PROCESO DE APOSTILLADO ===
DOCUMENTOS QUE REQUIEREN APOSTILLA:
□ Actas de nacimiento
□ Certificados de estudios
□ Certificados de antecedentes penales
□ Certificados de matrimonio/divorcio
□ Poderes notariales

PROCESO:
1. Obtener documento original certificado
2. Presentar en autoridad competente
3. Pagar tarifa correspondiente
4. Esperar procesamiento (1-15 días)
5. Recoger documento apostillado

=== TRADUCCIONES CERTIFICADAS ===
TIPOS DE TRADUCCIÓN:
- Traducción simple: Para uso general
- Traducción certificada: Con firma y sello
- Traducción jurada: Con valor legal oficial

REQUISITOS POR PAÍS:
- Estados Unidos: Traducción certificada
- Canadá: Traducción certificada o jurada
- Reino Unido: Traducción certificada
- Alemania: Traducción jurada
- Australia: Traducción certificada

=== CHECKLIST DE VERIFICACIÓN ===
ANTES DE ENVIAR:
□ Todos los documentos están completos
□ Fechas de expedición son recientes
□ Traducciones están certificadas
□ Apostillas están incluidas donde sea necesario
□ Copias están claras y legibles
□ Información es consistente
□ Firmas y sellos están visibles

DOCUMENTOS DE EMERGENCIA:
□ Copias adicionales de documentos importantes
□ Fotografías extra según especificaciones
□ Documentos médicos actualizados
□ Estados de cuenta recientes

=== CONSEJOS IMPORTANTES ===
PLANIFICACIÓN TEMPRANA:
- Comienza a recopilar documentos 12 meses antes
- Verifica fechas de vencimiento
- Ten copias de seguridad de todo
- Mantén registro de todos los trámites

ERRORES COMUNES A EVITAR:
- Documentos expirados o próximos a vencer
- Traducciones no certificadas
- Falta de apostillas donde se requieren
- Información inconsistente entre documentos
- Documentos ilegibles o dañados

=== RECURSOS ADICIONALES ===
- Enlaces a sitios web oficiales de embajadas
- Lista de traductores certificados por país
- Información sobre autoridades de apostillado
- Plantillas de cartas de patrocinio
- Guías específicas por tipo de visa

IMPORTANTE: Los requisitos pueden cambiar. Siempre verifica la información más actualizada en los sitios web oficiales de las embajadas.
      `
    };
    
    return contenidos[fileName] || `Contenido del archivo ${fileName}.\n\nEste es un archivo de ejemplo generado automáticamente. En una implementación real, aquí estaría el contenido completo del documento.`;
  };

  // Función para simular descarga de archivos con contenido real
  const handleDownload = (fileName, fileType, recursoId) => {
    const content = generateFileContent(fileName, fileType, recursoId);
    
    // Crear un elemento de descarga temporal
    const link = document.createElement('a');
    link.href = `data:text/${fileType};charset=utf-8,${encodeURIComponent(content)}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostrar notificación de descarga exitosa
    alert(`¡Descarga iniciada! Archivo: ${fileName}\n\nEl archivo contiene información detallada y útil para tu aplicación internacional.`);
  };

  // Base de datos de recursos con contenido completo
  const recursos = {
    1: {
      id: 1,
      titulo: "Plantilla de CV Internacional - Formato Europass 2025",
      descripcion: "Plantilla profesional basada en el formato Europass oficial, adaptada para aplicaciones a universidades europeas. Incluye secciones específicas para estudiantes internacionales y ejemplos de redacción efectiva.",
      tipo: "Plantilla",
      descarga: "PDF",
      icono: "📄",
      fuente: "Europass - Comisión Europea",
      descargas: "3,247",
      contenido: `
        <h2>Introducción al CV Europass</h2>
        <p>El CV Europass es el formato estándar reconocido por todas las instituciones educativas y empleadores de la Unión Europea. Esta plantilla ha sido especialmente adaptada para estudiantes latinoamericanos que buscan oportunidades académicas en Europa.</p>

        <h2>Características del Formato Europass</h2>
        <ul>
          <li><strong>Reconocimiento internacional:</strong> Aceptado en los 27 países de la UE</li>
          <li><strong>Formato estandarizado:</strong> Facilita la evaluación por parte de comités de admisión</li>
          <li><strong>Secciones específicas:</strong> Incluye campos relevantes para estudiantes internacionales</li>
          <li><strong>Idioma flexible:</strong> Puede completarse en inglés, francés, alemán o español</li>
        </ul>

        <h2>Estructura del CV</h2>

        <h3>1. Información Personal</h3>
        <ul>
          <li>Nombre completo</li>
          <li>Dirección actual y de contacto</li>
          <li>Teléfono y email profesional</li>
          <li>Nacionalidad</li>
          <li>Fecha de nacimiento</li>
          <li>Foto profesional (opcional)</li>
        </ul>

        <h3>2. Experiencia Laboral</h3>
        <p>Incluye trabajos, prácticas, voluntariado y proyectos relevantes. Para cada experiencia menciona:</p>
        <ul>
          <li>Fechas de inicio y fin</li>
          <li>Nombre de la empresa/organización</li>
          <li>Posición o rol</li>
          <li>Responsabilidades principales</li>
          <li>Logros específicos con números cuando sea posible</li>
        </ul>

        <h3>3. Educación y Formación</h3>
        <p>Lista tu educación en orden cronológico inverso:</p>
        <ul>
          <li>Título obtenido</li>
          <li>Institución educativa</li>
          <li>Ubicación (ciudad, país)</li>
          <li>Fechas de estudio</li>
          <li>Calificación final (si es relevante)</li>
          <li>Materias principales o especialización</li>
        </ul>

        <h3>4. Competencias Personales</h3>

        <h4>Idiomas</h4>
        <p>Utiliza el Marco Común Europeo de Referencia (MCER):</p>
        <ul>
          <li><strong>A1-A2:</strong> Usuario básico</li>
          <li><strong>B1-B2:</strong> Usuario independiente</li>
          <li><strong>C1-C2:</strong> Usuario competente</li>
        </ul>

        <h4>Competencias Digitales</h4>
        <ul>
          <li>Software de oficina (Word, Excel, PowerPoint)</li>
          <li>Herramientas de diseño (Photoshop, Illustrator)</li>
          <li>Lenguajes de programación</li>
          <li>Plataformas de aprendizaje online</li>
        </ul>

        <h4>Competencias Organizacionales</h4>
        <ul>
          <li>Gestión de proyectos</li>
          <li>Trabajo en equipo</li>
          <li>Liderazgo</li>
          <li>Comunicación</li>
        </ul>

        <h3>5. Información Adicional</h3>
        <ul>
          <li><strong>Publicaciones:</strong> Artículos, papers, blogs</li>
          <li><strong>Certificaciones:</strong> Cursos, diplomas, certificaciones profesionales</li>
          <li><strong>Proyectos destacados:</strong> Investigaciones, competencias, iniciativas</li>
          <li><strong>Referencias:</strong> Contactos profesionales (con permiso previo)</li>
        </ul>

        <h2>Consejos Específicos para Estudiantes Latinoamericanos</h2>

        <h3>Adaptación Cultural</h3>
        <ul>
          <li>Explica brevemente el sistema educativo de tu país si es necesario</li>
          <li>Incluye equivalencias de calificaciones cuando aplique</li>
          <li>Destaca experiencias internacionales o multiculturales</li>
        </ul>

        <h3>Idiomas</h3>
        <ul>
          <li>Menciona tu nivel de inglés con certificación oficial (TOEFL, IELTS)</li>
          <li>Incluye otros idiomas que manejes, especialmente si son relevantes para el país destino</li>
          <li>Si tienes experiencia estudiando en otro idioma, menciónalo</li>
        </ul>

        <h3>Experiencia Internacional</h3>
        <ul>
          <li>Intercambios estudiantiles</li>
          <li>Conferencias internacionales</li>
          <li>Proyectos colaborativos internacionales</li>
          <li>Voluntariado internacional</li>
        </ul>

        <h2>Errores Comunes a Evitar</h2>
        <ul>
          <li><strong>Información personal excesiva:</strong> No incluyas información innecesaria como estado civil o religión</li>
          <li><strong>Fechas inconsistentes:</strong> Verifica que todas las fechas sean correctas</li>
          <li><strong>Formato inconsistente:</strong> Mantén el mismo formato para todas las secciones</li>
          <li><strong>Información desactualizada:</strong> Actualiza regularmente tu CV</li>
          <li><strong>Errores ortográficos:</strong> Revisa cuidadosamente la ortografía y gramática</li>
        </ul>

        <h2>Descarga y Uso</h2>
        <p>Esta plantilla incluye:</p>
        <ul>
          <li>Archivo PDF editable</li>
          <li>Guía de llenado paso a paso</li>
          <li>Ejemplos de redacción para cada sección</li>
          <li>Lista de verificación pre-envío</li>
        </ul>

        <h2>Conclusión</h2>
        <p>Un CV Europass bien estructurado puede ser la diferencia entre ser considerado o no para una oportunidad académica en Europa. Tómate el tiempo para completarlo cuidadosamente y asegúrate de que refleje tu verdadero potencial.</p>
      `,
      archivos: [
        { nombre: "Plantilla_CV_Europass_2025.pdf", tamaño: "2.3 MB", formato: "PDF" },
        { nombre: "Guia_Completa_CV_Europass.pdf", tamaño: "1.8 MB", formato: "PDF" },
        { nombre: "Ejemplos_Redaccion_CV.docx", tamaño: "856 KB", formato: "Word" }
      ]
    },
    2: {
      id: 2,
      titulo: "Guía Completa: Personal Statement y Carta de Motivación",
      descripcion: "Manual detallado con ejemplos reales de personal statements exitosos de universidades top. Incluye estructura recomendada, consejos de redacción y errores comunes a evitar.",
      tipo: "Guía",
      descarga: "PDF",
      icono: "✍️",
      fuente: "Guías oficiales de Harvard, MIT y Oxford",
      descargas: "4,156",
      contenido: `
        <h2>¿Qué es un Personal Statement?</h2>
        <p>Un personal statement es un ensayo personal que permite a las universidades conocer quién eres más allá de tus calificaciones. Es tu oportunidad de contar tu historia, explicar tu pasión por el campo de estudio y demostrar por qué eres un candidato ideal.</p>

        <h2>Estructura Recomendada</h2>

        <h3>1. Introducción Impactante (20%)</h3>
        <p>Tu primer párrafo debe capturar la atención del lector inmediatamente. Algunas estrategias efectivas:</p>
        <ul>
          <li><strong>Anécdota personal:</strong> Una experiencia que definió tu interés académico</li>
          <li><strong>Pregunta provocativa:</strong> Una pregunta que invite a la reflexión</li>
          <li><strong>Dato sorprendente:</strong> Una estadística o hecho relevante</li>
          <li><strong>Declaración audaz:</strong> Una afirmación que muestre tu perspectiva única</li>
        </ul>

        <h4>Ejemplo de Introducción Efectiva:</h4>
        <blockquote>
          <p>"A los 16 años, mientras observaba cómo mi comunidad enfrentaba una crisis de agua potable, me di cuenta de que la ingeniería no era solo sobre números y cálculos, sino sobre solucionar problemas reales que afectan a millones de personas."</p>
        </blockquote>

        <h3>2. Desarrollo del Argumento Principal (60%)</h3>
        <p>Esta sección debe incluir:</p>

        <h4>A. Experiencia Académica Relevante</h4>
        <ul>
          <li>Cursos que has tomado y por qué fueron significativos</li>
          <li>Proyectos de investigación o trabajos destacados</li>
          <li>Logros académicos específicos</li>
          <li>Materias que despertaron tu interés en el campo</li>
        </ul>

        <h4>B. Experiencia Práctica</h4>
        <ul>
          <li>Prácticas profesionales o voluntariado</li>
          <li>Proyectos personales o extracurriculares</li>
          <li>Liderazgo en organizaciones estudiantiles</li>
          <li>Experiencias laborales relevantes</li>
        </ul>

        <h4>C. Motivación y Pasión</h4>
        <ul>
          <li>¿Qué te inspiró a elegir este campo?</li>
          <li>¿Qué problemas quieres resolver?</li>
          <li>¿Cómo has desarrollado tu interés a lo largo del tiempo?</li>
          <li>¿Qué te diferencia de otros candidatos?</li>
        </ul>

        <h3>3. Conexión con la Universidad (15%)</h3>
        <p>Demuestra que has investigado la universidad específica:</p>
        <ul>
          <li>Programas o cursos específicos que te interesan</li>
          <li>Profesores cuyas investigaciones te inspiran</li>
          <li>Recursos únicos de la universidad</li>
          <li>Cómo encajas con la cultura de la institución</li>
        </ul>

        <h3>4. Conclusión Fuerte (5%)</h3>
        <p>Termina con una declaración que:</p>
        <ul>
          <li>Refuerce tu compromiso con el campo</li>
          <li>Muestre tus objetivos a futuro</li>
          <li>Deje una impresión memorable</li>
        </ul>

        <h2>Técnicas de Redacción Efectiva</h2>

        <h3>Usa el Método STAR</h3>
        <p>Para cada experiencia que menciones:</p>
        <ul>
          <li><strong>Situación:</strong> Contexto de la experiencia</li>
          <li><strong>Tarea:</strong> Tu responsabilidad o objetivo</li>
          <li><strong>Acción:</strong> Lo que hiciste específicamente</li>
          <li><strong>Resultado:</strong> El impacto o aprendizaje obtenido</li>
        </ul>

        <h3>Muestra, No Cuentes</h3>
        <p>En lugar de decir "soy un líder natural", describe una situación específica donde lideraste:</p>
        <blockquote>
          <p><strong>Mal ejemplo:</strong> "Soy un líder natural con excelentes habilidades de comunicación."</p>
          <p><strong>Buen ejemplo:</strong> "Como presidente del club de debate, organicé un torneo interuniversitario que atrajo a 200 participantes de 15 universidades, coordinando un equipo de 20 voluntarios y obteniendo patrocinios por $5,000."</p>
        </blockquote>

        <h2>Errores Comunes a Evitar</h2>

        <h3>1. Contenido Genérico</h3>
        <ul>
          <li>Evita frases cliché como "siempre he querido ser..."</li>
          <li>No uses plantillas genéricas</li>
          <li>Personaliza cada personal statement para cada universidad</li>
        </ul>

        <h3>2. Enfoque en Logros en Lugar de Aprendizajes</h3>
        <ul>
          <li>Los comités quieren ver crecimiento y reflexión</li>
          <li>Menciona fracasos y cómo los superaste</li>
          <li>Muestra evolución en tu pensamiento</li>
        </ul>

        <h3>3. Información Irrelevante</h3>
        <ul>
          <li>No incluyas información personal innecesaria</li>
          <li>Enfócate en experiencias relevantes para el programa</li>
          <li>Evita detalles sobre tu vida personal que no aporten valor</li>
        </ul>

        <h3>4. Longitud Inadecuada</h3>
        <ul>
          <li>Respeta los límites de palabras especificados</li>
          <li>Usa cada palabra estratégicamente</li>
          <li>No repitas información del CV</li>
        </ul>

        <h2>Ejemplos por Campo de Estudio</h2>

        <h3>Ingeniería</h3>
        <p>Enfócate en:</p>
        <ul>
          <li>Proyectos técnicos que hayas desarrollado</li>
          <li>Problemas que quieres resolver</li>
          <li>Experiencia con herramientas o software</li>
          <li>Participación en competencias o hackathons</li>
        </ul>

        <h3>Medicina/Ciencias de la Salud</h3>
        <p>Destaca:</p>
        <ul>
          <li>Experiencia clínica o de voluntariado en salud</li>
          <li>Investigación en ciencias</li>
          <li>Compasión y empatía hacia pacientes</li>
          <li>Compromiso con el servicio comunitario</li>
        </ul>

        <h3>Negocios/Economía</h3>
        <p>Incluye:</p>
        <ul>
          <li>Experiencia empresarial o de liderazgo</li>
          <li>Análisis de casos de negocio</li>
          <li>Entendimiento de mercados globales</li>
          <li>Visibilidad estratégica</li>
        </ul>

        <h2>Proceso de Revisión</h2>

        <h3>Autorevisión</h3>
        <ol>
          <li>Lee en voz alta para detectar errores de flujo</li>
          <li>Verifica que cada párrafo tenga un propósito claro</li>
          <li>Elimina palabras redundantes o innecesarias</li>
          <li>Confirma que respondes a la pregunta planteada</li>
        </ol>

        <h3>Revisión Externa</h3>
        <ul>
          <li>Pide feedback a profesores o mentores</li>
          <li>Considera servicios de revisión profesional</li>
          <li>Obtén perspectivas de estudiantes actuales del programa</li>
          <li>Usa herramientas de corrección gramatical</li>
        </ul>

        <h2>Conclusión</h2>
        <p>Un personal statement efectivo es aquel que combina autenticidad con estrategia. Cuenta tu historia única de manera convincente, demuestra tu pasión genuina y muestra cómo encajas perfectamente en la universidad y programa específicos.</p>
      `,
      archivos: [
        { nombre: "Guia_Personal_Statement_Completa.pdf", tamaño: "3.2 MB", formato: "PDF" },
        { nombre: "Ejemplos_Exitosos_Personal_Statements.pdf", tamaño: "2.1 MB", formato: "PDF" },
        { nombre: "Plantilla_Estructura_Personal_Statement.docx", tamaño: "1.2 MB", formato: "Word" },
        { nombre: "Checklist_Revision_Personal_Statement.pdf", tamaño: "456 KB", formato: "PDF" }
      ]
    },
    3: {
      id: 3,
      titulo: "Checklist de Documentos por País - Actualizado 2025",
      descripcion: "Lista completa y actualizada de documentos requeridos para 30 países, incluyendo requisitos específicos de visa, traducciones certificadas y apostillas. Basado en información oficial de embajadas.",
      tipo: "Lista",
      descarga: "Excel",
      icono: "📋",
      fuente: "Embajadas y Consulados Oficiales",
      descargas: "5,403",
      contenido: `
        <h2>Introducción al Checklist de Documentos</h2>
        <p>Cada país tiene requisitos específicos de documentación que pueden variar significativamente. Este checklist actualizado para 2025 te ayudará a preparar todos los documentos necesarios para tu aplicación internacional, evitando retrasos y problemas en el proceso.</p>

        <h2>Documentos Universales</h2>
        <p>Estos documentos son requeridos en la mayoría de países:</p>

        <h3>Documentos Académicos</h3>
        <ul>
          <li><strong>Certificado de estudios secundarios:</strong> Original y copia certificada</li>
          <li><strong>Certificado de estudios universitarios:</strong> Si aplicas a posgrado</li>
          <li><strong>Acta de calificaciones:</strong> Con promedio y escala de calificación</li>
          <li><strong>Certificado de idiomas:</strong> TOEFL, IELTS, DELF, etc.</li>
          <li><strong>Certificados de exámenes estandarizados:</strong> SAT, ACT, GRE, GMAT según corresponda</li>
        </ul>

        <h3>Documentos Personales</h3>
        <ul>
          <li><strong>Pasaporte:</strong> Válido por al menos 6 meses</li>
          <li><strong>Acta de nacimiento:</strong> Original y copia certificada</li>
          <li><strong>Certificado de antecedentes penales:</strong> De tu país de origen</li>
          <li><strong>Certificados médicos:</strong> Exámenes de salud requeridos</li>
          <li><strong>Fotografías:</strong> Según especificaciones de cada país</li>
        </ul>

        <h3>Documentos Financieros</h3>
        <ul>
          <li><strong>Estados de cuenta bancarios:</strong> Últimos 3-6 meses</li>
          <li><strong>Cartas de solvencia:</strong> Del banco</li>
          <li><strong>Declaraciones de impuestos:</strong> Si aplica</li>
          <li><strong>Cartas de patrocinio:</strong> Si alguien financia tus estudios</li>
          <li><strong>Evidencia de becas:</strong> Si has recibido financiamiento</li>
        </ul>

        <h2>Requisitos Específicos por País</h2>

        <h3>🇺🇸 Estados Unidos</h3>
        <h4>Documentos Adicionales:</h4>
        <ul>
          <li>Formulario I-20 (enviado por la universidad)</li>
          <li>Formulario DS-160 completado</li>
          <li>Recibo de pago SEVIS</li>
          <li>Evidencia de lazos con país de origen</li>
          <li>Propósito específico de viaje</li>
        </ul>

        <h4>Traducciones:</h4>
        <ul>
          <li>Todos los documentos deben estar en inglés</li>
          <li>Traducciones certificadas por traductor jurado</li>
          <li>No se requieren apostillas para la mayoría de documentos</li>
        </ul>

        <h4>Plazos:</h4>
        <ul>
          <li>Aplicación: 12-18 meses antes del inicio</li>
          <li>Visa: 3-6 meses antes del viaje</li>
          <li>Documentos médicos: Máximo 6 meses de antigüedad</li>
        </ul>

        <h3>🇨🇦 Canadá</h3>
        <h4>Documentos Adicionales:</h4>
        <ul>
          <li>Carta de aceptación de institución designada</li>
          <li>Certificado de antecedentes penales de cada país donde has vivido 6+ meses</li>
          <li>Biometría (huellas dactilares y foto)</li>
          <li>Declaración de intenciones genuinas (GIC)</li>
        </ul>

        <h4>Traducciones:</h4>
        <ul>
          <li>Traducciones certificadas en inglés o francés</li>
          <li>Apostilla requerida para algunos documentos</li>
          <li>Certificados de antecedentes penales deben ser originales</li>
        </ul>

        <h3>🇬🇧 Reino Unido</h3>
        <h4>Documentos Adicionales:</h4>
        <ul>
          <li>Confirmación de Aceptación de Estudios (CAS)</li>
          <li>Certificado de tuberculosis (si aplica)</li>
          <li>Evidencia de fondos por 28 días consecutivos</li>
          <li>Prueba de nivel de inglés (IELTS UKVI)</li>
        </ul>

        <h4>Traducciones:</h4>
        <ul>
          <li>Traducciones certificadas en inglés</li>
          <li>No se requieren apostillas para la mayoría</li>
          <li>Documentos financieros deben mostrar fondos por tiempo específico</li>
        </ul>

        <h3>🇩🇪 Alemania</h3>
        <h4>Documentos Adicionales:</h4>
        <ul>
          <li>TestAS (Test for Academic Studies)</li>
          <li>Certificado de idioma alemán (TestDaF, DSH)</li>
          <li>Seguro médico para estudiantes extranjeros</li>
          <li>Evidencia de conocimientos básicos de alemán</li>
        </ul>

        <h4>Traducciones:</h4>
        <ul>
          <li>Apostilla requerida para la mayoría de documentos</li>
          <li>Traducciones certificadas en alemán</li>
          <li>Algunos documentos pueden requerir traducción oficial</li>
        </ul>

        <h3>🇦🇺 Australia</h3>
        <h4>Documentos Adicionales:</h4>
        <ul>
          <li>Confirmación de Inscripción (CoE)</li>
          <li>Seguro de salud para estudiantes extranjeros (OSHC)</li>
          <li>Declaración de intenciones genuinas (GTE)</li>
          <li>Evidencia de nivel de inglés</li>
        </ul>

        <h4>Traducciones:</h4>
        <ul>
          <li>Traducciones certificadas en inglés</li>
          <li>No se requieren apostillas</li>
          <li>Documentos médicos específicos según país de origen</li>
        </ul>

        <h2>Proceso de Apostillado</h2>

        <h3>¿Qué es la Apostilla?</h3>
        <p>La apostilla es un sello oficial que certifica la autenticidad de documentos públicos para uso en países que forman parte de la Convención de La Haya.</p>

        <h3>Documentos que Requieren Apostilla:</h3>
        <ul>
          <li>Actas de nacimiento</li>
          <li>Certificados de estudios</li>
          <li>Certificados de antecedentes penales</li>
          <li>Certificados de matrimonio/divorcio</li>
          <li>Poderes notariales</li>
        </ul>

        <h3>Proceso de Apostillado:</h3>
        <ol>
          <li>Obtener documento original certificado</li>
          <li>Presentar en autoridad competente (varía por país)</li>
          <li>Pagar tarifa correspondiente</li>
          <li>Esperar procesamiento (1-15 días hábiles)</li>
          <li>Recoger documento apostillado</li>
        </ol>

        <h2>Traducciones Certificadas</h2>

        <h3>Tipos de Traducción:</h3>
        <ul>
          <li><strong>Traducción simple:</strong> Para uso general</li>
          <li><strong>Traducción certificada:</strong> Con firma y sello del traductor</li>
          <li><strong>Traducción jurada:</strong> Con valor legal oficial</li>
        </ul>

        <h3>Requisitos por País:</h3>
        <ul>
          <li><strong>Estados Unidos:</strong> Traducción certificada</li>
          <li><strong>Canadá:</strong> Traducción certificada o jurada</li>
          <li><strong>Reino Unido:</strong> Traducción certificada</li>
          <li><strong>Alemania:</strong> Traducción jurada</li>
          <li><strong>Australia:</strong> Traducción certificada</li>
        </ul>

        <h2>Checklist de Verificación</h2>

        <h3>Antes de Enviar Documentos:</h3>
        <ul>
          <li>✓ Todos los documentos están completos</li>
          <li>✓ Fechas de expedición son recientes</li>
          <li>✓ Traducciones están certificadas</li>
          <li>✓ Apostillas están incluidas donde sea necesario</li>
          <li>✓ Copias están claras y legibles</li>
          <li>✓ Información es consistente en todos los documentos</li>
          <li>✓ Firmas y sellos están visibles</li>
        </ul>

        <h3>Documentos de Emergencia:</h3>
        <ul>
          <li>Copias adicionales de documentos importantes</li>
          <li>Fotografías extra según especificaciones</li>
          <li>Documentos médicos actualizados</li>
          <li>Estados de cuenta recientes</li>
        </ul>

        <h2>Consejos Importantes</h2>

        <h3>Planificación Temprana:</h3>
        <ul>
          <li>Comienza a recopilar documentos 12 meses antes</li>
          <li>Verifica fechas de vencimiento</li>
          <li>Ten copias de seguridad de todo</li>
          <li>Mantén un registro de todos los trámites</li>
        </ul>

        <h3>Errores Comunes a Evitar:</h3>
        <ul>
          <li>Documentos expirados o próximos a vencer</li>
          <li>Traducciones no certificadas</li>
          <li>Falta de apostillas donde se requieren</li>
          <li>Información inconsistente entre documentos</li>
          <li>Documentos ilegibles o dañados</li>
        </ul>

        <h2>Recursos Adicionales</h2>
        <ul>
          <li>Enlaces a sitios web oficiales de embajadas</li>
          <li>Lista de traductores certificados por país</li>
          <li>Información sobre autoridades de apostillado</li>
          <li>Plantillas de cartas de patrocinio</li>
          <li>Guías específicas por tipo de visa</li>
        </ul>

        <h2>Conclusión</h2>
        <p>La preparación correcta de documentos es fundamental para el éxito de tu aplicación internacional. Este checklist te ayudará a evitar errores costosos y retrasos en el proceso. Recuerda que los requisitos pueden cambiar, por lo que siempre verifica la información más actualizada en los sitios web oficiales de las embajadas.</p>
      `,
      archivos: [
        { nombre: "Checklist_Documentos_2025.xlsx", tamaño: "1.2 MB", formato: "Excel" },
        { nombre: "Guia_Apostillado_por_Pais.pdf", tamaño: "856 KB", formato: "PDF" },
        { nombre: "Lista_Traductores_Certificados.pdf", tamaño: "445 KB", formato: "PDF" },
        { nombre: "Plantillas_Cartas_Patrocínio.docx", tamaño: "234 KB", formato: "Word" }
      ]
    }
    // Agregar más recursos según sea necesario
  };

  const recurso = recursos[id];

  if (!recurso) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Recurso no encontrado</h1>
          <button 
            onClick={() => navigate('/recursos')}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
          >
            Volver a Recursos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={() => navigate('/recursos')}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a Recursos
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Información del recurso */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start mb-6">
            <div className="text-6xl mr-6">{recurso.icono}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  {recurso.tipo}
                </span>
                <span className="text-sm text-gray-500">{recurso.descargas} descargas</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {recurso.titulo}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {recurso.descripcion}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Formato: {recurso.descarga}
                  </span>
                  <span className="text-sm text-gray-500">
                    Fuente: {recurso.fuente}
                  </span>
                </div>
              </div>

              {/* Botones de descarga */}
              <div className="flex flex-wrap gap-4">
        <button 
          onClick={() => handleDownload(`${recurso.titulo.replace(/[^a-zA-Z0-9]/g, '_')}.${recurso.descarga.toLowerCase()}`, recurso.descarga.toLowerCase(), recurso.id)}
          className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar Gratis
        </button>
                <button 
                  onClick={() => alert('¡Recurso guardado en favoritos!')}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Guardar en Favoritos
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Archivos incluidos */}
        {recurso.archivos && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Archivos Incluidos</h3>
            <div className="space-y-3">
              {recurso.archivos.map((archivo, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">{archivo.nombre}</p>
                      <p className="text-sm text-gray-500">{archivo.formato} • {archivo.tamaño}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDownload(archivo.nombre, archivo.formato.toLowerCase(), recurso.id)}
                    className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm"
                  >
                    Descargar
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contenido del recurso */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: recurso.contenido }}
          />
        </div>

        {/* Compartir recurso */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Compartir este recurso</h3>
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              Twitter
            </button>
            <button className="flex items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Compartir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleRecurso;
