/**
* Author: csdoker
* CreateTime: 2017/12/23
* Tips: 本文件定义项目路由
*/
BlogApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    	$stateProvider.state('main', {
    		url: '/main',
    		templateUrl: 'view/main.html',
    		controller: 'mainCtrl'
    	}).state('about', {
    		url: '/about',
    		templateUrl: 'view/about.html',
    		controller: 'aboutCtrl'
    	}).state('search', {
          url: '/search/:keyword',
          templateUrl: 'view/search.html',
          controller: 'searchCtrl'
      }).state('mainlist', {
          url: '/mainlist/:page',
          templateUrl: 'view/main.html',
          controller: 'mainCtrl'
      });
    	$urlRouterProvider.otherwise("main");
	}
]);
