$(document).ready(function() {	
//1 - Create a Movie object:
  function Movie() { 
	title: null;
	duration: 0;
	country: null;
	year: 0;
    playing: false;
	
//6 - Log to console when each event is fired.
//4 - Publish 'playing' event on Movie.play()
    this.play = function() {
      this.playing = true;
      console.log('Playing ' + this.title);
    },
	
//5 - Publish 'stopped' event on Movie.stop().
    this.stop = function() {
      this.playing = false;
      console.log(this.title + ' stopped');
    },
  
    this.set = function(attribute, value) {
      this[attribute] = value;
      console.log('Movie´s ' + attribute + ' seted as ' + value);
    },
  
    this.get = function(attribute) {
      return attribute + ': ' + this[attribute];
      console.log('The ' + attribute + ' is ' + this[attribute]);
    }
  }
  
//3 - Add a MovieObserver class that listens for 'playing' and “stopped” events. My better aproach so far*/

//object which has a playStatus, that playStatus has to change when an movie is played or stopped
  function MovieObserver() {
    this.playStatus = false;
  }

  MovieObserver.prototype = {	
    getStatus: function() {
      if(this.playStatus) {
        return 'A movie has been played';
	  }
	  else {
		return 'A movie has been stopped';
	  }
    },
  
    setStatus: function(Status) {
      this.playStatus = Status;
    }
  }

/*manyObservers is an observers array with its playStatus, when a specific 
function is fired, their playStatus are changed and showed in the console*/
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
  
  //all the observer´s playStatus change to playing movie and showed in the console
    playing: function() {
	  $('#btn-play').hide();
	  $('#btn-stop').show();
	  $('#div-state').text('STATE: PLAYING');
	  $('#div-state').css('background-color','#00e600');
	  
      for (var i = 0; i < this.observersArrat.length; i++) {
        this.observersArrat[i].setStatus(true)
	    console.log(this.observersArrat[i].getStatus())
      }
    },
	
  //all the observer´s playStatus change to stopped movie and showed in the console
    stopped: function() {
	  $('#btn-stop').hide();
	  $('#btn-play').show();
	  $('#div-state').text('STATE: STOPPED');
  	  $('#div-state').css('background-color','#ff0000');
	
      for (var i = 0; i < this.observersArrat.length; i++) {
        this.observersArrat[i].setStatus(false)
	    console.log(this.observersArrat[i].getStatus())
      }
    }
  }
  
//7 - Refactor Movie class as a Module keeping your previous code for reference.
/*NOTE: I searched for a possible solution, which i found it in http://stackoverflow.com/questions/26061120/refactor-javascript-class-as-a-module 
I just modify the methods and attributes of the module to extend its functionality 
over the original idea. I hope this is what you ask*/
/*
var Movie = function() { 
  var model = 
  {
    attributes : {
      title: null,
	  duration: 0,
	  country: null,
	  year: 0,
      playing: false
	}
  };
  
  model.play = function(){
    if (!model.attributes.title) {
      console.log('The movie has no title. Please, set it using the function set(title,movieTitle)');
    }
    else if (model.attributes.playing) {
      console.log('The movie is playing rigth now. Please, stop it using the function stop()');
    }
    else
    {
      model.attributes.playing = true;
      console.log('Playing ' + model.attributes.title);
    }
  }

  model.stop = function() {
    if (!model.attributes.title) {
      console.log('The movie has no title. Please, set it using the function set(title,movieTitle)');
    }
    else if (!model.attributes.playing) {
      console.log('The movie has not even started. Please, start the movie using the function play()');
    }
    else
    {
      model.attributes.playing = false;
      console.log(model.attributes.title + ' stopped');
    }
  }
  
  
  model.set = function (attribute, value) {
    if (!attribute || !value) {
      console.log('The function has not been used correctly. Please, use the function set(title,movieTitle)');
    }
    else if (model.attributes[attribute]) {
      model.attributes[attribute] = value;
      console.log('Movie´s ' + attribute + ' seted as ' + value);
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
      console.log('New attribute seted');
    }
  }

  model.get  = function (attribute) {
    if (!attribute) {
      console.log('The function has not been used correctly. Please, use the function get(movieAttribute)');
    }
    if (!model.attributes[attribute]) {
      console.log('The movie has not such attribute. Please, create one using the function set(title,movieTitle)');
    }
    else {
	  return attribute + ': ' + model.attributes[attribute];
      console.log('The ' + attribute + ' is ' + model.attributes[attribute]);
    }
  }
  return model;
};
*/

//8 - Create a DownloadableMovie that extends from Movie adding a download method. Here you will have to set the correct prototype to DownloadableMovie.
  function DownloadableMovie () {
    downloading: false;
  
    this.download = function() {
      if(!this.downloading) {
		  this.downloading = true;
		  console.log('Downloading ' + this.title);
	  }
	  else {
		  this.downloading = false;
		  console.log(this.title + ' download stopped');
	  }
    }
  }
  Movie.call(DownloadableMovie.prototype);

  //9 - Create a mixin object called Social with the methods: share(friendName) and like().
  var Social = function() {
    this.share = function(friendName) {
      console.log('Sharing ' + this.title + ' with ' + friendName);
    }
  
    this.like = function() {
      console.log(this.title + ' has a new Like');
    }
  }
//10 - Apply the mixin to Movie object and play with the console output.
  Social.call(DownloadableMovie.prototype);
  
//11 - Create an Actor class and create some actors from one of your favorite movies.
  function Actor(Name) {
    this.name = Name;
  }  

//12 - Show how you would add an array of actors to a Movie object. 
//NOTE: this is the first way than i imagine to return the whole cast using one function (i had to include it using prototype function)
  DownloadableMovie.prototype.getCast = function() {
    var castNames = 'Cast:';
	if(this.cast.length > 0) {
      this.cast.forEach(function(actor) {
	    castNames += ' ' + actor.name + '.';
      });
	}
	return castNames;
  }
  
  DownloadableMovie.prototype.addActor = function(Array, Actor) {
    Array.push(Actor);
	this.getCast();
  }

//------------------------NOTE: I applied the code into the html from here
  var newMovie = new DownloadableMovie();
  var ActorsArray = null;
  var movieText = [];
  var manyObservers = new ManyObservers();
  var Observer = new MovieObserver();
  manyObservers.addElement(Observer);
  var shareCount = 0;
  
  $(window).load(function() {
//2 - Instantiate some of your favorite movies and play with them in the console.
    newMovie.set('title','American Pie: The Reunion');
    newMovie.set('duration','115');
    newMovie.set('country','USA');
    newMovie.set('year','2013');
	
	var jim = new Actor('Jason Biggs');
    var stiffler = new Actor('Sean William Scott');
    var oz = new Actor('Chris Klein');
    var kevin = new Actor('Thomas Ian Nicholas');
    var finch = new Actor('Eddie Kayne Thomas');
    var michelle = new Actor('Alyson Hannigan');
    var vicky = new Actor('Tara Reid');
    var heather = new Actor('Mena Suvari');

	
	ActorsArray = [jim, stiffler, oz, kevin, finch, michelle, vicky, heather];
    newMovie.set('cast', ActorsArray);
	ActorsArray = null;
	
    showNewMovieData();
  });
  
  $('#btn-play').click(function() {
	manyObservers.playing();
	newMovie.play();
  });
  
  $('#btn-stop').click(function() {
	manyObservers.stopped();
	newMovie.stop();
  });
  
  $('#btn-new-movie').click(function() {
	$('.main').hide();
	$('.form').show();
  });
  
  $('#new-movie').click(function() {	  
	var title = $('#title').val();
	var duration = $('#duration').val();
	var country = $('#country').val();
	var year = $('#year').val();
	
	if(title && duration && country && year) {
	  newMovie.set('title', title);
      newMovie.set('duration',duration);
      newMovie.set('country', country);
      newMovie.set('year', year);
	  newMovie.set('playing', false);
	  newMovie.set('downloading', false);
	  newMovie.set('cast', []);
	  manyObservers.stopped();	  
	
	  $('.form').hide();
	  $('.main').show();
	  
	  showNewMovieData();
	  resetDivs();
	}
	else{
		alert('Please, fill all the form fields to insert a new movie');
		$('#title').focus();
	}
  });

  $('#btn-download').click(function() {	
	if(!newMovie.downloading) {
	  $('#div-download').text('DOWNLOADING: YES');
	  $('#btn-download').text('STOP DOWNLOAD');
	  $('#div-download').css('background-color','#00e600');
	}
	else {	  
	  $('#div-download').text('DOWNLOADING: NO');
	  $('#btn-download').text('START DOWNLOAD');
	  $('#div-download').css('background-color','#ff0000');
	}
	newMovie.download()
  });
  
  $('#btn-share').click(function() {
	var shareName = $('#txt-share').val();
	
	if(shareName) {
	  $('#div-share').text('SHARED WITH ' + shareName);
	  $('#div-share').css('background-color','#00e600');
	  $('#txt-share').val('');
	  $('#btn-share, #txt-share').css('display','none');
	  newMovie.share(shareName);
	}
	else {
	  alert('Please, ingress a friend who you can share this movie')
	  $('#txt-share').focus();
	}
  });
  
  $('#btn-like').click(function() {
	shareCount++;
	  
    if(shareCount == 1) {
      $('#div-like').text(shareCount + ' LIKE');
	}
	else {
      $('#div-like').text(shareCount + ' LIKES');
	}
	  
	newMovie.like();
	$('#div-like').css('background-color','#00e600');
  });
  
  $('#btn-new-actor').click(function() {
	var actorName = $('#txt-actor').val();
	if(actorName) {
		newMovie.addActor(newMovie.cast, new Actor(actorName));
		showNewMovieData();
		$('#txt-actor').val('');
		$('#txt-actor').focus();
	}
	else {
		alert('Please, write a name to insert a new actor to the cast');
		$('#txt-actor').focus();
	}
  });
  
  function showNewMovieData() {	
    shareCount = 0;
	$('#movie-show').empty();
	movieText = 
      '<div>' 
      + 'Loaded Movie data: <br>'
      + newMovie.get('title') + '<br>' 
      + newMovie.get('duration') + '<br>' 
      + newMovie.get('country') + '<br>'  
      + newMovie.get('year') + '<br>'
      + newMovie.getCast();
      '</div>'
    $('#movie-show').append(movieText)
	$('#movie-show').fadeIn(1500);
  }
  
  function resetDivs() {
	$('#div-download').text('DOWNLOADING: NO');
	$('#div-share').text('SHARED NO');
	$('#div-like').text('LIKES: NONE');
	$('#div-download, #div-share, #div-download, #div-like').css('background-color','#ff0000');
	$('#btn-share, #txt-share').css('display','inline');    
  }
});