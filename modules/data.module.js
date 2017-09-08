/* 
	router data define
	author: lianglifeng
	E-mail: lianglf@alhigh.com.cn
	time: 2017.4.5
 */
'use strict';
(function(){
	angular.module('myApp')
	  /**
   * 解决 post 问题
   */
  .config(["$httpProvider", function($httpProvider){
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */ 
    var param = function(obj) {
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
        
      for(name in obj) {
        value = obj[name];
          
        if(value instanceof Array) {
          for(i=0; i<value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value instanceof Object) {
          for(subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        }
        else if(value !== undefined && value !== null)
          query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
      }
        
      return query.length ? query.substr(0, query.length - 1) : query;
    };

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];
  }])

	
	.factory('SIGN',[ '$http', "$q", function($http, $q) {	
		
		var tokentimespan = localStorage.getItem("tokentimespan");
		var token=localStorage.getItem("token");
		var apiRoot = "/ism/";
		
		// console.log("token", localStorage.getItem("token"));
		// console.log("tokentimespan", localStorage.getItem("tokentimespan"));
		
		function postdata(url, data){
			if (tokenPassed()){ 
				gotoLogin(); 
				return $q.reject(0);
			}
			var myData = angular.extend({}, data);
			// var deffer = $q.defer();
			// 这里可以对myData数据做统一格式处理
			return $http.post(apiRoot + url, {token : token, data : JSON.stringify(myData)} )
			.then(function(response){
				return $q.when(response.data);
			})
			.then(function(json){
				//0表示未登录
				if(isLogout(json)){
					gotoLogin();
					return $q.reject(json);
				}
				//未定义错误
				else if(!isSuccess(json)){
					return $q.reject(json);
				}
				else{
					tokentimespan = parseInt( Date.parse(new Date()) /1000)+900;
					localStorage.setItem("tokentimespan",tokentimespan);
					return $q.when(json);
				}
				
			})
			
			.catch(function(json){
				return $q.reject(json);
			});
		}
		
		function getdata(url, data){
			if (tokenPassed()){
				gotoLogin(); 
				return $q.reject(0);
			}
			var myData = angular.extend({}, data);
			// 这里可以对myData数据做统一格式处理
			return $http.get(apiRoot + url, myData)
			.then(function(response){
				return $q.when(response.data);
			})
			.then(function(json){
				//0表示未登录
				if(isLogout(json)){
					gotoLogin();
					return $q.reject(json);
				}
				//未定义错误
				else if(!isSuccess(json)){
					return $q.reject(json);
				}
				else{
					tokentimespan = parseInt( Date.parse(new Date()) /1000)+900;
					localStorage.setItem("tokentimespan",tokentimespan);
					return $q.when(json);
				}
				
			})
			
			.catch(function(json){
				return $q.reject(json);
			});
		}
		
		function logindata(user_name, user_password){
			var url = apiRoot + "ism/login";
			var myData={
				cellphoneNo: user_name,
				plainPassword: user_password
			}

			return $http.post(url, {data: JSON.stringify(myData)})
			.then(function(response){
				return $q.when(response.data);
			})
			.then(function(json){
				//未定义错误
				if(!isSuccess(json)){
					// return $q.reject(json);
					return $q.when(json);
				}
				else{
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
							// email:'',
						// }
					// }
					
					tokentimespan = parseInt( Date.parse(new Date()) /1000)+900; //token有效900s
					token = json.data.extInfo.token;
					localStorage.setItem("token",token);
					localStorage.setItem("tokentimespan",tokentimespan);
					
					return $q.when(json);
				}
			})
			
			.catch(function(json){
				return $q.reject(json);
			});
			
		}
		
		function loginout(){
			localStorage.setItem("token",'');
			localStorage.setItem("tokentimespan",'0');
			tokentimespan = localStorage.getItem("tokentimespan");
			token=localStorage.getItem("token");
			window.location.href = "#/login";
		}
		
		
		function isSuccess(json){
			return json && +json.code === 0;
		}
		
		function isLogout(json){
			return json && +json.code === -1;
		}
		
		function gotoError(){
			var deffer = $q.defer();
			window.location.href = "#/error_rem";
			deffer.reject(1);
			return deffer.promise;
		}
		
		function gotoLogin(){
			var deffer = $q.defer();
			window.location.href = "#/login";
			deffer.reject(1);
			return deffer.promise;
		}
		
		function tokenPassed(tt){
			tt = tt || tokentimespan;
			var timestamp =parseInt( Date.parse(new Date()) /1000);
			return tt < timestamp;
		}
		return {
			loginout:loginout,
			tokenPassed: tokenPassed,
			post: postdata,
			get: getdata,
			login:logindata
		}
	  
	}]);
})();