angular.module('starter')

.directive('piezaCompleta', [function () {
	return {
		restrict: 'E',
		scope: {			
			item : '=',
			width : '=',
			height : '=',
			esPiezaCompleta: '='			
		},
		templateUrl: 'templates/directives/piezaDental.html',
		controller : 'piezaCompletaController',
		link: function(scope, el, attr) {    		 
    		 el.find("svg").attr('width', scope.width);
    		 el.find("svg").attr('height', scope.height);
    	}
	};
}])

angular.module('starter')
.controller('piezaCompletaController', ['$rootScope', '$scope','sharedDataService','aplicarTratamientoService', 
	function ($rootScope, $scope, sharedDataService, aplicarTratamientoService) {
		
		$scope.item.central = 'transparent';

		$scope.clickAplicar = function(e){

		$scope.item = aplicarTratamientoService.aplicar($scope.item);

		if(!angular.isUndefined($scope.esPiezaCompleta) && $scope.item.numeroPiezaDental !== "Pieza seleccionada"){
			//si se da click sobre la pieza completa debe avizasrle al elemento dentro del listado
			//que tambien debe cambiar ademas se debe validar que se haya seleccionado algo			
			$rootScope.$broadcast($scope.item.numeroPiezaDental, { seleccionado: $scope });			
		}	
	}
	

	$scope.clickSeleccionar = function(e){
		//Avisarle a la pieza seleccionada que se selecciono una pieza dental
		$rootScope.$broadcast('elemento-dental-seleccionado', { seleccionado: $scope });
	}

	$scope.$on($scope.item.numeroPiezaDental, function(event, args){
		var seleccionado = args.seleccionado;
		$scope.item = seleccionado.item;
	});

}])