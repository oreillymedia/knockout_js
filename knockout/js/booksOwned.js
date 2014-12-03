ko.observableArray.fn.booksOwned = function(property, value) {
	return ko.pureComputed(function() {
		var allItems = this();
		var matchingItems = [];
		
		for (var i = 0; i < allItems.length; i++) {
            var current = allItems[i];
            if (ko.unwrap(current[property]) === value)
                matchingItems.push(current);
        }
		
        return matchingItems;
	}, this);
};