var Enemy = function(x, y, anim, animLength) {
    console.log("Creating a new enemy", x, y);
    this.enemy = game.add.sprite(tileSquare, tileSquare, anim);
    
    this.enemy.animations.add('walk');
    this.enemy.animations.play('walk', animLength, true);
    this.enemy.anchor.setTo(0.5, 0.5);
    this.enemy.speed = .5;
    this.enemy.speedX = 0;
    this.enemy.speedY = 0;
    this.enemy.hitPoints = 5;
    this.enemy.next_positX = 0;
    this.enemy.next_positY = 0;
    this.enemy.curTile = 0
    enemys.add(this.enemy);

}

var countTiles = 0;

Enemy.prototype.moveElmt = function(enemy) {
    if (enemy) {
        // ASSERT:  Catching race condition where enemy is destroyed, but
        //  Async move call doesn't know that.
        if (enemy.speedX == 0) {
            enemy.speedX = enemy.speed;
            enemy.x += enemy.speedX;
        }

        if (enemy.x > game.width) {
            enemy.destroy();
        }
        else {
            console.log("x < width", enemy.x, game.width);
        }
    }
}

