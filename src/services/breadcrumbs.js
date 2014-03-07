breadcrumbs.provider('breadcrumbs', function BreadcrumbsProvider() {
  'use strict';

  function refresh($state, breadcrumbs) {
    var currentState = $state.$current;

    breadcrumbs.length = 0;

    breadcrumbs = currentState.breadcrumb;

    return breadcrumbs;
  }

  // Public Interface

  this.compileWith = function(customCompiler) {
    return compile = customCompiler || defaultCompiler;
  };

  this.$get = [
    '$rootScope',
    '$state',
    function($rootScope, $state) {
      var breadcrumbs = [];
      breadcrumbs = refresh($state, breadcrumbs);
      $rootScope.$on('$stateChangeSuccess', function() {
        breadcrumbs = refresh($state, breadcrumbs);
      });
    }
  ];
});
