$(document).ready(function() {
//7 - Add a Director to a Movie. Implement the following API:  
  var alien = new Movie();
  alien.set('title', 'Alien');
  alien.set('duration', 120);
  alien.set('country', 'USA');
  alien.set('year', 1995);
  var ridleyScott = new Director('Ridley Scott');
  ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
  alien.set('director', ridleyScott);
  alien.get('director').speak();
  
  $(window).load(function() {
	loadMovieData();
  });
  
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
	  alien.set('title', title);
	  alien.set('duration', duration);
	  alien.set('country', country);
	  alien.set('year', year);
	  alien.set('director', null);
	  alien.set('playing', false);
		
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
	  director = new Director(name);
	  director.set('quotes', [quote]);
	  alien.set('director', director);
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
	var presentationText =
	  '<div class="div-data">Loaded Movie´s Data:</div>'
	  + '<div class="div-data">Title: ' + alien.get('title') + '</div>'
	  + '<div class="div-data">Duration: ' + alien.get('duration') + '</div>'
	  + '<div class="div-data">Country: ' + alien.get('country') + '</div>'
	  + '<div class="div-data">Year: ' + alien.get('year') + '</div><br>';
	  
	if(alien.director) {
	  presentationText +=  
		'<div class="div-data"> Movie´s Director Data:</div>'
		+ '<div class="div-data">Name: ' + alien.get('director').get('name') + '</div>'
		+ '<div class="div-data">Quote/s: ' + alien.get('director').speak();
		$('#div-new-quote').show();
	}
	else {
	  presentationText +=  
	  '<div class="div-data"> No Director Data:</div>';
	  $('#div-new-quote').hide();
	}

	$('#div-movie').append(presentationText);
  }
});