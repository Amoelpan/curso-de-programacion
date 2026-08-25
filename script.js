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

function key(catId, lessonId) { return `${catId}/${lessonId}`; }

function findLesson(catId, lessonId) {
  const cat = FORUM_DATA.categories.find(c => c.id === catId);
  if (!cat) return null;
  const lesson = cat.lessons.find(l => l.id === lessonId);
  return lesson ? { cat, lesson } : null;
}

/* ---------------- Explorer tree ---------------- */
function renderTree() {
  tree.innerHTML = "";
  FORUM_DATA.categories.forEach(cat => {
    const folder = document.createElement("div");
    folder.className = "folder";
    folder.tabIndex = 0;
    folder.innerHTML = `<span class="folder-icon">${cat.icon}</span><span>${cat.title}</span>`;
    tree.appendChild(folder);

    const desc = document.createElement("span");
    desc.className = "folder-desc";
    desc.textContent = cat.description;
    tree.appendChild(desc);

    cat.lessons.forEach(lesson => {
      const file = document.createElement("div");
      file.className = "file";
      file.tabIndex = 0;
      file.dataset.key = key(cat.id, lesson.id);
      const dotClass = lesson.status === "listo" ? "dot-green" : "dot-amber";
      file.innerHTML = `<span class="status-dot ${dotClass}"></span><span>${lesson.title}</span>`;
      file.addEventListener("click", () => openLesson(cat.id, lesson.id));
      file.addEventListener("keydown", e => {
        if (e.key === "Enter") openLesson(cat.id, lesson.id);
      });
      tree.appendChild(file);
    });
  });
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
  const { cat, lesson } = found;

  titlebarPath.textContent = `class/${cat.id}/${lesson.title}`;

  const pending = lesson.status === "pendiente"
    ? `<div class="pending-banner">🔧 pendiente — este tema se irá ampliando</div>`
    : "";

  editorPane.innerHTML = `
    <article class="lesson">
      <div class="lesson-eyebrow">${cat.title}</div>
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
        <div>→ o salta directo a la ruta que te interesa: web, apps, móvil, escritorio, videojuegos o IA</div>
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
