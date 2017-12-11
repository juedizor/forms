(function() {

  'use strict';

  angular.module('formApp.formController', ['formApp.bindUnsafeHtml']);


  function gestionarFormulariosDinamicos($scope, $sce) {
    var self = this;

    // mark it as clean
    self.models = {
      selected: null,
      listA: {
        "A": [{
            campo: {
              type: 'text',
              content: '<input type="text" class="form-control" id="newField-name" readonly>'
            }
          },
          {
            campo: {
              type: 'lista',
              content: '<select class="form-control" id="newField-type" ng-model="newField.type" ng-required></select>'
            }

          }


        ]
      },
      listB: {
        "B": []
      }
    };



    // Generate initial model
    /**
    for (var i = 1; i <= 3; ++i) {
        self.models.listA.A.push({label: "Item A" + i});
    }
    */

    self.operacionPanel1 = function(model) {
      console.log("operacion con panel build form");
      self.models.listA = {
        "A": [{
            campo: {
              type: 'text',
              content: '<input type="text" class="form-control" id="newField-name" readonly>'
            }
          },
          {
            campo: {
              type: 'lista',
              content: '<select class="form-control" id="newField-type" ng-model="newField.type" ng-required></select>'
            }

          }


        ]
      }
      self.modelAsJson = angular.toJson(model, true);
      console.log(self.modelAsJson);

    }

    // Model to JSON for demo purpose
    $scope.$watch('models', function(model) {
      console.log("entre")
      self.modelAsJson = angular.toJson(model, true);
    }, true);




  }

  angular.module('formApp.formController').controller('formCtrl', gestionarFormulariosDinamicos);

})();
