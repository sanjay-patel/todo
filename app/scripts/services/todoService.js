'use strict';

angular.module('todoApp')
.service('todoService', function($http) {
    var isloaded = false, todos = [];
    
    var setLoaded = function(val) {
        isloaded = val;    
    };
    
    var getLoaded = function() {
        return isloaded;
    };
    
    var add = function(val) {
        todos.push(val);    
    };
    
    var getAll = function () {
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
    
    return {
        getFromAPI: getFromAPI,
        setLoaded: setLoaded,
        getLoaded: getLoaded,
        getAll: getAll,
        add: add
    };
    
});
