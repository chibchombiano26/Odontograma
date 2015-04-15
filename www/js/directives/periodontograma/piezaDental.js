angular.module('starter')
.directive('periodontogramaPiezaDental', [function () {
	return {
		restrict: 'E',
		scope:{			
			width : '=',
			height : '=',
			item: '='
		},
		templateUrl : 'templates/directives/periodontograma/piezaDental.html',
		controller : 'periodontogramaPiezaDentalCtrl',
		link: function (scope, el, attr) {
					 
		}
	};
}])