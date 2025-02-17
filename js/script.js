// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".section");

    // Agrega evento a cada enlace del menú
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita que recargue la página

            // Remueve la clase 'active' de todas las secciones
            sections.forEach(section => section.classList.remove("active"));

            // Obtiene el ID de la sección a mostrar
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            // Activa la sección seleccionada
            if (targetSection) {
                targetSection.classList.add("active");
            }
        });
    });
});
