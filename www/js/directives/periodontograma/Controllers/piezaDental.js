angular.module('starter')
.controller('periodontogramaPiezaDentalCtrl', ['$scope', function($scope){
	
	$scope.item.margen1 = 50;
	$scope.item.margen2 = 50;
	$scope.item.margen3 = 50;

	$scope.item.rutaPiezaDental = "img/Periodontograma/periodontograma-dientes-arriba-" +  $scope.item.numeroPiezaDental + ".png";

	if(!angular.isUndefined($scope.item.mostrarFurca) && $scope.item.mostrarFurca === true){
		$scope.item.furca = "img/Periodontograma/" + $scope.item.tipoFurca + ".png";
	}

}])