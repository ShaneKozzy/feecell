function deckController() {
    var suits = ["spades", "diamonds", "clubs", "hearts"];
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    getDeck = function(){
    	var deck = new Array();

		for(var i = 0; i < suits.length; i++)
		{
			for(var x = 0; x < ranks.length; x++)
			{
				var card = {Value: ranks[x], Suit: suits[i]};
				deck.push(card);
			}
		}

		return deck;
    }

    shuffle = function()
	{
		var deck = getDeck();
		// for 1000 turns
		// switch the values of two random cards
		for (var i = 0; i < 1000; i++)
		{
			var location1 = Math.floor((Math.random() * deck.length));
			var location2 = Math.floor((Math.random() * deck.length));
			var tmp = deck[location1];

			deck[location1] = deck[location2];
			deck[location2] = tmp;
		}

		return deck;
	}

    return { 
        shuffle: shuffle
        
    };
}