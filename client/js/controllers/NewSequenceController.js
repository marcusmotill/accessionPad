angular.module('app.controllers').controller('NewSequenceController',
    function ($rootScope, $scope, $state, $http, x2js, AccessionService) {
        $scope.databases = ['Gene', 'Genome'];


        $scope.search = function () {
            $http.get("http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=" + $scope.search.database + "&term=" + $scope.search.query.replace(" ", "+"))
                .then(function (success) {
                    var json = x2js.xml_str2json(success.data);
                    $scope.IdList = json.eSearchResult.IdList.Id;
                    console.log(json);
                    $scope.searchResults = [];
                    angular.forEach($scope.IdList, function (value, key) {
                        $http.get("http://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=" + $scope.search.database + "&id=" + value).then(function (summarySuccess) {
                            var summaryJson = x2js.xml_str2json(summarySuccess.data);
                            $scope.searchResults.push({
                                summary: summaryJson.eSummaryResult.DocumentSummarySet.DocumentSummary,
                                id: value
                            });
                            console.log(summaryJson);
                        }, function (error) {
                            console.log(error);
                        })
                    });

                }, function (error) {
                    console.log(error);
                });
        };

        $scope.addSequence = function (result) {
            AccessionService.addAccession(result);
            $state.go("main.home", {accessionId: result.id})
        }
    });