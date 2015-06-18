'use strict';

angular.module('gulpAngular', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'trNgGrid',
  'gridster',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('charts', {
        url: '/charts/:cloudType',
        templateUrl: 'app/charts/charts.html',
        controller: function($scope, $stateParams) {
          $scope.resourceid = $stateParams.resourceId;
        }
      });

    $urlRouterProvider.otherwise('/');
  })
;
