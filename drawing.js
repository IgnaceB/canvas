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
backgroundImage.src="assets/pxl/bg/background.png"

let starsImage=new Image()
starsImage.src="assets/pxl/bg/stars_1.png"

let nebulaImage=new Image()
nebulaImage.src="assets/pxl/bg/nebula_1.png"

let img=new Image()
img.src="assets/johnny.png"

function drawJohnny(x,y) {
 ctx.clearRect(0, 0, canvas.width, canvas.height); 
 ctx.drawImage(img,x,y,100*(1+(johnny.hitbox-49)/100),100*(1+(johnny.hitbox-49)/100))

}

let height=0
let nebulaHeight=0
let nebulaX
const drawBackground=()=>{

	if (height<window.innerHeight){
		ctxBack.clearRect(0,0,innerHeight,innerWidth)

	ctxBack.drawImage(backgroundImage,0,0,window.innerWidth,window.innerHeight)
	ctxBack.drawImage(starsImage,0,height,window.innerWidth,window.innerHeight)

	ctxBack.drawImage(starsImage,0,height-window.innerHeight,window.innerWidth,window.innerHeight)

	if (nebulaHeight==0 && Math.random()<0.1){
		nebulaX=Math.random()*innerWidth
		ctxBack.drawImage(nebulaImage,nebulaX,0)
		nebulaHeight=1
	}
	else if (nebulaHeight>0&&nebulaHeight<window.innerHeight){
		ctxBack.drawImage(nebulaImage,nebulaX,nebulaHeight)
		nebulaHeight=nebulaHeight+5
	}
	else {
		nebulaHeight=0
	}

	height=height+5
}
else {
	height=0
}
}
export {drawJohnny,drawBackground}