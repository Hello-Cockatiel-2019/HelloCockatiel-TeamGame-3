import { platform } from "os"

class GameOverScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameOverScene'
        })
    }

    preload(){
          this.load.image('GameOverScene','images/gameoverScene.png')
    }
    
    create(){
        this.add.image(0,0,'GameOverScene').setOrigin(0).setScale(1);
        this.input.on('pointerdown',() => this.scene.start('PreloadScene'))
    }

    update(){

    }

}
export default GameOverScene