'use strict';
// 1. Declare the module (inject 'ngRoute' if you're using routing)
var app = angular.module('barberApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'app/components/landing-page/landing-page.html',
            controller: 'LandingPageController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);