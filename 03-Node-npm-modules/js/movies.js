define('Movies', ['Movie'], function(Movie) {
  function Movies() {
	this.movieArray = [];
	this.newMovie = new Movie();
  }
  
  Movies.prototype = {
	  
	addMovie: function(title, duration, country, year, director) {	  
	  this.newMovie.set('title', title);
	  this.newMovie.set('duration', duration);
	  this.newMovie.set('country', country);
	  this.newMovie.set('year', year);
	  if(director)
		this.newMovie.set('director', director);
	  this.movieArray.push(this.newMovie);
	  this.newMovie = new Movie();
	  console.log('New Movie added to the list');
	},
	  
	/*NOTE: IN PROGRESS
	this.deleteMovie = function(thisMovie) {
	  var name = thisMovie.get('title');
      this.movieArray.forEach(function (movie, index, object) {
		var checkName = movie.get('title');
        if(name == checkName)
		  object.splice(index, 1);
	  });
	}*/
	
	listMovies: function() {
	  var text = '<div class="div-data">Loaded Movie´s Data:</div>';
	  this.movieArray.forEach(function(movieObject) {
		text += 		
	    '<div class="div-data">Title: ' + movieObject.get('title') + '</div>'
	    + '<div class="div-data">Duration: ' + movieObject.get('duration') + '</div>'
	    + '<div class="div-data">Country: ' + movieObject.get('country') + '</div>'
	    + '<div class="div-data">Year: ' + movieObject.get('year') + '</div><br>';
		
		if(movieObject.get('director').get('quotes').length > 0) {
		  text += 
			'<div>Director Data:</div>'
			+ '<div>Name: ' + movieObject.get('director').get('name') + '</div>'
			+ '<div>' + movieObject.get('director').speak() + '</div><br>'
		}
		else {
		  text +=
		  '<div>NO Director</div>'
		}
	  });
	  return text;
	},
	
	selectMovies: function() {
	  var text = '';
	  this.movieArray.forEach(function(movieObject) {
		text += '<option>' + movieObject.get('title') + '</option>';
	  });
	  return text;
	},
	
	selectDirector: function() {
	  var text = '';
	  this.movieArray.forEach(function(movieObject) {
		text += '<option>' + movieObject.get('title') + '</option>';
	  });
	  return text;
	},
	
	//NOTE: IN PROGRESS
	addDirector: function(searchText, newDirector) {
	  for(var I = 0; I < this.movieArray.length; I++) {
		var movieDirector = this.movieArray[I].get('title');
		
		console.log(searchText + ' - ' + movieDirector);
		if(movieDirector == searchText) {
		    this.movieArray[I].set('director', newDirector);
		}		
	  }
	},
	
	addQuoteDirector: function(searchText, quoteText) {
	  for(var I = 0; I < this.movieArray.length; I++) {
		var movieDirector = this.movieArray[I].get('title');
		
		if(movieDirector == searchText) {
		    this.movieArray[I].get('director').addQuote(quoteText);
		}
	  }
	}
  }
  return new Movies();
});