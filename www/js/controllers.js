angular.module('starter')

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope) {

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
            alert('registration ID = ' + notification.regid);
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
	}

	function inicializarTimer(){
		$timeout(function() {
	     	registerAndroid();
	  	}, 10000);
	}

	inicializarTimer();

})

