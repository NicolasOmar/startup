function Movie() {
  this.title = null;
  this.duration = 0;
  this.country = null;
  this.year = 0;
  this.director = require('./director');
  this.playing = false;
}

Movie.prototype = {
  play: function() {
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
  
  stop: function() {
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
//3 - Create the same Movie class as in the previous practice, but inside a CommonJS module. Tip: use module.exports.
module.exports = Movie;