(function() {
    'use strict';

    angular.module('app')
        .factory('{{_input_:name}}', {{_input_:name}});

    {{_input_:name}}.$inject = ['TokenService', 'Restangular'];

    function {{_input_:name}}(TokenService, Restangular) {
        return {
            getAll: getAll,
            getOne: getOne,
            update: update,
            create: create
        };

        ////
        function getAll() {
            //
        }

        function getOne(uuid) {
            var token = TokenService.get();
            //
        }

        function update(object) {
            var token = TokenService.get();
            //
        }

        function create(object) {
            var token = TokenService.get();
            //
        }

    }

})();
