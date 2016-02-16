(function() {
  'use strict';

  angular.module('task')
    .controller('AddPersonDialogController', AddPersonDialogController);

  AddPersonDialogController.$inject = ['$mdDialog'];

  function AddPersonDialogController($mdDialog) {
    this.answer = answer;
    this.cancel = cancel;

    function answer(answer) {
      $mdDialog.hide(answer);
    }

    function cancel() {
      $mdDialog.cancel();
    }
  }

})();
