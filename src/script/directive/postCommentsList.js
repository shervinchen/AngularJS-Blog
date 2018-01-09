/**
* Author: csdoker
* CreateTime: 2018/1/9
* Tips: 文章评论列表模块指令
*/
BlogApp.directive('appPostCommentsList', [function() {
  return {
    templateUrl: 'view/template/postCommentsList.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {

    }
  };
}]);
