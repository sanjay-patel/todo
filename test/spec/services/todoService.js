'use strict';

describe('Controller: todoService', function () {

    var httpBackend, scope, localStorageService, todoService;
    
    beforeEach(function() {
        module('todoApp');
        inject(function($httpBackend, $rootScope, $controller, $http, _localStorageService_, _todoService_) {
            httpBackend = $httpBackend;
            todoService = _todoService_;
            scope = $rootScope.$new();
            localStorageService = _localStorageService_; 
            
            $controller('todoController',{
                $scope: scope,
                $http: $http    
            });
            
            var returnData = [
                {'id': 1319318687815, 'title': 'first task', 'description': 'test des', 'assignee': {'id': '1', 'name': 'user1'}, 'startDate': '2014-12-20', 'endDate': '2015-02-15', 'type': {'id': '1', 'name': 'New'}, 'status': {'id': '1', 'name': 'Pending'} },
                {'id': 1219318687815, 'title': 'second task', 'description': 'test des', 'assignee': {'id': '2', 'name': 'user2'}, 'startDate': '2014-12-20', 'endDate': '2015-02-15', 'type': {'id': '2', 'name': 'Bug'}, 'status': {'id': '2', 'name': 'InProgress'}}
            ];
            
            httpBackend.when('GET','views/todoList.html').respond(200, {});
            httpBackend.when('GET','data/todoData.json').respond(200, returnData); 
            
        });
        
        
    });

    it('it should tes http call for todoData.json', function() {
        todoService.getFromAPI();
        httpBackend.flush();
            
        var todos = localStorageService.get('todos');
        
        angular.forEach(todos, function(todo, index) {
            
            if (index === 1319318687815) {
                expect(todo.title).toEqual('first task');
            }
        });
        
    });

    it('test must contain basic methods', function() {
        expect(angular.isFunction(todoService.add)).toBe(true);
        expect(angular.isFunction(todoService.update)).toBe(true);
        expect(angular.isFunction(todoService.remove)).toBe(true);
        expect(angular.isFunction(todoService.getAll)).toBe(true);
        
        expect(angular.isFunction(todoService.getFromAPI)).toBe(true);
        expect(angular.isFunction(todoService.getDetail)).toBe(true);
        
    });
    

});
