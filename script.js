import * as spawning from "./spawning.js"
import * as playerMovement from "./playerMovement.js"
import * as environnement from "./environnement.js"
import * as drawing from "./drawing.js"
import * as entities from "./entities.js"

var canvas = document.getElementById('tutorial');
var canvasBad= document.getElementById('BAD');
var canvasBackground= document.getElementById('background');
let johnny=entities.johnny


//canvas to draw the sprites on
// two canvas : ctx for player
// ctx2 for enemy sprite
var ctx = canvas.getContext('2d');
var ctx2=canvasBad.getContext('2d')
var ctxBack=canvasBackground.getContext("2D")



//background
setInterval(()=>{drawing.drawBackground()},33)

//enemies
setInterval(()=>{spawning.Spawn(entities.crasse,entities.allCrasse)},1000)
setInterval(()=>{environnement.moveThings(entities.allCrasse,ctx2)},33)

//bonus
setInterval(()=>{spawning.Spawn(entities.BonusGrow,entities.allBonusGrow)},4000)
setInterval(()=>{environnement.moveThings(entities.allBonusGrow,ctx2)},33)


setInterval(()=>{environnement.pve(ctx2)},100)



setInterval(()=>{drawing.drawJohnny(johnny.positionX,johnny.positionY)},30)



document.body.addEventListener('keydown',playerMovement.move)
document.body.addEventListener("keyup",playerMovement.stop)


