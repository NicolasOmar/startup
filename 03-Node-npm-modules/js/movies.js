(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
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

},{"./director":1}]},{},[2]);
