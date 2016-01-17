$("#imagewrapper ul li").click(function() {
  var popupscreen = $("<div class='popupscreen'></div>");
 
  
  var popupitem = $("<div class='popupitem'></div>");
  $(popupscreen).append(popupitem);
  
  var imgtemp = $(this).children("img").attr("src");
  var popupimg = $("<img class='popupimg' src='"+imgtemp+"'>");
  $(popupitem).append(popupimg);
  
  var popuptextdiv = $("<div class='popuptextdiv'></div>");
  $(popupitem).append(popuptextdiv);
  
  var h2temp = $(this).children("div").children("p").text();
  var popuptitle = $("<h2 class='popuptitle'>Product title</h2><hr class='popuphr'><p class='popupprice'>$35.00</p>");
  $(popuptextdiv).append(popuptitle);
  
  var popupdescription = $("<p class='popupdescription'>This product is made entirely out of pine and birch, and is crafted to be durable through any situation. it is perfect for children, or collectors of finely crafted wooden masterpieces. You'll love it!</p>");
  $(popuptextdiv).append(popupdescription);
  
  var popupbutton = $("<a href='#' class='popupbutton'>add to cart</a>");
  $(popuptextdiv).append(popupbutton);
  
  var closebutton = $("<span class='closebutton'>x</span>");
  $(popupitem).append(closebutton);
  
   $(document.body).append(popupscreen);
  
  $(closebutton).click(function() {
    $(popupscreen).remove(); 
  });

});


