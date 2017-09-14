/*
	ng frame define
	auythor: liang lifeng
	E-mail: lianglf@allhigh.com.cn
	time: 2017.4.5
*/
(function() {
	var theApp = angular.module('myApp', [
		'frame',
		'login',
		'ConfigData',
		'ui.router',
		'ui.tree',
		'ui.bootstrap',
		'myComponent',
		'ngLocale'
	]);
	var _config = {
		title: '航运公司管理',
		userData: {
			extInfo: {
				role: 'Ism-admin'
			}
		},
		menuData: [],
		menuState: {
			topMeun: "",
			leftMeun: ""
		},
		company:{},
		returnUrl: "",
		topMeunData: [],

		setmeun: function(meunString) {
			_config.menuData = [];
			if(_config.userData.extInfo.role == 'Ism-admin' || _config.userData.extInfo.role == 'System_admin') {
				var powerList = ['0','1','2', '3', '4','5', '6', '7', '8', '9', '10', '11'];
			}
			if(_config.userData.extInfo.role == 'Ism-user') {
				var powerList = ['5', '6', '7', '8', '9', '10', '11'];
			}
			if(_config.userData.extInfo.role == 'System-admin') {
				var powerList = ['1'];
			}
			//获取当前用户所具有的菜单
			for(var i = 0; i < _config.menuDataLibrary.length; i++) {
				for(var j = 0; j < powerList.length; j++) {
					if(powerList[j] == _config.menuDataLibrary[i].power) {
						_config.menuData.push(_config.menuDataLibrary[i]);
					}
				}
			}
			_config.topMeunData = [];
			var meun = (meunString || "").split('-');
			_config.menuState.leftMeun = meun[0];
			//这一行代码是败笔
			if('sys' == meun[0]) {
				_config.menuState.leftMeun = "sys-settings";
			}
			_config.setTopMeun(_config.menuState.leftMeun);
			_config.menuState.topMeun = (meunString || "").substr((meunString || "").indexOf('-') + 1);
		},

		setTopMeun: function(meun) {
			for(var i = 0; i < _config.menuData.length; i++) {
				if(_config.menuData[i].u == meun) {
					_config.topMeunData = _config.menuData[i].sub;
					break;
				}
			}
		},
		menuDataLibrary: [
			{
				i: "fanew fanew-companysetup-other fanew-companysetup-icon",
				s: "公司申请",
				u: "capplicate",
				power: "0",
				sub:[{
					u: "cbase",
					s: "公司信息"
				}]
			},
			{
				i: "fanew fanew-companysetup-other fanew-companysetup-icon",
				s: "公司设定",
				u: "cset",
				power: "1",
				sub: [{
						u: "base",
						s: "公司信息"
					},
					{
						u: "user",
						s: "员工管理",
						i: "user"
					},
					{
						u: "officer",
						s: "职务管理",
						i: "group"
					}
				]
			},
			{
				i: "fanew fanew-approval-other fanew-approval-icon",
				s: "流程设定",
				u: "approve",
				power: "2",
				sub: [{
						u: "work_list",
						s: "流程列表"
					},
					{
						u: "set_work",
						s: "流程设置"
					}
					// {u: "relation_form", s: "流程关联"}
				]
			},
			{
				i: "glyphicon glyphicon-copy my-message-icon",
				s: "复制功能",
				u: "copy",
				power: "3",
				sub: [{
						u: "copy",
						sub: 1,
						s: "复制设置"
					},
					{
						u: "form-list",
						sub: 1,
						s: "复制列表"
					}
				]
			},
			{
				i: "glyphicon glyphicon-time my-message-icon",
				s: "定时任务",
				u: "timing",
				power: "4",
				sub: [{
						u: "timing",
						sub: 1,
						s: "定时设置"
					},
					{
						u: "task-list",
						sub: 1,
						s: "定时列表"
					}
				]
			},

			{
				i: "fanew fanew-workbench-other fanew-workbench-icon",
				s: "工作台",
				u: "control",
				power: "5"
			},
			{
				i: "glyphicon glyphicon-list-alt my-message-icon",
				s: "我的消息",
				u: "my",
				power: "6"
			},
			{
				i: "fanew fanew-approval-other fanew-approval-icon",
				s: "审批",
				u: "approve",
				power: "7",
				sub: [{
						u: "add",
						s: "新建申请",
						i: "user-plus"
					},
					{
						u: "my_apply",
						s: "我的申请",
						i: "user"
					},
					{
						u: "my_approve",
						s: "我的审批",
						i: "clipboard"
					},
					{
						u: "my_approve_history",
						s: "我的审批-历史",
						i: "clipboard"
					}
				]
			},
			{
				i: "fanew fanew-task-other fanew-task-icon",
				s: "台账",
				u: "report",
				power: "8"
			},
			{
				i: "glyphicon glyphicon-list-alt my-message-icon",
				s: "体系正文",
				u: "system",
				power: "9"
			},
			{
				i: "glyphicon glyphicon-copy my-message-icon",
				s: "复制功能",
				u: "copy",
				power: "10",
				sub: [{
					u: "form-list",
					sub: 1,
					s: "复制列表"
				}]
			},
			{
				i: "glyphicon glyphicon-file my-message-icon",
				s: "我的接收",
				u: "receive",
				power: "11",
				sub: [{
						u: "receive",
						sub: 1,
						s: "我的接收"
					},
					{
						u: "history",
						sub: 1,
						s: "我的接收-历史"
					}
				]
			}
		]

	};
	angular.module('ConfigData', []).value("ConfigData", _config);

	theApp.config(['$qProvider', function($qProvider) {
		$qProvider.errorOnUnhandledRejections(false);
	}]);

	theApp.config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
		$locationProvider.hashPrefix('');
		$urlRouterProvider.when('', 'frame'); //当url为空
		$urlRouterProvider.otherwise('frame'); //当url无法识别 
	}]);

	theApp.run(['$rootScope', "SIGN", "ConfigData", function($rootScope, SIGN, ConfigData) {
		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
			//if(SIGN.tokenPassed()) {
				// 系统自带获取#参数
				// ConfigData.returnUrl = location.hash; 
				// 自获取#参数
				//ConfigData.returnUrl = '#/' +fromState.name.replace(/\./g, '/');
				//if (ConfigData.returnUrl == "#/frame") { ConfigData.returnUrl = "";}
				//window.location.href = "#/frame";
				//return;
			//}
			// if ( fromState.name == 'login' || ConfigData.menuData.length < 1){
			// SIGN.post('ism/menu', {})
			// .then(function(json){
			// ConfigData.menuData = json.data;
			// ConfigData.setmeun((toState.name || "").split('.')[1]);
			// })
			// .catch(function(e){
			// console.log("get UD menu", e);
			// });	
			// }
			// else{

			// }
			ConfigData.setmeun((toState.name || "").split('.')[1]);
			/*if("undefined" == typeof ConfigData.userData.extInfo) {
				SIGN.post('ism/me', '')
					.then(function(json) {
						ConfigData.userData = json.data;
						// json={
						// code:0,
						// data:{
						// companyId:'',
						// companyName: '',
						// extInfo: {
						// role: 'System-admin' || 'Ism-user' || 'Ism-admin',
						// token:''
						// }
						// userType:'',
						// userName:'',
						// userId:'',
						// shipId:'',
						// sex:'',
						// qq:'',
						// isEffective:'',
						// email:''
						// }
						// }
						/*if(toState.name != 'login') {
							ConfigData.setmeun((toState.name || "").split('.')[1]);
							// console.log("get U data", ConfigData.userData);
						}
					})
					.catch(function(e) {
						console.log("get U data", e);
					});
			} else {
				if(toState.name != 'login') {
					ConfigData.setmeun((toState.name || "").split('.')[1]);
				}
			}*/
			setTitle(toState.title || ConfigData.title);
		});
	}]);

	// 设置页面标题
	function setTitle(title) {
		document.title = title;
		if(navigator.userAgent.indexOf("MicroMessenger") > 0) {
			// hack在微信等webview中无法修改document.title的情况
			var body = document.body,
				iframe = document.createElement('iframe');
			iframe.src = "/null.html";
			iframe.style.display = "none";
			iframe.onload = function() {
				setTimeout(function() {
						body.removeChild(iframe);
					},
					0
				);
			}
			body.appendChild(iframe);
		}
	}
})();