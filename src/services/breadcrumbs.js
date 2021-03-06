breadcrumbs.provider('breadcrumbs', function BreadcrumbsProvider() {
  'use strict';

  function refresh($state, breadcrumbs) {
    var currentState = $state.$current;

    breadcrumbs.length = 0;

    if (currentState.breadcrumb) {
      var len = currentState.breadcrumb.length;

      for (var i = 0; i < len; i++) {
        breadcrumbs.push(currentState.breadcrumb[i]);
      }
    }

    return breadcrumbs;
  }

  this.$get = [
    '$rootScope',
    '$state',
    function($rootScope, $state) {
      var breadcrumbs = [];
      refresh($state, breadcrumbs);
      $rootScope.$on('$stateChangeSuccess', function() {
        refresh($state, breadcrumbs);
      });
      return breadcrumbs;
    }
  ];
});
