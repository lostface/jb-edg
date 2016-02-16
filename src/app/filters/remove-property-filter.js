(function() {
  'use strict';

  angular.module('task')
    .filter('removeProperty', removePropertyFilter);

  function removePropertyFilter() {
    return function(obj, prop) {
      if (!obj || typeof obj != 'object' ||
          !prop || typeof prop != 'string') {
        return obj;
      }

      return Array.isArray(obj) ? obj.map(removeProp) : removeProp(obj);

      function removeProp(obj) {
        var copy = angular.copy(obj);
        delete copy[prop];
        return copy;
      }
    };
  }

})();
