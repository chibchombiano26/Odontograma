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

	vars.goToSection = function(index){
		window.hub._scrollToSection(index,true)
	}

	return vars;
	
}])