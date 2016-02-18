<?php

require_once('init.php');
loadScripts();

    $data = array("status" => "not set!");

    if(Utils::isGET()) {
        $pm = new ProductManager();
        $rows = $pm->listProducts();

        $html = "<tr id='tableheaders'>
                  <th></th>
                  <th>name</th>
                  <th>price</th>
                  <th>date added</th>
                  <th>stock</th>
                </tr>";
        foreach($rows as $row) {
            $image = $row['image'];
            $name = $row['name'];
            $sku = $row['SKU'];
            $price = $row['price'];
            $desc = $row['description'];
            $date = $row['dateadded'];
            $stock = $row['stock'];
            $html .= "<tr id='$sku'>
                        <td id='editcell'><img id='$sku' class='editbutton' src='./assets/edit.png' /></td>
                        <td>$name</td>
                        <td>$$price</td>
                        <td>$date</td>
                        <td>$stock</td>
                      </tr>";
        }
        
        echo $html;
        return;

    } else {
        $data = array("status" => "error", "msg" => "Only GET allowed.");

    }

    echo json_encode($data, JSON_FORCE_OBJECT);

?>
