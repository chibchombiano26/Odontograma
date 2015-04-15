angular.module('starter')
.controller('PeriodontogramaCtrl', ['$scope','dataTableStorageFactory','dataBlobStorageFactory','$ionicLoading','users','$state',
    function ($scope, dataTableStorageFactory, dataBlobStorageFactory, $ionicLoading, users, $state) {
	
 $scope.selecionado = {numeroPiezaDental: 18, mostrarFurca : false, tipoFurca: 'vacio', parte: 'parte1'};
 $scope.mostrarFurca = false;
 var usuario = users.getCurrentUser();
 var pacienteId = $state.params.pacienteId;
 

    $scope.$on('$ionicView.leave', function(){
        $ionicLoading.show();

        var usuario = users.getCurrentUser();
        var datosGuardar = 
        { 
            PartitionKey : usuario.username+ 'paciente' + pacienteId,
            generarIdentificador : true, 
            nombreTabla: 'TmPeriodontograma',
            RowKey : 1000,
            data: $scope.items
        }

        dataBlobStorageFactory.postBlob(datosGuardar).success(function (data) {
           $ionicLoading.hide();
        })
        .error(function (error) {
            $ionicLoading.hide();
            console.log(error);                
        });
    });

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

    $scope.sangradoSupurado = function(parte){
        //Valida que este en una pieza dental
        if($scope.selecionado.hasOwnProperty(parte)){
            //Gris
            if($scope.selecionado[parte] == "#e6e6e6"){
                $scope.selecionado[parte] =  "#fa5858"; 
            }
            //Rojo
            else if($scope.selecionado[parte] == "#fa5858"){
                $scope.selecionado[parte] =  "#e6e6e6"; 
            }
        }
    }

    $scope.placa = function(parte){
        //Valida que este en una pieza dental
        if($scope.selecionado.hasOwnProperty(parte)){
            //Gris
            if($scope.selecionado[parte] == "#e6e6e6"){
                $scope.selecionado[parte] =  "#58acfa"; 
            }
            //Azul
            else if($scope.selecionado[parte] == "#58acfa"){
                $scope.selecionado[parte] =  "#e6e6e6"; 
            }
        }
    }

    $scope.implante = function(){
        if($scope.selecionado.implante == ""){
            $scope.selecionado.implante = "tornillo";
        }
        else if($scope.selecionado.implante == "tornillo"){
            $scope.selecionado.implante = "tachado";
        }
        else if($scope.selecionado.implante == "tachado"){
            $scope.selecionado.implante = "";
        }
    }

    $scope.furca = function(){
        
        if($scope.selecionado.tipoFurca == ""){
            $scope.selecionado.tipoFurca = "mediolleno";
        }
        //Medio lleno
        else if($scope.selecionado.tipoFurca == "img/Periodontograma/mediolleno.png"){
            $scope.selecionado.tipoFurca = "lleno";
        }
        //Lleno
        else if($scope.selecionado.tipoFurca == "img/Periodontograma/lleno.png"){
            $scope.selecionado.tipoFurca = "cuadrado";   
        }
        //
        else if($scope.selecionado.tipoFurca == "img/Periodontograma/cuadrado.png"){
            $scope.selecionado.tipoFurca = "circulo_vacio";   
        }
        //Circulo vacio
        else if($scope.selecionado.tipoFurca == "img/Periodontograma/vacio.png"){
            $scope.selecionado.tipoFurca = "vacio";
        }       
    }

    function clickPiezaDental(item){
        $scope.selecionado = item;
        $scope.mostrarFurca = Boolean(item.mostrarFurca);
    }

    obtenerPeriodontogramaBase();

}])