// 声明整个应用范围内的常量 可以注入任何方法
BlogApp.constant('ENTER_CODE', 13);
BlogApp.constant('PAGE_FIRST', 1);

// 创建页面公用数据的全局变量
BlogApp.value('globalDatas', {}).run(['globalDatas', '$http', function(globalDatas, $http){
	// $http.get('/data/city.json').then(function(response) {
	// 	dict.city = response.data;
 //    }).catch(function(response) {});
 //    $http.get('/data/salary.json').then(function(response) {
	// 	dict.salary = response.data;
 //    }).catch(function(response) {});
 //    $http.get('/data/scale.json').then(function(response) {
	// 	dict.scale = response.data;
 //    }).catch(function(response) {});
}]);

BlogApp.run(['$rootScope', 
	function($rootScope) {
    	var rendererMD = new marked.Renderer();
	    marked.setOptions({
	      renderer: rendererMD,
	      gfm: true,
	      tables: true,
	      breaks: false,
	      pedantic: false,
	      sanitize: false,
	      smartLists: true,
	      smartypants: false
	    });//基本设置
	    console.log(marked('I am using __markdown__.'));
	}
]);

// BlogApp.config(function($httpProvider) {
//     //允许跨域请求
//     $httpProvider.defaults.useXDomain = true;
//     //删除用于识别ajax调用的XMLHttpRequests头，防止拦截CORS
//     delete $httpProvider.defaults.headers.common['X-Requested-With'];
// });