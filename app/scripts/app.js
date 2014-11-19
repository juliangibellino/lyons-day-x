/*jshint unused: vars */
define(['angular', 'controllers/main']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
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
    .module('lyonsDayXApp', ['lyonsDayXApp.controllers.MainCtrl',
/*angJSDeps*/
    'ngResource',
    'ngSanitize'
  ]);
});
