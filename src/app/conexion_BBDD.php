<?php
/**************************************************** */
/*PARA CONECTAR CON LA BBDD DE CAMARERO*/
$direccion = 'mysql:dbname=menu_productos;host=127.0.0.1';
$usuario = 'root';
$clave = '';
//include "ingrediente_terminado.php"; //para llamar a las funciones que haya en este archivo
try {
    /**************************************************** */
    /*COMPROBAMOS QUE SE HA CONECTADO BIEN*/
    $bd = new PDO($direccion, $usuario, $clave);
    //echo nl2br("Conexion realizada con exito");

    $resultado = $bd->query("SELECT * FROM pedidos_bebidas;");

    if ($resultado->rowCount() == 0) {
        echo "<br>no hay pedidos";
    }
} catch (\Throwable $th) {
    //echo "error con la base de datos: " . $e->getMessage();
}
?>