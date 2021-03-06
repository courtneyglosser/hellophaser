define(
    function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var test = require('./test');
    var tower = require('./tower');
    var time = require('./time');
    var Enemy = require('./enemy');

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
    var numCreeps = 20;
    var countCreeps = 0; // How many have started their move?
    var health = 10;
    var enemyDisplay = "Enemies: " + (numCreeps - countCreeps);
    var healthDisplay = "Health: " + health;
    var enemyText, healthText;

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
        for (i=0; i < numCreeps; i++){
            var creepImage = game.add.sprite(entranceX, entranceY, 'creep');
            creepImage.anchor.setTo(0, 0);
            creeps.push(new Enemy(creepImage)); //enemy.create(creepImage));
        }

        var style = {font: "15px Arial", fill: "#ff0044", align: "left"};
        enemyText = game.add.text(50, 20, enemyDisplay, style);
        enemyText.tint = "#000";
        healthText = game.add.text(50, 40, healthDisplay, style);
        healthText.tint = "#000";
    }
   
    function update() {
        var checkTime = time.tickTime(startTime);
        if (checkTime) {
            startTime = checkTime;
            checkTime = false;
            moveCreeps();
            enemyDisplay = "Enemies: " + (numCreeps - countCreeps);
            enemyText.text = enemyDisplay;
        }

        var exitX = game.world.width - tileWidth;
        var exitY = game.world.centerY;
        checkCreeps(exitX, exitY);

        if (health <= 0) {
            console.log("Game over");
            game.destroy();
        }
    }
    function render() {}
    
    function moveCreeps() {
        
        if (countCreeps < numCreeps) { 
            var currentTime = time.getTime();
            var levelStartTime = time.getLevelStartTime();
            var monsterTick = time.monsterTicker(numCreeps);
            var releasedMonstersTime = monsterTick * countCreeps;
            var diff = currentTime - (levelStartTime + releasedMonstersTime);
           
            if (diff > monsterTick) {
                countCreeps++;
            }
        }
       
        for (var i=0; i < countCreeps; i++) {
            creeps[i].move(tileWidth);
        }
    }

    function checkCreeps(x, y) {
        for (var i=0; i < countCreeps; i++) {
            if (creeps[i].checkExit(x, y) ){
                creeps[i].destroy();
                console.log("Creep Escaped!");
                health--;
                healthDisplay = "Health: " + health;
                healthText.text = healthDisplay;
            }
        }
    }
    
});
