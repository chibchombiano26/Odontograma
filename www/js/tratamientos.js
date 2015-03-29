

angular.module('starter')
.controller("tratamientosCtrl", ['$scope', 'dataTableStorageFactory', 'dataBlobStorageFactory', 

    function ($scope, dataTableStorageFactory, dataBlobStorageFactory) {
    
    var itemPrueba = {
        "PartitionKey":"item",
        "RowKey":"1",
        "nombreTabla":"tpdiagnosticos",
        "AplicaTratamiento":null,
        "Codigo":"K021",
        "Color":null,
        "ColorAdicional":6750207,
        "Descripcion":"Caries de la dentina",
        "Diagnostico":3776,
        "Fuente":"Wingdings 3",
        "IdIps":21,
        "IndiceCEO":true,
        "IndiceCOP":true,
        "IndicePlacaBacteriana":true,
        "Letra":null,
        "NoCubreConvenio":false,
        "OtraCaracteristica":null,
        "Procedimiento":null,
        "ProcedimientosAsociados":[],
        "SesionRelizada":false,
        "Severidad":true,
        "Simbolo":"E",
        "TipoPanel":1,
        "Identificador":1,
        "generarIdentificador":false,
        "Activo":null,
        "$$hashKey":"object:20"
    };

    $scope.items = [];   
    $scope.items.push(itemPrueba);

     function get() {
        dataBlobStorageFactory.getTableByPartition('tpdiagnosticos','item')
            .success(function (data) {
                $scope.items = data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    //get();
}]);
