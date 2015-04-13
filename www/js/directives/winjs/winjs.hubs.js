angular.module('starter').
directive('hubTest', ['$parse', function ($parse) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {	
			var hub = element[0].winControl;
			window.hub = hub;						
		}
	};
}])