angular.module('starter')

.factory('users', ['$localstorage', function($localstorage) {
  
  var userFactory = {};

  userFactory.getCurrentUser = function(){
    var data = $localstorage.getObject('user');
    var username = data.username.split('@')[0];
    return {username : username, email : data.username, password: data.password};
  }

  return userFactory; 

}]);