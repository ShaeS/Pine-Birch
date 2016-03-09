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
            $stock = $rows['stock'];
            $price = $rows['price'];
            $desc = $rows['description'];
            $html .= "<div class='popupitem2'>
                        <h2 class='popuptitle'>Add a Product</h2>
                        <form class='popupform'>
                          <label for='psku'>SKU:</label>
                          <input id='psku' type='text'>
                          <label for='pname'>name:</label>
                          <input id='pname' type='text'>
                          <label for='pprice'>price:</label>
                          <input id='pprice' type='text'>
                          <label for='pstock'>stock:</label>
                          <input id='pstock' type='text'>
                          <label for='ppath'>Image Url:</label>
                          <input id='ppath' type='text'>
                          <label for='pdescription'>description:</label>
                          <textarea id='pdescription'></textarea>
                          <input id='$sku' class='submitadd' type='submit'>
                        </form>
                        <span class='closebutton'>x</span>
                      </div>";

        echo $html;
        return;

    } else {
        $data = array("status" => "error", "msg" => "Only GET allowed.");

    }

    echo json_encode($data, JSON_FORCE_OBJECT);

?>
