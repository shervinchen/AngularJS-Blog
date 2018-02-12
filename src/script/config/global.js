// 声明整个应用范围内的常量 可以注入任何方法
BlogApp.constant('ENTER_CODE', 13);

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

BlogApp.run(['$rootScope', '$http',
	function($rootScope, $http) {
		$http({
        method: 'GET',
        url: 'http://localhost:3000/posttag'
      }).then(function(response) {
        $rootScope.tags = response.data;
      }, function(response) {
        // 请求失败执行代码
        console.log('request failed');
      });
	}
]);
