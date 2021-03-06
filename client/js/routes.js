angular.module('app.routes', []).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('login', {
            url: "/login",
            controller: 'LoginController as login',
            templateUrl: "client/tpl/login.html"
        })
        .state('main', {
            url: "/",
            controller: 'MainController',
            templateUrl: "client/tpl/main.html"
        })
        .state('main.home', {
            url: "/sequence/{accessionId}",
            controller: 'HomeController',
            templateUrl: "client/tpl/home.html"
        })
        .state('main.new', {
            url: "/new",
            controller: 'NewSequenceController',
            templateUrl: "client/tpl/newSequence.html"
        });
});
