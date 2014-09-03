'use strict';

//Setting up route
angular.module('mean.system').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/coming-soon');

    // states for my app
    $stateProvider
      .state('Coming Soon', {
        url: '/coming-soon',
        templateUrl: 'system/views/comingSoon.html'
      });
  }
]).config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(true);
  }
]);
