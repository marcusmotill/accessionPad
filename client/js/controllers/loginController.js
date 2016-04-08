angular.module('app.controllers').controller('LoginController',
    function ($scope, $state, AuthService) {
        var self = this;

        self.submit = function (hasAccount) {
            self.loading = true;
            if (hasAccount) {
                logIn(self.email, self.password, self.remember)
            } else {
                createAccount(self.email, self.password)
            }

        };

        function logIn(username, password, remember) {
            AuthService.login(username, password, remember).then(function (authData) {
                console.log("Logged in");
                self.loading = false;
                $state.go("main")
            }, function (error) {
                console.log(error);
                self.loading = false;
            });
        }

        function createAccount(username, password) {
            AuthService.createAccount(username, password).then(function (userData) {
                logIn(username, password, self.remember);
            }, function (error) {
                console.log(error);
                self.loading = false;
            });
        }

    });

