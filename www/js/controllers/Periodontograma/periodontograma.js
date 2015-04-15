angular.module('starter')
.controller('PeriodontogramaCtrl', ['$scope', function ($scope) {
	
 $scope.selecionado = {numeroPiezaDental: 18, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1'};
 $scope.items = [        
        {numeroPiezaDental: 18, mostrarFurca : false, margen1: 50, margen2: 50, margen3: 50, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental},
        {numeroPiezaDental: 16, mostrarFurca : false, margen1: 50, margen2: 50, margen3: 50, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental},
        {numeroPiezaDental: 15, mostrarFurca : false, margen1: 50, margen2: 50, margen3: 50, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental},
        {numeroPiezaDental: 14, mostrarFurca : false, margen1: 50, margen2: 50, margen3: 50, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental},
        {numeroPiezaDental: 13, mostrarFurca : false, margen1: 50, margen2: 50, margen3: 50, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental},
        {numeroPiezaDental: 12, mostrarFurca : false, margen1: 50, margen2: 50, margen3: 50, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental},
        {numeroPiezaDental: 11, mostrarFurca : false, margen1: 50, margen2: 50, margen3: 50, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental},
    ];




    function clickPiezaDental(item){
        $scope.selecionado = item;
        $scope.selecionado.margen2 =100;
        
    }

}])