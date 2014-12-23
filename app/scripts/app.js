'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    //'ngRoute',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
    .config(['$urlRouterProvider', '$locationProvider', 'localStorageServiceProvider', function ($urlRouterProvider, $locationProvider, localStorageServiceProvider) {
        $urlRouterProvider.otherwise('/todo/list');
        $locationProvider.hashPrefix('!');
        localStorageServiceProvider.setStorageType('sessionStorage');
    }]);        
