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
			 el.find("svg").attr('width', scope.width);
    		 el.find("svg").attr('height', scope.height);
		}
	};
}])