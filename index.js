$(document).ready(function(){
$(".adm").hide();
$(".crs").hide();

$("#admbtn").click(function(){
$(".adm").show(1000);
$(".crs").hide();
});

$("#admbtn").hover(function(){
$(".adm").show(1000);
$(".crs").hide();
});


$("#crsbtn").click(function(){
$(".adm").hide();
$(".crs").show(1000);
});


$("#crsbtn").hover(function(){
$(".adm").hide();
$(".crs").show(1000);
});

$("#homebtn").click(function(){
$(".adm").hide();
$(".crs").hide();
});

$("#homebtn").hover(function(){
$(".adm").hide();
$(".crs").hide();
});

$("#contactbtn").click(function(){
$(".adm").hide();
$(".crs").hide();
});

$("#contactbtn").hover(function(){
$(".adm").hide();
$(".crs").hide();
});


$(".content").hide();

 $("#button12").click(function(){

    $("#content1").show(1000);
    $("#content2").hide(1000);
    $("#content3").hide(1000);
});
    

 $("#button2").click(function(){

    $("#content1").hide(1000);
    $("#content2").show(1000);
    $("#content3").hide(1000);
});



 $("#button3").click(function(){

    $("#content1").hide(1000);
    $("#content2").hide(1000);
    $("#content3").show(1000);
});




$(".container3").hide();
$("#modalbtn").click(function(){

$(".container3").slideDown(1000);

});

$("#ok").click(function(){

$(".container3").slideUp(1000);
alert("Your changes have been saved");


});

$("#cancel").click(function(){

$(".container3").slideUp(1000);

});


});

