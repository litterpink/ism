!(function(){'use strict';
	angular.module('frame')
	.directive('compileText', function() {
		return {
			restrict: 'A',
			scope: {
				compileText: "@",
				userData: "="
			},
			controller:['$scope', '$compile', '$element', function ($scope, $compile, $element) {
				$scope.$watch('compileText', function(vNew){
					$element.html(vNew);
					$compile($element.contents())($scope);
				});
			}]
		}
	});
})()
