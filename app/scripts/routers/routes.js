
'use strict';

angular.module('todoApp')
    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('todo-list', {
                url: '/todo/list',
                controller: 'todoController',
                templateUrl: 'views/todoList.html',
                resolve: {
                    promiseObj: function(todoService, localStorageService) {
                        
                        if (!localStorageService.get('todoloaded')) {
                            var promise = todoService.getFromAPI();
                            
                            promise.then(function(response) {
                                if (response.status === 200) {
                                    localStorageService.set('todoloaded', true);
                                }    
                            }, function() {});
                            
                            return promise;    
                        } else {
                            return null;
                        }
                        
                       //return $http({method: 'GET', url: 'data/todoData.json'});
                    }
                
                }
            })
            .state('todo-add', {
                url: '/todo/add/:id',
                controller: 'todoAddController',
                templateUrl: 'views/todoAdd.html'
            })
            
            ;
    }]);