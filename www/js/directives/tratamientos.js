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
			if(item.ColorAdicional !== null) { item.ColorAdicional = '#' + item.ColorAdicional.toString(16); }
			if(item.Color !== null) { item.Color = '#' + item.Color.toString(16); }
		}
	};
}])