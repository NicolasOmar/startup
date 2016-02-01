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
  /*
  NOTE: I´m stucked in the last code line. So far, i can't call the function speak() in the way you shown me, the console throws me "Uncaught TypeError: Cannot read property 'speak' of undefined"
    alien.get('director').speak(); //output: Ridley Scott says: 'Cast is...'
  See this alternative function
    alien.director.speak();
  */
  
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
		
      loadMovieData();
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
	}
	else {
		alert('You have to fill all form fields to create a new director');
		$('#txt-director').focus();
	}
  });
  
  function loadMovieData() {
	  $('#div-movie').empty();
	  var presentationText =
	  'Loaded Movie´s Data:' + '<br>'
	  + alien.get('title') + '<br>'
	  + alien.get('duration') + '<br>'
	  + alien.get('country') + '<br>'
	  + alien.get('year')  + '<br>'
	  $('#div-movie').append(presentationText);
	  
	  $('.main').show();
      $('.form-movie, .form-director').hide();
  }
});