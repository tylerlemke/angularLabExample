var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'},
            {text: "Ferrets", link: '/ferret'},
            {text: "GPA Calculator", link: '/GPACalculator'}
        ];
    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "kittens"},
           {text: "snake"},
           {text: "badger"},
           {text: "puppies"},
           {text: "ferret"}
       ];



       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
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


mainApp.controller('GPActrl', function($scope) {
    console.log("controller loaded!");

    $scope.NAME = "";
    $scope.CREDITS = "";
    $scope.GRADE = "";




    $scope.transcript = [
        {name: 'blah', credits: 4, grade: 'a'}
    ];

    $scope.addToTranscript = function(){
        if($scope.NAME.length >= 1 && $scope.CREDITS.length >= 1 && $scope.GRADE.length >= 1) {
            $scope.transcript.push({name: $scope.NAME, credits: $scope.CREDITS, grade: $scope.GRADE});
            $scope.NAME = "";
            $scope.CREDITS = "";
            $scope.GRADE = "";
        }
    };


    $scope.GradeNumber = function(grade){
        if(grade == "A" || grade == 'a'){
            return 4;
        }
        else if(grade == "B" || grade == 'b'){
            return 3;
        }
        else if(grade == "C" || grade == 'c'){
            return 2;
        }
        else if(grade == "D" || grade == 'd'){
            return 1;
        }
        else {
            return 0;
        }
    };

    $scope.transcript.TotalGPA = function(){
        var GPA = 0;
        var numerator = 0;
        var denominator = 0;
        for (i=0; i < $scope.transcript.length; i++){
            tempGrade = $scope.GradeNumber($scope.transcript[i].grade);
            numerator = numerator + (tempGrade * $scope.transcript[i].credits);
            denominator = (denominator + $scope.transcript[i].credits);
        }
        GPA = (numerator / denominator);
        return GPA;
    }

});