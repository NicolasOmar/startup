function Director(Name) {
//6 - Add name:string, a quotes:array properties, and a speak() method to Director; calling speak() will return director’s quotes.
  this.name = Name;
  this.quotes = [];
	
  this.speak = function() {
    var quotesText = '';
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
  
  this.set = function(attribute, value) {
    if (!attribute){
      console.log('The attribute has not been seted correctly. Please, use the function set(title,movieTitle)');
    }
    else {
      this[attribute] = value;
      console.log('Attribute ' + attribute + ' = ' + value);
    }
  },
  
  this.get = function(attribute) {
    if (!this[attribute]) {
      console.log('The movie has not such attribute. Please, create one using the function set(title,movieTitle)');
    }
    else {
      return this[attribute];
    }
  },
  
  this.addQuote = function(quote) {
	  this.quotes.push(quote);
	  console.log('Quote added');
  }
}
//4 - Create a Director class inside a module and set it as a dependency on the Movie module. Tip: use require.
module.exports = Director;