'use strict';

angular.module('todoApp')
.service('todoService', function($http, localStorageService) {
    
    var add = function(val) {
        var todos = localStorageService.get('todos');
        if (!todos) {
            todos = {};
        }  
        //todos.push(val);
        todos[ val.id ] = val;
        localStorageService.set('todos', todos); 
        return true;   
    };
    
    var update = function(todo) {
        var id = todo.id;
        id = todo.id + '';
        var todos = localStorageService.get('todos');
        
        todos[ todo.id ] = todo;

        localStorageService.set('todos', todos);
    };
    
    var remove = function(id) {
        var todos = localStorageService.get('todos');
        delete todos[ id ]; 
        localStorageService.set('todos', todos);
    };
    
    var getAll = function () {
        var todos = localStorageService.get('todos');
        return todos;
    };
    
    var getFromAPI = function() {
            var request = $http({
                method: 'GET',
                url: 'data/todoData.json',
                params: {},
                data: []     
            });  
            request.then(function(response) {
                if (response.status === 200) {
                    var data = response.data;
                    angular.forEach(data, function(val) {
                        add(val);
                    });
                } else {
                    window.alert('Error in api call');
                }
            
                
	        }, function(data) {
                window.alert('Error in api call');
                return data;
            });
    
            return request;                        
    }; //end of get all
    
    var getDetail = function(todoId) {
        var todos = getAll();

        var detail = null;
        angular.forEach(todos, function(todo) {

            todo.id = todo.id + '';
            todoId = todoId + '';

            if (todo.id === todoId) {
                detail = todo;    
            } 
        });
        return detail;
    };
    
    return {
        getDetail: getDetail,
        getFromAPI: getFromAPI,
        getAll: getAll,
        add: add,
        update: update,
        remove: remove
    };
    
});
