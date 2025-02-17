// Obtén todos los botones de navegación
const navButtons = document.querySelectorAll(".nav-btn");

// Función para ocultar todas las secciones
function hideSections() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.classList.remove("active"); // Elimina la clase active para ocultarlas
    });
}

// Asigna los eventos de clic a los botones
navButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault(); // Evita que el enlace realice una acción predeterminada
        const target = this.getAttribute("data-target"); // Obtén el valor de data-target
        hideSections(); // Oculta todas las secciones
        document.getElementById(target).classList.add("active"); // Muestra la sección correspondiente
    });
});
