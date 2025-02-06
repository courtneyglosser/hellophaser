
// Extends Phaser.Scene class.

export class PreloadAssets extends Phaser.Scene {

    constructor () {
        super ({
            key: 'PreloadAssets'
        });
    }

    preload() : void {
        this.load.image ('enemy', 'assets/sprites/Enemy-small.png');
        this.load.image ('player', 'assets/sprites/Player.png');
        this.load.image ('bullet', 'assets/sprites/Bullet.png');
    }

    create() : void {
        // Start the PlayGame Scene
        console.log("Creating the game! PlayGame:) ");
        this.scene.start('PlayGame');
    }

}

