function loadProducts() {
  $.ajax({
    url: "./php/adminproducts.php",
    type: "GET",
    dataType: 'html',
    success: function (returnedData) {
      $("#getAdminProducts").html(returnedData);
      
      $(".editbutton").click(function() {
  var popupscreen = $("<div class='popupscreen'></div>");
 
  
  var popupitem = $("<div class='popupitem2'></div>");
  $(popupscreen).append(popupitem);
  
  var popuptitle = $("<h2 class='popuptitle'>Edit This Product</h2>");
  $(popupitem).append(popuptitle);
  
  var closebutton = $("<span class='closebutton'>x</span>");
  $(popupitem).append(closebutton);
  
  var popupform = $("<form class='popupform'><label for='pname'>name:</label><input id='pname' type='text'><label for='pprice'>price:</label><input id='pprice' type='text'><label for='pstock'>stock:</label><input id='pstock' type='text'><label for='pdescription'>description:</label><textarea id='pdescription'></textarea><label for='pcategory'>category:</label><div class='styled-select'><select><option value='all'>all</option><option value='instruments'>instruments</option><option value='vehicles'>vehicles</option><option value='animals'>animals</option></select></div><label id='uploadlabel' for='uplaodimg'>image:</label><input id='uploadimg' type='file' placeholder='choose image'><input id='submitedit' type='submit'></form>");
  $(popupitem).append(popupform);
  
  $(document.body).append(popupscreen);
  
  $(closebutton).click(function() {
    $(popupscreen).remove(); 
  });
  
});
      
    }

  });
}

loadProducts();