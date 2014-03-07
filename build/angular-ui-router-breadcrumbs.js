/**
 * angular-ui-router state derived breadcrumbs
 * @version v0.0.1-dev-2014-03-07
 * @link https://github.com/interval-braining/angular-ui-router-breadcrumbs
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'ui-router-breadcrumbs';
}

(function (window, angular, undefined) {
"use strict";
// Source: src/ui-router-breadcrumbs.js
/* exported breadcrumbs */
var breadcrumbs = angular.module('ui.router.breadcrumbs', ['ng', 'ui.router']);

// Source: src/directives/breadcrumbs.js
breadcrumbs.directive('breadcrumbs', [
  '$compile',
  '$rootScope',
  'breadcrumbs',
  function($compile, $rootScope, breadcrumbs) {
return {
      link: {
        pre: function link(scope, element, attrs) {
          /* jshint unused: false */ /* for element, attrs */
          scope.breadcrumbs = breadcrumbs;
        }
      },
      restrict: 'AC'
    };
  }
]);

// Source: src/services/breadcrumbs.js
breadcrumbs.provider('breadcrumbs', function BreadcrumbsProvider() {
function refresh($state, breadcrumbs) {
    var currentState = $state.$current;

    breadcrumbs.length = 0;

    breadcrumbs = currentState.breadcrumb;

    return breadcrumbs;
  }

  this.$get = [
    '$rootScope',
    '$state',
    function($rootScope, $state) {
      var breadcrumbs = [];
      breadcrumbs = refresh($state, breadcrumbs);
      $rootScope.$on('$stateChangeSuccess', function() {
        breadcrumbs = refresh($state, breadcrumbs);
      });
      return breadcrumbs;
    }
  ];
});
})(window, window.angular);