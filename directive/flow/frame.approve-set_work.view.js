!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.approve-set_work', {
				title: '流程设置',
				url: '/approve-set_work',
				templateUrl: 'page/frame/frame.set_work/frame.approve-set_work/frame.approve-set_work.template.html',
				controller: ['$scope', 'SIGN', management ]
			});
	}]);
  
  
	function management($scope, SIGN){
		// 用户列表
		$scope.peopleData = [
			{name : "张三", ID : 1 },
			{name : "李四", ID : 2 },
			{name : "王五", ID : 3 
		}];
		// 审批数组
		$scope.approvrListData=[];
		
		$scope.peopleList = false;
		$scope.officer = true;
		$scope.people = false;
		$scope.changeOffice = function(){
			$scope.officer = true;
			$scope.people = false;
		}
		$scope.changePeople = function(){
			$scope.officer = false;
			$scope.people = true;
		}
		$scope.choosePeople = function(index){
			$scope.CPeople = $scope.peopleData[index];
			$scope.textNumber = $scope.CPeople.name;
		}
		$scope.showPeople = function(){
			$scope.peopleList = !$scope.peopleList;
		}
		$scope.addjb = function(){
			$scope.temp={
				user:{userid : "", usertype : ""}, 
				passNumber : ""
			};
			
			$scope.approvrListData.push($scope.tem);
			
		}
	}
})()