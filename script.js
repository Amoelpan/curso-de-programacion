/* ============================================================
   script.js — no debería hacer falta tocar este archivo
   para agregar contenido nuevo. Todo el contenido vive en
   data.js. Esto solo dibuja lo que hay ahí.
   ============================================================ */

const tree = document.getElementById("tree");
const tabbar = document.getElementById("tabbar");
const editorPane = document.getElementById("editorPane");
const titlebarPath = document.getElementById("titlebarPath");
const explorer = document.getElementById("explorer");
const menuToggle = document.getElementById("menuToggle");

let openTabs = []; // { catId, lessonId }
let activeKey = null;
let openCategories = new Set();   // ids de categorías expandidas
let openSubfolders = new Set();   // "catId/subId" de subcarpetas expandidas

function key(catId, lessonId) { return `${catId}/${lessonId}`; }

function findLesson(catId, lessonId) {
  const cat = FORUM_DATA.categories.find(c => c.id === catId);
  if (!cat) return null;
  if (cat.lessons) {
    const direct = cat.lessons.find(l => l.id === lessonId);
    if (direct) return { cat, sub: null, lesson: direct };
  }
  if (cat.subfolders) {
    for (const sub of cat.subfolders) {
      const found = sub.lessons.find(l => l.id === lessonId);
      if (found) return { cat, sub, lesson: found };
    }
  }
  return null;
}

/* ---------------- Explorer tree ---------------- */
function renderFile(cat, lesson, extraClass) {
  const file = document.createElement("div");
  file.className = "file" + (extraClass ? " " + extraClass : "");
  file.tabIndex = 0;
  file.dataset.key = key(cat.id, lesson.id);
  const dotClass = lesson.status === "listo" ? "dot-green" : "dot-amber";
  file.innerHTML = `<span class="status-dot ${dotClass}"></span><span>${lesson.title}</span>`;
  file.addEventListener("click", () => openLesson(cat.id, lesson.id));
  file.addEventListener("keydown", e => {
    if (e.key === "Enter") openLesson(cat.id, lesson.id);
  });
  return file;
}

function renderTree() {
  tree.innerHTML = "";
  FORUM_DATA.categories.forEach(cat => {
    const catAbierta = openCategories.has(cat.id);

    const folder = document.createElement("div");
    folder.className = "folder";
    folder.tabIndex = 0;
    folder.innerHTML = `<span class="folder-arrow">${catAbierta ? "▾" : "▸"}</span><span class="folder-icon">${cat.icon}</span><span>${cat.title}</span>`;
    folder.addEventListener("click", () => toggleCategory(cat.id));
    folder.addEventListener("keydown", e => {
      if (e.key === "Enter") toggleCategory(cat.id);
    });
    tree.appendChild(folder);

    const desc = document.createElement("span");
    desc.className = "folder-desc";
    desc.textContent = cat.description;
    tree.appendChild(desc);

    if (!catAbierta) return; // carpeta cerrada: no dibujar su contenido

    (cat.lessons || []).forEach(lesson => {
      tree.appendChild(renderFile(cat, lesson));
    });

    (cat.subfolders || []).forEach(sub => {
      const subKey = cat.id + "/" + sub.id;
      const subAbierta = openSubfolders.has(subKey);

      const subEl = document.createElement("div");
      subEl.className = "subfolder";
      subEl.innerHTML = `<span class="folder-arrow">${subAbierta ? "▾" : "▸"}</span><span class="subfolder-icon">📂</span><span>${sub.title}</span>`;
      subEl.addEventListener("click", () => toggleSubfolder(subKey));
      tree.appendChild(subEl);

      if (!subAbierta) return; // subcarpeta cerrada: no dibujar sus archivos

      sub.lessons.forEach(lesson => {
        tree.appendChild(renderFile(cat, lesson, "subfile"));
      });
    });
  });
}

function toggleCategory(catId) {
  if (openCategories.has(catId)) openCategories.delete(catId);
  else openCategories.add(catId);
  renderTree();
}

function toggleSubfolder(subKey) {
  if (openSubfolders.has(subKey)) openSubfolders.delete(subKey);
  else openSubfolders.add(subKey);
  renderTree();
}

/* ---------------- Tabs ---------------- */
function renderTabs() {
  tabbar.innerHTML = "";
  openTabs.forEach(t => {
    const found = findLesson(t.catId, t.lessonId);
    if (!found) return;
    const tab = document.createElement("div");
    tab.className = "tab" + (activeKey === key(t.catId, t.lessonId) ? " active" : "");
    tab.textContent = found.lesson.title;
    tab.addEventListener("click", () => setActive(t.catId, t.lessonId));
    tabbar.appendChild(tab);
  });
}

/* ---------------- Editor pane ---------------- */
function renderLesson(catId, lessonId) {
  const found = findLesson(catId, lessonId);
  if (!found) return;
  const { cat, sub, lesson } = found;

  titlebarPath.textContent = `class/${cat.id}/${sub ? sub.id + "/" : ""}${lesson.title}`;

  const pending = lesson.status === "pendiente"
    ? `<div class="pending-banner">🔧 pendiente — este tema se irá ampliando</div>`
    : "";

  editorPane.innerHTML = `
    <article class="lesson">
      <div class="lesson-eyebrow">${cat.title}${sub ? " / " + sub.title : ""}</div>
      <h1 class="lesson-title">${lesson.title.replace(".md","")}<span class="cursor"></span></h1>
      ${pending}
      <div class="lesson-body">${lesson.body.join("")}</div>
    </article>
  `;

  document.querySelectorAll(".file").forEach(f => {
    f.classList.toggle("active", f.dataset.key === key(catId, lessonId));
  });
}

function renderWelcome() {
  titlebarPath.textContent = "class/ — bienvenida.md";
  editorPane.innerHTML = `
    <div class="welcome">
      <div class="lesson-eyebrow">// class/bienvenida.md</div>
      <h1>Bienvenido a tu clase de programación.</h1>
      <p>Este es el punto de partida. A la izquierda están las carpetas del curso, cada una con sus lecciones — igual que en cualquier proyecto que abras en VS Code. Elige una carpeta para empezar. Los temas con punto verde ya tienen contenido; los de punto ámbar están en construcción.</p>
      <div class="welcome-list">
        <div>→ abre <strong>00 · Fundamentos</strong> si es tu primera vez programando</div>
        <div>→ o salta directo a la ruta que te interesa: web, apps, móvil, escritorio, videojuegos, IA, ciberseguridad y más</div>
      </div>
      <div class="donation-inline">
        Este curso es y será siempre gratis. Si te sirvió y quieres apoyar a que siga creciendo, puedes <a href="https://www.paypal.com/donate/?hosted_button_id=TU_ID_AQUI" target="_blank" rel="noopener">dejar una donación aquí</a> — nunca es obligatorio, solo una forma de decir gracias.
      </div>
    </div>
  `;
  document.querySelectorAll(".file").forEach(f => f.classList.remove("active"));
}

/* ---------------- Navigation ---------------- */
function openLesson(catId, lessonId) {
  const k = key(catId, lessonId);
  if (!openTabs.find(t => key(t.catId, t.lessonId) === k)) {
    openTabs.push({ catId, lessonId });
  }

  // Expande la carpeta (y subcarpeta, si aplica) donde vive esta lección
  const found = findLesson(catId, lessonId);
  openCategories.add(catId);
  if (found && found.sub) openSubfolders.add(catId + "/" + found.sub.id);
  renderTree();

  setActive(catId, lessonId);
  if (window.innerWidth <= 760) explorer.classList.remove("open");
}

function setActive(catId, lessonId) {
  activeKey = key(catId, lessonId);
  location.hash = activeKey;
  renderTabs();
  renderLesson(catId, lessonId);
}

function handleHash() {
  const hash = location.hash.replace("#", "");
  if (!hash) { renderWelcome(); return; }
  const [catId, lessonId] = hash.split("/");
  const found = findLesson(catId, lessonId);
  if (found) openLesson(catId, lessonId);
  else renderWelcome();
}

/* ---------------- Mobile menu ---------------- */
menuToggle.addEventListener("click", () => explorer.classList.toggle("open"));

/* ---------------- Init ---------------- */
renderTree();
window.addEventListener("hashchange", handleHash);
handleHash();
