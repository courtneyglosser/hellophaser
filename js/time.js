
define(function () {
    return {
        helloworld: function () {
            return 'Hello Time';
        },
        
        getTime: function () {
            return new Date().getTime();
        }
    };
});