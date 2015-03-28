angular.module('starter')
.controller("odontogramaCtrl", function ($scope) {
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

    $scope.items = [
        { central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'green' },
        { central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'green' },
        { central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'green' },
        { central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'green' },
        { central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'green' },
    ];

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
});
