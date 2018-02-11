/**
* Author: csdoker
* CreateTime: 2017/12/31
* Tips: 最近回复指令模块
*/
BlogApp.directive('appPostRecentComments', [function() {
  return {
    templateUrl: '/view/template/postRecentComments.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {

    }
  };
}]);
