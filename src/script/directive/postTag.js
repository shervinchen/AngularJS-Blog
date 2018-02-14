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
      // postTagDatas: '='
    },
    controller: ['$scope', function($scope) {
      $scope.$watch('posttag', function(newVal){
        if(newVal) {
          console.log($scope.posttag);
        }
      });
    }],
    link: function ($scope) {
    }
  };
}]);
