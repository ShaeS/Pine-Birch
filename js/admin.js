$(".editbutton").click(function() {
  var popupscreen = $("<div class='popupscreen'></div>");
 
  
  var popupitem = $("<div class='popupitem'></div>");
  $(popupscreen).append(popupitem);
  
  var popupform = $("<form><label for='pname'>name:</label><input id='pname' type='text'><label for='pcategory'>category:</label><select><option value='all'>all</option><option value='instruments'>instruments</option><option value='vehicles'>vehicles</option><option value='animals'>animals</option></select><br/></form>");
  $(popupitem).append(popupform);
  
  $(document.body).append(popupscreen);
  
});