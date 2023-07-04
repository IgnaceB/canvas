const assetBullet=new Image()
assetBullet.src="assets/bullet.png"


let johnny={
  positionX:0,
  positionY:0,
  hitbox: 50,
  vitesse:10,
  center:[0,0]
}

let crasse={
  x:0,
  y:0,
  center:[25,25],
  vitesse:6,
  name:"crasse",
  assets:assetBullet,

}

let BonusGrow={
 x:0,
 y:0,
 center:[25,25],
 vitesse:3,
 name:"bonus",
 assets:assetBullet,
}


let allCrasse=[]
let allBonusGrow=[]

export {allCrasse,allBonusGrow,crasse,BonusGrow,johnny}