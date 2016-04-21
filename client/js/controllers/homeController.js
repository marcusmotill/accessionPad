angular.module('app.controllers').controller('HomeController',
    function ($rootScope, $scope, $stateParams, AccessionService, $mdDialog) {
        $scope.hasAccession = $stateParams.accessionId !== "";
        console.log($stateParams);
        $scope.accession = $stateParams.accessionId;
        if ($scope.hasAccession)
            $scope.notes = AccessionService.getNotes($scope.accession);

        $scope.newNote = function () {
            $mdDialog.show({
                templateUrl: 'client/tpl/partials/newNote.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
                fullscreen: false,
                locals: {
                    accessionId: $scope.accession
                },
                controller: ['$scope', 'accessionId', function ($scope, accessionId) {
                    $scope.accessionId = accessionId;
                    $scope.note = {};

                    $scope.hide = function () {
                        $mdDialog.hide();
                    };
                    $scope.cancel = function () {
                        $mdDialog.cancel();
                    };
                    $scope.answer = function (answer) {
                        $mdDialog.hide(answer);
                    };

                    $scope.saveNote = function () {
                        AccessionService.addNote($scope.accessionId, $scope.note);
                        $scope.cancel();
                    }

                }]

            });
        }
    });