angular.module("mainApp", [])
    .controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.data = {
           test1: "test1",
           test2: "kittens",
           test3: "test3",
           test4: "hello world"
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       }
    });