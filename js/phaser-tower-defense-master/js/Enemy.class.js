var Enemy = function(x, y, anim, animLength) {
    console.log("Creating a new enemy", x, y);
    this.enemy = game.add.sprite(path[0].x * tileSquare, path[0].y * tileSquare, anim);
    
    this.enemy.animations.add('walk');
    this.enemy.animations.play('walk', animLength, true);
    this.enemy.anchor.setTo(0.5, 0.5);
    this.enemy.speed = 1;
    this.enemy.speedX = 0;
    this.enemy.speedY = 0;
    this.enemy.next_positX = 0;
    this.enemy.next_positY = 0;
    this.enemy.curTile = 0
    enemys.add(this.enemy);
//    Enemy.prototype.nextTile(this.enemy);
//    Enemy.prototype.moveElmt(this.enemy);

}

var countTiles = 0;

Enemy.prototype.moveElmt = function(enemy) {

    enemy.x += enemy.speedX;
    enemy.y += enemy.speedY;
    
    Enemy.prototype.nextTile(enemy);
    
    if (enemy.speedX > 0 && enemy.x >= enemy.next_positX) {
        enemy.x = enemy.next_positX;
        enemy.curTile++;
    }
    else if (enemy.speedX < 0 && enemy.x <= enemy.next_positX) {
        enemy.x = enemy.next_positX;
        enemy.curTile++;
    }
    else if (enemy.speedY > 0 && enemy.y >= enemy.next_positY) {
        enemy.y = enemy.next_positY;
        enemy.curTile++;
    }
    else if (enemy.speedY < 0 && enemy.y <= enemy.next_positY) {
        enemy.y = enemy.next_positY;
        enemy.curTile++;
    }

}
Enemy.prototype.nextTile = function(enemy) {
    if (countTiles < 5) {
        console.log("NextTile for enemy: ", enemy.curTile);
    }
    var nextTile = enemy.curTile +1;
    if (path[nextTile]) {
        if (countTiles < 5) {
            console.log("Got a next tile in path", path[nextTile]);
        }
        enemy.next_positX = parseInt(path[nextTile].x * tileSquare);
        enemy.next_positY = parseInt(path[nextTile].y * tileSquare);
        
        if (enemy.next_positX > enemy.x) {
            enemy.speedX = enemy.speed;
            enemy.angle = 0;
        } else if (enemy.next_positX < enemy.x) {
            enemy.speedX = -enemy.speed;
            enemy.angle = 180;
        } else {
            enemy.speedX = 0;
        }
        // on check le sens haut/bas
        if (enemy.next_positY > enemy.y) {
            enemy.speedY = enemy.speed;
            enemy.angle = 90;
        } else if (enemy.next_positY < enemy.y) {
            enemy.speedY = -enemy.speed;
            enemy.angle = -90;
        } else {
            enemy.speedY = 0;
        }
    }
    else {
        if (countTiles < 5) {
            console.log("No next tile in path", enemy.curTile);
        }
        enemy.kill();
    }
    countTiles++;
}
