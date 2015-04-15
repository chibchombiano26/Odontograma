angular.module('starter').
filter('pointnull', function () {
  return function (item) {      
  		if(angular.isUndefined(item) || item === "{{item.margen1}}" || item == "{{item.margen2}}" || item == "{{item.margen3}}" ){
  			return 50;
  		}
  		else{
  			return item;
  		}
  };
});