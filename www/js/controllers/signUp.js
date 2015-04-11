angular.module('starter')
.controller('signUpController', ['$scope', 'signFactoryService', function ($scope, signFactoryService) {
	
	$scope.loginData= {};

	$scope.doSignUp = function(){
		signFactoryService.signUp($scope.loginData).then(success, error);
	}

	//Apenas se registre se loguea en la app
	function success(data){
		signFactoryService.sign(data).then(successLogin, error);
	}

	function successLogin(data){
		console.log(data);
	}

	function error(data){
		console.log(data);
	}

}])