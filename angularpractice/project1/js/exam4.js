//define the module. Helps with organization
//defined in the HTML.
var app4 = angular.module('app4', []);

//factory functions.
//Scope is a dependency. it tells angular to pass us a scope. Dependency injection
app4.controller('eventCtrl', function($scope){
	$scope.blur = 0;
	
	$scope.keydown = function(e){
		$scope.kdkey = String.fromCharCode(e.keyCode);
	};
	
	$scope.disableButton = true;
	$scope.dayTimeButton = true;
	$scope.capitals = [
		{"city": "shmaida", "state":"loel"},
		{"city": "lolo", "state":"mana"}
	
	];
	
});
