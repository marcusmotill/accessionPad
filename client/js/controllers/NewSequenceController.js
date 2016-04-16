angular.module('app.controllers').controller('NewSequenceController',
    function ($rootScope, $scope, $stateParams) {
        $scope.hasAccession = $stateParams.accessionId !== "";
        console.log($stateParams);
        $scope.accession = $stateParams.accessionId;


    });