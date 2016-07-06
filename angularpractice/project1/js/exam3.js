//define the module. Helps with organization
//defined in the HTML.
var app3 = angular.module('app3', []);

//factory functions.
//Scope is a dependency. it tells angular to pass us a scope. Dependency injection
app3.controller('gListCtrl', function($scope){

	$scope.groceries = [
		{item: "Tomatoes", purchased: false},
		{item: "Potatoes", purchased: false},
		{item: "Bread", purchased: false},
		{item: "Hummus", purchased: false},
	]; 
	$scope.getList = function(){
		return $scope.showList ? "ulGroceryList.html" : "olGroceryList.html"; 
	}
});
