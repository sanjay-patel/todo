'use strict';

describe('Controller: todoController', function () {

    var todoController, scope;
    
    // Initialize the controller and a mock scope
    
    beforeEach(module('todoApp'));
    
    beforeEach(
        inject(function ($rootScope, $controller, $http) {
            scope = $rootScope.$new();
            todoController =  $controller('todoController', {
                    $scope: scope,
                    $http: $http    
            }); 
        })
    );
            
    it('check basic functions exist', function() {
        expect(angular.isFunction(scope.edit)).toBe(true);
        expect(angular.isFunction(scope.add)).toBe(true);
        expect(angular.isFunction(scope.remove)).toBe(true);
    });

});
