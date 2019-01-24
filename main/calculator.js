var calcApp = angular.module('calculatorApp', []);
function calculatorController($scope){
    $scope.output = "0";  //result
    $scope.isCalculating = false; //to check whether an operator is in operating state or not 
    $scope.operand = 0; //stores the operand

    $scope.updateOutput = function(btn){
        if($scope.output == "0"){
            $scope.output = btn;
        }

        
        if(angular.equals(btn, 'x')){
            $scope.output = $scope.output.slice(0,$scope.output.length-1);
        } 
        
        else{
            $scope.output += String(btn);
        }
    };

    $scope.operate = function(op) {
        if($scope.output && !$scope.isCalculating){
            $scope.operand = $scope.output;
            $scope.output += op;
            $scope.isCalculating = true;
        }else if($scope.output.length > $scope.operand.length+1){  
            $scope.output = eval($scope.output);  //evaluates string value
            $scope.output += op;
        } 
    };

    $scope.equal = function() {
        if($scope.output.length > $scope.operand.length+1){
            $scope.output = eval($scope.output);
            $scope.operand = $scope.output;
        }else{
            $scope.output = $scope.operand;
        }
    };

    // $scope.backspace = function(){
    //     if($scope.length>0){
    //         $scope.output = $scope.output.substr(0, $scope.output.length-1);
    //     }
    // };
            
}
    calcApp.controller('calculatorController', calculatorController);