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
              content: '<input type="text" class="form-control" readonly>'
            }
          },
          {
            campo: {
              type: 'lista',
              content: '<select class="form-control"></select>'
            }

          },
          {
            campo: {
              type: 'radio',
              content: '<input type="radio" name="" value="">'
            }

          },
          {
            campo: {
              type: 'text-area',
              content: '<textarea name="name" rows="8" cols="55" readonly></textarea>'
            }

          }


        ]
      },
      listB: {
        "B": []
      }
    };


    self.move = function() {}


    self.movedComponentB = function(model, listB, index) {
      console.log("entre B")
      console.log(index);
      for (var i = 0; i < listB.length; i++) {
        if (i == index) {
          self.models.listB.B.splice(index, 1);
        }
      }
      console.log(self.models.listB.B)
      self.initListA();
      self.modelAsJson = angular.toJson(model, true);
    }

    self.initListA = function() {
      self.models.listA = {
        "A": [{
            campo: {
              type: 'text',
              content: '<input type="text" class="form-control" readonly>'
            }
          },
          {
            campo: {
              type: 'lista',
              content: '<select class="form-control"></select>'
            }

          },
          {
            campo: {
              type: 'radio',
              content: '<input type="radio" name="" value="">'
            }

          },
          {
            campo: {
              type: 'text-area',
              content: '<textarea name="name" rows="8" cols="55" readonly></textarea>'
            }

          }


        ]
      }
    }

    self.movedComponentA = function(model) {
      self.initListA();
      self.modelAsJson = angular.toJson(model, true);
    }
  }

  angular.module('formApp.formController').controller('formCtrl', gestionarFormulariosDinamicos);

})();
