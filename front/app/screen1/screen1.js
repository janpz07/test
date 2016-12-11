(function () {
  'use strict';
  /* controller pantalla1 */
  mainModule.config(function ($stateProvider) {
    $stateProvider
    .state('screen1.screen1', {
      url: '/screen1',
      views: {
        reportes: {
          templateUrl: 'screen1/screen1.html',
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
