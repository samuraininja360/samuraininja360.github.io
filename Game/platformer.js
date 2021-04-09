const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const blue = "#0064ff"
const red = "ff0032"
const yellow = "ffc800"
const green = "00b428"
const purple = "7900dc"

function setup() {
  console.log("Setting things up")
  ctx.canvas.width = window.clientWidth
  ctx.canvas.height = window.clientHeight
  update()
}

function update() {
  
  window.requestAnimationFrame(update)
}

setup()
