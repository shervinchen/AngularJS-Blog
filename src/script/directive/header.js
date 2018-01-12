/**
* Author: csdoker
* CreateTime: 2017/12/25
* Tips: 页面公用——头部指令模块
*/
BlogApp.directive('appHeader', ['ENTER_CODE', '$state', function(ENTER_CODE, $state) {
  return {
    templateUrl: 'view/template/header.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {
    	$scope.searchKeyWord = "";
    	$scope.search = function(e) {
    		var keycode = window.event ? e.keyCode : e.which;
            if (keycode == ENTER_CODE) {
                $state.go('search', {keyword: $scope.searchKeyWord});
            }
    	};
    }
  };
}]);
