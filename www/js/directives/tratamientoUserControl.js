angular.module('starter').
directive('tratamientoUserControl', [function () {
	return {
		restrict: 'E',
		controller : 'tratamientosCtrl',
        templateUrl: 'templates/directives/tratamientosUserControl.html'
	};
}]);

angular.module('starter')
.controller("tratamientosCtrl", ['$rootScope','$scope', 'dataTableStorageFactory', 'dataBlobStorageFactory','sharedDataService', 

    function ($rootScope, $scope, dataTableStorageFactory, dataBlobStorageFactory, sharedDataService) {
    

    var Listado = [];
    $scope.items = [];
    $scope.textoBuscar = "";
    
  
    $scope.clickSeleccionado = function(e){
        sharedDataService.putTratamientoSeleccionado(e);
    }

     function get() {
        dataTableStorageFactory.getTableByPartition('TpTratamientos','Tratamientos')
            .success(function (data) {
                Listado = data;
                $scope.items = Listado;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    } 

    get();
}]);
