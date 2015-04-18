angular.module('starter')
.factory('pushFactory', ['$http','urlServicioFactory' , '$q', function ($http, urlServicioFactory, $q) {
	
	var urlBase = urlServicioFactory.getUrlBase();
    var dataFactory = {};

    dataFactory.register = function(key){
    	var deferred = $q.defer();
    	var key = key;
    	$http.post(urlBase + "api/register", {key : key}).success(function (data) {                
                updateRegister(data, deferred, key);
            })
            .error(function (error) {
                
            });

       return deferred.promise;
    }

    //Un tag o un nombre
    dataFactory.enviarMensaje = function(enviarA, mensaje){

    	var item = { platform : "gcm", to_tag : enviarA, mensaje : mensaje};
    	$http.post(urlBase + "api/notifications", item)
    	.success(function (data) {                
        	console.log(data);        
        })
        .error(function (error) {
          	console.log(error);      
        });
    }

	return  dataFactory;

	function updateRegister(data, promise, key){
		var deferred = promise;
		var tag = "Pacientes, Odontologia";
		var platform = getPlatform();

		//Falta habilitar para m
		var item ={idhubazure : data, tag : tag, platform: platform, key : key};

		var req = {
                method: 'PUT', 
                url: urlBase + "api/register",
                data: item,
                headers: {'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json'
            	}
            }
            $http(req).success(function(data) { 
                console.log(data);               
                deferred.resolve(data);
            }).error(function(data) { 
                console.log(data);
                deferred.reject(data);                 
            });
	}

	function getPlatform(){
    	var deviceInformation = ionic.Platform.device();
        var isAndroid = ionic.Platform.isAndroid();

      if(isAndroid){
  			return  "gcm";
	  }
      else{
      	return "gcm";
      }
	}

}])