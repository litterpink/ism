!(function(){'use strict';
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-work_list', {
				title: '流程列表',
				url: '/approve-work_list',
				templateUrl: 'page/frame/frame.set_work/frame.approve-set_form/frame.approve-set_form.template.html',
				controller: ['$scope', 'popup', management ]
			});
	}]);

	function management($scope, popup){
		$scope.listData = [
			{id : 1 , name : '测试流程', time : '2015-1-1' ,content : '审批设置'}
		];
		// 删除流程
		$scope.remove=function(index, event){
			var data={
				title : '确认删除',
				textdata : '确认删除此流程?'
			};
			var dataSuccess={
				title : '删除结果',
				textdata : '删除成功'
			};
			var dataFail={
				title : '删除结果',
				textdata : '删除失败'
			};
			var appendTo = angular.element( event.currentTarget).parent();
			popup.SelfConfirm(data, appendTo)
			.result.then(
				function(value){
					popup.SelfAlert(dataFail, appendTo);
				},
				function(value){
	
				}
			);
		}
	}
})()