                                                                                 
define('enemy', function() {
    
    var Enemy = function(eSprite) {
        this.eSprite = eSprite;
        this.eSprite.checkWorldBounds = true;
        this.hasMoved = false;
        this.count = 0;
        this.speed = 1;
        
        // Now add methods
        this.create = function(eSprite) {
            this.eSprite = eSprite;
            this.hasMoved = false;
        }
        
        this.hasMoved = function() {
            return this.hasMoved;
        };
        
        this.setMoved = function(moved) {
            this.hasMoved = moved;
        };
    
        this.move = function (distance) {
            console.log("Moving!");
            this.eSprite.x += distance * this.speed;
        }
        
        this.setCount = function(count) {
            this.count = count;
        }
        this.getCount = function () {
            return this.count;
        }
    }
    
    return Enemy;
});

