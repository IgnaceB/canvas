import * as entities from "./entities.js"

var canvas = document.getElementById('tutorial');
var canvasBad= document.getElementById('BAD');
var canvasBackground=document.getElementById('background')

var ctx = canvas.getContext('2d');
var ctx2=canvasBad.getContext('2d')
var ctxBack=canvasBackground.getContext("2d")


ctxBack.canvas.width=window.innerWidth
ctxBack.canvas.height=window.innerHeight
ctxBack.canvas.style="position:absolute;left:0;top:0"

ctx2.canvas.style="position:absolute;left:0;top:0"
ctx2.canvas.width=window.innerWidth
ctx2.canvas.height=window.innerHeight


ctx.canvas.style="position:absolute"
ctx.canvas.width=window.innerWidth
ctx.canvas.height=window.innerHeight


let johnny=entities.johnny

let backgroundImage=new Image()
backgroundImage.src="assets/background.png"

let img=new Image()
img.src="assets/johnny.png"

function drawJohnny(x,y) {
 ctx.clearRect(0, 0, canvas.width, canvas.height); 
 ctx.drawImage(img,x,y,100*(1+(johnny.hitbox-49)/100),100*(1+(johnny.hitbox-49)/100))
 console.log("desinneo")
}

let height=0
const drawBackground=()=>{

	if (height<window.innerHeight){
	ctxBack.drawImage(backgroundImage,0,height,window.innerWidth,window.innerHeight)
	
	ctxBack.drawImage(backgroundImage,0,height-window.innerHeight,window.innerWidth,window.innerHeight)
	height=height+5
}
else {
	height=0
}
}
export {drawJohnny,drawBackground}