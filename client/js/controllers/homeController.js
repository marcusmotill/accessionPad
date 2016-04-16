angular.module('app.controllers').controller('HomeController',
    function ($rootScope, $scope, $stateParams) {
        $scope.hasAccession = $stateParams.accessionId !== "";
        console.log($stateParams);
        $scope.accession = $stateParams.accessionId;

     

    });