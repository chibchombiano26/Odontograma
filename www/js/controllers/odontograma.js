angular.module('starter')
.controller('odontogramaController', [ '$scope', '$rootScope', 'varsFactoryService', function($scope, $rootScope, varsFactoryService){
	
	var i = 0;
	$scope.test = function(){
		i = i+1;
		if(i == 3){
			i = 0;
		}
		varsFactoryService.goToSection(i);
	}

	//Para quitar el boton de el lado derecho cuando no se necesite
	$scope.$on('$ionicView.enter', function(){
		$rootScope.$broadcast('boton-derecha', {valor : true});
	    console.log('$ionicView.enter called');
	});

	$scope.$on('$ionicView.leave', function(){
		 $rootScope.$broadcast('boton-derecha', {valor : false});
         console.log('$ionicView.leave called');
    });

}]);