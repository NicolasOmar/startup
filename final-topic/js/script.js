$(document).ready(function() {
  $('#div-movies').text('There is no registred movies yet.');
  changeDivs(true);
  
  $('#new-movie-button').click(function() {
	changeDivs(false);
  });
  
  $('#register-button').click(function() {
	if(globalValidation) {
	  $('#div-movies').text('Registred Movies.');
	  $('input:text').val('');
	  $('input:text').css('background-color','#ffffff');
	  changeDivs(true);
	}
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
	$('#title-text').focus();
  };
});