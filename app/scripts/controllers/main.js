define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name lyonsDayXApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the lyonsDayXApp
   */
  angular.module('lyonsDayXApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
