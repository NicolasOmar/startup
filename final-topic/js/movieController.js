app.controller('movie', ['$scope','director', function($scope, factoryDirector) {
	
  $scope.moviesArray = [];
  
  $scope.movie = function() {
	this.title = '';
    this.duration = 0;
    this.country = '';
    this.year = 0;
    this.director = factoryDirector.Director;
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
        console.log('Attribute ' + attribute + ' = ' + value);
      }
    }
	
	this.showMovie = function() {
	  return 'Title: ' + this.title 
	    + ' - Duration: '	+ this.duration 
	    + ' - Country: ' + this.country 
	    + ' - Year: ' + this.year;
	}
  }
  
  $scope.plusMovie = function () {
	var newMovie = new $scope.movie();
	newMovie.set('title', $scope.titleModel);
	newMovie.set('duration', $scope.durationModel);
	newMovie.set('country', $scope.countryModel);
	newMovie.set('year', $scope.yearModel);	
	newMovie.director.set('name', $scope.directorModel);
	newMovie.director.set('quotes', [$scope.quoteModel]);
	
	$scope.moviesArray.push(newMovie);
	console.log($scope.moviesArray);
  }
}]);