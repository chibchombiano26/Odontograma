angular.module('starter')

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope, $cordovaPush, pushFactory) {

  var androidConfig = {
    "senderID": "505952414500",
  };
 
	$scope.$on("'Dispositivo listo'", function(event, args){		
		registerAndroid();        
	});

	$rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
      switch(notification.event) {
        case 'registered':
          if (notification.regid.length > 0 ) {
            console.log('registration ID = ' + notification.regid);
            pushFactory.register(notification.regid).then(success,error);
          }
          break;

        case 'message':
          // this is the actual push notification. its format depends on the data model from the push server
          alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
          break;

        case 'error':
          alert('GCM error = ' + notification.msg);
          break;

        default:
          alert('An unknown GCM event has occurred');
          break;
      }
    });

	function registerAndroid(){
		var deviceInformation = ionic.Platform.device();
        var isAndroid = ionic.Platform.isAndroid();

      if(isAndroid){
  			$cordovaPush.register(androidConfig).then(function(result) {
  		      	console.log(result);
  		    }, function(err) {
  		      	console.log(err);
  		    })
		  }
      else{

        //Key de pruebas
        var key = "APA91bFFa2kqzL9AE8utHBuoE4B-AtnQZKQuRPIdSP50PbeQEbjTsLUC4ZCyLOnKc7A1jYg91TuQ7_29PUqZjh5H9lyqT0-pmcDQE4JTWNLHlEdCMXyV3nPUCLQMdnGs22fEKSTO5ht9I5paXjCabIxT4veR55F9bfx2d4U7GRKaNRn3q212m2Q";
        pushFactory.register(key).then(success,error);
      }
	}

  function success(){
    pushFactory.enviarMensaje("username:futbolito152@gmail.com", "futbolito152@gmail.com");
  }

  function error(data){
    console.log(data);
  }

	function inicializarTimer(){
		$timeout(function() {
	     	registerAndroid();
	  	}, 10000);
	}

	inicializarTimer();

})

