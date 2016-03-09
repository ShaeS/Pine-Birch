$(document).ready(function () {

});

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
                  sku: $(this).attr("id"),
                  name: $(this).siblings("#pname").val(),
                  price: $(this).siblings("#pprice").val(),
                  stock: $(this).siblings("#pstock").val(),
                  description: $(this).siblings("#pdescription").val()
                },
                success: function (returned) {
                  console.log(returned);
                }
              });
            });

            $(".updatedelete").click(function (e) {


              $.ajax({
                url: "./php/deleteproducts.php",
                type: "GET",
                dataType: 'json',
                data: {
                  sku: $(this).attr("id")
                },
                success: function (returned) {
                  console.log(returned);
                }
              });
            });

          }
        });

      });

      $("#thex").click(function () {
        $.ajax({
          url: "./php/adminpopupadd.php",
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

            $(".submitadd").click(function (e) {


              $.ajax({
                url: "./php/addproducts.php",
                type: "GET",
                dataType: 'json',
                data: {
                  sku: $(this).siblings("#psku").val(),
                  name: $(this).siblings("#pname").val(),
                  price: $(this).siblings("#pprice").val(),
                  stock: $(this).siblings("#pstock").val(),
                  path: $(this).siblings("#ppath").val(),
                  description: $(this).siblings("#pdescription").val()

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