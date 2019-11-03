<<<<<<< HEAD
import { platform } from "os"

=======
>>>>>>> Dlz
var background
var platforms
let keyW,keyA,keyS,keyD
let player
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
<<<<<<< HEAD
            this.load.image('sky','images/sky.png');
            this.load.image('platform','images/platform.png')
            this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})
    }
    
    create(){
        platforms = this.physics.add.image(0,0,'platform').setOrigin(0.5).setScale(1).setSize(1800,250).setCollideWorldBounds(true);
        background = this.add.image(0,0,'sky').setOrigin(0).setScale(1)
        player = this.physics.add.image(300,800,'Player').setSize(800,600).setScale(0.2).setCollideWorldBounds(true);
=======
            this.load.image('player','../images/Gokuตัดเองจ้า.png')
    }
    
    create(){
        
        player = this.physics.add.image(384, 216, 'player').setSize(400, 300).setScale(0.2).setCollideWorldBounds(true)
>>>>>>> Dlz
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
<<<<<<< HEAD
        this.physics.add.collider(player,platforms);
    }

    update(){
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
=======

    }

    update(){
    {
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
>>>>>>> Dlz
        }
    }
    }
}
export default GameScene