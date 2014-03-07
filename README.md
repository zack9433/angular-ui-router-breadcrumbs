# UI-Router-Breadcrumbs

UI-Router-Breadcrumbs provides a service and directive that allow for the
creation of navigational breadcrumbs that are flexible and ready for customization.

**Note:** *This library fork from https://github.com/interval-braining/angular-ui-router-breadcrumbs and is totally different.*

## Dependency
**(1)** angular.js
**(2)** angular-ui-router.js

## Getting Started

**(1)** Get UI-Router-Breadcrumbs by cloning and building this repository:
```bash
bower install https://github.com/interval-braining/angular-ui-router-breadcrumbs.git
```

**(2)** Include JS file.
```javascript
<script src="bower_components/angular-ui-router-breadcrumbs/build/angular-ui-router-breadcrumbs.js"></script>
```

**(3)** Add `'ui.router.breadcrumbs'` to your main module's list of dependencies.
```javascript
var app = angular.module('app', ['ui-router', 'ui-router-breadcrumbs']);
```

## Usage

### Breadcrumbs Service

To add a breadcrumb to a state, simply add a breadcrumb attribute to the state
object where it is defined. For example:
```javascript
  $stateProvider.state('a', {
    breadcrumb: [{
      stateName: 'a',
      text: 'State A'
    }],
    url: '/a',
  }).state('a.b', {
    breadcrumb: [{
      stateName: 'a',
      text: 'State A'
    }, {
      class: 'alternate',
      stateName: 'a.b',
      text: 'State B'
    }],
    url: '/b'
  });
```

### Breadcrumbs Directive
The breadcrumbs data can be used in templates by referencing breadcrumbs
on the scope. For example, a simple breadcrumbs control might look like:
```html
<ol breadcrumbs>
  <li ng-repeat="breadcrumb in breadcrumbs">
    <a ui-sref="{{breadcrumb.stateName}}">{{breadcrumb.text}}</a>
  </li>
</ol>
```
