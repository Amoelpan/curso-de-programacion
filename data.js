/* ============================================================
   data.js — Contenido del foro
   ------------------------------------------------------------
   Aquí vive TODO el contenido. Cada categoría es una "carpeta"
   y cada lección es un "archivo" dentro de ella, igual que en
   el explorador de VS Code. Para agregar contenido nuevo:

   1. Busca la categoría (o crea una nueva copiando el patrón).
   2. Agrega un objeto dentro de "lessons" con:
        id     -> identificador único, sin espacios
        title  -> lo que se ve en la pestaña / lista
        status -> "listo" | "pendiente"
        body   -> arreglo de bloques HTML (string) del contenido
   3. Guarda. No hay que tocar script.js para que aparezca.
   ============================================================ */

const FORUM_DATA = {
  categories: [
    {
      id: "fundamentos",
      icon: "📁",
      title: "00 · Fundamentos",
      description: "La base antes de elegir una ruta: lógica, sintaxis y cómo pensar como programador.",
      lessons: [
        {
          id: "que-es-programar",
          title: "que-es-programar.md",
          status: "listo",
          body: [
            `<p>Programar es <strong>darle instrucciones exactas a una máquina</strong> para que resuelva un problema, paso por paso. No se trata de memorizar un lenguaje: un lenguaje es solo la gramática que usas para escribir esas instrucciones. Lo que de verdad importa es aprender a <em>descomponer un problema grande en pasos pequeños</em> que la computadora pueda ejecutar sin ambigüedad.</p>`,
            `<p><strong>Los 4 pilares que vas a repetir en cualquier lenguaje:</strong></p>
             <ul>
               <li><strong>Variables</strong>: guardar datos con un nombre (<code>edad = 18</code>).</li>
               <li><strong>Condicionales</strong>: tomar decisiones (<code>si... entonces...</code>).</li>
               <li><strong>Bucles</strong>: repetir algo sin copiar y pegar (<code>mientras... hacer...</code>).</li>
               <li><strong>Funciones</strong>: empaquetar pasos para reutilizarlos.</li>
             </ul>`,
            `<p><strong>Cómo practicar bien:</strong> no veas 10 videos seguidos. Escribe código roto, léelo, arréglalo. El error es la clase, no un fallo tuyo.</p>`,
            `<p><em>Próximo tema sugerido: variables y tipos de datos, con ejercicios cortos en JavaScript y Python.</em></p>`
          ]
        },
        {
          id: "herramientas-base",
          title: "herramientas-base.md",
          status: "listo",
          body: [
            `<p>Antes de escribir tu primera línea de código real, instala esto (todo gratis):</p>
             <ul>
               <li><strong>Visual Studio Code</strong>: el editor que ya estás usando para abrir este mismo proyecto.</li>
               <li><strong>Git</strong>: control de versiones. Guarda el "historial" de tu código.</li>
               <li><strong>Node.js</strong>: necesario para casi todo el desarrollo web moderno.</li>
               <li>Una cuenta en <strong>GitHub</strong>: donde vas a subir y mostrar tus proyectos.</li>
             </ul>`,
            `<p>Extensiones útiles en VS Code: <code>Prettier</code> (formatea el código), <code>Live Server</code> (previsualiza HTML al instante), <code>GitLens</code> (ver historial de Git dentro del editor).</p>`
          ]
        }
      ]
    },
    {
      id: "paginas-web",
      icon: "📁",
      title: "01 · Páginas web",
      description: "HTML, CSS y las herramientas para construir sitios estáticos.",
      lessons: [
        {
          id: "html-css-intro",
          title: "html-css-basico.md",
          status: "listo",
          body: [
            `<p><strong>HTML</strong> es el esqueleto (los elementos: títulos, párrafos, botones). <strong>CSS</strong> es la ropa (colores, tamaños, posición). No son "lenguajes de programación" en el sentido estricto — son de marcado y de estilos — pero son el punto de entrada obligatorio a la web.</p>`,
            `<p><strong>Herramientas recomendadas:</strong></p>
             <ul>
               <li>VS Code + extensión <code>Live Server</code> para ver cambios en vivo.</li>
               <li><strong>Tailwind CSS</strong> cuando quieras estilos rápido sin escribir CSS a mano.</li>
               <li><strong>Figma</strong> (gratis) para diseñar antes de programar.</li>
             </ul>`,
            `<p>Reto práctico: recrea la portada de tu sitio favorito usando solo HTML y CSS, sin copiar el código, solo mirando cómo se ve.</p>`
          ]
        },
        {
          id: "hosting-dominios",
          title: "publicar-tu-sitio.md",
          status: "pendiente",
          body: [`<p>🔧 En construcción — cubrirá: GitHub Pages, Netlify, Vercel y dominios propios.</p>`]
        }
      ]
    },
    {
      id: "apps-web",
      icon: "📁",
      title: "02 · Aplicaciones web",
      description: "Frontend, backend, bases de datos y frameworks para apps completas.",
      lessons: [
        {
          id: "ruta-fullstack",
          title: "ruta-de-aprendizaje.md",
          status: "listo",
          body: [
            `<p>Una app web tiene dos partes: <strong>frontend</strong> (lo que el usuario ve y toca) y <strong>backend</strong> (la lógica y los datos que no se ven).</p>`,
            `<p><strong>Frontend:</strong> JavaScript → React (el más pedido en el mercado).<br>
             <strong>Backend:</strong> Node.js con Express, o Python con FastAPI/Django.<br>
             <strong>Base de datos:</strong> PostgreSQL (relacional) o MongoDB (documentos), empezando por SQLite si es tu primer proyecto.</p>`,
            `<p>No aprendas los 3 a la vez. Orden sugerido: JavaScript sólido → un framework de frontend → un backend simple conectado a una base de datos.</p>`
          ]
        }
      ]
    },
    {
      id: "apps-moviles",
      icon: "📁",
      title: "03 · Apps móviles",
      description: "Android, iOS y desarrollo multiplataforma.",
      lessons: [
        {
          id: "nativo-vs-multiplataforma",
          title: "nativo-vs-multiplataforma.md",
          status: "listo",
          body: [
            `<p><strong>Nativo</strong> (Kotlin para Android, Swift para iOS): mejor rendimiento y acceso total al hardware, pero tienes que mantener dos proyectos separados.</p>`,
            `<p><strong>Multiplataforma</strong> (React Native, Flutter): un solo código para Android e iOS. Es la ruta más eficiente si estás empezando y quieres publicar rápido en ambas tiendas.</p>`,
            `<p>Recomendación para principiantes: <strong>React Native con Expo</strong> — instalación mínima, previsualización en tu propio celular sin cables, y reutiliza lo que ya sabes de JavaScript.</p>`
          ]
        },
        {
          id: "primeros-pasos-expo",
          title: "primeros-pasos-expo.md",
          status: "listo",
          body: [
            `<p><strong>Expo</strong> es la forma más rápida de tener una app corriendo en tu propio celular, sin necesitar una Mac ni configurar Android Studio primero.</p>`,
            `<p><strong>Pasos:</strong></p>
             <ul>
               <li>Instala Node.js (si ya hiciste la lección de Fundamentos, ya lo tienes).</li>
               <li>En la terminal: <code>npx create-expo-app mi-primera-app</code></li>
               <li>Entra a la carpeta: <code>cd mi-primera-app</code> y ejecuta <code>npx expo start</code></li>
               <li>Instala la app <strong>Expo Go</strong> en tu celular (Play Store) y escanea el código QR que aparece en la terminal.</li>
             </ul>`,
            `<p>Cualquier cambio que guardes en el código se refleja al instante en tu celular — así puedes practicar sin recompilar todo el proyecto cada vez.</p>`,
            `<p>Estructura mínima de una pantalla:</p>
             <p><code>export default function App() { return &lt;View&gt;&lt;Text&gt;Hola&lt;/Text&gt;&lt;/View&gt;; }</code></p>`
          ]
        },
        {
          id: "android-nativo-kotlin",
          title: "android-nativo-kotlin.md",
          status: "listo",
          body: [
            `<p>Si quieres control total sobre Android (rendimiento, acceso a hardware específico, integración profunda con el sistema), el camino nativo es <strong>Kotlin</strong> con <strong>Android Studio</strong>.</p>`,
            `<p><strong>Instalación:</strong> descarga Android Studio (gratis, incluye el emulador de celular para probar sin usar tu propio teléfono).</p>`,
            `<p><strong>Conceptos base que vas a usar todo el tiempo:</strong></p>
             <ul>
               <li><strong>Activity</strong>: una pantalla de la app.</li>
               <li><strong>Layout (XML o Jetpack Compose)</strong>: cómo se organizan los elementos visuales.</li>
               <li><strong>Intent</strong>: cómo una pantalla le pasa información a otra.</li>
             </ul>`,
            `<p>Hoy en día se recomienda aprender directamente con <strong>Jetpack Compose</strong> (la forma moderna de construir interfaces en Android) en vez del sistema de XML antiguo.</p>`
          ]
        },
        {
          id: "ios-con-swift",
          title: "ios-y-swift.md",
          status: "listo",
          body: [
            `<p>Para desarrollo nativo en iOS necesitas <strong>Swift</strong> y <strong>Xcode</strong> — y Xcode solo corre en macOS. Si no tienes una Mac, esta es la única ruta de las tres que no puedes hacer directamente desde Windows.</p>`,
            `<p><strong>Alternativas si no tienes Mac:</strong></p>
             <ul>
               <li><strong>React Native con Expo</strong>: puedes compilar una app para iOS en la nube (EAS Build) sin tener una Mac física.</li>
               <li>Servicios de Mac en la nube (de pago) si en algún momento necesitas Xcode directamente.</li>
             </ul>`,
            `<p>Si sí tienes acceso a una Mac: instala Xcode desde la App Store, aprende Swift con los tutoriales oficiales de Apple ("Swift Playgrounds" es gratis y muy visual para empezar).</p>`
          ]
        },
        {
          id: "publicar-en-tiendas",
          title: "publicar-en-play-store.md",
          status: "listo",
          body: [
            `<p>Publicar tu app no es el paso final — es lo que la convierte en algo real que otros pueden usar. Para <strong>Google Play Store</strong>:</p>`,
            `<ul>
               <li>Crea una cuenta de desarrollador en Google Play Console (pago único, no es caro).</li>
               <li>Genera el archivo <code>.aab</code> de tu app (con Expo: <code>eas build --platform android</code>).</li>
               <li>Completa la ficha de la tienda: nombre, descripción, capturas de pantalla, ícono.</li>
               <li>Sube el archivo y envíalo a revisión. Google la revisa en 1-3 días normalmente.</li>
             </ul>`,
            `<p>Para <strong>App Store</strong> (iOS) el proceso es similar pero la cuenta de desarrollador es anual y la revisión de Apple suele ser más estricta con el diseño y la funcionalidad.</p>`,
            `<p>Consejo: publica una versión simple y funcional primero. Es mejor tener algo real afuera que perfeccionar una app que nadie ha usado todavía.</p>`
          ]
        }
      ]
    },
    {
      id: "apps-escritorio",
      icon: "📁",
      title: "04 · Apps de escritorio",
      description: "Programas para Windows, macOS y Linux.",
      lessons: [
        {
          id: "opciones-escritorio",
          title: "por-donde-empezar.md",
          status: "pendiente",
          body: [`<p>🔧 En construcción — cubrirá: Electron (JS), .NET/WPF (C#), y Python con PyQt/Tkinter para herramientas rápidas.</p>`]
        }
      ]
    },
    {
      id: "videojuegos",
      icon: "📁",
      title: "05 · Videojuegos",
      description: "Motores, lógica de juego y publicación.",
      lessons: [
        {
          id: "eleccion-motor",
          title: "que-motor-usar.md",
          status: "listo",
          body: [
            `<p><strong>Godot</strong>: gratuito, ligero, ideal para empezar y para juegos 2D. Usa su propio lenguaje (GDScript, parecido a Python).</p>`,
            `<p><strong>Unity</strong>: el más usado en la industria, C#, buena documentación, ecosistema enorme de assets.</p>`,
            `<p><strong>Roblox Studio</strong>: si tu objetivo es publicar rápido y llegar a jugadores ya dentro de la plataforma (Lua como lenguaje).</p>`,
            `<p>Empieza con un juego pequeño y terminado (un Pong, un plataformero de 3 niveles) antes de intentar tu "juego soñado". Terminar es la habilidad más difícil.</p>`
          ]
        }
      ]
    },
    {
      id: "inteligencia-artificial",
      icon: "📁",
      title: "06 · Inteligencia artificial",
      description: "Crear, modificar y usar bien modelos e IA.",
      lessons: [
        {
          id: "usar-bien-la-ia",
          title: "usar-bien-la-ia.md",
          status: "listo",
          body: [
            `<p>Usar IA para programar (como Claude) es una herramienta, no un atajo para no aprender. La forma correcta de usarla:</p>
             <ul>
               <li>Pide que <strong>te explique</strong> el código, no solo que lo genere.</li>
               <li>Escribe tú primero un intento, aunque esté mal, y luego compara.</li>
               <li>Usa la IA para revisar y encontrar errores en código que ya escribiste.</li>
               <li>Nunca pegues código que no entiendes en un proyecto real.</li>
             </ul>`,
            `<p><em>Próximos temas: entrenar/ajustar modelos (fine-tuning), usar APIs de modelos en tus propias apps, y conceptos base de machine learning.</em></p>`
          ]
        }
      ]
    },
    {
      id: "recursos",
      icon: "📁",
      title: "07 · Herramientas y recursos",
      description: "Git, terminal, buenas prácticas y hábitos de estudio.",
      lessons: [
        {
          id: "git-basico",
          title: "git-lo-esencial.md",
          status: "pendiente",
          body: [`<p>🔧 En construcción — cubrirá: comandos esenciales de Git, flujo de trabajo con GitHub, y cómo no perder tu código nunca.</p>`]
        }
      ]
    }
  ]
};
