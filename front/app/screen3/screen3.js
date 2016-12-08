'use strict';

angular.module('myApp.screen3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/screen3', {
    templateUrl: 'screen3/screen3.html',
    controller: 'screen3'
  });
}])

.controller('screen3', [function() {

}]);