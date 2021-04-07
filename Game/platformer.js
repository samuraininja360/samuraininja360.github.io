const canvas = document.getElementById("canvas")
const blue = "#0064ff"
const red = "ff0032"
const yellow = "ffc800"
const green = "00b428"
const purple = "7900dc"

function setup() {
  console.log("Setting things up")
  update()
}

function update() {
  window.requestAnimationFrame(update)
}
