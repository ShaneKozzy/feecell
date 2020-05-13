function deckManager() {
    var myVar = 1; 
    return { 
        getVar: function() {
            return myVar;
        },
        shuffle: function(v) {
            console.log("shuffle");
        }
    };
}