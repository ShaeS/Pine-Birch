$("#imagewrapper ul li").click(function() {
  var popupscreen = $("<div class='popupscreen'></div>");
  $(document.body).append(popupscreen);
  
  var popupitem = $("<div class='popupitem'></div>");
  $(popupscreen).append(popupitem);
  
  var imgtemp = $(this).children("img").attr("src");
  var popupimg = $("<img class='popupimg' src='"+imgtemp+"'>");
  $(popupitem).append(popupimg);
  
  var popuptextdiv = $("<div class='popuptextdiv'></div>");
  $(popupitem).append(popuptextdiv);
  
  var h2temp = $(this).children("div").children("p").text();
  var popuptitle = $("<h2 class='popuptitle'></h2>").text(h2temp);
  $(popuptextdiv).append(popuptitle);
});