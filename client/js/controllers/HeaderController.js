angular.module('app.controllers').controller('HeaderController', function ($scope, $rootScope) {
    $scope.toggleNav = function () {
        $rootScope.$emit('navEvent', {message: "toggle"});
    }
});