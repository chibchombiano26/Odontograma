angular.module('starter')
.controller('signInController', ['$scope','signFactoryService','$ionicLoading','$state', 'users', 'pushFactory','signalrService',
	function ($scope, signFactoryService, $ionicLoading, $state, users, pushFactory, signalrService) {
	
	$scope.loginData= {};
	var usuario = users.getCurrentUser();

	if(!angular.isUndefined(usuario) && usuario.email.length >0){
		$scope.loginData.username = usuario.email;
		$scope.loginData.password = usuario.password;
		$state.go("app.pacientes");	
	}

	$scope.registrarse = function(){
		$state.go("app.signup");
	}

	$scope.doSign = function(){
		$ionicLoading.show();
		signFactoryService.sign($scope.loginData).then(success, error);
	}

	function success(data){
		console.log(data);
		$ionicLoading.hide();
		$state.go("app.pacientes");
		
		//Notification Hub
		pushFactory.registerAndroid();

		//SignalR
		signalrService.inicializarProxy('chatHub').then(function() {
		  	signalrService.sendMessage('futbolito152@gmail.com', {mensaje : 'mensaje', to: 'futbolito152@gmail.com'});
		}, function(reason) {
		  alert('Failed: ' + reason);
		}, function(update) {
		  alert('Got notification: ' + update);
		});

	}

	function proxyInicializado(){
		
	}

	function error(data){
		console.log(data);
		$ionicLoading.hide();
	}

}])