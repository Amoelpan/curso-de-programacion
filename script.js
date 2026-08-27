const areas = {

    "programacion": {
        nombre: "Programación",
        icono: "💻",
        descripcion: "Aprende los fundamentos de la programación y cómo construir software."
    },

    "desarrollo-web": {
        nombre: "Desarrollo Web",
        icono: "🌐",
        descripcion: "Aprende a crear páginas y aplicaciones web modernas."
    },

    "aplicaciones-moviles": {
        nombre: "Aplicaciones Móviles",
        icono: "📱",
        descripcion: "Aprende a desarrollar aplicaciones para dispositivos móviles."
    },

    "aplicaciones-escritorio": {
        nombre: "Aplicaciones de Escritorio",
        icono: "🖥️",
        descripcion: "Construye aplicaciones para Windows, Linux y otros sistemas."
    },

    "videojuegos": {
        nombre: "Videojuegos",
        icono: "🎮",
        descripcion: "Aprende a crear videojuegos y sistemas interactivos."
    },

    "inteligencia-artificial": {
        nombre: "Inteligencia Artificial",
        icono: "🤖",
        descripcion: "Aprende sobre IA, modelos de lenguaje, agentes y machine learning."
    },

    "herramientas": {
        nombre: "Herramientas",
        icono: "🛠️",
        descripcion: "Aprende a utilizar las herramientas esenciales para programadores."
    },

    "bases-de-datos": {
        nombre: "Bases de Datos",
        icono: "🗄️",
        descripcion: "Aprende a almacenar, consultar y administrar información."
    },

    "proyectos": {
        nombre: "Proyectos",
        icono: "🚀",
        descripcion: "Practica lo aprendido construyendo proyectos reales."
    }

};

const categorias = {

    "programacion": [
        ["principiantes", "Principiantes"],
        ["variables-y-tipos-de-datos", "Variables y tipos de datos"],
        ["condicionales", "Condicionales"],
        ["bucles", "Bucles"],
        ["funciones", "Funciones"],
        ["estructuras-de-datos", "Estructuras de datos"],
        ["algoritmos", "Algoritmos"],
        ["programacion-orientada-a-objetos", "Programación orientada a objetos"],
        ["manejo-de-errores", "Manejo de errores"],
        ["debugging", "Debugging"],
        ["buenas-practicas", "Buenas prácticas"],
        ["proyectos", "Proyectos"]
    ],

    "desarrollo-web": [
        ["html", "HTML"],
        ["css", "CSS"],
        ["javascript", "JavaScript"],
        ["frontend", "Frontend"],
        ["backend", "Backend"],
        ["apis", "APIs"],
        ["bases-de-datos-web", "Bases de datos web"],
        ["autenticacion", "Autenticación"],
        ["despliegue", "Despliegue"]
    ],

    "aplicaciones-moviles": [
        ["android", "Android"],
        ["ios", "iOS"],
        ["flutter", "Flutter"],
        ["react-native", "React Native"],
        ["interfaces", "Interfaces"],
        ["apis-moviles", "APIs móviles"],
        ["almacenamiento", "Almacenamiento"],
        ["publicacion", "Publicación"]
    ],

    "aplicaciones-escritorio": [
        ["python", "Python"],
        ["c-sharp", "C#"],
        ["c-plus-plus", "C++"],
        ["java", "Java"],
        ["interfaces-graficas", "Interfaces gráficas"],
        ["sistemas-de-archivos", "Sistemas de archivos"],
        ["bases-de-datos", "Bases de datos"]
    ],

    "videojuegos": [
        ["fundamentos", "Fundamentos"],
        ["unity", "Unity"],
        ["unreal-engine", "Unreal Engine"],
        ["godot", "Godot"],
        ["roblox-studio", "Roblox Studio"],
        ["fisicas", "Físicas"],
        ["interfaces", "Interfaces"],
        ["inventarios", "Inventarios"],
        ["enemigos", "Enemigos"],
        ["multijugador", "Multijugador"],
        ["optimizacion", "Optimización"],
        ["publicacion", "Publicación"]
    ],

    "inteligencia-artificial": [
        ["fundamentos", "Fundamentos"],
        ["como-usar-ia", "Cómo usar IA"],
        ["prompt-engineering", "Prompt Engineering"],
        ["apis-de-ia", "APIs de IA"],
        ["chatbots", "Chatbots"],
        ["modelos-de-lenguaje", "Modelos de lenguaje"],
        ["modelos-locales", "Modelos locales"],
        ["rag", "RAG"],
        ["fine-tuning", "Fine-tuning"],
        ["agentes", "Agentes"],
        ["machine-learning", "Machine Learning"],
        ["computer-vision", "Computer Vision"]
    ],

    "herramientas": [
        ["visual-studio-code", "Visual Studio Code"],
        ["git", "Git"],
        ["github", "GitHub"],
        ["terminal", "Terminal"],
        ["python", "Python"],
        ["node-js", "Node.js"],
        ["docker", "Docker"],
        ["gestores-de-paquetes", "Gestores de paquetes"]
    ],

    "bases-de-datos": [
        ["fundamentos", "Fundamentos"],
        ["sql", "SQL"],
        ["mysql", "MySQL"],
        ["postgresql", "PostgreSQL"],
        ["mongodb", "MongoDB"],
        ["redis", "Redis"],
        ["modelado", "Modelado"],
        ["consultas", "Consultas"],
        ["seguridad", "Seguridad"]
    ],

    "proyectos": [
        ["principiantes", "Proyectos para principiantes"],
        ["intermedios", "Proyectos intermedios"],
        ["avanzados", "Proyectos avanzados"],
        ["ideas", "Ideas"],
        ["retos", "Retos"],
        ["proyectos-completos", "Proyectos completos"]
    ]

};

function mostrarInicio() {

    const app = document.getElementById("app");

    app.innerHTML = `

        <section class="hero">

            <h1>
                Aprende a <span>programar</span>
            </h1>

            <p>
                Explora cursos, aprende conceptos,
                practica con ejercicios y construye proyectos.
            </p>

        </section>


        <h2 class="section-title">
            Áreas de aprendizaje
        </h2>


        <section class="areas-grid">

            ${Object.entries(areas).map(([id, area]) => `

                <article
                    class="area-card"
                    onclick="mostrarArea('${id}')"
                >

                    <div class="area-icon">
                        ${area.icono}
                    </div>

                    <h3>
                        ${area.nombre}
                    </h3>

                    <p>
                        ${area.descripcion}
                    </p>

                </article>

            `).join("")}

        </section>

    `;
}

mostrarInicio();

function mostrarArea(id) {

    const area = areas[id];

    const lista = categorias[id] || [];

    const app = document.getElementById("app");

    app.innerHTML = `

        <div
            class="back-button"
            onclick="mostrarInicio()"
        >
            ← Volver
        </div>


        <section class="hero">

            <h1>
                ${area.icono}
                ${area.nombre}
            </h1>

            <p>
                ${area.descripcion}
            </p>

        </section>


        <section class="categories">

            ${lista.map(([carpeta, nombre]) => `

                <article
                    class="category"
                    onclick="abrirLeccion('${id}', '${carpeta}')"
                >

                    <h3>
                        ${nombre}
                    </h3>

                    <p>
                        Entrar a esta sección →
                    </p>

                </article>

            `).join("")}

        </section>

    `;
}

async function abrirLeccion(area, categoria) {

    const ruta =
        `contenido/${area}/${categoria}/README.md`;

    try {

        const respuesta = await fetch(ruta);

        if (!respuesta.ok) {
            throw new Error("No se encontró el contenido.");
        }

        const texto = await respuesta.text();

        mostrarLeccion(texto);

    } catch (error) {

        const app = document.getElementById("app");

        app.innerHTML = `

            <div class="lesson">

                <div
                    class="back-button"
                    onclick="mostrarArea('${area}')"
                >
                    ← Volver
                </div>

                <h1>
                    Contenido no disponible
                </h1>

                <p>
                    No se pudo cargar:
                </p>

                <pre>${ruta}</pre>

                <p>
                    Revisa que el archivo README.md
                    exista en esa carpeta.
                </p>

            </div>

        `;

    }

}

function mostrarLeccion(texto) {

    const app = document.getElementById("app");

    app.innerHTML = `

        <article class="lesson">

            <div
                class="back-button"
                onclick="history.back()"
            >
                ← Volver
            </div>

            <pre>${texto}</pre>

        </article>

    `;

}