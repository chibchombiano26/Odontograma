angular.module('starter')
.controller('signUpController', ['$scope','$http', 'urlServicioFactory', function ($scope, $http, urlServicioFactory) {
	
	$scope.loginData= {};

	$scope.doSignUp = function(){
		var urlBase = urlServicioFactory.getUrlService();
		$http.post(urlBase + "SignUp", $scope.loginData).
			success(function (data) {
              
            })
            .error(function (error) {
               
            });
	}

}])