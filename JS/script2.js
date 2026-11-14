const formulario = document.getElementById('formCliente');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nombre  = document.getElementById('nombre').value.trim();
    const email   = document.getElementById('email').value.trim();
    const celular = document.getElementById('celular').value.trim();

    if (nombre === '' || email === '' || celular === '') {
    alert('Por favor complete todos los campos');
    return;
    }

    alert('Datos enviados correctamente\nNombre: ' + nombre);
    formulario.reset();
});