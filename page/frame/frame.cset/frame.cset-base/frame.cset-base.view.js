!(function(){'use strict';
	
	angular.module('frame')
	.config(['$stateProvider',  function($stateProvider ) {

		$stateProvider
			// 在这里添加url路由
			.state('frame.cset-base', {
				title: '公司信息',
				url: '/cset-base',
				templateUrl: 'page/frame/frame.cset/frame.cset-base/frame.cset-base.template.html',
				controller: ['$scope', 'SIGN', '$timeout', csetBase ]
			});
	}]);
  
  
	function csetBase($scope, SIGN ,$timeout){
		/*$scope.getData=false;
		
		SIGN.post('ism/ckBaseSetting', {})
		.then(function(json){
			$scope.company =  json.data;
			$scope.getData =true;
		})
		.catch(function(e){
			console.log("get companyData err", e);
		});*/
		
		$scope.getData =true;
		$scope.company ={
			"corpName":"航海公司",
			"shortName":"航海",
			"tel":"0725-28987777",
			"corpType":"航海公司",
			"business":"航海",
			"area":"浙江",
			"addr":"航海公司",
			"post":"航海公司",
			"fax":"航海公司",
			"web":"航海公司"
		};
		
		
		$scope.save=function(){
			if ($scope.myForm.$valid){
				SIGN.post("ism/saveBaseSetting",$scope.company)
				.then(function(json){
					$scope.remindtext='成功保存';
					$timeout($scope.cancelBtnIformation,1000);
				})
				.catch(function(e){
					$scope.remindtext='保存失败';
				});
			} 
		}
		
		$scope.isSubmitShow = {show:false};
		$scope.isDisabled = {distrue:false};
		$scope.isDisabled = {disfalse:true};

		//点击编辑
		$scope.clickedInformation = function(){
			$scope.isSubmitShow.show = true;
			$scope.isDisabled.distrue = true;
			$scope.isDisabled.disfalse = false;
		}

		//点击取消
		$scope.cancelBtnIformation = function(){
			$scope.remindtext="";
			$scope.isSubmitShow = {show:false};
			$scope.isDisabled = {distrue:false};
			$scope.isDisabled = {disfalse:true};
			SIGN.post('ism/ckBaseSetting', {})
			.then(function(json){
				console.log(json);
				$scope.company =  json.data;
			})
			.catch(function(e){
				console.log("get companyData err", e);
			});
		}
	}
})()