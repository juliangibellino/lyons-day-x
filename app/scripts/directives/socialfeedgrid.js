define(['angular', 'jquery', 'isotope'], function (angular, $, Isotope) {
  'use strict';

  /**
   * @ngdoc directive
   * @name lyonsDayXApp.directive:socialFeedGrid
   * @description
   * # socialFeedGrid
   */
  angular.module('lyonsDayXApp.directives.SocialFeedGrid', [])
    .directive('socialFeedGrid',
    ['$timeout', function ($timeout) {
      return {
        restrict: 'AE',
        link: function (scope, element, attrs) {

          var isoGrid;

          function createGrid(){
            isoGrid = new Isotope( '#' + attrs.id, {
              itemSelector: '.ldx-social-tile',
              layoutMode: 'masonry'
            });
            //force a relayout after instantiation
            relayoutGrid();
          }

          function relayoutGrid(){
            $timeout(function(){
              isoGrid.layout();
            }, 500);
          }

          scope.$on('socialFeedLoaded', function(){
            $timeout(createGrid, 100);
          });

        }
      };
    }]);
});
