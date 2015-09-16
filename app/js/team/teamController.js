(function(){
  var app = angular.module('battleForSilvermyst');

  app.controller('teamController', ['$scope',function($scope){

    $scope.allUnits = []/*
    {name:"Geogre",class:"Paladin", img:"http://lorempixel.com/60/60",attack:10,defense:20, mAttack:10,mDefense:20,speed:30,level:5,hp:40},
    {name:"Stacy",class:"Cleric", img:"http://lorempixel.com/59/60",attack:20,defense:20, mAttack:30,mDefense:10,speed:10,level:5,hp:40},
    {name:"Fred",class:"Wizard", img:"http://lorempixel.com/61/60",attack:30,defense:10, mAttack:20,mDefense:10,speed:20,level:5,hp:40},
    {name:"Jacquelynn",class:"Paladin", img:"http://lorempixel.com/60/61",attack:10,defense:20, mAttack:10,mDefense:20,speed:30,level:5,hp:40},
    {name:"Maxima",class:"Cleric", img:"http://lorempixel.com/59/61",attack:20,defense:20, mAttack:30,mDefense:10,speed:10,level:5,hp:40},
    {name:"Keneth",class:"Wizard", img:"http://lorempixel.com/61/61",attack:30,defense:10, mAttack:20,mDefense:10,speed:20,level:5,hp:40},
    {name:"Donetta",class:"Paladin", img:"http://lorempixel.com/60/59",attack:10,defense:20, mAttack:10,mDefense:20,speed:30,level:5,hp:40},
    {name:"Lorinda",class:"Cleric", img:"http://lorempixel.com/59/59",attack:20,defense:20, mAttack:30,mDefense:10,speed:10,level:5,hp:40},
    {name:"Sherley",class:"Wizard", img:"http://lorempixel.com/61/59",attack:30,defense:10, mAttack:20,mDefense:10,speed:20,level:5,hp:40},
    {name:"Mandi",class:"Paladin", img:"http://lorempixel.com/60/62",attack:10,defense:20, mAttack:10,mDefense:20,speed:30,level:5,hp:40},
    {name:"Lauren",class:"Cleric", img:"http://lorempixel.com/59/62",attack:20,defense:20, mAttack:30,mDefense:10,speed:10,level:5,hp:40},
    {name:"Shena",class:"Wizard", img:"http://lorempixel.com/61/62",attack:30,defense:10, mAttack:20,mDefense:10,speed:20,level:5,hp:40},
    {name:"Carissa",class:"Paladin", img:"http://lorempixel.com/60/58",attack:10,defense:20, mAttack:10,mDefense:20,speed:30,level:5,hp:40},
    {name:"Yetta",class:"Cleric", img:"http://lorempixel.com/59/58",attack:20,defense:20, mAttack:30,mDefense:10,speed:10,level:5,hp:40},
    {name:"Oleta",class:"Wizard", img:"http://lorempixel.com/61/58",attack:30,defense:10, mAttack:20,mDefense:10,speed:20,level:5,hp:40},
    {name:"Alisha",class:"Paladin", img:"http://lorempixel.com/62/60",attack:10,defense:20, mAttack:10,mDefense:20,speed:30,level:5,hp:40},
    {name:"Joey",class:"Cleric", img:"http://lorempixel.com/58/60",attack:20,defense:20, mAttack:30,mDefense:10,speed:10,level:5,hp:40},
    {name:"Julieann",class:"Wizard", img:"http://lorempixel.com/63/60",attack:30,defense:10, mAttack:20,mDefense:10,speed:20,level:5,hp:40},
    ]//*/

    var names = ["Jacquelynn","Maxima","Keneth","Linsey","Donetta","Lorinda","Sherley","Mandi","Lauren","Shena","Carissa","Yetta","Oleta","Alisha","Joey","Julieann","Leighann","Willie","Alaina","Collene"];
    for(var i=0;i<names.length;i++){
      var newUnit = {};
      newUnit.name = names[i];
      newUnit.class = "Class";
      newUnit.img = "http://lorempixel.com/" + (60+i)+"/" + (60+i) ;
      newUnit.hp = Math.floor(Math.random()*40+10);
      newUnit.speed = Math.floor(Math.random()*40+10);
      newUnit.attack = Math.floor(Math.random()*40+10);
      newUnit.defense = Math.floor(Math.random()*40+10);
      newUnit.mAttack = Math.floor(Math.random()*40+10);
      newUnit.mDefense = Math.floor(Math.random()*40+10);
      newUnit.level = 5;
      $scope.allUnits.push(newUnit)
    }
    $scope.teammates = [];
    $scope.teammates[0] = $scope.allUnits[2];
    $scope.teammates[1] = $scope.allUnits[6];
    $scope.teammates[2] = $scope.allUnits[9];

    $scope.selected = $scope.teammates[0];

    $scope.setSelected = function(unit){
      $scope.selected = unit;
    }

    $scope.swapSelectedForIndex = function(index){
      console.log(index);
      for (var i=0;i<3;i++){
        if ($scope.teammates[i] == $scope.selected)
          {
            var temp = $scope.teammates[i];
            $scope.teammates[i]=$scope.teammates[index];
            $scope.teammates[index]=temp;
          }
      }
      console.log(index);
      $scope.teammates[index] = $scope.selected;
    }
  }]);
})();