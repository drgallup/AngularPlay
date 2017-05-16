// controller.js
/*
angular.module('MyApp', ['ngMaterial'])
.controller('appCtrl', function($scope) {
  $scope.data = {
    cb1: true,
    cb4: true,
    cb5: false
  };

  $scope.message = 'false';
  
  $scope.greeting = { text: 'Hello' };
  $scope.date = Date('2017', '04', '20');

  $scope.onChange = function(cbState) {
  	$scope.message = cbState;
  };
}); */


angular.module('MyApp',['ngMaterial', 'ngMessages'])

.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Welcome to QuickMeet!')
        .textContent('Click and drag over the times that you are busy. Times are recorded in 10 minute intervals. Use the tooltip to get specific.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
});
/*
appname.controller('appCtrl', ['$scope',
  function($scope) {
    $scope.greeting = { text: 'Hello' };
    $scope.date = Date('2017', '04', '20');
}]);*/