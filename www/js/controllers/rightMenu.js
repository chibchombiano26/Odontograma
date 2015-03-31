angular.module('starter')
.controller('rightMenuController', ['$scope', function($scope){
	
	$scope.visible = true;

	$scope.$on('boton-derecha', function(e, args){
		var valor = args.valor;
		$scope.visible = valor;

		if(valor){
			document.getElementById('rightButton').style.visibility = "visible";
		}
		else{
			document.getElementById('rightButton').style.visibility = "hidden";	
		}

	});

}])