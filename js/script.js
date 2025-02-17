document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu-link");
    const sections = document.querySelectorAll("main section");

    // Ocultar todas las secciones excepto "HOME"
    sections.forEach(section => {
        if (section.id !== "home") {
            section.classList.add("hidden");
        }
    });

    // Agregar evento a cada enlace del menú
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.add("hidden");
            });

            // Mostrar solo la sección seleccionada
            document.getElementById(targetId).classList.remove("hidden");
        });
    });
});
