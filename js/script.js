// Obtén los botones de navegación
const blogBtn = document.getElementById("blog-btn");
const learnBtn = document.getElementById("learn-btn");
const portfolioBtn = document.getElementById("portfolio-btn");
const shopBtn = document.getElementById("shop-btn");
const whoIsBtn = document.getElementById("whois-btn");
const gustosBtn = document.getElementById("gustos-btn");

// Obtén las secciones
const blogSection = document.getElementById("blog");
const learnSection = document.getElementById("learn");
const portfolioSection = document.getElementById("portfolio");
const shopSection = document.getElementById("shop");
const whoIsSection = document.getElementById("whois");
const gustosSection = document.getElementById("gustos");

// Función para ocultar todas las secciones
function hideSections() {
    blogSection.classList.remove("active");
    learnSection.classList.remove("active");
    portfolioSection.classList.remove("active");
    shopSection.classList.remove("active");
    whoIsSection.classList.remove("active");
    gustosSection.classList.remove("active");
}

// Asigna los eventos de clic a los botones
blogBtn.addEventListener("click", function() {
    hideSections();
    blogSection.classList.add("active");
});

learnBtn.addEventListener("click", function() {
    hideSections();
    learnSection.classList.add("active");
});

portfolioBtn.addEventListener("click", function() {
    hideSections();
    portfolioSection.classList.add("active");
});

shopBtn.addEventListener("click", function() {
    hideSections();
    shopSection.classList.add("active");
});

whoIsBtn.addEventListener("click", function() {
    hideSections();
    whoIsSection.classList.add("active");
});

gustosBtn.addEventListener("click", function() {
    hideSections();
    gustosSection.classList.add("active");
});
