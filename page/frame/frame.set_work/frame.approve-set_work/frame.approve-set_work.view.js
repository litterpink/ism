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
		$scope.list = [
			{ name: '流程设置' , 		directive:'officer', 	data:
				[{name : "新流程", startdate:"", list : [true,true,true,true,true,true,true]}]
			},
			{ name: '审批设置' , 		directive:'approve',	data: []},
			{ name: '数据设置' , 		directive:'data', 		data: []},
			{ name: '流程初始设置' , 	directive:'newdata',	data: []},
			{ name: '流程后续设置' , 	directive:'last',		data: []},
			// { name: '查询数据设置' , 	directive:'selectdata',	data: ''},
			{ name: '定时器设置' , 		directive:'timing',		data: []}
		];
		$scope.active = $scope.list[0];
		$scope.clickItem = function(item){
			$scope.active = item;
		}
		$scope.save=function(){
			console.log('list的内容是', $scope.list);
		}
		var id = getPar('id');
		if (id) {
			$scope.list[0].data = [
				{
					name : "测试流程",
					startdate:"2015-1-1",
					list : [true,false,false,false,false,false,false]
				}
			];

			//这边通过id获取流程数据
		}
		function getPar(par){
			//获取当前URL
			var local_url = document.location.href;
			console.log(local_url);
			//获取要取得的get参数位置
			var get = local_url.indexOf(par +"=");
			if(get == -1){
				return false;
			}else{
				//截取字符串
				var get_par = local_url.slice(par.length + get + 1);
				//判断截取后的字符串是否还有其他get参数
				var nextPar = get_par.indexOf("&");
				if(nextPar != -1){
					get_par = get_par.slice(0, nextPar);
				}
				return get_par;
			}

		}
	}
})()