function Category(id, name, items) {
	this.id = id;
	this.name = name;
	this.items = items;
};

function Book(isbn, title, description, price) {
	var self = this;

	self.isbn = isbn;
	self.title = title;
	self.description = description;
	self.price = price;
	
	self.getTitle = function() {
		return self.title;
	};
	
	self.getDescription = function() {
		return self.description;
	};
};

function Movie(title, description, movie_length, price) {
	var self = this;
	
	self.title = title;
	self.description = description;
	self.movie_length = movie_length;
	self.price = price;
	
	self.getTitle = function() {
		return self.title;
	};
	
	self.getDescription = function() {
		return 'Summary: ' + self.description + '<br/>' + 
			'Movie length: ' + self.movie_length;
	};
};

function Album(artist, name, number_of_songs, price) {
	var self = this;
	
	self.artist = artist;
	self.name = name;
	self.number_of_songs = number_of_songs;
	self.price = price;
	
	self.getTitle = function() {
		return self.name;
	};
	
	self.getDescription = function() {
		return 'Artist: ' + self.artist + '<br/>' + 
			'Number of songs: ' + self.number_of_songs;
	};
};