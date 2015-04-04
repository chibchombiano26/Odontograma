/**
* El listado de los elementos aplicados a cada superficies 
*/
angular.module('starter').
service('tratamientosPorPiezaDental', ['$rootScope','sharedDataService', 'crearPropiedades','aplicarTratamientoService',

	function ($rootScope, sharedDataService, crearPropiedades, aplicarTratamientoService) {
	
	var i = 0; 
	var tratamientos = [];

	this.insertar = function(item){       
		//Tratamiento seleccionado
		var tratamientoSeleccionado = sharedDataService.getTratamientoSeleccionado();
		crearPropiedades.fill(tratamientoSeleccionado,item);

		var existe = validarExiste(item);
		if(!existe){
			i = i+1;
			item['i'] = i;
			tratamientos.push(item);
	    }
	}

	//Filtra deacuerdo al numero de pieza dental
	this.filtrarNumeroPiezaDental = function(numeroPiezaDental){
		var resultado =_.filter(tratamientos, function(n) {
		  return n.numeroPiezaDental === numeroPiezaDental;
		});

		return resultado;
	}

	this.eliminar = function(item){
		var result = _.remove(tratamientos, function(n) {
  			var valor =  (n.i  !== item.i);
  			return valor;
		});

		tratamientos = result;
		actualizarDespuesEliminarUI(item);
	}

	function validarExiste(item){
		var result = _.any(tratamientos, function(n){
			var valor =  
  			(n.PartitionKey  === item.PartitionKey 
  			&& n.RowKey === item.RowKey 
  			&& n.numeroPiezaDental === item.numeroPiezaDental 
  			&& n.superficie === item.superficie);

  			return valor;
		});

		return result;
	}

	function actualizarDespuesEliminarUI(item){
		
		var elemento = obtenerUltimoExistente(item);		

		//actualiza la superficie seleccionada luego de eliminar el elemento
		var nombreEvento = "eliminado" + item.numeroPiezaDental;
		$rootScope.$broadcast(nombreEvento, { seleccionado : elemento, numeroPiezaDental : item.numeroPiezaDental });
	}

	//Obtiene el ultimo elemento de la collecion por ejemplo el ultimo del centro
	function obtenerUltimoExistente(item){
		var dato;
		var index = _.findLastIndex(tratamientos, function(n){
			return n.superficie === item.superficie && n.numeroPiezaDental === item.numeroPiezaDental ;
		});

		if(index >= 0){
			dato = tratamientos[index];
			dato = aplicarTratamientoService.revertir(dato, item.superficie);
		}
		else{
			dato = null;

			//Devuelve un elemento vacio para la superficie seleccionada
			dato = aplicarTratamientoService.limpiar(item.superficie);
		}
		

		return dato;
	}

}])