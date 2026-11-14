document.addEventListener('DOMContentLoaded', function () {

  // ===== Elementos de la página =====
    const opciones = document.querySelectorAll('main aside a');
    const menu     = document.querySelectorAll('nav a');
    const titulo   = document.querySelector('section h1');
    const cajas    = document.querySelectorAll('.caja');
    const fecha    = document.getElementById('fecha');

    const tituloOriginal = titulo.textContent;

  // ===== Opciones de la columna izquierda =====
    opciones.forEach(function (opcion) {
    opcion.addEventListener('click', function (evento) {
    evento.preventDefault();

      // Quitar la marca de todas y ponerla en la elegida
    opciones.forEach(function (o) { o.classList.remove('activa'); });
    opcion.classList.add('activa');

      // Cambiar el título del centro
    titulo.textContent = opcion.textContent.trim();
    });
});

  // ===== Menú superior =====
    menu.forEach(function (enlace) {
    enlace.addEventListener('click', function (evento) {
    evento.preventDefault();

      // Volver al título original y limpiar las opciones
    titulo.textContent = tituloOriginal;
    opciones.forEach(function (o) { o.classList.remove('activa'); });
    });
});

  // ===== Cajas de imágenes =====
    cajas.forEach(function (caja) {
    caja.addEventListener('click', function () {
    caja.classList.toggle('seleccionada');
    });
});

  // ===== Fecha en el pie de página =====
    if (fecha) {
    const hoy = new Date();
    fecha.textContent = hoy.toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
    });
    }

});