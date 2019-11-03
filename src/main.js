import 'phaser';
import GameScene from './scenes/GameScene';
import PreloadScene from './scenes/PreloadScene';
import ToturialScene from './scenes/ToturialScene';
import GameOverScene from './scenes/GameOverScene';
const config = {
    // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
    type: Phaser.WEBGL,
    pixelArt: true,
    roundPixels: true,
    parent: 'content',
    width: 900,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {y:0}
        }
    },
    scene: [
        PreloadScene,ToturialScene,GameScene,GameOverScene
    ]
};

const game = new Phaser.Game(config);