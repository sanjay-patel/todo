'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:todoController
 * @description
 * # todoController
 * Controller of the todoApp
 */
angular.module('todoApp')
    .controller('todoAddController', ['$scope', 'todoService', '$state', '$stateParams', function ($scope, todoService, $state, $stateParams) {
        var id = $stateParams.id;
        var mode = '';
        if (angular.isDefined(id)) {
            mode = 'Update';
        } else {
            mode = 'Add';
        }    
        
        $scope.assignees = [
            {id:1, name: 'user1'},
            {id:2, name: 'user2'},
            {id:3, name: 'user3'},
            {id:4, name: 'user4'}        
        ];
        
        $scope.types = [
            {id:1, name: 'New'},
            {id:2, name: 'Bug'},
            {id:3, name: 'Addons'}
        ];
        
        $scope.status = [
            {id:1, name: 'Pending'},
            {id:2, name: 'InProgress'},
            {id:3, name: 'Finished'},
            {id:4, name: 'Reviewed'},
            {id:5, name: 'Closed'},
        ];
        
        /*
        $scope.back = function() {
            //$state.transitionTo('todo-list'); 
        }
         */
    }]);
