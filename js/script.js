d<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spaxial Studio</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            text-align: center;
        }
        .section {
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        .section.active {
            display: block;
            opacity: 1;
        }
        header {
            background: #333;
            color: white;
            padding: 10px;
        }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
    <script>
        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        }
        document.addEventListener("DOMContentLoaded", function() {
            showSection('home');
        });
    </script>
</head>
<body>
    <header>
        <h1>SPAXIAL STUDIO</h1>
        <nav>
            <ul>
                <li><a href="#home" onclick="showSection('home')">HOME</a></li>
                <li><a href="#about" onclick="showSection('about')">SOBRE NOSOTROS</a></li>
                <li><a href="#portfolio" onclick="showSection('portfolio')">PORTAFOLIO</a></li>
                <li><a href="#services" onclick="showSection('services')">SERVICIOS</a></li>
                <li><a href="#contact" onclick="showSection('contact')">CONTACTO</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="home" class="section active">
        <h2>DISEÑAMOS ESPACIOS CON PROPÓSITO</h2>
        <p>Arquitectura enfocada en funcionalidad, estética y sostenibilidad.</p>
    </section>
    
    <section id="about" class="section">
        <h2>SOBRE NOSOTROS</h2>
        <p>Somos un estudio de arquitectura dedicado a crear espacios innovadores y funcionales.</p>
    </section>
    
    <section id="portfolio" class="section">
        <h2>PORTAFOLIO</h2>
        <div class="proyecto">
            <img src="img/proyecto1.jpg" alt="Proyecto 1">
            <p>Descripción breve del proyecto.</p>
        </div>
    </section>
    
    <section id="services" class="section">
        <h2>SERVICIOS</h2>
        <p>Ofrecemos diseño arquitectónico, visualización 3D y consultoría.</p>
    </section>
    
    <section id="contact" class="section">
        <h2>CONTACTO</h2>
        <form id="contact-form">
            <input type="text" placeholder="Nombre" required>
            <input type="email" placeholder="Correo" required>
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit">ENVIAR</button>
        </form>
        <p id="form-message" style="display: none;">¡Gracias por tu mensaje!</p>
    </section>
    
    <footer>
        <p>&copy; 2025 SPAXIAL STUDIO. TODOS LOS DERECHOS RESERVADOS.</p>
    </footer>
</body>
</html>
