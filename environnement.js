import * as entities from "./entities.js"
let allCrasse=entities.allCrasse
let allBonusGrow=entities.allBonusGrow
let johnny=entities.johnny

const moveThings=(npcList,canvas)=>{
  for (let i=0;i<npcList.length;i++){
    let actualVitesse=npcList[i].vitesse
    npcList[i].y=npcList[i].y+actualVitesse
    

    
    canvas.clearRect( npcList[i].x, npcList[i].y-(actualVitesse+3),25,25)
    canvas.drawImage(npcList[i].assets,npcList[i].x,npcList[i].y,25,25)
    /*  ctx2.fillRect( npcList[i].x, npcList[i].y,50,50)*/
  }
}

const pve=(canvas)=>{
console.log("CA RENTRE SAMER")
  for (let i=0;i<allCrasse.length;i++){

    if (Math.abs(johnny.center[0]-allCrasse[i].x)<johnny.hitbox && Math.abs(johnny.center[1]-allCrasse[i].y)<johnny.hitbox){
      alert("Johnny died")
      canvas.clearRect(allCrasse[i].x,allCrasse[i].y,50,50)
      allCrasse.splice(i,1)
    }
    else{
      continue
    }
  }
  for (let i=0;i<allBonusGrow.length;i++){
    if (Math.abs(johnny.center[0]-allBonusGrow[i].x)<johnny.hitbox && Math.abs(johnny.center[1]-allBonusGrow[i].y)<johnny.hitbox){
     johnny.hitbox=johnny.hitbox+20
   canvas.clearRect(allBonusGrow[i].x,allBonusGrow[i].y,50,50)
     allBonusGrow.splice(i,1)
   }
   else{
    continue
  }
}
}

export {moveThings,pve }