angular.module('starter').

controller('browseCtrl', ['$scope', function ($scope) {	

$scope.items = [
				{central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'green'},
				{central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'transparent'},
				{central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'transparent'},				
			   ];

}])