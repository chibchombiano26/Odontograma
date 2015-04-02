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
			if(item.ColorAdicional !== null && !S(item.ColorAdicional).contains('#')) { item.ColorAdicional = '#' + intToARGB(item.ColorAdicional); }
			if(item.Color !== null && !S(item.Color).contains('#')) { item.Color = '#' + intToARGB(item.Color); }
		}
	};




	//Converte el color de entero a hexadecimal
	function intToARGB(i) {
	    var h = ((i>>24)&0xFF).toString(16) +
	            ((i>>16)&0xFF).toString(16) +
	            ((i>>8)&0xFF).toString(16) +
	            (i&0xFF).toString(16);
	    return h.substring(0, 6);
	}

	// Hash any string into an integer value
	function hashCode(str) {
	    var hash = 0;
	    for (var i = 0; i < str.length; i++) {
	        hash = str.charCodeAt(i) + ((hash << 5) - hash);
	    }
	    return hash;
	}


}])