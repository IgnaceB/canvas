
import * as entities from "./entities.js"
let allCrasse=entities.allCrasse
let crasse=entities.crasse
let BonusGrow=entities.BonusGrow
let allBonusGrow=entities.allBonusGrow

const assetBullet=new Image()
assetBullet.src="assets/bullet.png"

/*let crasse={
  x:0,
  y:0,
  center:[25,25],
  vitesse:6,
  name:"crasse",
  assets:assetBullet,

}

let allBonusGrow=[]

let BonusGrow={
 x:0,
 y:0,
 center:[25,25],
 vitesse:3,
 name:"bonus",
 assets:assetBullet,
}*/



// function for the movement of the sprites
  // npc => object to spawn : bonus, enemy,...
  // npcList => array made from similar object 

const Spawn=(npc,npcList)=>{
  let a=Math.floor(Math.random()*window.innerWidth)-50
 
  let newNpc={
    x:a,
    y:0,
    center:[a+25,0+25],
    vitesse:(Math.random()*(npc.vitesse)/2)+3,
    name : npc.name,
    assets:npc.assets,
  }
  npcList.push(newNpc)

}

export {Spawn} 