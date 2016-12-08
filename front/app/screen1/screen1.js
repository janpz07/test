'use strict';

angular.module('myApp.screen1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/screen1', {
    templateUrl: 'screen1/screen1.html',
    controller: 'screen1'
  });
}])

.controller('screen1', [function() {

}]);