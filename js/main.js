$(document).ready(function() {
    $(".animsition").animsition({
    inClass               :   'fade-in',
    outClass              :   'fade-out',
    inDuration            :    400,
    outDuration           :    200,
    linkElement           :   '.animsition-link', 
    touchSupport          :    true, 
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ]
  });
  
  
  $('#ui-spinner-button').click(function () {
        //console.log($(this).val());
        var number = parseInt($(this).val());
        var price = parseFloat($(this).attr("data-price").replace("$", ""));
        console.log(number, price);
        $("#price").html("$" + number * price);
      });
  
});
