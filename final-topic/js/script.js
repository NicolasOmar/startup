$(document).ready(function() {
  $('#div-movies').append('<p>There is no registred movies yet.</p>');
  
  $('#new-movie-button').click(function() {
	$('#div-movies').text('Registred Movies');
  });
});