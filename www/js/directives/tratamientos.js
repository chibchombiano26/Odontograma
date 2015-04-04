angular.module('starter')

.directive('tratamientos', [function () {
	return {
		restrict: 'E',
		scope: {			
			item : '='
		},
		templateUrl: 'templates/directives/tratamientos.html',
		controller : function($scope, fuenteConverterService, coloresService){
			var item = $scope.item;
			item.Fuente = fuenteConverterService.convertirFuente(item.Fuente);
			if(item.ColorAdicional !== null && !S(item.ColorAdicional).contains('#')) { item.ColorAdicional = '#' + coloresService.intToHexColor(item.ColorAdicional); }
			if(item.Color !== null && !S(item.Color).contains('#')) { item.Color = '#' + coloresService.intToHexColor(item.Color); }
		}
	};
}])