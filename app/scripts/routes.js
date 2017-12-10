(function() {
  'use strict';

  function config($routeProvider) {
    $routeProvider.when('/form', {
      templateUrl: 'views/form/dynamicsForm.html',
      controller: 'formCtrl',
      controllerAs: 'formCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  }

  angular.module('formApp').config(config);

})();
