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
  var movieList = Movies;
  movieList.movie.set('title', 'Alien');
  movieList.movie.set('duration', 120);
  movieList.movie.set('country', 'USA');
  movieList.movie.set('year', 1995);
  var ridleyScott = movieList.movie.get('director');
  ridleyScott.set('name', 'Ridley Scott');
  ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
  movieList.movie.set('director', ridleyScott);
  movieList.addMovie();
  
  $(document).ready(function() {
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
	    movieList.movie.set('title', title);
	    movieList.movie.set('duration', duration);
	    movieList.movie.set('country', country);
	    movieList.movie.set('year', year);
	    movieList.movie.set('director', null);
	    movieList.movie.set('playing', false);
		
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
	
	  if(name && quote) {
	    ridleyScott.set('name', name);
	    ridleyScott.set('quotes', [quote]);
	    movieList.movie.set('director', ridleyScott);
		movieList.addMovie();
	    loadMovieData();
	  }
	  else {
	    alert('You have to fill all form fields to create a new director');
	    $('#txt-director').focus();
	  }
    });
  
    $('#btn-skip').click(function() {
      movieList.addMovie();
	  loadMovieData();
    });
  
    $('#btn-quote').click(function () {
	  var quote = $('#txt-new-quote').val();
	
	  if(quote) {
	    alien.get('director').addQuote(quote);
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
    }
  });
});