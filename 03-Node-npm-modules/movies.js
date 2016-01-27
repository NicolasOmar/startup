(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//4 - Create a Director class inside a module and set it as a dependency on the Movie module. Tip: use require.
var Director = function() {
	name:'name';
	oscars: 15;
	
}

module.exports = Director;
},{}],2:[function(require,module,exports){
//3 - Create the same Movie class as in the previous practice, but inside a CommonJS module. Tip: use module.exports.
//4 - Create a Director class inside a module and set it as a dependency on the Movie module
var Director = require('./director');

var Movie = function() {  
  playing: false;
  
  this.play = function() {
    if (!this.title) {
      return 'The movie has no title. Please, set one using the function set(title,movieTitle)';
    }
    else if (this.playing) {
      return 'The movie is playing rigth now. Please, stop the movie usint the function stop()';
    }
    else {
      this.playing = true;
      return 'Playing ' + this.title;
    }
  },
  
  //5 - Publish 'stopped' event on Movie.stop().
  this.stop = function() {
    if (!this.title) {
      return 'The movie has no title. Please, set one using the function set(title,movieTitle)';
    }
    else if (!this['playing']) {
      return 'The movie has not even started. Please, start the movie using the function play()';
    }
    else {
      this.playing = false;
      return this.title + ' stopped';
    }
  },
  
  this.set = function(attribute, value) {
    if (!attribute){
      return 'The attribute has not been seted correctly. Please, use the function set(title,movieTitle)';
    }
    else {
      this[attribute] = value;
      return 'New attribute seted';
    }
  },
  
  this.get = function(attribute) {
    if (!this[attribute]) {
      return 'The movie has not such attribute. Please, create one using the function set(title,movieTitle)';
    }
    else {
      return 'The ' + attribute + ' is ' + this[attribute];
    }
  }
}

module.exports = Movie;
},{"./director":1}]},{},[2]);
