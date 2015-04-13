angular.module('starter')
.controller('signInController', ['$scope','signFactoryService','$ionicLoading','$state', 'users', 
	function ($scope, signFactoryService, $ionicLoading, $state, users) {
	
	$scope.loginData= {};
	var usuario = users.getCurrentUser();

	if(!angular.isUndefined(usuario) && usuario.email.length >0){
		$scope.loginData.username = usuario.email;
		$scope.loginData.password = usuario.password;
		$state.go("app.pacientes");	
	}

	

	$scope.doSign = function(){
		$ionicLoading.show();
		signFactoryService.sign($scope.loginData).then(success, error);
	}

	function success(data){
		console.log(data);
		$ionicLoading.hide();
		$state.go("app.pacientes");
	}

	function error(data){
		console.log(data);
		$ionicLoading.hide();
	}

}])