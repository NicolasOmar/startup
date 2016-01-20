$(document).ready(function () {
  $( window ).load(function() {
	$(".hidden").fadeIn(1500);
	$(".alias").focus();
  });	
    
/*
	i'm having problems with point 7 for now, the console throw me this error:
	Nicolas?callback=jQuery112006777946413494647_1453313942252&_=1453313942253:1 Uncaught SyntaxError: Unexpected token :
	*/
  $("#point-7").click(function () {	
    $.ajax({
		type:"get",
		url: "http://bootcamp.dsupport2000.com/Nicolas",
	 
		contentType: 'application/json;charset=utf-8',
		dataType: "jsonp",
		crossDomain:true,
		jsonCallback: 'json_callback',
		
		success: function( response ) { console.log( response ); },
		error: function(){
			console.log( "Error, Try again with other idea" )
			$(".hidden").css("background-color","red")
			$(".hidden > h2").css("color","white")
			}
	});
  });
  
  $("#btn-spotify1").click(function() {
	  $("#art-spotify").empty();
	  $.ajax(
      {
  	    url: 'https://api.spotify.com/v1/search',
	    type: 'GET',
	    data: { "q": 'Rolling Stones', "type": 'album' },
	    dataType: 'json',
	    success: function (respuesta) 
	    {
	      $.each(respuesta, function(index, element)
	      {
		    $.each(element.items, function(index, item)
		    {
		  	  var album = '<div class="album"> Name: ' + item.name + "<br>Type: " + item.type + "<br>Album Cover<br><img src='" + item.images[0].url + "' /><br><a href='" + item.external_urls.spotify + "'>Listen it in Spotify</href></div>";
			  $("#art-spotify").append(album)
		    })
	      })
	    }
      });
    });
  
  $("#btn-spotify2").click(function() {
    var artist = $("#txt-spotify").val();
	if(artist != "")
	{
	  $("#txt-spotify").val("");
	  $("#art-spotify").empty();
	  $.ajax(
	  {
		url: 'https://api.spotify.com/v1/search',
	    type: 'get',
	    data: { "q": artist, "type": 'album' },
	    dataType: 'json',
	    success: function (respuesta) 
		{
		  $("#art-spotify").text("");
		  $.each(respuesta, function(index, element)
		  {
			$.each(element.items, function(index, item)
			{
			  console.log(item);
			  var album = '<div class="album"> Name: ' + item.name + "<br>Type: " + item.type + "<br>Album Cover<br><img src='" + item.images[0].url + "' /><br><a href='" + item.external_urls.spotify + "'>Listen it in Spotify</href></div>";
			  $("#art-spotify").append(album);
			})
		  })
	    }
	  });
	  $("#txt-spotify").focus();
	}
	else
	{
	  alert("Please, write the artist name to search its albums in spotify");
      $("#txt-spotify").focus(); }
  });
  
});