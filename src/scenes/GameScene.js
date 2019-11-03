var background
var platforms
let keyW,keyA,keyS,keyD
let player
<<<<<<< HEAD
<<<<<<< HEAD
let tree
=======
let keySpace
>>>>>>> Dlz
=======
let cloud
let thunder
let thunderGroup
>>>>>>> master
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
<<<<<<< HEAD
<<<<<<< HEAD
            this.load.image('tree','images/tree.jpg')
            this.load.image('sky','images/sky.jpg')
            this.load.image('platform','images/platform.png')
            this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})
=======
            this.load.image('player','../images/nong.png',)
>>>>>>> Dlz
    }
    
    create(){
        platforms = this.physics.add.image(0,0,'platform').setOrigin(0.5).setScale(1).setSize(1800,250).setCollideWorldBounds(true);
        background = this.add.image(0,0,'sky').setOrigin(0).setScale(1)
        
        
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
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
<<<<<<< HEAD
<<<<<<< HEAD
        this.physics.add.collider(player,platforms);
=======
        //keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACEBAR);
>>>>>>> Dlz
=======
        
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

>>>>>>> master
    }

    update(){
        
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
}
export default GameScene