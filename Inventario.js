document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contenedor");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const codigo = document.getElementById("codigo").value;
        const referencia = document.getElementById("referencia").value;

        message.textContent = "Producto registrado exitosamente.";
        message.style.color = "green";
    });
});
