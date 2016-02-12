function loadProducts() {
  $.ajax({
    url: "./php/products.php",
    type: "GET",
    dataType: 'html',
    success: function (returnedData) {
      $("#getproducts").html(returnedData);

      $("#getproducts li").click(function () {
        $.ajax({
          url: "./php/popup.php",
          type: "GET",
          dataType: 'html',
          data: {
            sku: $(this).attr("id")
          },
          success: function (returned) {

            var popupscreen = $("<div class='popupscreen'></div>");
            $(document.body).append(popupscreen);
            $(".popupscreen").html(returned);

            $(".closebutton").click(function () {
              $(popupscreen).remove();
            });
            
            $("#startCart").click(function () {
              console.log("Start cart.");
              $.ajax({
                url: "./php/shoppingcart.php",
                type: "POST",
                dataType: 'json',
                data: {
                  //action: "startcart"
                  action: "startcart",
                },
                success: function (returnedData) {
                  console.log("cart start response: ", returnedData);

                },
                error: function (jqXHR, textStatus, errorThrown) {
                  console.log(jqXHR.statusText, textStatus);
                }
              });
            });
          }
        });
      });


    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR.statusText, textStatus);
    }
  });
}

loadProducts();