                                                                                 
define('enemy', function() {
    
    var Enemy = function(eSprite) {
        this.eSprite = eSprite;
        this.eSprite.checkWorldBounds = true;
        this.hasMoved = false;
        this.count = 0;
        this.speed = 1;
        
        // Now add methods
    }

    Enemy.prototype.create = function(eSprite) {
        this.eSprite = eSprite;
        this.hasMoved = false;
    }

    Enemy.prototype.hasMoved = function() { return this.hasMoved; };
    Enemy.prototype.setMoved = function(moved) { this.hasMoved = moved; };

    Enemy.prototype.move = function (distance) {
        this.eSprite.x += distance * this.speed;
    }

    Enemy.prototype.setCount = function(count) {
        this.count = count;
    }

    Enemy.prototype.getCount = function () {
        return this.count;
    }

    Enemy.prototype.checkExit = function (x, y) {
        if (this.eSprite.x == x &&
            this.eSprite.y == y) {
            console.log("Exit!!");
        }
    }

    return Enemy;
});


