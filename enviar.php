<?php
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$mail = $_POST['mail'];
$asunto = $_POST['asunto'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Nombre: " . $nombre . " \r\n";
$mensaje .= "Apellidos: " . $apellidos . "\r\n";
$mensaje .= "Asunto: " . $asunto . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'angyvazquezdel97@gmail.com';
$asunto = 'VAZKELECTOR - CONTACTO';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'Mensaje enviado correctamente';
?>