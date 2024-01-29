<?php

$conexion = new mysqli("proyecto", "Usuario", "Contraseña", "usuario");

if ($conexion->connect_error){
    die("Error al conectar la base datos: ".$conexion->connect_error);
}

$usuario = $_POST["usuario"];
$contraseña = password_hash($_POST["contraseña"], PASSWORD_DEFAULT);

$sql = "INSERT INTO usuarios (usuario, contraseña) VALUES ($usuario, $contraseña)";

if ($conexion->query($sql) === TRUE) {
    echo "Usuario registrado exitosamente";
} else {
    echo "Error al registrar al usuario: " .$conexion->error;
}

$conexion->close();

