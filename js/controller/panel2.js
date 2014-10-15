var panel2 = angular.module('panel2', []);
panel2.controller("panel2",function($scope, deploment_id, deployCSV){
        $scope.deploy=deploment_id.query();

        //upload csv file
        $scope.template = {};
        $scope.deploy = function() {
  	        deployCSV.post($scope.template);
        };
});