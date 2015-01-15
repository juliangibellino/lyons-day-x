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

      $scope.shirtOptions = [
        {
          name : 'Sm',
          code: 'Small'
        },
        {
          name : 'M',
          code: 'Med'
        },
        {
          name : 'L',
          code: 'Lg'
        },
        {
          name : 'XL',
          code: 'XL'
        },
        {
          name : 'XXL',
          code: 'XXL'
        }
      ];

      $scope.shirtForm = {
        size : $scope.shirtOptions[0]
      };

      $scope.enableFront = function(){
        $scope.isFront = true;
      };

      $scope.disableFront = function(){
        $scope.isFront = false;
      };

      $scope.setShirtSize = function(shirtSize){
        $scope.shirtForm.size = shirtSize;
      }
    });
});
