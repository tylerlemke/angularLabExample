angular.module("mainApp", [])
    .controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       $scope.pages = [
           {text: "Home", link: '/'},
           {text: "Kittens", link: '/kittens'},
           {text: "Pet Form", link: '/petForm'},
           {text: "404 Page", link: '/wefwrtbertbeb'}
       ];

       $scope.data = [
           {text: "test1"},
           {text: "kittens"},
           {text: "test3"},
           {text: "hello world"},
           {text: "This uses Grunt!!!"}
       ];

       $scope.addData = function(){
           $scope.data.push({text: $scope.textField});
           $scope.textField = "";
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };
    });