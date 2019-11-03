import { platform } from "os"

class ToturialScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'ToturialScene'
        })
    }

    preload(){
          this.load.image('ToturialScene','images/toturialScene.png')
    }
    
    create(){
        this.add.image(0,0,'ToturialScene').setOrigin(0).setScale(1);
        this.input.on('pointerdown',() => this.scene.start('GameScene'))
    }

    update(){

    }

}
export default ToturialScene