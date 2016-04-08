angular.module('app.directives', [])
    .directive('loading', function () {
        return {
            restrict: "E",
            template: '<md-progress-circular md-mode="indeterminate" ng-show="login.loading"></md-progress-circular>'
        }
    })
