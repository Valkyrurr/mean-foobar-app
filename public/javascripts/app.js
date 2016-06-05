(function() {
  "use strict";
  
  var app = angular.module("foobar", [
    "foobar.controllers.main",
    "foobar.controllers.post",
    "foobar.controllers.auth",
    "foobar.controllers.nav",
    "foobar.services.post",
    "foobar.services.auth",
    "ui.router"
  ]);

  app.config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state("root", {
        abstract: true,
        views: {
          "header": {
            templateUrl: "partials/header",
            controller: "NavController"
          }
        }
      });

      $urlRouterProvider.otherwise("home");
    }
  ]);
})();
