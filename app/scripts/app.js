/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/tshirt', 'controllers/socialfeed', 'services/socialfeed', 'filters/timeago', 'directives/socialfeedgrid', 'controllers/tweetdeck']/*deps*/, function (angular, MainCtrl, TshirtCtrl, SocialFeedCtrl, SocialFeedService, TimeagoFilter, SocialFeedGridDirective, TweetDeckCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name lyonsDayXApp
   * @description
   * # lyonsDayXApp
   *
   * Main module of the application.
   */
  return angular
    .module('lyonsDayXApp', [
      'lyonsDayXApp.controllers.MainCtrl',
      'lyonsDayXApp.controllers.TshirtCtrl',
'lyonsDayXApp.controllers.SocialFeedCtrl',
'lyonsDayXApp.services.SocialFeed',
'lyonsDayXApp.filters.Timeago',
'lyonsDayXApp.directives.SocialFeedGrid',
'lyonsDayXApp.controllers.TweetDeckCtrl',
/*angJSDeps*/
      'ngResource',
      'ngSanitize'
    ]);
});
