'use strict';

angular.module('ngChance')
  .directive('ngChance', function() {
    return function(scope, element, attrs) {
    	element.text(chance[attrs.ngChance]);
    }
  });