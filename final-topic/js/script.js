$(document).ready(function() {
  $('#div-movies').text('There is no registred movies yet.');
  $('#first-text').focus();
  
  $('#new-movie-button').click(function() {
	changeDivs(false);
	$('#first-text').focus();
  });
  
  $('#register-button').click(function() {
	$('#div-movies').text('Registred Movies.');
	$('input:text').val('');
	$('#first-text').focus();
	changeDivs(true);
  });
  
  function changeDivs(bool) {
	if(bool) {
	  $('.div-registrer').hide();
	  $('.div-movie').show();
	}
	else {
	  $('.div-registrer').show();
	  $('.div-movie').hide();
	}
  }
});