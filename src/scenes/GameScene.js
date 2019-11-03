import { platform } from "os"

var background
var platforms
let keyW,keyA,keyS,keyD
let player
let cloud
let thunder
let thunderGroup
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
            this.load.image('sky','images/sky.png');
            this.load.image('platform','images/platform.png')
            this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})
        this.load.image('Player','../../images/Gokuตัดเองจ้า.png',{frameWidth :384 ,frameHeight:216})
        this.load.image('Cloud','../../images/Cloud.png')
        this.load.image('Thunder','../../images/Thunder.png')

    }
    
    create(){
        platforms = this.physics.add.image(0,0,'platform').setOrigin(0.5).setScale(1).setSize(1800,250).setCollideWorldBounds(true);
        background = this.add.image(0,0,'sky').setOrigin(0).setScale(1)
        cloud = this.physics.add.image(-100,-750,'Cloud').setOrigin(0,0).setScale(0.7).setSize(0.2)
        player = this.physics.add.image(384,216,'Player').setSize(800,600).setScale(0.2).setCollideWorldBounds(true);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.physics.add.collider(player,platforms);
        
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
        }
        for(let i = 0;i < thunderGroup.getLength();i++){
            let thun = thunderGroup.getChildren()[i]
            if(thunder.y <= -50){
                thunder.destroy(true)
            }
        }
    }

}
export default GameScene