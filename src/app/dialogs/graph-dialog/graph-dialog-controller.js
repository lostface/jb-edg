(function() {
  'use strict';

  angular.module('task')
    .controller('GraphDialogController', GraphDialogController);

  GraphDialogController.$inject = ['$mdDialog', 'persons'];

  function GraphDialogController($mdDialog, persons) {
    this.ages = persons
      .map(pluckAge)
      .map(Number)
      .filter(isNumber);

    this.hide = hide;

    function hide() {
      $mdDialog.hide();
    }

    function isNumber(value) {
      return typeof value == 'number' && !isNaN(value);
    }

    function pluckAge(person) {
      return person.age;
    }
  }

})();
