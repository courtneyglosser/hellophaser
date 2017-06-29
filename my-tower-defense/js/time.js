
var tickMeasure = 1000;
var totalTime = 1000 * 60 * 1; // seconds * 60 = minutes * numMinutes
var levelStartTime = new Date().getTime(); // for tracking.

define(function () {
    return {
        helloworld: function () {
            return 'Hello Time';
        },
        
        getTime: function () {
            return new Date().getTime();
        },
        
        tickTime: function (startTime) {
            var checkTime = new Date().getTime();
            if (checkTime - startTime > tickMeasure) {
                return checkTime;
            }
            else {
                return false;
            }
        },
        
        totalTime: function () {return totalTime; },
        monsterTicker: function (numMonsters) {
            return totalTime / numMonsters;
        },
        
        getLevelStartTime: function () {return levelStartTime;}
        
    };
});