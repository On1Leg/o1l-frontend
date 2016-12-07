var app = angular.module('myApp', ['ui.router', 'ngCookies', 'ngMaterial']);

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdDateLocaleProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdDateLocaleProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('blue');

    $mdDateLocaleProvider.firstDayOfWeek = 0;

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'views/error.html'
        })

    $urlRouterProvider.otherwise('/');
}]);