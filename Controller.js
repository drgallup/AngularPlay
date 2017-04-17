// controller.js

var appname = angular.module('appname', []);
appname.controller('appCtrl', ['$scope',
  function($scope) {
    $scope.greeting = { text: 'Hello' };
    $scope.date = Date('2017', '04', '20');
}]);
