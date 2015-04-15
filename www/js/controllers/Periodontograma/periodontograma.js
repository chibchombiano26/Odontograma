angular.module('starter')
.controller('PeriodontogramaCtrl', ['$scope', function ($scope) {
	
 $scope.selecionado = {numeroPiezaDental: 18, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1'};
 $scope.items = [        
        {numeroPiezaDental: 18, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental},
        {numeroPiezaDental: 17, mostrarFurca : true, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 16, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 15, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 14, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 13, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 12, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 11, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 21, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 22, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 23, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 24, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 25, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 26, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 27, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
        {numeroPiezaDental: 28, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1', click : clickPiezaDental },
    ];




    function clickPiezaDental(item){
        $scope.selecionado = item;
        
    }

}])