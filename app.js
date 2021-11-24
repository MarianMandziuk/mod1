(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunch = "";

  $scope.showMessage = function() {
    $scope.message = parseInput($scope.lunch);
  }
  
}

function parseInput(inputText) {
  let splitedText = inputText.split(",");
  console.log("len",  splitedText.length);
  if (inputText === "") {
    return "Please enter data first";
  } else if (splitedText.length > 0 && splitedText.length <= 3) {
    return "Enjoy!";
  } else {
    return "Too much!";
  }
}

})();
