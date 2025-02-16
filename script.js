document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        message.style.display = "block";
        form.reset();
    });
});
