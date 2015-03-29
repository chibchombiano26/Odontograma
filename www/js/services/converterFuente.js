
angular.module('starter')
.service('fuenteConverterService', [function () {
	
	this.convertirFuente = function(fuente){
		switch(fuente){
				case "Wingdings 3":
					 return "Glyphyx";
					 break;
				
				 case "Wingdings 2":
					 return "raphael";
					 break;

				 case "Wingdings":
					 return "signify";
					 break;
				
				default:
					return 'Arial';
					break; 
			}
	};

}])