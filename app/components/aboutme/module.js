let myapp =angular.module("Myapp",[]);
let mycontroller = function($scope){
    $scope.message = "Hello world";
}
myapp.controller("Mycontroller",mycontroller)

let JSONController = function($scope){
    let Student = {
        FirstName : "Akshara",
        LastName : "Gurram"


    }
    $scope.Student =Student;
}
myapp.controller("Student",JSONController);