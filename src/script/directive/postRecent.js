/**
* Author: csdoker
* CreateTime: 2017/12/31
* Tips: 最新文章指令模块
*/
BlogApp.directive('appPostRecent', [function() {
  return {
    templateUrl: 'view/template/postRecent.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {

    }
  };
}]);
