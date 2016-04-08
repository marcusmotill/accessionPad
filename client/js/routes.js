angular.module('app.routes', []).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('main', {
            url: "/",
            controller: 'MainController',
            templateUrl: "client/tpl/main.html"
        })
        .state('login',{
            url: "/login",
            controller: 'LoginController as login',
            templateUrl: "client/tpl/login.html"
        });
});
