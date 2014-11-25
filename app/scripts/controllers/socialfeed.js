define(['angular', 'lodash'], function (angular, _) {
  'use strict';

  /**
   * @ngdoc function
   * @name lyonsDayXApp.controller:SocialFeedCtrl
   * @description
   * # SocialFeedCtrl
   * Controller of the lyonsDayXApp
   */
  angular.module('lyonsDayXApp.controllers.SocialFeedCtrl', [])
    .controller('SocialFeedCtrl', [
      '$scope', '$q', 'SocialFeed',
      function ($scope, $q, SocialFeedService) {

        var twitterFeed = [];

        var instagramFeed = [];

        $scope.socialFeed = [];

        $scope.isLoading = false;

        function _init(){
          _getSocialFeeds();
        }

        function _getSocialFeeds(){
          var feedsDefer = $q.all([_getTweets(), _getInstagram('lyonsday'), _getInstagram('lyonsday9'), _getInstagram('lyonsday8')]);

          $scope.isLoading = true;

          feedsDefer.then(function(){
            $scope.isLoading = false;
            var combinedFeed = twitterFeed.concat(instagramFeed),
                deduped = _.uniq(combinedFeed, 'id');


            $scope.socialFeed = deduped;

            $scope.$broadcast('socialFeedLoaded');

          });

        }

        function _getTweets(){
          return SocialFeedService.getTweets(['#lyonsday', '#lyonsday10', 'lyonsdayx']).then(function(response){
            twitterFeed = response.data;
          });
        }

        function _getInstagram(hashTag){
          return SocialFeedService.getInstagram(hashTag).then(function(response){
            if(response.data.length > 0){
              angular.forEach(response.data, function(post){
                instagramFeed.push(post);
              });
            }
          });
        }

        angular.element(document).ready(_init);

    }]);
});

