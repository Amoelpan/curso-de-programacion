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
