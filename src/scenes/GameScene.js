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
            this.load.image('sky','images/sky.png');
            this.load.image('glass','images/glass.png');
            this.load.image('player','../images/Gokuตัดเองจ้า.png')
    }
    
    create(){
            background = this.add.image(0,0,'sky').setOrigin(0).setScale(3)
            platforms = this.physics.add.staticGroup();
        player = this.physics.add.image(384, 216, 'player').setSize(400, 300).setScale(0.2).setCollideWorldBounds(true)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

            platforms.create(300, 750, 'glass').setScale(3).refreshBody();
    }

    update(){
        bg.tilePositionX -= 1
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
    }

}
export default GameScene