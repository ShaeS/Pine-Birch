/*<![CDATA[*/
$(document).ready(function () {



  // if nothing added leave function
  if (sessionStorage.autosave == null) {
    return;
  }
  var cartData = $.parseJSON(sessionStorage.autosave);
  var cartDataItems = cartData['items'];
  var shoppingCartList = $("#shoppingCart");
  var items = "";
  var subtotal = 0;
  for (var i = 0; i < cartDataItems.length; i++) {
    var item = cartDataItems[i];
    // sku, qty, date
    var sku = item['sku'];
    var qty = item['qty'];
    var date = item['date'];
    var image = item['image']
    var title = item['title'];
    var price = item['price'];
    var stock = item['stock'];
    var finprice = price.substring(1);
    subtotal += parseInt(finprice);

    items += "<article class='product' data-item-sku='"+sku+"' data-item-qty='"+qty+"' data-item-date='"+date+"'><div class='product-image'><img src='"+image+"' /></div><div class='product-details'><div class='product-title'>"+title+"</div></div><div class='product-price'>"+price+"</div><div class='product-quantity'><input type='number' value='1' min='1' max='"+stock+"' /></div><div class='product-removal'><button data-remove-button='remove' class='remove-product'>Remove</button></div><div class='product-line-price'>"+price+"</div></article>";
  }
  var finsub = subtotal.toFixed(2);
  var tax = subtotal * 0.05;
  var fintax = tax.toFixed(2);
  var finaltotal = subtotal + tax + 15;
  var fintot = finaltotal.toFixed(2);
  items += "<div class='totals'><div class='totals-item'><label>Subtotal</label><div class='totals-value' id='cart-subtotal'>$"+finsub+"</div></div><div class='totals-item'><label>Tax (5%)</label><div class='totals-value' id='cart-tax'>$"+fintax+"</div></div><div class='totals-item'><label>Shipping</label><div class='totals-value' id='cart-shipping'>$15.00</div></div><div class='totals-item totals-item-total'><label>Grand Total</label><div class='totals-value' id='cart-total'>$"+fintot+"</div></div>";
  $("#shoppingCart").html(items);
  console.log('cart items array, added', cartDataItems);




  // remove items from the cart
  $("#shoppingCart").on("click", "button", function () {
    // https://api.jquery.com/closest/



    // WEB STORAGE REMOVE
    var thisInputSKU = this.parentNode.getAttribute('data-item-sku');
    var thisInputQty = this.parentNode.getAttribute('data-item-qty');
    var thisInputDate = this.parentNode.getAttribute('data-item-date');

    var cartData = $.parseJSON(sessionStorage.autosave);
    if (cartData == null) {
      return;
    }
    var cartDataItems = cartData['items'];
    for (var i = 0; i < cartDataItems.length; i++) {
      var item = cartDataItems[i];
      // get the item based on the sku, qty, and date
      if (item['sku'] == thisInputSKU && item['date'] == thisInputDate) {
        // remove from web storage
        cartDataItems.splice(i, 1);

      }
    }
    cartData['items'] = cartDataItems;
    console.log('cart data stuff', cartData);
    // clobber the old value
    sessionStorage.autosave

    this.closest("article").remove();

  });


  // start the cart
  $("#startCart").click(function () {
    console.log("Start cart.");
    $.ajax({
      url: "./shoppingcart.php",
      type: "POST",
      dataType: 'json',
      data: {
        action: "startcart"
      },
      success: function (returnedData) {
        console.log("cart start response: ", returnedData);

        // WEB STORAGE - SESSION STORAGE
        //var sessionID = returnedData['s_id'];
        sessionStorage.setObject('autosave', {
          items: []
        });


      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.statusText, textStatus);
      }
    });
  });


  // cancel the cart
  $("#cancelCart").click(function () {

    console.log("End cart.");
    $.ajax({
      url: "./shoppingcart.php",
      type: "POST",
      dataType: 'json',
      data: {
        action: "cancelcart"
      },
      success: function (returnedData) {
        console.log("cart cancel response: ", returnedData);


        // SESSION STORAGE - CLEAR THE SESSION
        sessionStorage.clear();

      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.statusText, textStatus);
      }
    });
    var shoppingCartList = $("#shoppingCart").html("");
  });

  // cancel the cart
  $("#checkoutcart").click(function () {

    // retrieve all of the items from the cart:
    var items = $("#shoppingCart li");
    var itemArray = [];
    $.each(items, function (key, value) {

      var item = {
        sku: value.getAttribute("data-item-sku"),
        qty: value.getAttribute("data-item-qty")
      };
      itemArray.push(item);
    });
    var itemsAsJSON = JSON.stringify(itemArray);
    console.log("itemsAsJSON", itemsAsJSON);


    console.log("Check out cart with the following items", itemArray);
    $.ajax({
      url: "./shoppingcart.php",
      type: "POST",
      dataType: 'json',
      data: {
        action: "checkoutcart",
        items: itemsAsJSON
      },
      success: function (returnedData) {
        console.log("cart check out response: ", returnedData);

      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.statusText, textStatus);
      }
    });
    var shoppingCartList = $("#shoppingCart").html("");
  });




});
/*]]>*/