


$(function() {

  $(".numbers-row").append('<div class="inc button">+</div><div class="dec button">-</div>');

  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
	
	

    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	  }

    $button.parent().find("input").val(newVal);
    var valorUnitario = $button.parent().parent().parent().find("#precio").val();// para obtener el precio del producto
	//$button.parent().parent().parent().find("#total").val();// para obtener el total del producto
	var total = valorUnitario*newVal;
	
	//alert(valorUnitario*newVal);
	//$button.parent().parent().parent().find("#total").val(total.toFixed(0));// para darle el total del producto
	
	

	
	
  });
  
  

});