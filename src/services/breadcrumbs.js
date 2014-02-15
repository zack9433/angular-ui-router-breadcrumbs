breadcrumbs.provider('breadcrumbs', function BreadcrumbsProvider() {
  var compile;

  function defaultCompiler(currentState) {
    if(!currentState.breadcrumb) { return null };

    var breadcrumb;
    if(typeof currentState.breadcrumb === 'string') {
      return {
        text: currentState.breadcrumb,
        'ui-sref': currentState.name
      };
    } else {
      return currentState.breadcrumb;
    }
  };

  compile = defaultCompiler;

  function refresh($state, breadcrumbs) {
    var currentState = $state.$current,
      breadcrumb;

    breadcrumbs.length = 0;

    while(currentState.parent) {
      breadcrumb = compile(currentState.self);
      if(breadcrumb) { breadcrumbs.push(breadcrumb); }
      currentState = currentState.parent;
    }
    return breadcrumbs;
  };

  // Public Interface

  this.compileWith = function(customCompiler) {
    return compile = customCompiler || defaultCompiler;
  };

  this.$get = [
    '$rootScope',
    '$state',
    function($rootScope, $state) {
      var breadcrumbs = [];
      $rootScope.$on('$stateChangeSuccess', function() { refresh($state, breadcrumbs); });
      return breadcrumbs;
    }
  ];
});