'use strict';

angular.module('myApp.screen2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/screen2', {
    templateUrl: 'screen2/screen2.html',
    controller: 'screen2'
  });
}])

.controller('screen2', [function() {

}]);