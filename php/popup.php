<?php

require_once('init.php');
loadScripts();

    $data = array("status" => "not set!");
    if(Utils::isGET()) {
        $pm = new ProductManager();
        $rows = $pm->findProduct($_GET['sku']);

        $html = "";
            $image = $rows['image'];
            $name = $rows['name'];
            $sku = $rows['SKU'];
            $price = $rows['price'];
            $desc = $rows['description'];
            $html .= "<div class='popupitem'>
                        <img class='popupimg' src='$image'>
                        <div class='popuptextdiv'>
                          <h2 class='popuptitle'>$name</h2>
                          <hr class='popuphr'>
                          <p data-sku-price='$sku' class='popupprice'>$$price</p>
                          <p data-sku-desc='$sku' class='popupdescription'>$desc</p>
                        <a data-sku-add='$sku' href='#' id='startCart' class='popupbutton'>add to cart</a></div>
                        <span class='closebutton'>x</span>
                      </div>";

        echo $html;
        return;

    } else {
        $data = array("status" => "error", "msg" => "Only GET allowed.");

    }

    echo json_encode($data, JSON_FORCE_OBJECT);

?>
