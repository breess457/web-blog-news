<?php

$host = "localhost";
$user = "root";
$pass = "";
$database = "my_pyple";
  $db = new mysqli($host,$user,$pass,$database);
  mysqli_set_charset($db,'utf8');
    if(!$db){
      die("Connection Failed" . mysqli_connect_error());
    }

?>