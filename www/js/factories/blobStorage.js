angular.module('starter')
    .factory('dataBlobStorageFactory', ['$http', function($http) {

    var urlBase = 'http://hefesoftdynamicbackend.azurewebsites.net/api/';
    var dataFactory = {};

    dataFactory.getTableByPartition = function (nombreTabla,PartitionKey) {
        return $http.get(urlBase + "blob/?nombreTabla=" + nombreTabla +"&partitionKey="+ PartitionKey);
    };

    dataFactory.getTableByPartitionAndRowKey = function (nombreTabla, PartitionKey, rowKey) {
        return $http.get(urlBase + "blob/?nombreTabla=" + nombreTabla +"&partitionKey="+ PartitionKey+ "&rowKey="+ rowKey);
    };

    dataFactory.postBlob = function (data) {
        return $http.post(urlBase + "blob", data);
    };


    return dataFactory;
}]);