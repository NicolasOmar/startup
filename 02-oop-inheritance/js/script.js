//1 - Create a Movie object:
function Movie() {  
  playing: false;
  
  //4 - Publish 'playing' event on Movie.play()
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

//2 - Instantiate some of your favorite movies and play with them in the console.
var AmericanP = new Movie();
AmericanP.set('title','American Pie: The Reunion');

//6 - Log to console when each event is fired.
console.log(AmericanP.play());
console.log(AmericanP.stop());

//3 - Add a MovieObserver class that listens for 'playing' and “stopped” events.
/*NOTE: I learned about the Observer Pattern (it was difficult haha) and
my problem is i don´t know how to include the play event in the playing function 
to fire the answer (so far, i mocked a answer, but i want to do a better aproach)*/

//object which has a status, that status has to change when an movie is played or stopped
function MovieObserver() {
  this.status = 'nothing';
}

MovieObserver.prototype = {	
  getStatus: function() {
    return this.status;
  },
  
  setStatus: function(Status) {
    this.status = Status;
  }
}

/*manyObservers is an observers array with its status, when a specific 
function is fired, their status are changed and showed in the console*/
ManyObservers = function() {
    this.observersArrat = [];
}

ManyObservers.prototype = {	
  //add element in the observers array
  addElement: function(Observer) {
    this.observersArrat.push(Observer);
  },

  //delete element from the observers
  delElement: function(Observer) {
    for (var i = 0; i < this.observersArrat.length; i++) {
      if (this.observersArrat[i] === Observer) {
        this.observersArrat.splice(i, 1);
      return;
      }
    }        
  },
  
  //all the observer´s status change to playing movie and showed in the console
  playing: function() {
    for (var i = 0; i < this.observersArrat.length; i++) {
      this.observersArrat[i].setStatus('playing movie')
	  console.log(this.observersArrat[i].getStatus())
    }
  },
	
  //all the observer´s status change to stopped movie and showed in the console
  stopped: function() {
    for (var i = 0; i < this.observersArrat.length; i++) {
      this.observersArrat[i].setStatus('movie stopped')
	  console.log(this.observersArrat[i].getStatus())
    }
  }
}

var manyObservers = new ManyObservers();
var Observer = new MovieObserver();
manyObservers.addElement(Observer);
manyObservers.addElement(Observer);
manyObservers.addElement(Observer);
manyObservers.addElement(Observer);
manyObservers.playing();
manyObservers.stopped();

//7 - Refactor Movie class as a Module keeping your previous code for reference.
/*NOTE: I searched for a possible solution, which i found it in
 http://stackoverflow.com/questions/26061120/refactor-javascript-class-as-a-module 
I just modify the methods and attributes of the module to extend its functionality 
over the original idea. I hope this is what you ask*/
/*
var Movie = function () { 
  var model = 
  {
    attributes : {
      playing : false,  
	}
  };
  
  model.set = function (attribute, value) {
    if (!attribute || !value) {
      return 'The function has not been used correctly. Please, use the function set(title,movieTitle)';
    }
    else if (model.attributes[attribute]) {
      model.attributes[attribute] = value;
      return 'Movie ' + attribute + ' value updated';
    }
    else
    {
      Object.defineProperty(model.attributes, attribute, 
      {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
      });
      return 'New attribute seted';
    }
  }

    model.get  = function (attribute) {
        if (!attribute) {
      return 'The function has not been used correctly. Please, use the function get(movieAttribute)';
    }
    if (!model.attributes[attribute]) {
      return 'The movie has not such attribute. Please, create one using the function set(title,movieTitle)';
    }
    else {
      return 'The ' + attribute + ' is ' + model.attributes[attribute];
    }
  }

    model.play = function (){
    if (!model.attributes.title) {
      return 'The movie has no title. Please, set it using the function set(title,movieTitle)';
    }
    else if (model.attributes['playing']) {
      return 'The movie is playing rigth now. Please, stop it using the function stop()';
    }
    else
    {
      model.attributes['playing'] = true;
      return 'Playing ' + model.attributes['title'];
    }
  }

    model.stop = function() {
    if (!model.attributes['title']) {
      return 'The movie has no title. Please, set it using the function set(title,movieTitle)';
    }
    else if (!model.attributes['playing']) {
      return 'The movie has not even started. Please, start the movie using the function play()';
    }
    else
    {
      model.attributes['playing'] = false;
      return model.attributes['title'] + ' stopped';
    }
  }
  
  return model;
};*/

//8 - Create a DownloadableMovie that extends from Movie adding a download method. Here you will have to set the correct prototype to DownloadableMovie.
function DownloadableMovie () {  
  this.download = function()
  {
    if (!this.title) {
		return 'The movie has no title. Please, set one using the function set(title,movieTitle)';
	}
    else {
		return 'Downloading ' + this.title;
	}
  }
}
Movie.call(DownloadableMovie.prototype);
var Rocky = new DownloadableMovie();

//9 - Create a mixin object called Social with the methods: share(friendName) and like().
function Social() {
  this.share = function(friendName)
  {
    if (!this.title) {
      return 'The movie has no title. Please, set one using the function set(title,movieTitle)';
    }
    else if (!friendName) {
      return 'You didn´t ingress a friend who share the movie ' + this.title + '. Please, include it the next time';
    }
    else {
      return 'Sharing ' + this.title + ' with ' + friendName;
    }
  }
  
  this.like = function()
  {
    if (!this.title) {
      return 'The movie has no title. Please, set one using the function set(title,movieTitle)';
    }
    else {
      return this.title + ' has a new Like';
    }
    //i don´t know if this is the objective of this function
  }
}
//10 - Apply the mixin to Movie object and play with the console output.
Social.call(Movie.prototype);
console.log(AmericanP.share('Mauricio Gomez'));
console.log(AmericanP.like());

//11 - Create an Actor class and create some actors from one of your favorite movies.
function Actor(Name) {
  this.name = Name;
}
var jim = new Actor('Jason Biggs');
var stiffler = new Actor('Sean William Scott');
var oz = new Actor('Chris Klein');
var kevin = new Actor('Thomas Ian Nicholas');
var finch = new Actor('Eddie Kayne Thomas');
var michelle = new Actor('Alyson Hannigan');
var vicky = new Actor('Tara Reid');
var heather = new Actor('Mena Suvari');

//12 - Show how you would add an array of actors to a Movie object.
var ActorsArray = [jim, stiffler, oz, kevin, finch, michelle, vicky, heather];
AmericanP.set('cast', ActorsArray);
//NOTE: this is the first way than i imagine to return the whole cast using one function (i had to include it using prototype function)
Movie.prototype.getCast = function() {
  this.cast.forEach(function(actor) {
    console.log(actor.name);
  });
}