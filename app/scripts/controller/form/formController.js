(function() {

  'use strict';

  angular.module('formApp.formController', []);


  function gestionarFormulariosDinamicos($scope) {
      var self = this;
      self.models = {
        selected: null,
        listA: {"A": []},
        listB: {"B": []}
      };

      // Generate initial model
      for (var i = 1; i <= 3; ++i) {
          self.models.listA.A.push({label: "Item A" + i});
      }

      self.operacionPanel1 = function(model){
        console.log("operacion con panel build form");
        self.models.listA.A = [];
        for (var i = 1; i <= 3; ++i) {
            self.models.listA.A.push({label: "Item A" + i});
        }

        self.modelAsJson = angular.toJson(model, true);
        console.log(self.modelAsJson);

      }

      // Model to JSON for demo purpose
    $scope.$watch('models', function (model) {
      console.log("entre")
        self.modelAsJson = angular.toJson(model, true);
    }, true);




  }

  angular.module('formApp.formController').controller('formCtrl', gestionarFormulariosDinamicos);

})();
