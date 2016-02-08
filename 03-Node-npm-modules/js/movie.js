//3 - Create the same Movie class as in the previous practice, but inside a RequireJS module.
//4 - Create a Director class inside a module and set it as a dependency on the Movie module.
define('Movie', ['Director'], function(Director) {
  function Movie() {
    this.title = null;
    this.duration = 0;
    this.country = null;
    this.year = 0;
    this.director = Director;
    this.playing = false;
  
    this.get = function(attribute) {
      if (!this[attribute]) {
        console.log('The movie has not such attribute. Please, create one using the function set(title,movieTitle)');
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
  
    this.get = function(attribute) {
      if (!this[attribute]) {
        console.log('The movie has not such attribute. Please, create one using the function set(title,movieTitle)');
      }
      else {
		return this[attribute];
      }
    }
    this.play = function() {
      if (!this.title) {
      console.log('The movie has no title. Please, set one using the function set(title,movieTitle)');
      }
      else if (this.playing) {
        console.log('The movie is playing rigth now. Please, stop the movie usint the function stop()');
      }
      else {
        this.playing = true;
        console.log('Playing ' + this.title);
      }
    },
  
    this.stop = function() {
      if (!this.title) {
        console.log('The movie has no title. Please, set one using the function set(title,movieTitle)');
      }
      else if (!this['playing']) {
        console.log('The movie has not even started. Please, start the movie using the function play()');
      }
      else {
        this.playing = false;
        console.log(this.title + ' stopped');
      }
    }
  }
  return new Movie();
});