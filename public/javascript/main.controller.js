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

//==================== GPA CONTROLLER ==================================
mainApp.controller('GPActrl', function($scope) {
    console.log("controller loaded!");

    $scope.input = {NAME:"", CREDITS:"", GRADE:""};
    $scope.transcript = [];



    $scope.addToTranscript = function(){
        if($scope.input.GRADE != "A" &&
            $scope.input.GRADE != "a" &&
            $scope.input.GRADE != "B" &&
            $scope.input.GRADE != "b" &&
            $scope.input.GRADE != "C" &&
            $scope.input.GRADE != "c" &&
            $scope.input.GRADE != "D" &&
            $scope.input.GRADE != "d" &&
            $scope.input.GRADE != "F" &&
            $scope.input.GRADE != "f" )
            {
                alert("INVALID GRADE ENTRY");
                return;
            }
        if($scope.input.CREDITS > 0 && $scope.input.CREDITS <= 6) {

            if ($scope.input.NAME.length >= 1 && $scope.input.CREDITS.length >= 1 && $scope.input.GRADE.length >= 1) {
                $scope.transcript.push({class: $scope.input.NAME, credits: $scope.input.CREDITS, grade: $scope.input.GRADE});
                $scope.input = {
                    NAME: "",
                    CREDITS: "",
                    GRADE: ""
                };
            }
        }
        else{
            alert("INVALID CREDIT ENTRY");
            return;
        }
    };


    var GradeNumber = function(grade){
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
        else if (grade == "F" || grade == 'f'){
            return 0;
        }
    };

    $scope.TotalGPA = function(){
        var GPA = 0;
        var numerator = 0;
        var denominator = 0;
        for (i=0; i < $scope.transcript.length; i++){
            tempGrade = GradeNumber($scope.transcript[i].grade);
            numerator = numerator + (tempGrade * $scope.transcript[i].credits);
            denominator = (denominator + parseInt($scope.transcript[i].credits));
        }
        GPA = (numerator / denominator);

        if($scope.transcript.length == 0){
            return "  NO DATA ADDED";
        }
        else{
            return GPA;
        }
    }

    $scope.GPAColor = function(){
        var GPA = $scope.TotalGPA();
        if(GPA >= 3 ){
            return {"color":"Green"}

        }

        else  if(GPA < 3 && GPA >= 2){
            return {"color":"Yellow"}

        }
        else if(GPA < 2){
            return {"color":"Red"}
        }

    }

});