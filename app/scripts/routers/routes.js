
'use strict';

angular.module('todoApp')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('todo-list', {
                url: '/todo/list',
                controller: 'todoController',
                templateUrl: 'views/todoList.html',
                resolve: {
                    promiseObj: function(todoService) {
                        var promise = todoService.getFromAPI();
                        console.log(promise);
                        return promise;    
                       //return $http({method: 'GET', url: 'data/todoData.json'});
                    }
                
                }
            })
            .state('todo-add', {
                url: '/todo/add',
                controller: 'todoAddController',
                templateUrl: 'views/todoAdd.html'
            })
            
            ;
    }]);