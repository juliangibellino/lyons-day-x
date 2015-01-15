define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name lyonsDayXApp.controller:TweetDeckCtrl
   * @description
   * # TweetDeckCtrl
   * Controller of the lyonsDayXApp
   */
  angular.module('lyonsDayXApp.controllers.TweetDeckCtrl', ['ngAnimate'])
    .controller('TweetDeckCtrl', ['$scope', '$timeout', '$interval', function ($scope, $timeout, $interval) {

      var currentTweetIndex = 0;

      $scope.tweets = [
        {
          content: "You cant drink all day if you dont start in the morning. #lyonsday",
          userName: "@jackjokinen",
          active: true
        },
        {
          content: "If you're not celebrating Lyons Day you're not living #lyonsday",
          userName: "@juliang1703",
          active: false
        },
        {
          content: "My liver is bracing for the storm #lyonsday",
          userName: "@djdodis",
          active: false
        },
        {
          content: "#lyonsday is so close I can taste it",
          userName: "@NYCgerm",
          active: false
        },
        {
          content: "I hope that my kids and grandkids look forward to Lyons day as much as I do! #lyonsday",
          userName: "@NicoMiceli",
          active: false
        },
        {
          content: "Let me know if anyone needs to be picked up from jail later.  #lyonsday",
          userName: "@joelrtodd",
          active: false
        },
        {
          content: "Beer pong at noon? #yesplease #lyonsday",
          userName: "@djdodis",
          active: false
        },
        {
          content: "im gonna rock out to some ace of base hard body today #lyonsday",
          userName: "@NicoMiceli",
          active: false
        }
      ];

      function _init(){
        $interval(_cycleTweets, 10000);
      }

      function _cycleTweets(){
        currentTweetIndex = currentTweetIndex === $scope.tweets.length - 1 ? 0 : currentTweetIndex + 1;

        angular.forEach($scope.tweets, function(tweet, index){
          console.log(currentTweetIndex);
          tweet.active = currentTweetIndex === index;
        });
      }

      angular.element(document).ready(_init);

    }]);
});
