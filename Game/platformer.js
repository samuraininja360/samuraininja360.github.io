//Platformer
var container = document.getElementsByTagName("container")[0]
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var blue = "#0064ff"
var red = "#ff0032"
var yellow = "#ffc800"
var green = "#00b428"
var purple = "#7900dc"

function setup() {
    console.log("Setting things up")
    update()
}

function update() {
    ctx.canvas.width = window.innerWidth
    ctx.canvas.height = window.innerHeight
    ctx.fillStyle = "#0064ff"
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    window.requestAnimationFrame(update)
}

ctx.canvas.width = window.innerWidth
ctx.canvas.height = window.innerHeight
setup()
