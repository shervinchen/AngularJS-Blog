/**
* Author: csdoker
* CreateTime: 2017/12/23
* Tips: 本文件定义项目路由
*/
BlogApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
    	$stateProvider.state('main', {
    		url: '/main/:page',
    		templateUrl: 'view/main.html',
    		controller: 'mainCtrl'
    	}).state('about', {
    		url: '/about',
    		templateUrl: 'view/about.html',
    		controller: 'aboutCtrl'
    	}).state('post', {
        url: '/post/:postid',
        templateUrl: 'view/post.html',
        controller: 'postCtrl'
      }).state('search', {
          url: '/search/:keyword',
          templateUrl: 'view/search.html',
          controller: 'searchCtrl'
      }).state('/', {
          url: '/',
          templateUrl: 'view/main.html',
          controller: 'mainCtrl'
      });
    	$urlRouterProvider.otherwise("main");
	}
]);
