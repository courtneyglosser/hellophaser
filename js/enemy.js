
define(function () {
    return {
        helloworld: function () {
            return 'Hello Enemy';
        },
        
        create: function (eSprite) {
            console.log("Create Enemy");
            
            return {
                "eSprite": eSprite,
            }
        }
        
    };
});