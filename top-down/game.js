
var config = {
    type: Phaser.CANVAS,
    width: 1000,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config); //create the game object


var player;
var obstacles;
var cursors;

var yLimit;
var xLimit;

var velocity;

function preload() {
    this.load.image ('floor', 'assets/floor.jpg');
    this.load.image ('circle', 'assets/circle.png');
    this.load.image ('obstacle', 'assets/obstacle.png');
}

function create() {
    let background = this.add.image(0, 0, 'floor');
    background.x = background.displayWidth / 2;
    background.y = background.displayHeight / 2;
    xLimit = background.displayWidth;
    yLimit = background.displayHeight;
    velocity = 500;

    player = this.physics.add.sprite(300,300, 'circle');
    player.setScale(0.4);

    cursors = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, xLimit, yLimit);

    obstacles = this.physics.add.staticGroup();
    obstacles.create(100, 100, 'obstacle');
    obstacles.create(200, 200, 'obstacle');
    obstacles.create(300, 300, 'obstacle');
    obstacles.create(400, 400, 'obstacle');
    obstacles.create(500, 500, 'obstacle');

    this.physics.add.collider(player, obstacles);
}

function update() {
    // X Movement
    if (cursors.left.isDown && player.x >= 0) {
        player.setVelocityX(- velocity); // Go left
    }
    else if (cursors.right.isDown && player.x <= xLimit) {
        player.setVelocityX( velocity); // Go right
    }
    else {
        player.setVelocityX(0); // Stop horizontal movement.
    }

    // Y Movement
    if (cursors.up.isDown && player.y >= 0) {
        player.setVelocityY(- velocity); // Go up
    }
    else if (cursors.down.isDown && player.y <= yLimit) {
        player.setVelocityY( velocity); // Go down
    }
    else {
        player.setVelocityY(0);  // Stop vertical movement
    }

    this.cameras.main.centerOn(player.x, player.y); // follow player
}


