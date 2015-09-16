(function(){
  var app = angular.module('battleForSilvermyst');

  app.directive('unitDisplay', [function(){
    return {
      scope:{
        unit:"=",
        importantStat:"="
      },
      templateUrl:function(elem, atts){
        return "app/js/units/unit_display_template_"+atts.size+".html"
      },
      link:function(scope,elem,atts){
        //scope.displayStr = scope.importantStat + " " + scope[scope.importantStat]
      }
  }}]);
})();