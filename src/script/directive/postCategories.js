/**
* Author: csdoker
* CreateTime: 2018/1/25
* Tips: 文章分类模块指令
*/
BlogApp.directive('appPostCategories', [function() {
  return {
    templateUrl: '/view/template/postCategories.html',
    restrict: 'ECAM',
    replace: true,
    scope: {
      postCategoriesDatas: '='
    },
    link: function ($scope) {
    	
    }
  };
}]);
