// Add jQuery as a module
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.0.min',
    }
});

/*7 - Add a Director to a Movie. Implement the following API
  var alien = new Movie();
  var ridleyScott = new Director(‘Ridley Scott’);
  ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
  movieList.movie.set('director', ridleyScott);
  alien.get('director').speak(); //output: Ridley Scott says: 'Cast is...
*/  
require(['Movies', 'jquery'], function(Movies, $) {
  $(document).ready(function() {
	var movieList = Movies;
    var ridleyScott = movieList.newMovie.get('director');
    ridleyScott.set('name', 'Ridley Scott');
    ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
    movieList.addMovie('Alien', 120, 'USA', 1995, ridleyScott);
	loadMovieData();
	
	$('#btn-form-movie').click(function() {
	  $('.main').hide();
	  $('.form-movie').show();
    });
  
    $('#btn-form-director').click(function() {
	  $('.main').hide();
	  $('.form-director').show();
    });
  
    $('#btn-movie').click(function() {
	  var title = $('#txt-title').val();
	  var duration = $('#txt-duration').val();
	  var country = $('#txt-country').val();
	  var year = $('#txt-year').val();
	
	  if(title && duration && country && year) {
	    movieList.addMovie(title, duration, country, year, null);
		loadMovieList();
	    $('.form-movie').hide();
	    $('.form-director').show();
	  }
	  else {
	    alert('You have to fill all form fields to create a new movie');
	    $('#txt-title').focus();
	  }
    });
  
    $('#btn-director').click(function() {
	  var name = $('#txt-director').val();
	  var quote = $('#txt-quote').val();
	  var list = $('#list-movies').val();
	  
	  if(name && quote) {
	    ridleyScott.set('name', name);
	    ridleyScott.set('quotes', [quote]);
		movieList.addDirector(list, ridleyScott);
	    loadMovieData();
	  }
	  else {
	    alert('You have to fill all form fields to create a new director');
	    $('#txt-director').focus();
	  }
    });
  
    $('#btn-skip').click(function() {
	  loadMovieData();
    });
  
    $('#btn-quote').click(function () {
	  var searchMovie = $('#list-directors').val();
	  var quote = $('#txt-new-quote').val();
	
	  if(quote) {
		movieList.addQuoteDirector(searchMovie, quote)
	    loadMovieData();
	    $('#txt-new-quote').focus();
	  }
	  else {
	    alert('You have write the quote first');
	    $('#txt-new-quote').focus();
	  }
    });
	
	function loadMovieData() {
	  $('#div-movie').empty();	  
	  $('#txt-new-quote, #txt-director, #txt-quote, #txt-title,#txt-duration, #txt-country, #txt-year').val('');
	  $('.main').show();
	  $('.form-movie, .form-director').hide();
	  $('#div-movie').append(movieList.listMovies()); 
	  loadMovieList();	  
    }
	
	function loadMovieList() {
	  $('#list-movies').empty();
	  $('#list-movies').append(movieList.selectMovies());
	  $('#list-directors').empty();
	  $('#list-directors').append(movieList.selectDirector());
	}
  });
});