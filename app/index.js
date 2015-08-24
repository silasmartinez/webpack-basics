const angular = require('angular');
const ngModule = angular.module('app', []);

require('./directives')(ngModule);

ngModule.controller('formCtrl', function($scope) {
  $scope.master = {firstName: "John", lastName: "Doe"};
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
  $scope.reset();
});