!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.my-', {
				title: '我的消息',
				url: '/my',
				templateUrl: 'page/frame/frame.my/frame.my.template.html',
				controller: ['$scope', 'SIGN', management ]
			});
	}]);
  
  
	function management($scope ,SIGN){
		$scope.listNames = ['全部','未处理','已处理','已删除'];
		$scope.lists = [];
		var i, j, listCount = $scope.listNames.length;
		// 初始化
		for(i=0; i<listCount; i++){
			$scope.lists[$scope.listNames[i]] = [];
		}
		$scope.isHide = true;
		$scope.attr = false,
		$scope.primary = [
			{'text':'ISM','isflag':false,'states':0},
			{'text':'系统消息','isflag':false,'states':1},
			{'text':'通知','isflag':false,'states':2},
			{'text':'好友消息','isflag':false,'states':3}
		];
		$scope.children = [
			{'text':'新建流程','isflag':false,'states':0},
			{'text':'审批','isflag':false,'states':1}
		];
		
		$scope.state = [
			{'text':'全部','isflag':false,'states':''},
			{'text':'未读','isflag':false,'states':0},
			{'text':'已读','isflag':false,'states':1},
			{'text':'未处理','isflag':false,'states':2},
			{'text':'已处理','isflag':false,'states':3}
		];   
		SIGN.post("mymessage/list",{})
		.then(function(json){
			if(json && json.data){
				// 保存到内存，在子路由中不用再请求
				for(i=0; i<json.data.length; i++){
				  $scope.lists[[$scope.listNames[json.data[i].msgState + 1]]].push(json.data[i]);
				}
				// 全部
				$scope.lists['全部'] = json.data;
				/*$scope.$apply();*/
			}
		})
		.catch(function(e){
		console.log("get companyData err", e);
		});
		//高级搜索
		$scope.seniorSearch = function(){
			if ( $scope.isHide ) $scope.isHide = !$scope.isHide;
		}
	
		$scope.searchDetail = function(msgId,msgState){
			$scope.activeListName = '';
			SIGN.post("mymessage/findMsgById",{msgId:msgId,msgState:msgState})
			.then(function(json){
				$scope.searchData = json.data;
				$scope.$apply();
			})	
			window.location.replace( "#/frame/my-?msgid=" + msgId);
		}
		// var msgId = $scope.msgId = $scope.PARAM['msgid'];
		// if(msgId){
			// $scope.searchDetail(msgId);
		// }
		// else{
			// $scope.activeListName = $scope.PARAM.name || '全部';
		// }
		$scope.activeListName = '全部';
	}
	
})()