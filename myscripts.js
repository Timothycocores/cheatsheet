<!-- Alert name -->
function sayHelloToThisPerson(name){
alert('hello : ' + name);
}
//run above js function when this js is loaded
sayHelloToThisPerson('timothy');
//end alert
//alert when clicked
$("p").click(function(){
        alert("The paragraph was clicked.");
    });

    //right click disable with alert
$(document).bind('contextmenu', function (e) {
  e.preventDefault();
  alert('Too bad you cant');
});
$(".btn1").click(function(){
        $("h1").fadeOut(3000)
    });
    $(".btn2").click(function(){
        $("h1").fadeIn(3000);
    });