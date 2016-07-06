//define the module. Helps with organization
//defined in the HTML.
var app2 = angular.module('app2', []);

//factory functions.
//Scope is a dependency. it tells angular to pass us a scope. Dependency injection
app2.controller('ctrl1', function($scope){
	$scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
	$scope.randomNum2 = Math.floor((Math.random() * 10) + 1);

});

app2.controller('badCtrl', function($scope){
	var badFellings = ["Disregarded", "Unimportant"];

	$scope.bad = badFellings[Math.floor((Math.random() * 2))];
});

app2.controller('goodCtrl', function($scope){
	var goodFeelings = ["Pleasure", "Awesome"];

	$scope.good = goodFeelings[Math.floor((Math.random() * 2))];
});
