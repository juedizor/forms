(function() {
  'use strict';

  function config($routeProvider) {
    $routeProvider.when('/form', {
      templateUrl: 'views/form/dynamics.html',
      controller: 'formCtrl',
      controllerAs: 'formCtrl'
    }).when('/maps', {
      templateUrl: 'views/maps/maps-api-google.html',
      controller: 'mapCtrl',
      controllerAs: 'mapCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }

  angular.module('formApp').config(config);

})();
