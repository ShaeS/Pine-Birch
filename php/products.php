<?php

require_once('init.php');
loadScripts();

    $data = array("status" => "not set!");

    if(Utils::isGET()) {
        $pm = new ProductManager();
        $rows = $pm->listProducts();

        $html = "";
        foreach($rows as $row) {
            $image = $row['image'];
            $name = $row['name'];
            $sku = $row['SKU'];
            $price = $row['price'];
            $desc = $row['description'];
            $html .= "<li id='$sku'>
                        <img src='$image' />
                        <div>
                          <p>$name</p>
                          <hr/>
                          <p>$$price</p>
                        </div>
                      </li>";
        }
        echo $html;
        return;

    } else {
        $data = array("status" => "error", "msg" => "Only GET allowed.");

    }

    echo json_encode($data, JSON_FORCE_OBJECT);

?>
