!(function(){'use strict';
	angular.module('frame') 
	.directive('showNumber', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/showdirective/number/number.template.html',
			scope: {
				numberdata : "="
			},
			controller:['$scope', function ($scope) {
				
				// type:'show-number',
				// text:'数字',
				// placeHolder:'提示文字',
				// maxlength : 18,
				// minlength : 0,
				// required:''	
				
				$scope.type = $scope.numberdata;
				
			}]
		}
	});  
})()
