angular.module('starter')
.controller('signInController', ['$scope','$http', 'urlServicioFactory','transformRequestAsFormPost','$localstorage','tokenService',
	function ($scope, $http, urlServicioFactory, transformRequestAsFormPost, $localstorage, tokenService) {
	
	$scope.loginData= {};

	$scope.doSign = function(){
		var urlBase = urlServicioFactory.getUrlBase();
		var data = $scope.loginData;
		data.grant_type = 'password';


		var request = $http({
					method: "post",
					url: urlBase + "token",
					transformRequest: transformRequestAsFormPost,
					data: data
				});
		
		request.success(function(data) {					
			$localstorage.setObject('authorizationData', data);
			tokenService.setTokenDocument(data.access_token);
			console.log("sig in");
		});

		request.error(function(data){

		});
		
	}

}])