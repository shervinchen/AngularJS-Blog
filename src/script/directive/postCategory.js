/**
* Author: csdoker
* CreateTime: 2017/12/31
* Tips: 文章分类指令模块
*/
BlogApp.directive('appPostCategory', ['$http', function($http) {
  return {
    templateUrl: 'view/template/postCategory.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {
		$http({
			method: 'GET',
			url: 'http://localhost:3000/postcategory'
		}).then(function(response) {
			$scope.postCategoryDatas = response.data;
		}, function(response) {
			// 请求失败执行代码
			console.log('request failed');
		});
    }
  };
}]);
