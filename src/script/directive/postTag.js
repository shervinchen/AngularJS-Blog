/**
* Author: csdoker
* CreateTime: 2017/2/8
* Tips: 标签云指令模块
*/
BlogApp.directive('appPostTag', ['$http', function($http) {
  return {
    templateUrl: '/view/template/postTag.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      
    },
    controller: ['$scope', function($scope) {
      $http({
        method: 'GET',
        url: 'http://localhost:3000/posttag'
      }).then(function(response) {
        $scope.postTagDatas = response.data;
      }, function(response) {
        // 请求失败执行代码
        console.log('request failed');
      });
    }],
    link: function ($scope) {
      
    }
  };
}]);
