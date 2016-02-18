var app = angular.module('movieCollection', []);

app.service('director', function() {
  var Director = function() {
    this.name = '';
    this.quotes = [];
		
	this.get = function(attribute) {
      if (!this[attribute]) {
        console.log('The director has not such attribute. Please, create one using the function set(title,movieTitle)');
      }
      else {
        return this[attribute];
      }
    },	  
	  
	this.set = function(attribute, value) {
      if (!attribute){
        console.log('The attribute has not been seted correctly. Please, use the function set(title,movieTitle)');
      }
      else {
        this[attribute] = value;
        console.log('Attribute ' + attribute + ' = ' + value);
      }
    },
	
    this.addQuote = function(quote) {
      this.quotes.push(quote);
      console.log('Quote added');
    },
	
    this.speak = function() {
      var quotesText = this.name + ' says: ';
      if(this.quotes.length > 0) {
        this.quotes.forEach(function (quote) {
          quotesText += quote + '. ';  
        });
        console.log(quotesText);
        return quotesText;
      }
      else {
        console.log('There is no registred quotes');
      }
    },
	
	this.showDirector = function() {
	  return 'Director: ' + this.name 
	    + ' - Comments: ' + this.speak();
	}
  }
  return { Director : new Director() };
});