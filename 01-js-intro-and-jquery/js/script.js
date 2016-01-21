$(document).ready(function () {
  $( window ).load(function() {
	$(".hidden").fadeIn(1500);
	$(".alias").focus();
  });	
  
  $("#point-7").click(function () {	
	$.ajax({
	  type: 'GET',
	  url: 'http://bootcamp.dsupport2000.com/Nicolas',
	  contentType: 'text/plain',
	  xhrFields: {
		withCredentials: false
	  },
	  success: function(request) {
		var greetingArray = request.response.greeting.split(" ");
		var text =  greetingArray[0] + " <div id='highName'>" + greetingArray[1] + "</div>. " + request.response.Welcome + ". " + request.response.Date  + ".";
		$(".hidden > h2").empty();
		$(".hidden > h2").append(text);
		$("#highName").css({
						"background-color":"blue",
						"color":"white",
						"display":"inline"});
	  },
	  error: function() {
		$(".hidden > h2").empty();
		$(".hidden > h2").text("ERROR");
		$("#highName").css({
						"background-color":"red",
						"color":"white",
						"display":"inline"});
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