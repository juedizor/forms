(function() {
  'use strict';

  angular.module('formApp.openModalFactory', ['ui.bootstrap']);

  function getModal($uibModal) {
    return {
      open: function(size, template, params, controller) {
        return $uibModal.open({
          animation: true,
          keyboard: false, 
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: template,
          controller: controller,
          controllerAs: '$ctrl',
          size: size,
          resolve: {
            params: function() {
              return params;
            }
          }
        });
      }
    }
  }
  angular.module('formApp.openModalFactory').factory('openModalFactory', getModal);
})();
