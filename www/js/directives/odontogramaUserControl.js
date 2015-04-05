angular.module('starter').
directive('odontogramaUserControl', [function () {
	return {
		restrict: 'E',
		controller : 'odontogramaCtrl',
		templateUrl : 'templates/directives/odontogramaUserControl.html'
	};
}]);

angular.module('starter')
.controller("odontogramaCtrl", ['$scope', 'dataTableStorageFactory', 'dataBlobStorageFactory', 'sharedDataService', 'dataTableStorageFactory','leerOdontogramaServices',

    function ($scope, dataTableStorageFactory, dataBlobStorageFactory, sharedDataService, dataTableStorageFactory,leerOdontogramaServices) {
    
        var i = 0;
        var index = 0;

    $scope.items = [        
        {numeroPiezaDental: 18, esSupernumerario : false},
        {numeroPiezaDental: 17, esSupernumerario : false},
        {numeroPiezaDental: 16, esSupernumerario : false},
        {numeroPiezaDental: 15, esSupernumerario : false},
        {numeroPiezaDental: 14, esSupernumerario : false},
        {numeroPiezaDental: 13, esSupernumerario : false},
        {numeroPiezaDental: 12, esSupernumerario : false},
        {numeroPiezaDental: 11, esSupernumerario : false},

        {numeroPiezaDental: 21, esSupernumerario : false},
        {numeroPiezaDental: 22, esSupernumerario : false},
        {numeroPiezaDental: 23, esSupernumerario : false},
        {numeroPiezaDental: 24, esSupernumerario : false},
        {numeroPiezaDental: 25, esSupernumerario : false},
        {numeroPiezaDental: 26, esSupernumerario : false},
        {numeroPiezaDental: 27, esSupernumerario : false},
        {numeroPiezaDental: 28, esSupernumerario : false},        
    ];

     function get() {
        dataBlobStorageFactory.getTableByPartitionAndRowKey('odontogramas','hefesoft.entities.odontologia.odontograma.odontograma','601')
            .success(function (data) {
                //$scope.items = data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }   

    function obtenerOdontograma(){
        dataTableStorageFactory.getTableByPartition('TpOdontograma', 'odontogramatest')
        .success(function(data){
            leerOdontogramaServices.odontogramaToUi(data);
        }).error(function(error){

        })
    }

     $scope.$on('supernumerario', function(event, args){      
        var seleccionado = args.seleccionado;
        var direccion = args.direccion;
        var index = _.indexOf($scope.items, seleccionado);
        i 

        if(direccion === "derecha"){
            index = index+1;
        }

        i = i+1;

        $scope.items.splice(index,0,{numeroPiezaDental: 'S' + i, esSupernumerario : true, _numeroSuperNumerario : i });

        seleccionado.nombreTabla = 'TpOdontogramaSupernumerario';
        seleccionado.RowKey = i;
        seleccionado._numeroSuperNumerario = i;
        seleccionado.PartitionKey = "odontogramatest";
        seleccionado.index = index;        
        saveStorage(seleccionado);
    });

     $scope.$on('eliminar-supernumerario', function(event, args){      
        var seleccionado = args.seleccionado;
        var index = _.indexOf($scope.items, seleccionado);        
        
        $scope.items.splice(index, 1);
        seleccionado.nombreTabla = 'TpOdontogramaSupernumerario';
        seleccionado.PartitionKey = "odontogramatest";
        seleccionado.RowKey = seleccionado._numeroSuperNumerario;
        deleteFromStorage(seleccionado);
        
    });

     function saveStorage(item){
        dataTableStorageFactory.postTable(item)
            .success(function (data) {
              
            })
            .error(function (error) {
               
            });
    }

    function deleteFromStorage(item){
        item.Estado_Entidad = 2;        
        dataTableStorageFactory.postTable(item)
            .success(function (data) {
              
            })
            .error(function (error) {
               
            });
    }

    get();
    obtenerOdontograma();
}]);
