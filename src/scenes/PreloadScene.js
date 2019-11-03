import { platform } from "os"
class PreloadScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'PreloadScene'
        })
    }

    preload(){
          this.load.image('firstScene','images/firstScene.png')
    }
    
    create(){
        this.add.image(0,0,'firstScene').setOrigin(0).setScale(1);
        this.input.on('pointerdown',() => this.scene.start('ToturialScene'))
    }

    update(){

    }

}
export default PreloadScene