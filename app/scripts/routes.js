(function() {
  'use strict';

  function config($routeProvider) {
    $routeProvider.when('/form', {
      templateUrl: 'views/form/dynamics.html',
      controller: 'formCtrl',
      controllerAs: 'formCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }

  angular.module('formApp').config(config);

})();
