/**
 * Author: csdoker
 * CreateTime: 2017/12/31
 * Tips: 最新文章指令模块
 */
BlogApp.directive('appPostRecent', ['$http', function($http) {
  return {
    templateUrl: '/view/template/postRecent.html',
    restrict: 'ECAM',
    replace: true,
    controller: ['$scope', function($scope) {
      $http({
        method: 'GET',
        url: 'http://localhost:3000/postrecent'
      }).then(function(response) {
        $scope.postRecentDatas = response.data;
      }, function(response) {
        // 请求失败执行代码
        console.log('request failed');
      });
    }],
    link: function($scope) {

    }
  };
}]);
