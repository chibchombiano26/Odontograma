angular.module('starter')
.controller('odontogramaController', function($scope, $rootScope){
	
	//Para quitar el boton de el lado derecho cuando no se necesite
	$scope.$on('$ionicView.enter', function(){
		$rootScope.$broadcast('boton-derecha', {valor : true});
	    console.log('$ionicView.enter called');
	});

	$scope.$on('$ionicView.leave', function(){
		 $rootScope.$broadcast('boton-derecha', {valor : false});
         console.log('$ionicView.leave called');
    });

});