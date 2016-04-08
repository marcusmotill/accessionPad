angular.module('app.controllers').controller('NavigationController',
    function ($scope, $mdSidenav, AccessionService, $firebaseArray) {
        $scope.close = function () {
            $mdSidenav('left').close();
        };
        $scope.accessions = AccessionService.getAccessions();

    });