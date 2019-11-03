import { platform } from "os"

var background
var platforms
let keyW,keyA,keyS,keyD
let player
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
let tree
=======
let keySpace
>>>>>>> Dlz
=======
=======
>>>>>>> Reward
let cloud
let lightning
let lightningGroup
let thunder
let thunderGroup
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> Reward
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            this.load.image('tree','images/tree.jpg')
            this.load.image('sky','images/sky.jpg')
            this.load.image('platform','images/platform.png')
            this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})
=======
            this.load.image('player','../images/nong.png',)
>>>>>>> Dlz
=======
            this.load.image('sky','images/sky.jpg');
            this.load.image('platform','images/platform.png')
            this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})
            this.load.image('Lightning','../../images/lightning.png')

>>>>>>> Reward
    }
    
    create(){
        platforms = this.physics.add.image(0,0,'platform').setOrigin(0.5).setScale(1).setSize(1800,250).setCollideWorldBounds(true);
        background = this.add.image(0,0,'sky').setOrigin(0).setScale(1)
<<<<<<< HEAD
        
        
        player = this.physics.add.image(384, 216, 'player').setSize(400, 300).setScale(0.2).setCollideWorldBounds(true)
=======
        this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})
        this.load.image('Cloud','../../images/Cloud.png')
        this.load.image('Thunder','../../images/Thunder.png')

    }
    
    create(){
        cloud = this.physics.add.image(-100,-750,'Cloud').setOrigin(0,0).setScale(0.7).setSize(0.2)
        player = this.physics.add.image(384,216,'Player').setSize(800,600).setScale(0.2).setCollideWorldBounds(true);
>>>>>>> master
=======
        player = this.physics.add.image(384,216,'Player').setSize(800,600).setScale(0.2).setCollideWorldBounds(true);
>>>>>>> Reward
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.physics.add.collider(player,platforms);
=======
        //keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR);
>>>>>>> Dlz
=======
=======
        this.physics.add.collider(player,platforms);
>>>>>>> Reward
        
        lightningGroup = this.physics.add.group();
        this.physics.add.collider(player,lightningGroup,function(){console.log('test')})
        event = this.time.addEvent({
            delay : 1500,
            callback : function(){
                lightning = this.physics.add.sprite(Phaser.Math.Between(0,900),20,'Lightning').setScale(0.1)
                lightningGroup.add(lightning)
                lightningGroup.setVelocityY(200)
            },
            callbackScope : this,
            loop : true,
            pause : true,
            
            
        })

<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> Reward
    }

    update(){
        
        {
            if (keyA.isDown) {
                player.setVelocityX(-400)

            } else if (keyD.isDown) {
                player.setVelocityX(400)

            } else if (keyS.isDown) {
<<<<<<< HEAD
                player.setVelocityY(400)
            } else {
                player.setVelocity(0, 0)
            }
<<<<<<< HEAD
        if (keyA.isDown) {
            player.setVelocityX(-400)

        } else if (keyD.isDown) {
            player.setVelocityX(400)

        } else  {
            player.setVelocityX(0)
        }
        if (keyW.isDown) {
            player.setVelocityY(-400)
        }else if (keyS.isDown) {
            player.setVelocityY(400)
        }else  {
            player.setVelocityY(0)
=======
            if (keyW.isDown) {
                player.setVelocityY(-400)
            }
        }        
        for(let i = 0;i < thunderGroup.getLength();i++){
            let thun = thunderGroup.getChildren()[i]
            if(thunder.y <= -50){
                thunder.destroy(true)
        
    }
>>>>>>> master
        }
    }
        // if(keySpace.isDown){

        // }

    }
=======
                player.setVelocityY(+330)
            } if (keyW.isDown) {
                player.setVelocityY(-330)
            } 
        }
        for(let i = 0;i < lightningGroup.getLength();i++){
            let thun = lightningGroup.getChildren()[i]
            if(lightning.y <= -50){
                lightning.destroy(true)
            }
        }
    }

>>>>>>> Reward
}
export default GameScene