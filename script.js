var main = document.getElementById("main")
var loader = document.getElementById("loader")

var screenW = window.innerWidth
var screenH = window.innerHeight

var body = document.getElementsByTagName("body")[0]
var main = document.getElementById("main")
var loader = document.getElementById("loader")
var nav = document.getElementsByTagName("nav")[0]
var navButtons = document.getElementsByClassName("white")
var menuLinks = document.getElementsByClassName("white-link")
var logo = document.getElementsByClassName("white-logo")[0]
var scrollPrompt = document.getElementById("scroll-down")
var hooker = document.getElementById("hooker")
var hook1 = document.getElementById("hook1")
var hook2 = document.getElementById("hook2")
var hook3 = document.getElementById("hook3")
var tick = 0

function show() {
  loader.style.display = "none"
  main.style.display = "block"
  setup()
}

function load() {
  loader.style.display = "block"
  main.style.display = "none"
  setTimeout(show,3000)
}

function resize(object, box, width) {
  object.style.width = `${width}px`
  object.style.height = `${box.height * width / box.width}px`
}

function setup() {
  const script = document.createElement("script")
  script.innerHTML = "$(function() {AOS.init();});"
  body.appendChild(script)
  update()
}

function update() {
  window.ondragstart = function() {return false}
  screenW = window.innerWidth
  screenH = window.innerHeight
  changeNav(window.scrollY>200)
  tick ++
  console.log(tick)
  window.requestAnimationFrame(update)
}

function createRipple(event) {
  const button = event.currentTarget

  const circle = document.createElement("span")
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.pageX - button.offsetLeft - radius}px`
  circle.style.top = `${event.pageY - button.offsetTop - radius}px`
  circle.classList.add("ripple")

  const ripple = button.getElementsByClassName("ripple")[0]

  if (ripple) {
    ripple.remove()
  }

  button.appendChild(circle)
}
  
const buttons = document.getElementsByClassName("ripple-button");
for (const button of buttons) {
  button.addEventListener("mousedown", createRipple);
}

function changeNav(scrolled) {
  for (const navButton of navButtons) {
    if (scrolled) {
      navButton.classList.add("black")
    } else {
      navButton.classList.remove("black")
      navButton.classList.add("white")
    }
  }
  for (const menuLink of menuLinks) {
    if (scrolled) {
      menuLink.classList.add("black")
    } else {
      menuLink.classList.remove("black")
      menuLink.classList.add("white-link")
    }
  }
  if (scrolled) {
    nav.style.color = "black"
    nav.style.backgroundColor = "white"
    logo.classList.add("black")
  } else {
    nav.style.color = "white"
    nav.style.backgroundColor = "transparent"
    logo.classList.remove("black")
    logo.classList.add("white-logo")
  }
  if (tick > 600) {
    tick = 0
  }
  if (tick < 201) {
    hook1.classList.add("show")
    hook1.classList.remove("hide")

    hook2.classList.remove("show")
    hook2.classList.add("hide")

    hook3.classList.add("hide")
    hook3.classList.remove("show")
  } else if (tick < 401) {
    hook1.classList.add("hide")
    hook1.classList.remove("show")

    hook2.classList.remove("hide")
    hook2.classList.add("show")

    hook3.classList.add("hide")
    hook3.classList.remove("show")
  } else {
    hook1.classList.add("hide")
    hook1.classList.remove("show")

    hook2.classList.remove("show")
    hook2.classList.add("hide")

    hook3.classList.add("show")
    hook3.classList.remove("hide")
  }
}