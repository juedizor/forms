(function() {

  'use strict';

  angular.module('formApp.formController', []);


  function gestionarFormulariosDinamicos($scope) {
    $scope.newField = {};
    $scope.fields = [{
      type: 'text',
      name: 'Name',
      placeholder: 'Please enter your name',
      order: 1
    }];
    $scope.editing = false;
    $scope.tokenize = function(slug1, slug2) {
      var result = slug1;
      result = result.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
      result = result.replace(/-/gi, "_");
      result = result.replace(/\s/gi, "-");
      if (slug2) {
        result += '-' + $scope.token(slug2);
      }
      return result;
    };
    $scope.saveField = function() {
      console.log("entered save");
      if ($scope.newField.type == 'checkboxes') {
        $scope.newField.value = {};
      }
      if ($scope.editing !== false) {
        $scope.fields[$scope.editing] = $scope.newField;
        $scope.editing = false;
      } else {
        $scope.fields.push($scope.newField);
      }
      $scope.newField = {
        order: 0
      };
    };
    $scope.editField = function(field) {
      $scope.editing = $scope.fields.indexOf(field);
      $scope.newField = field;
    };
    $scope.splice = function(field, fields) {
      fields.splice(fields.indexOf(field), 1);
    };
    $scope.addOption = function() {
      if ($scope.newField.options === undefined) {
        $scope.newField.options = [];
      }
      $scope.newField.options.push({
        order: 0
      });
    };
    $scope.typeSwitch = function(type) {
      /*if (angular.Array.indexOf(['checkboxes','select','radio'], type) === -1)
      	return type;*/
      if (type == 'checkboxes')
        return 'multiple';
      if (type == 'select')
        return 'multiple';
      if (type == 'radio')
        return 'multiple';

      return type;
    }
  }

  angular.module('formApp.formController').controller('formCtrl', gestionarFormulariosDinamicos);

})();
