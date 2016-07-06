//define the module. Helps with organization
//defined in the HTML.
var app1 = angular.module('app1', []);

//factory functions.
//Scope is a dependency. it tells angular to pass us a scope. Dependency injection
app1.controller('ctrl1', function($scope){
	$scope.first = 1;
	$scope.second = 1;
	
	$scope.updateValue = function(){
		$scope.calculation = $scope.first + ' + ' + $scope.second + " = " + (+$scope.first + +$scope.second)
	};
});
