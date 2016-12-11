(function () {
  'use strict';
  /* controller pantalla2 */
  mainModule.config(function ($stateProvider) {
    $stateProvider
    .state('screen2.screen2', {
      url: '/screen2',
      views: {
        reportes: {
          templateUrl: 'screen2/screen2.html',
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
