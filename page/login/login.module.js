/* 
	router data define
	author: lianglifeng
	E-mail: lianglf@alhigh.com.cn
	time: 2017.4.5
 */
!(function(){'use strict';
	angular.module('login', ['ui.router']);
	angular.module('login')
	.config(['$stateProvider', function($stateProvider) {

		$stateProvider
		// 在这里添加url路由
		.state('login', {
			title: '登录',
			url: '/login',
			templateUrl: 'page/login/login.template.html',
			controller: ['$scope', '$timeout','SIGN', 'ConfigData', function ($scope, $timeout, SIGN, ConfigData) {
				ConfigData.topMeunData=[];
				$scope.keyLogin = function($event){ 
					if ($event.keyCode == '13') {
						 $scope.login();
					 }
				}  
				$scope.loginError = '';
				$scope.logining=false;
				$scope.login = function(){
					$scope.loginError = '';
					var timer=$timeout(changebutton,3000);
					$scope.logining=true;
					if($scope.nick == "" || $scope.password == ""){
						$scope.loginError = '用户名或密码不能为空';
						return;
					}
					SIGN.login($scope.nick, $scope.password)
					.then(function(json){
						if (json.code == 0){
							if("undefined" != typeof ConfigData.userData.extInfo){ 
								var utype =	ConfigData.userData.extInfo.role ;
							} else {
								var utype="";
							}
							ConfigData.userData = json.data;
							// console.log("then", ConfigData.userData);
							
							if (ConfigData.returnUrl == '#/' || ConfigData.returnUrl == ''){
								if (ConfigData.userData.extInfo.role == 'Ism-user'){
									var url = '#/frame/control-';
								} else {
									var url = '#/frame/cset-base'; 
								}
							} else {
								if (utype == ConfigData.userData.extInfo.role)
								{
									var url = ConfigData.returnUrl;
								}else {
									if (ConfigData.userData.extInfo.role == 'Ism-user'){
										var url = '#/frame/control-';
									} else {
										var url = '#/frame/cset-base'; 
									}
								}
								
							}
							window.location.href = url;
						} else {
							$scope.loginError = '用户名或密码不正确';
							$scope.logining=false;
							$timeout.cancel( timer );
						}
					})
					.catch(function(e){
						console.log("catch", e);
					})
					
					;
				}
				var changebutton=function(){
					$scope.logining=false;
				}
				
			}]
		});

	}]);
  

})()