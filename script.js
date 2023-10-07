const proyectosLink = document.getElementById('proyectosLink');
const proyectosTexto = document.getElementById('proyectosTexto');

proyectosLink.addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
    if (proyectosTexto.style.display === 'none' || proyectosTexto.style.display === '') {
        proyectosTexto.style.display = 'block';
    } else {
        proyectosTexto.style.display = 'none';
    }
});


const acercaDeLink = document.getElementById('acercaDeLink');
const acercaDeTexto = document.getElementById('acercaDeTexto');

acercaDeLink.addEventListener('click', function(event) {
    // event.preventDefault();
    if (acercaDeTexto.style.display === 'none' || acercaDeTexto.style.display === '') {
        acercaDeTexto.style.display = 'block';
    } else {
        acercaDeTexto.style.display = 'none';
    }
});


const contactoLink = document.getElementById('contactoTexto');

contactoLink.addEventListener('click', function(event) {
    event.preventDefault();
    const contactoTexto = document.querySelector('.contacto');
    if (contactoTexto.style.display === 'none' || contactoTexto.style.display === '') {
        contactoTexto.style.display = 'block';
    } else {
        contactoTexto.style.display = 'none';
    }
});


const enlaceInicio = document.getElementById('enlaceInicio');

enlaceInicio.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.reload();
});
