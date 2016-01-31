$(document).ready(function () {
  $( window ).load(function() {
    //5 - When the page has finished loading the section must fade in.  
    $('.hidden-content').fadeIn(1500);
    //6 - Add a textbox with the class 'alias', and put the cursor inside it right after the section fades in.
    $('.content-section').append('<input type="text" class="alias" />')
    $('.alias').focus();
  });  
  
  $('#point-7').click(function () {  
    //7 - Attach an event to the created button which calls a function that gets a response from http://bootcamp.dsupport2000.com/Nicolas
    $.ajax({
      type: 'GET',
      url: 'http://bootcamp.dsupport2000.com/Nicolas',
      contentType: 'text/plain',
      xhrFields: {
        withCredentials: false
      },
      //8 - Write the response to the section element.
      success: function(request) {
        //10 - Take some free air and then create a function to highlight your name in the server response content. Call it right after setting the response inside the div.
        var greetingArray = request.response.greeting.split(' ');
        var text =  greetingArray[0] + ' <div id="highName">' + greetingArray[1] + '</div>. ' + request.response.Welcome + '. ' + request.response.Date  + '.';
        $('.hidden-content > h2').empty();
        $('.hidden-content > h2').append(text);
        $('#highName').css({
			'background-color': 'blue',
            'color': 'white',
            'display': 'inline'});
      },
      //9 - Show section content in red when a server error occurs.
      error: function() {
        $('.hidden-content > h2').empty();
        $('.hidden-content > h2').text('ERROR');
        $('.hidden-content > h2').css({
            'background-color': 'red',
            'color': 'white',
            'display': 'inline'});
      }
    });
  });
  
  /*
  11 - AJAX: get the response from https://api.spotify.com/v1/search with parameters data 'q = 'Rolling Stones', type = 'album''
  First log the service response in Chrome's console to analyze data (see provided link on Chrome console), then display albums 
  inside another section in the right side of the screen. The article element must be used to contain the album data. For each
  album show: name, type, image, release_date, and a link to spotify for that album.*/
  $('#btn-spotify1').click(function() {
    $('.art-spotify').empty();
	$('.art-spotify').fadeOut(500);
    $.ajax({
	  url: 'https://api.spotify.com/v1/search',
	  type: 'GET',
	  data: { 'q': 'Rolling Stones', 'type': 'album' },
        dataType: 'json',
        success: function (respuesta) 
        {
          $.each(respuesta, function(index, element) {
            $.each(element.items, function(index, item) {
              var album = '<div class="album"> Name: ' + item.name + '<br>Type: ' + item.type + '<br>Album Cover<br><img src=' + item.images[0].url + ' /><br><a href=' + item.external_urls.spotify + '>Listen it in Spotify</href></div>';
              $('.art-spotify').append(album)
			  $('.art-spotify').fadeIn(1500);
			})
          })
        }
    });
  });
  
  //12 - Add an input type='text', and reuse the code for exercise 11, so the user can perform search for any artist albums.
  $('#btn-spotify2').click(function() {	
    var artist = $('#txt-spotify').val();
    if(artist)
    {
      $('#txt-spotify').val('');
      $.ajax( {
        url: 'https://api.spotify.com/v1/search',
        type: 'get',
        data: { 'q': artist, 'type': 'album' },
        dataType: 'json',
        success: function (respuesta) {
          $('.art-spotify').text('');
          $.each(respuesta, function(index, element) {
            $.each(element.items, function(index, item) {
              var album = '<div class="album"> Name: ' + item.name + '<br>Type: ' + item.type + '<br>Album Cover<br><img src=' + item.images[0].url + ' /><br><a href=' +   item.external_urls.spotify + '>Listen it in Spotify</href></div>';
              $('.art-spotify').append(album);
			  $('.art-spotify').fadeIn(1500);
		    })
          })
        }
      });
      $('#txt-spotify').focus();
    }
    else
	{
      alert('Please, write the artist name to search its albums in spotify');
      $('#txt-spotify').focus();
	}
  });
});