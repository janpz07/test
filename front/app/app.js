var myapp = angular.module('myapp', ['ngResource','ngRoute']);

// Configuración de rutas
myapp.config(function ($routeProvider) {
    $routeProvider .when('/', {
            templateUrl: 'screen1.html',
            controller: 'contronller1'})
        .when('/screen2', {
            templateUrl: 'screen2.html',
            controller: 'contronller2'})
        .when('/screen3', {
            templateUrl: 'screen3.html',
            controller: 'contronller3'});
});
myapp.controller('contronller1', function($scope) {
    $scope.message = 'Hola, Mundo!';
    console.log($scope.message);
});
myapp.controller('contronller2', function($scope) {
    $scope.message = 'Hola, Mundo!';
});
myapp.controller('contronller3', function($scope) {
    $scope.message = 'Hola, Mundo!';
});