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

    // Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}

//parallax

 //html body code #bubbles1, #bubbles2{
 //width: 100%;
 //height: 100%;
 //top: 0;
// left: 0;
// position: fixed;
// z-index: -1;
// background: url(http://abovethecrowd.com/wp-content/uploads/2014/01/bubbles-water-transparent-design.jpg) 5% 50% no-repeat;
//}
 
//#bubbles2{
// background: url(http://wallpapers111.com/wp-content/uploads/2014/12/3D-Bubbles-HD-Wallpapers.jpg) 95% 90% no-repeat;
//}
 
var bubble1 = document.getElementById('bubbles1')
var bubble2 = document.getElementById('bubbles2')
 
function parallaxbubbles(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
 bubble1.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
 bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)