//1 - Create a Movie object:

/*function Movie(Hashmap){
	this.hashmap = Hashmap;
}

Movie.prototype = {
	constructor:Movie,
	
	//4 - Publish "playing" event on Movie.play()
	play:function(){
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
	stop:function(){
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
	
	set:function(attr, value){
		if(attr == undefined || value == undefined)
			return "The new Movie's hasn't been used correctaly. Please, use the function set('title','movieTitle')'";
		else
		{
			this[attr] = value;
			return "New Movie's attribute seted";
		}
	},
	
	get:function(attr){
		if(this[attr] == undefined	)
			return "The movie hasn't such attribute. Please, create one using the function set()";
		else
			return "The Movie's " + attr + " is " + this[attr];
	}
}*/

/*
7 - Refactor Movie class as a Module keeping your previous code for reference.
NOTE: I searched a possible solution which i found in http://stackoverflow.com/questions/26061120/refactor-javascript-class-as-a-module, i just modify the methods and attributes of the module to extend its functionality over the original idea. I hope this is what you ask
*/
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
};

//2 - Instantiate some of your favorite movies and play with them in the console.
AmericanP = new Movie(0);
AmericanP.set("title","American Pie");
Metegol = new Movie(1);
Elements = new Movie(2);
Boruto = new Movie(3);