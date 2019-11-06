import { platform } from "os"

var background
var platforms
let keyW, keyA, keyS, keyD
let player
let cloud
let lightning
let lightningGroup
let thunder
let thunderGroup
let keySpacebar
let hole1,hole2,hole3,hole4,hole5,hole6
let trees
let HoleGroup
class GameScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'GameScene'
        })
    }

    preload() {
        this.load.image('sky', 'images/sky.jpg');
        this.load.image('platform', 'images/platform.png')
        this.load.spritesheet('Player', '../../images/RightWalk.png', { frameWidth: 105, frameHeight: 533 })
        this.load.image('Lightning', '../../images/lightning.png')
        this.load.image('Thunder', '../../images/thunder.png')
        this.load.image('Hole', '../../images/Hole.png')
        this.load.image('tree', '../../images/tree2.png')

    }

    create() {
        platforms = this.physics.add.image(0, 0, 'platform').setOrigin(0.5).setScale(1).setSize(1800, 250).setCollideWorldBounds(true);
        player = this.physics.add.sprite(10, 216, 'Player').setScale(0.2).setCollideWorldBounds(true);
        background = this.add.image(0, 0, 'sky').setOrigin(0).setScale(1)
         
        this.anims.create({
            key : 'playerAni',
            frames : this.anims.generateFrameNumbers('Player' , {
                start : 0,
                end : 5
            }),
            framerate : 10,
            repeat : -1       
        })
      

        thunder = this.add.image(650, -50, 'Thunder').setOrigin(0).setScale(0.5)
        thunder = this.add.image(450, -50, 'Thunder').setOrigin(0).setScale(0.5)
        thunder = this.add.image(10, -50, 'Thunder').setOrigin(0).setScale(0.5)
        thunder = this.add.image(250, -50, 'Thunder').setOrigin(0).setScale(0.5)

        
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        trees = this.physics.add.group();
        keySpacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.physics.add.collider(player, platforms);
        lightningGroup = this.physics.add.group();
        
        this.physics.add.collider(player, lightningGroup, function () { console.log('test') })
        event = this.time.addEvent({
            delay: 3000,
            callback: function () {
                lightning = this.physics.add.sprite(Phaser.Math.Between(0, 900), 20, 'Lightning').setScale(0.1)
                lightningGroup.add(lightning)
                lightningGroup.setVelocityY(200)
            },
            callbackScope: this,
            loop: true,
            pause: true,
            repeat: 0,
        })

        HoleGroup = this.physics.add.group()
        this.physics.add.collider(player, HoleGroup, function () { console.log('test') })
        event = this.time.addEvent({
            callback: function () {
                hole1 = this.add.image(318, 380, 'Hole').setScale(1).setSize(85, 30)
                hole2 = this.add.image(550, 430, 'Hole').setScale(1).setSize(85, 30)
                hole3 = this.add.image(820, 410, 'Hole').setScale(1).setSize(85, 30)
                hole4 = this.add.image(185, 479, 'Hole').setScale(1).setSize(85, 30)
                hole5 = this.add.image(715, 500, 'Hole').setScale(1).setSize(85, 30)
                hole6 = this.add.image(418, 529, 'Hole').setScale(1).setSize(85, 30)
                HoleGroup.add(hole1)
                HoleGroup.add(hole2)
                HoleGroup.add(hole3)
                HoleGroup.add(hole4)
                HoleGroup.add(hole5)
                HoleGroup.add(hole6)
            },
            callbackScope: this,
            loop: false,
            pause: false,
            repeat: 0
        })
    }

    update() {
        player.anims.play('playerAni',true)


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
            } if (keySpacebar.isDown) {
                this.TREE()
                for (let i = 0; i < trees.getLength(); i++) {
                    let tre = trees.getChildren()[i]
                    if (tre.x < -50) {
                        tre.destroy(true)
                    }
                }
            }

        }
        for (let i = 0; i < lightningGroup.getLength(); i++) {
            let thun = lightningGroup.getChildren()[i]
            if (lightning.y <= -30) {
                lightning.destroy(true)
            }
        }

        
    }
    TREE() {
        event = this.time.addEvent({

            callback: function () {
                let tree = this.physics.add.image(player.x + 60, player.y - 50, 'tree')
                tree.setScale(1).setSize(0.2).setOff
                trees.add(tree)
            },
            callbackScope: this,
            loop: false,
            pause: false,

        })
    }
}
export default GameScene