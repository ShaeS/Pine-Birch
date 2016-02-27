<?php

//require_once('./DBConnector.php');

//$um = new ProductManager();

// Facade
class ProductManager {

    private $db;

    public function __construct() {
        $this->db = DBConnector::getInstance();
    }

    public function listProducts() {
        $sql = "SELECT SKU, name, price, stock, description, image, dateadded, category FROM products";
        $rows = $this->db->query($sql);
        return $rows;
    }

    public function findProduct($SKU) {
        $params = array(":sku" => $SKU);
        $sql = "SELECT SKU, name, price, stock, description, image, dateadded, category FROM products WHERE SKU = :sku";

        $rows = $this->db->query($sql, $params);
        if(count($rows) > 0) {
            return $rows[0];
        }

        return null;
    }
  
    public function updateProducts($SKU, $NAME, $PRICE, $STOCK, $DESC) {
        $sql = "UPDATE products SET name = '$NAME', price = $PRICE, stock = $STOCK, description = '$DESC' WHERE SKU = '$SKU'";
        $rows = $this->db->query($sql);
        return $rows;
    }


}

?>
