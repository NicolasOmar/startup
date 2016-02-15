app.controller('director', ['$scope', function($scope) {
  $scope.directors = [];
  
  $scope.director = {
	name: '',
	quotes: []
  }
  
  $scope.sumarDirector = function() {
	$scope.director.name = $scope.Name;
	$scope.director.quotes = [$scope.Quote];
  },
  
  $scope.speak = function() {
	var quotesText = $scope.director.name + ' says: ';
      if($scope.director.quotes.length > 0) {
        $scope.director.quotes.forEach(function (quote) {
          quotesText += quote + '. ';  
        });
        return quotesText;
      }
      else {
        console.log('There is no registred quotes');
      }
  }
}]);