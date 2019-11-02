<<<<<<< HEAD
let keyW,keyA,keyS,keyD
let player
let cloud
let thunder
let thunderGroup
=======
let bg
let player
let keyW,keyA,keyS,keyD
>>>>>>> master
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
<<<<<<< HEAD
        this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})
        this.load.image('Cloud','../../images/Cloud.png')
        this.load.image('Thunder','../../images/Thunder.png')

    }
    
    create(){
        cloud = this.physics.add.image(-100,-750,'Cloud').setOrigin(0,0).setScale(0.7).setSize(0.2)
        player = this.physics.add.image(384,216,'Player').setSize(800,600).setScale(0.2).setCollideWorldBounds(true);
=======
            this.load.image('bg','..images/sky.png')
            this.load.image('player','../images/Gokuตัดเองจ้า.png')
    }
    
    create(){
        bg = this.add.tileSprite(0, 0, 384, 216, 'bg').setOrigin(0, 0).setSize(800, 600).setScale(2.8)
        player = this.physics.add.image(384, 216, 'player').setSize(400, 300).setScale(0.2).setCollideWorldBounds(true)
>>>>>>> master
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
<<<<<<< HEAD
        
        thunderGroup = this.physics.add.group();
        this.physics.add.collider(player,thunderGroup,function(){console.log('test')})
        event = this.time.addEvent({
            delay : 2000,
            callback : function(){
                thunder = this.physics.add.sprite(Phaser.Math.Between(0,900),20,'Thunder').setScale(0.1)
                thunderGroup.add(thunder)
                thunderGroup.setVelocityY(200)
            },
            callbackScope : this,
            loop : true,
            pause : true,
            
            
        })
=======
>>>>>>> master

    }

    update(){
<<<<<<< HEAD
        {
            if (keyA.isDown) {
                player.setVelocityX(-500)
            } else if (keyD.isDown) {
                player.setVelocityX(500)
            } else if (keyS.isDown) {
                player.setVelocityY(+330)
            } if (keyW.isDown) {
                player.setVelocityY(-330)
            } 
        }
        for(let i = 0;i < thunderGroup.getLength();i++){
            let thun = thunderGroup.getChildren()[i]
            if(thunder.y <= -50){
                thunder.destroy(true)
=======
        bg.tilePositionX -= 1
        {
            if (keyA.isDown) {
                player.setVelocityX(-400)

            } else if (keyD.isDown) {
                player.setVelocityX(400)

            } else if (keyS.isDown) {
                player.setVelocityY(400)
            } else {
                player.setVelocity(0, 0)
            }
            if (keyW.isDown) {
                player.setVelocityY(-400)
>>>>>>> master
            }
        }
    }

}
export default GameScene