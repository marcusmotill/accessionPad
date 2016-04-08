angular.module('app.controllers').controller('NavigationController',
    function ($scope, $mdSidenav) {
        $scope.close = function () {
            $mdSidenav('left').close();
        };
    });