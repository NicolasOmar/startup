//1 - Create a Movie object:
//NOTE: I used prototypes in the last version, but i prefer a classic object. 	 that way i made point 8
function Movie() {
	
	//4 - Publish "playing" event on Movie.play()
	this.play = function(){
		if(this.title == undefined)
			return "The movie has no title. Please, set one using the function set('title','movieTitle')";
		else if (this["playing"] == true)
			return "The movie is playing rigth now. Please, stop the movie usint the function stop()";
		else
		{
			this["playing"] = true;
			return "Playing " + this.title;
		}
	},
	
	//5 - Publish "stopped" event on Movie.stop().
	this.stop = function(){
		if(this.title == undefined)
			return "The movie has no title. Please, set one using the function set('title','movieTitle')";
		else if (this["playing"] == undefined || this["playing"] == false)
			return "The movie has not even started. Please, start the movie using the function play()";
		else
		{
			this["playing"] = false;
			return this.title + " stopped";
		}
	},
	
	this.set = function(attr, value){
		if(attr == undefined || value == undefined || value == " ")
			return "The new Movie's hasn't been used correctaly. Please, use the function set('title','movieTitle')'";
		else
		{
			this[attr] = value;
			return "New Movie's attribute seted";
		}
	},
	
	this.get = function(attr){
		if(this[attr] == undefined	)
			return "The movie hasn't such attribute. Please, create one using the function set()";
		else
			return "The Movie's " + attr + " is " + this[attr];
	}
}


//2 - Instantiate some of your favorite movies and play with them in the console.
AmericanP = new Movie();
AmericanP.set("title","American Pie: The Reunion");

//6 - Log to console when each event is fired.
console.log(AmericanP.play());
console.log(AmericanP.stop());

//3 - Add a MovieObserver class that listens for "playing" and “stopped” events.
//NOTE: I couldn't understand the point so far, i will ask for it the next monday

//7 - Refactor Movie class as a Module keeping your previous code for reference.
//NOTE: I searched for a possible solution, which i found it in http://stackoverflow.com/questions/26061120/refactor-javascript-class-as-a-module . I just modify the methods and attributes of the module to extend its functionality over the original idea. I hope this is what you ask
/*
var Movie = function () {

  var model = 
	{
		attributes :
		{
			playing : false,	
        }
	};
	
	model.set = function (attr , value) {
		if(attr == undefined || value == undefined)
			return "The function hasn't been used correctaly. Please, use the function set('title','movieTitle')'";
		else if(model.attributes[attr] != undefined)
		{
			model.attributes[attr] = value;
			return "Movie's " + attr + " value updated"
		}
		else
		{
			Object.defineProperty(model.attributes, attr, 
			{
			  value: value,
			  writable: true,
			  enumerable: true,
			  configurable: true
			});
			return "New Movie's attribute seted";
		}
    }

    model.get  = function (attr) {
        if(attr == undefined)
			return "The function hasn't been used correctaly. Please, use the function get('movieAttribute')'";
		if(model.attributes[attr] == undefined)
			return "The movie hasn't such attribute. Please, create one using the function set()";
		else
			return "The Movie's " + attr + " is " + model.attributes[attr];
    }

    model.play = function (){
		if(model.attributes.title == undefined)
			return "The movie has no title. Please, set it using the function set('title','movieTitle')";
		else if (model.attributes["playing"] == true)
			return "The movie is playing rigth now. Please, stop it using the function stop()";
		else
		{
			model.attributes["playing"] = true;
			return "Playing " + model.attributes["title"];
		}
    }

    model.stop= function(){
		if(model.attributes["playing"] == undefined)
			return "The movie has no title. Please, set it using the function set('title','movieTitle')";
		else if (model.attributes["playing"] == undefined || model.attributes["playing"] == false)
			return "The movie has not even started. Please, start the movie using the function play()";
		else
		{
			model.attributes["playing"] = false;
			return model.attributes["title"] + " stopped";
		}
    }

    return model;
};*/

//8 - Create a DownloadableMovie that extends from Movie adding a download method. Here you will have to set the correct prototype to DownloadableMovie.
function DownloadableMovie ()
{	
	this.download = function()
	{
		if(this.title == undefined)
			return "The movie has no title. Please, set one using the function set('title','movieTitle')";
		else
			return "Downloading " + this.title;
	}
}
Movie.call(DownloadableMovie.prototype);
Rocky = new DownloadableMovie();

//9 - Create a mixin object called Social with the methods: share(friendName) and like().
function Social() {
	this.share = function(friendName)
	{
		if(this.title == undefined)
			return "The movie has no title. Please, set one using the function set('title','movieTitle')";
		else if (friendName == undefined)
			return "You didn´t ingress a friend who share the movie " + this.title + ". Please, include it the next time";
		else
			return "Sharing " + this.title + " with " + friendName;
	}
	
	this.like = function()
	{
		if(this.title == undefined)
			return "The movie has no title. Please, set one using the function set('title','movieTitle')";
			return this.title + " has a new Like";
		//i don´t know if this is the objective of this function
	}
}
//10 - Apply the mixin to Movie object and play with the console output.
Social.call(Movie.prototype);
console.log(AmericanP.share("Mauricio Gomez"));
console.log(AmericanP.like());

//11 - Create an Actor class and create some actors from one of your favorite movies.
function Actor(Name){
	this.name = Name;
}
jim = new Actor("Jason Biggs");
stiffler = new Actor("Sean William Scott");
oz = new Actor("Chris Klein");
kevin = new Actor("Thomas Ian Nicholas");
finch = new Actor("Eddie Kayne Thomas");
michelle = new Actor("Alyson Hannigan");
vicky = new Actor("Tara Reid");
heather = new Actor("Mena Suvari");

//12 - Show how you would add an array of actors to a Movie object.
var ActorsArray = [jim, stiffler, oz, kevin, finch, michelle, vicky, heather];
AmericanP.set("cast", ActorsArray);
//NOTE: this is the first way than i imagine to return the whole cast using one function (i had to include it using prototype function)
Movie.prototype.getCast = function(){
	this.cast.forEach(function(actor)
	{
		console.log(actor.name);
	});
}