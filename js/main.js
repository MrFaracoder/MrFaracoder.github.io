
//start scroll 
var mybutton = document.getElementById("myBtn");
var Mymenu = document.getElementById("mymenu");
var borderHome =document.getElementById("borderHome");
var borderAbout =document.getElementById("borderAbout");
var borderServices =document.getElementById("borderServices");
var borderPortfolio =document.getElementById("borderPortfolio");
var borderBlog =document.getElementById("borderBlog");
var borderCall =document.getElementById("borderCall");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.documentElement.scrollTop > 220) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
    Mymenu.style.background ="black";
  } 
  else {
    Mymenu.style.background = "none";
  }

  if(document.documentElement.scrollTop < 650){
    borderHome.style.borderBottom = "solid 2px";
  }
  else {
    borderHome.style.borderBottom = "none";
  }

  if(document.documentElement.scrollTop > 650 & document.documentElement.scrollTop < 1400){
    borderAbout.style.borderBottom = "solid 2px";
  }
  else {
    borderAbout.style.borderBottom = "none";
  }
  if(document.documentElement.scrollTop > 1399 & document.documentElement.scrollTop < 2450){
    borderServices.style.borderBottom = "solid 2px";
  }
  else {
    borderServices.style.borderBottom = "none";
  }
  if(document.documentElement.scrollTop > 2920 & document.documentElement.scrollTop < 3200){
    borderPortfolio.style.borderBottom = "solid 2px";
  }
  else {
    borderPortfolio.style.borderBottom = "none";
  }
  if(document.documentElement.scrollTop > 3800 & document.documentElement.scrollTop < 3990){
    borderBlog.style.borderBottom = "solid 2px";
  }
  else {
    borderBlog.style.borderBottom = "none";
  }
  if(document.documentElement.scrollTop > 3990 & document.documentElement.scrollTop < 65000){
    borderCall.style.borderBottom = "solid 2px";
  }
  else {
    borderCall.style.borderBottom = "none";
  }
}
document.getElementById("borderHome").style.borderBottom = "solid 2px";
document.getElementById("myBtn").style.display = "none";
//end scroll 
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//end scroll bottom



// mobail menu
function menuFunction() {
  var x = document.getElementById("menuMobil");
  var z = document.getElementById("bars");
  var n = document.getElementById("iconClose");
  var borderHome =document.getElementById("borderHome");
  if (x.style.display === "none"){
     x.style.display = "block";
    } else{
    x.style.display = "none";
  }
  if (z.style.display === "block") {
    z.style.display = "none";
  }
  else{
    z.style.display = "block";
  }
  if (n.style.display === "none") {
    n.style.display ="block";
  }else{
    n.style.display ="none";
  }
  borderHome.style.borderBottom === "solid 2px";
}




function menu1 (){
  var y = document.getElementById("menuMobil");
   var z = document.getElementById("bars");
   var n = document.getElementById("iconClose");
  if(y.style.display === "block"){
    y.style.display = "none";
  }
   if(z.style.display === "none"){
     z.style.display ="block"
   }
  if (n.style.display === "block") {
    n.style.display = "none"
  }
}



//start style loading page
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
//end style loading page



var string = " توسعه دهنده وب";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift()  : clearTimeout(running); 
var running = setTimeout(animate, 240);
})();