/**
* Author: csdoker
* CreateTime: 2017/12/30
* Tips: main-列表分页指令模块
*/
BlogApp.directive('appPostListNavigator', ['PAGE_FIRST', '$state', '$stateParams', function(PAGE_FIRST, $state, $stateParams) {
  return {
    templateUrl: 'view/template/postListNavigator.html',
    restrict: 'ECAM',
    replace: true,
    link: function ($scope) {
		$scope.$watch('isShowPre', function(newVal){
			if (newVal) {
				$scope.isShowPre = false;
				if ($stateParams.page !== PAGE_FIRST[0] && 
					$stateParams.page !== PAGE_FIRST[1]) {
					$scope.isShowPre = true;
				}
			}
		});
		$scope.changePage = function(pageIndex) {
			$state.go('mainlist', {page: pageIndex});
		};
    }
  };
}]);
