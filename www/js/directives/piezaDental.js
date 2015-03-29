angular.module('starter')

.directive('piezaCompleta', [function () {
	return {
		restrict: 'E',
		scope: {			
			item : '='
		},
		templateUrl: 'templates/directives/piezaDental.html',
		controller : function($scope){
			$scope.item.central = 'transparent';
		}
	};
}])