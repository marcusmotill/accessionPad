angular.module('app.controllers').controller('NavigationController',
    function ($scope, $state, $mdSidenav, AccessionService) {
        $scope.accessions = AccessionService.getAccessions();

        $scope.showAccession = function (accession) {
            console.log(accession);
            $state.go("main.home", {accessionId: accession.$id})
        };

        $scope.openNewSequence = function () {
            $state.go("main.new");
        }
    });