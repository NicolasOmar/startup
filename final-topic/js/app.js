var app = angular.module('movieCollection', []);

app.service('director', function() {
  var Director = function() {
    this.name = '';
    this.quotes = [];
		
	this.get = function(attribute) {
      if (!this[attribute]) {
        console.log('The director has not such attribute. Please, create one using the function set(title,movieTitle)');
      }
      else {
        return this[attribute];
      }
    },	  
	  
	this.set = function(attribute, value) {
      if (!attribute){
        console.log('The attribute has not been seted correctly. Please, use the function set(title,movieTitle)');
      }
      else {
        this[attribute] = value;
      }
    },
	
    this.addQuote = function(quote) {
      this.quotes.push(quote);
    },
	
    this.speak = function() {
      var quotesText = '';
      if(this.quotes.length > 0) {
        this.quotes.forEach(function (quote) {
          quotesText += quote + '. ';  
        });
        return quotesText;
      }
      else {
        return 'There is no registred quotes';
      }
    },
	
	this.showDirector = function() {
	  return 'Director: ' + this.name 
	    + ' - Comments: ' + this.speak();
	}
  }
  return { Director : Director };
});

app.service('movie', ['director', function(director) {
  var Movie = function() {
	this.title = '';
    this.duration = 0;
    this.country = '';
    this.year = 0;
    this.director = new director.Director();
    this.playing = false;
	
	this.get = function(attribute) {
      if (!this[attribute]) {
        console.log('The movie has not such attribute. Please, create one using the function set(title,movieTitle)');
      }
      else {
        return this[attribute];
      }
    },	  
	  
	this.set = function(attribute, value) {
      if (!attribute){
        console.log('The attribute has not been seted correctly. Please, use the function set(title,movieTitle)');
      }
      else {
        this[attribute] = value;
      }
    }
	
	this.showMovie = function() {
	  return 'Title: ' + this.title 
	    + ' - Duration: '	+ this.duration 
	    + ' - Country: ' + this.country 
	    + ' - Year: ' + this.year;
	}
  }
  return { Movie : Movie };
}]);

app.controller('movie', ['$scope', 'movie', function($scope, movie) {	
  $scope.moviesArray = [];
  globalValidation = false;
  
  $scope.addMovie = function () {
	
	if(validateFields()) {
	  console.log($scope.titleModel);
	  var newMovie = new movie.Movie();
	  newMovie.set('title', $scope.titleModel);
	  newMovie.set('duration', $scope.durationModel);
	  newMovie.set('country', $scope.countryModel);
	  newMovie.set('year', $scope.yearModel);	
	  newMovie.director.set('name', $scope.directorModel);
	  newMovie.director.set('quotes', [$scope.quoteModel]);
	  $scope.moviesArray.push(newMovie);
	
	  clearFields();	  
	}
  }
  
  /*NOTE: NOT WORKING FUNCTION, PROBLEM SETTING $SCOPE.MODELS VALUES
  $scope.modifyMovie = function(index) {
	var movie = $scope.moviesArray[index];
	$scope.titleModel = movie.get('title');
	$scope.durationModel = movie.get('duration');
	$scope.countryModel = movie.get('country');
	$scope.yearModel = movie.get('year');
	$scope.directorModel = movie.get('director').get('name');
	$scope.quoteModel = movie.get('director').speak();
	
	//same returning values (string), only works the last $scope.quoteModel
	console.log(typeof movie.get('director').speak());
	console.log(typeof movie.get('country'));
  }*/
  
  $scope.deleteMovie = function(index) {
	var confirmDelete = confirm('You are going to delete a registred Movie. Are you sure?')
	if(confirmDelete) {
	  $scope.moviesArray.splice(index, 1);
	}
  }
  
  $scope.addComent = function(index) {
	var newComment = prompt('Add a new comment abouth the movie', '');
	$scope.moviesArray[index].director.addQuote(newComment);
  }
  
  var validateFields = function() {
	if($scope.titleModel && $scope.durationModel
		&& $scope.countryModel && $scope.yearModel
		&& $scope.directorModel && $scope.quoteModel) {
	  globalValidation = true;
	  return true;
	}
	else {
	  globalValidation = false;
	  return false;
	}
  }
  
  var clearFields = function() {
	$scope.titleModel = '';
	$scope.durationModel = '';
	$scope.countryModel = '';
	$scope.yearModel = '';
	$scope.directorModel = '';
	$scope.quoteModel = '';
  }
}]);