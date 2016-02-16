(function() {
  'use strict';

  angular.module('task')
    .component('jsonDump', {
      templateUrl: 'app/components/json-dump/json-dump.html',
      bindings: {
        persons: '<',
      },
    });

})();
