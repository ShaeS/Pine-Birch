/*<![CDATA[*/
        $(document).ready(function() {

            //
            function loadProducts() {
                $.ajax({
                    url: "./php/products.php",
                    type: "GET",
                    dataType: 'html',
                    success: function(returnedData) {
                        //console.log("cart checkout response: ", returnedData);
                        $("#productslist").html(returnedData);

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus);
                    }
                });
            }

            loadProducts();


            $('#productslist').on('click', 'input[data-sku-add]', function() {
                //console.log(this.getAttribute("data-sku-add"));

                // get the sku
                var sku = this.getAttribute("data-sku-add");
                var qty = $("input[data-sku-qty='" + sku + "']").val();
                var price = $("td[data-sku-price='" + sku + "']").text();
                var desc = $("td[data-sku-desc='" + sku + "']").text();
                var subtotal = parseFloat(Math.round((qty * price) * 100) / 100).toFixed(2);
                console.log(desc, "quantity", qty, "price", price);

                var shoppingCartList = $("#shoppingCart");


                var item = "<div class='product'><div class='product-image'><img src='./images/hedgehog.jpg' /></div><div class='product-details'><div class='product-title'>"+desc+"</div></div><div class='product-price'>"+price+"</div><div class='product-quantity'><input type='number' value='"+qty+"' min='1' /></div><div class='product-removal'><button data-remove-button='remove' class='remove-product'>Remove</button></div><div class='product-line-price'>"+subtotal+"</div></div>";
                shoppingCartList.append(item);

            });

            // remove items from the car
            $("#shoppingCart").on("click", "button", function() {
                // https://api.jquery.com/closest/
                this.closest("div.product").remove();

            });


            // start the cart
            $("#startCart").click(function() {
                console.log("Start cart.");
                $.ajax({
                    url: "./php/shoppingcart.php",
                    type: "POST",
                    dataType: 'json',
                    data: {action: "startcart"},
                    success: function(returnedData) {
                        console.log("cart start response: ", returnedData);

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus);
                    }
                });
            });

            // cancel the cart
            $("#cancelCart").click(function() {

                console.log("End cart.");
                $.ajax({
                    url: "./php/shoppingcart.php",
                    type: "POST",
                    dataType: 'json',
                    data: {action: "cancelcart"},
                    success: function(returnedData) {
                        console.log("cart cancel response: ", returnedData);

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus);
                    }
                });
                var shoppingCartList = $("#shoppingCart").html("");
            });

            // cancel the cart
            $("#checkoutcart").click(function() {

                // retrieve all of the items from the cart:
                var items = $("#shoppingCart li");
                var itemArray = [];
                $.each(items, function(key, value) {

                    var item = {sku: value.getAttribute("data-item-sku"),
                        qty: value.getAttribute("data-item-qty")};
                    itemArray.push(item);
                });
                var itemsAsJSON = JSON.stringify(itemArray);
                console.log("itemsAsJSON", itemsAsJSON);


                console.log("Check out cart with the following items", itemArray);
                $.ajax({
                    url: "./php/shoppingcart.php",
                    type: "POST",
                    dataType: 'json',
                    data: {action: "checkoutcart", items: itemsAsJSON},
                    success: function(returnedData) {
                        console.log("cart check out response: ", returnedData);

                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(jqXHR.statusText, textStatus);
                    }
                });
                var shoppingCartList = $("#shoppingCart").html("");
            });




        });
        /*]]>*/