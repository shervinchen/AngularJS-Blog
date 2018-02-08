/**
* Author: csdoker
* CreateTime: 2017/2/8
* Tips: 标签云指令模块
*/
BlogApp.directive('appPostTag', ['$http', function($http) {
  return {
    templateUrl: 'view/template/postTag.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      // data: '='
    },
    controller: ['$scope', function($scope) {
    	$scope.postTagDatas = [
          {text: "Lorem", weight: 8, link: "https://google.com"},
          {text: "Ipsum", weight: 7, link: "https://google.com"},
          {text: "Dolor", weight: 7, link: "https://google.com"},
          {text: "Sit", weight: 9, link: "https://google.com"},
          {text: "Amet", weight: 10, link: "https://google.com"},
          {text: "Lorem", weight: 7, link: "https://google.com"},
          {text: "Ipsum", weight: 8, link: "https://google.com"},
          {text: "Dolor", weight: 7, link: "https://google.com"},
          {text: "Sit", weight: 9, link: "https://google.com"},
          {text: "Amet", weight: 8, link: "https://google.com"}
        ];
	}],
    link: function ($scope) {
		// $http({
		// 	method: 'GET',
		// 	url: 'http://localhost:3000/posttag'
		// }).then(function(response) {
		// 	$scope.postTagDatas = response.data;
		// }, function(response) {
		// 	// 请求失败执行代码
		// 	console.log('request failed');
		// });
    }
  };
}]);
