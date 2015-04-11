angular.module('starter')
.controller('pacientesController', ['$scope','dataTableStorageFactory', 'users', function ($scope, dataTableStorageFactory, users) {
	
	$scope.Paciente = {};
	$scope.Pacientes = new Array();
	$scope.shouldShowDelete = true;
	$scope.shouldShowReorder = false;
	$scope.listCanSwipe = false;

	var usuario = users.getCurrentUser();

	$scope.addPaciente = function(){

		var data = $scope.Paciente;
		data.generarIdentificador = true;
		data.PartitionKey = usuario.username;
		data.generarIdentificador = true;
		data.nombreTabla= 'TmPacientes';		

		dataTableStorageFactory.saveStorage(data);
		$scope.Pacientes.push(data);
	}

	$scope.delete = function(data, $index){
		data.Estado_Entidad = "2";		
		dataTableStorageFactory.saveStorage(data);
		$scope.Pacientes.splice($index, 1)
	} 

	function obtenerPacientes(){
		dataTableStorageFactory.getTableByPartition('TmPacientes', usuario.username)
		.success(function(data){
      		$scope.Pacientes = data;      
        }).error(function(error){
        	console.log(error);
        })
	}

	obtenerPacientes();

}])