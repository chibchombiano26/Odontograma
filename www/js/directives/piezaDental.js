angular.module('starter')

.directive('piezaCompleta', [function () {
	return {
		restrict: 'E',
		scope: {			
			item : '='
		},
		templateUrl: 'templates/directives/piezaDental.html',
		controller : 'piezaCompletaController'
	};
}])

angular.module('starter')
.controller('piezaCompletaController', ['$scope','sharedDataService', function ($scope, sharedDataService) {
	
	$scope.item.central = 'transparent';

	$scope.test = function(e){
		var tratamientoSeleccionado = sharedDataService.getTratamientoSeleccionado();

		if(typeof tratamientoSeleccionado != 'undefined'){		
			$scope.item.central =  tratamientoSeleccionado.ColorAdicional;
		}
	}
}])