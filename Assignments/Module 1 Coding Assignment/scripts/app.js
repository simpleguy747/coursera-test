(function(){
    'use strict'
    angular.module('FoodItemsApp',[])
    .controller('FoodItemsController',function($scope){
$scope.cssCode=-1;
        $scope.CheckIfTooMuch = function(){
            var lunchItems = $scope.foodItems||"";
        
            var lunchItemsArr = lunchItems.split(',');
            var numberOfLunchItems = checkNumberOfFoodItems(lunchItemsArr)
            if(numberOfLunchItems > 0){
            if(numberOfLunchItems <=3 ){
                $scope.message = "Enjoy!";
                
            }
            else{
                $scope.message = "Too much!";
            }
             $scope.cssCode = 0;
            }
            else
            {
                $scope.message = "Please enter data first";
                $scope.cssCode = 1;
            }
        }

        var checkNumberOfFoodItems=function(stringArr){
            var len = stringArr.length;
            var numberOfItems = 0;
            for(var index=0;index<len;index++){
                if(stringArr[index]){
                    numberOfItems++;
                }
            }

            return numberOfItems;
        }

    });
})()