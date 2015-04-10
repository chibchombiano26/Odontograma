angular.module('starter')
.controller('signUpController', ['$scope','$http', 'urlServicioFactory', function ($scope, $http, urlServicioFactory) {
	
	$scope.loginData= {};

	$scope.doSignUp = function(){
		var urlBase = urlServicioFactory.getUrlService();
		var data = $scope.loginData;
		data.email = $scope.loginData.username;

		$http.post(urlBase + "SignUp", data).
			success(function (data) {
              
            })
            .error(function (error) {
               
            });
	}

}])