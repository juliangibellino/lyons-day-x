/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/tshirt', 'controllers/socialfeed', 'services/socialfeed', 'filters/timeago', 'directives/socialfeedgrid']/*deps*/, function (angular, MainCtrl, TshirtCtrl, SocialFeedCtrl, SocialFeedService, TimeagoFilter, SocialFeedGridDirective)/*invoke*/ {
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
/*angJSDeps*/
      'ngResource',
      'ngSanitize'
    ]);
});
