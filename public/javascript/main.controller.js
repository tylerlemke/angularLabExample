angular.module("mainApp", [])
    .controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.pages = [
           {text: "home", link: '/'},
           {text: "Kittens", link: '/kittens'},
           {text: "Pet Form", link: '/petForm'},
           {text: "404 Page", link: '/wefwrtbertbeb'}
       ];

       $scope.data = {
           test1: "test1",
           test2: "kittens",
           test3: "test3",
           test4: "hello world",
           test5: "This uses Grunt!!!"
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       }
    });