angular.module('starter')
.factory('urlServicioFactory', [function () {

	var urlFactory = {};

	urlFactory.getUrlService = function(){

		//Produccion
	    var urlBase = 'http://hefesoftdynamicbackend.azurewebsites.net/api/';
	    //Pruebas
	    //var urlBase = 'http://localhost:3481/api/'
	    //var dataFactory = {};

	    return urlBase;

	}

	return urlFactory;

}])