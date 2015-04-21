angular.module('starter')
.controller("impresionOdontogramaCtrl", ['$scope','dataTableStorageFactory',
    function ($scope, dataTableStorageFactory) {

	$scope.items = [];

    $scope.imprimir = function(){
        window.print();
    }

    function obtenerTratamientos(){
        dataTableStorageFactory.getTableByPartition('TpOdontograma','futbolito152paciente1802')
        .success(success)
        .error(error);
    }

    function success(data){
        $scope.items = data;        
    }

    function error(error){
        console.log(error);
    }

    obtenerTratamientos();
   
}]);
