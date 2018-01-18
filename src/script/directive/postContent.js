/**
* Author: csdoker
* CreateTime: 2018/1/18
* Tips: 文章内容指令模块
*/
BlogApp.directive('appPostContent', [function() {
  return {
    templateUrl: 'view/template/postContent.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      postContentData: '='
    },
    link: function (scope, iElement, iAttrs, controller) {
    	// iElement[0].innerHTML = marked(scope.postContentData);
    }
  };
}]);
