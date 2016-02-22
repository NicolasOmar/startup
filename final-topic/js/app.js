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
  
  $scope.modifyMovie = function(index) {
	changeDivs(true);
	
	var movie = $scope.moviesArray[index];
	$scope.titleModel = movie.get('title');
	$scope.durationModel = movie.get('duration');
	$scope.countryModel = movie.get('country');
	$scope.yearModel = movie.get('year');
	$scope.directorModel = movie.get('director').get('name');
	$scope.quoteModel = movie.get('director').speak();
	$scope.indexValue = index;
  }
  
  $scope.updateMovie = function() {
	var movie = $scope.moviesArray[$scope.indexValue];
	movie.set('title', $scope.titleModel);
	movie.set('duration', $scope.durationModel);
	movie.set('country', $scope.countryModel);
	movie.set('year', $scope.yearModel);
	movie.get('director').set('name', $scope.directorModel);
	movie.get('director').set('quotes', [$scope.quoteModel]);
	
	$scope.moviesArray[$scope.indexValue] = movie;
	
	changeDivs(false);
  }
  
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
  
  var changeDivs = function(bool) {
	if(bool) {
      angular.element('.div-registrer, #modify-movie-button').css('display', 'block');
	  angular.element('.div-movie, #register-button').css('display', 'none');
	}
	else {
	  angular.element('.div-registrer, #modify-movie-button').css('display', 'none');
	  angular.element('.div-movie, #register-button').css('display', 'block');
	}
	clearFields();
  }
}]);