angular.module('starter')
.directive('margen', [function () {
	return {
		restrict: 'E',
		link: function (scope, iElement, iAttrs) {			
		  
		  var elemento = iElement[0];
		  var data = new google.visualization.DataTable();
	      data.addColumn('number', 'X');
	      data.addColumn('number', 'Margen');

	      data.addRows([
	        [0, 0],   [1, 10],  [2, 10]       
	      ]);

	      var options = {	      	
        	'width':40,
        	'height':40,        	
	        hAxis: {
	         title: '',
	         baselineColor: 'transparent',
	         gridlineColor: 'transparent',
	         textPosition: 'none'
	        },
	        vAxis: {
	         title: '',
	         baselineColor: 'transparent',
	         gridlineColor: 'transparent',
	         textPosition: 'none'
	        },
	        legend: {position: 'none'},
	        backgroundColor: 'transparent'
	      };

	      var chart = new google.visualization.LineChart(elemento);
	      chart.draw(data, options);
	      $(elemento).children('#margen'+scope.item.numeroPiezaDental).center();

		},
		template : '<div style="position: absolute; background: red;"><div>',
		controller: 'margenCtrl'
	};
}])


.controller('margenCtrl', ['$scope', function ($scope) {
		  
}])