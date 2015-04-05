angular.module('starter')
    .factory('dataTableStorageFactory', ['$http', function($http) {

    //Produccion
    var urlBase = 'http://hefesoftdynamicbackend.azurewebsites.net/api/';
    //Pruebas
    //var urlBase = 'http://localhost:3481/api/'
    var dataFactory = {};

    dataFactory.getTableByPartition = function (nombreTabla,PartitionKey) {
        return $http.get(urlBase + "table/?nombreTabla=" + nombreTabla +"&partitionKey="+ PartitionKey);
    };

    dataFactory.getTableByPartitionAndRowKey = function (nombreTabla, PartitionKey, rowKey) {
        return $http.get(urlBase + "table/?nombreTabla=" + nombreTabla +"&partitionKey="+ PartitionKey+ "&rowKey="+ rowKey);
    };

    dataFactory.postTable = function (data) {
        data = validarAntesEnviar(data);
        return $http.post(urlBase + "table", data);
    };


    function validarAntesEnviar(data){
        //El servicio espera esta propiedad para saber si debe crear o eliminar la propiedad
        //Si no esta se debe crear
        //Crear = 1, Eliminar = 2
        if(!data.hasOwnProperty('Estado_Entidad')){
            data['Estado_Entidad'] = 1;
        }

        if(!data.hasOwnProperty('generarIdentificador')){
            data['generarIdentificador'] = false;
        }

        return data;

    }

    return dataFactory;
}]);