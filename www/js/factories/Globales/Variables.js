angular.module('starter')
.factory('varsFactoryService', [function () {
	
	var vars = {};
	var pacienteSeleccionado;

	vars.fijarPaciente = function(paciente){
		pacienteSeleccionado = paciente;
	}

	vars.pacienteSeleccionado = function(){
		return pacienteSeleccionado;
	}

	return vars;
	
}])