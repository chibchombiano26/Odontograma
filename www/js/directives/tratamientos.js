angular.module('starter')

.directive('tratamientos', [function () {
	return {
		restrict: 'E',
		scope: {			
			item : '='
		},
		templateUrl: 'templates/directives/tratamientos.html',
		controller : function($scope, fuenteConverterService){
			var item = $scope.item;
			item.Fuente = fuenteConverterService.convertirFuente(item.Fuente);
		}
	};
}])