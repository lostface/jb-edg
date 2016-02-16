(function() {
  'use strict';

  angular.module('task')
    .factory('idGenService', idGenService);

  function idGenService() {
    var nextId = 0;

    return {
      getNext: getNext,
    };

    function getNext() {
      return nextId++;
    }
  }

})();
