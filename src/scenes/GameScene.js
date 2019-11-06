var background
var platforms
let keyW,keyA,keyS,keyD
let player
let lightning
let lightningGroup
let thunder
let thunderGroup
let keySpacebar
let trees


class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){

            this.load.image('tree','images/tree2.png')
            this.load.image('sky','images/sky.jpg')
            this.load.image('platform','images/platform.png')
            this.load.image('player','../../images/nong.png',{frameWidth :384 ,frameHeight:216})
            this.load.image('Lightning','../../images/lightning.png')
            this.load.image('Thunder','../../images/Thunder.png')
            this.load.audio("gametheme",["../../images/gametheme.mp3",])
            this.load.audio("grownplant","../../images/grownplant.mp3")
            this.load.audio("deadplant","../../images/deadplant.mp3")
            this.load.audio("stepsound","../../images/stepsound.mp3")
            this.load.audio("thundersound","../../images/thunder.ogg")
}
    
    create(){
        this.gametheme = this.sound.add("gametheme");
        this.grownplant = this.sound.add("grownplant")
        this.deadplant = this.sound.add("deadplant")
        this.stepsound = this.sound.add("stepsound")
        this.thundersound = this.sound.add("thundersound")
        var musicConfig = {
            mute : false,
            volume : 1,
            rate : 1,
            detune : 0,
            loop : true,
            delay : 0
        }
        this.gametheme.play(musicConfig);


        platforms = this.physics.add.image(0,0,'platform').setOrigin(0.5).setScale(1).setSize(1800,250).setCollideWorldBounds(true);
        background = this.add.image(0,0,'sky').setOrigin(0).setScale(1)
        player = this.physics.add.image(384,400,'player').setSize(500,600).setScale(0.2).setCollideWorldBounds(true);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        thunder = this.add.image(250,-50,'Thunder').setOrigin(0).setScale(0.5)
        thunder = this.add.image(10,-50,'Thunder').setOrigin(0).setScale(0.5)
        thunder = this.add.image(450,-50,'Thunder').setOrigin(0).setScale(0.5)
        thunder = this.add.image(650,-50,'Thunder').setOrigin(0).setScale(0.5)
        this.physics.add.collider(player,platforms);
        trees = this.physics.add.group();
        keySpacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        this.physics.add.collider(player,platforms);

        lightningGroup = this.physics.add.group();
        this.physics.add.collider(player,lightningGroup,function(){console.log('test')})
        event = this.time.addEvent({
            delay : 3000,
            callback : function(){
                lightning = this.physics.add.sprite(Phaser.Math.Between(0,900),20,'Lightning').setScale(0.1)
                lightningGroup.add(lightning)
                this.thundersound.play()
                lightningGroup.setVelocityY(200)
            },
            callbackScope : this,
            loop : true,
            pause : true, 
            repeat : 0,
        })

        this.physics.add.collider(lightningGroup, trees, this.hisplatform)
    }
    hisplatform(lightningGroup, trees) {
        lightningGroup.destroy()
        trees.destroy()
    }
          
    update(){
        if (keyA.isDown) {
            player.setVelocityX(-400)
            this.stepsound.play()

        } else if (keyD.isDown) {
            player.setVelocityX(400)
            this.stepsound.play()

        } else  {
            player.setVelocityX(0)
        }
        if (keyW.isDown) {
            player.setVelocityY(-400)
            this.stepsound.play()
        }else if (keyS.isDown) {
            player.setVelocityY(400)
            this.stepsound.play()
        }else  {
            player.setVelocityY(0)
            
        }        
         
       if(keySpacebar.isDown){
           this.TREE()
           for(let i = 0; i< trees.getLength(); i++){
               let tre = trees.getChildren()[i]
               if(tre.x < -50 ){
                   tre.destroy(true)
                   this.deadplant.play();
               }
           }
       }

   for(let i = 0;i < lightningGroup.getLength();i++){
       let thun = lightningGroup.getChildren()[i]
       if(lightning.y <= -50){
           lightning.destroy(true)
       }
   }  
         
}

TREE() 
    {
       event = this.time.addEvent({
           
           callback: function() {
               let tree = this.physics.add.image(player.x + 60, player.y - 50, 'tree')
               tree.setScale(1).setSize(100,200).setOff
               trees.add(tree)
               this.grownplant.play();
           },
           callbackScope: this,
           loop:false,
           pause: false  
       })
   }

}

export default GameScene