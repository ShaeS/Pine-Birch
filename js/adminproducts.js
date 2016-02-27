function loadProducts() {
  $.ajax({
    url: "./php/adminproducts.php",
    type: "GET",
    dataType: 'html',
    success: function (returnedData) {
      $("#getAdminProducts").html(returnedData);

      $(".editbutton").click(function () {
        $.ajax({
          url: "./php/adminpopup.php",
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

            $(".submitedit").click(function (e) {
              
              
              $.ajax({
                url: "./php/updateproducts.php",
                type: "GET",
                dataType: 'json',
                data: {
                  sku:$(this).attr("id"),
                  name:$(this).siblings("#pname").val(),
                  price:$(this).siblings("#pprice").val(),
                  stock:$(this).siblings("#pstock").val(),
                  description:$(this).siblings("#pdescription").val()
                },
                success: function (returned) {
                  console.log(returned);
                  
                }
              });
            });

          }
        });

      });

    }

  });
}

loadProducts();