/* =========================
   MENÚ MÓVIL
========================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


mobileMenuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* =========================
   CERRAR MENÚ AL NAVEGAR
========================= */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================
   CAMBIO DE TEMA
========================= */

const themeButton =
    document.getElementById("themeButton");


let lightMode = false;


themeButton.addEventListener("click", () => {

    lightMode = !lightMode;

    if (lightMode) {

        document.documentElement.style.setProperty(
            "--background",
            "#f4f6fa"
        );

        document.documentElement.style.setProperty(
            "--background-secondary",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--card-hover",
            "#f0f2f7"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#111827"
        );

        document.documentElement.style.setProperty(
            "--text-secondary",
            "#596579"
        );

        document.documentElement.style.setProperty(
            "--text-muted",
            "#7b8798"
        );

        document.documentElement.style.setProperty(
            "--border",
            "rgba(0, 0, 0, 0.08)"
        );

        themeButton.textContent = "☀️";

    } else {

        document.documentElement.style.setProperty(
            "--background",
            "#080b12"
        );

        document.documentElement.style.setProperty(
            "--background-secondary",
            "#0d111a"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#111722"
        );

        document.documentElement.style.setProperty(
            "--card-hover",
            "#151d2b"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f4f7fb"
        );

        document.documentElement.style.setProperty(
            "--text-secondary",
            "#9ca8ba"
        );

        document.documentElement.style.setProperty(
            "--text-muted",
            "#687487"
        );

        document.documentElement.style.setProperty(
            "--border",
            "rgba(255, 255, 255, 0.08)"
        );

        themeButton.textContent = "🌙";

    }

});