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
      description: "HTML, CSS y JavaScript a fondo — una carpeta por lenguaje, un archivo por tema.",
      lessons: [
        {
          id: "html-css-intro",
          title: "00-vision-general.md",
          status: "listo",
          body: [
            `<p><strong>HTML</strong> es el esqueleto (los elementos: títulos, párrafos, botones). <strong>CSS</strong> es la ropa (colores, tamaños, posición). <strong>JavaScript</strong> es el comportamiento (lo que reacciona a lo que haces). Los tres se enseñan por separado abajo, en sus propias carpetas — cada archivo cubre un solo tema a fondo.</p>`,
            `<p><strong>Herramientas recomendadas:</strong></p>
             <ul>
               <li>VS Code + extensión <code>Live Server</code> para ver cambios en vivo.</li>
               <li><strong>Tailwind CSS</strong> cuando quieras estilos rápido sin escribir CSS a mano.</li>
               <li><strong>Figma</strong> (gratis) para diseñar antes de programar.</li>
             </ul>`,
            `<p>Orden sugerido: recorre toda la carpeta <strong>html/</strong> primero, luego <strong>css/</strong>, luego <strong>javascript/</strong>. No hace falta memorizar nada — vuelve a estos archivos cada vez que se te olvide algo, para eso están.</p>`
          ]
        },
        {
          id: "ejercicio-tarjeta-perfil",
          title: "ejercicio-tarjeta-perfil.md",
          status: "listo",
          body: [
            `<div class="exercise-box"><span class="exercise-label">🧩 EJERCICIO 1 — usa html/ y css/</span>
             <p>Crea una <strong>tarjeta de perfil</strong> con:</p>
             <ul>
               <li>Una imagen (puede ser cualquier foto o <code>https://via.placeholder.com/150</code>)</li>
               <li>Un nombre en <code>&lt;h2&gt;</code></li>
               <li>Una descripción corta en <code>&lt;p&gt;</code></li>
               <li>Un botón que diga "Contactar"</li>
             </ul>
             <p>Usa <strong>flexbox</strong> para centrar todo dentro de una caja con borde redondeado, sombra y algo de padding.</p>
             </div>`,
            `<p>Cuando termines esa versión, agrégale con JavaScript (carpeta javascript/): que al hacer clic en "Contactar" el botón cambie de texto a "¡Mensaje enviado!".</p>`
          ]
        },
        {
          id: "ejercicio-lista-tareas",
          title: "ejercicio-lista-de-tareas.md",
          status: "listo",
          body: [
            `<div class="exercise-box"><span class="exercise-label">🧩 EJERCICIO 2 — usa javascript/04 y 05</span>
             <p>Crea una <strong>lista de tareas</strong> (to-do list) con:</p>
             <ul>
               <li>Un <code>&lt;input&gt;</code> de texto y un botón "Agregar"</li>
               <li>Una <code>&lt;ul&gt;</code> vacía donde van apareciendo las tareas</li>
               <li>Al hacer clic en "Agregar", el texto del input se convierte en un nuevo <code>&lt;li&gt;</code> dentro de la lista</li>
               <li>Al hacer clic sobre una tarea de la lista, esa tarea se tacha (<code>text-decoration: line-through</code>)</li>
             </ul>
             </div>`,
            `<p>Pista clave: <code>document.createElement("li")</code> crea el elemento, <code>.textContent</code> le pone el texto, y <code>lista.appendChild(nuevoLi)</code> lo agrega a la página.</p>`
          ]
        },
        {
          id: "hosting-dominios",
          title: "publicar-tu-sitio.md",
          status: "listo",
          body: [
            `<p>Ya lo hiciste con este mismo proyecto — pero aquí está el resumen para repetirlo con cualquier página nueva, usando <strong>GitHub Pages</strong> (gratis):</p>`,
            `<pre class="code-block"><code>git init
git add .
git commit -m "primera version"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main</code></pre>`,
            `<p>Luego en GitHub: entra al <strong>repositorio</strong> (no a la configuración de tu cuenta) → <strong>Settings</strong> → <strong>Pages</strong> → en "Source" elige la rama <code>main</code> y la carpeta <code>/ (root)</code> → <strong>Save</strong>.</p>`,
            `<p>En 1-2 minutos tu sitio queda en <code>https://tu-usuario.github.io/tu-repo/</code>. Alternativa sin usar Git: arrastrar la carpeta a <strong>netlify.com</strong>.</p>`
          ]
        }
      ],
      subfolders: [
        {
          id: "html",
          title: "html/",
          lessons: [
            {
              id: "html-estructura-basica",
              title: "01-estructura-basica.md",
              status: "listo",
              body: [
                `<p>Todo documento HTML empieza igual. Esta es la plantilla que vas a copiar miles de veces:</p>`,
                `<pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Mi página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- todo el contenido visible va aquí --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>`,
                `<p><strong>Qué hace cada línea:</strong></p>
                 <ul>
                   <li><code>&lt;!DOCTYPE html&gt;</code>: le dice al navegador "esto es HTML5 moderno".</li>
                   <li><code>&lt;html lang="es"&gt;</code>: la etiqueta raíz. <code>lang</code> ayuda a lectores de pantalla y a Google a saber el idioma.</li>
                   <li><code>&lt;head&gt;</code>: metadatos que no se ven en la página (título de la pestaña, enlaces a CSS, configuración).</li>
                   <li><code>&lt;body&gt;</code>: todo lo que sí se ve.</li>
                 </ul>`,
                `<p>Un elemento HTML normalmente tiene una etiqueta de apertura y una de cierre: <code>&lt;p&gt;texto&lt;/p&gt;</code>. Algunos son de una sola etiqueta porque no tienen contenido dentro (se llaman "vacíos"): <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code>.</p>`
              ]
            },
            {
              id: "html-texto",
              title: "02-texto-y-encabezados.md",
              status: "listo",
              body: [
                `<p>Las etiquetas de texto son las que más vas a usar. Cada una tiene un propósito específico:</p>`,
                `<pre class="code-block"><code>&lt;h1&gt;Título principal (solo uno por página)&lt;/h1&gt;
&lt;h2&gt;Subtítulo&lt;/h2&gt;
&lt;h3&gt;Sub-subtítulo&lt;/h3&gt;
&lt;!-- ... hasta h6 --&gt;

&lt;p&gt;Un párrafo normal de texto.&lt;/p&gt;

&lt;strong&gt;Texto importante (negrita)&lt;/strong&gt;
&lt;em&gt;Texto con énfasis (cursiva)&lt;/em&gt;
&lt;span&gt;Un trozo de texto sin significado propio, para estilarlo con CSS&lt;/span&gt;

&lt;blockquote&gt;Una cita de otra fuente&lt;/blockquote&gt;
&lt;hr&gt; &lt;!-- línea horizontal divisoria --&gt;
&lt;br&gt; &lt;!-- salto de línea --&gt;</code></pre>`,
                `<p><strong>Errores comunes de principiante:</strong> usar <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc. solo para hacer el texto más grande (para eso es CSS, no HTML) — y abusar de <code>&lt;br&gt;</code> para separar párrafos en vez de usar varios <code>&lt;p&gt;</code>.</p>`
              ]
            },
            {
              id: "html-listas",
              title: "03-listas.md",
              status: "listo",
              body: [
                `<p>Tres tipos de listas:</p>`,
                `<pre class="code-block"><code>&lt;!-- Lista sin orden (viñetas) --&gt;
&lt;ul&gt;
  &lt;li&gt;Manzana&lt;/li&gt;
  &lt;li&gt;Pera&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Lista ordenada (numerada) --&gt;
&lt;ol&gt;
  &lt;li&gt;Primer paso&lt;/li&gt;
  &lt;li&gt;Segundo paso&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Lista de definiciones --&gt;
&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Lenguaje de marcado para estructurar páginas&lt;/dd&gt;
&lt;/dl&gt;</code></pre>`,
                `<p>Las listas se pueden anidar (una lista dentro de un <code>&lt;li&gt;</code>) para crear submenús o listas jerárquicas — es la base de casi todos los menús de navegación.</p>`
              ]
            },
            {
              id: "html-enlaces-imagenes",
              title: "04-enlaces-e-imagenes.md",
              status: "listo",
              body: [
                `<p><strong>Enlaces</strong> (<code>&lt;a&gt;</code>):</p>`,
                `<pre class="code-block"><code>&lt;a href="https://ejemplo.com"&gt;Ir a ejemplo&lt;/a&gt;
&lt;a href="/contacto.html"&gt;Página interna&lt;/a&gt;
&lt;a href="#seccion2"&gt;Saltar a una sección de esta misma página&lt;/a&gt;
&lt;a href="https://ejemplo.com" target="_blank" rel="noopener"&gt;Abrir en pestaña nueva&lt;/a&gt;
&lt;a href="mailto:correo@ejemplo.com"&gt;Enviar correo&lt;/a&gt;</code></pre>`,
                `<p><strong>Imágenes</strong> (<code>&lt;img&gt;</code>) — siempre sin etiqueta de cierre:</p>`,
                `<pre class="code-block"><code>&lt;img src="foto.jpg" alt="Descripción de la imagen" width="400"&gt;

&lt;!-- Imagen con leyenda --&gt;
&lt;figure&gt;
  &lt;img src="grafico.png" alt="Gráfico de ventas 2026"&gt;
  &lt;figcaption&gt;Ventas del último trimestre&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>`,
                `<p>El <code>alt</code> no es opcional: lo leen las personas con discapacidad visual, y si la imagen no carga, ese texto aparece en su lugar. <code>rel="noopener"</code> en enlaces con <code>target="_blank"</code> es una medida de seguridad — evita que la página nueva pueda manipular la original.</p>`
              ]
            },
            {
              id: "html-tablas",
              title: "05-tablas.md",
              status: "listo",
              body: [
                `<p>Las tablas son solo para <strong>datos tabulares</strong> (números, comparaciones) — nunca para maquetar el diseño de una página, eso es trabajo de CSS.</p>`,
                `<pre class="code-block"><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Producto&lt;/th&gt;
      &lt;th&gt;Precio&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Café&lt;/td&gt;
      &lt;td&gt;$3&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td colspan="2"&gt;Envío gratis en pedidos +$20&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>`,
                `<p><code>thead</code>/<code>tbody</code>/<code>tfoot</code> agrupan filas por función. <code>colspan</code> hace que una celda ocupe varias columnas; <code>rowspan</code> hace que ocupe varias filas.</p>`
              ]
            },
            {
              id: "html-formularios",
              title: "06-formularios.md",
              status: "listo",
              body: [
                `<p>Los formularios son cómo el usuario te envía información. Cada campo necesita un <code>&lt;label&gt;</code> asociado — es clave para accesibilidad y para que al hacer clic en el texto se seleccione el campo.</p>`,
                `<pre class="code-block"><code>&lt;form&gt;
  &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
  &lt;input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required&gt;

  &lt;label for="correo"&gt;Correo:&lt;/label&gt;
  &lt;input type="email" id="correo" name="correo" required&gt;

  &lt;label for="edad"&gt;Edad:&lt;/label&gt;
  &lt;input type="number" id="edad" name="edad" min="1" max="120"&gt;

  &lt;label for="pais"&gt;País:&lt;/label&gt;
  &lt;select id="pais" name="pais"&gt;
    &lt;option value="do"&gt;República Dominicana&lt;/option&gt;
    &lt;option value="mx"&gt;México&lt;/option&gt;
  &lt;/select&gt;

  &lt;label for="mensaje"&gt;Mensaje:&lt;/label&gt;
  &lt;textarea id="mensaje" name="mensaje" rows="4"&gt;&lt;/textarea&gt;

  &lt;label&gt;&lt;input type="checkbox" name="acepto"&gt; Acepto los términos&lt;/label&gt;

  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>`,
                `<p><strong>Tipos de <code>input</code> más usados:</strong> <code>text</code>, <code>email</code>, <code>password</code>, <code>number</code>, <code>date</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>. El atributo <code>required</code> hace que el navegador bloquee el envío si el campo está vacío, sin necesitar JavaScript.</p>`
              ]
            },
            {
              id: "html-semantica",
              title: "07-elementos-semanticos.md",
              status: "listo",
              body: [
                `<p>"Semántico" significa que la etiqueta describe <strong>qué es</strong> el contenido, no solo cómo se ve. Antes todo era <code>&lt;div&gt;</code>; hoy se prefiere esto:</p>`,
                `<pre class="code-block"><code>&lt;header&gt;   &lt;!-- cabecera del sitio o de una sección --&gt;
&lt;nav&gt;      &lt;!-- menú de navegación --&gt;
&lt;main&gt;     &lt;!-- el contenido principal (solo uno por página) --&gt;
&lt;article&gt;  &lt;!-- contenido independiente: un post, una noticia --&gt;
&lt;section&gt;  &lt;!-- una sección temática dentro de la página --&gt;
&lt;aside&gt;    &lt;!-- contenido relacionado pero secundario, como una barra lateral --&gt;
&lt;footer&gt;   &lt;!-- pie de página --&gt;</code></pre>`,
                `<p><strong>¿Por qué importa?</strong> Mejora el SEO (Google entiende mejor tu página), la accesibilidad (los lectores de pantalla navegan por secciones), y hace tu propio código más legible seis meses después, cuando ya no recuerdes qué hacía cada <code>div</code>.</p>`,
                `<p>Regla simple: si dudas entre <code>&lt;section&gt;</code> y <code>&lt;div&gt;</code>, pregúntate si ese bloque tiene un tema propio que merecería su propio título. Si sí, <code>section</code>. Si es solo un contenedor para aplicar estilos, <code>div</code> está bien.</p>`
              ]
            },
            {
              id: "html-multimedia",
              title: "08-multimedia.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>&lt;video src="clip.mp4" controls width="500"&gt;&lt;/video&gt;

&lt;audio src="cancion.mp3" controls&gt;&lt;/audio&gt;

&lt;!-- Incrustar contenido de otra página (YouTube, mapas) --&gt;
&lt;iframe src="https://www.youtube.com/embed/ID_DEL_VIDEO"
        width="560" height="315"&gt;&lt;/iframe&gt;</code></pre>`,
                `<p><code>controls</code> agrega los botones de play/pausa/volumen sin necesitar JavaScript. Puedes dar varias fuentes con <code>&lt;source&gt;</code> dentro de <code>video</code>/<code>audio</code> para compatibilidad entre navegadores.</p>`
              ]
            },
            {
              id: "html-atributos-globales",
              title: "09-atributos-globales.md",
              status: "listo",
              body: [
                `<p>Estos atributos funcionan en <strong>casi cualquier</strong> etiqueta HTML:</p>`,
                `<pre class="code-block"><code>&lt;div id="unico-en-la-pagina"&gt;&lt;/div&gt;
&lt;div class="puede-repetirse varias-clases"&gt;&lt;/div&gt;
&lt;div style="color: red;"&gt;Estilo directo (evítalo, mejor usa CSS aparte)&lt;/div&gt;
&lt;div title="Aparece al pasar el mouse encima"&gt;&lt;/div&gt;
&lt;div data-usuario-id="42"&gt;Dato personalizado, lo lees luego con JS&lt;/div&gt;
&lt;div tabindex="0"&gt;Se puede navegar con la tecla Tab&lt;/div&gt;
&lt;div hidden&gt;No se muestra en la página&lt;/div&gt;</code></pre>`,
                `<p><strong>id vs class:</strong> <code>id</code> es único (solo un elemento en toda la página lo tiene), <code>class</code> se puede repetir en muchos elementos. En CSS: <code>#mi-id</code> selecciona por id, <code>.mi-clase</code> selecciona por clase. Los atributos <code>data-*</code> son la forma correcta de guardar información personalizada en el HTML para leerla luego con JavaScript.</p>`
              ]
            },
            {
              id: "html-meta-seo",
              title: "10-meta-y-seo.md",
              status: "listo",
              body: [
                `<p>Dentro de <code>&lt;head&gt;</code>, estas etiquetas no se ven pero son las que hacen que tu página se vea bien al compartirla y que Google la entienda:</p>`,
                `<pre class="code-block"><code>&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta name="description" content="Resumen corto de la página para Google"&gt;
&lt;link rel="icon" href="favicon.ico"&gt;

&lt;!-- Cómo se ve al compartir en redes sociales --&gt;
&lt;meta property="og:title" content="Título para compartir"&gt;
&lt;meta property="og:image" content="imagen-preview.jpg"&gt;</code></pre>`,
                `<p>El <code>viewport</code> es el más importante de todos: sin esa línea, tu página se ve diminuta en celulares. <code>og:</code> son las "Open Graph tags" — sin ellas, cuando alguien comparte tu link en WhatsApp o Facebook, no aparece ninguna vista previa bonita.</p>`
              ]
            },
            {
              id: "html-accesibilidad",
              title: "11-accesibilidad.md",
              status: "listo",
              body: [
                `<p>Accesibilidad = que tu página la pueda usar cualquier persona, incluyendo quienes usan lectores de pantalla o navegan solo con teclado. No es un extra, es parte de hacer bien tu trabajo.</p>`,
                `<ul>
                   <li>Siempre pon <code>alt</code> descriptivo en imágenes importantes; <code>alt=""</code> (vacío) en imágenes puramente decorativas.</li>
                   <li>Usa <code>&lt;label for="id"&gt;</code> en todos los campos de formulario, nunca solo un placeholder.</li>
                   <li>Usa etiquetas semánticas (<code>nav</code>, <code>button</code>, <code>main</code>) en vez de <code>div</code> con clics simulados por JS.</li>
                   <li>Un solo <code>&lt;h1&gt;</code> por página, y no te saltes niveles (de <code>h2</code> no pases directo a <code>h4</code>).</li>
                 </ul>`,
                `<p>Prueba rápida: navega tu propia página completa usando solo la tecla <code>Tab</code>, sin mouse. Si te pierdes o algo no es alcanzable, ahí hay un problema de accesibilidad que corregir.</p>`
              ]
            }
          ]
        },
        {
          id: "css",
          title: "css/",
          lessons: [
            {
              id: "css-cajas-layout",
              title: "01-cajas-y-layout.md",
              status: "listo",
              body: [
                `<p>Todo en CSS es una caja. El <strong>box model</strong> es: contenido → <code>padding</code> (espacio interno) → <code>border</code> → <code>margin</code> (espacio externo).</p>`,
                `<pre class="code-block"><code>.tarjeta {
  padding: 16px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f4f4f4;
  color: #222;
}</code></pre>`,
                `<p><strong>Flexbox</strong> — para alinear elementos en una fila o columna (la herramienta que más vas a usar):</p>`,
                `<pre class="code-block"><code>.contenedor {
  display: flex;
  justify-content: space-between; /* horizontal */
  align-items: center;            /* vertical */
  gap: 16px;                      /* espacio entre elementos */
}</code></pre>`,
                `<p><strong>Grid</strong> — para layouts en cuadrícula (galerías, dashboards):</p>`,
                `<pre class="code-block"><code>.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
  gap: 12px;
}</code></pre>`,
                `<p>Regla práctica: si estás alineando cosas en una sola dirección, usa <strong>flex</strong>. Si necesitas filas y columnas a la vez, usa <strong>grid</strong>.</p>`
              ]
            },
            {
              id: "css-selectores",
              title: "02-selectores.md",
              status: "listo",
              body: [
                `<p>Un selector le dice a CSS <strong>a qué elementos</strong> aplicar un estilo:</p>`,
                `<pre class="code-block"><code>p { }              /* todas las etiquetas &lt;p&gt; */
.tarjeta { }        /* todo lo que tenga class="tarjeta" */
#header { }         /* el único elemento con id="header" */
.tarjeta p { }       /* &lt;p&gt; que estén DENTRO de .tarjeta */
.tarjeta &gt; p { }     /* &lt;p&gt; que sean HIJOS DIRECTOS de .tarjeta */
a:hover { }          /* un enlace mientras el mouse está encima */
input:focus { }       /* un input mientras está seleccionado */
li:first-child { }    /* el primer &lt;li&gt; de una lista */
li:nth-child(2) { }   /* el segundo &lt;li&gt; exactamente */</code></pre>`,
                `<p><strong>Orden de prioridad (especificidad):</strong> un id (<code>#header</code>) le gana a una clase (<code>.tarjeta</code>), y una clase le gana a una etiqueta sola (<code>p</code>). Si dos reglas compiten, gana la más específica — no la que está más abajo en el archivo.</p>`
              ]
            },
            {
              id: "css-colores-tipografia",
              title: "03-colores-y-tipografia.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>.texto {
  color: #333333;         /* hexadecimal */
  color: rgb(51, 51, 51);  /* mismo color, en RGB */
  color: rgba(0,0,0,0.5);  /* con transparencia (0 a 1) */

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;        /* 400 normal, 700 negrita */
  line-height: 1.6;        /* espacio entre líneas */
  text-align: center;
  text-decoration: underline;
}</code></pre>`,
                `<p>Para usar una tipografía que no viene instalada en la computadora del usuario, se importa desde <strong>Google Fonts</strong> con un <code>&lt;link&gt;</code> en el <code>&lt;head&gt;</code> del HTML, y luego se referencia igual en <code>font-family</code>.</p>`
              ]
            },
            {
              id: "css-responsive",
              title: "04-responsive-media-queries.md",
              status: "listo",
              body: [
                `<p>"Responsive" significa que tu página se ve bien tanto en celular como en computadora. Se logra con <strong>media queries</strong> — reglas de CSS que solo aplican bajo ciertas condiciones de pantalla:</p>`,
                `<pre class="code-block"><code>.contenedor {
  display: flex;
  flex-direction: row; /* en pantallas grandes, en fila */
}

@media (max-width: 768px) {
  .contenedor {
    flex-direction: column; /* en celular, en columna */
  }
  h1 {
    font-size: 24px; /* letra más pequeña en pantallas chicas */
  }
}</code></pre>`,
                `<p>Trabaja siempre pensando primero en el diseño de celular ("mobile-first") y luego amplía para pantallas grandes — suele ser más fácil que al revés. No olvides el <code>&lt;meta name="viewport"&gt;</code> en el HTML, o las media queries no van a funcionar bien.</p>`
              ]
            },
            {
              id: "css-transiciones-animaciones",
              title: "05-transiciones-y-animaciones.md",
              status: "listo",
              body: [
                `<p><strong>Transition</strong> — anima un cambio de estado (como al pasar el mouse):</p>`,
                `<pre class="code-block"><code>.boton {
  background: #333;
  transition: background 0.3s ease;
}
.boton:hover {
  background: #6fa8ff;
}</code></pre>`,
                `<p><strong>Animation</strong> — para animaciones más complejas y repetibles, con varios pasos:</p>`,
                `<pre class="code-block"><code>@keyframes aparecer {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

.tarjeta {
  animation: aparecer 0.5s ease forwards;
}</code></pre>`,
                `<p>Usa animaciones con moderación — sirven para dar retroalimentación (un botón que responde al clic), no para decorar todo. Demasiado movimiento cansa al usuario.</p>`
              ]
            }
          ]
        },
        {
          id: "javascript",
          title: "javascript/",
          lessons: [
            {
              id: "js-variables-tipos",
              title: "01-variables-y-tipos.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>let edad = 20;              // número, puede cambiar
const nombre = "Joseph";     // texto, no puede reasignarse
let activo = true;           // booleano: true o false
let nada = null;             // vacío intencional
let sinDefinir;               // undefined: no se le asignó nada aún

let persona = { nombre: "Joseph", edad: 20 }; // objeto
let colores = ["rojo", "verde", "azul"];       // arreglo (array)</code></pre>`,
                `<p><strong>let vs const:</strong> usa <code>const</code> por defecto siempre; cámbialo a <code>let</code> solo si de verdad necesitas reasignar esa variable después. Evita <code>var</code> — es la forma antigua y tiene comportamientos confusos.</p>`
              ]
            },
            {
              id: "js-condicionales-bucles",
              title: "02-condicionales-y-bucles.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>if (edad &gt;= 18) {
  console.log("Eres mayor de edad");
} else if (edad &gt;= 13) {
  console.log("Eres adolescente");
} else {
  console.log("Eres niño");
}

// Bucle for: repetir un número exacto de veces
for (let i = 0; i &lt; 5; i++) {
  console.log("Vuelta número " + i);
}

// Bucle for...of: recorrer un arreglo
const frutas = ["manzana", "pera", "uva"];
for (const fruta of frutas) {
  console.log(fruta);
}

// Bucle while: repetir mientras algo sea verdadero
let intentos = 0;
while (intentos &lt; 3) {
  intentos++;
}</code></pre>`
              ]
            },
            {
              id: "js-funciones",
              title: "03-funciones.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>// Forma clásica
function sumar(a, b) {
  return a + b;
}

// Función flecha (arrow function) — muy usada hoy en día
const sumar2 = (a, b) =&gt; a + b;

// Con valores por defecto
function saludar(nombre = "invitado") {
  return "Hola, " + nombre;
}

console.log(sumar(2, 3));    // 5
console.log(saludar());      // "Hola, invitado"</code></pre>`,
                `<p>Una función es simplemente un bloque de código reutilizable al que le pasas datos (<strong>parámetros</strong>) y que te devuelve un resultado con <code>return</code>. Si no usas <code>return</code>, la función devuelve <code>undefined</code>.</p>`
              ]
            },
            {
              id: "js-dom",
              title: "04-el-dom.md",
              status: "listo",
              body: [
                `<p>El <strong>DOM</strong> (Document Object Model) es la representación de tu HTML que JavaScript puede leer y modificar en tiempo real.</p>`,
                `<pre class="code-block"><code>const titulo = document.querySelector("h1");        // primer &lt;h1&gt;
const items = document.querySelectorAll("li");        // TODOS los &lt;li&gt;
const caja = document.getElementById("mi-id");

titulo.textContent = "Nuevo texto";
titulo.style.color = "blue";
titulo.classList.add("resaltado");
titulo.classList.remove("resaltado");

const nuevo = document.createElement("li");
nuevo.textContent = "Tarea nueva";
document.querySelector("ul").appendChild(nuevo);</code></pre>`,
                `<p><code>querySelector</code> usa la misma sintaxis que CSS (<code>.clase</code>, <code>#id</code>, <code>etiqueta</code>) para encontrar elementos. <code>querySelectorAll</code> devuelve varios — para recorrerlos usas un bucle <code>for...of</code>.</p>`
              ]
            },
            {
              id: "js-eventos",
              title: "05-eventos.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>const boton = document.querySelector("button");

boton.addEventListener("click", () =&gt; {
  console.log("Clic detectado");
});

const input = document.querySelector("input");
input.addEventListener("input", (evento) =&gt; {
  console.log("Escribiste:", evento.target.value);
});

const form = document.querySelector("form");
form.addEventListener("submit", (evento) =&gt; {
  evento.preventDefault(); // evita que la página se recargue
  console.log("Formulario enviado");
});</code></pre>`,
                `<p>Eventos comunes: <code>click</code>, <code>input</code> (mientras escribes), <code>submit</code> (formularios), <code>keydown</code> (tecla presionada), <code>mouseover</code>. <code>evento.preventDefault()</code> es clave en formularios — sin eso, la página se recarga sola al enviar.</p>`
              ]
            },
            {
              id: "js-arreglos-objetos",
              title: "06-arreglos-y-objetos.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(n =&gt; n * 2);           // [2,4,6,8,10]
const pares = numeros.filter(n =&gt; n % 2 === 0);    // [2,4]
const suma = numeros.reduce((acc, n) =&gt; acc + n, 0); // 15

const persona = { nombre: "Joseph", edad: 20 };
console.log(persona.nombre);      // "Joseph"
persona.ciudad = "Santo Domingo"; // agregar una propiedad nueva</code></pre>`,
                `<p><code>map</code>, <code>filter</code> y <code>reduce</code> son las tres funciones de arreglos que más vas a usar en apps reales — reemplazan casi todo lo que antes se hacía con bucles <code>for</code> manuales, y el código queda más claro.</p>`
              ]
            },
            {
              id: "js-async",
              title: "07-asincronia-y-fetch.md",
              status: "listo",
              body: [
                `<p>Código <strong>asíncrono</strong> es el que tarda en responder (pedir datos a internet, leer un archivo) sin congelar el resto de la página mientras espera.</p>`,
                `<pre class="code-block"><code>async function obtenerDatos() {
  const respuesta = await fetch("https://api.ejemplo.com/datos");
  const datos = await respuesta.json();
  return datos;
}

obtenerDatos().then(datos =&gt; console.log(datos));</code></pre>`,
                `<p><code>async</code> antes de una función permite usar <code>await</code> dentro de ella, que "pausa" esa función (sin pausar la página) hasta que la respuesta llegue. Es la forma moderna; antes se hacía con <code>.then()</code> encadenados, que verás en código más viejo.</p>`
              ]
            },
            {
              id: "js-json",
              title: "08-json.md",
              status: "listo",
              body: [
                `<p><strong>JSON</strong> (JavaScript Object Notation) es el formato estándar para enviar y guardar datos estructurados — así es como hablan entre sí un frontend y un backend.</p>`,
                `<pre class="code-block"><code>const persona = { nombre: "Joseph", edad: 20 };

// Objeto de JS → texto JSON (para enviarlo o guardarlo)
const texto = JSON.stringify(persona);
console.log(texto); // '{"nombre":"Joseph","edad":20}'

// Texto JSON → objeto de JS (al recibirlo)
const objeto = JSON.parse(texto);
console.log(objeto.nombre); // "Joseph"</code></pre>`,
                `<p>Cuando usas <code>fetch</code> y llamas a <code>.json()</code>, por dentro está haciendo un <code>JSON.parse()</code> automáticamente. Un archivo <code>.json</code> es literalmente un archivo de texto con esta sintaxis — nada más.</p>`
              ]
            },
            {
              id: "js-localstorage",
              title: "09-localstorage.md",
              status: "listo",
              body: [
                `<p><code>localStorage</code> guarda datos en el navegador del usuario, que persisten aunque cierre la pestaña o apague la computadora (a diferencia de una variable normal, que se borra al recargar).</p>`,
                `<pre class="code-block"><code>// Guardar (solo acepta texto, por eso se usa JSON.stringify)
localStorage.setItem("usuario", JSON.stringify({ nombre: "Joseph" }));

// Leer
const datos = JSON.parse(localStorage.getItem("usuario"));
console.log(datos.nombre);

// Borrar una clave
localStorage.removeItem("usuario");

// Borrar todo
localStorage.clear();</code></pre>`,
                `<p>Úsalo para preferencias del usuario, un carrito de compras, o el progreso de un formulario largo — nunca para datos sensibles (contraseñas, tarjetas), porque cualquiera con acceso al navegador puede leerlo.</p>`
              ]
            },
            {
              id: "js-clases-oop",
              title: "10-clases-y-oop.md",
              status: "listo",
              body: [
                `<p>Una <strong>clase</strong> es un molde para crear objetos con la misma estructura y comportamiento — útil cuando vas a crear muchos objetos parecidos (usuarios, productos, enemigos de un juego).</p>`,
                `<pre class="code-block"><code>class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return "Hola, soy " + this.nombre;
  }

  esMayorDeEdad() {
    return this.edad &gt;= 18;
  }
}

const joseph = new Usuario("Joseph", 20);
console.log(joseph.saludar());        // "Hola, soy Joseph"
console.log(joseph.esMayorDeEdad());  // true</code></pre>`,
                `<p><code>constructor</code> es la función que se ejecuta al crear (<code>new</code>) un objeto de esa clase — ahí defines sus datos iniciales con <code>this</code>. Los demás métodos son acciones que ese objeto puede hacer.</p>`
              ]
            },
            {
              id: "js-manejo-errores",
              title: "11-manejo-de-errores.md",
              status: "listo",
              body: [
                `<p><code>try/catch</code> evita que un error detenga todo tu programa — lo "atrapa" y decides qué hacer.</p>`,
                `<pre class="code-block"><code>try {
  const datos = JSON.parse("esto no es json válido");
} catch (error) {
  console.log("Algo salió mal:", error.message);
}

async function obtenerDatos() {
  try {
    const respuesta = await fetch("https://api.ejemplo.com/datos");
    if (!respuesta.ok) throw new Error("La API respondió con error");
    return await respuesta.json();
  } catch (error) {
    console.log("No se pudo obtener los datos:", error.message);
    return null;
  }
}</code></pre>`,
                `<p>Regla práctica: envuelve en <code>try/catch</code> cualquier código que dependa de algo externo que puede fallar — una petición a internet, leer datos que quizás no tengan el formato esperado, convertir texto a número.</p>`
              ]
            },
            {
              id: "js-modulos",
              title: "12-modulos.md",
              status: "listo",
              body: [
                `<p>Los <strong>módulos</strong> permiten dividir tu código en varios archivos y compartir funciones entre ellos, en vez de tener un solo archivo gigante.</p>`,
                `<pre class="code-block"><code>// archivo: utilidades.js
export function sumar(a, b) {
  return a + b;
}
export const PI = 3.1416;

// archivo: main.js
import { sumar, PI } from "./utilidades.js";
console.log(sumar(2, 3));</code></pre>`,
                `<p>Para usar módulos en el navegador, el <code>&lt;script&gt;</code> necesita <code>type="module"</code>: <code>&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</code>. En Node.js (backend) la sintaxis es la misma en proyectos modernos, o usa <code>require()</code> en proyectos más antiguos.</p>`
              ]
            }
          ]
        },
        {
          id: "php",
          title: "php/",
          lessons: [
            {
              id: "php-que-es",
              title: "00-que-es-y-para-que-sirve.md",
              status: "listo",
              body: [
                `<p><strong>PHP</strong> es un lenguaje que corre en el <strong>servidor</strong>, no en el navegador del usuario. La diferencia con JavaScript del lado del cliente: PHP genera el HTML final <em>antes</em> de que le llegue a la persona, así que puede leer bases de datos, procesar formularios, manejar sesiones de usuario y luego enviar una página ya lista.</p>`,
                `<p><strong>Con PHP puedes construir:</strong></p>
                 <ul>
                   <li>Sistemas de <strong>login y registro</strong> con sesiones de usuario.</li>
                   <li>Sitios que muestran datos desde una <strong>base de datos</strong> (una tienda, un blog, un foro real como este).</li>
                   <li>APIs que responden JSON, igual que las que consumiste con <code>fetch</code> en JavaScript.</li>
                   <li>Procesamiento de formularios: recibir lo que el usuario escribió y guardarlo o validarlo.</li>
                 </ul>`,
                `<p><strong>Dónde ya lo estás usando sin saberlo:</strong> WordPress (el sistema detrás de gran parte de internet) está hecho en PHP. Facebook empezó en PHP. Es el lenguaje de backend más instalado en servidores de hosting compartido — por eso sigue siendo tan usado para sitios pequeños y medianos.</p>`
              ]
            },
            {
              id: "php-sintaxis-basica",
              title: "01-sintaxis-basica.md",
              status: "listo",
              body: [
                `<p>El código PHP vive dentro de etiquetas <code>&lt;?php ?&gt;</code>, mezclado directamente con HTML normal en el mismo archivo <code>.php</code>:</p>`,
                `<pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;

  &lt;h1&gt;Bienvenido&lt;/h1&gt;

  &lt;?php
    $nombre = "Joseph";
    echo "&lt;p&gt;Hola, " . $nombre . "&lt;/p&gt;";
  ?&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>`,
                `<p><strong>Diferencias clave con JavaScript:</strong> las variables siempre empiezan con <code>$</code> (<code>$nombre</code>), se imprime con <code>echo</code> en vez de <code>console.log</code>, y unir texto se hace con un punto <code>.</code> en vez de <code>+</code>. Un archivo <code>.php</code> no se abre haciendo doble clic — necesita un servidor que lo interprete (por eso se usan herramientas como <strong>XAMPP</strong> para practicar en tu computadora).</p>`
              ]
            },
            {
              id: "php-variables-tipos",
              title: "02-variables-y-arreglos.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>$edad = 20;                    // número
$nombre = "Joseph";              // texto
$activo = true;                  // booleano

// Arreglo indexado
$frutas = ["manzana", "pera", "uva"];
echo $frutas[0]; // "manzana"

// Arreglo asociativo (como un objeto de JS)
$persona = [
  "nombre" =&gt; "Joseph",
  "edad" =&gt; 20
];
echo $persona["nombre"]; // "Joseph"</code></pre>`,
                `<p>El arreglo asociativo (<code>=&gt;</code>) es el equivalente directo al objeto <code>{ }</code> de JavaScript — es la estructura que más vas a usar para representar datos como un usuario o un producto.</p>`
              ]
            },
            {
              id: "php-condicionales-bucles-funciones",
              title: "03-condicionales-bucles-funciones.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>if ($edad &gt;= 18) {
  echo "Mayor de edad";
} elseif ($edad &gt;= 13) {
  echo "Adolescente";
} else {
  echo "Niño";
}

foreach ($frutas as $fruta) {
  echo $fruta . "&lt;br&gt;";
}

for ($i = 0; $i &lt; 5; $i++) {
  echo $i;
}

function sumar($a, $b) {
  return $a + $b;
}
echo sumar(2, 3); // 5</code></pre>`,
                `<p><code>foreach</code> es el equivalente al <code>for...of</code> de JavaScript — la forma más común de recorrer un arreglo en PHP. El resto de la sintaxis (<code>if</code>, <code>for</code>, funciones) es casi idéntica a lo que ya aprendiste en JS.</p>`
              ]
            },
            {
              id: "php-formularios",
              title: "04-formularios-get-y-post.md",
              status: "listo",
              body: [
                `<p>Cuando un <code>&lt;form&gt;</code> de HTML se envía a un archivo PHP, ese archivo recibe los datos automáticamente en <code>$_GET</code> o <code>$_POST</code>, según el <code>method</code> que uses en el formulario.</p>`,
                `<pre class="code-block"><code>&lt;!-- formulario.html --&gt;
&lt;form action="procesar.php" method="POST"&gt;
  &lt;input type="text" name="nombre"&gt;
  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>`,
                `<pre class="code-block"><code>&lt;?php
// procesar.php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $nombre = $_POST["nombre"];
  echo "Hola, " . htmlspecialchars($nombre);
}
?&gt;</code></pre>`,
                `<p><strong>GET vs POST:</strong> <code>GET</code> manda los datos visibles en la URL (bueno para búsquedas, filtros); <code>POST</code> los manda ocultos en el cuerpo de la petición (obligatorio para contraseñas y datos sensibles). <code>htmlspecialchars()</code> es importante: limpia el texto del usuario para que no pueda inyectar código HTML malicioso en tu página.</p>`
              ]
            },
            {
              id: "php-sesiones-cookies",
              title: "05-sesiones-y-cookies.md",
              status: "listo",
              body: [
                `<p>HTTP no "recuerda" nada entre una petición y otra — las <strong>sesiones</strong> son cómo PHP mantiene a un usuario "conectado" mientras navega tu sitio (por ejemplo, después de hacer login).</p>`,
                `<pre class="code-block"><code>&lt;?php
session_start(); // siempre primero, antes de cualquier otra salida

// Guardar datos de sesión (por ejemplo, al hacer login)
$_SESSION["usuario_id"] = 42;
$_SESSION["nombre"] = "Joseph";

// Leerlos en cualquier otra página del sitio
if (isset($_SESSION["usuario_id"])) {
  echo "Bienvenido de nuevo, " . $_SESSION["nombre"];
} else {
  echo "No has iniciado sesión";
}

// Cerrar sesión
session_destroy();
?&gt;</code></pre>`,
                `<p>Las <strong>cookies</strong> (<code>setcookie()</code>) son parecidas pero se guardan en el navegador del usuario en vez del servidor, y sirven para cosas como "recordarme" durante varios días.</p>`
              ]
            },
            {
              id: "php-mysql-pdo",
              title: "06-conexion-a-mysql-con-pdo.md",
              status: "listo",
              body: [
                `<p><strong>PDO</strong> es la forma moderna y segura de que PHP hable con una base de datos MySQL.</p>`,
                `<pre class="code-block"><code>&lt;?php
$pdo = new PDO("mysql:host=localhost;dbname=mi_app", "usuario", "contraseña");

// Leer datos (SELECT)
$stmt = $pdo-&gt;query("SELECT * FROM usuarios");
foreach ($stmt as $fila) {
  echo $fila["nombre"] . "&lt;br&gt;";
}

// Insertar datos de forma SEGURA, con parámetros preparados
$stmt = $pdo-&gt;prepare("INSERT INTO usuarios (nombre, edad) VALUES (?, ?)");
$stmt-&gt;execute([$_POST["nombre"], $_POST["edad"]]);
?&gt;</code></pre>`,
                `<p><strong>¿Por qué "prepared statements" (con <code>?</code>) y no simplemente pegar el texto del usuario en la consulta?</strong> Porque si no, alguien podría escribir código SQL malicioso en un formulario y manipular o borrar tu base de datos completa — se llama "SQL injection". Los parámetros preparados hacen que eso sea imposible, porque PDO trata el dato como texto plano, nunca como código.</p>`
              ]
            },
            {
              id: "php-seguridad-basica",
              title: "07-seguridad-basica.md",
              status: "listo",
              body: [
                `<p>Tres reglas que evitan la mayoría de los problemas de seguridad comunes en sitios hechos con PHP:</p>`,
                `<pre class="code-block"><code>&lt;?php
// 1. Nunca guardes contraseñas en texto plano
$hash = password_hash($_POST["password"], PASSWORD_DEFAULT);
// ... guarda $hash en la base de datos, nunca la contraseña original

// Para verificar el login después:
if (password_verify($_POST["password"], $hash)) {
  echo "Contraseña correcta";
}

// 2. Limpia SIEMPRE lo que vas a mostrar de vuelta al usuario
echo htmlspecialchars($_POST["comentario"]);

// 3. Usa prepared statements (ver lección anterior) — nunca
// construyas una consulta SQL pegando texto del usuario directamente
?&gt;</code></pre>`,
                `<p>Estas tres cosas — <code>password_hash</code>, <code>htmlspecialchars</code>, y parámetros preparados — son la diferencia entre un sitio seguro y uno que puede ser hackeado en minutos. No son opcionales, son la base.</p>`
              ]
            },
            {
              id: "php-ejercicio-libro-visitas",
              title: "ejercicio-libro-de-visitas.md",
              status: "listo",
              body: [
                `<div class="exercise-box"><span class="exercise-label">🧩 EJERCICIO — usa formularios + MySQL</span>
                 <p>Construye un <strong>libro de visitas</strong> simple:</p>
                 <ul>
                   <li>Una tabla en MySQL: <code>visitas (id, nombre, mensaje, fecha)</code></li>
                   <li>Un formulario HTML con campos "nombre" y "mensaje"</li>
                   <li>Un archivo PHP que reciba el formulario (<code>$_POST</code>) e inserte la fila con PDO (usando parámetros preparados)</li>
                   <li>La misma página debe mostrar, debajo del formulario, todos los mensajes anteriores guardados (con <code>SELECT * FROM visitas ORDER BY fecha DESC</code>)</li>
                 </ul>
                 <p>Este es el patrón base de casi cualquier sitio con comentarios, reseñas o publicaciones.</p>
                 </div>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "apps-web",
      icon: "📁",
      title: "02 · Aplicaciones web",
      description: "React, Node/Express, bases de datos y despliegue — una carpeta por bloque.",
      lessons: [
        {
          id: "ruta-fullstack",
          title: "00-ruta-de-aprendizaje.md",
          status: "listo",
          body: [
            `<p>Una app web tiene dos partes: <strong>frontend</strong> (lo que el usuario ve y toca) y <strong>backend</strong> (la lógica y los datos que no se ven).</p>`,
            `<p><strong>Frontend:</strong> JavaScript → React (el más pedido en el mercado).<br>
             <strong>Backend:</strong> Node.js con Express.<br>
             <strong>Base de datos:</strong> SQL para datos relacionados entre sí, MongoDB para datos más libres.</p>`,
            `<p>No aprendas los 3 a la vez. Orden sugerido: recorre <strong>react/</strong> primero, luego <strong>node-express/</strong>, luego <strong>bases-de-datos/</strong>, y termina con <strong>despliegue/</strong> para publicar el proyecto completo.</p>`
          ]
        },
        {
          id: "fetch-y-apis",
          title: "01-fetch-y-apis.md",
          status: "listo",
          body: [
            `<p>Una <strong>API</strong> es un servidor que responde con datos (normalmente en formato JSON) cuando le pides algo. <code>fetch</code> es la función de JavaScript para pedirle datos a esa API sin recargar la página — es el puente entre tu frontend y tu backend.</p>`,
            `<pre class="code-block"><code>async function obtenerUsuario() {
  const respuesta = await fetch("https://api.ejemplo.com/usuario/1");
  const datos = await respuesta.json();
  console.log(datos.nombre);
}</code></pre>`,
            `<p>Envío de datos (por ejemplo, un formulario) usa <code>method: "POST"</code>:</p>`,
            `<pre class="code-block"><code>await fetch("https://api.ejemplo.com/mensajes", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ texto: "Hola" })
});</code></pre>`
          ]
        },
        {
          id: "ejercicio-clima",
          title: "02-ejercicio-app-del-clima.md",
          status: "listo",
          body: [
            `<div class="exercise-box"><span class="exercise-label">🧩 EJERCICIO 1 — usa fetch (arriba) o react/</span>
             <p>Crea una <strong>app del clima</strong>:</p>
             <ul>
               <li>Un <code>&lt;input&gt;</code> para escribir el nombre de una ciudad</li>
               <li>Un botón "Buscar" que haga <code>fetch</code> a una API pública de clima (busca "API clima gratis" — hay varias sin necesitar tarjeta de crédito)</li>
               <li>Muestra la temperatura y el nombre de la ciudad en la página</li>
             </ul>
             <p>Bonus: muestra un mensaje de "Cargando..." mientras esperas la respuesta, y un mensaje de error si la ciudad no existe.</p>
             </div>`
          ]
        },
        {
          id: "ejercicio-api-tareas",
          title: "03-ejercicio-api-de-tareas.md",
          status: "listo",
          body: [
            `<div class="exercise-box"><span class="exercise-label">🧩 EJERCICIO 2 — usa node-express/</span>
             <p>Construye una <strong>API de tareas completa</strong> (backend) con estas 4 rutas:</p>
             <ul>
               <li><code>GET /tareas</code> — devuelve todas las tareas</li>
               <li><code>POST /tareas</code> — agrega una tarea nueva</li>
               <li><code>DELETE /tareas/:id</code> — elimina una tarea</li>
               <li><code>PUT /tareas/:id</code> — marca una tarea como completada</li>
             </ul>
             <p>Pruébala con la extensión <strong>Thunder Client</strong> de VS Code antes de conectarla a un frontend. Luego, si ya viste <strong>react/</strong>, conéctala a una interfaz real.</p>
             </div>`
          ]
        }
      ],
      subfolders: [
        {
          id: "react",
          title: "react/",
          lessons: [
            {
              id: "react-componentes-props",
              title: "01-componentes-y-props.md",
              status: "listo",
              body: [
                `<p>React organiza la interfaz en <strong>componentes</strong> reutilizables. Cada componente es una función que devuelve HTML (en realidad JSX, que se ve casi igual).</p>`,
                `<pre class="code-block"><code>function TarjetaUsuario({ nombre, edad }) {
  return (
    &lt;div className="tarjeta"&gt;
      &lt;h2&gt;{nombre}&lt;/h2&gt;
      &lt;p&gt;{edad} años&lt;/p&gt;
    &lt;/div&gt;
  );
}

// Se usa así, pasándole "props":
&lt;TarjetaUsuario nombre="Joseph" edad={20} /&gt;</code></pre>`,
                `<p><strong>Props</strong> son los datos que un componente padre le pasa a un componente hijo — son de solo lectura, el hijo nunca las modifica directamente. Nota: se usa <code>className</code> en vez de <code>class</code>, porque <code>class</code> es palabra reservada en JavaScript.</p>`
              ]
            },
            {
              id: "react-state-hooks",
              title: "02-state-y-usestate.md",
              status: "listo",
              body: [
                `<p><strong>State</strong> es la forma en que un componente "recuerda" y actualiza datos que cambian (como un contador o un formulario). Se maneja con el <strong>hook</strong> <code>useState</code>.</p>`,
                `<pre class="code-block"><code>import { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    &lt;button onClick={() =&gt; setCuenta(cuenta + 1)}&gt;
      Clics: {cuenta}
    &lt;/button&gt;
  );
}</code></pre>`,
                `<p>Regla clave: nunca modifiques el state directamente (<code>cuenta = cuenta + 1</code>) — siempre usa la función que te da <code>useState</code> (<code>setCuenta</code>), o React no se entera del cambio y no vuelve a dibujar la pantalla.</p>`
              ]
            },
            {
              id: "react-eventos-formularios",
              title: "03-eventos-y-formularios.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>function Formulario() {
  const [nombre, setNombre] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    console.log("Enviado:", nombre);
  }

  return (
    &lt;form onSubmit={manejarEnvio}&gt;
      &lt;input
        value={nombre}
        onChange={(e) =&gt; setNombre(e.target.value)}
      /&gt;
      &lt;button type="submit"&gt;Enviar&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>`,
                `<p>Esto se llama un <strong>"input controlado"</strong>: el valor del campo siempre viene del state (<code>value={nombre}</code>), y cada tecla que escribes actualiza ese state con <code>onChange</code>. Es el patrón estándar para formularios en React.</p>`
              ]
            },
            {
              id: "react-listas-keys",
              title: "04-listas-y-keys.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>const tareas = ["Comprar pan", "Estudiar React", "Dormir"];

function ListaTareas() {
  return (
    &lt;ul&gt;
      {tareas.map((tarea, index) =&gt; (
        &lt;li key={index}&gt;{tarea}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}</code></pre>`,
                `<p>Cuando muestras un arreglo con <code>.map()</code>, React exige una <code>key</code> única en cada elemento — así sabe cuál cambió, se agregó o se borró, sin tener que redibujar toda la lista. Usa el <code>id</code> real del dato cuando lo tengas; el <code>index</code> del arreglo es un último recurso, no lo ideal.</p>`
              ]
            },
            {
              id: "react-useeffect",
              title: "05-useeffect.md",
              status: "listo",
              body: [
                `<p><code>useEffect</code> ejecuta código cuando el componente aparece en pantalla (o cuando algo específico cambia) — es donde va, por ejemplo, un <code>fetch</code> para cargar datos al abrir la página.</p>`,
                `<pre class="code-block"><code>import { useState, useEffect } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() =&gt; {
    fetch("https://api.ejemplo.com/usuarios")
      .then(res =&gt; res.json())
      .then(datos =&gt; setUsuarios(datos));
  }, []); // el arreglo vacío = "ejecuta esto solo una vez, al cargar"

  return (
    &lt;ul&gt;{usuarios.map(u =&gt; &lt;li key={u.id}&gt;{u.nombre}&lt;/li&gt;)}&lt;/ul&gt;
  );
}</code></pre>`,
                `<p>El segundo argumento (el arreglo <code>[]</code>) controla cuándo se repite el efecto: vacío = solo una vez; con variables adentro (<code>[busqueda]</code>) = cada vez que esa variable cambie; sin arreglo = después de cada render (rara vez lo necesitas).</p>`
              ]
            },
            {
              id: "react-router",
              title: "06-react-router.md",
              status: "listo",
              body: [
                `<p>Una app real tiene varias "páginas" (inicio, perfil, contacto) sin recargar el navegador. <strong>React Router</strong> es la librería estándar para eso.</p>`,
                `<pre class="code-block"><code>// npm install react-router-dom

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;nav&gt;
        &lt;Link to="/"&gt;Inicio&lt;/Link&gt;
        &lt;Link to="/perfil"&gt;Perfil&lt;/Link&gt;
      &lt;/nav&gt;

      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Inicio /&gt;} /&gt;
        &lt;Route path="/perfil" element={&lt;Perfil /&gt;} /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}</code></pre>`,
                `<p><code>Link</code> reemplaza a <code>&lt;a&gt;</code> dentro de una app de React — cambia la URL sin recargar toda la página, que es lo que hace que estas apps se sientan tan rápidas.</p>`
              ]
            }
          ]
        },
        {
          id: "node-express",
          title: "node-express/",
          lessons: [
            {
              id: "node-primer-servidor",
              title: "01-primer-servidor.md",
              status: "listo",
              body: [
                `<p><strong>Express</strong> es la forma más simple de crear un backend en Node.js — un servidor que responde a peticiones.</p>`,
                `<pre class="code-block"><code>// npm init -y
// npm install express

const express = require("express");
const app = express();
app.use(express.json()); // permite leer JSON en el body de las peticiones

app.get("/", (req, res) =&gt; {
  res.send("Servidor funcionando");
});

app.listen(3000, () =&gt; console.log("Escuchando en el puerto 3000"));</code></pre>`,
                `<p>Corre el archivo con <code>node servidor.js</code> y abre <code>http://localhost:3000</code> en el navegador. Cada vez que cambies el código tienes que reiniciar el servidor — o usa <code>nodemon</code> (<code>npm install -g nodemon</code>) para que se reinicie solo.</p>`
              ]
            },
            {
              id: "node-rutas-metodos",
              title: "02-rutas-y-metodos-http.md",
              status: "listo",
              body: [
                `<p>Una <strong>ruta</strong> combina un método HTTP con una URL. Los 4 métodos que vas a usar el 95% del tiempo (CRUD: Crear, Leer, Actualizar, Borrar):</p>`,
                `<pre class="code-block"><code>let tareas = [];

app.get("/tareas", (req, res) =&gt; {
  res.json(tareas); // LEER todas
});

app.get("/tareas/:id", (req, res) =&gt; {
  const tarea = tareas[req.params.id];
  res.json(tarea); // LEER una sola
});

app.post("/tareas", (req, res) =&gt; {
  tareas.push(req.body.texto);
  res.status(201).json({ mensaje: "Tarea creada" }); // CREAR
});

app.put("/tareas/:id", (req, res) =&gt; {
  tareas[req.params.id] = req.body.texto;
  res.json({ mensaje: "Tarea actualizada" }); // ACTUALIZAR
});

app.delete("/tareas/:id", (req, res) =&gt; {
  tareas.splice(req.params.id, 1);
  res.json({ mensaje: "Tarea eliminada" }); // BORRAR
});</code></pre>`,
                `<p><code>req.params</code> lee valores de la URL (<code>:id</code>), <code>req.body</code> lee el JSON que envió el cliente, <code>req.query</code> lee parámetros como <code>?busqueda=pan</code>.</p>`
              ]
            },
            {
              id: "node-middleware",
              title: "03-middleware.md",
              status: "listo",
              body: [
                `<p>Un <strong>middleware</strong> es una función que se ejecuta <em>entre</em> que llega la petición y que responde la ruta — sirve para validar, registrar, o bloquear peticiones antes de que lleguen a su destino.</p>`,
                `<pre class="code-block"><code>function verificarToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "No autorizado" });
  }
  next(); // deja continuar hacia la ruta
}

app.get("/perfil", verificarToken, (req, res) =&gt; {
  res.json({ mensaje: "Acceso concedido" });
});</code></pre>`,
                `<p><code>express.json()</code>, que ya usaste en la primera lección, también es un middleware — se ejecuta en todas las rutas. <code>next()</code> es la clave: si no lo llamas, la petición se queda "colgada" y nunca llega a la ruta.</p>`
              ]
            },
            {
              id: "node-cors",
              title: "04-conectar-con-el-frontend-y-cors.md",
              status: "listo",
              body: [
                `<p>Si tu frontend (React, en <code>localhost:5173</code>) intenta hacer <code>fetch</code> a tu backend (Express, en <code>localhost:3000</code>), el navegador lo bloquea por seguridad a menos que el servidor lo permita explícitamente. Eso se llama <strong>CORS</strong>.</p>`,
                `<pre class="code-block"><code>// npm install cors

const cors = require("cors");
app.use(cors()); // permite peticiones desde cualquier origen (para desarrollo)</code></pre>`,
                `<p>En producción, en vez de permitir "cualquier origen", se restringe solo al dominio real de tu frontend: <code>app.use(cors({ origin: "https://tu-sitio.com" }))</code>.</p>`
              ]
            },
            {
              id: "node-autenticacion-jwt",
              title: "05-autenticacion-con-jwt.md",
              status: "listo",
              body: [
                `<p>Un <strong>JWT</strong> (JSON Web Token) es como una "pulsera de acceso" que el servidor le da al usuario después de un login exitoso — el frontend la guarda y la envía en cada petición siguiente para probar quién es.</p>`,
                `<pre class="code-block"><code>// npm install jsonwebtoken bcrypt

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const CLAVE_SECRETA = "algo-largo-y-secreto";

app.post("/login", async (req, res) =&gt; {
  const usuario = buscarUsuarioPorCorreo(req.body.correo);
  const claveValida = await bcrypt.compare(req.body.password, usuario.passwordHash);

  if (!claveValida) return res.status(401).json({ error: "Datos incorrectos" });

  const token = jwt.sign({ id: usuario.id }, CLAVE_SECRETA, { expiresIn: "7d" });
  res.json({ token });
});</code></pre>`,
                `<p><code>bcrypt</code> guarda contraseñas "hasheadas" (nunca en texto plano). El frontend guarda el <code>token</code> devuelto y lo manda en el header <code>Authorization</code> de cada petición futura, para que el middleware de la lección anterior lo verifique.</p>`
              ]
            }
          ]
        },
        {
          id: "bases-de-datos",
          title: "bases-de-datos/",
          lessons: [
            {
              id: "bd-sql-basico",
              title: "01-sql-basico.md",
              status: "listo",
              body: [
                `<p>Una base de datos guarda la información para siempre (a diferencia de una variable, que se borra al reiniciar el servidor). <strong>SQLite</strong> es la mejor para empezar: no necesita instalación de servidor, es un solo archivo.</p>`,
                `<pre class="code-block"><code>CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  edad INTEGER
);

INSERT INTO usuarios (nombre, edad) VALUES ('Joseph', 20);

SELECT * FROM usuarios WHERE edad &gt; 18;

UPDATE usuarios SET edad = 21 WHERE nombre = 'Joseph';

DELETE FROM usuarios WHERE id = 1;</code></pre>`,
                `<p>Esos 5 comandos (<strong>CREATE, INSERT, SELECT, UPDATE, DELETE</strong>) son el 90% de lo que vas a usar en cualquier base de datos relacional (SQLite, PostgreSQL, MySQL — la sintaxis es casi idéntica entre las tres).</p>`
              ]
            },
            {
              id: "bd-relaciones",
              title: "02-relaciones-entre-tablas.md",
              status: "listo",
              body: [
                `<p>Las tablas se conectan entre sí con <strong>llaves foráneas</strong> (foreign keys) — así evitas repetir datos y mantienes todo organizado.</p>`,
                `<pre class="code-block"><code>CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY,
  nombre TEXT
);

CREATE TABLE publicaciones (
  id INTEGER PRIMARY KEY,
  titulo TEXT,
  usuario_id INTEGER,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Traer publicaciones junto con el nombre de su autor
SELECT publicaciones.titulo, usuarios.nombre
FROM publicaciones
JOIN usuarios ON publicaciones.usuario_id = usuarios.id;</code></pre>`,
                `<p><code>JOIN</code> es la operación clave: combina filas de dos tablas relacionadas en una sola consulta. Es la diferencia entre una base de datos "plana" y una relacional de verdad.</p>`
              ]
            },
            {
              id: "bd-orm",
              title: "03-orm-prisma.md",
              status: "listo",
              body: [
                `<p>Un <strong>ORM</strong> (Object-Relational Mapper) te deja trabajar con la base de datos usando código JavaScript normal, en vez de escribir SQL a mano. <strong>Prisma</strong> es el más usado hoy con Node.js.</p>`,
                `<pre class="code-block"><code>// schema.prisma
model Usuario {
  id     Int    @id @default(autoincrement())
  nombre String
  edad   Int
}</code></pre>`,
                `<pre class="code-block"><code>// En tu código Node.js
const usuarios = await prisma.usuario.findMany();

const nuevo = await prisma.usuario.create({
  data: { nombre: "Joseph", edad: 20 }
});</code></pre>`,
                `<p>Ventaja principal: menos errores de sintaxis SQL, autocompletado en el editor, y protección automática contra SQL injection. Desventaja: para consultas muy complejas a veces es más directo escribir el SQL tú mismo.</p>`
              ]
            },
            {
              id: "bd-mongodb",
              title: "04-mongodb-vs-sql.md",
              status: "listo",
              body: [
                `<p><strong>MongoDB</strong> guarda datos como documentos parecidos a JSON, no en tablas con filas y columnas fijas. Es útil cuando tus datos no tienen una estructura rígida o cambia mucho de un registro a otro.</p>`,
                `<pre class="code-block"><code>// Con Mongoose (la librería más usada para MongoDB + Node)
const Usuario = mongoose.model("Usuario", {
  nombre: String,
  edad: Number,
  intereses: [String] // un arreglo, sin necesitar otra tabla
});

const nuevo = await Usuario.create({ nombre: "Joseph", edad: 20, intereses: ["código"] });
const todos = await Usuario.find();</code></pre>`,
                `<p><strong>¿Cuándo usar cuál?</strong> SQL (relacional) cuando tus datos tienen relaciones claras y necesitas consistencia estricta (dinero, inventario). MongoDB cuando la estructura varía mucho o priorizas velocidad de desarrollo sobre relaciones complejas.</p>`
              ]
            }
          ]
        },
        {
          id: "despliegue",
          title: "despliegue/",
          lessons: [
            {
              id: "despliegue-variables-entorno",
              title: "01-variables-de-entorno.md",
              status: "listo",
              body: [
                `<p>Nunca escribas contraseñas, claves de API o datos de conexión directamente en tu código — se guardan en un archivo <code>.env</code> que <strong>nunca</strong> se sube a GitHub.</p>`,
                `<pre class="code-block"><code>// archivo .env
DATABASE_URL=postgresql://usuario:clave@host/basededatos
JWT_SECRET=algo-largo-y-aleatorio</code></pre>`,
                `<pre class="code-block"><code>// npm install dotenv
require("dotenv").config();

const clave = process.env.JWT_SECRET;</code></pre>`,
                `<p>Agrega <code>.env</code> a tu archivo <code>.gitignore</code> para que Git nunca lo suba. Cuando despliegues, esas mismas variables se configuran directamente en el panel de la plataforma de hosting (no en un archivo).</p>`
              ]
            },
            {
              id: "despliegue-backend",
              title: "02-desplegar-el-backend.md",
              status: "listo",
              body: [
                `<p>Un backend de Node/Express necesita un servidor que esté siempre corriendo (a diferencia de una página estática). Opciones gratuitas para empezar: <strong>Render</strong> y <strong>Railway</strong>.</p>`,
                `<ul>
                   <li>Sube tu proyecto a GitHub (igual que hiciste con el foro).</li>
                   <li>En Render/Railway: "New Web Service" → conecta tu repositorio.</li>
                   <li>Configura el comando de inicio: <code>node servidor.js</code></li>
                   <li>Agrega tus variables de entorno (<code>.env</code>) en el panel de la plataforma, no en el código.</li>
                 </ul>`,
                `<p>Te dan una URL pública como <code>https://tu-app.onrender.com</code> — esa es la URL que tu frontend va a usar en sus peticiones <code>fetch</code> una vez publicado.</p>`
              ]
            },
            {
              id: "despliegue-frontend",
              title: "03-desplegar-el-frontend.md",
              status: "listo",
              body: [
                `<p>Una app de React se "compila" a archivos estáticos (HTML/CSS/JS) antes de publicarse — por eso se despliega distinto a un sitio con Live Server.</p>`,
                `<pre class="code-block"><code>npm run build</code></pre>`,
                `<p>Eso genera una carpeta <code>dist/</code> o <code>build/</code>. Súbela a <strong>Vercel</strong> o <strong>Netlify</strong> (conectando tu repositorio de GitHub, igual que con GitHub Pages) y la plataforma detecta automáticamente que es un proyecto de React y hace el build por ti.</p>`,
                `<p>Último paso: en el código de React, donde antes tenías <code>fetch("http://localhost:3000/...")</code>, cámbialo por la URL real de tu backend ya desplegado (de la lección anterior) — normalmente guardada también en una variable de entorno.</p>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "apps-moviles",
      icon: "📁",
      title: "03 · Apps móviles",
      description: "React Native, Android nativo, iOS y cómo publicar — una carpeta por bloque.",
      lessons: [
        {
          id: "nativo-vs-multiplataforma",
          title: "00-nativo-vs-multiplataforma.md",
          status: "listo",
          body: [
            `<p><strong>Nativo</strong> (Kotlin para Android, Swift para iOS): mejor rendimiento y acceso total al hardware, pero tienes que mantener dos proyectos separados.</p>`,
            `<p><strong>Multiplataforma</strong> (React Native, Flutter): un solo código para Android e iOS. Es la ruta más eficiente si estás empezando y quieres publicar rápido en ambas tiendas.</p>`,
            `<p>Recomendación para principiantes: recorre primero <strong>react-native/</strong> — instalación mínima, previsualización en tu propio celular sin cables, y reutiliza lo que ya sabes de JavaScript. Luego <strong>android-kotlin/</strong> si quieres control total en Android, y <strong>ios-swift/</strong> si en algún momento tienes acceso a una Mac.</p>`
          ]
        }
      ],
      subfolders: [
        {
          id: "react-native",
          title: "react-native/",
          lessons: [
            {
              id: "rn-primeros-pasos",
              title: "01-primeros-pasos-con-expo.md",
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
                `<p>Cualquier cambio que guardes en el código se refleja al instante en tu celular — así puedes practicar sin recompilar todo el proyecto cada vez.</p>`
              ]
            },
            {
              id: "rn-componentes-basicos",
              title: "02-componentes-basicos.md",
              status: "listo",
              body: [
                `<p>React Native no usa HTML — usa sus propios componentes que se traducen a elementos nativos de verdad en cada plataforma.</p>`,
                `<pre class="code-block"><code>import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function App() {
  return (
    &lt;View style={estilos.contenedor}&gt;
      &lt;Text style={estilos.titulo}&gt;Hola, Joseph&lt;/Text&gt;
      &lt;Image source={{ uri: "https://via.placeholder.com/100" }} style={{ width: 100, height: 100 }} /&gt;
    &lt;/View&gt;
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 22, fontWeight: "bold" }
});</code></pre>`,
                `<p><strong>Equivalencias con la web:</strong> <code>View</code> es como un <code>&lt;div&gt;</code>, <code>Text</code> es como un <code>&lt;p&gt;</code> (todo texto DEBE ir dentro de <code>Text</code>, a diferencia de HTML), y los estilos se escriben como objetos de JavaScript, no CSS — pero <code>flex</code> funciona casi igual que en la web.</p>`
              ]
            },
            {
              id: "rn-navegacion",
              title: "03-navegacion-entre-pantallas.md",
              status: "listo",
              body: [
                `<p>Una app real tiene varias pantallas. <strong>React Navigation</strong> es la librería estándar para moverte entre ellas.</p>`,
                `<pre class="code-block"><code>// npx expo install @react-navigation/native @react-navigation/native-stack

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function App() {
  return (
    &lt;NavigationContainer&gt;
      &lt;Stack.Navigator&gt;
        &lt;Stack.Screen name="Inicio" component={PantallaInicio} /&gt;
        &lt;Stack.Screen name="Perfil" component={PantallaPerfil} /&gt;
      &lt;/Stack.Navigator&gt;
    &lt;/NavigationContainer&gt;
  );
}

// Dentro de PantallaInicio, para ir a otra pantalla:
// navigation.navigate("Perfil")</code></pre>`,
                `<p>Cada pantalla recibe automáticamente una prop <code>navigation</code> que usas para moverte hacia adelante (<code>navigate</code>) o hacia atrás (<code>goBack</code>), y una barra superior con botón de regreso que se genera sola.</p>`
              ]
            },
            {
              id: "rn-consumir-apis",
              title: "04-consumir-apis.md",
              status: "listo",
              body: [
                `<p>Conectar tu app a un backend funciona exactamente igual que en la web — mismo <code>fetch</code>, mismo <code>async/await</code>:</p>`,
                `<pre class="code-block"><code>import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() =&gt; {
    fetch("https://api.ejemplo.com/usuarios")
      .then(res =&gt; res.json())
      .then(datos =&gt; setUsuarios(datos));
  }, []);

  return (
    &lt;FlatList
      data={usuarios}
      keyExtractor={item =&gt; String(item.id)}
      renderItem={({ item }) =&gt; &lt;Text&gt;{item.nombre}&lt;/Text&gt;}
    /&gt;
  );
}</code></pre>`,
                `<p><code>FlatList</code> es el equivalente móvil de hacer <code>.map()</code> en una lista — pero optimizado, porque solo dibuja los elementos visibles en pantalla (importante para listas largas en un celular con memoria limitada).</p>`
              ]
            },
            {
              id: "rn-asyncstorage",
              title: "05-guardar-datos-localmente.md",
              status: "listo",
              body: [
                `<p><code>AsyncStorage</code> es el equivalente móvil de <code>localStorage</code> en la web — guarda datos en el celular que persisten aunque cierres la app.</p>`,
                `<pre class="code-block"><code>// npx expo install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

async function guardarUsuario(datos) {
  await AsyncStorage.setItem("usuario", JSON.stringify(datos));
}

async function leerUsuario() {
  const datos = await AsyncStorage.getItem("usuario");
  return datos ? JSON.parse(datos) : null;
}</code></pre>`,
                `<p>Úsalo para recordar si el usuario ya inició sesión, sus preferencias, o un progreso local — igual que en la web, nunca para datos sensibles como contraseñas.</p>`
              ]
            }
          ]
        },
        {
          id: "android-kotlin",
          title: "android-kotlin/",
          lessons: [
            {
              id: "android-primeros-pasos",
              title: "01-primeros-pasos-android-studio.md",
              status: "listo",
              body: [
                `<p>Si quieres control total sobre Android (rendimiento, acceso a hardware específico, integración profunda con el sistema), el camino nativo es <strong>Kotlin</strong> con <strong>Android Studio</strong>.</p>`,
                `<p><strong>Instalación:</strong> descarga Android Studio (gratis, incluye el emulador de celular para probar sin usar tu propio teléfono).</p>`,
                `<p><strong>Conceptos base que vas a usar todo el tiempo:</strong></p>
                 <ul>
                   <li><strong>Activity</strong>: una pantalla de la app.</li>
                   <li><strong>Layout</strong>: cómo se organizan los elementos visuales.</li>
                   <li><strong>Intent</strong>: cómo una pantalla le pasa información a otra.</li>
                 </ul>`
              ]
            },
            {
              id: "android-jetpack-compose",
              title: "02-jetpack-compose-basico.md",
              status: "listo",
              body: [
                `<p><strong>Jetpack Compose</strong> es la forma moderna de construir interfaces en Android — declarativa, parecida en filosofía a React.</p>`,
                `<pre class="code-block"><code>@Composable
fun TarjetaUsuario(nombre: String, edad: Int) {
    Column(
        modifier = Modifier.padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = nombre, fontSize = 22.sp, fontWeight = FontWeight.Bold)
        Text(text = "$edad años")
        Button(onClick = { /* acción */ }) {
            Text("Contactar")
        }
    }
}</code></pre>`,
                `<p><code>Column</code> apila elementos verticalmente, <code>Row</code> los pone en fila (equivalentes a <code>flexDirection</code> en React Native). Cada <code>@Composable</code> es una función reutilizable, igual que un componente de React.</p>`
              ]
            },
            {
              id: "android-navegacion",
              title: "03-navegacion-entre-pantallas.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>val navController = rememberNavController()

NavHost(navController = navController, startDestination = "inicio") {
    composable("inicio") { PantallaInicio(navController) }
    composable("perfil") { PantallaPerfil() }
}

// Para navegar desde PantallaInicio:
// navController.navigate("perfil")</code></pre>`,
                `<p>El patrón es casi idéntico al de React Navigation: defines rutas con nombre y navegas entre ellas llamando a una función. Si ya viste <strong>react-native/03</strong>, este concepto ya lo conoces.</p>`
              ]
            }
          ]
        },
        {
          id: "ios-swift",
          title: "ios-swift/",
          lessons: [
            {
              id: "ios-swiftui-basico",
              title: "01-swift-y-swiftui.md",
              status: "listo",
              body: [
                `<p>Para desarrollo nativo en iOS necesitas <strong>Swift</strong> y <strong>Xcode</strong> — y Xcode solo corre en macOS. Si no tienes una Mac, esta es la única ruta de las tres que no puedes hacer directamente desde Windows.</p>`,
                `<p><strong>SwiftUI</strong> (la forma moderna de construir interfaces en iOS) se ve muy parecida a Jetpack Compose:</p>`,
                `<pre class="code-block"><code>struct TarjetaUsuario: View {
    var nombre: String
    var edad: Int

    var body: some View {
        VStack {
            Text(nombre).font(.title).bold()
            Text("\\(edad) años")
            Button("Contactar") {
                // acción
            }
        }
        .padding()
    }
}</code></pre>`,
                `<p><strong>Alternativas si no tienes Mac:</strong> React Native con Expo puede compilar una app para iOS en la nube (EAS Build) sin necesitar una Mac física. Si sí tienes acceso a una Mac, "Swift Playgrounds" (gratis) es muy visual para empezar antes de saltar a Xcode.</p>`
              ]
            }
          ]
        },
        {
          id: "publicacion-moviles",
          title: "publicacion/",
          lessons: [
            {
              id: "publicar-play-store",
              title: "01-publicar-en-play-store.md",
              status: "listo",
              body: [
                `<p>Publicar tu app no es el paso final — es lo que la convierte en algo real que otros pueden usar. Para <strong>Google Play Store</strong>:</p>`,
                `<ul>
                   <li>Crea una cuenta de desarrollador en Google Play Console (pago único, no es caro).</li>
                   <li>Genera el archivo <code>.aab</code> de tu app (con Expo: <code>eas build --platform android</code>).</li>
                   <li>Completa la ficha de la tienda: nombre, descripción, capturas de pantalla, ícono.</li>
                   <li>Sube el archivo y envíalo a revisión. Google la revisa en 1-3 días normalmente.</li>
                 </ul>`,
                `<p>Consejo: publica una versión simple y funcional primero. Es mejor tener algo real afuera que perfeccionar una app que nadie ha usado todavía.</p>`
              ]
            },
            {
              id: "publicar-app-store",
              title: "02-publicar-en-app-store.md",
              status: "listo",
              body: [
                `<p>Para <strong>App Store</strong> (iOS) el proceso es similar al de Google Play, con algunas diferencias importantes:</p>`,
                `<ul>
                   <li>La cuenta de desarrollador de Apple es <strong>anual</strong> (no pago único como Google).</li>
                   <li>Necesitas Xcode (o EAS Build en la nube) para generar el archivo <code>.ipa</code>.</li>
                   <li>La revisión de Apple suele ser más estricta con el diseño y la funcionalidad — rechazan apps por detalles que Google normalmente deja pasar.</li>
                   <li>Se sube a través de <strong>App Store Connect</strong>, donde también completas ficha, capturas y descripción.</li>
                 </ul>`,
                `<p>Tiempo de revisión típico: 1-3 días, aunque puede tardar más si hay observaciones que corregir y reenviar.</p>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "apps-escritorio",
      icon: "📁",
      title: "04 · Apps de escritorio",
      description: "Electron, Python y C#/.NET para programas de Windows, macOS y Linux.",
      lessons: [
        {
          id: "panorama-escritorio",
          title: "00-panorama-general.md",
          status: "listo",
          body: [
            `<p>Tres caminos según lo que ya sepas y lo que necesites:</p>`,
            `<ul>
               <li><strong>Electron</strong> (JavaScript): si ya sabes web, reutilizas todo ese conocimiento. Apps como VS Code, Discord y Slack están hechas así. Contra: consume más memoria RAM.</li>
               <li><strong>Python (Tkinter/PyQt)</strong>: la forma más simple y rápida para herramientas internas o scripts con interfaz — no pensadas para venderse como producto pulido.</li>
               <li><strong>C# con .NET/WPF</strong>: rendimiento nativo real en Windows, es lo que usan la mayoría de programas empresariales de escritorio en ese sistema.</li>
             </ul>`,
            `<p>Si vienes de las carpetas anteriores de este curso, <strong>Electron</strong> es el salto más natural — mismo HTML/CSS/JS, solo cambia dónde corre.</p>`
          ]
        }
      ],
      subfolders: [
        {
          id: "electron",
          title: "electron/",
          lessons: [
            {
              id: "electron-primeros-pasos",
              title: "01-primeros-pasos.md",
              status: "listo",
              body: [
                `<p>Electron empaqueta Chromium (el motor de Chrome) y Node.js juntos — tu app de escritorio es, por dentro, una página web con superpoderes de sistema operativo.</p>`,
                `<pre class="code-block"><code>// npm init -y
// npm install electron --save-dev

// main.js — el "proceso principal", controla la ventana
const { app, BrowserWindow } = require("electron");

function crearVentana() {
  const ventana = new BrowserWindow({ width: 900, height: 600 });
  ventana.loadFile("index.html"); // tu HTML normal
}

app.whenReady().then(crearVentana);</code></pre>`,
                `<p>Ejecuta con <code>npx electron .</code>. El archivo <code>index.html</code> que cargas es HTML/CSS/JS común — todo lo que aprendiste en la carpeta de <strong>páginas web</strong> aplica directo aquí.</p>`
              ]
            },
            {
              id: "electron-ipc",
              title: "02-comunicacion-entre-procesos.md",
              status: "listo",
              body: [
                `<p>Electron separa dos "mundos": el <strong>proceso principal</strong> (Node.js, controla la app y el sistema operativo) y el <strong>proceso de renderizado</strong> (tu página web, sin acceso directo al sistema por seguridad). Se comunican con <strong>IPC</strong>.</p>`,
                `<pre class="code-block"><code>// main.js
const { ipcMain } = require("electron");
ipcMain.handle("guardar-archivo", (event, contenido) =&gt; {
  require("fs").writeFileSync("nota.txt", contenido);
  return "Guardado";
});</code></pre>`,
                `<pre class="code-block"><code>// En tu HTML/JS (a través de un preload.js seguro):
const resultado = await window.electronAPI.guardarArchivo("Hola mundo");
console.log(resultado); // "Guardado"</code></pre>`,
                `<p>Esta separación existe por seguridad: si tu página cargara contenido externo, no quieres que tenga acceso directo a los archivos del usuario. El <code>preload.js</code> expone solo las funciones específicas que tú decidas.</p>`
              ]
            },
            {
              id: "electron-sistema-archivos",
              title: "03-acceso-al-sistema-de-archivos.md",
              status: "listo",
              body: [
                `<p>Lo que distingue a una app de escritorio de una web es justamente esto: leer/guardar archivos reales, y usar diálogos nativos del sistema operativo.</p>`,
                `<pre class="code-block"><code>const { dialog } = require("electron");
const fs = require("fs");

ipcMain.handle("abrir-archivo", async () =&gt; {
  const resultado = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [{ name: "Texto", extensions: ["txt"] }]
  });
  if (resultado.canceled) return null;
  return fs.readFileSync(resultado.filePaths[0], "utf-8");
});</code></pre>`,
                `<p><code>dialog.showOpenDialog</code> abre el selector de archivos nativo de Windows/Mac/Linux — se ve y se siente como cualquier otro programa del sistema, no como una página web.</p>`
              ]
            }
          ]
        },
        {
          id: "python-escritorio",
          title: "python/",
          lessons: [
            {
              id: "python-tkinter",
              title: "01-tkinter-basico.md",
              status: "listo",
              body: [
                `<p><strong>Tkinter</strong> viene incluido con Python — no necesitas instalar nada extra. Ideal para herramientas simples y rápidas de construir.</p>`,
                `<pre class="code-block"><code>import tkinter as tk

def saludar():
    etiqueta.config(text="Hola, " + entrada.get())

ventana = tk.Tk()
ventana.title("Mi primera app")
ventana.geometry("300x200")

entrada = tk.Entry(ventana)
entrada.pack(pady=10)

boton = tk.Button(ventana, text="Saludar", command=saludar)
boton.pack()

etiqueta = tk.Label(ventana, text="")
etiqueta.pack()

ventana.mainloop()</code></pre>`,
                `<p><code>.pack()</code> es la forma más simple de organizar elementos (existen también <code>.grid()</code> para cuadrículas). <code>command=saludar</code> conecta el botón a una función — el equivalente a <code>addEventListener</code> en JS.</p>`
              ]
            },
            {
              id: "python-pyqt",
              title: "02-pyqt-basico.md",
              status: "listo",
              body: [
                `<p><strong>PyQt</strong> (o su versión libre, PySide) produce interfaces con apariencia mucho más moderna y nativa que Tkinter — la opción preferida cuando el diseño importa.</p>`,
                `<pre class="code-block"><code># pip install PyQt6 --break-system-packages

from PyQt6.QtWidgets import QApplication, QWidget, QPushButton, QVBoxLayout, QLabel

app = QApplication([])
ventana = QWidget()
ventana.setWindowTitle("Mi app con PyQt")

layout = QVBoxLayout()
etiqueta = QLabel("Presiona el botón")
boton = QPushButton("Haz clic")
boton.clicked.connect(lambda: etiqueta.setText("¡Clic detectado!"))

layout.addWidget(etiqueta)
layout.addWidget(boton)
ventana.setLayout(layout)
ventana.show()
app.exec()</code></pre>`,
                `<p><code>.clicked.connect(funcion)</code> es el equivalente de PyQt a los eventos que ya viste en JS. Los <code>Layout</code> (<code>QVBoxLayout</code> = vertical, <code>QHBoxLayout</code> = horizontal) organizan los elementos, parecido a flexbox.</p>`
              ]
            }
          ]
        },
        {
          id: "csharp-dotnet",
          title: "csharp-dotnet/",
          lessons: [
            {
              id: "dotnet-primeros-pasos",
              title: "01-primeros-pasos-wpf.md",
              status: "listo",
              body: [
                `<p><strong>WPF</strong> (Windows Presentation Foundation) es el framework de escritorio más usado en el mundo empresarial de Windows, con <strong>C#</strong>. Se instala como parte de Visual Studio (gratis, versión Community).</p>`,
                `<p>Una app de WPF se divide en dos archivos por cada ventana: un <strong>XAML</strong> (el diseño visual) y un <strong>C#</strong> (la lógica), muy parecido a separar HTML y JavaScript.</p>`,
                `<pre class="code-block"><code>// MainWindow.xaml.cs — la lógica
private void Boton_Click(object sender, RoutedEventArgs e)
{
    Etiqueta.Text = "Hola, " + CajaTexto.Text;
}</code></pre>`
              ]
            },
            {
              id: "dotnet-xaml",
              title: "02-xaml-basico.md",
              status: "listo",
              body: [
                `<p><strong>XAML</strong> describe la interfaz de forma declarativa, muy parecido a HTML pero con etiquetas propias de .NET:</p>`,
                `<pre class="code-block"><code>&lt;Window x:Class="MiApp.MainWindow"
        Title="Mi primera app" Height="300" Width="400"&gt;
    &lt;StackPanel Margin="20"&gt;
        &lt;TextBox x:Name="CajaTexto" Margin="0,0,0,10"/&gt;
        &lt;Button Content="Saludar" Click="Boton_Click"/&gt;
        &lt;TextBlock x:Name="Etiqueta" Margin="0,10,0,0"/&gt;
    &lt;/StackPanel&gt;
&lt;/Window&gt;</code></pre>`,
                `<p><code>StackPanel</code> apila elementos (como <code>Column</code> en Compose o <code>View</code> con flex en React Native). <code>x:Name</code> le da un identificador al elemento para poder referenciarlo desde el código C#, y <code>Click="Boton_Click"</code> lo conecta directamente a un método.</p>`
              ]
            }
          ]
        },
        {
          id: "empaquetado",
          title: "empaquetado/",
          lessons: [
            {
              id: "empaquetar-electron",
              title: "01-empaquetar-electron.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>// npm install electron-builder --save-dev

// package.json
{
  "build": {
    "appId": "com.joseph.miapp",
    "win": { "target": "nsis" },
    "mac": { "target": "dmg" }
  },
  "scripts": {
    "dist": "electron-builder"
  }
}</code></pre>`,
                `<p>Corre <code>npm run dist</code> y obtienes un instalador real (<code>.exe</code> en Windows, <code>.dmg</code> en Mac) que cualquiera puede descargar y ejecutar como cualquier otro programa, sin necesitar Node.js instalado.</p>`
              ]
            },
            {
              id: "empaquetar-python",
              title: "02-empaquetar-python.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code># pip install pyinstaller --break-system-packages

pyinstaller --onefile --windowed mi_app.py</code></pre>`,
                `<p>Esto genera un <code>.exe</code> (en Windows) que incluye Python empaquetado adentro — el usuario final no necesita tener Python instalado para correrlo. <code>--windowed</code> evita que se abra una ventana de terminal negra detrás de tu interfaz.</p>`
              ]
            },
            {
              id: "empaquetar-dotnet",
              title: "03-empaquetar-dotnet.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>dotnet publish -c Release -r win-x64 --self-contained true</code></pre>`,
                `<p><code>--self-contained true</code> incluye el runtime de .NET dentro del ejecutable — igual que con PyInstaller, el usuario no necesita instalar nada extra para correr tu programa.</p>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "videojuegos",
      icon: "📁",
      title: "05 · Videojuegos",
      description: "Godot, Unity y Roblox Studio — motor, lógica de juego y publicación.",
      lessons: [
        {
          id: "eleccion-motor",
          title: "00-que-motor-usar.md",
          status: "listo",
          body: [
            `<p><strong>Godot</strong>: gratuito, ligero, ideal para empezar y para juegos 2D. Usa su propio lenguaje (GDScript, parecido a Python).</p>`,
            `<p><strong>Unity</strong>: el más usado en la industria, C#, buena documentación, ecosistema enorme de assets.</p>`,
            `<p><strong>Roblox Studio</strong>: si tu objetivo es publicar rápido y llegar a jugadores ya dentro de la plataforma (Lua como lenguaje).</p>`,
            `<p>Empieza con un juego pequeño y terminado (un Pong, un plataformero de 3 niveles) antes de intentar tu "juego soñado". Terminar es la habilidad más difícil.</p>`
          ]
        },
        {
          id: "conceptos-universales",
          title: "01-conceptos-que-aplican-a-todos.md",
          status: "listo",
          body: [
            `<p>Antes de meterte a un motor específico, estas ideas se repiten en <strong>todos</strong> los motores de videojuegos:</p>`,
            `<ul>
               <li><strong>Game loop</strong>: el juego actualiza su estado y redibuja la pantalla decenas de veces por segundo, en bucle constante, mientras esté abierto.</li>
               <li><strong>Delta time</strong>: el tiempo transcurrido desde el último fotograma — se usa para que el movimiento sea igual de rápido sin importar si la computadora es lenta o rápida.</li>
               <li><strong>Sprite</strong>: una imagen 2D que representa a un personaje u objeto en pantalla.</li>
               <li><strong>Colisión (hitbox)</strong>: una forma invisible que el motor usa para detectar cuándo dos objetos se tocan.</li>
               <li><strong>Escena/Prefab</strong>: una plantilla reutilizable de un objeto (un enemigo, una moneda) que puedes duplicar muchas veces.</li>
             </ul>`
          ]
        }
      ],
      subfolders: [
        {
          id: "godot",
          title: "godot/",
          lessons: [
            {
              id: "godot-primeros-pasos",
              title: "01-primeros-pasos.md",
              status: "listo",
              body: [
                `<p>Descarga Godot (gratis, sin instalación — es un solo ejecutable). Un proyecto se organiza en <strong>escenas</strong>, y cada escena en <strong>nodos</strong> (personajes, sprites, sonidos, cámaras).</p>`,
                `<p><strong>Estructura típica de un personaje jugable:</strong></p>
                 <ul>
                   <li><code>CharacterBody2D</code> — el nodo raíz, maneja movimiento y colisiones</li>
                   <li><code>Sprite2D</code> — la imagen visible del personaje</li>
                   <li><code>CollisionShape2D</code> — la forma invisible de colisión</li>
                 </ul>`
              ]
            },
            {
              id: "godot-gdscript",
              title: "02-gdscript-basico.md",
              status: "listo",
              body: [
                `<p><strong>GDScript</strong> se parece mucho a Python — indentación en vez de llaves, sintaxis simple.</p>`,
                `<pre class="code-block"><code>extends CharacterBody2D

var velocidad = 200

func _physics_process(delta):
    var direccion = Vector2.ZERO
    if Input.is_action_pressed("ui_right"):
        direccion.x += 1
    if Input.is_action_pressed("ui_left"):
        direccion.x -= 1

    velocity = direccion * velocidad
    move_and_slide()</code></pre>`,
                `<p><code>_physics_process(delta)</code> se ejecuta automáticamente en cada fotograma físico — aquí es donde va la lógica de movimiento. <code>move_and_slide()</code> mueve al personaje y resuelve colisiones automáticamente.</p>`
              ]
            },
            {
              id: "godot-fisica-colisiones",
              title: "03-fisica-y-colisiones.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>func _on_area_2d_body_entered(body):
    if body.name == "Jugador":
        print("¡El jugador tocó esta área!")
        queue_free() # elimina este objeto (por ejemplo, una moneda recogida)</code></pre>`,
                `<p>Las señales (<code>signal</code>) son el sistema de eventos de Godot — <code>body_entered</code> se dispara sola cuando algo entra en un <code>Area2D</code>. Es el equivalente a <code>addEventListener</code> en JavaScript: te conectas a la señal desde el editor o por código, y Godot llama tu función cuando ocurre.</p>`
              ]
            },
            {
              id: "godot-sonido-animacion",
              title: "04-sonido-y-animacion.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>extends AnimatedSprite2D

func _process(delta):
    if Input.is_action_pressed("ui_right"):
        play("caminar")
    else:
        play("quieto")

$AudioStreamPlayer2D.play() # reproducir un efecto de sonido</code></pre>`,
                `<p><code>AnimatedSprite2D</code> maneja hojas de sprites con varios cuadros de animación (caminar, saltar, atacar) que cambias con <code>play("nombre")</code>. <code>AudioStreamPlayer2D</code> reproduce efectos de sonido posicionados en el espacio del juego.</p>`
              ]
            }
          ]
        },
        {
          id: "unity",
          title: "unity/",
          lessons: [
            {
              id: "unity-primeros-pasos",
              title: "01-primeros-pasos.md",
              status: "listo",
              body: [
                `<p>Instala Unity a través de <strong>Unity Hub</strong> (el gestor de versiones). Un proyecto se organiza en <strong>GameObjects</strong> dentro de una escena, cada uno con <strong>Components</strong> (Transform, Sprite Renderer, Collider, Script) adjuntos.</p>`,
                `<p>Todo GameObject tiene siempre un <code>Transform</code> (posición, rotación, escala) — es el único componente que no se puede quitar.</p>`
              ]
            },
            {
              id: "unity-csharp",
              title: "02-scripts-en-csharp.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>using UnityEngine;

public class Movimiento : MonoBehaviour
{
    public float velocidad = 5f;

    void Update()
    {
        float horizontal = Input.GetAxis("Horizontal");
        transform.Translate(Vector3.right * horizontal * velocidad * Time.deltaTime);
    }
}</code></pre>`,
                `<p><code>Update()</code> se ejecuta en cada fotograma — es el "game loop" de Unity. <code>Time.deltaTime</code> es el equivalente exacto al "delta time" que viste en conceptos universales: multiplicar por él hace que el movimiento sea igual de rápido en cualquier computadora.</p>`
              ]
            },
            {
              id: "unity-fisica-colisiones",
              title: "03-fisica-y-colisiones.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>void OnTriggerEnter2D(Collider2D otro)
{
    if (otro.CompareTag("Moneda"))
    {
        Destroy(otro.gameObject);
        Debug.Log("Moneda recogida");
    }
}</code></pre>`,
                `<p><code>OnTriggerEnter2D</code> se llama automáticamente cuando dos <code>Collider</code> con "Is Trigger" activado se tocan. <code>CompareTag</code> identifica qué objeto específico chocó, usando etiquetas que asignas desde el editor.</p>`
              ]
            }
          ]
        },
        {
          id: "roblox-studio",
          title: "roblox-studio/",
          lessons: [
            {
              id: "roblox-primeros-pasos",
              title: "01-primeros-pasos.md",
              status: "listo",
              body: [
                `<p>Roblox Studio es gratis y ya viene con jugadores dentro de la plataforma esperando probar tu juego — la ventaja más grande frente a Godot/Unity es la distribución instantánea.</p>`,
                `<p>Todo se organiza en el <strong>Explorer</strong>: <code>Workspace</code> (lo que existe en el mundo del juego), <code>Players</code>, y los <strong>Scripts</strong> que le dan comportamiento a las partes.</p>`
              ]
            },
            {
              id: "roblox-lua",
              title: "02-scripting-en-lua.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>local parte = script.Parent

parte.Touched:Connect(function(otraParte)
    local jugador = game.Players:GetPlayerFromCharacter(otraParte.Parent)
    if jugador then
        print(jugador.Name .. " tocó la parte")
        parte:Destroy()
    end
end)</code></pre>`,
                `<p><strong>Lua</strong> usa <code>local</code> para variables, <code>function...end</code> en vez de llaves, y <code>Touched:Connect()</code> es su sistema de eventos — el mismo concepto de "señal" que ya viste en Godot y "evento" que viste en JS, con otro nombre.</p>`
              ]
            }
          ]
        },
        {
          id: "publicacion-juegos",
          title: "publicacion/",
          lessons: [
            {
              id: "publicar-juego",
              title: "01-publicar-tu-juego.md",
              status: "listo",
              body: [
                `<p><strong>Godot/Unity:</strong> exporta a <code>.exe</code> (Windows) o web (HTML5) desde el propio editor, y sube el resultado gratis a <strong>itch.io</strong> — la plataforma más amigable para publicar tu primer juego.</p>`,
                `<p><strong>Steam:</strong> requiere una cuota única (~$100) por juego publicado — vale la pena solo cuando ya tienes un proyecto pulido y terminado.</p>`,
                `<p><strong>Roblox:</strong> se publica directo desde el editor con el botón "Publish to Roblox" — no hay paso de exportación, queda disponible al instante para cualquiera en la plataforma.</p>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "inteligencia-artificial",
      icon: "📁",
      title: "06 · Inteligencia artificial",
      description: "Usar IA para programar, construir con APIs de IA, y las bases de machine learning.",
      lessons: [
        {
          id: "panorama-ia",
          title: "00-panorama-general.md",
          status: "listo",
          body: [
            `<p>"IA" cubre varias cosas distintas que conviene separar:</p>`,
            `<ul>
               <li><strong>Usar IA como herramienta</strong> para programar mejor y más rápido (carpeta <code>usar-ia-para-programar/</code>).</li>
               <li><strong>Construir apps que usan IA</strong> por dentro, llamando a un modelo ya entrenado por API (carpeta <code>apis-de-ia/</code>) — la ruta más práctica y rápida de tener algo funcionando.</li>
               <li><strong>Entrenar tus propios modelos</strong> desde cero con machine learning (carpetas <code>python-para-ia/</code>, <code>machine-learning/</code> y <code>redes-neuronales/</code>) — más matemático, más lento de aprender, pero es la base real detrás de todo lo anterior.</li>
             </ul>`,
            `<p>Si tu meta es construir productos pronto, empieza por <strong>apis-de-ia/</strong>. Si tu meta es entender cómo funciona por dentro, empieza por <strong>python-para-ia/</strong>.</p>`
          ]
        }
      ],
      subfolders: [
        {
          id: "usar-ia-para-programar",
          title: "usar-ia-para-programar/",
          lessons: [
            {
              id: "ia-como-herramienta",
              title: "01-como-usarla-bien.md",
              status: "listo",
              body: [
                `<p>Usar IA para programar (como Claude) es una herramienta, no un atajo para no aprender. La forma correcta de usarla:</p>
                 <ul>
                   <li>Pide que <strong>te explique</strong> el código, no solo que lo genere.</li>
                   <li>Escribe tú primero un intento, aunque esté mal, y luego compara.</li>
                   <li>Usa la IA para revisar y encontrar errores en código que ya escribiste.</li>
                   <li>Nunca pegues código que no entiendes en un proyecto real.</li>
                 </ul>`
              ]
            },
            {
              id: "ia-prompts-efectivos",
              title: "02-como-pedir-ayuda-bien.md",
              status: "listo",
              body: [
                `<p>La calidad de lo que obtienes de una IA depende directamente de cómo preguntas. Compara:</p>`,
                `<pre class="code-block"><code>❌ "no me funciona mi código"

✅ "Tengo esta función en JavaScript que debería sumar dos números
   pero me devuelve NaN. Este es el código: [pega el código].
   Este es el error exacto que veo en consola: [pega el error].
   Ya revisé que ambos argumentos sean números."</code></pre>`,
                `<p>Entre más contexto específico das (código real, error real, qué ya intentaste), menos tiene que adivinar la IA — y menos vueltas das tú corrigiendo respuestas genéricas.</p>`
              ]
            },
            {
              id: "ia-limitaciones",
              title: "03-limitaciones-y-errores-comunes.md",
              status: "listo",
              body: [
                `<p>Las IAs pueden inventar información con total confianza (a esto se le llama <strong>"alucinación"</strong>) — nombres de funciones que no existen, librerías inventadas, comportamientos incorrectos. Por eso:</p>`,
                `<ul>
                   <li>Verifica funciones o librerías poco comunes en la documentación oficial antes de confiar en ellas.</li>
                   <li>Prueba el código real, no asumas que "se ve bien" y por eso funciona.</li>
                   <li>Para librerías o versiones muy recientes, la IA puede tener información desactualizada — revisa la fecha de la documentación que consultas.</li>
                 </ul>`
              ]
            }
          ]
        },
        {
          id: "apis-de-ia",
          title: "apis-de-ia/",
          lessons: [
            {
              id: "apis-ia-que-son",
              title: "01-que-son-y-como-conectarte.md",
              status: "listo",
              body: [
                `<p>Empresas como Anthropic (Claude) u OpenAI exponen sus modelos ya entrenados a través de una <strong>API</strong> — igual que las APIs que ya usaste con <code>fetch</code>, solo que esta te devuelve texto generado por un modelo de lenguaje.</p>`,
                `<pre class="code-block"><code>// Node.js, usando fetch normal — sin librerías extra
const respuesta = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "x-api-key": process.env.CLAUDE_API_KEY,
    "content-type": "application/json"
  },
  body: JSON.stringify({
    model: "claude-sonnet-4-6",
    max_tokens: 500,
    messages: [{ role: "user", content: "Explica qué es una API en 2 líneas" }]
  })
});

const datos = await respuesta.json();
console.log(datos.content[0].text);</code></pre>`,
                `<p>La clave (<code>CLAUDE_API_KEY</code>) siempre va en una variable de entorno, nunca escrita directo en el código — exactamente la misma regla de seguridad que ya viste en la carpeta de <strong>despliegue</strong> de aplicaciones web.</p>`
              ]
            },
            {
              id: "apis-ia-construir-features",
              title: "02-que-puedes-construir-con-esto.md",
              status: "listo",
              body: [
                `<p>Con una API de IA conectada a tu backend (los que aprendiste en <strong>node-express/</strong>), puedes agregar funciones reales a tus propias apps:</p>`,
                `<ul>
                   <li>Un chatbot de soporte dentro de tu propia página web.</li>
                   <li>Generar automáticamente un resumen de un texto largo que el usuario pega.</li>
                   <li>Clasificar mensajes o reseñas por sentimiento (positivo/negativo).</li>
                   <li>Traducir contenido a otro idioma sin salir de tu app.</li>
                 </ul>`,
                `<p>El patrón es siempre el mismo: tu frontend le manda al backend lo que el usuario escribió → el backend le agrega instrucciones (el "prompt") y lo reenvía a la API de IA → la respuesta regresa al usuario. Nunca conectes el frontend directo a la API de IA — expondrías tu clave secreta a cualquiera que abra el inspector del navegador.</p>`
              ]
            },
            {
              id: "apis-ia-prompt-engineering",
              title: "03-diseñar-prompts-en-tu-app.md",
              status: "listo",
              body: [
                `<p>Cuando la IA es parte de tu app (no un chat directo con el usuario), tú controlas exactamente qué instrucciones recibe — a esto se le llama <strong>prompt engineering</strong>.</p>`,
                `<pre class="code-block"><code>const prompt = \`Eres un asistente que resume texto en español.
Reglas:
- Máximo 3 oraciones.
- No agregues opiniones, solo resume.

Texto a resumir: "\${textoDelUsuario}"\`;</code></pre>`,
                `<p>Dar instrucciones claras, ejemplos, y reglas explícitas de formato (como aquí) hace que la respuesta sea consistente y predecible — clave para que una función de tu app funcione igual cada vez que un usuario la use.</p>`
              ]
            }
          ]
        },
        {
          id: "python-para-ia",
          title: "python-para-ia/",
          lessons: [
            {
              id: "numpy-basico",
              title: "01-numpy-basico.md",
              status: "listo",
              body: [
                `<p><strong>NumPy</strong> es la base de casi todo el machine learning en Python — trabaja con arreglos numéricos de forma mucho más rápida que las listas normales de Python.</p>`,
                `<pre class="code-block"><code># pip install numpy --break-system-packages
import numpy as np

numeros = np.array([1, 2, 3, 4, 5])
print(numeros * 2)          # [2 4 6 8 10] — opera sobre todo el arreglo a la vez
print(numeros.mean())       # promedio: 3.0
print(numeros.max())        # máximo: 5

matriz = np.array([[1, 2], [3, 4]])
print(matriz.shape)         # (2, 2) — filas, columnas</code></pre>`,
                `<p>La diferencia clave con una lista normal de Python: <code>numeros * 2</code> multiplica cada elemento automáticamente, sin necesitar un bucle <code>for</code>. Esto se llama "operación vectorizada" y es mucho más rápido para datasets grandes.</p>`
              ]
            },
            {
              id: "pandas-basico",
              title: "02-pandas-basico.md",
              status: "listo",
              body: [
                `<p><strong>Pandas</strong> maneja datos en tablas (como una hoja de Excel) — es la herramienta estándar para limpiar y explorar datos antes de entrenar cualquier modelo.</p>`,
                `<pre class="code-block"><code># pip install pandas --break-system-packages
import pandas as pd

df = pd.read_csv("datos.csv")
print(df.head())          # primeras 5 filas
print(df["edad"].mean())   # promedio de una columna
print(df[df["edad"] &gt; 18]) # filtrar filas

df["edad_en_meses"] = df["edad"] * 12 # crear una columna nueva</code></pre>`,
                `<p><code>DataFrame</code> (lo que devuelve <code>pd.read_csv</code>) es la estructura central de Pandas — piensa en ella como una tabla de base de datos que vive en memoria, con filtros y cálculos muy rápidos de escribir.</p>`
              ]
            }
          ]
        },
        {
          id: "machine-learning",
          title: "machine-learning/",
          lessons: [
            {
              id: "ml-conceptos",
              title: "01-conceptos-base.md",
              status: "listo",
              body: [
                `<p><strong>Machine learning</strong> es hacer que una computadora encuentre patrones en datos por sí misma, en vez de programar reglas explícitas a mano.</p>`,
                `<ul>
                   <li><strong>Aprendizaje supervisado</strong>: le das ejemplos con la respuesta correcta ya incluida (fotos etiquetadas "gato"/"perro"), y el modelo aprende a predecir la respuesta en ejemplos nuevos.</li>
                   <li><strong>Aprendizaje no supervisado</strong>: no hay respuesta correcta dada — el modelo encuentra agrupaciones o patrones por sí solo (agrupar clientes parecidos, por ejemplo).</li>
                   <li><strong>Entrenamiento</strong>: el proceso de ajustar el modelo con datos de ejemplo.</li>
                   <li><strong>Overfitting</strong>: cuando el modelo "memoriza" los datos de entrenamiento en vez de aprender el patrón general, y falla con datos nuevos.</li>
                 </ul>`
              ]
            },
            {
              id: "ml-scikit-learn",
              title: "02-tu-primer-modelo-con-scikit-learn.md",
              status: "listo",
              body: [
                `<p><strong>scikit-learn</strong> es la librería más simple para empezar a entrenar modelos reales, sin escribir las matemáticas desde cero.</p>`,
                `<pre class="code-block"><code># pip install scikit-learn --break-system-packages
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

# X = características (por ejemplo, tamaño y peso de una fruta)
# y = la respuesta correcta (el tipo de fruta)
X_entreno, X_prueba, y_entreno, y_prueba = train_test_split(X, y, test_size=0.2)

modelo = DecisionTreeClassifier()
modelo.fit(X_entreno, y_entreno)          # entrena

precision = modelo.score(X_prueba, y_prueba) # evalúa qué tan bien predice
prediccion = modelo.predict([[150, 6]])      # predice un caso nuevo</code></pre>`,
                `<p><code>train_test_split</code> separa tus datos en dos grupos: uno para entrenar y otro que el modelo nunca vio, para comprobar honestamente qué tan bien aprendió (y detectar overfitting).</p>`
              ]
            }
          ]
        },
        {
          id: "redes-neuronales",
          title: "redes-neuronales/",
          lessons: [
            {
              id: "redes-conceptos",
              title: "01-que-es-una-red-neuronal.md",
              status: "listo",
              body: [
                `<p>Una red neuronal es un modelo inspirado (de forma muy simplificada) en cómo funcionan las neuronas del cerebro: capas de "nodos" conectados, donde cada conexión tiene un peso que se ajusta durante el entrenamiento.</p>`,
                `<ul>
                   <li><strong>Capa de entrada</strong>: recibe los datos (por ejemplo, los píxeles de una imagen).</li>
                   <li><strong>Capas ocultas</strong>: donde ocurre el procesamiento — más capas y nodos permiten aprender patrones más complejos.</li>
                   <li><strong>Capa de salida</strong>: da la predicción final (por ejemplo, qué dígito es en una imagen de 0-9).</li>
                 </ul>`,
                `<p>Los modelos de lenguaje grandes (como Claude) son, en el fondo, redes neuronales enormes entrenadas con cantidades masivas de texto — la misma idea base, escalada a un tamaño gigantesco.</p>`
              ]
            },
            {
              id: "redes-tensorflow",
              title: "02-tu-primera-red-con-tensorflow.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code># pip install tensorflow --break-system-packages
import tensorflow as tf

modelo = tf.keras.Sequential([
    tf.keras.layers.Dense(16, activation="relu", input_shape=(4,)),
    tf.keras.layers.Dense(8, activation="relu"),
    tf.keras.layers.Dense(3, activation="softmax")
])

modelo.compile(optimizer="adam", loss="categorical_crossentropy", metrics=["accuracy"])
modelo.fit(X_entreno, y_entreno, epochs=20)</code></pre>`,
                `<p><code>Dense</code> es una capa donde cada nodo se conecta con todos los de la capa anterior. <code>epochs</code> es cuántas veces el modelo revisa el set de datos completo durante el entrenamiento — muy pocas y no aprende lo suficiente, demasiadas y cae en overfitting.</p>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "recursos",
      icon: "📁",
      title: "07 · Herramientas y recursos",
      description: "Git/GitHub, terminal y buenas prácticas — lo que usas todos los días sin importar qué construyas.",
      lessons: [
        {
          id: "panorama-recursos",
          title: "00-panorama-general.md",
          status: "listo",
          body: [
            `<p>Esta carpeta no enseña un lenguaje — enseña las <strong>herramientas de trabajo</strong> que vas a usar sin importar si haces páginas web, apps móviles o videojuegos. Git en particular ya lo usaste de verdad para publicar este mismo foro, así que aquí está explicado con calma todo lo que pasó en ese proceso.</p>`
          ]
        }
      ],
      subfolders: [
        {
          id: "git-github",
          title: "git-y-github/",
          lessons: [
            {
              id: "git-que-es",
              title: "01-que-es-git-y-por-que-importa.md",
              status: "listo",
              body: [
                `<p><strong>Git</strong> guarda el historial completo de tu código — cada cambio que confirmas queda registrado, así que siempre puedes volver atrás si algo se rompe. <strong>GitHub</strong> es un sitio que aloja tus repositorios de Git en la nube (hay otros: GitLab, Bitbucket).</p>`,
                `<p><strong>Diferencia clave:</strong> Git es la herramienta que corre en tu computadora; GitHub es el lugar donde subes una copia para respaldarla, compartirla, o colaborar con otros. Puedes usar Git sin GitHub, pero no al revés.</p>`
              ]
            },
            {
              id: "git-flujo-basico",
              title: "02-el-flujo-basico.md",
              status: "listo",
              body: [
                `<p>Este es el ciclo que vas a repetir todo el tiempo — literalmente el que usaste para publicar tu foro:</p>`,
                `<pre class="code-block"><code>git init                          # convierte una carpeta en repositorio (solo una vez)
git add .                          # marca los cambios para guardarlos
git commit -m "mensaje claro"       # guarda ese punto en el historial
git push                           # sube los cambios a GitHub</code></pre>`,
                `<p><strong>Analogía simple:</strong> <code>add</code> es poner cosas en una caja, <code>commit</code> es cerrar la caja con una etiqueta describiendo qué hay adentro, y <code>push</code> es enviarla a la bodega (GitHub). Puedes hacer varios <code>add</code>/<code>commit</code> antes de un solo <code>push</code>.</p>`
              ]
            },
            {
              id: "git-status-log-diff",
              title: "03-revisar-el-estado-de-tu-proyecto.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>git status    # qué archivos cambiaron, cuáles están listos para commit
git log       # historial de commits anteriores
git diff      # qué líneas exactas cambiaron, línea por línea</code></pre>`,
                `<p><code>git status</code> es el comando que más vas a usar — revisa el estado antes de cada <code>add</code>/<code>commit</code> para saber exactamente qué estás a punto de guardar. Se sale de <code>git log</code> presionando la tecla <code>q</code>.</p>`
              ]
            },
            {
              id: "git-gitignore",
              title: "04-gitignore.md",
              status: "listo",
              body: [
                `<p>Un archivo <code>.gitignore</code> le dice a Git qué <strong>nunca</strong> debe subir — claves secretas, carpetas pesadas generadas automáticamente, archivos del sistema operativo.</p>`,
                `<pre class="code-block"><code># archivo .gitignore
node_modules/
.env
*.log
.DS_Store</code></pre>`,
                `<p><code>node_modules/</code> se regenera con <code>npm install</code>, así que subirla solo desperdicia espacio. <code>.env</code> nunca se sube porque contiene claves secretas (como aprendiste en la carpeta de despliegue). Crea este archivo <strong>antes</strong> de tu primer <code>git add .</code> — si ya subiste algo por error, Git sigue rastreándolo aunque lo agregues después.</p>`
              ]
            },
            {
              id: "git-deshacer-errores",
              title: "05-deshacer-errores.md",
              status: "listo",
              body: [
                `<p>Todo el mundo comete errores con Git — esto es lo que te salva:</p>`,
                `<pre class="code-block"><code>git checkout -- archivo.js       # descarta cambios sin guardar en ese archivo
git reset HEAD archivo.js         # saca un archivo del "add", sin borrar el cambio
git commit --amend -m "nuevo mensaje" # corrige el mensaje del último commit
git revert &lt;hash-del-commit&gt;       # deshace un commit ya subido, creando uno nuevo</code></pre>`,
                `<p>Recuerda también el truco de tu propia experiencia: si la terminal se queda en modo <code>&gt;&gt;</code> esperando algo, <code>Ctrl + C</code> cancela y te devuelve al prompt normal.</p>`
              ]
            },
            {
              id: "git-ramas",
              title: "06-ramas-branches.md",
              status: "listo",
              body: [
                `<p>Una <strong>rama</strong> (branch) es una línea de trabajo separada — te permite probar algo nuevo sin arriesgar el código que ya funciona en <code>main</code>.</p>`,
                `<pre class="code-block"><code>git branch nueva-funcion           # crea una rama nueva
git checkout nueva-funcion          # cambia a esa rama
git checkout -b otra-funcion        # crea Y cambia en un solo paso

# ... trabajas y haces commits en esa rama ...

git checkout main
git merge nueva-funcion             # trae los cambios de vuelta a main</code></pre>`,
                `<p>Flujo típico real: creas una rama por cada funcionalidad nueva, trabajas ahí sin miedo a romper nada, y cuando funciona la unes (<code>merge</code>) de vuelta a <code>main</code>.</p>`
              ]
            },
            {
              id: "git-conflictos",
              title: "07-resolver-conflictos.md",
              status: "listo",
              body: [
                `<p>Un <strong>conflicto</strong> ocurre cuando Git no puede combinar automáticamente dos cambios en la misma línea de un archivo (típicamente al hacer <code>merge</code> o <code>pull</code>). Git marca el archivo así:</p>`,
                `<pre class="code-block"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
tu versión del código
=======
la otra versión del código
&gt;&gt;&gt;&gt;&gt;&gt;&gt; nombre-de-la-rama</code></pre>`,
                `<p>Tienes que editar el archivo a mano: decide qué código quieres conservar (uno, el otro, o una mezcla), borra las líneas <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>/<code>=======</code>/<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>, y luego <code>git add</code> + <code>git commit</code> normal para cerrar el conflicto.</p>`
              ]
            },
            {
              id: "git-colaborar-github",
              title: "08-colaborar-en-github.md",
              status: "listo",
              body: [
                `<p>Cuando trabajas con otras personas (o quieres proponer un cambio a un proyecto que no es tuyo), el flujo estándar en GitHub es:</p>`,
                `<ul>
                   <li><strong>Fork</strong>: copias el repositorio de otra persona a tu propia cuenta.</li>
                   <li><strong>Clone</strong>: <code>git clone https://github.com/usuario/repo.git</code> — descarga una copia local del repositorio a tu computadora.</li>
                   <li><strong>Pull request</strong>: propones que tus cambios se agreguen al proyecto original — el dueño los revisa antes de aceptarlos.</li>
                   <li><strong>Issues</strong>: la sección para reportar errores o proponer ideas, sin necesitar escribir código todavía.</li>
                 </ul>`
              ]
            }
          ]
        },
        {
          id: "terminal",
          title: "terminal/",
          lessons: [
            {
              id: "terminal-comandos-basicos",
              title: "01-comandos-basicos.md",
              status: "listo",
              body: [
                `<p>La terminal (o "línea de comandos") es más rápida que navegar con clics una vez que memorizas estos comandos base — funcionan igual en PowerShell (Windows), Mac y Linux, con pequeñas diferencias marcadas:</p>`,
                `<pre class="code-block"><code>cd nombre-carpeta      # entrar a una carpeta
cd ..                  # subir un nivel
ls                     # listar archivos (Windows PowerShell: también funciona)
mkdir nueva-carpeta     # crear una carpeta
pwd                     # ver en qué carpeta estás parado ahora mismo
cls                     # limpiar la pantalla (Mac/Linux: clear)</code></pre>`,
                `<p><code>cd</code> es el que más vas a usar — es cómo te mueves entre carpetas sin abrir el explorador de archivos.</p>`
              ]
            },
            {
              id: "terminal-npm",
              title: "02-npm-y-gestores-de-paquetes.md",
              status: "listo",
              body: [
                `<p>Un <strong>gestor de paquetes</strong> descarga e instala librerías de código escrito por otros, para no reinventar todo desde cero. Ya usaste <code>npm</code> (Node) y <code>pip</code> (Python) varias veces en este curso.</p>`,
                `<pre class="code-block"><code>npm init -y              # crea un package.json nuevo
npm install express       # instala una librería
npm install -g nodemon    # instala de forma global (disponible en cualquier proyecto)
npm run build             # ejecuta un script definido en package.json

pip install pandas --break-system-packages   # equivalente en Python</code></pre>`,
                `<p>El archivo <code>package.json</code> lista todas las dependencias de tu proyecto — por eso <code>node_modules/</code> va en <code>.gitignore</code>: cualquiera puede regenerarla con <code>npm install</code> a partir de ese archivo.</p>`
              ]
            }
          ]
        },
        {
          id: "buenas-practicas",
          title: "buenas-practicas/",
          lessons: [
            {
              id: "nombres-claros",
              title: "01-nombrar-variables-y-archivos.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>// ❌ Confuso
let x = 20;
let d = new Date();
function f(a, b) { return a + b; }

// ✅ Claro
let edadUsuario = 20;
let fechaActual = new Date();
function calcularTotal(precio, impuesto) { return precio + impuesto; }</code></pre>`,
                `<p>El código se escribe una vez pero se <em>lee</em> muchas veces — incluso tú mismo, un mes después. Un nombre claro ahorra minutos de confusión cada vez que alguien (incluido tú) vuelve a ese archivo.</p>`
              ]
            },
            {
              id: "readme-comentarios",
              title: "02-readme-y-comentarios.md",
              status: "listo",
              body: [
                `<p>Un <strong>README.md</strong> en la raíz de tu proyecto es lo primero que ve cualquiera que abra tu repositorio en GitHub — explica qué es el proyecto y cómo correrlo.</p>`,
                `<pre class="code-block"><code># Mi Proyecto

Una breve descripción de qué hace.

## Cómo correrlo
\\\`\\\`\\\`
npm install
npm start
\\\`\\\`\\\`</code></pre>`,
                `<p><strong>Comentarios en el código:</strong> úsalos para explicar el <em>por qué</em> de una decisión no obvia, no para repetir lo que el código ya dice claramente (<code>// suma 1</code> arriba de <code>contador++</code> no aporta nada).</p>`
              ]
            },
            {
              id: "debug-habitos",
              title: "03-habitos-para-depurar-errores.md",
              status: "listo",
              body: [
                `<p>Cuando algo no funciona, en este orden:</p>`,
                `<ul>
                   <li><strong>Lee el mensaje de error completo</strong> — casi siempre dice exactamente el archivo y la línea del problema (lo viviste varias veces con los errores de Git en este curso).</li>
                   <li>Usa <code>console.log()</code> (JS) o <code>print()</code> (Python) para revisar qué valor tiene realmente una variable en ese punto — no asumas, verifica.</li>
                   <li>Aísla el problema: comenta partes del código hasta encontrar la línea exacta que causa el error.</li>
                   <li>Busca el mensaje de error exacto (entre comillas) en internet — es casi seguro que alguien más ya lo tuvo.</li>
                 </ul>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "linux",
      icon: "📁",
      title: "08 · Linux",
      description: "Terminal, administración de sistemas y bash scripting.",
      lessons: [
        {
          id: "linux-panorama",
          title: "00-por-que-linux.md",
          status: "listo",
          body: [
            `<p>Linux corre la gran mayoría de los servidores del mundo (incluyendo probablemente donde termine publicado este mismo foro). Saber moverte en Linux por terminal es una habilidad que se espera de cualquier desarrollador backend, no solo de administradores de sistemas.</p>`,
            `<p>Para practicar sin instalar nada: <strong>WSL</strong> (Windows Subsystem for Linux) te da una terminal Linux real dentro de Windows — se instala con un solo comando (<code>wsl --install</code> en PowerShell como administrador).</p>`
          ]
        }
      ],
      subfolders: [
        {
          id: "linux-terminal",
          title: "terminal/",
          lessons: [
            {
              id: "linux-navegacion",
              title: "01-navegacion-y-archivos.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>pwd                    # carpeta actual
ls -la                 # listar archivos, incluyendo ocultos, con detalles
cd carpeta/             # entrar a una carpeta
mkdir proyecto           # crear carpeta
touch archivo.txt        # crear archivo vacío
cp origen.txt destino.txt # copiar
mv archivo.txt nueva-ruta/ # mover o renombrar
rm archivo.txt            # borrar archivo
rm -r carpeta/             # borrar carpeta y su contenido</code></pre>`,
                `<p><code>rm -r</code> borra sin pasar por la papelera — no hay "deshacer". Antes de correrlo, confirma con <code>ls</code> que estás exactamente en la carpeta que crees.</p>`
              ]
            },
            {
              id: "linux-permisos",
              title: "02-permisos-de-archivos.md",
              status: "listo",
              body: [
                `<p>Cada archivo en Linux tiene permisos de lectura (r), escritura (w) y ejecución (x), para tres grupos: el dueño, el grupo, y todos los demás.</p>`,
                `<pre class="code-block"><code>ls -l archivo.sh
# -rwxr-xr--  1 joseph  staff  240 archivo.sh
#  ^^^ ^^^ ^^^
#  dueño grupo otros

chmod +x archivo.sh        # dar permiso de ejecución
chmod 755 archivo.sh        # rwx para el dueño, r-x para grupo y otros
sudo chown joseph archivo.sh # cambiar el dueño del archivo</code></pre>`,
                `<p>El error <code>Permission denied</code> al intentar correr un script casi siempre se arregla con <code>chmod +x</code>. <code>sudo</code> ejecuta un comando con permisos de administrador — úsalo solo cuando sepas exactamente qué hace ese comando.</p>`
              ]
            },
            {
              id: "linux-procesos",
              title: "03-procesos-y-servicios.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>ps aux               # ver todos los procesos corriendo
top                   # monitor en vivo de CPU/memoria (q para salir)
kill 1234             # terminar el proceso con ese ID
sudo systemctl status nginx   # ver el estado de un servicio
sudo systemctl restart nginx  # reiniciar un servicio
sudo systemctl enable nginx   # que arranque solo al iniciar el sistema</code></pre>`,
                `<p><code>systemctl</code> es cómo administras servicios que corren en segundo plano (un servidor web, una base de datos) en la mayoría de distribuciones Linux modernas.</p>`
              ]
            },
            {
              id: "linux-paquetes",
              title: "04-gestion-de-paquetes.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code># Debian/Ubuntu
sudo apt update              # actualizar la lista de paquetes disponibles
sudo apt install nginx        # instalar un programa
sudo apt remove nginx         # desinstalar

# Red Hat/CentOS/Fedora
sudo dnf install nginx</code></pre>`,
                `<p><code>apt</code> es al sistema operativo lo que <code>npm</code> es a un proyecto de Node — instala software, resolviendo automáticamente qué otras librerías necesita ese programa para funcionar.</p>`
              ]
            }
          ]
        },
        {
          id: "linux-bash",
          title: "bash-scripting/",
          lessons: [
            {
              id: "bash-primer-script",
              title: "01-tu-primer-script.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>#!/bin/bash
# archivo: saludo.sh

nombre="Joseph"
echo "Hola, $nombre"

if [ -f "datos.txt" ]; then
  echo "El archivo existe"
else
  echo "No se encontró el archivo"
fi</code></pre>`,
                `<p><code>#!/bin/bash</code> (llamado "shebang") en la primera línea le dice al sistema qué intérprete usar. Ejecuta con <code>chmod +x saludo.sh</code> y luego <code>./saludo.sh</code>.</p>`
              ]
            },
            {
              id: "bash-bucles-variables",
              title: "02-bucles-y-automatizacion.md",
              status: "listo",
              body: [
                `<pre class="code-block"><code>for archivo in *.txt; do
  echo "Procesando: $archivo"
done

contador=0
while [ $contador -lt 5 ]; do
  echo "Vuelta $contador"
  contador=$((contador + 1))
done</code></pre>`,
                `<p>Los scripts de bash son ideales para automatizar tareas repetitivas: respaldos automáticos, limpiar archivos temporales, desplegar código — cualquier secuencia de comandos que harías a mano muchas veces.</p>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "windows-server",
      icon: "📁",
      title: "09 · Windows Server",
      description: "Administración de servidores Windows: Active Directory, roles y redes.",
      lessons: [
        {
          id: "ws-panorama",
          title: "00-que-es-windows-server.md",
          status: "listo",
          body: [
            `<p>Windows Server es la versión de Windows diseñada para correr servicios de red, no para uso personal — sin la mayoría de elementos visuales de escritorio, optimizada para estar siempre encendida administrando usuarios, archivos y otros servidores.</p>`,
            `<p>Es el estándar en empresas medianas y grandes que usan el ecosistema de Microsoft (Office 365, Exchange, aplicaciones internas de .NET) — un complemento directo a lo que ya viste en la carpeta de <strong>C#/.NET</strong>.</p>`
          ]
        }
      ],
      subfolders: [
        {
          id: "ws-fundamentos",
          title: "fundamentos/",
          lessons: [
            {
              id: "ws-roles",
              title: "01-instalacion-y-roles.md",
              status: "listo",
              body: [
                `<p>Windows Server se configura instalando <strong>roles</strong> — cada uno convierte al servidor en un tipo de servicio específico:</p>`,
                `<ul>
                   <li><strong>Active Directory Domain Services (AD DS)</strong>: gestiona usuarios y permisos de toda una red de computadoras.</li>
                   <li><strong>DNS Server</strong>: traduce nombres (<code>servidor.empresa.local</code>) a direcciones IP.</li>
                   <li><strong>DHCP Server</strong>: asigna direcciones IP automáticamente a cada dispositivo que se conecta.</li>
                   <li><strong>File Server</strong>: comparte carpetas y archivos entre computadoras de la red.</li>
                 </ul>`,
                `<p>Se instalan desde <strong>Server Manager</strong> → "Add Roles and Features" — una interfaz gráfica que guía el proceso paso a paso, o por PowerShell con <code>Install-WindowsFeature</code>.</p>`
              ]
            },
            {
              id: "ws-powershell",
              title: "02-powershell-basico.md",
              status: "listo",
              body: [
                `<p><strong>PowerShell</strong> es la terminal de administración de Windows — mucho más potente que la línea de comandos clásica (<code>cmd</code>), y la forma real en que se administran servidores Windows a gran escala.</p>`,
                `<pre class="code-block"><code>Get-Process                       # listar procesos corriendo
Get-Service                       # listar servicios
Restart-Service -Name "Spooler"    # reiniciar un servicio
Get-ADUser -Filter *                # listar usuarios de Active Directory
New-ADUser -Name "Joseph" -Enabled $true</code></pre>`,
                `<p>Los comandos de PowerShell siguen el patrón <code>Verbo-Sustantivo</code> (<code>Get-</code>, <code>New-</code>, <code>Restart-</code>, <code>Remove-</code>) — una vez que reconoces el patrón, adivinar comandos nuevos se vuelve mucho más fácil.</p>`
              ]
            }
          ]
        },
        {
          id: "ws-active-directory",
          title: "active-directory/",
          lessons: [
            {
              id: "ad-que-es",
              title: "01-que-es-active-directory.md",
              status: "listo",
              body: [
                `<p><strong>Active Directory (AD)</strong> es una base de datos central que guarda todos los usuarios, grupos y computadoras de una organización, con sus permisos — en vez de crear una cuenta separada en cada computadora de la empresa, se administra todo desde un solo lugar.</p>`,
                `<p><strong>Estructura básica:</strong> un <strong>Domain</strong> (dominio) contiene <strong>OUs</strong> (Organizational Units — como carpetas para organizar usuarios y equipos por departamento), que contienen <strong>usuarios</strong> y <strong>grupos</strong>.</p>`
              ]
            },
            {
              id: "ad-usuarios-grupos",
              title: "02-usuarios-y-grupos.md",
              status: "listo",
              body: [
                `<p>En vez de dar permisos a cada usuario uno por uno, se agrupan usuarios con necesidades similares y se le dan permisos al <strong>grupo</strong> completo.</p>`,
                `<pre class="code-block"><code># PowerShell
New-ADUser -Name "Maria Lopez" -SamAccountName "mlopez" -Enabled $true
New-ADGroup -Name "Contabilidad" -GroupScope Global
Add-ADGroupMember -Identity "Contabilidad" -Members "mlopez"</code></pre>`,
                `<p>Cuando alguien nuevo entra al departamento de Contabilidad, solo lo agregas a ese grupo y hereda automáticamente todos los permisos ya configurados — sin repetir la configuración usuario por usuario.</p>`
              ]
            }
          ]
        },
        {
          id: "ws-redes",
          title: "redes-windows/",
          lessons: [
            {
              id: "ws-dns-dhcp",
              title: "01-dns-y-dhcp.md",
              status: "listo",
              body: [
                `<p><strong>DHCP</strong> le asigna automáticamente una dirección IP a cada dispositivo que se conecta a la red — sin él, tendrías que configurar cada computadora manualmente.</p>`,
                `<p><strong>DNS</strong> traduce nombres legibles (<code>impresora.empresa.local</code>) a direcciones IP reales — la misma idea que el DNS público de internet (cuando escribes <code>google.com</code>), pero para la red interna de la empresa.</p>`,
                `<p>Ambos roles casi siempre corren juntos en el mismo servidor que tiene Active Directory, porque AD depende de DNS para funcionar correctamente.</p>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ciberseguridad",
      icon: "📁",
      title: "10 · Ciberseguridad",
      description: "Fundamentos de seguridad, criptografía y cómo proteger lo que construyes.",
      lessons: [
        {
          id: "ciber-panorama",
          title: "00-los-3-pilares.md",
          status: "listo",
          body: [
            `<p>Toda la ciberseguridad se resume en proteger tres cosas — se conoce como la <strong>tríada CIA</strong> (no la agencia, las siglas en inglés):</p>`,
            `<ul>
               <li><strong>Confidencialidad</strong>: que solo quien debe ver un dato pueda verlo (cifrado, permisos).</li>
               <li><strong>Integridad</strong>: que un dato no sea modificado sin autorización (hashes, firmas digitales).</li>
               <li><strong>Disponibilidad</strong>: que el sistema siga funcionando cuando se necesita (respaldos, protección contra caídas).</li>
             </ul>`,
            `<p>Cada tema de esta carpeta protege una o varias de estas tres cosas — es el marco mental para entender <em>por qué</em> existe cada práctica de seguridad, no solo memorizarlas sueltas.</p>`
          ]
        }
      ],
      subfolders: [
        {
          id: "criptografia",
          title: "criptografia/",
          lessons: [
            {
              id: "cripto-hashing",
              title: "01-hashing.md",
              status: "listo",
              body: [
                `<p>Un <strong>hash</strong> convierte cualquier dato en una cadena de longitud fija, de forma que es prácticamente imposible reconstruir el dato original a partir del hash, y cualquier cambio mínimo en el dato produce un hash completamente distinto.</p>`,
                `<pre class="code-block"><code># Ya lo usaste en la carpeta de PHP:
password_hash("micontraseña", PASSWORD_DEFAULT)
# genera algo como: $2y$10$N9qo8uLOickgx2ZMRZoMy...</code></pre>`,
                `<p>Por eso las contraseñas se guardan como hash, nunca en texto plano: si alguien roba la base de datos, no puede "deshacer" el hash para obtener la contraseña real — solo puede comparar hashes al verificar un login (<code>password_verify</code>).</p>`
              ]
            },
            {
              id: "cripto-simetrica-asimetrica",
              title: "02-cifrado-simetrico-y-asimetrico.md",
              status: "listo",
              body: [
                `<p><strong>Cifrado simétrico</strong>: una sola clave sirve tanto para cifrar como para descifrar. Rápido, pero hay que compartir esa clave de forma segura con quien va a leer el mensaje.</p>`,
                `<p><strong>Cifrado asimétrico</strong>: hay dos claves relacionadas matemáticamente — una <strong>pública</strong> (la compartes con cualquiera) y una <strong>privada</strong> (nunca la compartes). Lo que se cifra con la pública, solo se descifra con la privada correspondiente.</p>`,
                `<p>Este es exactamente el sistema detrás de HTTPS: tu navegador usa la clave pública del sitio para establecer una conexión segura, sin que nadie más en la red pueda leer lo que envías.</p>`
              ]
            },
            {
              id: "cripto-https-tls",
              title: "03-https-y-certificados.md",
              status: "listo",
              body: [
                `<p><strong>HTTPS</strong> es HTTP normal, pero con todo el tráfico cifrado usando <strong>TLS</strong>. El candado en el navegador significa que nadie en la red (ni siquiera el WiFi público en el que estés) puede leer lo que envías o recibes.</p>`,
                `<p>Un <strong>certificado SSL/TLS</strong> es un archivo que prueba que un dominio realmente le pertenece a quien dice ser — lo emite una autoridad certificadora de confianza. Servicios como <strong>Let's Encrypt</strong> los dan gratis, y plataformas como GitHub Pages, Vercel o Netlify (las que ya usaste) lo configuran automáticamente sin que tengas que hacer nada.</p>`
              ]
            }
          ]
        },
        {
          id: "seguridad-web",
          title: "seguridad-web/",
          lessons: [
            {
              id: "owasp-top-vulnerabilidades",
              title: "01-vulnerabilidades-mas-comunes.md",
              status: "listo",
              body: [
                `<p>El <strong>OWASP Top 10</strong> es la lista de referencia mundial de los errores de seguridad más comunes en aplicaciones web. Ya evitaste varios de estos en carpetas anteriores del curso, sin llamarlos por su nombre:</p>`,
                `<ul>
                   <li><strong>Inyección SQL</strong>: cuando el input del usuario se mezcla directamente en una consulta a la base de datos. Se evita con parámetros preparados (viste esto en <strong>php/06</strong>).</li>
                   <li><strong>XSS (Cross-Site Scripting)</strong>: cuando texto del usuario se muestra sin limpiar y puede incluir código malicioso. Se evita con <code>htmlspecialchars()</code> o el escape automático de React.</li>
                   <li><strong>Autenticación rota</strong>: contraseñas sin hash, sesiones que nunca expiran, sin límite de intentos de login.</li>
                   <li><strong>Exposición de datos sensibles</strong>: claves de API en el código en vez de variables de entorno (viste esto en <strong>despliegue/01</strong>).</li>
                 </ul>`,
                `<p>El patrón se repite: casi todas las vulnerabilidades web vienen de <strong>confiar en datos que vienen del usuario</strong> sin validarlos ni limpiarlos primero.</p>`
              ]
            },
            {
              id: "seguridad-defensa-practica",
              title: "02-defensa-practica.md",
              status: "listo",
              body: [
                `<ul>
                   <li>Valida y limpia <strong>todo</strong> lo que entra de un formulario, tanto en el frontend como (obligatorio) en el backend.</li>
                   <li>Usa siempre HTTPS, nunca HTTP, para cualquier sitio con login.</li>
                   <li>Limita los intentos de login fallidos (evita ataques de "fuerza bruta" probando contraseñas al azar).</li>
                   <li>Mantén actualizadas las librerías de tu proyecto — muchas vulnerabilidades reales vienen de dependencias viejas con fallos ya conocidos y públicos.</li>
                   <li>Nunca confíes en validación hecha solo en JavaScript del navegador — cualquiera puede desactivarla o saltársela directamente contra tu API.</li>
                 </ul>`
              ]
            }
          ]
        },
        {
          id: "redes-firewalls",
          title: "redes-y-firewalls/",
          lessons: [
            {
              id: "firewall-conceptos",
              title: "01-firewalls-y-puertos.md",
              status: "listo",
              body: [
                `<p>Un <strong>puerto</strong> es un número que identifica qué servicio específico de una computadora está recibiendo una conexión (el 80/443 para web, el 22 para SSH, el 3306 para MySQL). Un <strong>firewall</strong> decide qué tráfico entra o sale, filtrando por esos puertos y direcciones IP.</p>`,
                `<p>Regla base de cualquier servidor en producción: cierra todos los puertos que no necesites activamente. Cada puerto abierto es una puerta más que alguien podría intentar forzar — solo deja abierto lo estrictamente necesario para que tu app funcione.</p>`
              ]
            },
            {
              id: "vpn-conceptos",
              title: "02-vpn-basico.md",
              status: "listo",
              body: [
                `<p>Una <strong>VPN</strong> crea un túnel cifrado entre tu dispositivo y un servidor, de forma que todo tu tráfico pasa por ahí protegido, incluso en una red pública no confiable (WiFi de un café, por ejemplo).</p>`,
                `<p>En empresas, las VPNs también se usan para que empleados remotos accedan a la red interna (incluyendo un servidor con Active Directory) como si estuvieran físicamente en la oficina.</p>`
              ]
            }
          ]
        }
      ]
    },
    {
      id: "hacking-etico",
      icon: "📁",
      title: "11 · Hacking ético",
      description: "Metodología de auditoría de seguridad, siempre con autorización legal explícita.",
      lessons: [
        {
          id: "hacking-marco-legal",
          title: "00-el-marco-legal-primero.md",
          status: "listo",
          body: [
            `<p>Antes que cualquier técnica: probar la seguridad de un sistema <strong>sin permiso explícito por escrito del dueño</strong> es un delito en prácticamente todos los países, sin importar la intención. Esta carpeta enseña la profesión real de <strong>pentesting</strong> (pruebas de penetración autorizadas) — la diferencia legal completa entre eso y "hackear" algo es un solo documento: la <strong>autorización firmada</strong>.</p>`,
            `<p><strong>Cómo se practica de forma 100% legal:</strong></p>
             <ul>
               <li>Plataformas hechas para esto: <strong>TryHackMe</strong> y <strong>HackTheBox</strong> — servidores vulnerables a propósito, para practicar sin riesgo legal.</li>
               <li><strong>CTFs</strong> (Capture The Flag): competencias de seguridad, muchas gratuitas, con retos organizados por dificultad.</li>
               <li><strong>Programas de bug bounty</strong> (HackerOne, Bugcrowd): empresas que pagan por reportar vulnerabilidades reales en sus sistemas, dentro de reglas claras que ellas mismas definen.</li>
             </ul>`,
            `<p>La certificación de referencia en la industria para esta carrera es <strong>CEH</strong> (Certified Ethical Hacker) o, más orientada a la práctica real, <strong>OSCP</strong>.</p>`
          ]
        }
      ],
      subfolders: [
        {
          id: "hacking-metodologia",
          title: "metodologia/",
          lessons: [
            {
              id: "metodologia-fases",
              title: "01-las-fases-de-un-pentest.md",
              status: "listo",
              body: [
                `<p>Una auditoría de seguridad profesional sigue siempre las mismas fases, en orden:</p>`,
                `<ul>
                   <li><strong>Reconocimiento</strong>: recopilar información pública del objetivo (dominios, tecnologías usadas, empleados) sin tocar directamente sus sistemas.</li>
                   <li><strong>Escaneo</strong>: identificar qué puertos y servicios están activos y accesibles (herramientas como Nmap).</li>
                   <li><strong>Análisis de vulnerabilidades</strong>: comparar lo encontrado contra bases de datos conocidas de fallos de seguridad.</li>
                   <li><strong>Explotación</strong>: intentar aprovechar una vulnerabilidad real, solo dentro del alcance autorizado.</li>
                   <li><strong>Reporte</strong>: documentar todo lo encontrado con evidencia clara y recomendaciones — este es, en la práctica, el entregable más importante del trabajo completo.</li>
                 </ul>`
              ]
            },
            {
              id: "reconocimiento-osint",
              title: "02-reconocimiento-y-osint.md",
              status: "listo",
              body: [
                `<p><strong>OSINT</strong> (Open Source Intelligence) es recopilar información que ya es pública, sin interactuar directamente con los sistemas del objetivo — completamente legal incluso sin autorización, porque solo usas datos ya abiertos al público.</p>`,
                `<ul>
                   <li><code>whois dominio.com</code> — datos de registro de un dominio.</li>
                   <li>Buscar subdominios públicos y tecnologías usadas por un sitio.</li>
                   <li>Revisar perfiles públicos de LinkedIn para entender la estructura de una organización (usado en simulacros de ingeniería social autorizados).</li>
                 </ul>`,
                `<p>Esta fase existe porque, en un ataque real, la mayoría de brechas de seguridad empiezan con información que la propia organización expuso sin darse cuenta — no con una técnica sofisticada.</p>`
              ]
            }
          ]
        },
        {
          id: "hacking-herramientas",
          title: "herramientas/",
          lessons: [
            {
              id: "nmap-basico",
              title: "01-nmap-escaneo-de-red.md",
              status: "listo",
              body: [
                `<p><strong>Nmap</strong> es la herramienta estándar de la industria para descubrir qué dispositivos y servicios hay activos en una red — usada tanto por profesionales de seguridad como por administradores de sistemas para auditar sus propias redes.</p>`,
                `<pre class="code-block"><code>nmap 192.168.1.1              # escaneo básico de un dispositivo
nmap -sV 192.168.1.1            # detecta versión de cada servicio encontrado
nmap 192.168.1.0/24              # escanea toda una red local</code></pre>`,
                `<p>Solo apunta Nmap a redes o dispositivos que sean tuyos, o a las máquinas de práctica de TryHackMe/HackTheBox — nunca a redes ajenas sin autorización explícita.</p>`
              ]
            },
            {
              id: "wireshark-basico",
              title: "02-wireshark-analisis-de-trafico.md",
              status: "listo",
              body: [
                `<p><strong>Wireshark</strong> captura y muestra el tráfico de red en tiempo real — útil tanto para depurar problemas de conexión reales como para entender exactamente qué datos viajan por una red (y por qué HTTPS es tan importante: sin él, cualquiera con Wireshark en la misma red vería tu contraseña en texto plano si el sitio usa solo HTTP).</p>`,
                `<p>Es una herramienta de análisis, completamente legal de usar en tu propia red — la ilegalidad empieza si la usas para interceptar tráfico ajeno sin autorización.</p>`
              ]
            },
            {
              id: "burp-suite-basico",
              title: "03-burp-suite-y-apps-web.md",
              status: "listo",
              body: [
                `<p><strong>Burp Suite</strong> es la herramienta estándar para auditar la seguridad de aplicaciones web — se coloca entre tu navegador y el sitio, permitiéndote ver y modificar cada petición HTTP antes de que se envíe.</p>`,
                `<p>Es exactamente la herramienta que un profesional usaría para verificar que las defensas que aprendiste en <strong>ciberseguridad/seguridad-web/</strong> (validación en el backend, protección contra XSS e inyección SQL) realmente funcionan en tu propio proyecto — probarla contra tus propias apps es una excelente forma de cerrar el círculo de este curso.</p>`
              ]
            }
          ]
        },
        {
          id: "hacking-practica-legal",
          title: "practica-legal/",
          lessons: [
            {
              id: "plataformas-practica",
              title: "01-donde-practicar-legalmente.md",
              status: "listo",
              body: [
                `<ul>
                   <li><strong>TryHackMe</strong>: el mejor punto de entrada — retos guiados paso a paso, ideal si vienes sin experiencia previa en seguridad.</li>
                   <li><strong>HackTheBox</strong>: más orientado a quienes ya tienen bases, retos menos guiados y más realistas.</li>
                   <li><strong>PortSwigger Web Security Academy</strong>: gratuito, enfocado 100% en vulnerabilidades de aplicaciones web con laboratorios interactivos.</li>
                   <li><strong>OverTheWire</strong>: retos clásicos de Linux y seguridad básica, muy usados para practicar terminal y permisos.</li>
                 </ul>`,
                `<p>Empieza por TryHackMe, sigue la ruta "Pre Security" o "Cyber Security 101" — están diseñadas específicamente para quien viene sin experiencia previa en el tema.</p>`
              ]
            }
          ]
        }
      ]
    }
  ]
};
