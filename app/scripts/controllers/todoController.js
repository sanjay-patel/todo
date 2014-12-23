'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:todoController
 * @description
 * # todoController
 * Controller of the todoApp
 */
angular.module('todoApp')
    .controller('todoController', ['$scope', 'todoService', '$state', function ($scope, todoService, $state) {
        
        $scope.todoList = todoService.getAll();
        
        $scope.edit = function(id) {
            $state.transitionTo('todo-add', {id: id});    
        };
        
        $scope.add = function() {
            $state.transitionTo('todo-add');
        };
        
        $scope.remove = function(id) {
            var conf = window.confirm('Are you sure to delete record?');
            if (conf) {
                todoService.remove(id);   
                $scope.todoList = todoService.getAll(); 
            }
        };
        
    }]);
