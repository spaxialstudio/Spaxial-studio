document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        if (section.id !== "home") {
            section.style.display = "none";
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            sections.forEach(section => {
                section.style.display = "none";
            });

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        formMessage.style.display = "block";
        formMessage.textContent = "¡Gracias por tu mensaje!";
        contactForm.reset();
    });
});
