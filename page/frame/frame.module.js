/* 
	main page define
	author: lianglifeng
	E-mail: lianglf@alhigh.com.cn
	time: 2017.4.5
 */
!(function(){'use strict';
	angular.module('frame', ['ui.router', 'ui.tree', 'ui.bootstrap']);
	angular.module('frame')
	.config(['$urlRouterProvider', '$stateProvider',  function($urlRouterProvider, $stateProvider ) {
		$stateProvider
			// 在这里添加url路由
			.state('frame', {
				title: '菜单',
				url: '/frame',
				templateUrl: 'page/frame/frame.template.html',
				controller: ['$scope', 'SIGN', 'ConfigData', miancon]
			});
	}]);
  
  
	 function miancon($scope, SIGN, ConfigData){
		var click=true;
		$scope.menuState = ConfigData.menuState;
		$scope.ConfigData = ConfigData;
		// $scope.topMeunData = ConfigData.topMeunData;
		// $scope.leftmenudata = ConfigData.menuData;
		$scope.dropDown=false;
		/*退出登录*/
		$scope.logout = function(){
			SIGN.loginout();
			
			$scope.dropDown = false;
		}
		
		
		/*个人中心显示*/
		$scope.userShowHide = function(b){
			click && ($scope.dropDown = false);
			click = b;
		}
		$scope.userIsShow = function(){
				$scope.dropDown = !$scope.dropDown;
				click=false;
		}
		$scope.userIshide = function(){
			if ( click ) {$scope.dropDown = false;}
			click=true;
		}
		$scope.isUser = 'false';
		
		/*获取用户信息*/
		// SIGN.post('ism/me', '')
		// .then(function(json){
			// ConfigData.userData = json.data;
			// $scope.userName 	= ConfigData.userData.userName;
			// $scope.headertitle 	= ConfigData.userData.companyName;
			// $scope.isUser 		= ConfigData.userData.extInfo.role == 'Ism-user' ?  true : false ;
			// console.log("get UD then", ConfigData.userData);
		// })
		// .catch(function(e){
			// console.log("get UD catch", ConfigData.userData);
		// });
		// SIGN.post("/ism/ckBaseSetting",{},{
		// success:function(json){
			// $scope.headertitle=json.data.corpName;
			// $scope.$apply();
		 	// }
		// }); 
		
		
		
		$scope.userctrl = {show:false};
		$scope.hidenmy = function(){
			$scope.userctrl.show = false;
		}
	}
   
})()