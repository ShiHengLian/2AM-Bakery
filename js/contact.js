const formulario = document.getElementById('formulario');
const mensajeExito = document.getElementById('mensaje-exito');

formulario.addEventListener('submit'), (event) => {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const comentario = document.getElementById('comentario').value;

    // Basic validation
    let errors = [];

    if (nombre.trim() === '') {
        errors.push('El campo "Nombre" es obligatorio.');
    }

    if (!validarCorreo(correo)) {
        errors.push('El correo electrónico no es válido.');
    }

    if (comentario.trim() === '') {
        errors.push('El campo "Comentario" es obligatorio.');
    }

    if (errors.length > 0) {
        mostrarErrores(errors); //

   
    }

}