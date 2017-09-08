!(function(){'use strict';
	angular.module('frame') 
	.directive('showText', function() {
		return {
			restrict: 'AE',
			templateUrl: 'directive/showdirective/text/text.template.html',
			scope: {
				textdata : "="
			},
			controller:['$scope', function ($scope) {
				// type:'show-text',
				// text:'多行文本',
				// required:'',
				// minLength:'',
				// maxLength:'',
				// placeHolder:'提示文字',
				// errorText:'错误提示文字'
				
				$scope.type = $scope.textdata;
			}]
		}
	});  
})()
