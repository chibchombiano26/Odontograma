angular.module('starter')
.controller('rightMenuController', ['$scope', function($scope){
	$scope.visible = true;
	$('#rightButton').hide();

	$scope.$on('boton-derecha', function(e, args){
		var valor = args.valor;
		$scope.visible = valor;

		if(valor){			
			$('#rightButton').css('display', 'inline');
		}
		else{
			$('#rightButton').hide();			
		}

	});

}])