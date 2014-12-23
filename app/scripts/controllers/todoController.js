'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:todoController
 * @description
 * # todoController
 * Controller of the todoApp
 */
angular.module('todoApp')
    .controller('todoController', ['$scope', 'promiseObj', 'todoService', '$state', function ($scope, promiseObj, todoService, $state) {
        
        console.log('todo service getall');
        $scope.todoList = todoService.getAll();
        
        $scope.edit = function(id) {
            $state.transitionTo('todo-add', {id: id});    
        };
        
        $scope.add = function() {
            $state.transitionTo('todo-add');
        }
        
        $scope.remove = function(id) {
            var conf = confirm('Are you sure to delete record?');
            if (conf) {
                todoService.remove(id);   
                $scope.todoList = todoService.getAll(); 
            }
        }
        
    }]);
