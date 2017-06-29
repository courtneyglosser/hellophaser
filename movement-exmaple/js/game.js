define(
    function (require) {

        console.log("Loaded game.js");


    // Load any app-specific modules
    // with a relative require call,
    // like:
    var test = require('./test');
/**
    var tower = require('./tower');
    var time = require('./time');
    var Enemy = require('./enemy');

    console.log("Tower: ", tower.helloworld());
    console.log("Time: ", time.helloworld());
/**/
    console.log(test.helloworld());
    
    var tileWidth = 32;
    var tileHeight = 32;
    
    // Initialize Game 
    var gameOpts = {
        preload: preload,
        create: create,
        update: update,
        render: render
    };
 
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', gameOpts);
   
    
    var map, layer;
    var speed = 4;
    var creep;
    var autoCreep;

    function preload () {

        game.load.image('entrance', 'assets/entrance-1.png');
        game.load.image('exit', 'assets/exit-1.png');
        
        game.load.image('creep', 'assets/creep-1.png');
        game.load.image('tower', 'assets/tower-1.png');
        
        game.load.tilemap('desert', 'assets/maps/tilemap-1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'assets/maps/tower-tilemap-1.png');
    }

    function create () {

        game.physics.startSystem(Phaser.Physics.ARCADE)
        map = game.add.tilemap('desert');
        map.addTilesetImage('Desert', 'tiles');
        layer = map.createLayer('Ground');
        layer.resizeWorld();
        
        var entranceX = 0;
        var entranceY = game.world.centerY;
        var exitX = game.world.width - tileWidth;
        var exitY = game.world.centerY;
        
        var entrance = game.add.sprite(entranceX, entranceY, 'entrance');
        entrance.anchor.setTo(0, 0);
        var exit = game.add.sprite(exitX, exitY, 'exit');
        exit.anchor.setTo(0, 0);

        creep = game.add.sprite(entranceX, entranceY, 'creep');
        creep.anchor.setTo(0, 0);

        autoCreep = game.add.sprite(entranceX, entranceY, 'creep');
        autoCreep.anchor.setTo(0, 0);
        
    }
   
    function update() {
        checkUserInput();
        moveCreep();
    }

    function render() {}
    

    function checkUserInput() {
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) ||
            game.input.keyboard.isDown(Phaser.Keyboard.A))
        {
            creep.x -= speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) ||
            game.input.keyboard.isDown(Phaser.Keyboard.D))
        {
            creep.x += speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP) ||
            game.input.keyboard.isDown(Phaser.Keyboard.W))
        {
            creep.y -= speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) ||
            game.input.keyboard.isDown(Phaser.Keyboard.S))
        {
            creep.y += speed;
        }
        else
        {
        }
    }

    function moveCreep() {
        autoCreep.x += speed;
    }
});
