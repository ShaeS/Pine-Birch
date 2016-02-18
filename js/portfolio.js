// FOR PUTTING OBJECTS INTO HTML5 WEB STORAGE - ADD METHODS TO THE STORAGE OBJECT
// http://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}


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

              $(".popupitem").on('click', 'a[data-sku-add]', function () {
                  console.log("Start cart.");
                  sessionStorage.cart = 4;
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


                      // get the sku
                      var sku = this.getAttribute("data-sku-add");
                      var price = $("p[data-sku-price='" + sku + "']").text();
                      var desc = $("p[data-sku-desc='" + sku + "']").text();
                      console.log(desc, "quantity", qty, "price", price);

                      var shoppingCartList = $("#shoppingCart");


                      // ALTERED FOR WEB STORAGE
                      var aDate = new Date();
                      var item = "<div class='product'><div class='product-image'><img src='./images/hedgehog.jpg' /></div><div class='product-details'><div class='product-title'>"+desc+"</div></div><div class='product-price'>"+price+"</div><div class='product-quantity'><input type='number' value='1' min='1' /></div><div class='product-removal'><button data-remove-button='remove' class='remove-product'>Remove</button></div><div class='product-line-price'>"+price+"</div></div>";
                      shoppingCartList.append(item);


                      // SESSION STORAGE - SAVE SKU AND QTY AS AN OBJECT IN THE
                      // ARRAY INSIDE OF THE AUTOSAVE OBJECT
                      var cartData = sessionStorage.getObject('autosave');
                      if (cartData == null) {
                        return;
                      }
                      var item = {
                        'sku': sku,
                        date: aDate.getTime(),
                        'desc': desc,
                        'price': price
                      };
                      cartData['items'].push(item);
                      // clobber the old value
                      sessionStorage.setObject('autosave', cartData);


             

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