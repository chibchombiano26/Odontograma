angular.module('starter')
    .factory('dataTableStorageFactory', ['$http', function($http) {

    var urlBase = 'http://hefesoftdynamicbackend.azurewebsites.net/api/';
    var dataFactory = {};

    dataFactory.getTableByPartition = function (nombreTabla,PartitionKey) {
        return $http.get(urlBase + "table/?nombreTabla=" + nombreTabla +"&partitionKey="+ PartitionKey);
    };

    dataFactory.getTableByPartitionAndRowKey = function (nombreTabla, PartitionKey, rowKey) {
        return $http.get(urlBase + "table/?nombreTabla=" + nombreTabla +"&partitionKey="+ PartitionKey+ "&rowKey="+ rowKey);
    };

    dataFactory.postTable = function (data) {
        return $http.post(urlBase + "table", data);
    };


    return dataFactory;
}]);