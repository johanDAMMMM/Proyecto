function validarContraseña(){
    var contraseña = document.getElementById("contraseña").value;
    var confirmarContraseña = document.getElementById("confirmarContraseña").value;

if (!/[A/Z]/.test(contraseña) || /\d/.test(confirmarContraseñacontraseña)){
    alert("La contraseña debe tener al menos una letra mayuscula y un numero");
    return false;
}

if (contraseña !== confirmarContraseña){
    alert("Las contraseñas no coinciden");
    return false;
}else{
    window.location.href="Inventario.html" 
    alert("¡Bienvenido al Inventario!");
return true;
}
}

fetch("Registro.php")
.then(response => response.json())
.then(data => {
    mostrarUsuarios(data);
})
.catch(error => console.error ("Error al obtener usuarios: ",error));

function mostrarUsuarios(usuarios){
    var listaUsuarios = document.getElementById(listaUsuarios);
}

listaUsuarios.innerHTML = "";

usuarios.forEach(usuario => {
    var li= document.createElement("li");
    li.textContent = "ID: ${usuario.id}, Nombre: ${usuario.nombre}, Edad: ${usuario.edad}";
    listaUsuarios.appendChild(li)
})

function dirigirOtraPagina(){
    var contraseña = document.getElementById("contraseña").value;
    var confirmarContraseña = document.getElementById("confirmarContraseña").value;

    if (contraseña !== confirmarContraseña){
        alert("Las contraseñas no coinciden");
    }else{
        alert("Las contraseñas coinciden ¡Bienvendio al Inventario¡");
        window.location.href="Inventario.html";
    }
}
