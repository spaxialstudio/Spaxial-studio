// Obtén todos los botones de navegación
const navButtons = document.querySelectorAll(".nav-btn");

// Función para ocultar todas las secciones
function hideSections() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.remove("active");
    });
}

// Asigna los eventos de clic a los botones
navButtons.forEach(button => {
    button.addEventListener("click", function() {
        const target = this.getAttribute("data-target"); // Obtén el valor de data-target
        hideSections(); // Oculta todas las secciones
        document.getElementById(target).classList.add("active"); // Muestra la sección correspondiente
    });
});
