angular.module('starter')
.controller('odontogramaController', [ '$scope', '$rootScope', function($scope, $rootScope){
	
	var i = 0;
	var hubCtrl;
	 
	$scope.setCtrl = function(ctrl){
		hubCtrl = ctrl;
	}

	//va hacia la izquierda
	$scope.onSwipeRight = function(){
		
		if(i > 0){
			i = i -1;
			goToSection(i);
		}

		
	}

	//va hacia la derecha
	$scope.onSwipeLeft = function(){
		
		if(i < 3){
			i = i +1;
			goToSection(i);
		}
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

    function goToSection(index){
    	hubCtrl._scrollToSection(index,true)
    }

}]);