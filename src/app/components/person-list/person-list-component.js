(function() {
  'use strict';

  angular.module('task')
    .component('personList', {
      templateUrl: 'app/components/person-list/person-list.html',
      bindings: {
        persons: '<',
        onDelete: '&',
      },
    });

})();
