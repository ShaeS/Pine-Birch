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

                }
            });

        });

    }

  });
}

loadProducts();