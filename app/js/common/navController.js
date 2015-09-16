(function(){
  var app = angular.module('battleForSilvermyst');

  app.controller('navController', ['$scope','$location',function($scope, $location){
    $scope.routeTo = function(location){
      console.log(location);
      $location.url('/' + location);
    }
  }]);
})();