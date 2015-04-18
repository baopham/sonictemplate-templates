(function() {
    'use strict';

    angular.module('app')
        .config('{{_input_:name}}', {{_input_:name}});

    {{_input_:name}}.$inject = ['$stateProvider'];

    function {{_input_:name}}($stateProvider) {
        $stateProvider
          .state('{{_cursor_}}', {
              url: "/{{_input_:resource}}",
              templateUrl: '/',
              controller: '',
              controllerAs: 'vm'
          });
    }

})();
