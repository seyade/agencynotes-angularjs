'use strict';

/**
 * @ngdoc overview
 * @name testFrameworkjasmineApp
 * @description
 * # testFrameworkjasmineApp
 *
 * Main module of the application.
 */
angular
  .module('AgencyNotesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/agents', {
        templateUrl: 'views/agents.html',
        controller: 'AgentsCtrl'
      })
      .when('/agents/:itemId', {
        templateUrl: 'views/agentdetails.html',
        controller: 'AgentDetailsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
