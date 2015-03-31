angular.module('starter').
directive('odontogramaUserControl', [function () {
	return {
		restrict: 'E',
		controller : 'odontogramaCtrl',
		templateUrl : 'templates/directives/odontogramaUserControl.html'
	};
}]);

angular.module('starter')
.controller("odontogramaCtrl", ['$scope', 'dataTableStorageFactory', 'dataBlobStorageFactory', 'sharedDataService', 

    function ($scope, dataTableStorageFactory, dataBlobStorageFactory, sharedDataService) {
    
    $scope.items = [        
        {numeroPiezaDental: 18},
        {numeroPiezaDental: 17},
        {numeroPiezaDental: 16},
        {numeroPiezaDental: 15},
        {numeroPiezaDental: 14},
        {numeroPiezaDental: 13},
        {numeroPiezaDental: 12},
        {numeroPiezaDental: 11},

        {numeroPiezaDental: 21},
        {numeroPiezaDental: 22},
        {numeroPiezaDental: 23},
        {numeroPiezaDental: 24},
        {numeroPiezaDental: 25},
        {numeroPiezaDental: 26},
        {numeroPiezaDental: 27},
        {numeroPiezaDental: 28},        
    ];


    $scope.status;

     function get() {
        dataBlobStorageFactory.getTableByPartitionAndRowKey('odontogramas','hefesoft.entities.odontologia.odontograma.odontograma','601')
            .success(function (data) {
                //$scope.items = data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    var Mode = {
        editMode: {
            text: "edit",
            selectionMode: "multi",
            tapBehavior: "toggleSelect"
        },
        readOnly: {
            text: "readonly",
            selectionMode: "none",
            tapBehavior: "none"
        }
    };

    $scope.addItem = function () {
        $scope.items.splice(0, 0, {
            central : 'red', 
             arriba : 'yellow', 
             abajo: 'green',
             superior: 'blue',
             inferior: 'gray',
             izquierda : 'transparent',
             derecha: 'green' 
        });
    };

    $scope.removeItem = function () {
        // Remove the items that are selected
        for (var i = $scope.selection.length - 1; i > -1; i--) {
            $scope.items.splice($scope.selection[i], 1);
        }
    };

    $scope.toggleEditMode = function () {
        $scope.mode = ($scope.mode === Mode.readOnly) ? Mode.editMode : Mode.readOnly;
    };

    $scope.mode = Mode.readOnly;
    $scope.selection = [];

    get();
}]);
