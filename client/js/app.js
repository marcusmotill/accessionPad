angular.module('app',
    [
        "ngElectron",
        "ngAnimate",
        "ngAria",
        "ngMaterial",
        "ui.router",
        "firebase",
        "app.controllers",
        "app.directives",
        "app.services",
        "app.routes"
    ])
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('light-blue');
    }).constant('FirebaseUrl', 'https://accesseionpad.firebaseio.com/');

