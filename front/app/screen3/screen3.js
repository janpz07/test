(function () {
  'use strict';
  /* controller pantalla3 */
  mainModule.config(function ($stateProvider) {
    $stateProvider
    .state('screen3.screen', {
      url: '/screen3',
      views: {
        reportes: {
          templateUrl: 'screen3/screen3.html',
          controller: controller
        }
      },
      resolve: {}
    });
  });
  function controller($scope, $http) {
    $http.get( ).then(
      function success(res) {
      
    });
  }    
}());
