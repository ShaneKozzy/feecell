function deckView() {
    var numOfColumn = 8;
    render = function(deck){
    	
    	
		for(var i = 1; i <= deck.length; i++)
		{
			var card = document.createElement("div");
			var value = document.createElement("div");
			var suit = document.createElement("div");
			card.className = "card";
			value.className = "value";
			suit.className = "suit " + deck[i].Suit;

			value.innerHTML = deck[i].Value;
			card.appendChild(value);
			card.appendChild(suit);
			console.log("column-" + (i % 8));
			document.getElementById("column-" + (i % 8)).appendChild(card);
		}

    }

    return { 
        render: render
        
    };
}