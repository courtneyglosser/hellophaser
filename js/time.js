
var tickMeasure = 1000;

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
        }
    };
});