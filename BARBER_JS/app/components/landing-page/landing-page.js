'use strict';
// 1. Declare the module (inject 'ngRoute' if you're using routing)
var app = angular.module('barberApp', ['ngRoute']);

// 2. Define the controller and attach 'title' to $scope
app.controller('LandingPageController', ['$scope', function($scope) {
    $scope.title = "Clippers";
    $scope.img = "./content/clip 3.png";
}]);