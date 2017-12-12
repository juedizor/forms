(function() {
  'use strict';

  angular.module('formApp', [
    'ngRoute',
    'formApp.formController',
    'formApp.mapController',
    'formApp.modalInstanceFormCtrl',
    'dndLists',
    'ngSanitize',
    'ui.bootstrap',
    'formApp.bindUnsafeHtml'
  ]);

  angular.module('formApp').config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }]);

})();
