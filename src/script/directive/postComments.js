/**
* Author: csdoker
* CreateTime: 2018/1/9
* Tips: 文章评论模块指令
*/
BlogApp.directive('appPostComments', [function() {
  return {
    templateUrl: 'view/template/postComments.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {

    }
  };
}]);
