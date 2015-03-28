angular.module('starter')
.controller("listViewSampleCtrl", function ($scope) {
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
        { title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png", central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'green' },
        { title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png", central : 'red', arriba : 'yellow', abajo: 'green', superior: 'blue', inferior: 'gray', izquierda : 'transparent', derecha: 'green' },
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
        { title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
        { title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
        { title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
        { title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" }
    ];

    $scope.addItem = function () {
        $scope.items.splice(0, 0, {
            title: "Marvelous Mint",
            text: "Gelato",
            picture: "/images/fruits/60Mint.png"
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
