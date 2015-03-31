/**
Implementa como se convierte un tratamiento seleccionado en algo que se pinta dentro del odontograma
*/
angular.module('starter')
.service('aplicarTratamientoService', ['sharedDataService', function (sharedDataService) {	
	
	this.aplicar = function(elemento){
		//Hay un servicio donde se gurada el procedimiento o diagnostico que actualmente se ha seleccionado
		var tratamientoSeleccionado = sharedDataService.getTratamientoSeleccionado();
		//Se valida que se haya seleccionado algo
		if(typeof tratamientoSeleccionado != 'undefined' && elemento.numeroPiezaDental !== "Pieza seleccionada"){
				elemento.central =  tratamientoSeleccionado.ColorAdicional;
		}
		return elemento;
	}


}])