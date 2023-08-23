$(document).ready(function(){
               
    //code for displaying the cookie
    $("#freebie").click(function(){
        $("#cookie").slideToggle("slow");
    });

   

    //Code for calculate
    $("#btnCalc").click(function(){
    var unitCost=0.0;
     //code to check which radio button was clicked in Jquery
    if ($("#optRegular").prop("checked")) {
        unitCost=15.0;
        }// OR
    else if ($("#optFilter").is(":checked")) {
        unitCost=20.0;
    }
    var amount=$('#txtQuant').val(); // get value
    var total=amount * unitCost;
    total=total.toFixed(2);
    $('#txtTotal').val(total); // set value
    });

});
