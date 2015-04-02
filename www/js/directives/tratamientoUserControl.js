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


    var Mode = {
        selectMode: {
            text: "edit",
            selectionMode: "single",
            tapBehavior: "directSelect"            
        }
    }

    var Listado = [];
    $scope.items = [];   
    Listado.push(itemPrueba);
    $scope.items = Listado;

    $scope.mode = Mode.selectMode;
    $scope.selection = [];

   
    $scope.textoBuscar = "";
    
    $scope.buscar = function(e){ 
     var textoComparar = $scope.textoBuscar; 
     var resultados;
       if(!S(textoComparar).isEmpty()){
            resultados = _.filter(Listado, function(item){
              return S(item.Descripcion).contains(textoComparar);
            });
       }
       else{            
            resultados = Listado;        
       }

       $scope.items = resultados;
    }

    $scope.clickSeleccionado = function(e){
        sharedDataService.putTratamientoSeleccionado(e);
    }

     function get() {
        dataBlobStorageFactory.getTableByPartition('tpdiagnosticos','item')
            .success(function (data) {
                Listado = data;
                $scope.items = data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    get();
}]);
