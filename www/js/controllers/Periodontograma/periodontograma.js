angular.module('starter')
.controller('PeriodontogramaCtrl', ['$scope','dataTableStorageFactory', function ($scope, dataTableStorageFactory) {
	
 $scope.selecionado = {numeroPiezaDental: 18, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1'};
 
    function obtenerPeriodontogramaBase(){
        dataTableStorageFactory.getJsonData('Periodontograma.json').success(function (data) {
                for (var i = 0; i < data.length; i++) {
                    data[i].click = clickPiezaDental;
                };

                $scope.items = data;
            })
            .error(function (error) {
                console.log(error);                
            });
    }

    function clickPiezaDental(item){
        $scope.selecionado = item;
    }

    obtenerPeriodontogramaBase();

}])