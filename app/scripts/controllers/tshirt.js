define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name lyonsDayXApp.controller:TshirtCtrl
   * @description
   * # TshirtCtrl
   * Controller of the lyonsDayXApp
   */
  angular.module('lyonsDayXApp.controllers.TshirtCtrl', [])
    .controller('TshirtCtrl', function ($scope) {

      $scope.isFront = true;

      $scope.enableFront = function(){
        $scope.isFront = true;
      };

      $scope.disableFront = function(){
        $scope.isFront = false;
      };

    });
});
