angular.module('app.directives', [])
    .directive('loading', function () {
        return {
            restrict: "E",
            template: '<md-progress-circular md-mode="indeterminate" ng-show="login.loading"></md-progress-circular>'
        }
    })
    .directive("noSequenceCard", function ($rootScope) {
        return {
            restrict: "E",
            scope: {},
            templateUrl: "./client/tpl/partials/noSequenceCard.html",
            link: function (scope, element, attrs) {

            },
            controller: function ($scope) {
                $scope.openNavigation = function () {
                    $rootScope.$emit('navEvent', {message: "toggle"});
                };

                $scope.newSequence = function () {

                }
            }
        }
    });

