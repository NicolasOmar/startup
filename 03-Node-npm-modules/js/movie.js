//3 - Create the same Movie class as in the previous practice, but inside a RequireJS module.
//4 - Create a Director class inside a module and set it as a dependency on the Movie module.
define('Movie', ['Director'], function(Director) {
  function Movie() {
    this.title = '';
    this.duration = 0;
    this.country = '';
    this.year = 0;
    this.director = new Director();
    this.playing = false;
  }
	
  Movie.prototype = {
    get: function(attribute) {
      if (!this[attribute]) {
        console.log('The movie has not such attribute. Please, create one using the function set(title,movieTitle)');
      }
      else {
        return this[attribute];
      }
    },
	
    set: function(attribute, value) {
      if (!attribute){
        console.log('The attribute has not been seted correctly. Please, use the function set(title,movieTitle)');
      }
      else {
        this[attribute] = value;
        console.log('Attribute ' + attribute + ' = ' + value);
      }
    },
  
    get: function(attribute) {
      if (!this[attribute]) {
        console.log('The movie has not such attribute. Please, create one using the function set(title,movieTitle)');
      }
      else {
		return this[attribute];
      }
    }
  }
  return Movie;
});