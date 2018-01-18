/**
* Author: csdoker
* CreateTime: 2018/1/8
* Tips: 文章指令模块
*/
BlogApp.directive('appPost', [function() {
  return {
    templateUrl: 'view/template/post.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      postData: '='
    },
    link: function (scope, iElement, iAttrs, controller) {
    	console.log(scope.postData);
    }
  };
}]);
