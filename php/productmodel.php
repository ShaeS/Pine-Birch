<?php

include("connection.php");

try {
$results = $db->query('SELECT * FROM products');
} catch(Exception $e) {
  echo $e->getMessage();
  die();
}


?>