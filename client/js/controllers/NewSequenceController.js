angular.module('app.controllers').controller('NewSequenceController',
    function ($rootScope, $scope, $http) {
        $scope.databases = ['Gene', 'Genome'];


        $scope.search = function () {
            $http.get("http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=genome&term=science%5bjournal%5d+AND+breast+cancer+AND+2008%5bpdat%5d")
                .then(function (success) {
                    var x2js = new X2JS();
                    var json = x2js.xml_str2json(success.data);
                    console.log(json);
                }, function (error) {
                    console.log(error);
                });
        }

    });