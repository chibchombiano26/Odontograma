angular.module('starter')
.controller('signInController', ['$scope','signFactoryService', function ($scope, signFactoryService) {
	
	$scope.loginData= {};

	$scope.doSign = function(){
		signFactoryService.sign($scope.loginData).then(success, error);
	}

	function success(data){
		console.log(data);
	}

	function error(data){
		console.log(data);
	}

}])