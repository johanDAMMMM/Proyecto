document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contenedor-registro");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const cedula = document.getElementById("cedula").value;
        const telefono = document.getElementById("telefono").value;
        const usuario = document.getElementById("usuario").value;
        const contraseña = document.getElementById("password").value;
        const confirmcontraseña = document.getElementById("confirm-password").value;
        const rol = document.getElementById("rol").value;

        if (contraseña === confirmcontraseña) {
            message.textContent = "Registro exitoso!";
            message.style.color = "green";

        } else {
            message.textContent = "Las contraseñas no coinciden.";
            message.style.color = "red";
        }
    });
});
