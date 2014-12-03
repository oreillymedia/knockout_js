function ViewModel(categories) {
	var self = this;
	
	self.categories = categories;
	
	self.availableProducts = ko.observableArray([]);
	
	self.cartItems = ko.observableArray([]);
	self.cartTotal = ko.computed(function() {
		var total = 0;
		
		for (var i = 0; i < self.cartItems().length; i++)
			total += self.cartItems()[i].price;
		
		return total;
	});
	
	self.showProducts = function(category) {
		self.availableProducts(category.items);
	};
	
	self.addItem = function(item) {
		self.cartItems.push(item);
	};
	
	self.removeItem = function(item) {
		self.cartItems.remove(item);
	};
	
	self.fadeIn = function(element) {
		$(element).hide().fadeIn('slow');
	};
	
	self.fadeOut = function(element) {
		$(element).slideUp(function() {
			$(element).remove();
		});
	};
};