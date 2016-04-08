angular.module('app.controllers').controller('MainController',
    function ($scope, $rootScope, $state, $timeout, AuthService, $mdSidenav) {

        if (!AuthService.isLoggedIn()) {
            $state.go('login');
        } else {
            $state.go('main.home')
        }

        $rootScope.$on('navEvent', function (event, data) {
            if (data.message === "toggle") {
                $scope.toggleNav();
            }
        });

        $scope.toggleNav = buildDelayedToggler('left');

        function debounce(func, wait, context) {
            var timer;
            return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                $timeout.cancel(timer);
                timer = $timeout(function () {
                    timer = undefined;
                    func.apply(context, args);
                }, wait || 10);
            };
        }

        function buildDelayedToggler(navID) {
            return debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {

                    });
            }, 200);
        }
    });


