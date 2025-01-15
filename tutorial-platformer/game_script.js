

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var scoreText;

const id_tiles = [
    [  0,  1,  2,  3,  4,  5,  6,  7,  8,  9],
    [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [ 30, 33, 32, 33, 34, 35, 36, 37, 38, 39],
    [ 40, 44, 42, 43, 44, 45, 46, 47, 48, 49],
    [ 50, 55, 52, 53, 54, 55, 56, 57, 58, 59],
    [ 60, 66, 62, 63, 64, 65, 66, 67, 68, 69],
    [ 70, 77, 72, 73, 74, 75, 76, 77, 78, 79],
    [ 80, 88, 82, 83, 84, 85, 86, 87, 88, 89],
    [ 90, 99, 92, 93, 94, 95, 96, 97, 98, 99],
    [100,101,102,103,104,105,106,107,108,109],
    [110,111,112,113,114,115,116,117,118,119],
    [120,121,122,123,124,125,126,127,128,129],
    [130,131,132,133,134,135,136,137,138,139],
    [140,141,142,143,144,145,146,147,148,149],
    [150,151,152,153,154,155,156,157,158,159],
    [160,161,162,163,164,165,166,167,168,169],
    [170,171,172,173,174,175,176,177,178,179],
    [180,181,182,183,184,185,186,187,188,189],
    [190,191,192,193,194,195,196,197,198,199],
];



const level = [
    [144,144,144,144,144,144,144,144,144,144,144,144],
    [144,144,144,144,144,144,144,144,144,144,144,144],
    [160,160,160,160,160,160,160,160,160,160,160,160],
    [160,160,160,160,160,160,160,160,160,160,160,160],
    [164,164,164,164,164,164,164,164,164,164,164,164],
    [164,164,164,164,164,164,164,164,164,164,164,164],
];

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tileset', 'assets/sprites/world_tileset.png');

    const rtn = this.load.tilemapTiledJSON('tilemap', 'assets/platformer_world.json');

}

function create ()
{
//    this.add.image(0,0, 'tileset');

    const map = this.make.tilemap({key: 'tilemap'});
    const tileset = map.addTilesetImage('platformer_world_tileset', 'tileset');

//    const tiles = map.addTilesetImage('tileset');
//    const layer = map.createLayer(0, tiles, 0, 0);
//    const level_layer = level_map.createLayer(0, tiles, 160, 0);
    map.createLayer('Background', tileset);

    map.createLayer('Water', tileset);

    map.createLayer('Platforms', tileset);

    map.createLayer('Decorations', tileset);

    /*****
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    //  Now let's create some ledges
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    //  Our player animations, turning, walking left and walking right.
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    this.physics.add.overlap(player, stars, collectStar, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);
    /*****/
}

function update ()
{
    /*****
    if (gameOver)
    {
        return;
    }

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
    /*****/
}

function collectStar (player, star)
{
    /****
    star.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0)
    {
        //  A new batch of stars to collect
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;

    }
    /*****/
}

function hitBomb (player, bomb)
{
    /*****
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
    /*****/
}

