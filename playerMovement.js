import * as entities from "./entities.js"
let johnny=entities.johnny
let canvas = document.getElementById('tutorial');

const right=()=>{

  if (johnny.center[0]<window.innerWidth){
    johnny.positionX=johnny.positionX+johnny.vitesse

    johnny.center=[johnny.positionX+johnny.hitbox,johnny.positionY+johnny.hitbox]
  }

}
const left=()=>{
  if (johnny.positionX>0){
    johnny.positionX=johnny.positionX-johnny.vitesse
 
    johnny.center=[johnny.positionX+johnny.hitbox,johnny.positionY+johnny.hitbox]

  }
}
const up=()=>{
  if (johnny.positionY>0){
    johnny.positionY=johnny.positionY-johnny.vitesse    

    johnny.center=[johnny.positionX+johnny.hitbox,johnny.positionY+johnny.hitbox]

  }
}
const down=()=>{
 
  if (johnny.center[1]<window.innerHeight){
    johnny.positionY=johnny.positionY+johnny.vitesse

    johnny.center=[johnny.positionX+johnny.hitbox,johnny.positionY+johnny.hitbox]

  }
}


let pressRight
let pressUp
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

export {stop,move}