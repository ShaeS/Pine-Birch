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
                        <h2 class='popuptitle'>Edit This Product</h2>
                        <form class='popupform'>
                          <label for='pname'>name:</label>
                          <input value='$name' id='pname' type='text'>
                          <label for='pprice'>price:</label>
                          <input value='$price' id='pprice' type='text'>
                          <label for='pstock'>stock:</label>
                          <input value='$stock' id='pstock' type='text'>
                          <label for='pdescription'>description:</label>
                          <textarea id='pdescription'>$desc</textarea>
                          <label id='uploadlabel' for='uplaodimg'>image:</label>
                          <input id='uploadimg' type='file' placeholder='choose image'>
                          <input id='$sku' class='submitedit' type='submit'>
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
