define('Movies', ['Movie'], function(Movie) {
  function Movies() {
	this.movieArray = [];
	this.movie = Movie;
	
	this.addMovie = function() {
	  this.movieArray.push(this.movie);
	  this.movie = Movie;
	  console.log('New Movie added to the list');
	}
	  
	this.deleteMovie = function(thisMovie) {
	  var name = thisMovie.get('title');
      this.movieArray.forEach(function (movie, index, object) {
		var checkName = movie.get('title');
        if(name == checkName)
		  object.splice(index, 1);
	  });
	}
	
	this.listMovies = function() {
	  var text = '<div class="div-data">Loaded Movie´s Data:</div>';
	  this.movieArray.forEach(function(movieObject) {
		text += 		
	    '<div class="div-data">Title: ' + movieObject.get('title') + '</div>'
	    + '<div class="div-data">Duration: ' + movieObject.get('duration') + '</div>'
	    + '<div class="div-data">Country: ' + movieObject.get('country') + '</div>'
	    + '<div class="div-data">Year: ' + movieObject.get('year') + '</div><br>';
		
		if(movieObject.get('director').get('name')) {
		  text += 
			'<div>Director Data:' + '</div>'
			+ '<div>Name: ' + movieObject.get('director').get('name') + '</div>'
			+ '<div>' + movieObject.get('director').speak() + '</div><br>'
		}
	  });
	  return text;
	}
	
	/*this.updateMovie = function(thisMovie) {
	  var name = thisMovie.get('title');
      this.movieArray.forEach(function (movie, index, object) {
		var checkName = movie.get('title');
        if(name == checkName)
		  object.splice(index, 1);
	  });
	}*/
  }
  return new Movies();
});