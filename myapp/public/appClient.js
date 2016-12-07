var app = angular.module('myApp', ['ui.router', 'ngCookies', 'ngMaterial', 'jkAngularCarousel']);

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdDateLocaleProvider', function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdDateLocaleProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('light-blue')
        .accentPalette('pink');

    $mdDateLocaleProvider.firstDayOfWeek = 0;

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html'
        })
        .state('signin', {
            url: '/signin',
            templateUrl: 'views/signin.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
        })
        .state('help', {
            url: '/help',
            templateUrl: 'views/help.html'
        })
        .state('error', {
            url: '/error',
            templateUrl: 'views/error.html'
        })

    $urlRouterProvider.otherwise('/main');
}]);