(function() {
  'use strict';

  angular.module('task')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
    });

  MainController.$inject = ['$http', '$mdDialog', 'idGenService'];

  function MainController($http, $mdDialog, idGenService) {
    this.persons = [];

    this.$onInit = $onInit;
    this.addPerson = addPerson;
    this.deletePerson = deletePerson;
    this.showAddPersonDialog = showAddPersonDialog;
    this.showGraphDialog = showGraphDialog;

    function $onInit() {
      $http.get('assets/data/persons.json', { responseType: 'json' })
        .then(setPersons.bind(this));

      function setPersons(response) {
        this.persons = response.data
          .map(copy)
          .map(extendWithId);

        function copy(person) {
          return angular.copy(person);
        }

        function extendWithId(person) {
          person.id = idGenService.getNext();
          return person;
        }
      }
    }

    function deletePerson(personToDelete) {
      this.persons = this.persons.filter(isNotDeleted);

      function isNotDeleted(person) {
        return person.id !== personToDelete.id;
      }
    }

    function addPerson(person) {
      person = angular.extend({
            id: idGenService.getNext(),
            name: null,
            job: '-',
            age: '-',
            nick: '-',
            employee: false,
          },
          person
        );

      this.persons = this.persons.concat(person);
    }

    function showAddPersonDialog($event) {
      $mdDialog.show({
          templateUrl: 'app/dialogs/add-person-dialog/add-person-dialog.html',
          controller: 'AddPersonDialogController',
          controllerAs: '$ctrl',
          parent: angular.element(document.body),
          targetEvent: $event,
          clickOutsideToClose: false,
          fullscreen: true
        })
        .then(this.addPerson.bind(this));
    }

    function showGraphDialog($event) {
      $mdDialog.show({
          templateUrl: 'app/dialogs/graph-dialog/graph-dialog.html',
          controller: 'GraphDialogController',
          controllerAs: '$ctrl',
          locals: { persons: this.persons },
          parent: angular.element(document.body),
          targetEvent: $event,
          clickOutsideToClose: true,
          fullscreen: true
        });
    }
  }

})();
