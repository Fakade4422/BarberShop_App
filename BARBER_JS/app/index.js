var app = angular.module('barberApp', []); 

app.controller('IndexController', ['$scope', function($scope) {
    $scope.message = "Welcome to the Clipper Barbershop.";
    $scope.imageSrc = "./content/clip 3.png";
    $scope.loginPage = "Login Page";
}]);