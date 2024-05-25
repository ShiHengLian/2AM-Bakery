document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        var nombre = document.getElementById("nombre").value.trim();
        var correo = document.getElementById("correo").value.trim();
        var comentario = document.getElementById("comentario").value.trim();

        if (nombre === "" || correo === "" || comentario === "") {
            event.preventDefault(); // Evita que se envíe el formulario antes de la validación
            alert("Por favor, completa todos los campos obligatorios."); 
        } else {
            alert("El mensaje se ha enviado, gracias por tu comentario.");
        }
    
    });
});



