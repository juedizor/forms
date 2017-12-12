(function() {

  'use strict';

  angular.module('formApp.formController', ['formApp.openModalFactory']);


  function gestionarFormulariosDinamicos(openModalFactory) {
    var self = this;

    self.items = ['item1', 'item2', 'item3'];
    self.animationsEnabled = true;


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
              content: '<input type="radio" class="form-control" name="" value="">'
            }

          },
          {
            campo: {
              type: 'text-area',
              content: '<textarea name="name" rows="8" cols="55" readonly></textarea>'
            }

          },
          {
            campo: {
              type: 'check-box',
              content: '<input type="checkbox" class="form-control" readonly>'
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
      for (var i = 0; i < listB.length; i++) {
        if (i == index) {
          self.models.listB.B.splice(index, 1);
        }
      }
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
              content: '<input type="radio" class="form-control" name="" value="">'
            }
          },
          {
            campo: {
              type: 'text-area',
              content: '<textarea name="name" rows="8" cols="55" readonly></textarea>'
            }
          },
          {
            campo: {
              type: 'check-box',
              content: '<input type="checkbox" class="form-control" readonly>'
            }
          }


        ]
      }
    }

    self.movedComponentA = function(model, item, index) {
      self.initListA();
      var params = {
        listB: self.models.listB,
        item: item
      }
      openModalFactory.open('', '../../views/form/atrFieldModal.html', params, 'modalInstanceFormCtrl');
      self.modelAsJson = angular.toJson(model, true);
    }
  }

  angular.module('formApp.formController').controller('formCtrl', gestionarFormulariosDinamicos);

})();
