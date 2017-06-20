define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var test = require('./test');
    var enemy = require('./enemy');
    var tower = require('./tower');
    var time = require('./time');

    // Load library/vendor modules using
    // full IDs, like:
//    var print = require('print');

    console.log(test.helloworld());
    
    console.log("Tower: ", tower.helloworld());
    console.log("Time: ", time.helloworld());
    
    var startTime = time.getTime();
    var checkTime = startTime;
    
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
    
    var creeps = [];

    function preload () {

        game.load.image('logo', '/phaser.png');
        game.load.image('entrance', 'assets/entrance-1.png');
        game.load.image('exit', 'assets/exit-1.png');
        
        game.load.image('creep', 'assets/creep-1.png');
        game.load.image('tower', 'assets/tower-1.png');
        
        game.load.tilemap('desert', 'assets/maps/tilemap-1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'assets/maps/tower-tilemap-1.png');
        
    }

    function create () {

        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);

        game.physics.startSystem(Phaser.Physics.ARCADE)
        map = game.add.tilemap('desert');
        map.addTilesetImage('Desert', 'tiles');
        layer = map.createLayer('Ground');
        layer.resizeWorld();
        
        var entranceX = 0;
        var entranceY = game.world.centerY;
        
        var entrance = game.add.sprite(entranceX, entranceY, 'entrance');
        entrance.anchor.setTo(0, 0);
        var exit = game.add.sprite(game.world.width - tileWidth, game.world.centerY, 'exit');
        exit.anchor.setTo(0, 0);
        for (i=0; i < 20; i++){
            var creepImage = game.add.sprite(entranceX, entranceY, 'creep');
            creepImage.anchor.setTo(0, 0);
            creeps.push(enemy.create(creepImage));
        }

    }
    
    function update() {
        var checkTime = time.tickTime(startTime);
        if (checkTime) {
            console.log("Tick");
            startTime = checkTime;
            
            // Move Creeps
        }
    }
    function render() {}
    
});