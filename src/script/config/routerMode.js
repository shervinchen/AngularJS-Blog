/* 配置路由的html5mode */
BlogApp.config(['$locationProvider', function($locationProvider) {  
    $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);