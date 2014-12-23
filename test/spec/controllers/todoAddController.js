'use strict';

describe('Controller: todoAddController', function () {

    var todoController, scope;
    
    // Initialize the controller and a mock scope
    
    beforeEach(module('todoApp'));
    
    beforeEach(
        inject(function ($rootScope, $controller, $http) {
            scope = $rootScope.$new();
            todoController =  $controller('todoAddController', {
                    $scope: scope,
                    $http: $http    
            }); 
        })
    );
            
    it('check basic functions exist', function() {
        expect(angular.isFunction(scope.back)).toBe(true);
        expect(angular.isFunction(scope.saveTodo)).toBe(true);
        
        //validate the date format
        expect(scope.format).toBe('dd-MMMM-yyyy');
    });

});
