function filterImages(color) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.gallery-section');
    sections.forEach(section => section.style.display = 'none');

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(color);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Mostrar la primera sección por defecto
document.addEventListener('DOMContentLoaded', function () {
    filterImages('rojo'); // Puedes cambiar esto para mostrar otra sección por defecto
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const carets = document.querySelectorAll('.caret');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

carets.forEach(caret => {
    caret.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar que el evento burbujee
        caret.classList.toggle('open');
        const dropdownContent = caret.parentElement.nextElementSibling;
        if (dropdownContent) {
            dropdownContent.classList.toggle('nav-active');
        }
    });
});


