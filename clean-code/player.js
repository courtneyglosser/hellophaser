
export class Player {
    constructor(scene, x, y, texture) {
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x,y,texture);
        //  Player physics properties. Give the little guy a slight bounce.
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);
    }

    static preload(scene) {
        scene.load.spritesheet(
            'dude',
            'assets/dude.png',
            { frameWidth: 32, frameHeight: 48 }
        );
    }

    update () {
        let cursors = this.scene.input.keyboard.createCursorKeys();

        if (cursors.left.isDown)
        {
            this.sprite.setVelocityX(-160);

            this.sprite.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            this.sprite.setVelocityX(160);

            this.sprite.anims.play('right', true);
        }
        else
        {
            this.sprite.setVelocityX(0);

            this.sprite.anims.play('turn');
        }

        if (cursors.up.isDown && this.sprite.body.touching.down)
        {
            this.sprite.setVelocityY(-330);
        }

    }
};
