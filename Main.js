//Setup
var slideIndex = 0
var interacted = false
var delay = 3000
var main = document.getElementById("main")
var loader = document.getElementById("loader")
var slideContainer = document.getElementsByClassName("slideshow-container")[0]
var slideBox = slideContainer.getBoundingClientRect()
var nav = document.getElementsByClassName("bar")[0]
var parallax = document.getElementsByClassName("parallax")[0]
var parallaxBox = parallax.getBoundingClientRect()
var ninja = document.getElementById("ninja")
var layer1 = document.getElementById("layer1")
var layer1Box = layer1.getBoundingClientRect()
var layer0 = document.getElementById("layer0")
showSlides(delay);

//Display Settings
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (interacted) {
    delay = 0
  } else {
    slideIndex ++
    delay = 3000
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //Is not compatible with ripple effect
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, delay); 
}

function moveSlide(n) {
  slideIndex += n;
  slideTap()
}
function currentSlide(n) {
  slideIndex = n;
  slideTap()
}

function toggleSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  
}

function slideTap () {
  interacted = true
}

function show() {
  loader.style.display = "none"
  main.style.display = "block"
}

function load() {
  loader.style.display = "block"
  main.style.display = "none"
  setTimeout(show,2000)
}