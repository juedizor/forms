(function() {
  'use strict';


  angular.module('formApp.modalInstanceFormCtrl', []);


  function modalInstanceFormCtrl($uibModalInstance, params, $log) {
    var self = this;
    self.params = params;
    console.log(self.params);

    self.ok = function() {
      
    };

    self.cancel = function() {
      $uibModalInstance.dismiss("cancel");
    }

  }


  angular.module('formApp.modalInstanceFormCtrl').controller('modalInstanceFormCtrl', modalInstanceFormCtrl);




})();
