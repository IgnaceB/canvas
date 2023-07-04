
var canvas = document.getElementById('tutorial');
var canvasBad= document.getElementById('BAD');

const gluon=document.getElementById("img")

// const I need to call later,
let x=0
let y=0
let hitboxJohnny=50
let a=""
let b=0

//canvas to draw the sprites on
// two canvas : ctx for player
// ctx2 for enemy sprite
var ctx = canvas.getContext('2d');
var ctx2=canvasBad.getContext('2d')

ctx2.canvas.style="position:absolute;left:0;top:0"
ctx2.canvas.width=window.innerWidth
ctx2.canvas.height=window.innerHeight


ctx.canvas.width=window.innerWidth
ctx.canvas.height=window.innerHeight

let img=new Image()
img.src="assets/johnny.png"

//object johnny
let johnny={
  imgX:0,
  imgY:0,
  hitboxX:0,
  hitboxY:0,
  center:0,
  vitesse:10,
}

//update position of johnny
setInterval(()=>{johnny={
  imgX:x,
  imgY:y,
  hitbox:hitboxJohnny,
  center:[johnny.imgX+50,johnny.imgY+50],
  vitesse:10,
}},30)



// init sprites
let allCrasse=[]

let crasse={
  x:0,
  y:0,
  center:[25,25],
  vitesse:6,
  name:"crasse",
}
let allBonusGrow=[]
let BonusGrow={
 x:0,
 y:0,
 center:[25,25],
 vitesse:3,
 name:"bonus",
}



// function for the movement of the sprites
  // npc => object to spawn : bonus, enemy,...
  // npcList => array made from similar object 

const Spawn=(npc,npcList)=>{
  a=Math.floor(Math.random()*window.innerWidth)-50
  newNpc={
    x:a,
    y:0,
    center:[x+25,y+25],
    vitesse:npc.vitesse,
    name : npc.name,
  }
  if (npc.name=="crasse"){
    ctx2.fillStyle='black'
    ctx2.fillRect(a,0,50,50)
  }
  else {
    ctx2.fillStyle='red'
    ctx2.fillRect(a,0,50,50)
  }
  npcList.push(newNpc)

}

// z => array containing the object
//v => vitesse 
const moveThings=(npcList)=>{
  for (let i=0;i<npcList.length;i++){
    let actualVitesse=npcList[i].vitesse
    npcList[i].y=npcList[i].y+actualVitesse
    if (npcList[i].name=="crasse"){
      ctx2.fillStyle="black"}
      else {
        ctx2.fillStyle="red"
      }
      ctx2.clearRect( npcList[i].x, npcList[i].y-actualVitesse,50,50)
      ctx2.fillRect( npcList[i].x, npcList[i].y,50,50)
    }
  }

//calling spanw + movement on enemy sprites
  setInterval(()=>{Spawn(crasse,allCrasse)},1000)
  setInterval(()=>{moveThings(allCrasse)},33)

  setInterval(()=>{Spawn(BonusGrow,allBonusGrow)},4000)
  setInterval(()=>{moveThings(allBonusGrow)},33)


  const pve=()=>{

    for (let i=0;i<allCrasse.length;i++){

      if (Math.abs(johnny.center[0]-allCrasse[i].x)<johnny.hitbox && Math.abs(johnny.center[1]-allCrasse[i].y)<johnny.hitbox){
        alert("Johnny died")
        ctx2.clearRect(allCrasse[i].x,allCrasse[i].y,50,50)
        allCrasse.splice(i,1)
      }
      else{
        continue
      }
    }
    for (let i=0;i<allBonusGrow.length;i++){
      if (Math.abs(johnny.center[0]-allBonusGrow[i].x)<johnny.hitbox && Math.abs(johnny.center[1]-allBonusGrow[i].y)<johnny.hitbox){
       hitboxJohnny=hitboxJohnny+20
       ctx2.clearRect(allBonusGrow[i].x,allBonusGrow[i].y,50,50)
       allBonusGrow.splice(i,1)
     }
     else{
      continue
    }
  }
}
setInterval(pve,100)


function drawJohnny(x,y) {
 ctx.clearRect(0, 0, canvas.width, canvas.height); 
 ctx.drawImage(img,x,y,100*(1+(johnny.hitbox-49)/100),100*(1+(johnny.hitbox-49)/100))
}
const right=()=>{
  if (x<canvas.width){
    x=x+johnny.vitesse
    drawJohnny(x,y)
  }

}
const left=()=>{
  if (x>0){
    x=x-johnny.vitesse
    drawJohnny(x,y)
  }
}
const up=()=>{
  if (y>0){
    y=y-johnny.vitesse    
    drawJohnny(x,y)
  }
}
const down=()=>{
  if (y+johnny.vitesse<canvas.height){
    y=y+johnny.vitesse
    drawJohnny(x,y)
  }
}


let pressRight
let presUp
let pressDown
let pressLeft
let lastEvent=""

const move=(event)=>{
  switch (event.key){
  case 'ArrowRight':
   clearInterval(pressRight)
   pressRight =setInterval(right,33)

   break
 case 'ArrowUp':
   clearInterval(pressUp)
   pressUp = setInterval(up,33)
   break
 case 'ArrowDown':
  clearInterval(pressDown)
  pressDown= setInterval(down,33)

  break
case 'ArrowLeft':

  clearInterval(pressLeft)
  pressLeft= setInterval(left,33)
  break
}
}

const stop=(event)=>{
  switch (event.key){
  case 'ArrowRight':
    clearInterval(pressRight)
    break
  case 'ArrowUp':
    clearInterval(pressUp)
    break
  case 'ArrowDown':
    clearInterval(pressDown)
    break
  case 'ArrowLeft':
    clearInterval(pressLeft)
    break
  }
}

document.body.addEventListener('keydown',move)
document.body.addEventListener("keyup",stop)


