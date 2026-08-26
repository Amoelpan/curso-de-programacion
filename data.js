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
            }
          ]
        },
        {
          id: "php",
          title: "php/",
          lessons: [
            {
              id: "php-intro",
              title: "01-que-es-php.md",
              status: "pendiente",
              body: [`<p>🔧 En construcción — próxima carpeta a desarrollar: PHP básico, conexión a MySQL, y cómo un servidor PHP procesa formularios.</p>`]
            }
          ]
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
        },
        {
          id: "fetch-y-apis",
          title: "fetch-y-apis.md",
          status: "listo",
          body: [
            `<p>Una <strong>API</strong> es un servidor que responde con datos (normalmente en formato JSON) cuando le pides algo. <code>fetch</code> es la función de JavaScript para pedirle datos a esa API sin recargar la página.</p>`,
            `<pre class="code-block"><code>async function obtenerUsuario() {
  const respuesta = await fetch("https://api.ejemplo.com/usuario/1");
  const datos = await respuesta.json();
  console.log(datos.nombre);
}

obtenerUsuario();</code></pre>`,
            `<p><strong>Lo esencial:</strong> <code>fetch</code> siempre devuelve una promesa, por eso se usa con <code>await</code> dentro de una función <code>async</code>. <code>.json()</code> convierte la respuesta en un objeto de JavaScript que ya puedes usar.</p>`,
            `<p>Envío de datos (por ejemplo, un formulario) usa <code>method: "POST"</code>:</p>`,
            `<pre class="code-block"><code>await fetch("https://api.ejemplo.com/mensajes", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ texto: "Hola" })
});</code></pre>`
          ]
        },
        {
          id: "intro-react",
          title: "intro-react.md",
          status: "listo",
          body: [
            `<p><strong>React</strong> organiza la interfaz en <strong>componentes</strong> reutilizables. Cada componente es una función que devuelve HTML (en realidad JSX, que se ve casi igual).</p>`,
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
            `<p><strong>State</strong> — la forma en que un componente "recuerda" y actualiza datos que cambian (como un contador o un formulario):</p>`,
            `<pre class="code-block"><code>import { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    &lt;button onClick={() =&gt; setCuenta(cuenta + 1)}&gt;
      Clics: {cuenta}
    &lt;/button&gt;
  );
}</code></pre>`,
            `<p>Regla clave: nunca modifiques el state directamente (<code>cuenta = cuenta + 1</code>) — siempre usa la función que te da <code>useState</code> (<code>setCuenta</code>), o React no se entera del cambio.</p>`
          ]
        },
        {
          id: "backend-express",
          title: "backend-node-express.md",
          status: "listo",
          body: [
            `<p><strong>Express</strong> es la forma más simple de crear un backend en Node.js — un servidor que responde a peticiones.</p>`,
            `<pre class="code-block"><code>const express = require("express");
const app = express();
app.use(express.json());

let tareas = [];

app.get("/tareas", (req, res) =&gt; {
  res.json(tareas);
});

app.post("/tareas", (req, res) =&gt; {
  const nueva = req.body.texto;
  tareas.push(nueva);
  res.status(201).json({ mensaje: "Tarea agregada" });
});

app.listen(3000, () =&gt; console.log("Servidor corriendo en el puerto 3000"));</code></pre>`,
            `<p>Instalación: <code>npm init -y</code> y luego <code>npm install express</code>. Corre el archivo con <code>node servidor.js</code>. Ahora tu frontend puede hacer <code>fetch("http://localhost:3000/tareas")</code> y hablar con este backend.</p>`
          ]
        },
        {
          id: "bases-de-datos-basico",
          title: "bases-de-datos-basico.md",
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
          id: "ejercicio-clima",
          title: "ejercicio-app-del-clima.md",
          status: "listo",
          body: [
            `<div class="exercise-box"><span class="exercise-label">🧩 EJERCICIO 1 — nivel: ya sabes fetch</span>
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
          title: "ejercicio-api-de-tareas.md",
          status: "listo",
          body: [
            `<div class="exercise-box"><span class="exercise-label">🧩 EJERCICIO 2 — nivel: ya sabes Express</span>
             <p>Construye una <strong>API de tareas completa</strong> (backend) con estas 4 rutas:</p>
             <ul>
               <li><code>GET /tareas</code> — devuelve todas las tareas</li>
               <li><code>POST /tareas</code> — agrega una tarea nueva</li>
               <li><code>DELETE /tareas/:id</code> — elimina una tarea por su posición en el arreglo</li>
               <li><code>PUT /tareas/:id</code> — marca una tarea como completada</li>
             </ul>
             <p>Pruébala con la extensión <strong>Thunder Client</strong> de VS Code (envía peticiones sin necesitar un frontend) antes de conectarla a una página.</p>
             </div>`
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
