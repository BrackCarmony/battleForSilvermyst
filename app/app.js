(function(){
  var app = angular.module('battleForSilvermyst', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider.when("/", {

    }).when("/team",{
      templateUrl:"app/js/team/team_template.html",
      controller:"teamController"
    }).when("/equip",{

    }).when("/inventory",{

    }).when("/units",{

    }).when("/battle",{

    })
  });
})();